/**
 * Clear Placeholder Photos
 *
 * This script removes all placeholder photos from items
 * so they can be re-populated with new placeholder photos
 */

import sql from '../db/connection.js';

async function main() {
  console.log('\n🧹 Clearing Placeholder Photos\n');

  try {
    // Find items with placeholder photos
    const checkQuery = `
      SELECT COUNT(*) as count
      FROM items
      WHERE photos IS NOT NULL
      AND JSONB_ARRAY_LENGTH(photos) > 0
      AND photos::text LIKE '%placeholder%'
    `;

    const checkResult = await sql.query(checkQuery);
    const count = parseInt(checkResult.rows[0].count);

    console.log(`📊 Found ${count} items with placeholder photos\n`);

    if (count === 0) {
      console.log('✅ No placeholder photos to clear!\n');
      process.exit(0);
    }

    // Clear placeholder photos
    const updateQuery = `
      UPDATE items
      SET photos = '[]'::jsonb
      WHERE photos IS NOT NULL
      AND JSONB_ARRAY_LENGTH(photos) > 0
      AND photos::text LIKE '%placeholder%'
      RETURNING item_number, title
    `;

    const updateResult = await sql.query(updateQuery);

    console.log('✅ Cleared placeholder photos from:\n');
    updateResult.rows.forEach((item, i) => {
      if (i < 10) {
        console.log(`  ${i + 1}. [${item.item_number}] ${item.title}`);
      }
    });

    if (updateResult.rows.length > 10) {
      console.log(`  ... and ${updateResult.rows.length - 10} more`);
    }

    console.log(`\n✅ COMPLETE`);
    console.log(`Cleared photos from ${updateResult.rows.length} items`);
    console.log('\n🚀 Now run: node scripts/bulk-add-placeholder-photos.js\n');

  } catch (error) {
    console.error('\n❌ Error:', error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
}

main().catch(console.error);
