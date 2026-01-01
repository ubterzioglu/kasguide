/**
 * API Endpoint: Admin Analytics
 * GET /api/admin/analytics
 *
 * Returns analytics data for admin panel
 */

import {
  getAnalyticsSummary,
  getMostViewedPlaces,
  getMostViewedHotels,
  getMostViewedPets,
  getDailyViews
} from '../../lib/db-analytics.js';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, days = 30, limit = 20 } = req.query;
    const daysInt = parseInt(days);
    const limitInt = parseInt(limit);

    // Get specific data type
    if (type === 'summary') {
      const summary = await getAnalyticsSummary(daysInt);
      return res.status(200).json({ summary });
    }

    if (type === 'places') {
      const places = await getMostViewedPlaces(limitInt, daysInt);
      return res.status(200).json({ places });
    }

    if (type === 'hotels') {
      const hotels = await getMostViewedHotels(limitInt, daysInt);
      return res.status(200).json({ hotels });
    }

    if (type === 'pets') {
      const pets = await getMostViewedPets(limitInt, daysInt);
      return res.status(200).json({ pets });
    }

    if (type === 'daily') {
      const daily = await getDailyViews(daysInt);
      return res.status(200).json({ daily });
    }

    // Get all analytics data
    const [summary, places, hotels, pets, daily] = await Promise.all([
      getAnalyticsSummary(daysInt),
      getMostViewedPlaces(limitInt, daysInt),
      getMostViewedHotels(limitInt, daysInt),
      getMostViewedPets(limitInt, daysInt),
      getDailyViews(daysInt)
    ]);

    return res.status(200).json({
      summary,
      topPlaces: places,
      topHotels: hotels,
      topPets: pets,
      daily,
      period: {
        days: daysInt,
        from: new Date(Date.now() - daysInt * 24 * 60 * 60 * 1000).toISOString(),
        to: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Admin analytics API error:', error);
    return res.status(500).json({
      error: 'Failed to fetch analytics',
      message: error.message
    });
  }
}
