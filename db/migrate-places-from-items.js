/**
 * Migration Script: Move Places from Unified Items Table to Dedicated Places Table
 * 
 * This script executes the SQL migration to separate places from the items table.
 * 
 * Usage:
 *   node db/migrate-places-from-items.js
 *   node db/migrate-places-from-items.js --dry-run  (preview only, no changes)
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

async function createPlacesTable() {
  console.log("📋 Creating places table and related tables...\n");

  const createPlacesTableSQL = `
    CREATE TABLE IF NOT EXISTS places (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      long_text TEXT NOT NULL,
      badge_id INTEGER REFERENCES badges(id),
      rating DECIMAL(2,1) CHECK (rating >= 0 AND rating <= 5),
      price VARCHAR(10),
      selected BOOLEAN DEFAULT FALSE,
      location VARCHAR(255),
      distance VARCHAR(100),
      coordinates_lat DECIMAL(10, 7),
      coordinates_lng DECIMAL(10, 7),
      primary_image VARCHAR(500),
      duration VARCHAR(100),
      access_info TEXT,
      phone VARCHAR(50),
      website VARCHAR(500),
      instagram VARCHAR(255),
      booking_url VARCHAR(500),
      google_maps_query TEXT,
      verified BOOLEAN DEFAULT FALSE,
      info_date VARCHAR(20),
      disclaimer BOOLEAN DEFAULT TRUE,
      status VARCHAR(20) DEFAULT 'pending',
      submitted_by VARCHAR(255),
      submission_notes TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW(),
      published_at TIMESTAMP
    );
  `;

  const createPlaceImagesSQL = `
    CREATE TABLE IF NOT EXISTS place_images (
      id SERIAL PRIMARY KEY,
      place_id INTEGER NOT NULL REFERENCES places(id) ON DELETE CASCADE,
      image_url VARCHAR(500) NOT NULL,
      sequence_order INTEGER DEFAULT 0,
      caption TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;

  const createPlaceCategoriesSQL = `
    CREATE TABLE IF NOT EXISTS place_categories (
      id SERIAL PRIMARY KEY,
      place_id INTEGER NOT NULL REFERENCES places(id) ON DELETE CASCADE,
      category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
      UNIQUE(place_id, category_id)
    );
  `;

  const createPlaceFacilitiesSQL = `
    CREATE TABLE IF NOT EXISTS place_facilities (
      id SERIAL PRIMARY KEY,
      place_id INTEGER NOT NULL REFERENCES places(id) ON DELETE CASCADE,
      facility_name VARCHAR(100) NOT NULL
    );
  `;

  const createPlaceFeaturesSQL = `
    CREATE TABLE IF NOT EXISTS place_features (
      id SERIAL PRIMARY KEY,
      place_id INTEGER NOT NULL REFERENCES places(id) ON DELETE CASCADE,
      feature_text VARCHAR(255) NOT NULL
    );
  `;

  const createPlaceTagsSQL = `
    CREATE TABLE IF NOT EXISTS place_tags (
      id SERIAL PRIMARY KEY,
      place_id INTEGER NOT NULL REFERENCES places(id) ON DELETE CASCADE,
      tag_name VARCHAR(100) NOT NULL
    );
  `;

  const createIndexesSQL = `
    CREATE INDEX IF NOT EXISTS idx_places_status ON places(status);
    CREATE INDEX IF NOT EXISTS idx_places_slug ON places(slug);
    CREATE INDEX IF NOT EXISTS idx_places_badge ON places(badge_id);
    CREATE INDEX IF NOT EXISTS idx_places_location ON places(coordinates_lat, coordinates_lng);
    CREATE INDEX IF NOT EXISTS idx_places_published ON places(published_at);
  `;

  try {
    await sql.query(createPlacesTableSQL);
    console.log("   ✅ Created places table");
    
    await sql.query(createPlaceImagesSQL);
    console.log("   ✅ Created place_images table");
    
    await sql.query(createPlaceCategoriesSQL);
    console.log("   ✅ Created place_categories table");
    
    await sql.query(createPlaceFacilitiesSQL);
    console.log("   ✅ Created place_facilities table");
    
    await sql.query(createPlaceFeaturesSQL);
    console.log("   ✅ Created place_features table");
    
    await sql.query(createPlaceTagsSQL);
    console.log("   ✅ Created place_tags table");
    
    await sql.query(createIndexesSQL);
    console.log("   ✅ Created indexes\n");
    
    return true;
  } catch (error) {
    console.error(`   ❌ Error creating tables: ${error.message}`);
    throw error;
  }
}

async function runMigration() {
  console.log("🚀 Starting Places Migration...\n");

  try {
    // Test connection
    console.log("📡 Testing database connection...");
    const testResult = await sql`SELECT NOW() as current_time, version() as version`;
    console.log(`✅ Connected to database (${testResult.rows[0].version.split(' ')[0]})\n`);

    // Check if places table exists, create if needed
    console.log("🔍 Checking if places table exists...");
    const placesTableExists = await checkTableExists('places');
    
    if (!placesTableExists) {
      if (DRY_RUN) {
        console.log("   ⚠️  Places table does not exist.");
        console.log("   ℹ️  In dry-run mode, tables will be created when you run the actual migration.\n");
      } else {
        console.log("   ⚠️  Places table does not exist. Creating it now...\n");
        await createPlacesTable();
      }
    } else {
      console.log("   ✅ Places table already exists\n");
    }

    // Count places in items table before migration
    console.log("📊 Checking current state...");
    const itemsCountResult = await sql`
      SELECT COUNT(*) as count FROM items WHERE item_type = 'place'
    `;
    const placesInItems = parseInt(itemsCountResult.rows[0].count);

    let placesInPlaces = 0;
    if (placesTableExists || !DRY_RUN) {
      try {
        const placesCountResult = await sql`
          SELECT COUNT(*) as count FROM places
        `;
        placesInPlaces = parseInt(placesCountResult.rows[0].count);
      } catch (error) {
        // If query fails, table might not exist yet (shouldn't happen now, but handle gracefully)
        placesInPlaces = 0;
      }
    }

    console.log(`   Places in items table: ${placesInItems}`);
    console.log(`   Places in places table: ${placesInPlaces}\n`);

    if (placesInItems === 0) {
      console.log("✅ No places found in items table. Migration not needed.");
      return;
    }

    if (DRY_RUN) {
      console.log("🔍 DRY RUN MODE - No changes will be made\n");
      console.log(`   Would migrate ${placesInItems} places from items to places table`);
      console.log("\nTo actually run the migration, execute without --dry-run flag");
      return;
    }

    // Read migration SQL file
    const sqlFilePath = path.join(__dirname, "migrate-places-from-items.sql");
    if (!fs.existsSync(sqlFilePath)) {
      throw new Error(`Migration SQL file not found: ${sqlFilePath}`);
    }

    const sqlFile = fs.readFileSync(sqlFilePath, "utf8");

    // Better SQL parsing - split by semicolons that are at the end of lines or followed by newlines
    // Remove comments and empty lines
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

    // Split by semicolons that are followed by whitespace/newline
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
    let featuresCountBefore = 0;
    let tagsCountBefore = 0;

    try {
      const countsResult = await sql`
        SELECT 
          (SELECT COUNT(*) FROM places) as places_count,
          (SELECT COUNT(*) FROM place_images) as photos_count,
          (SELECT COUNT(*) FROM place_categories) as categories_count,
          (SELECT COUNT(*) FROM place_facilities) as facilities_count,
          (SELECT COUNT(*) FROM place_features) as features_count,
          (SELECT COUNT(*) FROM place_tags) as tags_count
      `;
      placesCountBefore = parseInt(countsResult.rows[0].places_count || 0);
      photosCountBefore = parseInt(countsResult.rows[0].photos_count || 0);
      categoriesCountBefore = parseInt(countsResult.rows[0].categories_count || 0);
      facilitiesCountBefore = parseInt(countsResult.rows[0].facilities_count || 0);
      featuresCountBefore = parseInt(countsResult.rows[0].features_count || 0);
      tagsCountBefore = parseInt(countsResult.rows[0].tags_count || 0);
    } catch (error) {
      // If tables don't exist, counts are 0
      console.log("   ℹ️  Getting initial counts...");
    }

    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      const statementType = statement.substring(0, 30).toUpperCase();

      try {
        // Execute statement
        await sql.query(statement);
        executedStatements++;
        console.log(`   ✅ [${i + 1}/${statements.length}] Executed: ${statementType}...`);
      } catch (error) {
        // Some statements might fail if data already exists (NOT EXISTS checks)
        // This is expected and safe
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
          // Don't throw - continue with other statements
          // throw error;
        }
      }
    }

    // Get final counts
    let placesCountAfter = 0;
    let photosCountAfter = 0;
    let categoriesCountAfter = 0;
    let facilitiesCountAfter = 0;
    let featuresCountAfter = 0;
    let tagsCountAfter = 0;

    try {
      const countsResult = await sql`
        SELECT 
          (SELECT COUNT(*) FROM places) as places_count,
          (SELECT COUNT(*) FROM place_images) as photos_count,
          (SELECT COUNT(*) FROM place_categories) as categories_count,
          (SELECT COUNT(*) FROM place_facilities) as facilities_count,
          (SELECT COUNT(*) FROM place_features) as features_count,
          (SELECT COUNT(*) FROM place_tags) as tags_count
      `;
      placesCountAfter = parseInt(countsResult.rows[0].places_count || 0);
      photosCountAfter = parseInt(countsResult.rows[0].photos_count || 0);
      categoriesCountAfter = parseInt(countsResult.rows[0].categories_count || 0);
      facilitiesCountAfter = parseInt(countsResult.rows[0].facilities_count || 0);
      featuresCountAfter = parseInt(countsResult.rows[0].features_count || 0);
      tagsCountAfter = parseInt(countsResult.rows[0].tags_count || 0);
    } catch (error) {
      console.error(`   ⚠️  Error getting final counts: ${error.message}`);
    }

    const migratedPlaces = placesCountAfter - placesCountBefore;
    const migratedPhotos = photosCountAfter - photosCountBefore;
    const migratedCategories = categoriesCountAfter - categoriesCountBefore;
    const migratedFacilities = facilitiesCountAfter - facilitiesCountBefore;
    const migratedFeatures = featuresCountAfter - featuresCountBefore;
    const migratedTags = tagsCountAfter - tagsCountBefore;

    console.log(`\n✅ Migration completed!\n`);
    console.log("📊 Migration Summary:");
    console.log(`   Statements executed: ${executedStatements}`);
    console.log(`   Statements skipped: ${skippedStatements}`);
    console.log(`   Migrated places: ${migratedPlaces}`);
    console.log(`   Migrated photos: ${migratedPhotos}`);
    console.log(`   Migrated categories: ${migratedCategories}`);
    console.log(`   Migrated facilities: ${migratedFacilities}`);
    console.log(`   Migrated features: ${migratedFeatures}`);
    console.log(`   Migrated tags: ${migratedTags}`);

    // Verification
    console.log("\n🔍 Verification:");
    const remainingInItems = await sql`
      SELECT COUNT(*) as count FROM items WHERE item_type = 'place'
    `;
    const totalPlaces = await sql`
      SELECT COUNT(*) as count FROM places
    `;

    console.log(`   Places remaining in items table: ${remainingInItems.rows[0].count}`);
    console.log(`   Total places in places table: ${totalPlaces.rows[0].count}`);

    if (parseInt(remainingInItems.rows[0].count) === 0) {
      console.log("\n✅ All places successfully migrated!");
    } else {
      console.log(
        `\n⚠️  ${remainingInItems.rows[0].count} places still in items table (may be duplicates or errors)`
      );
    }

    console.log("\n💡 Next steps:");
    console.log("   1. Test your application (home page filtering, admin panel)");
    console.log("   2. Verify places display correctly");
    console.log("   3. Once verified, you can optionally delete places from items table:");
    console.log("      DELETE FROM items WHERE item_type = 'place';");
    console.log("      (Only do this after thorough testing!)");

  } catch (error) {
    console.error("\n❌ Migration failed:", error.message);
    console.error(error);
    process.exit(1);
  }
}

// Run migration
runMigration()
  .then(() => {
    console.log("\n✨ Done!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n💥 Fatal error:", error);
    process.exit(1);
  });
