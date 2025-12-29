/**
 * API Endpoint: Get Hotels
 * GET /api/hotels
 * GET /api/hotels?slug=mavi-deniz-butik-otel
 * GET /api/hotels?type=butik
 */

import sql from '../db/connection.js';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { slug, type, limit, offset } = req.query;

    // Get single hotel by slug
    if (slug) {
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

      const hotel = result.rows[0];

      if (!hotel) {
        return res.status(404).json({ error: 'Hotel not found' });
      }

      return res.status(200).json(hotel);
    }

    // Build query for all hotels
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

    const params = ['approved'];
    let paramCount = 1;

    if (type) {
      paramCount++;
      queryText += ` AND h.hotel_type = $${paramCount}`;
      params.push(type);
    }

    queryText += ' ORDER BY h.published_at DESC';

    if (limit) {
      paramCount++;
      queryText += ` LIMIT $${paramCount}`;
      params.push(parseInt(limit));
    }

    if (offset) {
      paramCount++;
      queryText += ` OFFSET $${paramCount}`;
      params.push(parseInt(offset));
    }

    const result = await sql.query(queryText, params);

    return res.status(200).json({
      hotels: result.rows,
      count: result.rows.length
    });

  } catch (error) {
    console.error('Hotels API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
