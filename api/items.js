/**
 * Unified API Endpoint: Get Items
 * Handles: places, pets, hotels, artists
 *
 * GET /api/items?type=place                 - Get all places
 * GET /api/items?type=pet                   - Get all pets
 * GET /api/items?type=hotel                 - Get all hotels
 * GET /api/items?type=artist                - Get all artists
 * GET /api/items?slug=frida-pub             - Get item by slug
 * GET /api/items?number=PLACE-001           - Get item by number
 * GET /api/items?type=place&category=bar    - Get places by category
 * GET /api/items?search=beach               - Search all items
 * GET /api/items?type=place&search=beach    - Search within type
 */

import {
  getAllItems,
  getItemBySlug,
  getItemByNumber,
  searchItems
} from '../lib/db-items.js';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      type,
      slug,
      number,
      category,
      search,
      limit,
      offset,
      status
    } = req.query;

    // Get single item by slug
    if (slug) {
      const item = await getItemBySlug(slug);

      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }

      return res.status(200).json(item);
    }

    // Get single item by number
    if (number) {
      const item = await getItemByNumber(number);

      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }

      return res.status(200).json(item);
    }

    // Search items
    if (search) {
      const items = await searchItems(search, type || null);
      return res.status(200).json({ items, count: items.length });
    }

    // Get all items with optional filters
    const items = await getAllItems({
      item_type: type || null,
      category: category || null,
      limit: limit ? parseInt(limit) : undefined,
      offset: offset ? parseInt(offset) : undefined,
      status: status || 'approved'
    });

    return res.status(200).json({
      items,
      count: items.length,
      type: type || 'all'
    });

  } catch (error) {
    console.error('Items API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
