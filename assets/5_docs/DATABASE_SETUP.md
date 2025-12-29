# Kaş Guide - Database Migration Guide

This guide will help you migrate from static JavaScript data files to a PostgreSQL database with Vercel.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Database Setup](#database-setup)
3. [Environment Configuration](#environment-configuration)
4. [Running Migrations](#running-migrations)
5. [Importing Existing Data](#importing-existing-data)
6. [Testing the Setup](#testing-the-setup)
7. [Admin Panel Setup](#admin-panel-setup)
8. [Photo Storage Setup](#photo-storage-setup)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before starting, ensure you have:

- ✅ A Vercel account
- ✅ Project deployed on Vercel
- ✅ Node.js installed locally (v18+ recommended)
- ✅ Git repository connected to Vercel

---

## Database Setup

### Step 1: Create Vercel Postgres Database

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your `kasguide` project
3. Navigate to **Storage** tab
4. Click **Create Database**
5. Select **Postgres**
6. Choose a database name (e.g., `kasguide-db`)
7. Select region closest to your users (e.g., Frankfurt for Turkey)
8. Click **Create**

### Step 2: Connect Database to Project

1. In the database settings, click on **.env.local** tab
2. You'll see environment variables - **copy these**, you'll need them next

---

## Environment Configuration

### Step 1: Create Local Environment File

```bash
# Copy the example file
cp .env.example .env.local
```

### Step 2: Fill in Database Credentials

Edit `.env.local` and paste the Vercel Postgres environment variables:

```env
POSTGRES_URL="postgres://default:..."
POSTGRES_PRISMA_URL="postgres://default:..."
POSTGRES_URL_NON_POOLING="postgres://default:..."
POSTGRES_USER="default"
POSTGRES_HOST="..."
POSTGRES_PASSWORD="..."
POSTGRES_DATABASE="verceldb"
```

### Step 3: Set Up Admin API Key

Generate a secure random key for admin access:

```bash
# On Linux/Mac:
openssl rand -hex 32

# Or use any secure random string generator
```

Add to `.env.local`:

```env
ADMIN_API_KEY="your-generated-secure-key-here"
```

### Step 4: Configure Email (Optional)

If you want email notifications for new submissions:

```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="465"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-specific-password"
MAIL_TO="mekan@kasguide.de"
```

**Note**: For Gmail, you need to [create an App Password](https://support.google.com/accounts/answer/185833).

### Step 5: Add Environment Variables to Vercel

1. Go to Vercel Dashboard > Your Project > Settings > Environment Variables
2. Add the following variables (one by one):
   - `ADMIN_API_KEY` (from step 3)
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (if using email)
   - `MAIL_TO` (if using email)

**Note**: Postgres variables are automatically set by Vercel when you connect the database.

---

## Running Migrations

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Test Database Connection

```bash
node db/migrate.js
```

This will:
- ✅ Test connection to Postgres
- ✅ Create all database tables
- ✅ Insert reference data (categories, badges)

Expected output:
```
╔════════════════════════════════════════╗
║   Kaş Guide Database Migration         ║
╚════════════════════════════════════════╝

✅ Database connected
   Time: 2025-12-29T...
   PostgreSQL: PostgreSQL 15.x

🔨 Creating database schema...

📄 Executing: schema.sql
✅ Completed: schema.sql

🌱 Inserting seed data...

📄 Executing: 01_categories.sql
✅ Completed: 01_categories.sql

📄 Executing: 02_badges.sql
✅ Completed: 02_badges.sql

✨ Migration completed successfully!
```

---

## Importing Existing Data

### Import All Existing Data

```bash
node db/import-data.js
```

This will import:
- 📍 **Places** (40+ venues from `places/places-data.js`)
- 🏨 **Hotels** (from `hotel/hotels-data.js`)
- ❓ **FAQs** (170+ questions from `faq/faq-list-data.js`)

Expected output:
```
╔════════════════════════════════════════╗
║   Kaş Guide Data Import                ║
╚════════════════════════════════════════╝

📍 Importing Places...
   Found 42 places to import
   ✅ Imported: Frida Pub
   ✅ Imported: Manos Greek Tavern
   ...
   📊 Results: 42 imported, 0 skipped

🏨 Importing Hotels...
   Found 1 hotels to import
   ✅ Imported: Mavi Deniz Butik Otel
   📊 Results: 1 imported, 0 skipped

❓ Importing FAQs...
   Found 172 FAQs to import
   📊 Results: 172 imported

✨ Data import completed!
```

### Import Specific Entity Types

```bash
# Import only places
node db/import-data.js places

# Import only hotels
node db/import-data.js hotels

# Import only FAQs
node db/import-data.js faqs
```

---

## Testing the Setup

### Test 1: Verify Data Import

```bash
# Check if places are in database
node -e "import('./lib/db-places.js').then(m => m.getAllPlaces()).then(console.log)"
```

You should see an array of places.

### Test 2: Test API Endpoints

Start the development server:

```bash
npm run dev
# or
vercel dev
```

Then test the endpoints:

```bash
# Get all places
curl http://localhost:3000/api/places

# Get single place
curl http://localhost:3000/api/places?slug=frida-pub

# Search places
curl http://localhost:3000/api/places?search=bar
```

### Test 3: Test Submission Form

1. Open `http://localhost:3000/add/place/add-place.html`
2. Fill out the form
3. Submit
4. Check admin panel to see pending submission

---

## Admin Panel Setup

### Step 1: Access Admin Panel

Navigate to: `http://localhost:3000/admin/` (or `https://your-domain.vercel.app/admin/`)

### Step 2: Login

Enter your `ADMIN_API_KEY` from `.env.local`

### Step 3: Review Submissions

- **Bekleyenler (Pending)**: New submissions waiting for approval
- **Onaylananlar (Approved)**: Published places
- **Reddedilenler (Rejected)**: Rejected submissions

### Admin Actions

- ✅ **Onayla (Approve)**: Publish the place
- ❌ **Reddet (Reject)**: Reject the submission
- 🗑️ **Sil (Delete)**: Permanently delete

---

## Photo Storage Setup

### Option 1: Vercel Blob (Recommended for Production)

1. Go to Vercel Dashboard > Storage > Create Database
2. Select **Blob**
3. Copy the `BLOB_READ_WRITE_TOKEN`
4. Add to `.env.local` and Vercel environment variables

Photos will be uploaded to Vercel Blob automatically.

**Pricing**: $0.15/GB storage + $0.075/GB bandwidth

### Option 2: Local Storage (Development Only)

If `BLOB_READ_WRITE_TOKEN` is not set, photos will be saved to `/public/uploads/`

**Warning**: Local storage doesn't work on Vercel. Use Blob for production.

---

## Troubleshooting

### Database Connection Fails

**Problem**: `Database connection failed: getaddrinfo ENOTFOUND`

**Solution**:
1. Check `.env.local` has correct `POSTGRES_URL`
2. Ensure database is created in Vercel dashboard
3. Try running `vercel env pull .env.local` to sync environment variables

### Migration Fails

**Problem**: `relation "places" already exists`

**Solution**:
The tables already exist. This is fine - the migration uses `CREATE TABLE IF NOT EXISTS`.

### Import Shows "0 imported"

**Problem**: Data files not found

**Solution**:
1. Ensure you're on the `dev` branch: `git checkout dev`
2. Check that `places/places-data.js` exists
3. Verify the file has the `allPlaces` array

### Admin Panel Won't Load

**Problem**: API returns 401 Unauthorized

**Solution**:
1. Check `ADMIN_API_KEY` is set in environment variables
2. Ensure the key matches in `.env.local` and admin panel login
3. Check browser console for errors

### Photos Not Uploading

**Problem**: Upload fails or photos not visible

**Solution**:

**For development**:
- Create `public/uploads/` directory manually
- Check file permissions

**For production**:
- Set up Vercel Blob storage
- Add `BLOB_READ_WRITE_TOKEN` to environment variables
- Redeploy after adding the token

### Email Notifications Not Sending

**Problem**: SMTP errors

**Solution**:
1. For Gmail: Create an [App Password](https://support.google.com/accounts/answer/185833)
2. Don't use your regular Gmail password
3. Check SMTP settings are correct
4. Test with a simple SMTP checker tool first

---

## Database Schema Overview

### Core Tables

| Table | Purpose | Key Fields |
|-------|---------|------------|
| `places` | Venues, restaurants, bars | title, description, location, status |
| `place_images` | Photo gallery for places | place_id, image_url |
| `place_categories` | Place-to-category mapping | place_id, category_id |
| `hotels` | Hotel listings | title, hotel_type, star_rating |
| `pets` | Lost/found pet listings | pet_type, listing_type, status |
| `articles` | Blog articles | title, content, slug |
| `faqs` | FAQ questions & answers | question, answer |
| `categories` | Reference: category types | slug, name, icon |
| `badges` | Reference: place badges | slug, emoji, title |
| `audit_log` | Admin action logging | action, entity_type, changes |

### Data Flow

```
User Form → API Endpoint → Database (pending) → Admin Review → Publish
                                                              ↓
                                                         Frontend Display
```

---

## Next Steps

### 1. Frontend Integration

Update your frontend JavaScript files to fetch from the database:

**Before** (static data):
```javascript
import { allPlaces } from './places-data.js';
```

**After** (database):
```javascript
const response = await fetch('/api/places?category=bar');
const { places } = await response.json();
```

### 2. Deploy to Production

```bash
# Commit your changes
git add .
git commit -m "Add database migration"

# Push to deploy
git push origin feature/database-migration
```

Create a pull request and merge to main. Vercel will automatically deploy.

### 3. Set Up Admin Workflow

1. Share admin panel URL with team: `https://your-domain.vercel.app/admin/`
2. Share `ADMIN_API_KEY` securely (use password manager)
3. Set up email notifications for new submissions
4. Create a process for reviewing and approving content

---

## Support

If you encounter issues:

1. Check this documentation first
2. Review error messages carefully
3. Check Vercel deployment logs
4. Verify all environment variables are set
5. Test locally before deploying

---

## Summary Checklist

- [ ] Vercel Postgres database created
- [ ] Environment variables configured (.env.local)
- [ ] Database schema created (`node db/migrate.js`)
- [ ] Existing data imported (`node db/import-data.js`)
- [ ] API endpoints tested (GET /api/places)
- [ ] Admin panel accessible
- [ ] Photo storage configured (Blob or local)
- [ ] Email notifications working (optional)
- [ ] Environment variables added to Vercel
- [ ] Deployed to production

---

**🎉 Congratulations!** Your Kaş Guide database is now set up and ready for production use!
