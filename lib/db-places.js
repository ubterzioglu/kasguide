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
 * Returns data in format compatible with convertAPIPlace() in script.js
 */
export async function getAllPlaces(options = {}) {
  const { limit, offset, category, status = 'approved' } = options;

  // Build query with proper parameterization
  let queryText = `
    SELECT
      p.id,
      p.slug,
      p.title,
      p.description,
      p.long_text,
      p.location,
      p.coordinates_lat,
      p.coordinates_lng,
      p.phone,
      p.website,
      p.instagram,
      p.rating,
      p.verified,
      p.status,
      p.created_at,
      p.updated_at,
      p.published_at,
      -- Badge object (for convertAPIPlace compatibility)
      CASE
        WHEN b.id IS NOT NULL THEN
          json_build_object(
            'emoji', b.emoji,
            'title', b.title,
            'description', b.description
          )
        ELSE NULL
      END as badge,
      -- Photos array (format expected by convertAPIPlace)
      COALESCE(
        (
          SELECT json_agg(
            json_build_object(
              'url', pi.image_url,
              'sequence', pi.sequence_order,
              'caption', COALESCE(pi.caption, ''),
              'is_primary', pi.sequence_order = 0
            ) ORDER BY pi.sequence_order
          )
          FROM place_images pi 
          WHERE pi.place_id = p.id
        ),
        -- Fallback: use primary_image if no images in place_images
        CASE
          WHEN p.primary_image IS NOT NULL THEN
            json_build_array(
              json_build_object(
                'url', p.primary_image,
                'sequence', 0,
                'caption', 'Main photo',
                'is_primary', true
              )
            )
          ELSE '[]'::json
        END
      ) as photos,
      -- Attributes object (format expected by convertAPIPlace)
      json_build_object(
        'badge_id', p.badge_id,
        'categories', COALESCE(
          (SELECT json_agg(c.slug)
           FROM place_categories pc
           JOIN categories c ON c.id = pc.category_id
           WHERE pc.place_id = p.id),
          '[]'::json
        ),
        'price', p.price,
        'selected', COALESCE(p.selected, false),
        'distance', p.distance,
        'duration', p.duration,
        'access_info', p.access_info,
        'google_maps_query', p.google_maps_query,
        'booking_url', p.booking_url,
        'info_date', p.info_date,
        'disclaimer', COALESCE(p.disclaimer, true),
        'facilities', COALESCE(
          (SELECT json_agg(pf.facility_name)
           FROM place_facilities pf WHERE pf.place_id = p.id),
          '[]'::json
        ),
        'features', COALESCE(
          (SELECT json_agg(pft.feature_text)
           FROM place_features pft WHERE pft.place_id = p.id),
          '[]'::json
        ),
        'tags', COALESCE(
          (SELECT json_agg(pt.tag_name)
           FROM place_tags pt WHERE pt.place_id = p.id),
          '[]'::json
        )
      ) as attributes
    FROM places p
    LEFT JOIN badges b ON b.id = p.badge_id
    WHERE p.status = $1
  `;

  const params = [status];
  let paramCount = 1;

  if (category) {
    paramCount++;
    queryText += `
      AND EXISTS (
        SELECT 1 FROM place_categories pc
        JOIN categories c ON c.id = pc.category_id
        WHERE pc.place_id = p.id AND c.slug = $${paramCount}
      )
    `;
    params.push(category);
  }

  queryText += ' ORDER BY p.published_at DESC NULLS LAST, p.created_at DESC';

  if (limit) {
    paramCount++;
    queryText += ` LIMIT $${paramCount}`;
    params.push(limit);
  }

  if (offset) {
    paramCount++;
    queryText += ` OFFSET $${paramCount}`;
    params.push(offset);
  }

  const result = await sql.query(queryText, params);
  return result.rows;
}

/**
 * Get place by slug
 * Returns data in format compatible with convertAPIPlace() in script.js
 */
export async function getPlaceBySlug(slug) {
  const result = await sql`
    SELECT
      p.id,
      p.slug,
      p.title,
      p.description,
      p.long_text,
      p.location,
      p.coordinates_lat,
      p.coordinates_lng,
      p.phone,
      p.website,
      p.instagram,
      p.rating,
      p.verified,
      p.status,
      p.created_at,
      p.updated_at,
      p.published_at,
      -- Badge object (for convertAPIPlace compatibility)
      CASE
        WHEN b.id IS NOT NULL THEN
          json_build_object(
            'emoji', b.emoji,
            'title', b.title,
            'description', b.description
          )
        ELSE NULL
      END as badge,
      -- Photos array (format expected by convertAPIPlace)
      COALESCE(
        (
          SELECT json_agg(
            json_build_object(
              'url', pi.image_url,
              'sequence', pi.sequence_order,
              'caption', COALESCE(pi.caption, ''),
              'is_primary', pi.sequence_order = 0
            ) ORDER BY pi.sequence_order
          )
          FROM place_images pi 
          WHERE pi.place_id = p.id
        ),
        -- Fallback: use primary_image if no images in place_images
        CASE
          WHEN p.primary_image IS NOT NULL THEN
            json_build_array(
              json_build_object(
                'url', p.primary_image,
                'sequence', 0,
                'caption', 'Main photo',
                'is_primary', true
              )
            )
          ELSE '[]'::json
        END
      ) as photos,
      -- Attributes object (format expected by convertAPIPlace)
      json_build_object(
        'badge_id', p.badge_id,
        'categories', COALESCE(
          (SELECT json_agg(c.slug)
           FROM place_categories pc
           JOIN categories c ON c.id = pc.category_id
           WHERE pc.place_id = p.id),
          '[]'::json
        ),
        'price', p.price,
        'selected', COALESCE(p.selected, false),
        'distance', p.distance,
        'duration', p.duration,
        'access_info', p.access_info,
        'google_maps_query', p.google_maps_query,
        'booking_url', p.booking_url,
        'info_date', p.info_date,
        'disclaimer', COALESCE(p.disclaimer, true),
        'facilities', COALESCE(
          (SELECT json_agg(pf.facility_name)
           FROM place_facilities pf WHERE pf.place_id = p.id),
          '[]'::json
        ),
        'features', COALESCE(
          (SELECT json_agg(pft.feature_text)
           FROM place_features pft WHERE pft.place_id = p.id),
          '[]'::json
        ),
        'tags', COALESCE(
          (SELECT json_agg(pt.tag_name)
           FROM place_tags pt WHERE pt.place_id = p.id),
          '[]'::json
        )
      ) as attributes
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
 * Returns data in format compatible with convertAPIPlace() in script.js
 */
export async function searchPlaces(query) {
  const searchTerm = `%${query}%`;

  const result = await sql`
    SELECT
      p.id,
      p.slug,
      p.title,
      p.description,
      p.long_text,
      p.location,
      p.coordinates_lat,
      p.coordinates_lng,
      p.phone,
      p.website,
      p.instagram,
      p.rating,
      p.verified,
      p.status,
      p.created_at,
      p.updated_at,
      p.published_at,
      -- Badge object (for convertAPIPlace compatibility)
      CASE
        WHEN b.id IS NOT NULL THEN
          json_build_object(
            'emoji', b.emoji,
            'title', b.title,
            'description', b.description
          )
        ELSE NULL
      END as badge,
      -- Photos array (format expected by convertAPIPlace)
      COALESCE(
        (
          SELECT json_agg(
            json_build_object(
              'url', pi.image_url,
              'sequence', pi.sequence_order,
              'caption', COALESCE(pi.caption, ''),
              'is_primary', pi.sequence_order = 0
            ) ORDER BY pi.sequence_order
          )
          FROM place_images pi 
          WHERE pi.place_id = p.id
        ),
        -- Fallback: use primary_image if no images in place_images
        CASE
          WHEN p.primary_image IS NOT NULL THEN
            json_build_array(
              json_build_object(
                'url', p.primary_image,
                'sequence', 0,
                'caption', 'Main photo',
                'is_primary', true
              )
            )
          ELSE '[]'::json
        END
      ) as photos,
      -- Attributes object (format expected by convertAPIPlace)
      json_build_object(
        'badge_id', p.badge_id,
        'categories', COALESCE(
          (SELECT json_agg(c.slug)
           FROM place_categories pc
           JOIN categories c ON c.id = pc.category_id
           WHERE pc.place_id = p.id),
          '[]'::json
        ),
        'price', p.price,
        'selected', COALESCE(p.selected, false),
        'distance', p.distance,
        'duration', p.duration,
        'access_info', p.access_info,
        'google_maps_query', p.google_maps_query,
        'booking_url', p.booking_url,
        'info_date', p.info_date,
        'disclaimer', COALESCE(p.disclaimer, true),
        'facilities', COALESCE(
          (SELECT json_agg(pf.facility_name)
           FROM place_facilities pf WHERE pf.place_id = p.id),
          '[]'::json
        ),
        'features', COALESCE(
          (SELECT json_agg(pft.feature_text)
           FROM place_features pft WHERE pft.place_id = p.id),
          '[]'::json
        ),
        'tags', COALESCE(
          (SELECT json_agg(pt.tag_name)
           FROM place_tags pt WHERE pt.place_id = p.id),
          '[]'::json
        )
      ) as attributes
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
