/**
 * API Endpoint: Get FAQ Series (Special FAQ content)
 * GET /api/faqspecial
 * GET /api/faqspecial?slug=kas-faq-001
 */

import sql from '../db/connection.js';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { slug } = req.query;

    // Get single FAQ series by slug
    if (slug) {
      const result = await sql`
        SELECT *
        FROM faq_series
        WHERE slug = ${slug} AND is_published = true
      `;

      const faqSeries = result.rows[0];

      if (!faqSeries) {
        return res.status(404).json({ error: 'FAQ series not found' });
      }

      return res.status(200).json(faqSeries);
    }

    // Get all published FAQ series
    const result = await sql`
      SELECT *
      FROM faq_series
      WHERE is_published = true
      ORDER BY published_at DESC
    `;

    return res.status(200).json({
      faqSeries: result.rows,
      count: result.rows.length
    });

  } catch (error) {
    console.error('FAQ Series API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
