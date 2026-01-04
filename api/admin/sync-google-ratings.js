/**
 * API Endpoint: Sync Google Ratings (Monthly Manual Trigger)
 * POST /api/admin/sync-google-ratings
 *
 * Protected endpoint - requires admin token
 * Syncs Google Maps ratings for all places with google_place_id
 */

import {
  getPlacesForGoogleSync,
  updateGoogleRatings,
  saveRatingHistory
} from '../../lib/db-ratings.js';

// Admin authentication middleware
function checkAdminAuth(req) {
  const adminToken = req.headers['x-admin-token'];
  const validToken = process.env.ADMIN_SYNC_TOKEN;

  if (!validToken) {
    throw new Error('ADMIN_SYNC_TOKEN not configured');
  }

  if (!adminToken || adminToken !== validToken) {
    throw new Error('Unauthorized - Invalid admin token');
  }
}

// Call Google Places API Details endpoint
async function fetchGooglePlaceDetails(placeId) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    throw new Error('GOOGLE_PLACES_API_KEY not configured');
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=rating,user_ratings_total,url&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status !== 'OK') {
    throw new Error(`Google API error: ${data.status} - ${data.error_message || 'Unknown error'}`);
  }

  const result = data.result;

  return {
    rating: result.rating || null,
    reviewsCount: result.user_ratings_total || null,
    mapsUrl: result.url || `https://www.google.com/maps/place/?q=place_id:${placeId}`
  };
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check admin authentication
    checkAdminAuth(req);

    // Get all places that need syncing
    const places = await getPlacesForGoogleSync();

    if (places.length === 0) {
      return res.status(200).json({
        message: 'No places with Google Place ID found',
        total: 0,
        updated: 0,
        failed: 0
      });
    }

    const results = {
      total: places.length,
      updated: 0,
      failed: 0,
      errors: []
    };

    // Process each place
    for (const place of places) {
      try {
        // Fetch from Google API
        const googleData = await fetchGooglePlaceDetails(place.google_place_id);

        // Update database
        await updateGoogleRatings(place.id, {
          rating: googleData.rating,
          reviewsCount: googleData.reviewsCount,
          mapsUrl: googleData.mapsUrl
        });

        // Save to history (optional)
        if (googleData.rating !== null) {
          await saveRatingHistory(
            place.id,
            'google',
            googleData.rating,
            googleData.reviewsCount
          );
        }

        results.updated++;

        // Rate limiting: Wait 100ms between requests to avoid API quota issues
        await new Promise(resolve => setTimeout(resolve, 100));

      } catch (error) {
        console.error(`Failed to sync ratings for place ${place.id} (${place.title}):`, error);

        results.failed++;
        results.errors.push({
          placeId: place.id,
          title: place.title,
          error: error.message
        });

        // Continue with next place (don't stop batch on error)
      }
    }

    return res.status(200).json({
      message: 'Google ratings sync completed',
      ...results,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Sync Google ratings error:', error);

    // Handle auth errors separately
    if (error.message.includes('Unauthorized') || error.message.includes('admin token')) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: error.message
      });
    }

    // Handle config errors
    if (error.message.includes('not configured')) {
      return res.status(500).json({
        error: 'Configuration error',
        message: error.message
      });
    }

    return res.status(500).json({
      error: 'Failed to sync Google ratings',
      message: error.message
    });
  }
}
