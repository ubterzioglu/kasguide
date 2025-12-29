// script.js - Database API Version
// Updated to load data from PostgreSQL database APIs

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
let isLoading = false;

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

// ========== API LOADING FUNCTIONS ==========

/**
 * Convert API place to match static data format
 */
function convertAPIPlace(apiPlace) {
  return {
    id: apiPlace.slug,
    title: apiPlace.title,
    description: apiPlace.description,
    longText: apiPlace.long_text,
    image: apiPlace.primary_image,
    images: apiPlace.images || [],
    category: apiPlace.categories || [],
    badgeId: apiPlace.badge_emoji ? apiPlace.badge_emoji : null,
    rating: apiPlace.rating,
    price: apiPlace.price,
    selected: apiPlace.selected,
    location: apiPlace.location,
    distance: apiPlace.distance,
    coordinates: {
      lat: apiPlace.coordinates_lat,
      lng: apiPlace.coordinates_lng
    },
    phone: apiPlace.phone,
    website: apiPlace.website,
    instagram: apiPlace.instagram,
    booking: apiPlace.booking_url,
    googleMapsQuery: apiPlace.google_maps_query,
    duration: apiPlace.duration,
    access: apiPlace.access_info,
    facilities: apiPlace.facilities || [],
    features: apiPlace.features || [],
    tags: apiPlace.tags || [],
    trust: {
      verified: apiPlace.verified,
      infoDate: apiPlace.info_date,
      disclaimer: apiPlace.disclaimer
    }
  };
}

/**
 * Convert API article to match static format
 */
function convertAPIArticle(apiArticle) {
  return {
    id: apiArticle.slug,
    title: apiArticle.title,
    description: apiArticle.description,
    longText: apiArticle.content,
    author: apiArticle.author,
    readTime: apiArticle.read_time,
    image: apiArticle.featured_image,
    tags: apiArticle.tags || []
  };
}

/**
 * Convert API FAQ series to match static format
 */
function convertAPIFaqSeries(apiFaq) {
  return {
    id: apiFaq.slug,
    title: apiFaq.title,
    description: apiFaq.description,
    longText: apiFaq.content,
    image: apiFaq.featured_image
  };
}

/**
 * Load places from API
 */
async function loadPlacesFromAPI() {
  try {
    const response = await fetch('/api/places');
    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const data = await response.json();
    return (data.places || []).map(convertAPIPlace);
  } catch (error) {
    console.error('Error loading places:', error);
    return [];
  }
}

/**
 * Load articles from API
 */
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

/**
 * Load FAQ series from API
 */
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

/**
 * Load hotels from API (optional - if you want to include them)
 */
async function loadHotelsFromAPI() {
  try {
    const response = await fetch('/api/hotels');
    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const data = await response.json();
    // Hotels can be treated similar to places
    return (data.hotels || []).map(hotel => ({
      id: hotel.slug,
      title: hotel.title,
      description: hotel.description,
      longText: hotel.long_text,
      image: hotel.primary_image,
      images: hotel.images || [],
      category: ['accommodation'],
      type: 'hotel',
      hotelType: hotel.hotel_type,
      rating: hotel.rating,
      facilities: hotel.facilities || [],
      tags: hotel.tags || []
    }));
  } catch (error) {
    console.error('Error loading hotels:', error);
    return [];
  }
}

/**
 * Load pets from API (optional)
 */
async function loadPetsFromAPI() {
  try {
    const response = await fetch('/api/pets');
    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const data = await response.json();
    return (data.pets || []).map(pet => ({
      id: `pet-${pet.id}`,
      title: `${pet.pet_type} - ${pet.breed}`,
      description: pet.short_note,
      longText: pet.extra_notes,
      image: pet.photos && pet.photos[0] ? pet.photos[0] : null,
      images: pet.photos || [],
      category: ['pets'],
      type: 'pet',
      petType: pet.pet_type,
      age: pet.age,
      breed: pet.breed
    }));
  } catch (error) {
    console.error('Error loading pets:', error);
    return [];
  }
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
    base.category = ['accommodation'];
  } else if (type === 'pet') {
    base.category = ['pets'];
  } else {
    base.category = safeArr(base.category);
  }

  return base;
}

// Build unified list from API
async function buildAllItems() {
  isLoading = true;
  showLoading();

  try {
    // Load all data in parallel
    const [
      placesData,
      articlesData,
      faqSeriesData,
      hotelsData,
      petsData
    ] = await Promise.all([
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

    allItems = [...places, ...hotels, ...pets, ...articlesList, ...faqs];
    filteredItems = [...allItems];

    isLoading = false;
    return allItems;

  } catch (error) {
    console.error('Error building items:', error);
    isLoading = false;
    showError('Veriler yüklenirken hata oluştu.');
    return [];
  }
}

// Show loading state
function showLoading() {
  if (cardsGrid) {
    cardsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <div style="font-size: 48px; margin-bottom: 20px;">⏳</div>
        <p style="font-size: 18px; color: #666;">Mekanlar yükleniyor...</p>
      </div>
    `;
  }
}

// Show error state
function showError(message) {
  if (cardsGrid) {
    cardsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <div style="font-size: 48px; margin-bottom: 20px;">❌</div>
        <p style="font-size: 18px; color: #666;">${message}</p>
        <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Tekrar Dene
        </button>
      </div>
    `;
  }
}

// Stats helpers
function calculateStats(list) {
  const items = safeArr(list);
  const total = items.length;

  const withRatings = items.filter((it) => typeof it.rating === 'number' && it.rating > 0);
  const avgRating = withRatings.length > 0
    ? (withRatings.reduce((sum, it) => sum + it.rating, 0) / withRatings.length).toFixed(1)
    : 0;

  const allCats = new Set();
  items.forEach((it) => safeArr(it.category).forEach((c) => allCats.add(c)));
  const totalCats = allCats.size;

  const totalWords = items.reduce((sum, it) => {
    const desc = (it.description || '') + ' ' + (it.longText || '');
    return sum + desc.split(/\s+/).length;
  }, 0);

  return { total, avgRating, totalCats, totalWords };
}

function loadStats() {
  const stats = calculateStats(allItems);

  if (totalPlacesEl) totalPlacesEl.textContent = stats.total;
  if (totalCategoriesEl) totalCategoriesEl.textContent = stats.totalCats;
  if (averageRatingEl) averageRatingEl.textContent = stats.avgRating;
  if (totalWordsEl) totalWordsEl.textContent = stats.totalWords.toLocaleString();

  if (miniTotalPlacesEl) miniTotalPlacesEl.textContent = stats.total;
  if (miniTotalCategoriesEl) miniTotalCategoriesEl.textContent = stats.totalCats;
}

function updateStats() {
  const activeCount = selectedCategories.size;
  const shown = filteredItems.length;

  if (miniShownEl) miniShownEl.textContent = shown;
  if (miniActiveFiltersEl) miniActiveFiltersEl.textContent = activeCount;

  if (activeFiltersCountEl) activeFiltersCountEl.textContent = activeCount;
  if (filteredCountBigEl) filteredCountBigEl.textContent = shown;
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

    // Count: don't show count for page actions
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
function renderCards() {
  if (!cardsGrid) return;

  if (filteredItems.length === 0) {
    cardsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <div style="font-size: 48px; margin-bottom: 20px;">🔍</div>
        <p style="font-size: 18px; color: #666;">Filtrelerinize uygun sonuç bulunamadı.</p>
        <button onclick="document.getElementById('clearFilters').click()" style="margin-top: 20px; padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Filtreleri Temizle
        </button>
      </div>
    `;
    return;
  }

  const html = filteredItems
    .map((item) => {
      const badge = item.badgeId
        ? `<span class="item-badge">${item.badgeId}</span>`
        : '';

      const rating = item.rating
        ? `<div class="item-rating">⭐ ${item.rating}</div>`
        : '';

      const price = item.price
        ? `<div class="item-price">${item.price}</div>`
        : '';

      const distance = item.distance
        ? `<div class="item-distance">📍 ${item.distance}</div>`
        : '';

      return `
        <div class="card">
          <div class="card-image">
            <img src="${item.image || '../assets/0_img/placeholder.jpg'}" alt="${item.title}" loading="lazy">
            ${badge}
          </div>
          <div class="card-content">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-description">${item.description || ''}</p>
            <div class="card-meta">
              ${rating}
              ${price}
              ${distance}
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  cardsGrid.innerHTML = html;
}

// ---------- filtering ----------
function applyFilters() {
  let filtered = [...allItems];

  const hasArticles = selectedCategories.has('articles');
  if (hasArticles) {
    const otherCats = new Set([...selectedCategories].filter((c) => c !== 'articles'));

    const articleItems = filtered.filter((it) => it.type === 'article');

    let otherItems = [];
    if (otherCats.size > 0) {
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
  try {
    await buildAllItems();
    loadStats();
    renderCategories();
    applyFilters();
    updateFilterJumpVisibility();
  } catch (error) {
    console.error('Init error:', error);
    showError('Uygulama başlatılamadı.');
  }
}

document.addEventListener('DOMContentLoaded', initKasGuide);
