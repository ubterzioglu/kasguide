// script.js

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isActive = mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active', isActive);
    const menuText = menuToggle.querySelector('.menu-text');
    if (menuText) {
      menuText.textContent = isActive ? 'Menüyü Kapat' : 'Menü';
    }
  });
}

// State
let selectedCategories = new Set();
let searchQuery = '';
let allItems = [];
let filteredItems = [];

// DOM
const categoriesGrid = document.getElementById('categoriesGrid');
const cardsGrid = document.getElementById('cardsGrid');
const searchInput = document.getElementById('searchInput');
const clearFiltersBtn = document.getElementById('clearFilters');
const activeFilterCountEl = document.getElementById('activeFilterCount');

const totalPlacesEl = document.getElementById('totalPlaces');
const totalCategoriesEl = document.getElementById('totalCategories');
const averageRatingEl = document.getElementById('averageRating');
const totalWordsEl = document.getElementById('totalWords');
const activeFiltersCountEl = document.getElementById('activeFiltersCount');
const filteredCountBigEl = document.getElementById('filteredCountBig');

const miniTotalPlacesEl = document.getElementById('miniTotalPlaces');
const miniTotalCategoriesEl = document.getElementById('miniTotalCategories');
const miniShownEl = document.getElementById('miniShown');
const miniActiveFiltersEl = document.getElementById('miniActiveFilters');

const filterJumpBtn = document.getElementById('filterJump');

function updateFilterJumpVisibility() {
  if (!filterJumpBtn) return;
  const visible = selectedCategories.size > 0 || (searchQuery || '').trim().length > 0;
  filterJumpBtn.classList.toggle('is-visible', visible);
}

function scrollToCategories() {
  const el = document.getElementById('categories');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

if (filterJumpBtn) {
  filterJumpBtn.addEventListener('click', scrollToCategories);
}

// ---------- helpers ----------
function safeArr(x) {
  return Array.isArray(x) ? x : [];
}

function normalizeItem(item, type) {
  const base = { ...item };
  base.type = type;

  // IMPORTANT: category always array
  if (type === 'place') {
    base.category = safeArr(base.category);
  } else if (type === 'article') {
    base.category = ['articles'];
  } else if (type === 'interview') {
    base.category = ['interviews'];
  } else if (type === 'faqspecial') {
    base.category = ['faqspecial'];
  } else if (type === 'hotel') {
    // Hotels: keep existing categories and add 'hotels' for filtering
    const existingCats = safeArr(base.category);
    if (!existingCats.includes('hotels')) {
      base.category = [...existingCats, 'hotels'];
    } else {
      base.category = existingCats;
    }
  } else if (type === 'pet') {
    // Pets: keep existing categories and add 'pets' for filtering
    const existingCats = safeArr(base.category);
    if (!existingCats.includes('pets')) {
      base.category = [...existingCats, 'pets'];
    } else {
      base.category = existingCats;
    }
  } else {
    base.category = safeArr(base.category);
  }

  return base;
}

// ========== API LOADING FUNCTIONS ==========

async function loadPlacesFromAPI() {
  try {
    const response = await fetch('/api/items?type=place');
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    return (data.items || []).map(convertAPIPlace);
  } catch (error) {
    console.error('Error loading places:', error);
    return [];
  }
}

async function loadArticlesFromAPI() {
  try {
    const response = await fetch('/api/articles');
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    return (data.articles || []).map(convertAPIArticle);
  } catch (error) {
    console.error('Error loading articles:', error);
    return [];
  }
}

async function loadFaqSeriesFromAPI() {
  try {
    const response = await fetch('/api/faqspecial');
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    return (data.faqSeries || []).map(convertAPIFaqSeries);
  } catch (error) {
    console.error('Error loading FAQ series:', error);
    return [];
  }
}

async function loadHotelsFromAPI() {
  try {
    const response = await fetch('/api/items?type=hotel');
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    return (data.items || []).map(convertAPIHotel);
  } catch (error) {
    console.error('Error loading hotels:', error);
    return [];
  }
}

async function loadPetsFromAPI() {
  try {
    const response = await fetch('/api/items?type=pet');
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    return (data.items || []).map(convertAPIPet);
  } catch (error) {
    console.error('Error loading pets:', error);
    return [];
  }
}

async function loadInterviewsFromAPI() {
  try {
    const response = await fetch('/api/interviews');
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    return (data.interviews || []).map(convertAPIInterview);
  } catch (error) {
    console.error('Error loading interviews:', error);
    return [];
  }
}

// Convert unified items API data to match static data format
function convertAPIPlace(apiData) {
  const attrs = apiData.attributes || {};

  // Parse photos - may come as string (JSONB) or already parsed array
  let photos = apiData.photos || [];
  if (typeof photos === 'string') {
    try {
      photos = JSON.parse(photos);
    } catch (e) {
      console.warn('Failed to parse photos for', apiData.title, e);
      photos = [];
    }
  }
  if (!Array.isArray(photos)) {
    photos = [];
  }

  // Extract image URLs - handle both object {url: "..."} and string formats
  const imageUrls = photos.map(p => {
    if (typeof p === 'string') return p;
    return p.url || p;
  }).filter(url => url);

  // Get placeholder status
  const isPlaceholder = photos.length > 0 && photos[0].placeholder === true;

  return {
    id: apiData.id,
    title: apiData.title,
    description: apiData.description,
    longText: apiData.long_text,
    category: attrs.categories || [],
    images: imageUrls,
    image: imageUrls[0] || null,  // Single image for cards
    isPlaceholder: isPlaceholder,
    rating: attrs.rating || '',
    price: attrs.price || '',
    duration: attrs.duration || '',
    distance: attrs.distance || '',
    badge: apiData.badge ? { emoji: apiData.badge.emoji, title: apiData.badge.title } : null,
    tags: attrs.tags || []
  };
}

function convertAPIArticle(apiData) {
  const attrs = apiData.attributes || {};
  const photos = apiData.photos || [];
  const primaryPhoto = photos.find(p => p.is_primary) || photos[0] || null;

  return {
    id: apiData.id,
    title: apiData.title,
    description: apiData.description || '',
    content: apiData.long_text || '',
    longText: apiData.long_text || '',
    category: ['articles'],
    image: primaryPhoto ? primaryPhoto.url : null,
    images: Array.isArray(photos) ? photos.map(p => p.url || p).filter(Boolean) : [],
    tags: attrs.tags || [],
    author: attrs.author || 'Kaş Guide',
    readTime: attrs.readTime || ''
  };
}

function convertAPIInterview(apiData) {
  const attrs = apiData.attributes || {};
  const photos = apiData.photos || [];
  const primaryPhoto = photos.find(p => p.is_primary) || photos[0] || null;

  return {
    id: apiData.id,
    title: apiData.title,
    description: apiData.description || '',
    content: apiData.long_text || '',
    longText: apiData.long_text || '',
    category: ['interviews'],
    image: primaryPhoto ? primaryPhoto.url : null,
    images: Array.isArray(photos) ? photos.map(p => p.url || p).filter(Boolean) : [],
    tags: attrs.tags || [],
    interviewee: attrs.interviewee || '',
    interviewer: attrs.interviewer || 'Kaş Guide',
    date: attrs.date || ''
  };
}

function convertAPIFaqSeries(apiData) {
  return {
    id: apiData.id,
    title: apiData.title,
    description: apiData.description,
    category: ['faqspecial'],
    faqs: apiData.faqs || []
  };
}

function convertAPIHotel(apiData) {
  const attrs = apiData.attributes || {};

  // Parse photos - may come as string (JSONB) or already parsed array
  let photos = apiData.photos || [];
  if (typeof photos === 'string') {
    try {
      photos = JSON.parse(photos);
    } catch (e) {
      console.warn('Failed to parse photos for', apiData.title, e);
      photos = [];
    }
  }
  if (!Array.isArray(photos)) {
    photos = [];
  }

  // Extract image URLs
  const imageUrls = photos.map(p => {
    if (typeof p === 'string') return p;
    return p.url || p;
  }).filter(url => url);

  const isPlaceholder = photos.length > 0 && photos[0].placeholder === true;

  return {
    id: apiData.id,
    title: apiData.title,
    description: apiData.description,
    category: attrs.categories || [],
    images: imageUrls,
    image: imageUrls[0] || null,
    isPlaceholder: isPlaceholder,
    rating: attrs.rating || '',
    facilities: attrs.facilities || []
  };
}

function convertAPIPet(apiData) {
  const attrs = apiData.attributes || {};

  // Parse photos - may come as string (JSONB) or already parsed array
  let photos = apiData.photos || [];
  if (typeof photos === 'string') {
    try {
      photos = JSON.parse(photos);
    } catch (e) {
      console.warn('Failed to parse photos for', apiData.title, e);
      photos = [];
    }
  }
  if (!Array.isArray(photos)) {
    photos = [];
  }

  // Extract image URLs
  const imageUrls = photos.map(p => {
    if (typeof p === 'string') return p;
    return p.url || p;
  }).filter(url => url);

  const isPlaceholder = photos.length > 0 && photos[0].placeholder === true;

  return {
    id: apiData.id,
    title: apiData.title,
    description: apiData.description,
    category: attrs.categories || [],
    images: imageUrls,
    image: imageUrls[0] || null,
    isPlaceholder: isPlaceholder
  };
}

// Build one unified list: places + articles + interviews + faqspecial + hotels + pets
async function buildAllItems() {
  try {
    // Load all data in parallel
    const [placesData, articlesData, interviewsData, faqSeriesData, hotelsData, petsData] = await Promise.all([
      loadPlacesFromAPI(),
      loadArticlesFromAPI(),
      loadInterviewsFromAPI(),
      loadFaqSeriesFromAPI(),
      loadHotelsFromAPI(),
      loadPetsFromAPI()
    ]);

    console.log('📊 Raw data loaded:', {
      places: placesData.length,
      articles: articlesData.length,
      interviews: interviewsData.length,
      faqs: faqSeriesData.length,
      hotels: hotelsData.length,
      pets: petsData.length
    });

    const places = placesData.map((p) => normalizeItem(p, 'place'));
    const articlesList = articlesData.map((a) => normalizeItem(a, 'article'));
    const interviewsList = interviewsData.map((i) => normalizeItem(i, 'interview'));
    const faqs = faqSeriesData.map((f) => normalizeItem(f, 'faqspecial'));
    const hotels = hotelsData.map((h) => normalizeItem(h, 'hotel'));
    const pets = petsData.map((p) => normalizeItem(p, 'pet'));

    console.log('🔍 Sample article:', articlesList[0]);
    console.log('🔍 Sample interview:', interviewsList[0]);

    allItems = [...places, ...articlesList, ...interviewsList, ...faqs, ...hotels, ...pets];
    filteredItems = [...allItems];

    console.log(`✅ Loaded ${allItems.length} items from database (${articlesList.length} articles, ${interviewsList.length} interviews)`);
  } catch (error) {
    console.error('Error building items:', error);
    allItems = [];
    filteredItems = [];
  }
}

// Stats helpers
function calculateStats(list) {
  const items = safeArr(list);
  const total = items.length;

  const avg = total
    ? (items.reduce((sum, p) => sum + (Number(p.rating) || 0), 0) / total).toFixed(1)
    : '0.0';

  const words = items.reduce((sum, p) => {
    const text = [p?.title, p?.description, p?.longText].filter(Boolean).join(' ');
    const count = String(text).trim().split(/\s+/).filter(Boolean).length;
    return sum + (isFinite(count) ? count : 0);
  }, 0);

  return { total, avg, words };
}

function loadStats() {
  // Get total items from database (allItems includes: places, articles, faqspecial, hotels, pets)
  const totalItems = Array.isArray(allItems) ? allItems.length : 0;

  const totalCats =
    (typeof categories !== 'undefined' && Array.isArray(categories)) ? categories.length : 0;

  // Calculate total content: FAQ questions (500) + Database items (allItems)
  const faqCount = 500; // From faq/faq-list-data.js
  const totalContent = faqCount + totalItems;

  // Use total content count
  if (totalPlacesEl) totalPlacesEl.textContent = String(totalContent);
  if (totalCategoriesEl) totalCategoriesEl.textContent = String(totalCats);
  if (miniTotalPlacesEl) miniTotalPlacesEl.textContent = String(totalContent);
  if (miniTotalCategoriesEl) miniTotalCategoriesEl.textContent = String(totalCats);

  // Calculate average rating from places only
  const places = allItems.filter(item => item.type === 'place');
  const stats = calculateStats(places);
  if (averageRatingEl) averageRatingEl.textContent = stats.avg;
}

function setActiveFilterText() {
  const activeCount = selectedCategories.size;
  const txt = `${activeCount} aktif filtre`;
  if (activeFilterCountEl) activeFilterCountEl.textContent = txt;
  if (activeFiltersCountEl) activeFiltersCountEl.textContent = String(activeCount);
  if (miniActiveFiltersEl) miniActiveFiltersEl.textContent = String(activeCount);
}

// ---------- render categories ----------
function renderCategories() {
  if (!categoriesGrid) return;
  categoriesGrid.innerHTML = '';

  categories.forEach((category) => {
    const btn = document.createElement('button');
    btn.className = `category-card ${category.color}`;

    const isPage = category?.action?.type === 'page' && !!category?.action?.href;

    if (!isPage && selectedCategories.has(category.id)) {
      btn.classList.add('active');
    }

    // Count: page action olanlara count basma
    let count = '';
    if (!isPage) {
      count = String(allItems.filter((it) => safeArr(it.category).includes(category.id)).length);
    }

    btn.innerHTML = `
      <span class="category-check" aria-hidden="true">✓</span>
      <div class="category-icon">${category.icon}</div>
      <span class="category-name">${category.name}</span>
      ${isPage ? '' : `<span class="category-count">${count}</span>`}
    `;

    btn.addEventListener('click', () => {
      if (isPage) {
        window.location.href = category.action.href;
        return;
      }

      if (selectedCategories.has(category.id)) selectedCategories.delete(category.id);
      else selectedCategories.add(category.id);

      renderCategories();
      applyFilters();
    });

    categoriesGrid.appendChild(btn);
  });

  setActiveFilterText();
  updateFilterJumpVisibility();
}

// ---------- render cards ----------
function getItemHref(item) {
  // Paths relative to index.html in root directory
  if (item.type === 'article') return `articles/articles.html?id=${encodeURIComponent(item.id)}`;
  if (item.type === 'interview') return `interviews/interviews.html?id=${encodeURIComponent(item.id)}`;
  if (item.type === 'faqspecial') return `faqspecial/faqspecial.html?id=${encodeURIComponent(item.id)}`;
  if (item.type === 'hotel') return `hotelsoon.html`; // Hotel detail pages coming soon
  if (item.type === 'pet') return `pet/pet2.html?id=${encodeURIComponent(item.id)}`;
  return `places/places.html?id=${encodeURIComponent(item.id)}`;
}

function renderCards() {
  if (!cardsGrid) return;
  cardsGrid.innerHTML = '';

  if (!filteredItems.length) {
    cardsGrid.innerHTML = `
      <div class="no-results">
        <h3>Sonuç bulunamadı</h3>
        <p>Arama kriterlerinize uygun içerik bulunamadı. Filtreleri temizlemeyi deneyin.</p>
      </div>
    `;
    return;
  }

  filteredItems.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card-item fade-in slide-up';

    const mainCategory = safeArr(item.category)[0];
    const categoryObj = categories.find((c) => c.id === mainCategory);
    const badgeColor = categoryObj ? categoryObj.color.replace('category-', '') : 'blue';

    const href = getItemHref(item);
    const isArticle = item.type === 'article';
    const img = item.image || (isArticle ? 'assets/0_img/article-placeholder.jpg' : 'assets/0_img/placeholder.jpg');

    // Simple placeholder template for articles (can be improved later)
    if (isArticle) {
      card.className = 'card card-article';
      const readTime = item.readTime || item.duration || '';
      const author = item.author || '';
      card.innerHTML = `
        <div class="card-image-wrapper">
          <img src="${img}" alt="${item.title || ''}" class="card-image" loading="lazy" width="400" height="300" style="aspect-ratio: 4/3; object-fit: cover;">
          <div class="card-badge card-badge-article">Yazı</div>
        </div>

        <div class="card-content">
          <h3 class="card-title">
            <a class="card-title-link" href="${href}">${item.title || ''}</a>
          </h3>
          <p class="card-description">${item.description || ''}</p>

          <div class="card-meta article-meta">
            ${author ? `<div class="meta-item"><span>✍️ ${author}</span></div>` : ''}
            ${readTime ? `<div class="meta-item"><span>⏱️ ${readTime}</span></div>` : ''}
          </div>

          <div class="card-actions">
            <a class="card-detail" href="${href}">Oku</a>
          </div>
        </div>
      `;
    } else {
      card.className = 'card';
      card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${img}" alt="${item.title || ''}" class="card-image" loading="lazy">
        <div class="card-badge" style="background: var(--primary-${badgeColor})">
          ${safeArr(item.category)
            .map((cat) => (categories.find((c) => c.id === cat)?.name) || cat)
            .slice(0, 2)
            .join(', ')}
        </div>
      </div>

      <div class="card-content">
        <h4 class="card-title">
          <a class="card-title-link" href="${href}">${item.title || ''}</a>
        </h4>
        <p class="card-description">${item.description || ''}</p>

        <div class="card-footer">
          <button type="button" class="card-badge-emoji"
                  data-tooltip="${item.badge && item.badge.title ? item.badge.title : 'Turist Dostu'}"
                  data-desc="${item.badge && item.badge.description ? item.badge.description : ''}"
                  aria-label="${item.badge && item.badge.title ? item.badge.title : 'Turist Dostu'}">
            ${item.badge && item.badge.emoji ? item.badge.emoji : '🎒'}
          </button>
          <div class="badge-tooltip"></div>
        </div>
      </div>
    `;
    }

    card.addEventListener('click', (e) => {
      if (e.target.closest('a') || e.target.closest('.card-badge-emoji')) return;
      window.location.href = href;
    });

    // Badge tooltip functionality
    const badgeBtn = card.querySelector('.card-badge-emoji');
    const tooltipDiv = card.querySelector('.badge-tooltip');

    if (badgeBtn && tooltipDiv) {
      const isTouch = window.matchMedia && window.matchMedia("(hover: none)").matches;

      if (isTouch) {
        // Mobile: click to toggle
        badgeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isOpen = badgeBtn.classList.contains('is-open');

          // Close all other tooltips
          document.querySelectorAll('.card-badge-emoji.is-open').forEach(btn => {
            if (btn !== badgeBtn) {
              btn.classList.remove('is-open');
              btn.nextElementSibling?.classList.remove('show');
            }
          });

          if (!isOpen) {
            badgeBtn.classList.add('is-open');
            tooltipDiv.classList.add('show');
            const title = badgeBtn.getAttribute('data-tooltip') || '';
            const desc = badgeBtn.getAttribute('data-desc') || '';
            tooltipDiv.innerHTML = desc ? `<strong>${title}</strong><br>${desc}` : title;
          } else {
            badgeBtn.classList.remove('is-open');
            tooltipDiv.classList.remove('show');
          }
        });
      } else {
        // Desktop: hover
        badgeBtn.addEventListener('mouseenter', () => {
          const title = badgeBtn.getAttribute('data-tooltip') || '';
          const desc = badgeBtn.getAttribute('data-desc') || '';
          tooltipDiv.innerHTML = desc ? `<strong>${title}</strong><br>${desc}` : title;
          tooltipDiv.classList.add('show');
        });

        badgeBtn.addEventListener('mouseleave', () => {
          tooltipDiv.classList.remove('show');
        });
      }
    }

    cardsGrid.appendChild(card);
  });
}

function updateStats() {
  const count = String(filteredItems.length);
  if (filteredCountBigEl) filteredCountBigEl.textContent = count;
  if (miniShownEl) miniShownEl.textContent = count;

  const s = calculateStats(filteredItems);
  if (averageRatingEl && filteredItems.length) averageRatingEl.textContent = s.avg;
  if (totalWordsEl) totalWordsEl.textContent = String(s.words);

  setActiveFilterText();
  updateFilterJumpVisibility();
}

// ---------- filtering ----------
function applyFilters() {
  let filtered = [...allItems];

  const hasArticles = selectedCategories.has('articles');
  const hasHotels = selectedCategories.has('hotels');
  const hasPets = selectedCategories.has('pets');

  // Special handling for articles, hotels, and pets (type-based filtering)
  if (hasArticles || hasHotels || hasPets) {
    const specialCats = new Set();
    if (hasArticles) specialCats.add('articles');
    if (hasHotels) specialCats.add('hotels');
    if (hasPets) specialCats.add('pets');

    // Get items by type for special categories
    const specialItems = filtered.filter((it) => {
      if (hasArticles && it.type === 'article') return true;
      if (hasHotels && it.type === 'hotel') return true;
      if (hasPets && it.type === 'pet') return true;
      return false;
    });

    // Get other selected categories (excluding special ones)
    const otherCats = new Set([...selectedCategories].filter((c) => !specialCats.has(c)));

    let otherItems = [];
    if (otherCats.size > 0) {
      // Keep the existing OR behavior for non-special items
      otherItems = filtered.filter((it) => {
        const isSpecial = (hasArticles && it.type === 'article') ||
                         (hasHotels && it.type === 'hotel') ||
                         (hasPets && it.type === 'pet');
        return !isSpecial && safeArr(it.category).some((c) => otherCats.has(c));
      });
    }

    filtered = [...specialItems, ...otherItems];
  } else {
    // category filter: item.category intersects selectedCategories (OR behavior)
    if (selectedCategories.size > 0) {
      filtered = filtered.filter((it) =>
        safeArr(it.category).some((c) => selectedCategories.has(c))
      );
    }
  }


  // search
  if ((searchQuery || '').trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter((it) => {
      const inTitle = (it.title || '').toLowerCase().includes(q);
      const inDesc = (it.description || '').toLowerCase().includes(q);
      const inTags = Array.isArray(it.tags) && it.tags.some((t) => (t || '').toLowerCase().includes(q));
      return inTitle || inDesc || inTags;
    });
  }

  filteredItems = filtered;
  renderCards();
  updateStats();
}

// Events
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    applyFilters();
  });
}

if (clearFiltersBtn) {
  clearFiltersBtn.addEventListener('click', () => {
    selectedCategories.clear();
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    renderCategories();
    applyFilters();
  });
}

// Init
async function initKasGuide() {
  console.log('🚀 Initializing Kaş Guide...');

  // Show loading state
  if (cardsGrid) {
    cardsGrid.innerHTML = '<div style="text-align: center; padding: 3rem; font-size: 1.2rem;">📡 Veriler yükleniyor...</div>';
  }

  await buildAllItems();
  loadStats();
  renderCategories();
  applyFilters();
  updateFilterJumpVisibility();

  console.log('✅ Kaş Guide initialized successfully!');
}

document.addEventListener('DOMContentLoaded', initKasGuide);
