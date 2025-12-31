/**
 * Bulk Add Placeholder Photos to Items
 *
 * Usage:
 * 1. Edit PLACEHOLDER_URLS array below with 10 Kaş photos
 * 2. Run: node scripts/bulk-add-placeholder-photos.js
 *
 * This script will:
 * - Find all items without photos
 * - Assign placeholder photos in rotation (0,1,2...9,0,1,2...)
 * - Update database
 */

import sql from '../db/connection.js';

// ============================================================================
// 📸 PLACEHOLDER PHOTOS - Edit these URLs with your Kaş photos
// ============================================================================
const PLACEHOLDER_URLS = [
  'https://images.unsplash.com/photo-1728603980950-ab5ec764aa1d?w=1200',
  'https://images.unsplash.com/photo-0q-g4AvwRNI?w=1200',
  'https://images.unsplash.com/photo-r2Uk2g31JiE?w=1200',
  'https://images.unsplash.com/photo-9VVIsLTqYzY?w=1200',
  'https://images.unsplash.com/photo-LSiqdnJL3-o?w=1200',
  'https://images.unsplash.com/photo-bCNsqPH7rVw?w=1200',
  'https://images.unsplash.com/photo-oSy2vA18vHo?w=1200',
  'https://images.unsplash.com/photo-ppmb12yzD0M?w=1200',
  'https://images.unsplash.com/photo-TIVKP6Jib-4?w=1200',
  'https://images.unsplash.com/photo-RDXw0MeI7zE?w=1200'
];

// ============================================================================
// Configuration
// ============================================================================
const OPTIONS = {
  // Which item types to process (null = all types)
  itemType: 'place',  // 'place', 'pet', 'hotel', 'artist', or null for all

  // Only process approved items?
  onlyApproved: true,

  // Dry run mode (show what would happen without actually updating)
  dryRun: false,
};

// ============================================================================
// Main Function
// ============================================================================
async function main() {
  console.log('\n🖼️  Bulk Placeholder Photo Assignment\n');
  console.log('Configuration:');
  console.log(`  - Item type: ${OPTIONS.itemType || 'all'}`);
  console.log(`  - Only approved: ${OPTIONS.onlyApproved}`);
  console.log(`  - Dry run: ${OPTIONS.dryRun}`);
  console.log(`  - Placeholder photos: ${PLACEHOLDER_URLS.length}\n`);

  // Validate placeholder URLs
  if (PLACEHOLDER_URLS.length === 0) {
    console.error('❌ Error: No placeholder URLs provided!');
    console.log('Please edit PLACEHOLDER_URLS array in this file.\n');
    process.exit(1);
  }

  if (PLACEHOLDER_URLS.some(url => url.includes('TODO') || url.includes('unsplash.com/photo-'))) {
    console.warn('⚠️  Warning: Placeholder URLs look like placeholders!');
    console.log('Make sure to replace with real Kaş photo URLs.\n');

    if (!OPTIONS.dryRun) {
      console.log('Running in DRY RUN mode to prevent mistakes...');
      OPTIONS.dryRun = true;
    }
  }

  try {
    // Find items WITHOUT photos OR with placeholder photos (to replace old ones)
    let query = `
      SELECT id, item_number, item_type, title, photos, status
      FROM items
      WHERE (
        photos IS NULL
        OR photos = '[]'::jsonb
        OR JSONB_ARRAY_LENGTH(photos) = 0
        OR photos::text LIKE '%"placeholder":true%'
      )
    `;

    const conditions = [];
    const params = [];

    if (OPTIONS.itemType) {
      conditions.push(`item_type = $${params.length + 1}`);
      params.push(OPTIONS.itemType);
    }

    if (OPTIONS.onlyApproved) {
      conditions.push(`status = $${params.length + 1}`);
      params.push('approved');
    }

    if (conditions.length > 0) {
      query += ` AND ${conditions.join(' AND ')}`;
    }

    query += ' ORDER BY id ASC';

    const result = await sql.query(query, params);
    const items = result.rows;

    console.log(`📊 Found ${items.length} items to update (includes items with old placeholders)\n`);

    if (items.length === 0) {
      console.log('✅ All items already have real photos!\n');
      process.exit(0);
    }

    // Show sample items
    console.log('Sample items:');
    items.slice(0, 5).forEach((item, i) => {
      const hasOldPlaceholder = item.photos && item.photos.toString().includes('placeholder');
      const status = hasOldPlaceholder ? '(replacing old placeholder)' : '(no photo)';
      console.log(`  ${i + 1}. [${item.item_number}] ${item.title} ${status}`);
    });
    if (items.length > 5) {
      console.log(`  ... and ${items.length - 5} more\n`);
    } else {
      console.log('');
    }

    // Assign placeholder photos in rotation
    let updateCount = 0;
    let errorCount = 0;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const photoIndex = i % PLACEHOLDER_URLS.length;
      const photoUrl = PLACEHOLDER_URLS[photoIndex];

      // Build photo JSONB
      const photoData = [{
        url: photoUrl,
        sequence: 0,
        filename: photoUrl.split('/').pop() || 'placeholder.jpg',
        placeholder: true  // Mark as placeholder for future replacement
      }];

      if (OPTIONS.dryRun) {
        console.log(`[DRY RUN] Would update ${item.item_number}: Photo ${photoIndex + 1}/10`);
      } else {
        try {
          await sql.query(
            `UPDATE items SET photos = $1::jsonb WHERE id = $2`,
            [JSON.stringify(photoData), item.id]
          );
          updateCount++;

          if (updateCount <= 5 || updateCount % 10 === 0) {
            console.log(`✅ Updated ${item.item_number} (${item.title}): Photo ${photoIndex + 1}/10`);
          }
        } catch (error) {
          console.error(`❌ Error updating ${item.item_number}:`, error.message);
          errorCount++;
        }
      }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    if (OPTIONS.dryRun) {
      console.log('🔍 DRY RUN COMPLETE - No changes made');
      console.log(`Would have updated ${items.length} items`);
    } else {
      console.log('✅ COMPLETE');
      console.log(`Updated: ${updateCount} items`);
      if (errorCount > 0) {
        console.log(`Errors: ${errorCount} items`);
      }
    }
    console.log('='.repeat(60) + '\n');

  } catch (error) {
    console.error('\n❌ Fatal error:', error);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

// ============================================================================
// Run
// ============================================================================
main().catch(console.error);
