# 🚀 Deployment Guide - Kaş Guide Database

This guide will help you deploy your Kaş Guide application with the new Neon PostgreSQL database to Vercel.

---

## 📋 Prerequisites

Before you start, make sure you have:

- ✅ Neon database created and populated (353 places, 1 hotel, 15 categories, 16 badges)
- ✅ All code committed to `devdb` branch
- ✅ Vercel account created
- ✅ Your database credentials from `.env.local`

---

## 🔧 Step 1: Install Vercel CLI

Open PowerShell and run:

```powershell
npm install -g vercel
```

---

## 🔑 Step 2: Login to Vercel

```powershell
vercel login
```

This will open your browser. Choose your login method (GitHub, GitLab, Email, etc.)

---

## 🔗 Step 3: Link Your Project

Navigate to your project directory:

```powershell
cd C:\Users\ubter\IdeaProjects\kasguide
```

Link to Vercel:

```powershell
vercel link
```

Answer the prompts:
- **Set up and deploy**: Choose your existing project or create new
- **Which scope**: Choose your Vercel account/team
- **Link to existing project**: Yes (if you already have kasguide) or No (to create new)
- **Project name**: `kasguide`

---

## 🌍 Step 4: Add Environment Variables to Vercel

Your Neon database variables should already be there from the integration, but you need to add the admin key:

### Via Vercel Dashboard:

1. Go to: https://vercel.com/dashboard
2. Select your **kasguide** project
3. Click **Settings** (top menu)
4. Click **Environment Variables** (left sidebar)
5. Add the following variable:

| Variable Name | Value | Environments |
|--------------|-------|--------------|
| `ADMIN_API_KEY` | `d57c5c18ccb3c25b436001888fd7381674216d7954f753fc376ce8872e20dfed` | ✅ Production, ✅ Preview, ✅ Development |

6. Click **Save**

### Verify Database Variables:

Make sure these are also present (should be auto-added by Neon integration):
- ✅ `POSTGRES_URL`
- ✅ `POSTGRES_PRISMA_URL`
- ✅ `POSTGRES_URL_NON_POOLING`
- ✅ `POSTGRES_USER`
- ✅ `POSTGRES_HOST`
- ✅ `POSTGRES_PASSWORD`
- ✅ `POSTGRES_DATABASE`

---

## 🚀 Step 5: Deploy to Production

```powershell
vercel --prod
```

This will:
1. Upload your code
2. Build the project
3. Deploy to production
4. Give you a production URL (e.g., `https://kasguide.vercel.app`)

**Expected output:**
```
🔍 Inspect: https://vercel.com/your-account/kasguide/...
✅ Production: https://kasguide.vercel.app [copied]
```

---

## ✅ Step 6: Test Your Deployment

Once deployed, test these URLs:

### 1. Test API Endpoints:

```
https://kasguide.vercel.app/api/places
```
Should return JSON with all 353 places

```
https://kasguide.vercel.app/api/places?category=bar
```
Should return only bars

```
https://kasguide.vercel.app/api/places?slug=frida-pub
```
Should return the Frida Pub details

### 2. Test Admin Panel:

```
https://kasguide.vercel.app/admin
```

Login with your API key:
```
d57c5c18ccb3c25b436001888fd7381674216d7954f753fc376ce8872e20dfed
```

### 3. Test Main Site:

```
https://kasguide.vercel.app
```

---

## 🔄 Future Deployments

After the initial setup, deploying updates is simple:

```powershell
# Make your changes
git add .
git commit -m "Your update description"
git push

# Deploy to Vercel
vercel --prod
```

Or set up **automatic deployments**:
1. Go to Vercel Dashboard → Your Project → Settings → Git
2. Connect your GitHub repository
3. Enable "Automatic Deployments from Git"
4. Every push to `main` or `devdb` will auto-deploy!

---

## 🐛 Troubleshooting

### Error: "Missing connection string"
- Check that `POSTGRES_URL` is set in Vercel Environment Variables
- Redeploy: `vercel --prod`

### Error: "Module not found: 'pg'"
- Make sure `pg` is in `dependencies` (not `devDependencies`) in `package.json`
- Should already be correct: `"pg": "^8.16.3"`

### Admin panel login not working
- Verify `ADMIN_API_KEY` is set in Vercel Environment Variables
- Make sure it's applied to Production environment
- Clear browser cache and try again

### API returns empty results
- Check Neon database is still running (not paused due to inactivity)
- Go to Neon dashboard and wake it up if needed
- Neon free tier auto-sleeps after inactivity

---

## 📊 Monitoring

### Check Deployment Logs:

```powershell
vercel logs
```

### Or via Dashboard:
1. Go to Vercel Dashboard
2. Select your project
3. Click on a deployment
4. View "Build Logs" and "Function Logs"

---

## 🎉 Success Checklist

After deployment, verify:

- [ ] Site loads at your Vercel URL
- [ ] `/api/places` returns your places data
- [ ] `/admin` login works with API key
- [ ] Categories filter works
- [ ] Search functionality works
- [ ] No console errors

---

**Need help?** Check the database structure guide: `DATABASE_STRUCTURE.md`
