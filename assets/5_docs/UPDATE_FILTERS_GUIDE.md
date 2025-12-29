# 🔄 Filter Update Guide - From Static to Database API

This guide explains how to update `index.html` and `script.js` to use the database API instead of static JavaScript files.

---

## 📋 What Needs to Change

### **Current System (Static Data):**
```javascript
// loads from places-data.js
const allPlaces = [...];  // 353 places hardcoded in JS file

function applyFilters() {
  // Filters the in-memory array
  let filtered = allPlaces.filter(...)
}
```

### **New System (Database API):**
```javascript
// Loads from /api/places
let allPlaces = [];  // Will be populated from API

async function loadPlaces(category = null) {
  const url = category
    ? `/api/places?category=${category}`
    : `/api/places`;

  const response = await fetch(url);
  const data = await response.json();
  allPlaces = data.places;
}
```

---

## 🔧 Step-by-Step Changes

### **1. Update index.html**

Remove the static data script:

**OLD (line 334):**
```html
<script src="../places/places-data.js"></script>
```

**NEW:**
```html
<!-- places-data.js is now loaded from API, no longer needed -->
```

Keep the `script.js`:
```html
<script src="script.js"></script>
```

---

### **2. Update script.js - Add API Functions**

Add these new functions at the top of `script.js` (after the state variables):

```javascript
// ========== API FUNCTIONS ==========

/**
 * Load places from database API
 * @param {Object} options - Filter options
 * @param {string} options.category - Category slug to filter by
 * @param {string} options.search - Search query
 * @returns {Promise<Array>} Places array
 */
async function loadPlacesFromAPI(options = {}) {
  try {
    // Build query parameters
    const params = new URLSearchParams();

    if (options.category) {
      params.append('category', options.category);
    }

    if (options.search) {
      params.append('search', options.search);
    }

    // Fetch from API
    const url = `/api/places?${params.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.places || [];

  } catch (error) {
    console.error('Error loading places:', error);
    return [];
  }
}

/**
 * Load all data (places + articles + faqs)
 */
async function loadAllDataFromAPI() {
  // Load places from API
  const apiPlaces = await loadPlacesFromAPI();

  // Normalize places with type
  const places = apiPlaces.map((p) => normalizeItem(p, 'place'));

  // Keep articles and faqs from static files for now
  const articlesList =
    (typeof articles !== 'undefined' && Array.isArray(articles))
      ? articles.map((a) => normalizeItem(a, 'article'))
      : [];

  const faqs =
    (typeof faqspecialSeries !== 'undefined' && Array.isArray(faqspecialSeries))
      ? faqspecialSeries.map((f) => normalizeItem(f, 'faqspecial'))
      : [];

  // Combine all
  allItems = [...places, ...articlesList, ...faqs];
  filteredItems = [...allItems];

  return allItems;
}
```

---

### **3. Update buildAllItems() Function**

**OLD:**
```javascript
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
```

**NEW:**
```javascript
// buildAllItems() is now async and loads from API
async function buildAllItems() {
  await loadAllDataFromAPI();
}
```

---

### **4. Update initKasGuide() Function**

**OLD:**
```javascript
function initKasGuide() {
  buildAllItems();
  calculateStats(allItems);
  renderCategories();
  renderCards(filteredItems);

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
}

initKasGuide();
```

**NEW:**
```javascript
// Make init async to wait for API
async function initKasGuide() {
  // Show loading state (optional)
  if (cardsGrid) {
    cardsGrid.innerHTML = '<div class="loading">Yükleniyor...</div>';
  }

  // Load data from API
  await buildAllItems();

  // Render everything
  calculateStats(allItems);
  renderCategories();
  renderCards(filteredItems);

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }

  // Clear filters button
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      selectedCategories.clear();
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      renderCategories();
      applyFilters();
    });
  }
}

// Call async init
initKasGuide();
```

---

### **5. Update normalizeItem() for API Data**

The API returns data in a slightly different format than your static files. Update `normalizeItem()`:

**Add this helper before normalizeItem():**
```javascript
// Convert API data format to match your static data format
function convertAPIPlace(apiPlace) {
  return {
    id: apiPlace.slug,
    title: apiPlace.title,
    description: apiPlace.description,
    longText: apiPlace.long_text,
    image: apiPlace.primary_image,
    images: apiPlace.images || [],
    category: apiPlace.categories || [],
    badgeId: apiPlace.badge_emoji ? {
      emoji: apiPlace.badge_emoji,
      title: apiPlace.badge_title
    } : null,
    rating: apiPlace.rating,
    price: apiPlace.price,
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
    },
    selected: apiPlace.selected
  };
}
```

**Update loadPlacesFromAPI():**
```javascript
async function loadPlacesFromAPI(options = {}) {
  try {
    const params = new URLSearchParams();

    if (options.category) {
      params.append('category', options.category);
    }

    if (options.search) {
      params.append('search', options.search);
    }

    const url = `/api/places?${params.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // Convert API format to match static data format
    return (data.places || []).map(convertAPIPlace);

  } catch (error) {
    console.error('Error loading places:', error);
    return [];
  }
}
```

---

## 🎨 Optional: Add Loading States

Add visual feedback while loading:

```javascript
// Show loading
function showLoading() {
  if (cardsGrid) {
    cardsGrid.innerHTML = `
      <div class="loading-state">
        <div class="spinner"></div>
        <p>Mekanlar yükleniyor...</p>
      </div>
    `;
  }
}

// Show error
function showError(message) {
  if (cardsGrid) {
    cardsGrid.innerHTML = `
      <div class="error-state">
        <p>❌ ${message}</p>
        <button onclick="initKasGuide()">Tekrar Dene</button>
      </div>
    `;
  }
}

// Update init function
async function initKasGuide() {
  showLoading();

  try {
    await buildAllItems();
    calculateStats(allItems);
    renderCategories();
    renderCards(filteredItems);

    // ... event listeners
  } catch (error) {
    showError('Veriler yüklenirken bir hata oluştu.');
    console.error('Init error:', error);
  }
}
```

Add CSS for loading state in `style.css`:

```css
.loading-state,
.error-state {
  text-align: center;
  padding: 60px 20px;
  grid-column: 1 / -1;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4CAF50;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

---

## 🧪 Testing Your Changes

### **1. Test Locally**

```powershell
# Start local dev server
vercel dev
```

Open: `http://localhost:3000`

### **2. Test Checklist**

- [ ] Page loads and shows all 353 places
- [ ] Category buttons show correct counts
- [ ] Clicking a category filters places
- [ ] Multiple categories work (OR logic)
- [ ] Search box filters places
- [ ] "Clear Filters" button works
- [ ] Statistics update correctly
- [ ] No console errors

### **3. Test API Endpoints**

```javascript
// In browser console:

// Test API directly
fetch('/api/places')
  .then(r => r.json())
  .then(d => console.log('All places:', d));

fetch('/api/places?category=bar')
  .then(r => r.json())
  .then(d => console.log('Bars:', d));

fetch('/api/places?search=beach')
  .then(r => r.json())
  .then(d => console.log('Search results:', d));
```

---

## 🔄 Rollback Plan

If something breaks, you can quickly rollback:

```html
<!-- In index.html, restore the old script -->
<script src="../places/places-data.js"></script>
<script src="script.js"></script>
```

And revert `script.js` changes with Git:
```powershell
git checkout HEAD -- script.js
```

---

## ✅ Complete Example

Here's a minimal complete example for `script.js`:

```javascript
// State
let selectedCategories = new Set();
let searchQuery = '';
let allItems = [];
let filteredItems = [];

// ========== API FUNCTIONS ==========

function convertAPIPlace(apiPlace) {
  return {
    id: apiPlace.slug,
    title: apiPlace.title,
    description: apiPlace.description,
    longText: apiPlace.long_text,
    image: apiPlace.primary_image,
    images: apiPlace.images || [],
    category: apiPlace.categories || [],
    badgeId: apiPlace.badge_emoji ? {
      emoji: apiPlace.badge_emoji,
      title: apiPlace.badge_title
    } : null,
    rating: apiPlace.rating,
    price: apiPlace.price,
    location: apiPlace.location,
    // ... rest of fields
  };
}

async function loadPlacesFromAPI(options = {}) {
  try {
    const params = new URLSearchParams();
    if (options.category) params.append('category', options.category);
    if (options.search) params.append('search', options.search);

    const response = await fetch(`/api/places?${params.toString()}`);
    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const data = await response.json();
    return (data.places || []).map(convertAPIPlace);
  } catch (error) {
    console.error('Error loading places:', error);
    return [];
  }
}

async function buildAllItems() {
  const apiPlaces = await loadPlacesFromAPI();
  const places = apiPlaces.map((p) => normalizeItem(p, 'place'));

  // Keep articles and faqs from static files
  const articlesList = (typeof articles !== 'undefined' && Array.isArray(articles))
    ? articles.map((a) => normalizeItem(a, 'article'))
    : [];

  const faqs = (typeof faqspecialSeries !== 'undefined' && Array.isArray(faqspecialSeries))
    ? faqspecialSeries.map((f) => normalizeItem(f, 'faqspecial'))
    : [];

  allItems = [...places, ...articlesList, ...faqs];
  filteredItems = [...allItems];
}

// ========== INIT ==========

async function initKasGuide() {
  if (cardsGrid) {
    cardsGrid.innerHTML = '<div class="loading">Yükleniyor...</div>';
  }

  await buildAllItems();
  calculateStats(allItems);
  renderCategories();
  renderCards(filteredItems);

  // ... rest of your existing event listeners
}

initKasGuide();
```

---

## 📊 Benefits of This Change

✅ **Live Data** - No need to rebuild/redeploy when data changes
✅ **Better Performance** - API can paginate large datasets
✅ **User Submissions** - New submissions automatically appear after admin approval
✅ **Search** - Database search is faster than client-side filtering
✅ **Future-Proof** - Easy to add more features (sorting, advanced filters, etc.)

---

## 🆘 Troubleshooting

### Problem: "API returns empty array"
**Solution:** Check Neon database is awake (free tier auto-sleeps)

### Problem: "CORS error"
**Solution:** Shouldn't happen on Vercel, but if testing locally, make sure API is same origin

### Problem: "Categories show wrong counts"
**Solution:** Make sure `convertAPIPlace()` correctly maps `apiPlace.categories` array

### Problem: "Places missing badge icons"
**Solution:** Check that badge data exists in database (run seed script)

---

Need more help? Check:
- **DEPLOYMENT_GUIDE.md** - For deployment issues
- **DATABASE_STRUCTURE.md** - For understanding the data structure

---

**Ready to make the changes?** Let me know and I can create the updated `script.js` file for you! 🚀
