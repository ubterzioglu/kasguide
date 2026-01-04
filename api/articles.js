/**
 * API Endpoint: Get Articles
 * GET /api/articles
 * GET /api/articles?id=90
 *
 * Articles are stored in the unified 'items' table with item_type='article'
 */

import { getAllItems, getItemById } from '../lib/db-items.js';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;

    // Get single article by ID
    if (id) {
      const article = await getItemById(parseInt(id));

      if (!article || article.item_type !== 'article') {
        return res.status(404).json({ error: 'Article not found' });
      }

      return res.status(200).json(article);
    }

    // Get all published articles
    const articles = await getAllItems({
      item_type: 'article',
      status: 'active'
    });

    console.log(`📚 Articles API: Found ${articles.length} articles`);

    return res.status(200).json({
      articles,
      count: articles.length
    });

  } catch (error) {
    console.error('Articles API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
