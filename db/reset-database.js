#!/usr/bin/env node

/**
 * Database Reset & Rebuild Script (Node.js)
 * ============================================================================
 * WARNING: This will DELETE ALL DATA in the database!
 * Use only for development/testing purposes.
 *
 * Usage:
 *   node db/reset-database.js
 */

import sql from '../db/connection.js';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper to ask yes/no questions
function askQuestion(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Execute SQL file
async function executeSqlFile(filePath, description) {
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`${description}...`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

  const sqlContent = await fs.readFile(filePath, 'utf-8');

  // Split by semicolons but be smart about it
  const statements = sqlContent
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'));

  for (const statement of statements) {
    const trimmed = statement.trim();
    if (trimmed && !trimmed.startsWith('--')) {
      try {
        // Use template literal workaround for dynamic SQL
        await sql.query(trimmed);
      } catch (error) {
        // Ignore "does not exist" errors during DROP
        if (!error.message.includes('does not exist') &&
            !error.message.includes('already exists')) {
          console.error(`❌ Error executing statement:`, error.message);
          console.error(`Statement: ${trimmed.substring(0, 100)}...`);
          throw error;
        }
      }
    }
  }

  console.log(`✅ ${description} - Complete`);
}

// Main reset function
async function resetDatabase() {
  try {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🗑️  DATABASE RESET & REBUILD (Node.js)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n⚠️  WARNING: This will DELETE ALL DATA in the database!\n');

    const answer = await askQuestion('Are you sure you want to continue? (yes/no): ');

    if (answer.toLowerCase() !== 'yes') {
      console.log('❌ Aborted.');
      process.exit(0);
    }

    console.log('\n🔍 Checking database connection...');
    await sql`SELECT 1`;
    console.log('✅ Database connection successful\n');

    // Step 1: Drop all tables
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Step 1: Dropping all tables and functions...');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    // Drop tables
    await sql`DROP TABLE IF EXISTS items CASCADE`;
    await sql`DROP TABLE IF EXISTS categories CASCADE`;
    await sql`DROP TABLE IF EXISTS badges CASCADE`;

    // Drop old tables
    await sql`DROP TABLE IF EXISTS places CASCADE`;
    await sql`DROP TABLE IF EXISTS place_images CASCADE`;
    await sql`DROP TABLE IF EXISTS place_categories CASCADE`;
    await sql`DROP TABLE IF EXISTS place_facilities CASCADE`;
    await sql`DROP TABLE IF EXISTS place_features CASCADE`;
    await sql`DROP TABLE IF EXISTS place_tags CASCADE`;
    await sql`DROP TABLE IF EXISTS pets CASCADE`;
    await sql`DROP TABLE IF EXISTS hotels CASCADE`;
    await sql`DROP TABLE IF EXISTS hotel_images CASCADE`;
    await sql`DROP TABLE IF EXISTS artists CASCADE`;
    await sql`DROP TABLE IF EXISTS articles CASCADE`;
    await sql`DROP TABLE IF EXISTS faq_series CASCADE`;
    await sql`DROP TABLE IF EXISTS submissions CASCADE`;

    // Drop functions
    await sql`DROP FUNCTION IF EXISTS get_next_item_number(VARCHAR) CASCADE`;
    await sql`DROP FUNCTION IF EXISTS get_next_place_number() CASCADE`;
    await sql`DROP FUNCTION IF EXISTS get_next_pet_number() CASCADE`;
    await sql`DROP FUNCTION IF EXISTS get_next_hotel_number() CASCADE`;
    await sql`DROP FUNCTION IF EXISTS get_next_artist_number() CASCADE`;

    console.log('✅ All tables and functions dropped');

    // Step 2: Create schema
    await executeSqlFile(
      join(__dirname, 'schema-unified.sql'),
      'Step 2: Creating unified schema'
    );

    // Step 3: Load categories
    await executeSqlFile(
      join(__dirname, 'seeds/01_categories.sql'),
      'Step 3: Loading categories'
    );

    // Step 4: Load badges
    await executeSqlFile(
      join(__dirname, 'seeds/02_badges.sql'),
      'Step 4: Loading badges'
    );

    // Step 5: Verify
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Step 5: Verifying database...');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    const tables = await sql`
      SELECT COUNT(*) as count
      FROM information_schema.tables
      WHERE table_schema = 'public'
    `;
    console.log(`📊 Tables created: ${tables[0].count}`);

    const categories = await sql`SELECT COUNT(*) as count FROM categories`;
    console.log(`📊 Categories loaded: ${categories[0].count}`);

    const badges = await sql`SELECT COUNT(*) as count FROM badges`;
    console.log(`📊 Badges loaded: ${badges[0].count}`);

    const items = await sql`SELECT COUNT(*) as count FROM items`;
    console.log(`📊 Items in database: ${items[0].count}`);

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🎉 DATABASE RESET COMPLETE!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n✅ Database is now clean and ready for use.');
    console.log('📝 You can now add items using the web form or API.\n');

  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error(error);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

// Run the reset
resetDatabase();
