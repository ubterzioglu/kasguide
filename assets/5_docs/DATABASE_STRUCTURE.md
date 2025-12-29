# 🗄️ Database Structure Guide - Kaş Guide

This guide explains the complete database architecture and how everything connects together.

---

## 📊 Overview

Your Kaş Guide application now uses **PostgreSQL** (via Neon) instead of static JavaScript files. Here's what changed:

**Before:**
```
places-data.js  → 353 places stored in JS file
hotels-data.js  → Hotels stored in JS file
faq-list-data.js → FAQs stored in JS file
```

**After:**
```
PostgreSQL Database (Neon)
  ├── places (353 entries)
  ├── hotels (1 entry)
  ├── categories (15 entries)
  ├── badges (16 entries)
  └── ... and more!
```

---

## 🏗️ Database Tables

### **Core Tables**

#### 1. **places** - Main venues table
Stores all places (bars, beaches, restaurants, etc.)

| Column | Type | Description |
|--------|------|-------------|
| `id` | SERIAL | Unique ID (auto-increment) |
| `slug` | VARCHAR | URL-friendly ID (e.g., "frida-pub") |
| `title` | VARCHAR | Place name (e.g., "Frida Pub") |
| `description` | TEXT | Short description |
| `long_text` | TEXT | Detailed description |
| `badge_id` | INTEGER | Reference to badges table |
| `rating` | DECIMAL | Rating (0-5) |
| `price` | VARCHAR | Price range (e.g., "$$") |
| `selected` | BOOLEAN | Featured/highlighted |
| `location` | VARCHAR | Address |
| `distance` | VARCHAR | Distance from center |
| `coordinates_lat` | DECIMAL | Latitude |
| `coordinates_lng` | DECIMAL | Longitude |
| `primary_image` | VARCHAR | Main photo URL |
| `phone` | VARCHAR | Phone number |
| `website` | VARCHAR | Website URL |
| `instagram` | VARCHAR | Instagram handle |
| `booking_url` | VARCHAR | Booking link |
| `google_maps_query` | VARCHAR | Google Maps search query |
| `duration` | VARCHAR | Visit duration |
| `access_info` | TEXT | Access instructions |
| `verified` | BOOLEAN | Admin verified |
| `info_date` | DATE | Info last updated |
| `disclaimer` | BOOLEAN | Show disclaimer |
| `status` | VARCHAR | pending/approved/rejected |
| `published_at` | TIMESTAMP | When approved |
| `created_at` | TIMESTAMP | When created |

**Example:**
```sql
SELECT * FROM places WHERE slug = 'frida-pub';
```

---

#### 2. **categories** - Place categories
The 15 category types (places, beaches, bars, etc.)

| Column | Type | Description |
|--------|------|-------------|
| `id` | SERIAL | Unique ID |
| `slug` | VARCHAR | Category ID (e.g., "bar") |
| `name` | VARCHAR | Display name (e.g., "Bar") |
| `icon_code` | VARCHAR | Emoji icon (e.g., "🍺") |
| `color_code` | VARCHAR | Color hex (e.g., "#FF5733") |

**Your 15 categories:**
1. 🗺️ Gezi (places)
2. 🏖️ Plaj (beaches)
3. 🍺 Bar (bar)
4. 🍽️ Restoran (restaurant)
5. 🏨 Konaklama (accommodation)
6. 🎵 Gece Hayatı (nightlife)
7. 🏛️ Kültür (culture)
8. 🌊 Su Sporları (watersports)
9. ☕ Kafe (cafe)
10. 🛍️ Alışveriş (shopping)
11. 🏥 Sağlık (health)
12. 🚗 Ulaşım (transport)
13. 📸 Fotoğraf Noktası (photo)
14. 🌳 Doğa (nature)
15. 🎯 Aktivite (activity)

---

#### 3. **badges** - Place classifications
Special tags for places (Tourist-friendly, Local favorite, etc.)

| Column | Type | Description |
|--------|------|-------------|
| `id` | SERIAL | Unique ID |
| `slug` | VARCHAR | Badge ID (e.g., "tourist") |
| `emoji` | VARCHAR | Badge emoji (e.g., "🧑‍🧳") |
| `title` | VARCHAR | Badge title |
| `description` | TEXT | Badge description |

**Your 16 badges:**
1. 🧑‍🧳 Turist Dostu (tourist)
2. 🏛️ Klasik (classic)
3. 🆕 Yeni Keşif (newFind)
4. ✍️ Editörün Seçimi (editorsPick)
5. 🔮 Sürpriz (surprise)
6. 🕵️ Gizli Hazine (hidden)
7. 📬 Tekrar Gidilir (again)
8. 😎 Kaş'ın Ruhu (kasSoul)
9. 👶 İlk Kez Gelenler (firstTimers)
10. ⏳ Zamansız (timeless)
11. 💬 Sohbet Dostu (chattyOwner)
12. 🌅 Gün Batımı (sunsetStart)
13. 🌙 Gece Kuşu (nightCarrier)
14. 💎 Vazgeçilmez (must)
15. 🌟 Premium (premium)
16. 🎖️ Özel (special)

---

### **Relationship Tables** (Many-to-Many)

#### 4. **place_categories** - Links places to categories
One place can have multiple categories (e.g., a place can be both "bar" and "restaurant")

| Column | Type | Description |
|--------|------|-------------|
| `place_id` | INTEGER | References places.id |
| `category_id` | INTEGER | References categories.id |

**Example:**
```sql
-- Get all bars
SELECT p.*
FROM places p
JOIN place_categories pc ON pc.place_id = p.id
JOIN categories c ON c.id = pc.category_id
WHERE c.slug = 'bar';
```

---

#### 5. **place_images** - Additional photos for places
Each place can have multiple images

| Column | Type | Description |
|--------|------|-------------|
| `id` | SERIAL | Unique ID |
| `place_id` | INTEGER | References places.id |
| `image_url` | VARCHAR | Photo URL |
| `sequence_order` | INTEGER | Display order (0, 1, 2...) |

---

#### 6. **place_facilities** - Amenities
(e.g., "Wi-Fi", "Parking", "Wheelchair Access")

| Column | Type | Description |
|--------|------|-------------|
| `place_id` | INTEGER | References places.id |
| `facility_name` | VARCHAR | Facility name |

---

#### 7. **place_features** - Special features
(e.g., "Sea view", "Live music")

| Column | Type | Description |
|--------|------|-------------|
| `place_id` | INTEGER | References places.id |
| `feature_text` | VARCHAR | Feature description |

---

#### 8. **place_tags** - Searchable tags
(e.g., "romantic", "family-friendly", "budget")

| Column | Type | Description |
|--------|------|-------------|
| `place_id` | INTEGER | References places.id |
| `tag_name` | VARCHAR | Tag name |

---

### **Other Tables**

#### 9. **hotels** - Hotel listings
Similar structure to places but with hotel-specific fields

#### 10. **faqs** - Frequently asked questions
Q&A for the site

#### 11. **admin_users** - Admin accounts
For future multi-admin support

#### 12. **audit_log** - Change tracking
Logs all admin actions

---

## 🔄 How Data Flows

### **1. User Visits Homepage**

```
User → index.html → /api/places → Database → Returns JSON → Display
```

**Code in index.html (what you'll update):**
```javascript
// OLD (from JS file):
const allPlaces = [...]; // Static data

// NEW (from API):
fetch('/api/places?category=bar')
  .then(res => res.json())
  .then(data => {
    const places = data.places;
    // Display places
  });
```

---

### **2. User Submits a Venue**

```
User → venue-submit form → /api/venue-submit → Database (status=pending)
```

The submission goes to `places` table with `status = 'pending'`

---

### **3. Admin Reviews Submission**

```
Admin → /admin → Login → See pending → Approve/Reject → Update status
```

When approved: `status` changes to `'approved'` and `published_at` is set

---

### **4. Filtering by Category**

**Example: Show only bars**

```javascript
// Frontend call:
fetch('/api/places?category=bar')

// What happens in database:
SELECT p.*
FROM places p
JOIN place_categories pc ON pc.place_id = p.id
JOIN categories c ON c.id = pc.category_id
WHERE c.slug = 'bar'
  AND p.status = 'approved'
ORDER BY p.published_at DESC;
```

---

## 📁 File Structure

Your new database-enabled files:

```
kasguide/
├── db/                          # Database files
│   ├── connection.js            # Database connection helper
│   ├── schema.sql               # Table definitions
│   ├── migrate.js               # Migration runner
│   ├── import-data.js           # Data import script
│   └── seeds/                   # Reference data
│       ├── 01_categories.sql    # 15 categories
│       └── 02_badges.sql        # 16 badges
│
├── lib/                         # Database operations
│   └── db-places.js             # CRUD functions for places
│
├── api/                         # API endpoints (Vercel Serverless)
│   ├── places.js                # GET /api/places
│   ├── venue-submit.js          # POST /api/venue-submit
│   └── admin/
│       └── places.js            # Admin place management
│
├── admin/
│   └── index.html               # Admin panel UI
│
└── .env.local                   # Database credentials (local only)
```

---

## 🔧 Database Helper Functions

### **In `/lib/db-places.js`:**

#### Get all places:
```javascript
import { getAllPlaces } from './lib/db-places.js';

const places = await getAllPlaces({
  category: 'bar',      // Optional: filter by category
  limit: 10,            // Optional: limit results
  offset: 0,            // Optional: pagination
  status: 'approved'    // Default: only approved
});
```

#### Get single place:
```javascript
import { getPlaceBySlug } from './lib/db-places.js';

const place = await getPlaceBySlug('frida-pub');
```

#### Search places:
```javascript
import { searchPlaces } from './lib/db-places.js';

const results = await searchPlaces('beach'); // Searches title, description, long_text
```

#### Create new place (from submission):
```javascript
import { createPlace } from './lib/db-places.js';

const newPlace = await createPlace({
  title: 'New Bar',
  description: 'A cool new bar',
  // ... other fields
});
// Automatically gets status='pending'
```

#### Approve/Reject (admin only):
```javascript
import { updatePlaceStatus } from './lib/db-places.js';

await updatePlaceStatus(placeId, 'approved');
// or
await updatePlaceStatus(placeId, 'rejected', 'Spam submission');
```

---

## 🌐 API Endpoints

### **GET /api/places**
Get all approved places

**Query parameters:**
- `category` - Filter by category slug (e.g., `?category=bar`)
- `search` - Search in title/description (e.g., `?search=beach`)
- `slug` - Get single place (e.g., `?slug=frida-pub`)
- `limit` - Limit results (e.g., `?limit=10`)
- `offset` - Pagination offset (e.g., `?offset=20`)

**Examples:**
```javascript
// All places
fetch('/api/places')

// Only bars
fetch('/api/places?category=bar')

// Search
fetch('/api/places?search=sunset')

// Single place
fetch('/api/places?slug=frida-pub')

// Pagination
fetch('/api/places?limit=20&offset=0')
```

**Response format:**
```json
{
  "places": [
    {
      "id": 1,
      "slug": "frida-pub",
      "title": "Frida Pub",
      "description": "...",
      "badge_emoji": "🧑‍🧳",
      "badge_title": "Turist Dostu",
      "images": ["url1", "url2"],
      "categories": ["bar", "nightlife"],
      "facilities": ["Wi-Fi", "Outdoor seating"],
      "features": ["Live music"],
      "tags": ["romantic", "rooftop"]
    }
  ],
  "count": 1
}
```

---

### **POST /api/venue-submit**
Submit a new venue (user-facing)

**Request body:**
```json
{
  "title": "New Place",
  "description": "...",
  "categories": ["bar"],
  "phone": "+90...",
  "instagram": "@place",
  // ... other fields
}
```

**Response:**
```json
{
  "success": true,
  "message": "Submission received",
  "placeId": 354
}
```

Status will be `pending` until admin approves.

---

## 🔐 Admin Panel

Located at `/admin/index.html`

**Features:**
- 🔑 Login with `ADMIN_API_KEY`
- 📋 Three tabs: Pending / Approved / Rejected
- ✅ Approve submissions
- ❌ Reject submissions
- 🗑️ Delete submissions
- 👁️ View full details + images

**API used by admin panel:**
- `GET /api/admin/places?status=pending` - Get pending submissions
- `POST /api/admin/places` - Approve/reject/delete

---

## 🎯 Next Steps: Update index.html Filters

Your current `index.html` uses static data:

```javascript
// OLD:
const allPlaces = [...]; // Static array

function filterByCategory(category) {
  return allPlaces.filter(place =>
    place.category && place.category.includes(category)
  );
}
```

**You'll need to change this to:**

```javascript
// NEW:
let allPlaces = []; // Will be populated from API

// Load data on page load
async function loadPlaces(category = null) {
  const url = category
    ? `/api/places?category=${category}`
    : '/api/places';

  const response = await fetch(url);
  const data = await response.json();
  allPlaces = data.places;

  displayPlaces(allPlaces);
}

// Category filter buttons
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    loadPlaces(category);
  });
});

// Initial load
loadPlaces();
```

---

## 📚 Useful SQL Queries

### Count places by category:
```sql
SELECT c.name, COUNT(pc.place_id) as total
FROM categories c
LEFT JOIN place_categories pc ON pc.category_id = c.id
GROUP BY c.id, c.name
ORDER BY total DESC;
```

### Get places with specific badge:
```sql
SELECT p.title, b.title as badge
FROM places p
JOIN badges b ON b.id = p.badge_id
WHERE b.slug = 'tourist';
```

### Recent submissions (admin review):
```sql
SELECT title, status, created_at
FROM places
WHERE status = 'pending'
ORDER BY created_at DESC;
```

---

## 🎉 Summary

**What you have now:**

✅ PostgreSQL database with 353 places
✅ 15 categories for filtering
✅ 16 badges for classification
✅ RESTful API for frontend consumption
✅ Admin panel for managing submissions
✅ User submission system with approval workflow

**What's next:**

1. ✅ Deploy to Vercel (see DEPLOYMENT_GUIDE.md)
2. 🔄 Update index.html to use `/api/places` instead of static data
3. 🎨 Update category filters to call API
4. ✨ Test everything!

---

Need help with deployment? See **DEPLOYMENT_GUIDE.md**
Need help updating filters? Let me know! 🚀
