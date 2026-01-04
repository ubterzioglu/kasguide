/**
 * Database operations for Hotels
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
 * Get all approved hotels
 */
export async function getAllHotels(options = {}) {
  const { limit, offset, hotelType, status = 'approved' } = options;

  let queryText = `
    SELECT
      h.*,
      (SELECT json_agg(hi.image_url ORDER BY hi.sequence_order)
       FROM hotel_images hi WHERE hi.hotel_id = h.id) as images,
      (SELECT json_agg(hf.facility_name)
       FROM hotel_facilities hf WHERE hf.hotel_id = h.id) as facilities,
      (SELECT json_agg(ht.tag_name)
       FROM hotel_tags ht WHERE ht.hotel_id = h.id) as tags
    FROM hotels h
    WHERE h.status = $1
  `;

  const params = [status];
  let paramCount = 1;

  if (hotelType) {
    paramCount++;
    queryText += ` AND h.hotel_type = $${paramCount}`;
    params.push(hotelType);
  }

  queryText += ' ORDER BY h.published_at DESC';

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
 * Get hotel by slug
 */
export async function getHotelBySlug(slug) {
  const result = await sql`
    SELECT
      h.*,
      (SELECT json_agg(hi.image_url ORDER BY hi.sequence_order)
       FROM hotel_images hi WHERE hi.hotel_id = h.id) as images,
      (SELECT json_agg(hf.facility_name)
       FROM hotel_facilities hf WHERE hf.hotel_id = h.id) as facilities,
      (SELECT json_agg(ht.tag_name)
       FROM hotel_tags ht WHERE ht.hotel_id = h.id) as tags
    FROM hotels h
    WHERE h.slug = ${slug} AND h.status = 'approved'
  `;

  return result.rows[0] || null;
}

/**
 * Create a new hotel submission
 */
export async function createHotel(data) {
  const slug = data.slug || generateSlug(data.title);

  // Insert main hotel record
  const result = await sql`
    INSERT INTO hotels (
      slug, title, hotel_type, star_rating, room_count, capacity,
      location, distance_to_sea, coordinates_lat, coordinates_lng,
      description, long_text,
      price_range, checkin_time, checkout_time,
      phone, email, website, instagram, booking_url, google_maps_query,
      status, submission_notes, submitted_by
    ) VALUES (
      ${slug},
      ${data.title},
      ${data.hotelType},
      ${data.starRating || null},
      ${data.roomCount ? parseInt(data.roomCount) : null},
      ${data.capacity ? parseInt(data.capacity) : null},
      ${data.location},
      ${data.distanceToSea || null},
      ${data.coordinates?.lat || null},
      ${data.coordinates?.lng || null},
      ${data.description},
      ${data.longText},
      ${data.priceRange || null},
      ${data.checkinTime || null},
      ${data.checkoutTime || null},
      ${data.phone},
      ${data.email},
      ${data.website || null},
      ${data.instagram || null},
      ${data.booking || null},
      ${data.googleMapsQuery || null},
      'pending',
      ${data.extraNotes || null},
      ${data.submittedBy || null}
    ) RETURNING id, slug
  `;

  const hotelId = result.rows[0].id;

  // Insert images if provided
  if (data.photos && Array.isArray(data.photos)) {
    for (let i = 0; i < data.photos.length; i++) {
      await sql`
        INSERT INTO hotel_images (hotel_id, image_url, sequence_order)
        VALUES (${hotelId}, ${data.photos[i]}, ${i})
      `;
    }
  }

  // Insert facilities if provided
  if (data.facilities && Array.isArray(data.facilities)) {
    for (const facility of data.facilities) {
      await sql`
        INSERT INTO hotel_facilities (hotel_id, facility_name)
        VALUES (${hotelId}, ${facility})
      `;
    }
  }

  return result.rows[0];
}

/**
 * Update hotel status (for admin approval)
 */
export async function updateHotelStatus(id, status, adminNotes = null) {
  const publishedAt = status === 'approved' ? new Date().toISOString() : null;

  await sql`
    UPDATE hotels
    SET
      status = ${status},
      published_at = ${publishedAt},
      submission_notes = COALESCE(${adminNotes}, submission_notes)
    WHERE id = ${id}
  `;

  return true;
}

/**
 * Get pending hotels (for admin review)
 */
export async function getPendingHotels() {
  const result = await sql`
    SELECT
      h.*,
      (SELECT json_agg(hi.image_url ORDER BY hi.sequence_order)
       FROM hotel_images hi WHERE hi.hotel_id = h.id) as images,
      (SELECT json_agg(hf.facility_name)
       FROM hotel_facilities hf WHERE hf.hotel_id = h.id) as facilities
    FROM hotels h
    WHERE h.status = 'pending'
    ORDER BY h.created_at DESC
  `;

  return result.rows;
}

/**
 * Delete a hotel
 */
export async function deleteHotel(id) {
  await sql`DELETE FROM hotels WHERE id = ${id}`;
  return true;
}

/**
 * Search hotels
 */
export async function searchHotels(query) {
  const searchTerm = `%${query}%`;

  const result = await sql`
    SELECT
      h.*,
      (SELECT json_agg(hi.image_url ORDER BY hi.sequence_order)
       FROM hotel_images hi WHERE hi.hotel_id = h.id) as images
    FROM hotels h
    WHERE h.status = 'approved'
      AND (
        h.title ILIKE ${searchTerm}
        OR h.description ILIKE ${searchTerm}
        OR h.long_text ILIKE ${searchTerm}
      )
    ORDER BY h.rating DESC NULLS LAST
    LIMIT 20
  `;

  return result.rows;
}
