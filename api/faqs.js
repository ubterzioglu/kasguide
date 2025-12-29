/**
 * API Endpoint: Get FAQs (Regular Q&A)
 * GET /api/faqs
 * GET /api/faqs?category=genel
 */

import sql from '../db/connection.js';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { category } = req.query;

    let queryText = `
      SELECT *
      FROM faqs
      WHERE is_published = true
    `;

    const params = [];
    let paramCount = 0;

    if (category) {
      paramCount++;
      queryText += ` AND category = $${paramCount}`;
      params.push(category);
    }

    queryText += ' ORDER BY sequence_order, id';

    const result = await sql.query(queryText, params);

    return res.status(200).json({
      faqs: result.rows,
      count: result.rows.length
    });

  } catch (error) {
    console.error('FAQs API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
