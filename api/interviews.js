/**
 * API Endpoint: Get Interviews
 * GET /api/interviews
 * GET /api/interviews?id=91
 *
 * Interviews are stored in the unified 'items' table with item_type='interview'
 */

import sql from '../db/connection.js';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;

    // Get single interview by ID
    if (id) {
      const result = await sql`
        SELECT *
        FROM items
        WHERE id = ${id}
          AND item_type = 'interview'
          AND status = 'active'
      `;

      const interview = result[0];

      if (!interview) {
        return res.status(404).json({ error: 'Interview not found' });
      }

      return res.status(200).json(interview);
    }

    // Get all published interviews
    const result = await sql`
      SELECT *
      FROM items
      WHERE item_type = 'interview'
        AND status = 'active'
      ORDER BY published_at DESC
    `;

    return res.status(200).json({
      interviews: result,
      count: result.length
    });

  } catch (error) {
    console.error('Interviews API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
