/**
 * Database operations for Unified Items
 * Handles: places, pets, hotels, artists
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
 * Get all items with optional filters
 */
export async function getAllItems(options = {}) {
  const {
    item_type,
    limit,
    offset,
    status = 'approved',
    category,
    search
  } = options;

  let queryText = `
    SELECT
      i.*,
      CASE
        WHEN i.item_type = 'place' AND i.attributes->>'badge_id' IS NOT NULL THEN
          (SELECT json_build_object(
            'emoji', b.emoji,
            'title', b.title,
            'description', b.description
          ) FROM badges b WHERE b.id = (i.attributes->>'badge_id')::integer)
        ELSE NULL
      END as badge
    FROM items i
    WHERE i.status = $1
  `;

  const params = [status];
  let paramCount = 1;

  // Filter by item type
  if (item_type) {
    paramCount++;
    queryText += ` AND i.item_type = $${paramCount}`;
    params.push(item_type);
  }

  // Filter by category (for places)
  if (category && item_type === 'place') {
    paramCount++;
    queryText += `
      AND i.attributes->'categories' ? (
        SELECT id::text FROM categories WHERE slug = $${paramCount}
      )
    `;
    params.push(category);
  }

  // Search filter
  if (search) {
    paramCount++;
    const searchTerm = `%${search}%`;
    queryText += `
      AND (
        i.title ILIKE $${paramCount}
        OR i.description ILIKE $${paramCount}
        OR i.long_text ILIKE $${paramCount}
      )
    `;
    params.push(searchTerm);
  }

  queryText += ' ORDER BY i.published_at DESC NULLS LAST, i.created_at DESC';

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
 * Get item by slug
 */
export async function getItemBySlug(slug) {
  const result = await sql`
    SELECT
      i.*,
      CASE
        WHEN i.item_type = 'place' AND i.attributes->>'badge_id' IS NOT NULL THEN
          (SELECT json_build_object(
            'emoji', b.emoji,
            'title', b.title,
            'description', b.description
          ) FROM badges b WHERE b.id = (i.attributes->>'badge_id')::integer)
        ELSE NULL
      END as badge
    FROM items i
    WHERE i.slug = ${slug} AND i.status = 'approved'
  `;

  return result.rows[0] || null;
}

/**
 * Get item by item number
 */
export async function getItemByNumber(itemNumber) {
  const result = await sql`
    SELECT
      i.*,
      CASE
        WHEN i.item_type = 'place' AND i.attributes->>'badge_id' IS NOT NULL THEN
          (SELECT json_build_object(
            'emoji', b.emoji,
            'title', b.title,
            'description', b.description
          ) FROM badges b WHERE b.id = (i.attributes->>'badge_id')::integer)
        ELSE NULL
      END as badge
    FROM items i
    WHERE i.item_number = ${itemNumber}
  `;

  return result.rows[0] || null;
}

/**
 * Get item by ID
 */
export async function getItemById(id) {
  const result = await sql`
    SELECT
      i.*,
      CASE
        WHEN i.item_type = 'place' AND i.attributes->>'badge_id' IS NOT NULL THEN
          (SELECT json_build_object(
            'emoji', b.emoji,
            'title', b.title,
            'description', b.description
          ) FROM badges b WHERE b.id = (i.attributes->>'badge_id')::integer)
        ELSE NULL
      END as badge
    FROM items i
    WHERE i.id = ${id}
  `;

  return result.rows[0] || null;
}

/**
 * Create a new item submission
 */
export async function createItem(itemType, data) {
  try {
    // Generate item number
    const itemNumberResult = await sql`SELECT get_next_item_number(${itemType})`;
    const itemNumber = itemNumberResult.rows[0].get_next_item_number;

    // Generate slug for types that need it (not pets)
    let slug = null;
    if (itemType !== 'pet' && data.title) {
      const baseSlug = data.slug || generateSlug(data.title);

      // Check if slug already exists
      let slugExists = true;
      let counter = 1;
      slug = baseSlug;

      while (slugExists) {
        const existingItem = await sql`
          SELECT id FROM items WHERE slug = ${slug} LIMIT 1
        `;

        if (existingItem.rows.length === 0) {
          slugExists = false;
        } else {
          counter++;
          slug = `${baseSlug}-${counter}`;
        }
      }

      console.log('📝 Generated unique slug:', slug, counter > 1 ? `(attempt ${counter})` : '');
    }

    // Build photos JSONB
    let photos = [];
    if (data.photos && Array.isArray(data.photos)) {
      photos = data.photos.map((url, index) => ({
        url,
        sequence: index,
        is_primary: index === 0
      }));
    }

    // Build attributes based on item type
    let attributes = {};

    switch (itemType) {
      case 'place':
        attributes = {
          badge_id: data.badgeId || null,
          categories: data.categories || [],
          price: data.price || null,
          selected: data.selected || false,
          distance: data.distance || null,
          duration: data.duration || null,
          access_info: data.access || null,
          google_maps_query: data.googleMapsQuery || null,
          booking_url: data.booking || null,
          info_date: data.infoDate || null,
          disclaimer: data.disclaimer !== false,
          facilities: data.facilities || [],
          features: data.features || [],
          tags: data.tags || []
        };
        break;

      case 'pet':
        attributes = {
          listing_type: data.listingType,
          pet_type: data.petType,
          age: data.age || null,
          breed: data.breed || null,
          short_note: data.shortNote,
          extra_notes: data.extraNotes || null
        };
        break;

      case 'hotel':
        attributes = {
          hotel_type: data.hotelType,
          star_rating: data.starRating || null,
          room_count: data.roomCount || null,
          capacity: data.capacity || null,
          price_range: data.priceRange || null,
          checkin_time: data.checkinTime || null,
          checkout_time: data.checkoutTime || null,
          distance_to_sea: data.distanceToSea || null,
          booking_url: data.booking || null,
          google_maps_query: data.googleMapsQuery || null,
          info_date: data.infoDate || null,
          disclaimer: data.disclaimer !== false,
          review_count: data.reviewCount || 0,
          facilities: data.facilities || [],
          tags: data.tags || []
        };
        break;

      case 'artist':
        attributes = {
          categories: data.categories || [],
          youtube: data.youtube || null,
          music_link: data.musicLink || null,
          banner_photo: data.bannerPhoto || null,
          viewport: data.viewport || null,
          short_text: data.shortText || null
        };
        break;
    }

    // Insert item
    const result = await sql`
    INSERT INTO items (
      item_number,
      item_type,
      slug,
      title,
      description,
      long_text,
      phone,
      email,
      website,
      instagram,
      location,
      coordinates_lat,
      coordinates_lng,
      rating,
      verified,
      status,
      submitted_by,
      submission_notes,
      photos,
      attributes
    ) VALUES (
      ${itemNumber},
      ${itemType},
      ${slug},
      ${data.title},
      ${data.description || null},
      ${data.longText || null},
      ${data.phone || null},
      ${data.email || null},
      ${data.website || null},
      ${data.instagram || null},
      ${data.location || null},
      ${data.coordinates?.lat || null},
      ${data.coordinates?.lng || null},
      ${data.rating || null},
      ${data.verified || false},
      'pending',
      ${data.submittedBy || null},
      ${data.extraNotes || null},
      ${JSON.stringify(photos)},
      ${JSON.stringify(attributes)}
    ) RETURNING id, item_number, slug
    `;

    return result.rows[0];
  } catch (error) {
    console.error('❌ Error creating item:', error.message);
    if (error.detail) {
      console.error('Details:', error.detail);
    }
    throw error;
  }
}

/**
 * Update item status (for admin approval)
 */
export async function updateItemStatus(id, status, adminNotes = null) {
  const publishedAt = status === 'approved' ? new Date().toISOString() : null;
  const resolvedAt = status === 'resolved' ? new Date().toISOString() : null;

  await sql`
    UPDATE items
    SET
      status = ${status},
      published_at = ${publishedAt},
      resolved_at = ${resolvedAt},
      submission_notes = COALESCE(${adminNotes}, submission_notes),
      updated_at = NOW()
    WHERE id = ${id}
  `;

  return true;
}

/**
 * Update item data
 */
export async function updateItem(id, data) {
  const updates = [];
  const values = [];
  let paramCount = 0;

  // Helper to add update
  const addUpdate = (field, value) => {
    paramCount++;
    updates.push(`${field} = $${paramCount}`);
    values.push(value);
  };

  // Update basic fields
  if (data.title !== undefined) addUpdate('title', data.title);
  if (data.description !== undefined) addUpdate('description', data.description);
  if (data.longText !== undefined) addUpdate('long_text', data.longText);
  if (data.phone !== undefined) addUpdate('phone', data.phone);
  if (data.email !== undefined) addUpdate('email', data.email);
  if (data.website !== undefined) addUpdate('website', data.website);
  if (data.instagram !== undefined) addUpdate('instagram', data.instagram);
  if (data.location !== undefined) addUpdate('location', data.location);
  if (data.rating !== undefined) addUpdate('rating', data.rating);
  if (data.verified !== undefined) addUpdate('verified', data.verified);
  if (data.status !== undefined) addUpdate('status', data.status);

  // Update photos
  if (data.photos !== undefined) {
    addUpdate('photos', JSON.stringify(data.photos));
  }

  // Update attributes
  if (data.attributes !== undefined) {
    addUpdate('attributes', JSON.stringify(data.attributes));
  }

  if (updates.length === 0) {
    return false;
  }

  // Always update updated_at
  addUpdate('updated_at', new Date().toISOString());

  paramCount++;
  const queryText = `
    UPDATE items
    SET ${updates.join(', ')}
    WHERE id = $${paramCount}
    RETURNING *
  `;
  values.push(id);

  const result = await sql.query(queryText, values);
  return result.rows[0];
}

/**
 * Get pending items (for admin review)
 */
export async function getPendingItems(itemType = null) {
  let queryText = `
    SELECT i.*
    FROM items i
    WHERE i.status = 'pending'
  `;

  const params = [];

  if (itemType) {
    queryText += ` AND i.item_type = $1`;
    params.push(itemType);
  }

  queryText += ' ORDER BY i.created_at DESC';

  const result = await sql.query(queryText, params);
  return result.rows;
}

/**
 * Delete an item
 */
export async function deleteItem(id) {
  await sql`DELETE FROM items WHERE id = ${id}`;
  return true;
}

/**
 * Search items
 */
export async function searchItems(query, itemType = null) {
  const searchTerm = `%${query}%`;

  let queryText = `
    SELECT
      i.*,
      CASE
        WHEN i.item_type = 'place' AND i.attributes->>'badge_id' IS NOT NULL THEN
          (SELECT json_build_object(
            'emoji', b.emoji,
            'title', b.title
          ) FROM badges b WHERE b.id = (i.attributes->>'badge_id')::integer)
        ELSE NULL
      END as badge
    FROM items i
    WHERE i.status = 'approved'
      AND (
        i.title ILIKE $1
        OR i.description ILIKE $1
        OR i.long_text ILIKE $1
      )
  `;

  const params = [searchTerm];

  if (itemType) {
    queryText += ` AND i.item_type = $2`;
    params.push(itemType);
  }

  queryText += `
    ORDER BY i.rating DESC NULLS LAST
    LIMIT 20
  `;

  const result = await sql.query(queryText, params);
  return result.rows;
}

/**
 * Get item statistics
 */
export async function getItemStats() {
  const result = await sql`
    SELECT
      item_type,
      COUNT(*) as total,
      COUNT(*) FILTER (WHERE status = 'pending') as pending,
      COUNT(*) FILTER (WHERE status = 'approved') as approved,
      COUNT(*) FILTER (WHERE status = 'rejected') as rejected
    FROM items
    GROUP BY item_type
    ORDER BY item_type
  `;

  return result.rows;
}
