# Deployment and Testing Checklist

This document provides a comprehensive checklist for deploying and testing the Kaş Guide application on Vercel.

## ✅ Pre-Deployment Checklist

### 1. Database Configuration
- [x] Neon PostgreSQL database created
- [x] Database schema migrated (`npm run db:migrate`)
- [x] All data imported:
  - [x] Places (353 items)
  - [x] Hotels (1 item)
  - [x] Pets (2 items)
  - [x] Articles (2 items)
  - [x] FAQ Series (1 item)
  - [x] FAQs (500 items)
  - [x] Categories (15 items)
  - [x] Badges (16 items)

### 2. Environment Variables
Required in Vercel project settings:

```bash
POSTGRES_URL=postgresql://neondb_owner:...@ep-...neon.tech/neondb?sslmode=require
ADMIN_API_KEY=d57c5c18ccb3c25b436001888fd7381674216d7954f753fc376ce8872e20dfed
```

**How to set:**
1. Go to Vercel Dashboard
2. Select your project
3. Settings → Environment Variables
4. Add both variables for Production, Preview, and Development

### 3. Code Verification
- [x] Frontend updated to use database APIs (`script.js`)
- [x] Static data imports removed from `index.html`
- [x] All API endpoints created:
  - [x] `/api/places.js`
  - [x] `/api/hotels.js`
  - [x] `/api/pets.js`
  - [x] `/api/articles.js`
  - [x] `/api/faqspecial.js`
  - [x] `/api/faqs.js`
- [x] Admin panel updated (`/admin/index.html`)
- [x] Template system created (`/template/`)

### 4. File Structure
```
kasguide/
├── api/
│   ├── places.js
│   ├── hotels.js
│   ├── pets.js
│   ├── articles.js
│   ├── faqspecial.js
│   ├── faqs.js
│   └── admin/
│       └── places.js
├── db/
│   ├── connection.js
│   ├── schema.sql
│   ├── migrate.js
│   └── import-data.js
├── lib/
│   └── db-places.js
├── admin/
│   └── index.html
├── template/
│   ├── template.html
│   ├── template-style.css
│   ├── template-data.js
│   ├── template-script.js
│   ├── README.md
│   └── example/
│       └── index.html
├── index.html
├── script.js
├── package.json
├── vercel.json
└── .env.local (gitignored)
```

## 🚀 Deployment Steps

### Step 1: Push to GitHub
```bash
# Ensure all changes are committed
git status

# Push to the designated branch
git push -u origin claude/audit-dependencies-mjpxos07y4z09uzw-ciO8R
```

### Step 2: Deploy to Vercel

**Option A: Automatic Deployment (if already connected)**
- Vercel automatically deploys when you push to GitHub
- Check Vercel dashboard for deployment status

**Option B: Manual Deployment**
```bash
# Install Vercel CLI if not installed
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Step 3: Set Environment Variables
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → Settings → Environment Variables
3. Add:
   - `POSTGRES_URL` - Your Neon database connection string
   - `ADMIN_API_KEY` - Admin authentication key
4. Redeploy to apply environment variables

## 🧪 Testing Checklist

### 1. Frontend Tests

#### Main Page (index.html)
- [ ] Page loads without errors
- [ ] Hero section displays correctly
- [ ] Search box is functional
- [ ] Stats bar shows correct counts
- [ ] Categories grid renders
- [ ] All category counts are accurate

#### Data Loading
- [ ] Places load from API
- [ ] Hotels load from API
- [ ] Pets load from API
- [ ] Articles load from API
- [ ] FAQ Series load from API
- [ ] Cards display correctly

#### Search Functionality
- [ ] Search input works
- [ ] Results update as you type
- [ ] Search matches titles
- [ ] Search matches descriptions
- [ ] Clear button works
- [ ] Stats update with search

#### Filtering
- [ ] Category filters work
- [ ] Active filter is highlighted
- [ ] Multiple categories supported
- [ ] Filter counts are correct
- [ ] "Clear Filters" button works
- [ ] Stats update with filters

#### Combined Filters
- [ ] Search + Category filter works
- [ ] Active filter count is correct
- [ ] No results message shows when appropriate

### 2. API Endpoint Tests

Test each endpoint in browser or with curl:

#### GET /api/places
```bash
# All places
curl https://your-app.vercel.app/api/places

# Single place by slug
curl https://your-app.vercel.app/api/places?slug=kaputas-plaji

# Filter by category
curl https://your-app.vercel.app/api/places?category=plajlar
```

Expected Response:
```json
{
  "places": [...],
  "count": 353
}
```

#### GET /api/hotels
```bash
curl https://your-app.vercel.app/api/hotels
```

#### GET /api/pets
```bash
curl https://your-app.vercel.app/api/pets
```

#### GET /api/articles
```bash
curl https://your-app.vercel.app/api/articles
```

#### GET /api/faqspecial
```bash
curl https://your-app.vercel.app/api/faqspecial
```

#### GET /api/faqs
```bash
curl https://your-app.vercel.app/api/faqs
```

### 3. Admin Panel Tests

Access: `https://your-app.vercel.app/admin/`

- [ ] Login page loads
- [ ] Can login with API key
- [ ] Dashboard shows pending submissions
- [ ] Places list loads
- [ ] Can view place details
- [ ] Can approve places
- [ ] Can reject places
- [ ] Can delete places
- [ ] Stats are accurate
- [ ] Search works in admin panel
- [ ] Filter by status works

### 4. Template System Tests

Access: `https://your-app.vercel.app/template/example/`

- [ ] Preview page loads
- [ ] Sample beach data displays
- [ ] Search works
- [ ] Category filters work
- [ ] Cards render correctly
- [ ] Stats update
- [ ] Responsive design works
- [ ] README is accessible

### 5. Performance Tests

- [ ] Page load time < 3 seconds
- [ ] API responses < 1 second
- [ ] No console errors
- [ ] No failed network requests
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] Works on different browsers:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

### 6. Database Tests

- [ ] Database connection works
- [ ] Queries execute successfully
- [ ] Data is retrieved correctly
- [ ] Joins work (images, categories, etc.)
- [ ] Parameterized queries prevent SQL injection
- [ ] Connection pooling works

## 🐛 Common Issues and Solutions

### Issue: API returns 500 error
**Solution:** Check Vercel logs for database connection errors. Verify `POSTGRES_URL` is set correctly.

### Issue: Data not loading on frontend
**Solution:**
1. Open browser console for errors
2. Check Network tab for failed API calls
3. Verify API endpoints return data

### Issue: Environment variables not working
**Solution:**
1. Redeploy after setting environment variables
2. Check they're set for the correct environment (Production/Preview)

### Issue: Admin panel login fails
**Solution:** Verify `ADMIN_API_KEY` matches in both Vercel settings and login attempt.

### Issue: Database connection timeout
**Solution:** Check Neon database is running and connection string is correct.

## 📊 Success Criteria

All tasks completed when:
- ✅ Application deployed to Vercel
- ✅ All API endpoints working
- ✅ Frontend loads data from database
- ✅ Search and filters functional
- ✅ Admin panel accessible and working
- ✅ Template system accessible
- ✅ No console errors
- ✅ Mobile responsive
- ✅ Performance acceptable

## 🔗 Important Links

- **Live Site:** https://your-app.vercel.app
- **Admin Panel:** https://your-app.vercel.app/admin/
- **Template Preview:** https://your-app.vercel.app/template/example/
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Neon Database:** https://console.neon.tech
- **GitHub Repo:** https://github.com/ubterzioglu/kasguide

## 📝 Post-Deployment Tasks

1. [ ] Test all functionality
2. [ ] Monitor Vercel analytics
3. [ ] Check database performance
4. [ ] Review server logs for errors
5. [ ] Update documentation if needed
6. [ ] Create pull request if needed
7. [ ] Notify stakeholders of deployment

## 🎉 Final Notes

Once all tests pass:
1. Document any issues encountered
2. Note performance metrics
3. Save deployment URL for reference
4. Consider setting up monitoring/alerts
5. Plan for future updates

---

**Last Updated:** 2024-12-29
**Deployment Branch:** claude/audit-dependencies-mjpxos07y4z09uzw-ciO8R
