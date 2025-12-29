# Vercel Database Setup - Complete Beginner's Guide

**Follow this guide step-by-step. Take your time, and don't skip any steps!**

---

## 🎯 What We'll Do

1. Create a Postgres database on Vercel
2. Get the connection credentials
3. Set up your local environment
4. Create the database tables
5. Import your existing data
6. Test everything works
7. Deploy to production

**Time needed**: ~30 minutes

---

## Part 1: Create Vercel Postgres Database

### Step 1: Go to Vercel Dashboard

1. Open your browser
2. Go to: https://vercel.com/dashboard
3. Log in to your Vercel account

### Step 2: Select Your Project

1. You should see your projects listed
2. Click on **kasguide** (or whatever you named your project)
3. You'll see your project dashboard

### Step 3: Create a Database

1. At the top of the page, click on the **"Storage"** tab
   - (It's next to Settings, Deployments, etc.)

2. Click the **"Create Database"** button
   - (Big button, usually in the middle of the page)

3. You'll see several database options:
   - **Postgres** ← We want this one!
   - KV
   - Blob
   - Edge Config

4. Click on **"Postgres"**

### Step 4: Configure Database

You'll see a form. Fill it out:

1. **Database Name**:
   - Type: `kasguide-db` (or any name you like)
   - This is just for you to identify it

2. **Region**:
   - Choose: **Frankfurt, Germany (fra1)** (closest to Turkey)
   - Or choose the region closest to where most of your users are

3. **Price**:
   - Should show "Hobby - Free"
   - This includes 256 MB storage and 60 hours compute/month
   - Perfect for starting!

4. Click **"Create"** button at the bottom

### Step 5: Wait for Database Creation

- Vercel will create your database
- This takes about 30-60 seconds
- You'll see a loading spinner
- When done, you'll see "Database created successfully!" ✅

---

## Part 2: Get Your Database Credentials

### Step 6: Copy Environment Variables

After your database is created, you'll see the database dashboard.

1. Look for a tab or section called **".env.local"**
   - Click on it

2. You'll see a code block with environment variables like this:
   ```
   POSTGRES_URL="postgres://default:xxxxx@xxxxx.postgres.vercel-storage.com:5432/verceldb"
   POSTGRES_PRISMA_URL="postgres://default:xxxxx@xxxxx.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"
   POSTGRES_URL_NON_POOLING="postgres://default:xxxxx@xxxxx.postgres.vercel-storage.com:5432/verceldb"
   POSTGRES_USER="default"
   POSTGRES_HOST="xxxxx.postgres.vercel-storage.com"
   POSTGRES_PASSWORD="xxxxx"
   POSTGRES_DATABASE="verceldb"
   ```

3. Click the **"Copy"** button (usually top-right of the code block)
   - This copies ALL the variables at once

4. **IMPORTANT**: Keep this page open or save these somewhere safe temporarily!

---

## Part 3: Set Up Your Local Environment

### Step 7: Create Environment File

Now we'll set up your local computer to connect to the database.

1. Open your terminal/command prompt

2. Make sure you're in the kasguide project directory:
   ```bash
   cd /home/user/kasguide
   pwd  # Should show: /home/user/kasguide
   ```

3. Create the environment file:
   ```bash
   touch .env.local
   ```

### Step 8: Add Database Credentials

1. Open the `.env.local` file in a text editor
   ```bash
   # You can use any editor. For example:
   nano .env.local
   # or
   vim .env.local
   # or open in VS Code
   ```

2. **Paste** the database credentials you copied from Vercel (Step 6)

3. Now add these additional lines at the bottom:
   ```env
   # Admin Panel API Key (generate a random secure key)
   ADMIN_API_KEY="change-this-to-a-random-secure-string"

   # Email settings (optional - you can add these later)
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="465"
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-app-password"
   MAIL_TO="mekan@kasguide.de"
   ```

4. **Generate a secure admin API key**:
   ```bash
   # Run this command to generate a random key:
   openssl rand -hex 32

   # Example output:
   # a3f5e8d9c1b4a7f2e6d8c9b3a5f7e9d1c4b6a8f3e5d7c9b2a4f6e8d1c3b5a7f9
   ```

5. Copy that random string and replace `change-this-to-a-random-secure-string` with it

6. Your `.env.local` should now look like this:
   ```env
   POSTGRES_URL="postgres://default:xxxxx@xxxxx..."
   POSTGRES_PRISMA_URL="postgres://default:xxxxx@xxxxx..."
   POSTGRES_URL_NON_POOLING="postgres://default:xxxxx@xxxxx..."
   POSTGRES_USER="default"
   POSTGRES_HOST="xxxxx.postgres.vercel-storage.com"
   POSTGRES_PASSWORD="xxxxx"
   POSTGRES_DATABASE="verceldb"

   ADMIN_API_KEY="a3f5e8d9c1b4a7f2e6d8c9b3a5f7e9d1c4b6a8f3e5d7c9b2a4f6e8d1c3b5a7f9"

   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="465"
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-app-password"
   MAIL_TO="mekan@kasguide.de"
   ```

7. **Save and close** the file
   - In nano: Press `Ctrl+X`, then `Y`, then `Enter`
   - In vim: Press `Esc`, type `:wq`, press `Enter`

8. **Verify the file was created**:
   ```bash
   cat .env.local
   # You should see your environment variables
   ```

---

## Part 4: Create Database Tables

### Step 9: Run the Migration

Now we'll create all the database tables!

1. Make sure you're still in the kasguide directory:
   ```bash
   pwd  # Should show: /home/user/kasguide
   ```

2. Run the migration command:
   ```bash
   npm run db:migrate
   ```

3. **What you should see**:
   ```
   ╔════════════════════════════════════════╗
   ║   Kaş Guide Database Migration         ║
   ╚════════════════════════════════════════╝

   ✅ Database connected
      Time: 2025-12-29T16:45:30.123Z
      PostgreSQL: PostgreSQL 15.5

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

4. **If you see this** ✅ - Perfect! Your database is ready!

### Step 10: Troubleshooting (Only if Step 9 Failed)

**Problem**: "Database connection failed: getaddrinfo ENOTFOUND"

**Solution**:
```bash
# 1. Check your .env.local file has the correct POSTGRES_URL
cat .env.local | grep POSTGRES_URL

# 2. Make sure there are no extra spaces or quotes
# 3. The URL should start with: postgres://default:

# 4. Try this command to re-sync from Vercel:
vercel env pull .env.local

# 5. Try the migration again:
npm run db:migrate
```

**Problem**: "relation 'places' already exists"

**Solution**:
- This is actually OK! It means tables are already created
- You can continue to the next step

---

## Part 5: Import Your Existing Data

### Step 11: Import Places, Hotels, and FAQs

Now let's import your existing data from the JavaScript files!

1. Run the import command:
   ```bash
   npm run db:import
   ```

2. **What you should see**:
   ```
   ╔════════════════════════════════════════╗
   ║   Kaş Guide Data Import                ║
   ╚════════════════════════════════════════╝

   📍 Importing Places...
      Found 42 places to import
      ✅ Imported: Frida Pub
      ✅ Imported: Manos Greek Tavern
      ✅ Imported: CI NEO Cucina by Mezetaryen
      ... (more places)

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

3. **If you see this** ✅ - Amazing! All your data is now in the database!

4. **Check how many places were imported**:
   ```bash
   # This will show you the count
   node -e "import('./lib/db-places.js').then(m => m.getAllPlaces()).then(p => console.log('Total places:', p.length))"
   ```

   You should see:
   ```
   Total places: 42
   ```
   (or however many you have)

---

## Part 6: Test Everything Works

### Step 12: Start the Development Server

1. Start your local server:
   ```bash
   npm run dev
   ```

   You should see:
   ```
   > Vercel CLI 33.x.x
   > Ready! Available at http://localhost:3000
   ```

2. **Keep this terminal open** - the server needs to stay running

### Step 13: Test the API

Open a **new terminal window** (keep the server running in the first one) and test:

1. **Test 1**: Get all places
   ```bash
   curl http://localhost:3000/api/places | jq '.places[0:3]'
   ```

   You should see JSON data with your places!

2. **Test 2**: Get a specific place
   ```bash
   curl http://localhost:3000/api/places?slug=frida-pub | jq
   ```

   You should see the Frida Pub details!

3. **Test 3**: Search
   ```bash
   curl http://localhost:3000/api/places?search=bar | jq '.count'
   ```

   You should see the number of bars in your database!

**If all 3 tests show data** ✅ - Your API is working perfectly!

### Step 14: Test the Admin Panel

1. Open your web browser

2. Go to: **http://localhost:3000/admin/**

3. You should see a login screen

4. Enter your **ADMIN_API_KEY** (the one from `.env.local`)
   - Copy it from the file:
     ```bash
     cat .env.local | grep ADMIN_API_KEY
     ```

5. Click "Giriş Yap" (Login)

6. You should see:
   - **Bekleyenler** tab (Pending submissions)
   - **Onaylananlar** tab (Approved - should show your 42 places!)
   - **Reddedilenler** tab (Rejected - should be empty)

7. Click on **Onaylananlar**
   - You should see all your imported places!
   - Click on one to see the details

**If you see your places** ✅ - Admin panel is working!

### Step 15: Test Submission Form

1. Go to: **http://localhost:3000/add/place/add-place.html**

2. Fill out the form with test data:
   - **Mekan Adı**: Test Restaurant
   - **Detaylı Açıklama**: This is a test submission
   - **Telefon**: +90 555 123 4567
   - Upload 1-2 test photos (any JPG/PNG)

3. Click submit

4. You should see: "Başvurunuz alındı!" (Your submission was received!)

5. Go back to the admin panel: **http://localhost:3000/admin/**

6. Click on **Bekleyenler** tab

7. You should see your test submission!

8. Try clicking **✅ Onayla** (Approve)

9. The submission should move to **Onaylananlar** tab

**If this works** ✅ - Everything is perfect!

---

## Part 7: Deploy to Vercel Production

### Step 16: Add Environment Variables to Vercel

Now let's set up the production environment!

1. Go back to Vercel Dashboard: https://vercel.com/dashboard

2. Click on your **kasguide** project

3. Click on **Settings** (top navigation)

4. Click on **Environment Variables** (left sidebar)

5. Add these variables one by one:

   **Variable 1**:
   - Name: `ADMIN_API_KEY`
   - Value: (paste your admin API key from .env.local)
   - Environment: Check all three: ✅ Production ✅ Preview ✅ Development
   - Click **Save**

   **Variable 2** (optional - only if you want email notifications):
   - Name: `SMTP_HOST`
   - Value: `smtp.gmail.com`
   - Environment: ✅ Production ✅ Preview ✅ Development
   - Click **Save**

   **Variable 3** (optional):
   - Name: `SMTP_PORT`
   - Value: `465`
   - Environment: ✅ Production ✅ Preview ✅ Development
   - Click **Save**

   **Variable 4** (optional):
   - Name: `SMTP_USER`
   - Value: (your email)
   - Environment: ✅ Production ✅ Preview ✅ Development
   - Click **Save**

   **Variable 5** (optional):
   - Name: `SMTP_PASS`
   - Value: (your app password)
   - Environment: ✅ Production ✅ Preview ✅ Development
   - Click **Save**

   **Variable 6** (optional):
   - Name: `MAIL_TO`
   - Value: `mekan@kasguide.de`
   - Environment: ✅ Production ✅ Preview ✅ Development
   - Click **Save**

**NOTE**: The Postgres variables (POSTGRES_URL, etc.) are already automatically set by Vercel when you created the database. You don't need to add them manually!

### Step 17: Create Vercel Blob (Photo Storage)

1. Still in Vercel Dashboard, go to **Storage** tab

2. Click **"Create Database"** again

3. This time select **"Blob"**

4. **Blob Name**: `kasguide-photos` (or any name)

5. Click **"Create"**

6. After it's created, click on the blob storage

7. Look for **".env.local"** tab or **"Environment Variables"** section

8. Copy the `BLOB_READ_WRITE_TOKEN`

9. Go back to **Settings** → **Environment Variables**

10. Add new variable:
    - Name: `BLOB_READ_WRITE_TOKEN`
    - Value: (paste the token you copied)
    - Environment: ✅ Production ✅ Preview ✅ Development
    - Click **Save**

### Step 18: Push Your Code to GitHub

1. Check your current status:
   ```bash
   git status
   ```

2. If there are uncommitted changes, commit them:
   ```bash
   git add -A
   git commit -m "chore: update environment configuration"
   ```

3. Push to GitHub:
   ```bash
   git push origin feature/database-migration
   ```

### Step 19: Create Pull Request & Deploy

1. Go to your GitHub repository

2. You should see a yellow banner: "feature/database-migration had recent pushes"

3. Click **"Compare & pull request"**

4. Add a title: "Add database migration"

5. Click **"Create pull request"**

6. Click **"Merge pull request"**

7. Click **"Confirm merge"**

8. Vercel will automatically deploy!

### Step 20: Run Production Migration

After deployment completes (wait 2-3 minutes):

**Option A: Using Vercel CLI** (Recommended)

1. Install Vercel CLI if you haven't:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Link to your project:
   ```bash
   vercel link
   # Answer: Yes (link to existing project)
   # Select: kasguide
   ```

4. Run migration in production:
   ```bash
   vercel env pull .env.production
   POSTGRES_URL="$(grep POSTGRES_URL .env.production | cut -d '=' -f2-)" node db/migrate.js
   ```

5. Import data to production:
   ```bash
   POSTGRES_URL="$(grep POSTGRES_URL .env.production | cut -d '=' -f2-)" node db/import-data.js
   ```

**Option B: Using Vercel Dashboard**

1. Go to your Vercel project dashboard

2. Click on **Settings** → **Functions**

3. Scroll down to **Function Logs**

4. You can run the migration by creating a temporary API endpoint that runs the migration (I can help you with this if needed)

### Step 21: Test Production

1. Find your production URL:
   - Go to Vercel Dashboard → Your Project
   - You'll see: `https://kasguide-xxxx.vercel.app`

2. Test the API:
   ```bash
   # Replace with your actual URL
   curl https://kasguide-xxxx.vercel.app/api/places | jq '.count'
   ```

3. Test admin panel:
   - Open: `https://kasguide-xxxx.vercel.app/admin/`
   - Login with your ADMIN_API_KEY
   - Check if places are showing

4. Test submission:
   - Go to: `https://kasguide-xxxx.vercel.app/add/place/add-place.html`
   - Submit a test place
   - Check admin panel for the submission

**If everything works** 🎉 - YOU'RE LIVE IN PRODUCTION!

---

## 🎉 You Did It!

### What You've Accomplished:

✅ Created a Postgres database on Vercel
✅ Set up environment variables locally and in production
✅ Created all database tables (15+ tables!)
✅ Imported 42+ places, hotels, and 170+ FAQs
✅ Tested API endpoints
✅ Tested admin panel
✅ Deployed to production
✅ Your site is now database-powered!

---

## 📝 Quick Reference Commands

```bash
# Check database connection
npm run db:migrate

# Import all data
npm run db:import

# Import specific types
npm run db:import:places
npm run db:import:hotels
npm run db:import:faqs

# Start development server
npm run dev

# Check how many places in database
node -e "import('./lib/db-places.js').then(m => m.getAllPlaces()).then(p => console.log('Places:', p.length))"
```

---

## 🆘 Common Issues & Solutions

### Issue 1: "Cannot find module"
**Solution**:
```bash
npm install
```

### Issue 2: "Database connection failed"
**Solution**:
```bash
# Re-download environment variables from Vercel
vercel env pull .env.local

# Try migration again
npm run db:migrate
```

### Issue 3: "Admin panel won't login"
**Solution**:
```bash
# Check your API key
cat .env.local | grep ADMIN_API_KEY

# Make sure it matches what you're entering in the login form
# Make sure it's also set in Vercel dashboard
```

### Issue 4: "Photos not uploading"
**Solution**:
- Make sure `BLOB_READ_WRITE_TOKEN` is set in Vercel dashboard
- If testing locally, photos will save to `/public/uploads/` instead (which is fine for testing)

### Issue 5: "No data showing in admin panel"
**Solution**:
```bash
# Check if data was imported
npm run db:import

# Check database has data
node -e "import('./lib/db-places.js').then(m => m.getAllPlaces()).then(console.log)"
```

---

## 🎯 Next Steps

Now that everything is working:

1. **Test submissions thoroughly**
   - Submit test places via the form
   - Review them in admin panel
   - Approve/reject to test the workflow

2. **Update your frontend** (optional)
   - Change your frontend JavaScript to fetch from `/api/places` instead of static files
   - This enables search, filtering, and real-time updates

3. **Share admin panel**
   - Give your team the admin URL and API key
   - They can review and approve submissions

4. **Monitor usage**
   - Check Vercel dashboard for database usage
   - Free tier: 256 MB storage, 60 hours compute/month

---

## 📞 Need More Help?

If you get stuck at any step:

1. **Check the error message** - it usually tells you what's wrong
2. **Verify environment variables** - most issues are from missing variables
3. **Check Vercel logs** - Dashboard → Your Project → Deployments → View Logs
4. **Ask me!** - I'm here to help!

---

**🎊 Congratulations on setting up your database!** 🎊
