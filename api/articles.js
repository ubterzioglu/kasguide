/**
 * API Endpoint: Get Articles
 * GET /api/articles
 * GET /api/articles?slug=kas-ilk-kez-gelenler
 */

import sql from '../db/connection.js';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { slug } = req.query;

    // Get single article by slug
    if (slug) {
      const result = await sql`
        SELECT
          a.*,
          (SELECT json_agg(at.tag_name)
           FROM article_tags at WHERE at.article_id = a.id) as tags
        FROM articles a
        WHERE a.slug = ${slug} AND a.status = 'published'
      `;

      const article = result.rows[0];

      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }

      return res.status(200).json(article);
    }

    // Get all published articles
    const result = await sql`
      SELECT
        a.*,
        (SELECT json_agg(at.tag_name)
         FROM article_tags at WHERE at.article_id = a.id) as tags
      FROM articles a
      WHERE a.status = 'published'
      ORDER BY a.published_at DESC
    `;

    return res.status(200).json({
      articles: result.rows,
      count: result.rows.length
    });

  } catch (error) {
    console.error('Articles API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
