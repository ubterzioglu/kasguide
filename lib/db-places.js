/**
 * Database operations for Places
 */

import sql from '../db/connection.js';

/**
 * Generate slug from title
 */
function generateSlug(title) {
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
 * Get all approved places
 */
export async function getAllPlaces(options = {}) {
  const { limit, offset, category, status = 'approved' } = options;

  let query = sql`
    SELECT
      p.*,
      b.emoji as badge_emoji,
      b.title as badge_title,
      (SELECT json_agg(pi.image_url ORDER BY pi.sequence_order)
       FROM place_images pi WHERE pi.place_id = p.id) as images,
      (SELECT json_agg(c.slug)
       FROM place_categories pc
       JOIN categories c ON c.id = pc.category_id
       WHERE pc.place_id = p.id) as categories,
      (SELECT json_agg(pf.facility_name)
       FROM place_facilities pf WHERE pf.place_id = p.id) as facilities,
      (SELECT json_agg(pft.feature_text)
       FROM place_features pft WHERE pft.place_id = p.id) as features,
      (SELECT json_agg(pt.tag_name)
       FROM place_tags pt WHERE pt.place_id = p.id) as tags
    FROM places p
    LEFT JOIN badges b ON b.id = p.badge_id
    WHERE p.status = ${status}
  `;

  if (category) {
    query = sql`
      ${query}
      AND EXISTS (
        SELECT 1 FROM place_categories pc
        JOIN categories c ON c.id = pc.category_id
        WHERE pc.place_id = p.id AND c.slug = ${category}
      )
    `;
  }

  query = sql`${query} ORDER BY p.published_at DESC`;

  if (limit) {
    query = sql`${query} LIMIT ${limit}`;
  }

  if (offset) {
    query = sql`${query} OFFSET ${offset}`;
  }

  const result = await query;
  return result.rows;
}

/**
 * Get place by slug
 */
export async function getPlaceBySlug(slug) {
  const result = await sql`
    SELECT
      p.*,
      b.emoji as badge_emoji,
      b.title as badge_title,
      b.description as badge_description,
      (SELECT json_agg(pi.image_url ORDER BY pi.sequence_order)
       FROM place_images pi WHERE pi.place_id = p.id) as images,
      (SELECT json_agg(c.slug)
       FROM place_categories pc
       JOIN categories c ON c.id = pc.category_id
       WHERE pc.place_id = p.id) as categories,
      (SELECT json_agg(pf.facility_name)
       FROM place_facilities pf WHERE pf.place_id = p.id) as facilities,
      (SELECT json_agg(pft.feature_text)
       FROM place_features pft WHERE pft.place_id = p.id) as features,
      (SELECT json_agg(pt.tag_name)
       FROM place_tags pt WHERE pt.place_id = p.id) as tags
    FROM places p
    LEFT JOIN badges b ON b.id = p.badge_id
    WHERE p.slug = ${slug} AND p.status = 'approved'
  `;

  return result.rows[0] || null;
}

/**
 * Create a new place submission
 */
export async function createPlace(data) {
  const slug = data.slug || generateSlug(data.title);

  // Insert main place record
  const result = await sql`
    INSERT INTO places (
      slug, title, description, long_text,
      location, distance, coordinates_lat, coordinates_lng,
      phone, website, instagram, booking_url, google_maps_query,
      duration, access_info, price,
      status, submission_notes, submitted_by
    ) VALUES (
      ${slug},
      ${data.title},
      ${data.description || null},
      ${data.longText},
      ${data.location || null},
      ${data.distance || null},
      ${data.coordinates?.lat || null},
      ${data.coordinates?.lng || null},
      ${data.phone},
      ${data.website || null},
      ${data.instagram || null},
      ${data.booking || null},
      ${data.googleMapsQuery || null},
      ${data.duration || null},
      ${data.access || null},
      ${data.price || null},
      'pending',
      ${data.extraNotes || null},
      ${data.submittedBy || null}
    ) RETURNING id, slug
  `;

  const placeId = result.rows[0].id;

  // Insert images if provided
  if (data.photos && Array.isArray(data.photos)) {
    for (let i = 0; i < data.photos.length; i++) {
      await sql`
        INSERT INTO place_images (place_id, image_url, sequence_order)
        VALUES (${placeId}, ${data.photos[i]}, ${i})
      `;
    }
  }

  // Insert categories if provided
  if (data.categories && Array.isArray(data.categories)) {
    for (const categorySlug of data.categories) {
      const catResult = await sql`SELECT id FROM categories WHERE slug = ${categorySlug}`;
      if (catResult.rows.length > 0) {
        await sql`
          INSERT INTO place_categories (place_id, category_id)
          VALUES (${placeId}, ${catResult.rows[0].id})
        `;
      }
    }
  }

  return result.rows[0];
}

/**
 * Update place status (for admin approval)
 */
export async function updatePlaceStatus(id, status, adminNotes = null) {
  const publishedAt = status === 'approved' ? new Date().toISOString() : null;

  await sql`
    UPDATE places
    SET
      status = ${status},
      published_at = ${publishedAt},
      submission_notes = COALESCE(${adminNotes}, submission_notes)
    WHERE id = ${id}
  `;

  return true;
}

/**
 * Get pending places (for admin review)
 */
export async function getPendingPlaces() {
  const result = await sql`
    SELECT
      p.*,
      (SELECT json_agg(pi.image_url ORDER BY pi.sequence_order)
       FROM place_images pi WHERE pi.place_id = p.id) as images,
      (SELECT json_agg(c.slug)
       FROM place_categories pc
       JOIN categories c ON c.id = pc.category_id
       WHERE pc.place_id = p.id) as categories
    FROM places p
    WHERE p.status = 'pending'
    ORDER BY p.created_at DESC
  `;

  return result.rows;
}

/**
 * Delete a place
 */
export async function deletePlace(id) {
  await sql`DELETE FROM places WHERE id = ${id}`;
  return true;
}

/**
 * Search places
 */
export async function searchPlaces(query) {
  const searchTerm = `%${query}%`;

  const result = await sql`
    SELECT
      p.*,
      b.emoji as badge_emoji,
      (SELECT json_agg(pi.image_url ORDER BY pi.sequence_order)
       FROM place_images pi WHERE pi.place_id = p.id) as images
    FROM places p
    LEFT JOIN badges b ON b.id = p.badge_id
    WHERE p.status = 'approved'
      AND (
        p.title ILIKE ${searchTerm}
        OR p.description ILIKE ${searchTerm}
        OR p.long_text ILIKE ${searchTerm}
      )
    ORDER BY p.rating DESC NULLS LAST
    LIMIT 20
  `;

  return result.rows;
}
