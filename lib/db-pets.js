/**
 * Database operations for Pets
 */

import sql from '../db/connection.js';

/**
 * Get all active pets
 */
export async function getAllPets(options = {}) {
  const { limit, offset, listingType, status = 'pending' } = options;

  let queryText = `
    SELECT
      p.*,
      (SELECT json_agg(pp.photo_url ORDER BY pp.sequence_order)
       FROM pet_photos pp WHERE pp.pet_id = p.id) as photos
    FROM pets p
    WHERE p.status = $1
  `;

  const params = [status];
  let paramCount = 1;

  if (listingType) {
    paramCount++;
    queryText += ` AND p.listing_type = $${paramCount}`;
    params.push(listingType);
  }

  queryText += ' ORDER BY p.created_at DESC';

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
 * Get pet by ID
 */
export async function getPetById(id) {
  const result = await sql`
    SELECT
      p.*,
      (SELECT json_agg(pp.photo_url ORDER BY pp.sequence_order)
       FROM pet_photos pp WHERE pp.pet_id = p.id) as photos
    FROM pets p
    WHERE p.id = ${id}
  `;

  return result.rows[0] || null;
}

/**
 * Create a new pet submission
 */
export async function createPet(data) {
  // Insert main pet record
  const result = await sql`
    INSERT INTO pets (
      listing_type, pet_name, pet_type,
      age, breed, short_note, extra_notes,
      phone, status
    ) VALUES (
      ${data.listingType},
      ${data.petName || null},
      ${data.petType},
      ${data.age || null},
      ${data.breed || null},
      ${data.shortNote},
      ${data.notes || null},
      ${data.phone},
      'pending'
    ) RETURNING id
  `;

  const petId = result.rows[0].id;

  // Insert photos if provided
  if (data.photos && Array.isArray(data.photos)) {
    for (let i = 0; i < data.photos.length; i++) {
      await sql`
        INSERT INTO pet_photos (pet_id, photo_url, sequence_order)
        VALUES (${petId}, ${data.photos[i]}, ${i})
      `;
    }
  }

  return result.rows[0];
}

/**
 * Update pet status (for admin approval)
 */
export async function updatePetStatus(id, status) {
  await sql`
    UPDATE pets
    SET status = ${status}
    WHERE id = ${id}
  `;

  return true;
}

/**
 * Get pending pets (for admin review)
 */
export async function getPendingPets() {
  const result = await sql`
    SELECT
      p.*,
      (SELECT json_agg(pp.photo_url ORDER BY pp.sequence_order)
       FROM pet_photos pp WHERE pp.pet_id = p.id) as photos
    FROM pets p
    WHERE p.status = 'pending'
    ORDER BY p.created_at DESC
  `;

  return result.rows;
}

/**
 * Delete a pet
 */
export async function deletePet(id) {
  await sql`DELETE FROM pets WHERE id = ${id}`;
  return true;
}

/**
 * Search pets
 */
export async function searchPets(query) {
  const searchTerm = `%${query}%`;

  const result = await sql`
    SELECT
      p.*,
      (SELECT json_agg(pp.photo_url ORDER BY pp.sequence_order)
       FROM pet_photos pp WHERE pp.pet_id = p.id) as photos
    FROM pets p
    WHERE p.status = 'pending'
      AND (
        p.pet_name ILIKE ${searchTerm}
        OR p.short_note ILIKE ${searchTerm}
        OR p.breed ILIKE ${searchTerm}
      )
    ORDER BY p.created_at DESC
    LIMIT 20
  `;

  return result.rows;
}
