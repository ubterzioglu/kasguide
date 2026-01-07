# Kaş Guide - Project Documentation

**Generated**: 2026-01-01  
**Project**: Kaş Guide (kasguide.de)  
**Type**: Local Travel Guide Platform

---

## 📋 Executive Summary

Kaş Guide is a comprehensive, database-driven local guide platform for Kaş, Turkey. The platform provides information about places to visit, restaurants, hotels, pet-friendly venues, articles, interviews, and practical travel information. The site is built with a modern tech stack using PostgreSQL, Node.js, and Vercel serverless functions.

### Key Metrics
- **Total HTML Pages**: ~39 pages
- **Database-Driven Content**: Places, Hotels, Pets, Articles, Interviews, FAQs
- **Analytics**: GoatCounter (privacy-friendly analytics)
- **SEO Implementation**: ~90% complete
- **Analytics Coverage**: ~92% of public pages

---

## 🏗️ Architecture Overview

### Technology Stack
- **Frontend**: Static HTML/CSS/JavaScript (vanilla JS)
- **Backend**: Node.js (ES Modules)
- **Database**: PostgreSQL (Vercel Postgres)
- **Hosting**: Vercel (serverless functions)
- **File Storage**: Vercel Blob Storage
- **Analytics**: GoatCounter (https://kasguidede.goatcounter.com)

### Project Structure
```
kasguide/
├── api/                    # Serverless API endpoints
│   ├── admin/             # Admin panel APIs
│   ├── analytics/         # Analytics tracking
│   └── [various]-submit.js # Form submission handlers
├── db/                    # Database schemas and migrations
├── lib/                   # Shared utilities (SEO, DB, upload)
├── [sections]/           # Main content sections
│   ├── places/           # Venue listings
│   ├── articles/         # Blog articles
│   ├── interviews/        # Interview content
│   ├── faq/              # FAQ section
│   ├── planner/          # Trip planner tool
│   └── ...
├── add/                  # Content submission forms
└── admin/                # Admin dashboard
```

---

## 🗄️ Database Architecture

### Unified Items Schema
The project uses a **unified items table** (`items`) that consolidates:
- **Places** (restaurants, bars, cafes, attractions)
- **Hotels** (accommodations)
- **Pets** (pet-friendly venues)
- **Artists** (local artists/creators)

**Key Features**:
- Single table with `item_type` discriminator
- JSONB `attributes` field for type-specific data
- JSONB `photos` array for image management
- Status workflow: `pending` → `approved` → `active`
- Unified querying and management

### Additional Tables
- `venue_analytics` - Page view and interaction tracking
- `articles` - Blog articles and long-form content
- `interviews` - Interview content
- `faqs` - FAQ questions and answers
- `faqspecial` - Special FAQ series
- `surveys` - User surveys and voting
- `ratings` - Venue ratings (Google, Tripadvisor sync)
- `categories` - Content categorization
- `badges` - Trust badges (e.g., "Tourist Friendly")

---

## 📊 SEO Implementation Status

### ✅ Fully Optimized Pages (Complete SEO + Analytics)

| Page | SEO Meta | OG Tags | Twitter | Canonical | Structured Data | GoatCounter |
|------|----------|---------|---------|-----------|-----------------|-------------|
| `index.html` | ✅ | ✅ | ✅ | ✅ | WebSite + Organization | ✅ |
| `faq/faq.html` | ✅ | ✅ | ✅ | ✅ | FAQPage | ✅ |
| `contact/contact.html` | ✅ | ✅ | ✅ | ✅ | Organization | ✅ |
| `contact/benioku.html` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `places/places.html` | ✅* | ✅* | ✅* | ✅* | Place/LocalBusiness* | ✅ |
| `articles/articles.html` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `interviews/interviews.html` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `planner/planner.html` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `feedback/feedback.html` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `anket/anket.html` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `hotelsoon.html` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `emergency/emergency.html` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `bizkimiz/bizkimiz.html` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `fastlink/pop10/pop10.html` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `fastlink/familyfriendly/familyfriendly.html` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `faqspecial/faqspecial.html` | ✅* | ✅* | ✅* | ✅* | - | ✅ |
| `404.html` | ⚠️ | ❌ | ❌ | ❌ | - | ✅ |

*Dynamic SEO: Meta tags injected via JavaScript based on venue data

### ⚠️ Partially Optimized Pages

| Page | Issues | Priority |
|------|--------|----------|
| `faqspecial/faqspecial.html` | ✅ Fixed - SEO + Analytics added | ✅ |
| `fastlink/freeentrance/freeentrance.html` | ⚠️ Needs verification | 🟡 MEDIUM |

### 📝 SEO Features Implemented

1. **Meta Tags**:
   - Title tags (optimized for 2026)
   - Meta descriptions (140-160 chars)
   - Keywords meta tags
   - Canonical URLs
   - Robots meta tags

2. **Open Graph (Social Sharing)**:
   - og:title, og:description, og:image
   - og:type, og:url, og:locale
   - og:site_name

3. **Twitter Cards**:
   - twitter:card, twitter:title, twitter:description, twitter:image

4. **Structured Data (JSON-LD)**:
   - **Homepage**: WebSite + Organization schema
   - **FAQ Page**: FAQPage schema (all Q&A)
   - **Contact**: Organization schema
   - **Places**: Dynamic Place/LocalBusiness schema (via JavaScript)

5. **Technical SEO**:
   - ✅ `robots.txt` (with AI bot allowlist)
   - ✅ Dynamic XML sitemap (`/api/sitemap.xml.js`)
   - ✅ `llms.txt` for AI discoverability
   - ✅ Canonical URLs on all pages
   - ✅ Mobile-responsive meta tags

### 🔴 SEO Issues Found

1. ~~**Missing SEO on `faqspecial/faqspecial.html`**~~ ✅ **FIXED**
   - ✅ Added meta description
   - ✅ Added Open Graph tags
   - ✅ Added Twitter cards
   - ✅ Added canonical URL
   - ✅ Added GoatCounter analytics
   - ✅ Added dynamic SEO updates for individual FAQ series

2. **404 Page Missing SEO**:
   - Basic title only
   - No meta description
   - No OG/Twitter tags
   - **Impact**: Low priority, but should be fixed

3. **Missing Structured Data**:
   - Articles page: No Article/BlogPosting schema
   - Interviews page: No Article schema
   - Hotels/Pets detail pages: No schema (only places have it)
   - **Impact**: Missing rich results in search

---

## 📈 Analytics Implementation Status

### GoatCounter Analytics

**Implementation**: Privacy-friendly, GDPR-compliant analytics  
**Script**: `<script data-goatcounter="https://kasguidede.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>`

### ✅ Pages WITH GoatCounter (22 pages)

1. `index.html` ✅
2. `faq/faq.html` ✅
3. `contact/contact.html` ✅
4. `contact/benioku.html` ✅
5. `places/places.html` ✅
6. `articles/articles.html` ✅
7. `interviews/interviews.html` ✅
8. `planner/planner.html` ✅
9. `feedback/feedback.html` ✅
10. `anket/anket.html` ✅
11. `hotelsoon.html` ✅
12. `emergency/emergency.html` ✅
13. `bizkimiz/bizkimiz.html` ✅
14. `fastlink/pop10/pop10.html` ✅
15. `fastlink/familyfriendly/familyfriendly.html` ✅
16. `404.html` ✅
17. `add/pet/add-pet.html` ✅
18. `add/otel/add-hotel.html` ✅
19. `add/place/add-place.html` ✅
20. `add/artist/add-artist.html` ✅
21. `add/pet/try/add-pet.html` ✅
22. `fastlink/freeentrance/freeentrance.html` ✅ (needs verification)

### ❌ Pages MISSING GoatCounter

~~1. **`faqspecial/faqspecial.html`**~~ ✅ **FIXED**
   - ✅ GoatCounter analytics added

### Custom Analytics (Database Tracking)

**Endpoint**: `/api/analytics/track`  
**Purpose**: Track venue views and interactions  
**Features**:
- Rate limiting (5-minute window per session)
- Session tracking via cookies
- Stores: venue_id, venue_type, event_type, referrer, user_agent
- Used by: `places/places.js` for venue detail views

**Admin Dashboard**: `/admin/analytics.html`
- View analytics summary
- Filter by time period
- Top venues, categories, referrers

---

## 🔍 Content Types & Features

### 1. Places (Venues)
- **Route**: `/places/places.html?id={id}`
- **Data Source**: Database (`items` table, `item_type='place'`)
- **Features**:
  - Dynamic SEO meta tags
  - Structured data (Place/LocalBusiness)
  - Analytics tracking
  - Category filtering
  - Search functionality
  - Badge system (Tourist Friendly, etc.)

### 2. Articles
- **Route**: `/articles/articles.html?id={id}`
- **Data Source**: Database (`articles` table)
- **Features**:
  - Article listing and detail pages
  - Author and read time metadata
  - **Missing**: Article schema (JSON-LD)

### 3. Interviews
- **Route**: `/interviews/interviews.html?id={id}`
- **Data Source**: Database (`interviews` table)
- **Features**:
  - Interview listing and detail pages
  - Interviewee and interviewer metadata
  - **Missing**: Article schema (JSON-LD)

### 4. FAQs
- **Route**: `/faq/faq.html`
- **Data Source**: Static JS file (`faq-list-data.js`) + Database
- **Features**:
  - Searchable FAQ list
  - FAQPage structured data
  - ~500 questions

### 5. Special FAQ Series
- **Route**: `/faqspecial/faqspecial.html?id={id}`
- **Data Source**: Database (`faqspecial` table)
- **Features**:
  - Dynamic SEO meta tags (updates per FAQ series)
  - GoatCounter analytics
  - FAQ series listing and detail pages

### 6. Planner Tool
- **Route**: `/planner/planner.html`
- **Features**:
  - 25-question survey
  - Personalized daily itinerary
  - Place recommendations based on preferences
  - Scoring algorithm for venue matching

### 7. Surveys
- **Route**: `/anket/anket.html`
- **Data Source**: Database (`surveys` table)
- **Features**:
  - Multiple choice surveys
  - Voting system
  - Results display

### 8. Hotels
- **Route**: `/hotelsoon.html` (coming soon page)
- **Status**: Placeholder page
- **Future**: Will use `items` table with `item_type='hotel'`

### 9. Pet-Friendly Venues
- **Route**: `/pet/pet2.html` (or `/pet/pet.html`)
- **Data Source**: Database (`items` table, `item_type='pet'`)
- **Note**: `pet/pet2.html` is disallowed in robots.txt (duplicate)

---

## 🛠️ API Endpoints

### Public APIs
- `GET /api/items?type={place|hotel|pet}` - List items
- `GET /api/articles` - List articles
- `GET /api/interviews` - List interviews
- `GET /api/faqspecial` - List FAQ series
- `GET /api/hotels` - List hotels
- `GET /api/pets` - List pets
- `GET /api/places` - List places
- `GET /api/sitemap.xml.js` - Dynamic sitemap
- `POST /api/analytics/track` - Track venue views

### Submission APIs
- `POST /api/item-submit.js` - Submit place/hotel/pet
- `POST /api/artist-submit.js` - Submit artist
- `POST /api/hotel-submit.js` - Submit hotel
- `POST /api/pet-submit.js` - Submit pet
- `POST /api/venue-submit.js` - Submit venue
- `POST /api/feedback-submit.js` - Submit feedback
- `POST /api/surveys/vote.js` - Vote on survey

### Admin APIs (Protected)
- `GET /api/admin/analytics` - Analytics data
- `GET /api/admin/artists` - Manage artists
- `GET /api/admin/hotels` - Manage hotels
- `GET /api/admin/items` - Manage items
- `GET /api/admin/pets` - Manage pets
- `GET /api/admin/places` - Manage places
- `GET /api/admin/ratings` - Manage ratings
- `GET /api/admin/surveys` - Manage surveys
- `POST /api/admin/sync-google-ratings.js` - Sync Google ratings
- `POST /api/admin/update-tripadvisor-rating.js` - Update Tripadvisor ratings

---

## 📁 Key Files & Modules

### SEO Module
**File**: `lib/seo-meta.js`  
**Exports**:
- `injectSEO(config)` - Inject meta tags
- `injectStructuredData(data)` - Inject JSON-LD
- `generateWebSiteSchema()` - WebSite schema
- `generateArticleSchema(config)` - Article schema
- `generatePlaceSchema(config)` - Place schema
- `generateFAQSchema(faqs)` - FAQPage schema
- `generateBreadcrumbSchema(breadcrumbs)` - Breadcrumb schema

### Database Modules
- `lib/db-analytics.js` - Analytics tracking functions
- `lib/db-artists.js` - Artist database operations
- `lib/db-hotels.js` - Hotel database operations
- `lib/db-items.js` - Unified items operations
- `lib/db-pets.js` - Pet database operations
- `lib/db-places.js` - Place database operations
- `lib/db-ratings.js` - Rating operations
- `lib/db-surveys.js` - Survey operations

### Upload Module
**File**: `lib/upload.js`  
**Purpose**: Handle image uploads to Vercel Blob Storage

---

## ⚠️ Issues & Recommendations

### 🔴 Critical Issues

1. ~~**`faqspecial/faqspecial.html` Missing SEO & Analytics**~~ ✅ **FIXED**
   - ✅ Added full SEO meta tags
   - ✅ Added GoatCounter script
   - ✅ Added dynamic SEO updates for individual items

2. **Missing Article Schema on Articles/Interviews**
   - **Impact**: No rich results in search
   - **Fix**: Add Article/BlogPosting JSON-LD schema
   - **Priority**: MEDIUM

3. **Duplicate Pet Pages**
   - **Issue**: `pet/pet.html` and `pet/pet2.html` both exist
   - **Status**: `pet/pet2.html` is disallowed in robots.txt
   - **Recommendation**: Remove duplicate or add canonical

### 🟡 Medium Priority

1. **Missing Breadcrumb Schema**
   - **Impact**: No breadcrumb navigation in search results
   - **Fix**: Add BreadcrumbList schema to detail pages
   - **Priority**: MEDIUM

2. **404 Page SEO**
   - **Impact**: Low, but should be complete
   - **Fix**: Add meta description and OG tags
   - **Priority**: LOW

3. **Hotel/Pet Detail Pages Missing Schema**
   - **Impact**: No structured data for hotels/pets
   - **Fix**: Add Hotel/Place schema similar to places
   - **Priority**: MEDIUM

### 🟢 Low Priority / Future Enhancements

1. **Internal Linking Strategy**
   - Add topic clusters and hub pages
   - Related content sections

2. **Image Optimization**
   - WebP/AVIF format
   - Responsive srcset
   - Image sitemaps

3. **Performance Optimization**
   - CSS/JS minification
   - CDN for static assets
   - Font optimization

---

## ✅ SEO Checklist Summary

### Completed ✅
- [x] robots.txt with AI bot allowlist
- [x] Dynamic XML sitemap
- [x] llms.txt for AI discoverability
- [x] Canonical URLs (most pages)
- [x] Meta tags (title, description, keywords)
- [x] Open Graph tags (most pages)
- [x] Twitter Cards (most pages)
- [x] Structured data (Homepage, FAQ, Contact, Places)
- [x] Mobile meta tags
- [x] GoatCounter analytics (most pages)

### Pending ⚠️
- [x] SEO on `faqspecial/faqspecial.html` ✅
- [ ] Article schema on articles/interviews
- [ ] Breadcrumb schema
- [ ] Hotel/Pet schema
- [ ] 404 page SEO

---

## 📊 Analytics Coverage

**Total Public Pages**: ~25  
**Pages with GoatCounter**: 23 (92%)  
**Pages Missing GoatCounter**: 0 ✅

**Custom Analytics**:
- Venue view tracking: ✅ Implemented
- Admin dashboard: ✅ Available at `/admin/analytics.html`

---

## 🚀 Deployment

### Platform
- **Hosting**: Vercel
- **Database**: Vercel Postgres (PostgreSQL)
- **Storage**: Vercel Blob Storage
- **Functions**: Serverless Node.js functions

### Environment Variables
```env
POSTGRES_URL=<vercel-postgres-connection>
BLOB_READ_WRITE_TOKEN=<vercel-blob-token>
SITE_URL=https://kasguide.de
```

### Build Process
- Static site (no build step)
- API functions deployed as serverless
- Database migrations via `db/migrate.js`

---

## 📝 Notes

1. **Domain**: Site uses `kasguide.de` (German TLD, Turkish content)
2. **Language**: Primary language is Turkish (tr)
3. **Content Strategy**: Community-driven with moderation
4. **Privacy**: GoatCounter chosen for privacy-friendly analytics
5. **AI Optimization**: Site optimized for AI search (llms.txt, structured data)

---

## 🔗 Key URLs

- **Homepage**: https://kasguide.de/
- **Sitemap**: https://kasguide.de/sitemap.xml
- **Robots.txt**: https://kasguide.de/robots.txt
- **llms.txt**: https://kasguide.de/llms.txt
- **Admin**: https://kasguide.de/admin/
- **Analytics Dashboard**: https://kasguide.de/admin/analytics.html

---

**Document Generated**: 2026-01-01  
**Last Audit**: 2026-01-01  
**Next Review**: Recommended quarterly
