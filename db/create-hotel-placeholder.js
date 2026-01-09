/**
 * Create Hotel Placeholder
 * Creates 1 hotel example in places table based on a bar entry
 */

import "dotenv/config";
import sql from "./connection.js";

async function createHotelPlaceholder() {
  console.log("🏨 Creating Hotel Placeholder...\n");

  try {
    // Test connection
    console.log("📡 Testing database connection...");
    const testResult = await sql`SELECT NOW() as current_time, version() as version`;
    console.log(`✅ Connected to database (${testResult.rows[0].version.split(' ')[0]})\n`);

    // Find a bar from places table
    console.log("🔍 Finding a bar to use as template...");
    const barPlace = await sql`
      SELECT p.*
      FROM places p
      INNER JOIN place_categories pc ON pc.place_id = p.id
      INNER JOIN categories c ON c.id = pc.category_id
      WHERE c.slug = 'bar' AND p.status = 'approved'
      LIMIT 1
    `;

    if (barPlace.rows.length === 0) {
      console.log("   ❌ No bar found in places table!");
      process.exit(1);
    }

    const bar = barPlace.rows[0];
    console.log(`   ✅ Found bar: "${bar.title}" (ID: ${bar.id})\n`);

    // Check if "hotels" or "oteller" category exists
    console.log("🔍 Checking for hotels category...");
    const hotelsCat = await sql`
      SELECT id, slug, name FROM categories WHERE slug IN ('hotels', 'oteller', 'otel')
    `;

    let hotelsCategoryId;
    if (hotelsCat.rows.length === 0) {
      console.log("   ⚠️  Hotels category not found. Creating it...");
      const createCat = await sql`
        INSERT INTO categories (slug, name, icon_code, color_code)
        VALUES ('hotels', 'Oteller', '🏨', 'category-amber')
        ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
        RETURNING id, slug, name
      `;
      hotelsCategoryId = createCat.rows[0].id;
      console.log(`   ✅ Created 'hotels' category (ID: ${hotelsCategoryId})\n`);
    } else {
      hotelsCategoryId = hotelsCat.rows[0].id;
      console.log(`   ✅ Found category: ${hotelsCat.rows[0].slug} (ID: ${hotelsCategoryId})\n`);
    }

    // Create hotel placeholder based on bar
    console.log("📝 Creating hotel placeholder...");
    const hotelSlug = `otel-ornek-${Date.now()}`;
    
    const newHotel = await sql`
      INSERT INTO places (
        slug, title, description, long_text,
        badge_id, rating, price, selected,
        location, distance, coordinates_lat, coordinates_lng,
        primary_image, duration, access_info,
        phone, website, instagram, booking_url, google_maps_query,
        verified, info_date, disclaimer,
        status, submitted_by, submission_notes,
        created_at, updated_at, published_at
      ) VALUES (
        ${hotelSlug},
        ${bar.title + ' (Otel Örneği)'},
        ${bar.description || 'Bu bir otel örneğidir. Bar verilerinden oluşturulmuştur.'},
        COALESCE(${bar.long_text}, 'Bu bir otel örneğidir.'),
        ${bar.badge_id},
        ${bar.rating},
        ${bar.price},
        ${bar.selected || false},
        ${bar.location},
        ${bar.distance},
        ${bar.coordinates_lat},
        ${bar.coordinates_lng},
        ${bar.primary_image},
        ${bar.duration},
        ${bar.access_info},
        ${bar.phone},
        ${bar.website},
        ${bar.instagram},
        ${bar.booking_url},
        ${bar.google_maps_query},
        ${bar.verified || false},
        ${bar.info_date},
        ${bar.disclaimer !== false},
        'approved',
        'system',
        'Placeholder hotel created from bar template',
        NOW(),
        NOW(),
        NOW()
      ) RETURNING id, slug, title
    `;

    const hotelId = newHotel.rows[0].id;
    console.log(`   ✅ Created hotel: "${newHotel.rows[0].title}" (ID: ${hotelId}, Slug: ${newHotel.rows[0].slug})\n`);

    // Copy images from bar to hotel
    console.log("📸 Copying images...");
    const barImages = await sql`
      SELECT image_url, sequence_order, caption
      FROM place_images
      WHERE place_id = ${bar.id}
      ORDER BY sequence_order
    `;

    if (barImages.rows.length > 0) {
      for (const img of barImages.rows) {
        await sql`
          INSERT INTO place_images (place_id, image_url, sequence_order, caption)
          VALUES (${hotelId}, ${img.image_url}, ${img.sequence_order}, ${img.caption})
        `;
      }
      console.log(`   ✅ Copied ${barImages.rows.length} images\n`);
    } else {
      console.log(`   ℹ️  No images to copy\n`);
    }

    // Assign hotels category
    console.log("🏷️  Assigning hotels category...");
    await sql`
      INSERT INTO place_categories (place_id, category_id)
      VALUES (${hotelId}, ${hotelsCategoryId})
      ON CONFLICT (place_id, category_id) DO NOTHING
    `;
    console.log(`   ✅ Assigned 'hotels' category\n`);

    // Copy facilities if any
    console.log("🏗️  Copying facilities...");
    const barFacilities = await sql`
      SELECT facility_name
      FROM place_facilities
      WHERE place_id = ${bar.id}
    `;

    if (barFacilities.rows.length > 0) {
      for (const facility of barFacilities.rows) {
        await sql`
          INSERT INTO place_facilities (place_id, facility_name)
          VALUES (${hotelId}, ${facility.facility_name})
          ON CONFLICT DO NOTHING
        `;
      }
      console.log(`   ✅ Copied ${barFacilities.rows.length} facilities\n`);
    }

    // Copy features if any
    console.log("✨ Copying features...");
    const barFeatures = await sql`
      SELECT feature_text
      FROM place_features
      WHERE place_id = ${bar.id}
    `;

    if (barFeatures.rows.length > 0) {
      for (const feature of barFeatures.rows) {
        await sql`
          INSERT INTO place_features (place_id, feature_text)
          VALUES (${hotelId}, ${feature.feature_text})
          ON CONFLICT DO NOTHING
        `;
      }
      console.log(`   ✅ Copied ${barFeatures.rows.length} features\n`);
    }

    // Copy tags if any
    console.log("🏷️  Copying tags...");
    const barTags = await sql`
      SELECT tag_name
      FROM place_tags
      WHERE place_id = ${bar.id}
    `;

    if (barTags.rows.length > 0) {
      for (const tag of barTags.rows) {
        await sql`
          INSERT INTO place_tags (place_id, tag_name)
          VALUES (${hotelId}, ${tag.tag_name})
          ON CONFLICT DO NOTHING
        `;
      }
      console.log(`   ✅ Copied ${barTags.rows.length} tags\n`);
    }

    // Verify
    console.log("🔍 Verification:");
    const verifyHotel = await sql`
      SELECT 
        p.id, p.slug, p.title, p.status,
        (SELECT json_agg(c.slug) 
         FROM place_categories pc 
         JOIN categories c ON c.id = pc.category_id 
         WHERE pc.place_id = p.id) as categories,
        (SELECT COUNT(*) FROM place_images WHERE place_id = p.id) as image_count
      FROM places p
      WHERE p.id = ${hotelId}
    `;

    const hotel = verifyHotel.rows[0];
    console.log(`   ID: ${hotel.id}`);
    console.log(`   Title: ${hotel.title}`);
    console.log(`   Slug: ${hotel.slug}`);
    console.log(`   Status: ${hotel.status}`);
    console.log(`   Categories: ${JSON.stringify(hotel.categories)}`);
    console.log(`   Images: ${hotel.image_count}`);

    console.log("\n✅ Hotel placeholder created successfully!");
    console.log(`   It will appear in the home page under 'hotels' category filter`);

  } catch (error) {
    console.error("\n❌ Error:", error.message);
    console.error(error);
    process.exit(1);
  }
}

createHotelPlaceholder()
  .then(() => {
    console.log("\n✨ Done!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n💥 Fatal error:", error);
    process.exit(1);
  });
