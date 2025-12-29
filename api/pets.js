/**
 * API Endpoint: Get Pets
 * GET /api/pets
 * GET /api/pets?type=kedi
 * GET /api/pets?status=active
 */

import sql from '../db/connection.js';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, status = 'active' } = req.query;

    // Build query
    let queryText = `
      SELECT
        p.*,
        (SELECT json_agg(pp.photo_url)
         FROM pet_photos pp WHERE pp.pet_id = p.id) as photos
      FROM pets p
      WHERE p.status = $1
    `;

    const params = [status];
    let paramCount = 1;

    if (type) {
      paramCount++;
      queryText += ` AND p.pet_type = $${paramCount}`;
      params.push(type);
    }

    queryText += ' ORDER BY p.created_at DESC';

    const result = await sql.query(queryText, params);

    return res.status(200).json({
      pets: result.rows,
      count: result.rows.length
    });

  } catch (error) {
    console.error('Pets API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
