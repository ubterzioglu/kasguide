/**
 * TEMPLATE DATA STRUCTURE
 *
 * This file contains sample data to demonstrate how to structure your data.
 * Replace this with your actual data or load from an API.
 *
 * INSTRUCTIONS:
 * 1. Copy this structure for your data type
 * 2. Update the field names to match your needs
 * 3. Ensure each item has a unique 'id' and 'slug'
 * 4. Add or remove fields as needed for your use case
 * 5. Update categories array to match your filter buttons
 *
 * IMPORTANT FIELDS:
 * - id: Unique identifier (number or string)
 * - slug: URL-friendly unique identifier (lowercase, hyphen-separated)
 * - title: Display name
 * - description: Short description (shown in card)
 * - category: Category slug (must match filter buttons)
 * - image: Main image URL
 * - rating: Optional rating (0-5)
 * - featured: Boolean to mark special items
 */

// Main data array
window.templateData = [
  {
    id: 1,
    slug: 'ornek-mekan-1',
    title: 'Örnek Mekan 1',
    description: 'Bu bir örnek mekan açıklamasıdır. Buraya mekan hakkında kısa bilgi yazılır.',
    longDescription: 'Detaylı açıklama buraya yazılır. Bu alan opsiyoneldir ve mekan detay sayfasında gösterilir.',
    category: 'category1', // Must match filter button data-category
    categories: ['category1', 'category2'], // Multiple categories (optional)
    image: '/assets/0_img/placeholder.jpg',
    images: [
      '/assets/0_img/placeholder.jpg',
      '/assets/0_img/placeholder2.jpg'
    ], // Multiple images (optional)
    rating: 4.5,
    price: '₺₺', // Price range indicator (optional)
    address: 'Kaş, Antalya', // Location (optional)
    phone: '+90 555 123 4567', // Contact (optional)
    website: 'https://example.com', // Website URL (optional)
    featured: true, // Highlight this item
    tags: ['populer', 'aile-dostu', 'ucretsiz'], // Tags for additional filtering (optional)
    openingHours: '09:00 - 18:00', // Operating hours (optional)
    facilities: ['WiFi', 'Otopark', 'Klima'], // Available facilities (optional)
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  },
  {
    id: 2,
    slug: 'ornek-mekan-2',
    title: 'Örnek Mekan 2',
    description: 'İkinci örnek mekan açıklaması. Her mekan için benzersiz açıklama yazılmalıdır.',
    category: 'category2',
    categories: ['category2'],
    image: '/assets/0_img/placeholder.jpg',
    rating: 4.8,
    featured: false,
    tags: ['yeni'],
    createdAt: '2024-02-01'
  },
  {
    id: 3,
    slug: 'ornek-mekan-3',
    title: 'Örnek Mekan 3',
    description: 'Üçüncü örnek mekan için açıklama. Kategori 3 örneği.',
    category: 'category3',
    categories: ['category3', 'category1'],
    image: '/assets/0_img/placeholder.jpg',
    rating: 4.2,
    price: '₺₺₺',
    featured: false,
    tags: ['premium'],
    createdAt: '2024-02-15'
  },
  {
    id: 4,
    slug: 'ornek-mekan-4',
    title: 'Örnek Mekan 4',
    description: 'Kategori 1 için başka bir örnek mekan.',
    category: 'category1',
    categories: ['category1'],
    image: '/assets/0_img/placeholder.jpg',
    rating: 4.6,
    featured: true,
    tags: ['tavsiye-edilen', 'populer'],
    createdAt: '2024-03-01'
  },
  {
    id: 5,
    slug: 'ornek-mekan-5',
    title: 'Örnek Mekan 5',
    description: 'Beşinci örnek mekan. Birden fazla kategoriye ait olabilir.',
    category: 'category2',
    categories: ['category2', 'category3'],
    image: '/assets/0_img/placeholder.jpg',
    rating: 4.0,
    featured: false,
    tags: [],
    createdAt: '2024-03-10'
  }
];

/**
 * CATEGORIES CONFIGURATION
 *
 * Define your categories here. Each category should have:
 * - slug: Matches the 'category' field in data items
 * - name: Display name
 * - icon: Emoji or icon character
 * - description: Optional description
 */
window.templateCategories = [
  {
    slug: 'all',
    name: 'Tümü',
    icon: '🌟',
    description: 'Tüm mekanlar'
  },
  {
    slug: 'category1',
    name: 'Kategori 1',
    icon: '📍',
    description: 'Kategori 1 açıklaması'
  },
  {
    slug: 'category2',
    name: 'Kategori 2',
    icon: '⭐',
    description: 'Kategori 2 açıklaması'
  },
  {
    slug: 'category3',
    name: 'Kategori 3',
    icon: '🎯',
    description: 'Kategori 3 açıklaması'
  }
];

/**
 * CUSTOM CONFIGURATION
 *
 * Additional settings for your template
 */
window.templateConfig = {
  // Display settings
  itemsPerPage: 12,
  showRatings: true,
  showPrices: true,
  showFeaturedFirst: true,

  // Search settings
  searchFields: ['title', 'description', 'tags'], // Fields to search in
  searchMinLength: 2, // Minimum characters to trigger search

  // Filter settings
  allowMultipleCategories: true, // Allow items to belong to multiple categories
  defaultCategory: 'all',

  // Sorting options
  defaultSort: 'rating', // 'rating', 'title', 'date', 'featured'
  sortOrder: 'desc' // 'asc' or 'desc'
};

/**
 * DATA VALIDATION HELPER
 *
 * Use this function to validate your data structure
 */
function validateTemplateData() {
  const requiredFields = ['id', 'slug', 'title', 'description', 'category'];
  const errors = [];

  window.templateData.forEach((item, index) => {
    requiredFields.forEach(field => {
      if (!item[field]) {
        errors.push(`Item ${index + 1} is missing required field: ${field}`);
      }
    });

    // Check for duplicate slugs
    const duplicates = window.templateData.filter(d => d.slug === item.slug);
    if (duplicates.length > 1) {
      errors.push(`Duplicate slug found: ${item.slug}`);
    }

    // Validate rating if present
    if (item.rating && (item.rating < 0 || item.rating > 5)) {
      errors.push(`Invalid rating for ${item.title}: ${item.rating} (must be 0-5)`);
    }
  });

  if (errors.length > 0) {
    console.error('Data validation errors:', errors);
    return false;
  }

  console.log('✅ Data validation passed!');
  return true;
}

// Run validation on load (comment out in production)
// validateTemplateData();

/**
 * API INTEGRATION EXAMPLE
 *
 * If you want to load data from an API instead of static data:
 */

/*
async function loadDataFromAPI() {
  try {
    const response = await fetch('/api/your-endpoint');
    if (!response.ok) throw new Error('API request failed');

    const data = await response.json();
    window.templateData = data.items || data;

    // Initialize the app after data is loaded
    initializeApp();
  } catch (error) {
    console.error('Error loading data:', error);
    // Show error message to user
  }
}

// Call this instead of using static data
// loadDataFromAPI();
*/
