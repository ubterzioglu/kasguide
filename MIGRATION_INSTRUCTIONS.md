# Migration Instructions: Separating Places from Unified Items Table

## Overview
This migration separates places from the unified `items` table into the dedicated `places` table, while maintaining full compatibility with the home page filtering system.

## Pre-Migration Checklist

1. **Backup your database** before running any migration scripts
2. **Verify current state**: Check how many places exist in both tables
   ```sql
   -- Count places in items table
   SELECT COUNT(*) FROM items WHERE item_type = 'place';
   
   -- Count places in places table
   SELECT COUNT(*) FROM places;
   ```

## Migration Steps

### Step 1: Run the Migration Script

Execute the migration script to move places from `items` to `places` table:

```bash
# Using psql
psql -U your_username -d your_database -f db/migrate-places-from-items.sql

# Or using your database connection tool
```

The script will:
- Migrate all place records from `items` table to `places` table
- Migrate photos from JSONB to `place_images` table
- Migrate categories from JSONB to `place_categories` table
- Migrate facilities, features, and tags to their respective tables
- Skip any places that already exist (based on slug)

### Step 2: Verify Migration

Run these verification queries:

```sql
-- Count migrated places
SELECT COUNT(*) as migrated_places FROM places;

-- Count places still in items table
SELECT COUNT(*) as remaining_in_items FROM items WHERE item_type = 'place';

-- Check for missing photos
SELECT p.id, p.slug, p.title, COUNT(pi.id) as photo_count
FROM places p
LEFT JOIN place_images pi ON pi.place_id = p.id
GROUP BY p.id, p.slug, p.title
HAVING COUNT(pi.id) = 0
ORDER BY p.id;

-- Check for missing categories
SELECT p.id, p.slug, p.title, COUNT(pc.category_id) as category_count
FROM places p
LEFT JOIN place_categories pc ON pc.place_id = p.id
GROUP BY p.id, p.slug, p.title
HAVING COUNT(pc.category_id) = 0
ORDER BY p.id;
```

### Step 3: Test the Application

1. **Test Home Page Filtering**:
   - Visit the home page
   - Test category filtering
   - Test search functionality
   - Verify all places are displayed correctly

2. **Test Admin Interface**:
   - Log into admin panel
   - Switch to "Places" tab
   - Verify places load correctly
   - Test approving/rejecting places
   - Test editing places

3. **Test Place Submission**:
   - Submit a new place via the form
   - Verify it appears in admin panel
   - Verify it appears on home page after approval

### Step 4: Clean Up (Optional)

After verifying everything works, you can optionally remove places from the `items` table:

```sql
-- WARNING: Only run this after verifying migration is successful!
-- DELETE FROM items WHERE item_type = 'place';
```

**DO NOT run this delete until you're 100% certain the migration was successful!**

## Rollback Plan

If something goes wrong, you can rollback by:

1. The migration script uses `NOT EXISTS` checks, so it won't duplicate data
2. If you need to rollback, you would need to:
   - Move data back from `places` to `items` (reverse migration)
   - Or restore from your backup

## What Changed

### Code Changes
- ✅ `script.js`: Now loads places from `/api/places` instead of `/api/items?type=place`
- ✅ `lib/db-places.js`: Updated to return data in format compatible with `convertAPIPlace()`
- ✅ `api/items.js`: Now rejects requests for `type=place`
- ✅ `api/places.js`: Already exists and works correctly
- ✅ `lib/db-items.js`: Removed place-related code, excludes places from queries
- ✅ `admin/index.html`: Updated to use `/api/admin/places` for places management

### Database Changes
- Places are now stored in the dedicated `places` table
- Photos are in `place_images` table (not JSONB)
- Categories are in `place_categories` table (not JSONB)
- Facilities, features, tags are in their respective tables

## Notes

- The home page filtering will continue to work because `db-places.js` now returns data in the same format that `convertAPIPlace()` expects
- New place submissions already go to the `places` table (via `api/venue-submit.js`)
- The migration script preserves all data including timestamps, status, and relationships

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Check server logs for API errors
3. Verify database connections
4. Review the migration script output for any warnings
