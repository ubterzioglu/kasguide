/**
 * Migration Script: Move Hotels from Items Table to Places Table
 * 
 * This script migrates hotels from items table to places table.
 * Hotels will be stored in places table with 'hotels' category.
 */

import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sql from "./connection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DRY_RUN = process.argv.includes("--dry-run") || process.argv.includes("--dryrun");

async function checkTableExists(tableName) {
  try {
    const result = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = ${tableName}
      )
    `;
    return result.rows[0].exists;
  } catch (error) {
    return false;
  }
}

async function runMigration() {
  console.log("🏨 Starting Hotels Migration to Places Table...\n");

  try {
    // Test connection
    console.log("📡 Testing database connection...");
    const testResult = await sql`SELECT NOW() as current_time, version() as version`;
    console.log(`✅ Connected to database (${testResult.rows[0].version.split(' ')[0]})\n`);

    // Check if places table exists
    console.log("🔍 Checking if places table exists...");
    const placesTableExists = await checkTableExists('places');
    
    if (!placesTableExists) {
      console.log("   ❌ Places table does not exist!");
      console.log("   Please run places migration first or create places table.");
      process.exit(1);
    }
    console.log("   ✅ Places table exists\n");

    // Check if 'hotels' category exists
    console.log("🔍 Checking for 'hotels' category...");
    const hotelsCat = await sql`
      SELECT id, slug, name FROM categories WHERE slug = 'hotels'
    `;
    
    if (hotelsCat.rows.length === 0) {
      console.log("   ⚠️  'hotels' category not found. Creating it...");
      const createCat = await sql`
        INSERT INTO categories (slug, name, icon_code, color_code)
        VALUES ('hotels', 'Oteller', '🏨', 'category-amber')
        ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
        RETURNING id, slug, name
      `;
      console.log(`   ✅ Created 'hotels' category (ID: ${createCat.rows[0].id})\n`);
    } else {
      console.log(`   ✅ Found 'hotels' category (ID: ${hotelsCat.rows[0].id})\n`);
    }

    // Count hotels in items table
    console.log("📊 Checking current state...");
    const itemsCountResult = await sql`
      SELECT COUNT(*) as count FROM items WHERE item_type = 'hotel'
    `;
    const hotelsInItems = parseInt(itemsCountResult.rows[0].count);

    let hotelsInPlaces = 0;
    try {
      const placesCountResult = await sql`
        SELECT COUNT(*) as count 
        FROM places p
        INNER JOIN place_categories pc ON pc.place_id = p.id
        INNER JOIN categories c ON c.id = pc.category_id
        WHERE c.slug = 'hotels'
      `;
      hotelsInPlaces = parseInt(placesCountResult.rows[0].count);
    } catch (error) {
      hotelsInPlaces = 0;
    }

    console.log(`   Hotels in items table: ${hotelsInItems}`);
    console.log(`   Hotels in places table (with 'hotels' category): ${hotelsInPlaces}\n`);

    if (hotelsInItems === 0) {
      console.log("✅ No hotels found in items table. Migration not needed.");
      return;
    }

    if (DRY_RUN) {
      console.log("🔍 DRY RUN MODE - No changes will be made\n");
      console.log(`   Would migrate ${hotelsInItems} hotels from items to places table`);
      console.log("\nTo actually run the migration, execute without --dry-run flag");
      return;
    }

    // Read migration SQL file
    const sqlFilePath = path.join(__dirname, "migrate-hotels-to-places.sql");
    if (!fs.existsSync(sqlFilePath)) {
      throw new Error(`Migration SQL file not found: ${sqlFilePath}`);
    }

    const sqlFile = fs.readFileSync(sqlFilePath, "utf8");

    // Better SQL parsing
    let cleanedSQL = sqlFile
      .split("\n")
      .filter((line) => {
        const trimmed = line.trim();
        return (
          trimmed.length > 0 &&
          !trimmed.startsWith("--") &&
          !trimmed.startsWith("/*") &&
          !trimmed.endsWith("*/") &&
          !trimmed.includes("VERIFICATION QUERIES")
        );
      })
      .join("\n");

    const statements = cleanedSQL
      .split(/;\s*(?=\n|$)/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0 && !s.match(/^--/));

    console.log(`📝 Executing migration (${statements.length} statements)...\n`);

    let executedStatements = 0;
    let skippedStatements = 0;

    // Get initial counts
    let placesCountBefore = 0;
    let photosCountBefore = 0;
    let categoriesCountBefore = 0;
    let facilitiesCountBefore = 0;
    let tagsCountBefore = 0;

    try {
      const countsResult = await sql`
        SELECT 
          (SELECT COUNT(*) FROM places) as places_count,
          (SELECT COUNT(*) FROM place_images) as photos_count,
          (SELECT COUNT(*) FROM place_categories WHERE category_id = (SELECT id FROM categories WHERE slug = 'hotels')) as categories_count,
          (SELECT COUNT(*) FROM place_facilities) as facilities_count,
          (SELECT COUNT(*) FROM place_tags) as tags_count
      `;
      placesCountBefore = parseInt(countsResult.rows[0].places_count || 0);
      photosCountBefore = parseInt(countsResult.rows[0].photos_count || 0);
      categoriesCountBefore = parseInt(countsResult.rows[0].categories_count || 0);
      facilitiesCountBefore = parseInt(countsResult.rows[0].facilities_count || 0);
      tagsCountBefore = parseInt(countsResult.rows[0].tags_count || 0);
    } catch (error) {
      console.log("   ℹ️  Getting initial counts...");
    }

    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      const statementType = statement.substring(0, 40).toUpperCase();

      try {
        await sql.query(statement);
        executedStatements++;
        console.log(`   ✅ [${i + 1}/${statements.length}] Executed: ${statementType}...`);
      } catch (error) {
        if (
          error.message.includes("already exists") ||
          error.message.includes("duplicate") ||
          error.message.includes("NOT NULL constraint") ||
          error.message.includes("violates unique constraint")
        ) {
          skippedStatements++;
          console.log(`   ⚠️  [${i + 1}/${statements.length}] Skipped: ${statementType}... (${error.message.substring(0, 50)})`);
        } else {
          console.error(`   ❌ [${i + 1}/${statements.length}] Error: ${error.message}`);
          console.error(`   Statement preview: ${statement.substring(0, 150)}...`);
        }
      }
    }

    // Get final counts
    let placesCountAfter = 0;
    let photosCountAfter = 0;
    let categoriesCountAfter = 0;
    let facilitiesCountAfter = 0;
    let tagsCountAfter = 0;

    try {
      const countsResult = await sql`
        SELECT 
          (SELECT COUNT(*) FROM places) as places_count,
          (SELECT COUNT(*) FROM place_images) as photos_count,
          (SELECT COUNT(*) FROM place_categories WHERE category_id = (SELECT id FROM categories WHERE slug = 'hotels')) as categories_count,
          (SELECT COUNT(*) FROM place_facilities) as facilities_count,
          (SELECT COUNT(*) FROM place_tags) as tags_count
      `;
      placesCountAfter = parseInt(countsResult.rows[0].places_count || 0);
      photosCountAfter = parseInt(countsResult.rows[0].photos_count || 0);
      categoriesCountAfter = parseInt(countsResult.rows[0].categories_count || 0);
      facilitiesCountAfter = parseInt(countsResult.rows[0].facilities_count || 0);
      tagsCountAfter = parseInt(countsResult.rows[0].tags_count || 0);
    } catch (error) {
      console.error(`   ⚠️  Error getting final counts: ${error.message}`);
    }

    const migratedHotels = placesCountAfter - placesCountBefore;
    const migratedPhotos = photosCountAfter - photosCountBefore;
    const migratedCategories = categoriesCountAfter - categoriesCountBefore;
    const migratedFacilities = facilitiesCountAfter - facilitiesCountBefore;
    const migratedTags = tagsCountAfter - tagsCountBefore;

    console.log(`\n✅ Migration completed!\n`);
    console.log("📊 Migration Summary:");
    console.log(`   Statements executed: ${executedStatements}`);
    console.log(`   Statements skipped: ${skippedStatements}`);
    console.log(`   Migrated hotels: ${migratedHotels}`);
    console.log(`   Migrated photos: ${migratedPhotos}`);
    console.log(`   Assigned hotels category: ${migratedCategories}`);
    console.log(`   Migrated facilities: ${migratedFacilities}`);
    console.log(`   Migrated tags: ${migratedTags}`);

    // Verification
    console.log("\n🔍 Verification:");
    const remainingInItems = await sql`
      SELECT COUNT(*) as count FROM items WHERE item_type = 'hotel'
    `;
    
    const totalHotelsInPlaces = await sql`
      SELECT COUNT(*) as count 
      FROM places p
      INNER JOIN place_categories pc ON pc.place_id = p.id
      INNER JOIN categories c ON c.id = pc.category_id
      WHERE c.slug = 'hotels'
    `;

    console.log(`   Hotels remaining in items table: ${remainingInItems.rows[0].count}`);
    console.log(`   Total hotels in places table: ${totalHotelsInPlaces.rows[0].count}`);

    if (parseInt(remainingInItems.rows[0].count) === 0) {
      console.log("\n✅ All hotels successfully migrated!");
    } else {
      console.log(
        `\n⚠️  ${remainingInItems.rows[0].count} hotels still in items table (may be duplicates or errors)`
      );
    }

    console.log("\n💡 Next steps:");
    console.log("   1. Update script.js to load hotels from places table");
    console.log("   2. Test filtering on the home page");
    console.log("   3. Once verified, you can optionally delete hotels from items table:");  
    console.log("      DELETE FROM items WHERE item_type = 'hotel';");
    console.log("      (Only do this after thorough testing!)");

  } catch (error) {
    console.error("\n❌ Migration failed:", error.message);
    console.error(error);
    process.exit(1);
  }
}

runMigration()
  .then(() => {
    console.log("\n✨ Done!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n💥 Fatal error:", error);
    process.exit(1);
  });
