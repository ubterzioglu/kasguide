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
  } else {
    base.category = safeArr(base.category);
  }

  return base;
}

// Build one unified list: places + articles + faqspecial
function buildAllItems() {
  const places =
    (typeof allPlaces !== 'undefined' && Array.isArray(allPlaces))
      ? allPlaces.map((p) => normalizeItem(p, 'place'))
      : [];

  const articlesList =
    (typeof articles !== 'undefined' && Array.isArray(articles))
      ? articles.map((a) => normalizeItem(a, 'article'))
      : [];

  const faqs =
    (typeof faqspecialSeries !== 'undefined' && Array.isArray(faqspecialSeries))
      ? faqspecialSeries.map((f) => normalizeItem(f, 'faqspecial'))
      : [];

  allItems = [...places, ...articlesList, ...faqs];
  filteredItems = [...allItems];
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

  const stats = calculateStats(typeof allPlaces !== 'undefined' ? allPlaces : []);
  if (averageRatingEl) averageRatingEl.textContent = stats.avg;
}

function setActiveFilterText() {
  const activeCount = selectedCategories.size;
  const txt = `${activeCount} aktif filtre`;
  if (activeFilterCountEl) activeFilterCountEl.textContent = txt;
  if (activeFiltersCountEl) activeFiltersCountEl.textContent = String(activeCount);
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
  if (item.type === 'article') return `articles-selection.html?id=${encodeURIComponent(item.id)}`;
  if (item.type === 'faqspecial') return `faqspecial-selection.html?id=${encodeURIComponent(item.id)}`;
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
    const img = item.image || 'assets/0_img/placeholder.jpg';

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

  const s = calculateStats(filteredItems);
  if (averageRatingEl && filteredItems.length) averageRatingEl.textContent = s.avg;
  if (totalWordsEl) totalWordsEl.textContent = String(s.words);

  setActiveFilterText();
  updateFilterJumpVisibility();
}

// ---------- filtering ----------
function applyFilters() {
  let filtered = [...allItems];

  // category filter: item.category intersects selectedCategories
  if (selectedCategories.size > 0) {
    filtered = filtered.filter((it) =>
      safeArr(it.category).some((c) => selectedCategories.has(c))
    );
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
function initKasGuide() {
  buildAllItems();
  loadStats();
  renderCategories();
  applyFilters();
  updateFilterJumpVisibility();
}

document.addEventListener('DOMContentLoaded', initKasGuide);
