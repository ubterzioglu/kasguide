/**
 * Fix Place Categories
 * Assigns "restoran" category to all places that don't have any categories
 */

import "dotenv/config";
import sql from "./connection.js";

async function fixPlaceCategories() {
  console.log("🔧 Fixing Place Categories...\n");

  try {
    // Test connection
    console.log("📡 Testing database connection...");
    const testResult = await sql`SELECT NOW() as current_time, version() as version`;
    console.log(`✅ Connected to database (${testResult.rows[0].version.split(' ')[0]})\n`);

    // Get "restoran" category ID
    console.log("🔍 Finding 'restoran' category...");
    const restoranCat = await sql`
      SELECT id, slug, name FROM categories WHERE slug = 'restoran'
    `;

    if (restoranCat.rows.length === 0) {
      console.log("   ⚠️  'restoran' category not found. Creating it...");
      // Create restoran category if it doesn't exist
      const createResult = await sql`
        INSERT INTO categories (slug, name, icon_code, color_code)
        VALUES ('restoran', 'Restoran', '🍽️', 'category-red')
        ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
        RETURNING id, slug, name
      `;
      const restoranId = createResult.rows[0].id;
      console.log(`   ✅ Created/found 'restoran' category (ID: ${restoranId})\n`);
    } else {
      const restoranId = restoranCat.rows[0].id;
      console.log(`   ✅ Found 'restoran' category (ID: ${restoranId}, Name: ${restoranCat.rows[0].name})\n`);
    }

    const restoranId = restoranCat.rows.length > 0 ? restoranCat.rows[0].id : (await sql`SELECT id FROM categories WHERE slug = 'restoran'`).rows[0].id;

    // Find places without categories
    console.log("📊 Checking places without categories...");
    const placesWithoutCats = await sql`
      SELECT p.id, p.slug, p.title, COUNT(pc.category_id) as category_count
      FROM places p
      LEFT JOIN place_categories pc ON pc.place_id = p.id
      WHERE p.status = 'approved'
      GROUP BY p.id, p.slug, p.title
      HAVING COUNT(pc.category_id) = 0
      ORDER BY p.id
    `;

    console.log(`   Found ${placesWithoutCats.rows.length} places without categories\n`);

    if (placesWithoutCats.rows.length === 0) {
      console.log("✅ All places already have categories!");
      return;
    }

    // Assign "restoran" category to all places without categories
    console.log("📝 Assigning 'restoran' category to places without categories...");
    let assigned = 0;
    let skipped = 0;

    for (const place of placesWithoutCats.rows) {
      try {
        await sql`
          INSERT INTO place_categories (place_id, category_id)
          VALUES (${place.id}, ${restoranId})
          ON CONFLICT (place_id, category_id) DO NOTHING
        `;
        assigned++;
        if (assigned <= 5) {
          console.log(`   ✅ Assigned to: ${place.title}`);
        }
      } catch (error) {
        skipped++;
        console.log(`   ⚠️  Skipped ${place.title}: ${error.message}`);
      }
    }

    if (assigned > 5) {
      console.log(`   ... and ${assigned - 5} more places`);
    }

    console.log(`\n✅ Category assignment completed!`);
    console.log(`   Assigned: ${assigned}`);
    console.log(`   Skipped: ${skipped}`);

    // Verify results
    console.log("\n🔍 Verification:");
    const finalCheck = await sql`
      SELECT 
        COUNT(*) FILTER (WHERE cat_count = 0) as without_categories,
        COUNT(*) FILTER (WHERE cat_count > 0) as with_categories,
        COUNT(*) as total
      FROM (
        SELECT p.id, COUNT(pc.category_id) as cat_count
        FROM places p
        LEFT JOIN place_categories pc ON pc.place_id = p.id
        WHERE p.status = 'approved'
        GROUP BY p.id
      ) subq
    `;

    const stats = finalCheck.rows[0];
    console.log(`   Total approved places: ${stats.total}`);
    console.log(`   With categories: ${stats.with_categories}`);
    console.log(`   Without categories: ${stats.without_categories}`);

    // Show category distribution
    console.log("\n📊 Category distribution:");
    const catDist = await sql`
      SELECT c.slug, c.name, COUNT(pc.place_id) as place_count
      FROM categories c
      LEFT JOIN place_categories pc ON pc.category_id = c.id
      LEFT JOIN places p ON p.id = pc.place_id AND p.status = 'approved'
      GROUP BY c.id, c.slug, c.name
      HAVING COUNT(pc.place_id) > 0
      ORDER BY place_count DESC
    `;

    catDist.rows.forEach(row => {
      console.log(`   ${row.slug}: ${row.place_count} places`);
    });

  } catch (error) {
    console.error("\n❌ Error:", error.message);
    console.error(error);
    process.exit(1);
  }
}

fixPlaceCategories()
  .then(() => {
    console.log("\n✨ Done!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n💥 Fatal error:", error);
    process.exit(1);
  });
