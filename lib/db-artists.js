/**
 * Database operations for Artists
 */

import sql from '../db/connection.js';

/**
 * Generate slug from artist name
 */
function generateSlug(name) {
  return name
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
 * Get all approved artists
 */
export async function getAllArtists(options = {}) {
  const { limit, offset, status = 'approved' } = options;

  let queryText = `
    SELECT
      a.*,
      (SELECT json_agg(ac.category_name)
       FROM artist_categories ac WHERE ac.artist_id = a.id) as categories
    FROM artists a
    WHERE a.status = $1
  `;

  const params = [status];
  let paramCount = 1;

  queryText += ' ORDER BY a.published_at DESC';

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
 * Get artist by slug
 */
export async function getArtistBySlug(slug) {
  const result = await sql`
    SELECT
      a.*,
      (SELECT json_agg(ac.category_name)
       FROM artist_categories ac WHERE ac.artist_id = a.id) as categories
    FROM artists a
    WHERE a.slug = ${slug} AND a.status = 'approved'
  `;

  return result.rows[0] || null;
}

/**
 * Create a new artist submission
 */
export async function createArtist(data) {
  const slug = data.slug || generateSlug(data.artistName);

  // Insert main artist record
  const result = await sql`
    INSERT INTO artists (
      slug, artist_name, short_text, long_text,
      profile_photo, banner_photo,
      phone, email, instagram, youtube, music_link, website,
      viewport, submission_notes, status
    ) VALUES (
      ${slug},
      ${data.artistName},
      ${data.shortText || null},
      ${data.longText},
      ${data.profilePhoto || null},
      ${data.bannerPhoto || null},
      ${data.phone || null},
      ${data.email || null},
      ${data.instagram || null},
      ${data.youtube || null},
      ${data.musicLink || null},
      ${data.website || null},
      ${data.viewport || null},
      ${data.notes || null},
      'pending'
    ) RETURNING id, slug
  `;

  const artistId = result.rows[0].id;

  // Insert categories if provided
  if (data.categories && Array.isArray(data.categories)) {
    for (const category of data.categories) {
      await sql`
        INSERT INTO artist_categories (artist_id, category_name)
        VALUES (${artistId}, ${category})
      `;
    }
  }

  return result.rows[0];
}

/**
 * Update artist status (for admin approval)
 */
export async function updateArtistStatus(id, status, adminNotes = null) {
  const publishedAt = status === 'approved' ? new Date().toISOString() : null;

  await sql`
    UPDATE artists
    SET
      status = ${status},
      published_at = ${publishedAt},
      submission_notes = COALESCE(${adminNotes}, submission_notes)
    WHERE id = ${id}
  `;

  return true;
}

/**
 * Get pending artists (for admin review)
 */
export async function getPendingArtists() {
  const result = await sql`
    SELECT
      a.*,
      (SELECT json_agg(ac.category_name)
       FROM artist_categories ac WHERE ac.artist_id = a.id) as categories
    FROM artists a
    WHERE a.status = 'pending'
    ORDER BY a.created_at DESC
  `;

  return result.rows;
}

/**
 * Delete an artist
 */
export async function deleteArtist(id) {
  await sql`DELETE FROM artists WHERE id = ${id}`;
  return true;
}

/**
 * Search artists
 */
export async function searchArtists(query) {
  const searchTerm = `%${query}%`;

  const result = await sql`
    SELECT
      a.*,
      (SELECT json_agg(ac.category_name)
       FROM artist_categories ac WHERE ac.artist_id = a.id) as categories
    FROM artists a
    WHERE a.status = 'approved'
      AND (
        a.artist_name ILIKE ${searchTerm}
        OR a.short_text ILIKE ${searchTerm}
        OR a.long_text ILIKE ${searchTerm}
      )
    ORDER BY a.artist_name
    LIMIT 20
  `;

  return result.rows;
}
