/**
 * TEMPLATE JAVASCRIPT
 *
 * This script handles:
 * - Data initialization and loading
 * - Search functionality
 * - Category filtering
 * - Items rendering
 * - Statistics calculation
 *
 * CUSTOMIZATION:
 * 1. Update renderItem() function to match your card design
 * 2. Modify filtering logic if needed
 * 3. Add custom event handlers
 * 4. Integrate with your API if using dynamic data
 */

// ==================== STATE MANAGEMENT ====================
let allItems = [];
let filteredItems = [];
let activeCategory = 'all';
let searchQuery = '';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  console.log('Template initialized');

  // Load data and initialize
  loadData();
  setupEventListeners();
  updateStats();
});

// ==================== DATA LOADING ====================
function loadData() {
  // Check if data is loaded
  if (!window.templateData || !Array.isArray(window.templateData)) {
    console.error('Template data not found or invalid');
    showError('Veri yüklenemedi');
    return;
  }

  allItems = window.templateData;
  filteredItems = [...allItems];

  console.log(`Loaded ${allItems.length} items`);

  // Initial render
  renderItems();
  updateCategoryCounts();
  updateStats();

  // Hide loading
  hideLoading();
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }

  // Clear search button
  const clearSearch = document.getElementById('clearSearch');
  if (clearSearch) {
    clearSearch.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      applyFilters();
    });
  }

  // Filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => handleCategoryFilter(btn));
  });

  // Reset filters button
  const resetFilters = document.getElementById('resetFilters');
  if (resetFilters) {
    resetFilters.addEventListener('click', resetAllFilters);
  }
}

// ==================== SEARCH ====================
function handleSearch(e) {
  searchQuery = e.target.value.toLowerCase().trim();

  // Debounce search for better performance
  clearTimeout(window.searchTimeout);
  window.searchTimeout = setTimeout(() => {
    applyFilters();
  }, 300);
}

function searchItems(items, query) {
  if (!query) return items;

  const config = window.templateConfig || {};
  const searchFields = config.searchFields || ['title', 'description'];

  return items.filter(item => {
    return searchFields.some(field => {
      const value = item[field];

      if (Array.isArray(value)) {
        // Search in array fields (like tags)
        return value.some(v => String(v).toLowerCase().includes(query));
      } else if (value) {
        // Search in string fields
        return String(value).toLowerCase().includes(query);
      }

      return false;
    });
  });
}

// ==================== FILTERING ====================
function handleCategoryFilter(button) {
  const category = button.dataset.category;

  // Update active state
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  button.classList.add('active');

  // Set active category
  activeCategory = category;

  // Apply filters
  applyFilters();
}

function applyFilters() {
  let items = [...allItems];

  // Apply category filter
  if (activeCategory && activeCategory !== 'all') {
    items = items.filter(item => {
      // Support both single category and multiple categories
      if (Array.isArray(item.categories)) {
        return item.categories.includes(activeCategory);
      }
      return item.category === activeCategory;
    });
  }

  // Apply search filter
  if (searchQuery) {
    items = searchItems(items, searchQuery);
  }

  // Sort items
  items = sortItems(items);

  filteredItems = items;

  // Update UI
  renderItems();
  updateStats();
}

function resetAllFilters() {
  // Reset category
  activeCategory = 'all';
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector('.filter-btn[data-category="all"]')?.classList.add('active');

  // Reset search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = '';
  }
  searchQuery = '';

  // Apply filters
  applyFilters();
}

// ==================== SORTING ====================
function sortItems(items) {
  const config = window.templateConfig || {};
  const sortBy = config.defaultSort || 'rating';
  const order = config.sortOrder || 'desc';

  const sorted = [...items].sort((a, b) => {
    // Featured items first if enabled
    if (config.showFeaturedFirst) {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
    }

    // Sort by specified field
    let comparison = 0;

    switch (sortBy) {
      case 'rating':
        comparison = (b.rating || 0) - (a.rating || 0);
        break;
      case 'title':
        comparison = (a.title || '').localeCompare(b.title || '', 'tr');
        break;
      case 'date':
        comparison = new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        break;
      default:
        comparison = 0;
    }

    return order === 'asc' ? -comparison : comparison;
  });

  return sorted;
}

// ==================== RENDERING ====================
function renderItems() {
  const grid = document.getElementById('itemsGrid');
  const noResults = document.getElementById('noResults');

  if (!grid) return;

  // Clear grid
  grid.innerHTML = '';

  // Show/hide no results message
  if (filteredItems.length === 0) {
    if (noResults) noResults.style.display = 'block';
    return;
  }

  if (noResults) noResults.style.display = 'none';

  // Render items
  filteredItems.forEach(item => {
    const card = renderItem(item);
    grid.appendChild(card);
  });
}

/**
 * CUSTOMIZE THIS FUNCTION
 * Modify the HTML structure to match your design
 */
function renderItem(item) {
  const card = document.createElement('div');
  card.className = 'item-card';
  card.dataset.id = item.id;

  // Get first image or placeholder
  const imageUrl = item.image || (item.images && item.images[0]) || '/assets/0_img/placeholder.jpg';

  // Build HTML
  card.innerHTML = `
    ${item.featured ? '<div class="item-badge">⭐ Öne Çıkan</div>' : ''}

    <img
      src="${imageUrl}"
      alt="${item.title}"
      class="item-image"
      onerror="this.src='/assets/0_img/placeholder.jpg'"
    >

    <div class="item-content">
      <h3 class="item-title">${item.title}</h3>

      <p class="item-description">${item.description || ''}</p>

      <div class="item-meta">
        ${item.rating ? `
          <div class="item-rating">
            <span>⭐</span>
            <span>${item.rating.toFixed(1)}</span>
          </div>
        ` : ''}

        ${item.category ? `
          <div class="item-category">${getCategoryName(item.category)}</div>
        ` : ''}
      </div>
    </div>
  `;

  // Add click handler
  card.addEventListener('click', () => handleItemClick(item));

  return card;
}

// ==================== ITEM CLICK ====================
function handleItemClick(item) {
  // Customize this function for your needs
  console.log('Item clicked:', item);

  // Example: Navigate to detail page
  // window.location.href = `/detail/${item.slug}`;

  // Example: Open modal
  // showItemModal(item);

  // Example: Log analytics
  // trackItemView(item.id);
}

// ==================== STATISTICS ====================
function updateStats() {
  // Update count displays
  updateElement('totalCount', allItems.length);
  updateElement('filteredCount', filteredItems.length);
  updateElement('categoryCount', getCategoryCount());

  // Calculate active filters
  let activeFilters = 0;
  if (activeCategory !== 'all') activeFilters++;
  if (searchQuery) activeFilters++;

  updateElement('activeFilters', activeFilters);
}

function updateCategoryCounts() {
  const categories = window.templateCategories || [];

  categories.forEach(cat => {
    let count;

    if (cat.slug === 'all') {
      count = allItems.length;
    } else {
      count = allItems.filter(item => {
        if (Array.isArray(item.categories)) {
          return item.categories.includes(cat.slug);
        }
        return item.category === cat.slug;
      }).length;
    }

    updateElement(`count-${cat.slug}`, count);
  });
}

function getCategoryCount() {
  const categories = window.templateCategories || [];
  return Math.max(0, categories.length - 1); // Exclude 'all' category
}

function getCategoryName(slug) {
  const categories = window.templateCategories || [];
  const category = categories.find(cat => cat.slug === slug);
  return category ? category.name : slug;
}

// ==================== UTILITIES ====================
function updateElement(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function showLoading() {
  const loading = document.getElementById('loading');
  if (loading) loading.style.display = 'block';
}

function hideLoading() {
  const loading = document.getElementById('loading');
  if (loading) loading.style.display = 'none';
}

function showError(message) {
  const grid = document.getElementById('itemsGrid');
  if (grid) {
    grid.innerHTML = `
      <div class="error-message">
        <div class="error-icon">⚠️</div>
        <h3>Bir hata oluştu</h3>
        <p>${message}</p>
      </div>
    `;
  }
  hideLoading();
}

// ==================== API INTEGRATION (Optional) ====================
/**
 * If you want to load data from an API instead of static data,
 * uncomment and customize this function
 */

/*
async function loadDataFromAPI() {
  showLoading();

  try {
    const response = await fetch('/api/your-endpoint');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Map API response to template format
    allItems = data.items || data;
    filteredItems = [...allItems];

    renderItems();
    updateCategoryCounts();
    updateStats();

  } catch (error) {
    console.error('Error loading data:', error);
    showError('Veriler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
  } finally {
    hideLoading();
  }
}
*/

// ==================== EXPORT FOR EXTERNAL USE ====================
window.TemplateApp = {
  getAllItems: () => allItems,
  getFilteredItems: () => filteredItems,
  applyFilters,
  resetFilters: resetAllFilters,
  renderItems,
  updateStats
};
