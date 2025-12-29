#!/usr/bin/env node
/**
 * Data Import Script
 * Imports existing data from JS files into PostgreSQL database
 *
 * Usage:
 *   node db/import-data.js [entity]
 *
 * Examples:
 *   node db/import-data.js         - Import all entities
 *   node db/import-data.js places  - Import places only
 *   node db/import-data.js hotels  - Import hotels only
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sql from './connection.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

/**
 * Generate slug from title
 * @param {string} title
 * @returns {string}
 */
function generateSlug(title) {
  if (!title) return '';
  return title
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Get badge ID from slug
 * @param {string} badgeSlug
 * @returns {Promise<number|null>}
 */
async function getBadgeId(badgeSlug) {
  if (!badgeSlug) return null;
  try {
    const result = await sql`SELECT id FROM badges WHERE slug = ${badgeSlug}`;
    return result.rows[0]?.id || null;
  } catch (error) {
    console.warn(`Warning: Badge '${badgeSlug}' not found`);
    return null;
  }
}

/**
 * Get category ID from slug
 * @param {string} categorySlug
 * @returns {Promise<number|null>}
 */
async function getCategoryId(categorySlug) {
  if (!categorySlug) return null;
  try {
    const result = await sql`SELECT id FROM categories WHERE slug = ${categorySlug}`;
    return result.rows[0]?.id || null;
  } catch (error) {
    console.warn(`Warning: Category '${categorySlug}' not found`);
    return null;
  }
}

/**
 * Import Places from places-data.js
 */
async function importPlaces() {
  console.log('\n📍 Importing Places...');

  const dataPath = path.join(projectRoot, 'places', 'places-data.js');

  if (!fs.existsSync(dataPath)) {
    console.log('⚠️  places-data.js not found, skipping...');
    return;
  }

  // Read and parse the file (simple extraction of allPlaces array)
  const fileContent = fs.readFileSync(dataPath, 'utf8');

  // Extract the array using regex (assuming const allPlaces = [...])
  const match = fileContent.match(/const\s+allPlaces\s*=\s*(\[[\s\S]*?\]);/);

  if (!match) {
    console.error('❌ Could not parse allPlaces from places-data.js');
    return;
  }

  let allPlaces;
  try {
    // Use eval in a controlled way (we trust our own data file)
    allPlaces = eval(match[1]);
  } catch (error) {
    console.error('❌ Error parsing places data:', error.message);
    return;
  }

  console.log(`   Found ${allPlaces.length} places to import`);

  let imported = 0;
  let skipped = 0;

  for (const place of allPlaces) {
    try {
      // Generate slug if not present
      const slug = place.id || generateSlug(place.title);

      // Check if already exists
      const existing = await sql`SELECT id FROM places WHERE slug = ${slug}`;
      if (existing.rows.length > 0) {
        console.log(`   ⏭️  Skipping '${place.title}' (already exists)`);
        skipped++;
        continue;
      }

      // Get badge ID
      const badgeId = await getBadgeId(place.badgeId);

      // Insert place
      const result = await sql`
        INSERT INTO places (
          slug, title, description, long_text, badge_id,
          rating, price, selected,
          location, distance, coordinates_lat, coordinates_lng,
          primary_image, duration, access_info,
          phone, website, instagram, booking_url, google_maps_query,
          verified, info_date, disclaimer,
          status, published_at
        ) VALUES (
          ${slug},
          ${place.title || ''},
          ${place.description || null},
          ${place.longText || ''},
          ${badgeId},
          ${place.rating || null},
          ${place.price || null},
          ${place.selected || false},
          ${place.location || null},
          ${place.distance || null},
          ${place.coordinates?.lat || null},
          ${place.coordinates?.lng || null},
          ${place.image || null},
          ${place.duration || null},
          ${place.access || null},
          ${place.phone || null},
          ${place.website || null},
          ${place.instagram || null},
          ${place.booking || null},
          ${place.googleMapsQuery || null},
          ${place.trust?.verified || false},
          ${place.trust?.infoDate || null},
          ${place.trust?.disclaimer !== false},
          'approved',
          NOW()
        ) RETURNING id
      `;

      const placeId = result.rows[0].id;

      // Insert images
      if (place.images && Array.isArray(place.images)) {
        for (let i = 0; i < place.images.length; i++) {
          await sql`
            INSERT INTO place_images (place_id, image_url, sequence_order)
            VALUES (${placeId}, ${place.images[i]}, ${i})
          `;
        }
      }

      // Insert categories
      if (place.category && Array.isArray(place.category)) {
        for (const catSlug of place.category) {
          const categoryId = await getCategoryId(catSlug);
          if (categoryId) {
            await sql`
              INSERT INTO place_categories (place_id, category_id)
              VALUES (${placeId}, ${categoryId})
            `;
          }
        }
      }

      // Insert facilities
      if (place.facilities && Array.isArray(place.facilities)) {
        for (const facility of place.facilities) {
          await sql`
            INSERT INTO place_facilities (place_id, facility_name)
            VALUES (${placeId}, ${facility})
          `;
        }
      }

      // Insert features
      if (place.features && Array.isArray(place.features)) {
        for (const feature of place.features) {
          await sql`
            INSERT INTO place_features (place_id, feature_text)
            VALUES (${placeId}, ${feature})
          `;
        }
      }

      // Insert tags
      if (place.tags && Array.isArray(place.tags)) {
        for (const tag of place.tags) {
          await sql`
            INSERT INTO place_tags (place_id, tag_name)
            VALUES (${placeId}, ${tag})
          `;
        }
      }

      console.log(`   ✅ Imported: ${place.title}`);
      imported++;

    } catch (error) {
      console.error(`   ❌ Error importing '${place.title}':`, error.message);
    }
  }

  console.log(`\n   📊 Results: ${imported} imported, ${skipped} skipped\n`);
}

/**
 * Import Hotels from hotels-data.js
 */
async function importHotels() {
  console.log('\n🏨 Importing Hotels...');

  const dataPath = path.join(projectRoot, 'hotel', 'hotels-data.js');

  if (!fs.existsSync(dataPath)) {
    console.log('⚠️  hotels-data.js not found, skipping...');
    return;
  }

  const fileContent = fs.readFileSync(dataPath, 'utf8');
  const match = fileContent.match(/const\s+allHotels\s*=\s*(\[[\s\S]*?\]);/);

  if (!match) {
    console.log('⚠️  Could not parse allHotels from hotels-data.js, skipping...');
    return;
  }

  let allHotels;
  try {
    allHotels = eval(match[1]);
  } catch (error) {
    console.error('❌ Error parsing hotels data:', error.message);
    return;
  }

  console.log(`   Found ${allHotels.length} hotels to import`);

  let imported = 0;
  let skipped = 0;

  for (const hotel of allHotels) {
    try {
      const slug = hotel.id || generateSlug(hotel.title);

      // Check if exists
      const existing = await sql`SELECT id FROM hotels WHERE slug = ${slug}`;
      if (existing.rows.length > 0) {
        console.log(`   ⏭️  Skipping '${hotel.title}' (already exists)`);
        skipped++;
        continue;
      }

      // Insert hotel
      const result = await sql`
        INSERT INTO hotels (
          slug, title, hotel_type, star_rating, room_count, capacity,
          location, distance_to_sea, coordinates_lat, coordinates_lng,
          description, long_text, primary_image,
          price_range, checkin_time, checkout_time,
          phone, email, website, instagram, booking_url, google_maps_query,
          rating, review_count,
          verified, info_date, disclaimer,
          status, published_at
        ) VALUES (
          ${slug},
          ${hotel.title || ''},
          ${hotel.hotelType || 'butik'},
          ${hotel.starRating || null},
          ${hotel.roomCount || null},
          ${hotel.capacity || null},
          ${hotel.location || ''},
          ${hotel.distanceToSea || null},
          ${hotel.coordinates?.lat || null},
          ${hotel.coordinates?.lng || null},
          ${hotel.description || ''},
          ${hotel.longText || ''},
          ${hotel.image || null},
          ${hotel.priceRange || null},
          ${hotel.checkinTime || null},
          ${hotel.checkoutTime || null},
          ${hotel.phone || ''},
          ${hotel.email || ''},
          ${hotel.website || null},
          ${hotel.instagram || null},
          ${hotel.booking || null},
          ${hotel.googleMapsQuery || null},
          ${hotel.rating || null},
          ${hotel.reviewCount || 0},
          ${hotel.trust?.verified || false},
          ${hotel.trust?.infoDate || null},
          ${hotel.trust?.disclaimer !== false},
          'approved',
          NOW()
        ) RETURNING id
      `;

      const hotelId = result.rows[0].id;

      // Insert images
      if (hotel.images && Array.isArray(hotel.images)) {
        for (let i = 0; i < hotel.images.length; i++) {
          await sql`
            INSERT INTO hotel_images (hotel_id, image_url, sequence_order)
            VALUES (${hotelId}, ${hotel.images[i]}, ${i})
          `;
        }
      }

      // Insert facilities
      if (hotel.facilities && Array.isArray(hotel.facilities)) {
        for (const facility of hotel.facilities) {
          await sql`
            INSERT INTO hotel_facilities (hotel_id, facility_name)
            VALUES (${hotelId}, ${facility})
          `;
        }
      }

      // Insert tags
      if (hotel.tags && Array.isArray(hotel.tags)) {
        for (const tag of hotel.tags) {
          await sql`
            INSERT INTO hotel_tags (hotel_id, tag_name)
            VALUES (${hotelId}, ${tag})
          `;
        }
      }

      console.log(`   ✅ Imported: ${hotel.title}`);
      imported++;

    } catch (error) {
      console.error(`   ❌ Error importing '${hotel.title}':`, error.message);
    }
  }

  console.log(`\n   📊 Results: ${imported} imported, ${skipped} skipped\n`);
}

/**
 * Import FAQs from faq-list-data.js
 */
async function importFAQs() {
  console.log('\n❓ Importing FAQs...');

  const dataPath = path.join(projectRoot, 'faq', 'faq-list-data.js');

  if (!fs.existsSync(dataPath)) {
    console.log('⚠️  faq-list-data.js not found, skipping...');
    return;
  }

  const fileContent = fs.readFileSync(dataPath, 'utf8');
  const match = fileContent.match(/window\.faqData\s*=\s*(\[[\s\S]*?\]);/);

  if (!match) {
    console.log('⚠️  Could not parse faqData, skipping...');
    return;
  }

  let faqData;
  try {
    faqData = eval(match[1]);
  } catch (error) {
    console.error('❌ Error parsing FAQ data:', error.message);
    return;
  }

  console.log(`   Found ${faqData.length} FAQs to import`);

  let imported = 0;

  for (let i = 0; i < faqData.length; i++) {
    const faq = faqData[i];
    try {
      await sql`
        INSERT INTO faqs (question, answer, sequence_order, is_published)
        VALUES (${faq.question}, ${faq.answer}, ${i}, true)
      `;
      imported++;
    } catch (error) {
      console.error(`   ❌ Error importing FAQ:`, error.message);
    }
  }

  console.log(`\n   📊 Results: ${imported} imported\n`);
}

/**
 * Main import function
 */
async function main() {
  const args = process.argv.slice(2);
  const entity = args[0] || 'all';

  console.log('╔════════════════════════════════════════╗');
  console.log('║   Kaş Guide Data Import                ║');
  console.log('╚════════════════════════════════════════╝\n');

  try {
    if (entity === 'places' || entity === 'all') {
      await importPlaces();
    }

    if (entity === 'hotels' || entity === 'all') {
      await importHotels();
    }

    if (entity === 'faqs' || entity === 'all') {
      await importFAQs();
    }

    console.log('\n✨ Data import completed!\n');
  } catch (error) {
    console.error('\n💥 Import failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { importPlaces, importHotels, importFAQs };
