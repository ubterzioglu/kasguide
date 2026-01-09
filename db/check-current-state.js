/**
 * Check Current Database State
 * Shows what's in each table
 */

import "dotenv/config";
import sql from "./connection.js";

async function checkCurrentState() {
  console.log("📊 Database State Report\n");
  console.log("=" .repeat(60));
  
  try {
    // Test connection
    const testResult = await sql`SELECT NOW() as current_time, version() as version`;
    console.log(`✅ Connected to database (${testResult.rows[0].version.split(' ')[0]})\n`);

    // ============================================================================
    // PLACES TABLE
    // ============================================================================
    console.log("📍 PLACES TABLE");
    console.log("-".repeat(60));
    
    const placesCount = await sql`
      SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE status = 'approved') as approved,
        COUNT(*) FILTER (WHERE status = 'pending') as pending
      FROM places
    `;
    console.log(`   Total places: ${placesCount.rows[0].total}`);
    console.log(`   - Approved: ${placesCount.rows[0].approved}`);
    console.log(`   - Pending: ${placesCount.rows[0].pending}`);
    
    // Places by category
    const placesByCategory = await sql`
      SELECT c.slug, c.name, COUNT(pc.place_id) as count
      FROM categories c
      LEFT JOIN place_categories pc ON pc.category_id = c.id
      LEFT JOIN places p ON p.id = pc.place_id AND p.status = 'approved'
      GROUP BY c.id, c.slug, c.name
      HAVING COUNT(pc.place_id) > 0
      ORDER BY count DESC
    `;
    console.log("\n   Places by category:");
    placesByCategory.rows.forEach(row => {
      console.log(`   - ${row.slug} (${row.name}): ${row.count}`);
    });

    // ============================================================================
    // ITEMS TABLE (should NOT have places anymore)
    // ============================================================================
    console.log("\n📦 ITEMS TABLE (Unified - should NOT contain places)");
    console.log("-".repeat(60));
    
    const itemsByType = await sql`
      SELECT 
        item_type,
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE status = 'approved') as approved,
        COUNT(*) FILTER (WHERE status = 'pending') as pending
      FROM items
      GROUP BY item_type
      ORDER BY item_type
    `;
    
    if (itemsByType.rows.length === 0) {
      console.log("   ⚠️  No items found in items table");
    } else {
      itemsByType.rows.forEach(row => {
        console.log(`   ${row.item_type.toUpperCase()}:`);
        console.log(`   - Total: ${row.total}`);
        console.log(`   - Approved: ${row.approved}`);
        console.log(`   - Pending: ${row.pending}`);
      });
    }

    // Check if places still exist in items table (they shouldn't!)
    const placesInItems = await sql`
      SELECT COUNT(*) as count FROM items WHERE item_type = 'place'
    `;
    if (parseInt(placesInItems.rows[0].count) > 0) {
      console.log(`\n   ⚠️  WARNING: ${placesInItems.rows[0].count} places still in items table!`);
    } else {
      console.log(`\n   ✅ No places in items table (correct!)`);
    }

    // ============================================================================
    // HOTELS TABLE (if exists)
    // ============================================================================
    console.log("\n🏨 HOTELS TABLE (if separate table exists)");
    console.log("-".repeat(60));
    
    try {
      const hotelsCount = await sql`
        SELECT 
          COUNT(*) as total,
          COUNT(*) FILTER (WHERE status = 'approved') as approved,
          COUNT(*) FILTER (WHERE status = 'pending') as pending
        FROM hotels
      `;
      console.log(`   Total hotels: ${hotelsCount.rows[0].total}`);
      console.log(`   - Approved: ${hotelsCount.rows[0].approved}`);
      console.log(`   - Pending: ${hotelsCount.rows[0].pending}`);
    } catch (error) {
      console.log(`   ℹ️  Hotels table does not exist (using items table instead)`);
    }

    // ============================================================================
    // PETS TABLE (if exists)
    // ============================================================================
    console.log("\n🐾 PETS TABLE (if separate table exists)");
    console.log("-".repeat(60));
    
    try {
      const petsCount = await sql`
        SELECT 
          COUNT(*) as total,
          COUNT(*) FILTER (WHERE status = 'approved') as approved,
          COUNT(*) FILTER (WHERE status = 'pending') as pending
        FROM pets
      `;
      console.log(`   Total pets: ${petsCount.rows[0].total}`);
      console.log(`   - Approved: ${petsCount.rows[0].approved}`);
      console.log(`   - Pending: ${petsCount.rows[0].pending}`);
    } catch (error) {
      console.log(`   ℹ️  Pets table does not exist (using items table instead)`);
    }

    // ============================================================================
    // ARTISTS TABLE (if exists)
    // ============================================================================
    console.log("\n🎨 ARTISTS TABLE (if separate table exists)");
    console.log("-".repeat(60));
    
    try {
      const artistsCount = await sql`
        SELECT 
          COUNT(*) as total,
          COUNT(*) FILTER (WHERE status = 'approved') as approved,
          COUNT(*) FILTER (WHERE status = 'pending') as pending
        FROM artists
      `;
      console.log(`   Total artists: ${artistsCount.rows[0].total}`);
      console.log(`   - Approved: ${artistsCount.rows[0].approved}`);
      console.log(`   - Pending: ${artistsCount.rows[0].pending}`);
    } catch (error) {
      console.log(`   ℹ️  Artists table does not exist (using items table instead)`);
    }

    // ============================================================================
    // SUMMARY
    // ============================================================================
    console.log("\n" + "=".repeat(60));
    console.log("📋 SUMMARY");
    console.log("=".repeat(60));
    console.log("\n✅ CURRENT STRUCTURE:");
    console.log("   - Places → places table (dedicated)");
    console.log("   - Hotels → items table (item_type='hotel')");
    console.log("   - Pets → items table (item_type='pet')");
    console.log("   - Artists → items table (item_type='artist')");
    
    console.log("\n📝 NOTES:");
    console.log("   - Places have been separated from unified items table");
    console.log("   - Hotels, Pets, Artists remain in items table");
    console.log("   - If you want hotels in places table, that would be a separate migration");

  } catch (error) {
    console.error("\n❌ Error:", error.message);
    console.error(error);
    process.exit(1);
  }
}

checkCurrentState()
  .then(() => {
    console.log("\n✨ Done!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n💥 Fatal error:", error);
    process.exit(1);
  });
