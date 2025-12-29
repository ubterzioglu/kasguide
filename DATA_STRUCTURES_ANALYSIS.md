# 📊 Data Structures Analysis - Kaş Guide

## Summary of All Data Types

| Type | Count | Complexity | Fields | Status |
|------|-------|------------|--------|--------|
| **places** | 353 | High | 30+ fields | ✅ In Database |
| **hotels** | 1 | High | 25+ fields | ✅ In Database |
| **pets** | 2 | Low | 8 fields | 📁 Static file |
| **articles** | 2 | Medium | 8 fields | 📁 Static file |
| **faqspecial** | 1 | Low | 6 fields | 📁 Static file |

---

## 1. Hotels Structure (hotels-data.js)

### Fields:
```javascript
{
  // Core Info
  id: 'ornek-otel-1',
  title: 'Mavi Deniz Butik Otel',
  hotelType: 'butik',  // butik, aile, luks, pansiyon, apart, hostel, villa
  starRating: '4',     // 1-5 or 'yok'
  roomCount: 12,
  capacity: 30,

  // Location
  location: 'Kaş Merkez',
  distanceToSea: '50 metre',
  coordinates: { lat: 36.2015, lng: 29.6401 },

  // Descriptions
  description: 'Short description...',
  longText: 'Long description...',

  // Photos
  image: './assets/hotels/...',
  images: ['img1.jpg', 'img2.jpg', ...],

  // Facilities
  facilities: ['pool', 'restaurant', 'bar', 'wifi', 'ac', ...],

  // Pricing
  priceRange: 'mid',  // budget, mid, high, luxury
  checkinTime: '14:00',
  checkoutTime: '11:00',

  // Contact
  phone: '+90 555 123 45 67',
  email: 'info@hotel.com',
  website: 'https://hotel.com',
  instagram: '@hotel',
  booking: 'https://booking.com/...',
  googleMapsQuery: 'Hotel Name Kaş',

  // Additional
  tags: ['butik', 'deniz manzarası', ...],
  rating: 4.8,
  reviewCount: 156,

  // Trust
  trust: {
    verified: true,
    infoDate: '2025-12',
    disclaimer: true
  }
}
```

### Database Schema Needed:
- Main `hotels` table ✅ (already created)
- `hotel_images` table ✅
- `hotel_facilities` table ✅
- `hotel_tags` table ✅

---

## 2. Pets Structure (pet-data.js)

### Fields:
```javascript
{
  id: "pet-001",
  type: "kedi",  // kedi, kopek
  age: "1-2 yaş",
  breed: "Tekir (mix)",
  shortNote: "Brief sighting description",
  extraNotes: "Additional details",
  photos: ["../assets/4_pet/photo1.jpg", ...],
  createdAt: "2025-12-28"
}
```

### Database Schema Needed:
- Main `pets` table (NEW)
- `pet_images` table (NEW)

### Purpose:
Lost/found pets or stray animals spotted in Kaş area. Community-driven sightings.

---

## 3. Articles Structure (articles-data.js)

### Fields:
```javascript
{
  id: 'kas-ilk-kez-gelenler',
  title: 'Article Title',
  description: 'Brief summary',
  author: 'Kaş Guide',
  readTime: '5 dk',
  image: '../assets/0_img/placeholder.jpg',
  tags: ['kas', 'rehber', 'ipuclari'],
  longText: 'Full article content...'
}
```

### Database Schema Needed:
- Main `articles` table (NEW)
- `article_tags` table (NEW)

### Purpose:
Blog posts, guides, tips about Kaş (e.g., "First Time in Kaş Guide", "Winter in Kaş")

---

## 4. FAQ Special Structure (faqspecial-data.js)

### Fields:
```javascript
{
  id: 'kas-faq-001',
  title: 'Kaş'ta 3 Günde Ne Yapılır?',
  description: 'Brief answer',
  category: ['faqspecial'],
  image: '../assets/0_img/placeholder.jpg',
  longText: 'Detailed answer...'
}
```

### Database Schema Needed:
- Main `faqspecial` table (NEW)

### Purpose:
Special FAQ series - longer-form Q&A content (different from regular FAQs)

---

## 🎯 Migration Priority Order

### Phase 1: Complete Hotels Migration ✅
- [x] Schema created
- [x] 1 hotel imported
- [ ] Verify all facilities imported correctly

### Phase 2: Pets Migration
- [ ] Create schema
- [ ] Import 2 pets
- [ ] Create API endpoint
- [ ] Create admin interface

### Phase 3: Articles Migration
- [ ] Create schema
- [ ] Import 2 articles
- [ ] Create API endpoint
- [ ] Create admin interface

### Phase 4: FAQ Special Migration
- [ ] Create schema
- [ ] Import 1 faqspecial
- [ ] Create API endpoint
- [ ] Create admin interface

---

## 📋 Common Patterns Across All Types

### Shared Fields:
- `id` → `slug` (VARCHAR, unique)
- `title` (VARCHAR)
- `description` (TEXT)
- `longText` → `long_text` (TEXT)
- `image` → `primary_image` (VARCHAR)
- `images` → separate table with `_images` suffix
- `createdAt` → `created_at` (TIMESTAMP)
- `status` → approval workflow (pending/approved/rejected)

### Shared Tables Pattern:
```
main_table
  ├── id (SERIAL PRIMARY KEY)
  ├── slug (VARCHAR UNIQUE)
  ├── title, description, long_text
  ├── primary_image
  ├── status (pending/approved/rejected)
  ├── created_at, updated_at
  └── published_at

main_table_images
  ├── id (SERIAL PRIMARY KEY)
  ├── main_table_id (FK)
  ├── image_url (VARCHAR)
  └── sequence_order (INTEGER)

main_table_tags (if applicable)
  ├── main_table_id (FK)
  └── tag_name (VARCHAR)
```

---

## 🔄 Index.html Integration

### Current Categories Used:
From your categories grid, you have 15 categories. The data types map to categories as:

| Data Type | Category Mapping |
|-----------|------------------|
| places | Multiple (bar, beach, restaurant, etc.) |
| hotels | accommodation |
| pets | None (standalone section) |
| articles | articles |
| faqspecial | faqspecial |

### Filter Logic:
```javascript
// In script.js
const allItems = [
  ...places.map(p => ({ ...p, type: 'place' })),
  ...hotels.map(h => ({ ...h, type: 'hotel', category: ['accommodation'] })),
  ...pets.map(p => ({ ...p, type: 'pet', category: ['pets'] })),
  ...articles.map(a => ({ ...a, type: 'article', category: ['articles'] })),
  ...faqspecial.map(f => ({ ...f, type: 'faqspecial', category: ['faqspecial'] }))
];
```

---

## ✅ Next Steps

1. Create database schemas for pets, articles, faqspecial
2. Update db/schema.sql with new tables
3. Create import scripts
4. Run imports
5. Create API endpoints for each type
6. Update script.js to load all types from API
7. Test filtering across all types

---

**Total Database Tables After Migration:**
- 4 main content tables: places, hotels, pets, articles, faqspecial
- 15+ relationship tables (images, tags, facilities, etc.)
- 3 reference tables: categories, badges
- 2 system tables: admin_users, audit_log

**Total Items to Import:**
- 353 places ✅
- 1 hotel ✅
- 2 pets ⏳
- 2 articles ⏳
- 1 faqspecial ⏳
