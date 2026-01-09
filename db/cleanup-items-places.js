/**
 * Cleanup: Remove places from items table
 * WARNING: Only run this after verifying places migration was successful!
 */

import "dotenv/config";
import sql from "./connection.js";

async function cleanupItemsPlaces() {
  console.log("🧹 Cleaning up places from items table...\n");

  try {
    // Test connection
    console.log("📡 Testing database connection...");
    const testResult = await sql`SELECT NOW() as current_time, version() as version`;
    console.log(`✅ Connected to database (${testResult.rows[0].version.split(' ')[0]})\n`);

    // Verify places are in places table
    console.log("🔍 Verifying places exist in places table...");
    const placesCount = await sql`SELECT COUNT(*) as count FROM places WHERE status = 'approved'`;
    const placesInPlaces = parseInt(placesCount.rows[0].count);
    
    if (placesInPlaces === 0) {
      console.log("   ❌ ERROR: No approved places found in places table!");
      console.log("   Cannot safely delete from items table. Aborting.");
      process.exit(1);
    }
    
    console.log(`   ✅ Found ${placesInPlaces} approved places in places table\n`);

    // Count places in items table
    console.log("📊 Checking items table...");
    const itemsCount = await sql`SELECT COUNT(*) as count FROM items WHERE item_type = 'place'`;
    const placesInItems = parseInt(itemsCount.rows[0].count);
    
    console.log(`   Found ${placesInItems} places in items table\n`);

    if (placesInItems === 0) {
      console.log("✅ No places in items table. Nothing to clean up!");
      return;
    }

    // Verify places exist in both tables (migration was successful)
    console.log("🔍 Verifying migration was successful...");
    const verifiedCount = await sql`
      SELECT COUNT(DISTINCT i.slug) as count
      FROM items i
      INNER JOIN places p ON p.slug = i.slug
      WHERE i.item_type = 'place'
    `;
    
    const verified = parseInt(verifiedCount.rows[0].count);
    console.log(`   ✅ Verified ${verified} places exist in both tables\n`);

    if (verified < placesInItems * 0.9) {
      console.log("   ⚠️  WARNING: Less than 90% of places were verified!");
      console.log("   This might indicate a migration issue. Proceeding with caution...\n");
    }

    // Ask for confirmation (in real scenario, you'd use readline)
    console.log("⚠️  READY TO DELETE:");
    console.log(`   - ${placesInItems} places will be deleted from items table`);
    console.log(`   - Places in places table will remain intact\n`);
    
    // In production, you'd want to add a confirmation prompt here
    // For now, we'll use a --confirm flag
    const needsConfirm = !process.argv.includes("--confirm");
    
    if (needsConfirm) {
      console.log("❌ This script requires --confirm flag to actually delete.");
      console.log("   Run with: npm run db:cleanup:places -- --confirm");
      console.log("   Or: node db/cleanup-items-places.js --confirm\n");
      return;
    }

    // Delete places from items table
    console.log("🗑️  Deleting places from items table...");
    const deleteResult = await sql`
      DELETE FROM items WHERE item_type = 'place'
    `;
    
    console.log(`   ✅ Deleted ${placesInItems} places from items table\n`);

    // Verify deletion
    const remainingCount = await sql`SELECT COUNT(*) as count FROM items WHERE item_type = 'place'`;
    const remaining = parseInt(remainingCount.rows[0].count);
    
    if (remaining === 0) {
      console.log("✅ Cleanup successful! No places remaining in items table.");
    } else {
      console.log(`⚠️  ${remaining} places still remain in items table.`);
    }

    // Final state
    console.log("\n📊 Final State:");
    const finalItems = await sql`
      SELECT item_type, COUNT(*) as count
      FROM items
      GROUP BY item_type
      ORDER BY item_type
    `;
    
    console.log("   Items table:");
    finalItems.rows.forEach(row => {
      console.log(`   - ${row.item_type}: ${row.count}`);
    });
    
    const finalPlaces = await sql`SELECT COUNT(*) as count FROM places WHERE status = 'approved'`;
    console.log(`\n   Places table (approved): ${finalPlaces.rows[0].count}`);

  } catch (error) {
    console.error("\n❌ Error:", error.message);
    console.error(error);
    process.exit(1);
  }
}

cleanupItemsPlaces()
  .then(() => {
    console.log("\n✨ Done!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n💥 Fatal error:", error);
    process.exit(1);
  });
