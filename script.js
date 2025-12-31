// script.js

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('active'));
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
  } else if (type === 'faqspecial') {
    base.category = ['faqspecial'];
  } else if (type === 'hotel') {
    base.category = safeArr(base.category);
  } else if (type === 'pet') {
    base.category = safeArr(base.category);
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

  return {
    id: apiData.id,
    title: apiData.title,
    description: apiData.description,
    longText: apiData.long_text,
    category: attrs.categories || [],
    images: photos.map(p => typeof p === 'string' ? p : (p.url || p)),
    image: photos.length > 0 ? (typeof photos[0] === 'string' ? photos[0] : (photos[0].url || photos[0])) : null,
    isPlaceholder: photos.length > 0 && photos[0].placeholder === true,
    rating: attrs.rating || '',
    price: attrs.price || '',
    duration: attrs.duration || '',
    distance: attrs.distance || '',
    badge: apiData.badge ? { emoji: apiData.badge.emoji, title: apiData.badge.title } : null,
    tags: attrs.tags || []
  };
}

function convertAPIArticle(apiData) {
  return {
    id: apiData.id,
    title: apiData.title,
    description: apiData.content ? apiData.content.substring(0, 200) : '',
    content: apiData.content,
    category: ['articles'],
    images: apiData.images || [],
    tags: apiData.tags || []
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
      photos = [];
    }
  }
  if (!Array.isArray(photos)) {
    photos = [];
  }

  return {
    id: apiData.id,
    title: apiData.title,
    description: apiData.description,
    category: attrs.categories || [],
    images: photos.map(p => typeof p === 'string' ? p : (p.url || p)),
    image: photos.length > 0 ? (typeof photos[0] === 'string' ? photos[0] : (photos[0].url || photos[0])) : null,
    isPlaceholder: photos.length > 0 && photos[0].placeholder === true,
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
      photos = [];
    }
  }
  if (!Array.isArray(photos)) {
    photos = [];
  }

  return {
    id: apiData.id,
    title: apiData.title,
    description: apiData.description,
    category: attrs.categories || [],
    images: photos.map(p => typeof p === 'string' ? p : (p.url || p)),
    image: photos.length > 0 ? (typeof photos[0] === 'string' ? photos[0] : (photos[0].url || photos[0])) : null,
    isPlaceholder: photos.length > 0 && photos[0].placeholder === true
  };
}

// Build one unified list: places + articles + faqspecial + hotels + pets
async function buildAllItems() {
  try {
    // Load all data in parallel
    const [placesData, articlesData, faqSeriesData, hotelsData, petsData] = await Promise.all([
      loadPlacesFromAPI(),
      loadArticlesFromAPI(),
      loadFaqSeriesFromAPI(),
      loadHotelsFromAPI(),
      loadPetsFromAPI()
    ]);

    const places = placesData.map((p) => normalizeItem(p, 'place'));
    const articlesList = articlesData.map((a) => normalizeItem(a, 'article'));
    const faqs = faqSeriesData.map((f) => normalizeItem(f, 'faqspecial'));
    const hotels = hotelsData.map((h) => normalizeItem(h, 'hotel'));
    const pets = petsData.map((p) => normalizeItem(p, 'pet'));

    allItems = [...places, ...articlesList, ...faqs, ...hotels, ...pets];
    filteredItems = [...allItems];

    console.log(`✅ Loaded ${allItems.length} items from database`);
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
  const totalPlaces =
    (typeof allPlaces !== 'undefined' && Array.isArray(allPlaces)) ? allPlaces.length : 0;

  const totalCats =
    (typeof categories !== 'undefined' && Array.isArray(categories)) ? categories.length : 0;

  if (totalPlacesEl) totalPlacesEl.textContent = String(totalPlaces);
  if (totalCategoriesEl) totalCategoriesEl.textContent = String(totalCats);
  if (miniTotalPlacesEl) miniTotalPlacesEl.textContent = String(totalPlaces);
  if (miniTotalCategoriesEl) miniTotalCategoriesEl.textContent = String(totalCats);

  const stats = calculateStats(typeof allPlaces !== 'undefined' ? allPlaces : []);
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
  // mevcut yapına göre path’leri aynı bıraktım
  if (item.type === 'article') return `../articles/articles.html?id=${encodeURIComponent(item.id)}`;
  if (item.type === 'faqspecial') return `../faqspecial/faqspecial.html?id=${encodeURIComponent(item.id)}`;
  return `../places/places.html?id=${encodeURIComponent(item.id)}`;
}

function renderCards() {
  if (!cardsGrid) return;
  cardsGrid.innerHTML = '';

  if (!filteredItems.length) {
    cardsGrid.innerHTML = `
      <div class="no-results">
        <h4>Sonuç bulunamadı</h4>
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
          <img src="${img}" alt="${item.title || ''}" class="card-image" loading="lazy">
          <div class="card-badge card-badge-article">Yazı</div>
        </div>

        <div class="card-content">
          <h4 class="card-title">
            <a class="card-title-link" href="${href}">${item.title || ''}</a>
          </h4>
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

        <div class="card-meta">
          <div class="meta-item">
            <svg class="meta-icon star-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span>${item.rating || ''}</span>
          </div>

          <div class="meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>${item.duration || item.distance || ''}</span>
          </div>

          <div class="meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
              <line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
            <span>${item.price || ''}</span>
          </div>
        </div>

        <div class="card-actions">
          <a class="card-detail" href="${href}">Detay</a>
        </div>
      </div>
    `;
    }

    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      window.location.href = href;
    });

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
  if (hasArticles) {
    // Articles are always included when "articles" filter is active.
    const otherCats = new Set([...selectedCategories].filter((c) => c !== 'articles'));

    const articleItems = filtered.filter((it) => it.type === 'article');

    let otherItems = [];
    if (otherCats.size > 0) {
      // Keep the existing OR behavior for non-article items
      otherItems = filtered.filter((it) =>
        it.type !== 'article' && safeArr(it.category).some((c) => otherCats.has(c))
      );
    }

    filtered = [...articleItems, ...otherItems];
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
