/**
 * API Endpoint: Get Places
 * GET /api/places
 * GET /api/places?category=bar
 * GET /api/places?slug=frida-pub
 */

import { getAllPlaces, getPlaceBySlug, searchPlaces } from '../lib/db-places.js';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { slug, category, search, limit, offset } = req.query;

    // Get single place by slug
    if (slug) {
      const place = await getPlaceBySlug(slug);

      if (!place) {
        return res.status(404).json({ error: 'Place not found' });
      }

      return res.status(200).json(place);
    }

    // Search places
    if (search) {
      const places = await searchPlaces(search);
      return res.status(200).json({ places, count: places.length });
    }

    // Get all places with optional filters
    const places = await getAllPlaces({
      category,
      limit: limit ? parseInt(limit) : undefined,
      offset: offset ? parseInt(offset) : undefined
    });

    return res.status(200).json({
      places,
      count: places.length
    });

  } catch (error) {
    console.error('Places API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
