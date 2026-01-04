# Kaş Guide - Project Structure & Technical Documentation

**Last Updated**: 2025-12-30
**Branch**: `claude/form-improvements-mjpxos07y4z09uzw-v21ABC`
**Tag**: `kasguide-301225-stable-v21.0-claude`
**Latest Commits**:
- Phase 2: `f20e890` - Major form UI improvements - Phase 2 (Complete)
- Phase 1: `d57d2f6` - Major form UI improvements - Phase 1

---

## 📚 Table of Contents
1. [Project Overview](#project-overview)
2. [Database Schema](#database-schema)
3. [API Endpoints](#api-endpoints)
4. [Form System](#form-system)
5. [Admin Panel](#admin-panel)
6. [Category System](#category-system)
7. [File Structure](#file-structure)
8. [Recent Changes](#recent-changes)

---

## 🎯 Project Overview

**Kaş Guide** is a unified content management system for Kaş (Turkey) featuring:
- Places (Mekanlar) - 16 categories
- Pets (Patililer) - Lost/Found/Adoption listings
- Hotels (Oteller) - Accommodation listings
- Artists (Sanatçılar) - 16 artist categories

### Tech Stack
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Vercel Serverless Functions (Node.js 20.x)
- **Database**: PostgreSQL (Neon - cloud hosted)
- **Storage**: JSONB for flexible attributes
- **Deployment**: Vercel

---

## 🗄️ Database Schema

### Main Table: `items`
```sql
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  item_number VARCHAR(50) UNIQUE NOT NULL,  -- Auto-generated: PLACExxxx, PETxxxx, etc.
  item_type VARCHAR(20) NOT NULL,           -- 'place', 'pet', 'hotel', 'artist'
  title VARCHAR(255) NOT NULL,
  description TEXT,                         -- Kısa Açıklama (single line)
  long_text TEXT,                           -- Detaylı Açıklama (5 lines)
  slug VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',     -- 'pending', 'approved', 'rejected'
  photos JSONB DEFAULT '[]',                -- [{url: "...", filename: "..."}]
  attributes JSONB DEFAULT '{}',            -- Type-specific fields
  phone VARCHAR(50),
  email VARCHAR(100),
  website VARCHAR(255),
  instagram VARCHAR(100),
  location VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Attributes JSONB Structure

**For Places (item_type='place')**:
```json
{
  "categories": ["bar", "restoran", "plaj"],
  "distance": "2 km",
  "price": "₺₺",
  "duration": "2-3 saat",
  "rating": "4.5",
  "google_maps_query": "https://maps.google.com/...",
  "booking_url": "https://...",
  "badge_id": 1,
  "facilities": ["wifi", "parking"],
  "features": ["deniz manzarası"],
  "tags": ["romantik", "aile"],
  "trust": {"score": 5}
}
```

**For Pets (item_type='pet')**:
```json
{
  "listing_type": "kayip",          // 'kayip' or 'bulundu'
  "pet_type": "kopek",              // 'kopek' or 'kedi'
  "age": "2 yaşında",
  "breed": "Golden Retriever",
  "short_note": "Description...",
  "extra_notes": "Special notes..."
}
```

**For Hotels (item_type='hotel')**:
```json
{
  "hotel_type": "butik",            // 'butik', 'aile', 'luks', 'pansiyon', etc.
  "star_rating": "4",
  "room_count": "20",
  "capacity": "50",
  "distance_to_sea": "100m",
  "facilities": ["pool", "spa", "restaurant"],
  "booking_url": "https://..."
}
```

**For Artists (item_type='artist')**:
```json
{
  "categories": ["Müzisyen", "DJ", "Resim"],
  "short_text": "Brief intro..."
}
```

### Supporting Tables

**categories** (for frontend display):
```sql
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  icon_code VARCHAR(10),
  color_code VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW()
);
```

**badges** (for places):
```sql
CREATE TABLE badges (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  emoji VARCHAR(10),
  title VARCHAR(100),
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🔌 API Endpoints

### Public Endpoints

#### `GET /api/items`
Get items list (filtered)

**Query Parameters**:
- `type` - Filter by item type: 'place', 'pet', 'hotel', 'artist', 'all'
- `category` - Filter by category slug (for places)
- `status` - Filter by status (default: 'approved')
- `id` - Get single item by ID
- `slug` - Get single item by slug
- `number` - Get single item by item_number

**Response**:
```json
{
  "success": true,
  "items": [
    {
      "id": 123,
      "item_number": "PLACE0001",
      "item_type": "place",
      "title": "Cafe X",
      "description": "Great coffee",
      "long_text": "Detailed description...",
      "slug": "cafe-x",
      "status": "approved",
      "photos": [{"url": "...", "filename": "..."}],
      "attributes": {"categories": ["cafe"], "price": "₺₺"},
      "phone": "+90...",
      "email": "...",
      "website": "...",
      "instagram": "@...",
      "location": "Kaş Merkez",
      "badge": {"emoji": "⭐", "title": "Top Rated"},
      "created_at": "2025-12-30T10:00:00Z",
      "updated_at": "2025-12-30T10:00:00Z"
    }
  ],
  "count": 1
}
```

#### `POST /api/item-submit`
Submit new item (multipart/form-data)

**Form Fields**:
- `itemType` (required): 'place', 'pet', 'hotel', 'artist'
- `title` (required): Item title
- `description`: Short description
- `longText`: Detailed description
- `phone`, `email`, `website`, `instagram`: Contact info
- `photos`: File uploads (max 5)
- Type-specific fields based on `itemType`

**Response**:
```json
{
  "success": true,
  "message": "Item submitted successfully",
  "itemNumber": "PLACE0001"
}
```

### Admin Endpoints (Require X-API-Key header)

#### `GET /api/admin/items`
Get all items with any status

**Query Parameters**:
- `status`: 'pending', 'approved', 'rejected'
- `type`: 'place', 'pet', 'hotel', 'artist', 'all'

#### `PATCH /api/admin/items`
Update item status

**Body**:
```json
{
  "id": 123,
  "status": "approved"
}
```

#### `DELETE /api/admin/items?id=123`
Delete item permanently

---

## 📝 Form System

### Unified Form: `/add/item/add-item.html`

**Type Selection Cards**:
- 🏪 Mekan - "15 Kategoride mekan ekleyin!"
- 🐾 Patili - "Kayıp, Bulunan, Yuva Arayan patililer için ilan verin"
- 🏨 Otel - "Her türden kalacak yerleri ekleyin! Otel, pansiyon, apart, villa, airbnb!"
- 🎨 Sanatçı - "Müzisyen, DJ, sahne sanatçısı"

### Form Structure

**1. Info Accordions** (Type-specific, shown after type selection):
- Each type has 4 accordion sections
- First is main info, others are placeholders ("Bilgi 2", "Bilgi 3", "Bilgi 4")

**2. Temel Bilgiler Section** (Common for all types):
```html
- Başlık* (Dynamic label based on type):
  - Mekan: "Mekan İsmi"
  - Patili: "Patili İsmi"
  - Sanatçı: "İsim"
  - Otel: "Başlık"
- Kısa Açıklama (single-line input)
- Detaylı Açıklama (5-line textarea)
- Contact fields (auto-hidden for Artist & Pet):
  - Telefon & E-posta (same row)
  - Website & Instagram (same row)
```

**3. Type-Specific Fields**:

**Mekan (Place)**:
```
- Kategoriler (16 checkboxes):
  İlk Sıra: Bar, Meyhane, Restoran, Cafe, Kahvaltı
  İkinci Sıra: Tarih, Doğa, Dalış, Aktivite, Sergi, Etkinlik
  Son Sıra: Çarşı, Plaj, Röportaj, Fotoğraf, Acil Durum
- Konum & Mesafe
- Fiyat Aralığı & Tahmini Süre
- Google Maps Link & Rezervasyon Linki
```

**Patili (Pet)**:
```
Card 1: Patili Bilgileri (first position)
- İlan Tipi: Kayıp / Sahiplendirilecek (radio)
- Tür: Köpek / Kedi (radio)
- Yaş & Cins
- Kısa Bilgi (500 char max)

Card 2: İletişim Bilgileri
- Telefon & E-posta (row 1)
- Website & Instagram (row 2)
```

**Sanatçı (Artist)**:
```
Card 1: İletişim Bilgileri (first position)
- Telefon, E-posta, Instagram (3 columns in 1 row)

Card 2: Sanatçı Bilgileri
- Kategoriler (16 checkboxes):
  Müzisyen, Grup, DJ, Tiyatro, Stand-Up, Dans, Koro,
  Dövme, Karikatür, Resim, Sinema, Seramik,
  Takı Tasarımı, Sosyal Medya, Fotoğraf, Diğer
```

**Otel (Hotel)**:
```
- Otel Tipi (dropdown)
- Yıldız Sayısı & Oda Sayısı
- Konum & Denize Uzaklık
- Kapasite
- Tesisler (checkboxes)
```

**4. Fotoğraflar Section** (Common):
- File upload (max 5 photos, 2MB each)

**5. Ek Notlar Section** (Common):
- "Bize iletmek istediğiniz özel notlar" (2-line textarea)

### JavaScript Logic (`add-item.js`)

**Dynamic Behavior**:
```javascript
selectType(type) {
  // 1. Update title label based on type
  // 2. Show/hide type-specific fields
  // 3. Show/hide type-specific accordions
  // 4. Hide common contact fields for artist/pet
  // 5. Show main form
}
```

---

## 🛠️ Admin Panel

### Location: `/admin/index.html`

**Features**:
- Unified admin for all item types
- API key authentication (stored in localStorage)
- Real-time filtering

**UI Components**:

**1. Content Type Tabs**:
- 🌟 All (Hepsi)
- 🏪 Places (Mekanlar)
- 🐾 Pets (Hayvanlar)
- 🏨 Hotels (Oteller)
- 🎨 Artists (Sanatçılar)

**2. Status Tabs**:
- Bekleyenler (pending)
- Onaylananlar (approved)
- Reddedilenler (rejected)

**3. Action Buttons** (Black text on colored backgrounds):
- ✅ Onayla (green #4CAF50)
- ❌ Reddet (red #f44336)
- 🗑️ Sil (orange #ff9800)

**4. Item Cards**:
Display format varies by type:
- Places: Shows categories, contact, price, photos
- Pets: Shows listing type, pet type, age, breed, photos
- Hotels: Shows hotel type, capacity, facilities, photos
- Artists: Shows categories, social media, photos

---

## 🏷️ Category System

### Frontend: `categories.js`

**Place Categories** (16 total):
```javascript
İlk Sıra - Yeme İçme:
  bar, meyhane, restoran, cafe, kahvalti

İkinci Sıra - Aktivite & Kültür:
  tarih, doga, dalis, aktivite, sergi, etkinlik

Son Sıra - Diğer:
  carsi, plaj, roportaj, fotograf, acildurum

Plus display-only:
  articles, faqspecial, places (Gezi)
```

**Category Object Structure**:
```javascript
{
  id: 'bar',
  name: 'Bar',
  icon: '<svg>...</svg>',  // Custom SVG
  color: 'category-orange', // CSS class
  action: null              // Optional: {type: 'page', href: '...'}
}
```

**Color Classes**:
- category-orange, category-purple, category-red
- category-teal, category-lime, category-indigo
- category-green, category-cyan, category-amber
- category-pink, category-yellow, category-gray
- category-slate, category-violet, category-blue
- category-rose

### Backend: `db/seeds/01_categories.sql`

Seed data for categories table with Turkish names, emojis, and hex colors.

---

## 📁 File Structure

```
/home/user/kasguide/
├── index.html                   # Homepage (shows approved items)
├── script.js                    # Homepage JavaScript
├── categories.js                # Category definitions (frontend)
│
├── add/item/
│   ├── add-item.html           # Unified submission form
│   ├── add-item.js             # Form logic & API submission
│   └── shared/                 # Shared CSS (base, layout, components)
│
├── admin/
│   └── index.html              # Admin panel (unified)
│
├── api/
│   ├── items.js                # GET /api/items (public)
│   ├── item-submit.js          # POST /api/item-submit
│   └── admin/
│       └── items.js            # Admin CRUD operations
│
├── lib/
│   ├── db-items.js             # Database queries for items
│   ├── db-connection.js        # Neon PostgreSQL connection
│   └── upload.js               # Vercel Blob storage
│
├── db/
│   ├── schema/
│   │   └── 02_unified_items.sql    # Items table schema
│   ├── seeds/
│   │   ├── 01_categories.sql       # Category seed data
│   │   └── 02_badges.sql           # Badge seed data
│   └── reset-database.js           # Database reset script
│
├── places/
│   └── places.js               # Place detail page
│
├── pet/
│   └── pet.js                  # Pet detail page
│
└── package.json                # NPM scripts & dependencies
```

---

## 🔄 Recent Changes (v21.0)

### Phase 1 (Commit: d57d2f6)

**Admin Panel**:
- Button text colors changed to black for readability

**Main Menu Updates**:
- Subtitle: "Mekan,otel,sanatçı bilgisi ekleyin! Yuva arayan, kayıp patililer için ilan verin!"
- Mekan: "15 Kategoride mekan ekleyin!"
- Hayvan → Patili: "Kayıp, Bulunan, Yuva Arayan patililer için ilan verin"
- Otel: "Her türden kalacak yerleri ekleyin! Otel, pansiyon, apart, villa, airbnb!"

**Form Improvements**:
- Kısa Açıklama: textarea → single-line input
- Detaylı Açıklama: Set to 5 rows explicitly
- Telefon/E-posta & Website/Instagram: Already in 2x2 grid layout

**Category Changes**:
- Mekan: Sanatçı → Sergi (🖼️)
- Mekan: Added Etkinlik (🎪) - 16 total
- Sanatçı: Removed Prodüksiyon & Dijital (kept 16 total)
- Backend: Updated categories.js and db/seeds/01_categories.sql

**Section Restructure**:
- Split "Fotoğraflar ve Ek Notlar" into 2 sections
- Ek Notlar → "Bize iletmek istediğiniz özel notlar" (2-line)

### Phase 2 (Commit: f20e890)

**Accordion Sections**:
- Added 3 placeholder accordions to each form type (Mekan, Patili, Sanatçı)
- Titles: "Bilgi 2", "Bilgi 3", "Bilgi 4"
- Content: "Bu alan içerik için hazırlanmıştır"

**Sanatçı Form Restructure**:
- Removed: YouTube Kanalı, Müzik Linki fields
- Created: İletişim Bilgileri card (Telefon/E-Posta/Instagram in 1 row)
- Card order: İletişim Bilgileri → Sanatçı Bilgileri

**Patili Form Restructure**:
- Created: İletişim Bilgileri card (2x2 layout)
- Moved: Patili Bilgileri card to first position
- Card order: Patili Bilgileri → İletişim Bilgileri

**Dynamic Labels (JavaScript)**:
- Title label changes based on selected type
- Common contact fields auto-hide for Artist & Pet

---

## 🔐 Environment Variables

Required in Vercel:
```env
POSTGRES_URL=postgresql://...          # Neon database URL
BLOB_READ_WRITE_TOKEN=...              # Vercel Blob token
ADMIN_API_KEY=...                      # Admin authentication
```

---

## 🚀 Git Information

**Current Branch**: `claude/form-improvements-mjpxos07y4z09uzw-v21ABC`

**Latest Tags**:
- kasguide-301225-stable-v21.0-claude (current)
- kasguide-301225-stable-v20.0-claude
- kasguide-301225-stable-v11.0-claude
- kasguide-301225-stable-v10.0-claude

**Branch Naming Convention**:
```
claude/[feature-name]-mjpxos07y4z09uzw-[sessionID]
```

**Important**: Branch must start with `claude/` and end with session ID for push to work.

---

## 📊 Data Migration History

1. **v10.0**: Initial unified items system (356 items migrated)
2. **v11.0**: Form beautification (category grids, selection boxes)
3. **v20.0**: Added 3 new categories (Röportaj, Fotoğraf, Acil Durum)
4. **v21.0**: Major form improvements (current)

---

## 🐛 Known Issues & Solutions

### Push 403 Errors
**Issue**: `git push` returns HTTP 403
**Solution**: Retry with exponential backoff (2s, 4s, 8s, 16s)

### Remote Database Access
**Issue**: Can't use `psql` directly (Neon is remote)
**Solution**: Use `node db/reset-database.js` with smart SQL parser

### Category ID Mismatches
**Issue**: English slugs vs Turkish slugs
**Solution**: All category IDs now use Turkish slugs (plaj, aktivite, etc.)

---

## 📞 Contact Field Mapping

When form is submitted, contact fields are mapped based on type:

**Place & Hotel**:
- Uses common fields: `phone`, `email`, `website`, `instagram`

**Pet**:
- Maps `petPhone` → `phone`
- Maps `petEmail` → `email`
- Maps `petWebsite` → `website`
- Maps `petInstagram` → `instagram`

**Artist**:
- Maps `artistPhone` → `phone`
- Maps `artistEmail` → `email`
- Maps `artistInstagram` → `instagram`
- Website field removed (not needed)

---

## 🎨 CSS Architecture

**Shared Styles** (`/add/shared/`):
- `base.css` - Reset, variables, typography
- `layout.css` - Grid, containers, spacing
- `components.css` - Buttons, cards, forms

**Custom Styles**:
- Inline `<style>` blocks for page-specific styles
- Category color classes in `categories.js`

---

## 🔍 Search & Filter Logic

**Homepage** (`script.js`):
```javascript
// Category filtering (for places)
fetch('/api/items?type=place&category=bar')

// Uses JSONB contains operator in backend:
// WHERE attributes->'categories' @> '["bar"]'::jsonb
```

**Admin Panel**:
```javascript
// Combined filtering
fetch('/api/admin/items?status=pending&type=place', {
  headers: {'X-API-Key': apiKey}
})
```

---

## 🛡️ Security Notes

1. **Admin API Key**: Required in `X-API-Key` header for admin endpoints
2. **File Upload**: Max 5 files, 2MB each, images only
3. **SQL Injection**: Prevented by parameterized queries
4. **CORS**: Configured for Vercel deployment

---

## 📝 TODO / Future Improvements

Based on placeholder content:
- [ ] Fill accordion content for "Bilgi 2", "Bilgi 3", "Bilgi 4"
- [ ] Add search functionality to homepage
- [ ] Implement image optimization/resizing
- [ ] Add email notifications for new submissions
- [ ] Create analytics dashboard

---

**End of Documentation**

*This document should be updated whenever major changes are made to the system.*
