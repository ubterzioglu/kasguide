// discover-kas.js
// Kaş için Google Places (New) searchNearby -> public.items upsert
// PowerShell: node .\discover-kas.js



import 'dotenv/config';
import { Client } from 'pg';

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const DATABASE_URL = process.env.DATABASE_URL;

if (!API_KEY) throw new Error('Missing GOOGLE_PLACES_API_KEY in .env.local');
if (!DATABASE_URL) throw new Error('Missing DATABASE_URL in .env.local');

// Kaş merkez (başlangıç)
const CENTER = { latitude: 36.201, longitude: 29.637 };

// Not: 5km deniyoruz; hata verirse 2000’e düşür
const RADIUS_METERS = 5000;

// 500 hedef için “önce en verimli” type seti
// (Google Places types listesi geniş; burada pratik bir başlangıç)
const INCLUDED_TYPES = [
  'restaurant',
  'cafe',
  'bar',
  'lodging',
  'tourist_attraction',
  'museum',
  'park',
  'shopping_mall',
  'store',
  'meal_takeaway'
];

const FIELD_MASK = [
  'places.id',
  'places.displayName',
  'places.types',
  'places.location',
  'places.rating',
  'places.userRatingCount'
].join(',');

function googleMapsUrlFromPlaceId(placeId) {
  return `https://www.google.com/maps/place/?q=place_id:${placeId}`;
}

async function searchNearbyOneType(type) {
  const url = 'https://places.googleapis.com/v1/places:searchNearby';
  const body = {
    includedTypes: [type],
    maxResultCount: 20,
    locationRestriction: {
      circle: {
        center: CENTER,
        radius: RADIUS_METERS
      }
    }
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': API_KEY,
      'X-Goog-FieldMask': FIELD_MASK
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Places API error for type=${type}: ${res.status} ${text}`);
  }

  const json = await res.json();
  return json.places ?? [];
}

async function upsertPlacesToItems(client, places) {
  // Upsert: google_place_id üstünden
  // title + coordinates + google rating + maps url + attributes + last synced güncellenir
  const sql = `
    insert into public.items (
      google_place_id,
      title,
      coordinates_lat,
      coordinates_lng,
      google_rating,
      google_reviews_count,
      google_maps_url,
      attributes,
      ratings_last_synced_at,
      updated_at
    ) values (
      $1,$2,$3,$4,$5,$6,$7,$8, now(), now()
    )
    on conflict (google_place_id)
    do update set
      title = coalesce(excluded.title, public.items.title),
      coordinates_lat = coalesce(excluded.coordinates_lat, public.items.coordinates_lat),
      coordinates_lng = coalesce(excluded.coordinates_lng, public.items.coordinates_lng),
      google_rating = excluded.google_rating,
      google_reviews_count = excluded.google_reviews_count,
      google_maps_url = excluded.google_maps_url,
      attributes = coalesce(excluded.attributes, public.items.attributes),
      ratings_last_synced_at = now(),
      updated_at = now()
  `;

  let written = 0;

  for (const p of places) {
    const placeId = p.id;
    if (!placeId) continue;

    const title = p?.displayName?.text ?? null;
    const lat = p?.location?.latitude ?? null;
    const lng = p?.location?.longitude ?? null;
    const rating = typeof p.rating === 'number' ? p.rating : null;
    const reviews = typeof p.userRatingCount === 'number' ? p.userRatingCount : null;

    // types + ham google objesini attributes altında saklamak opsiyonel ama faydalı
    const attributes = {
      google: {
        types: p.types ?? [],
        source: 'places_new_searchNearby'
      }
    };

    await client.query(sql, [
      placeId,
      title,
      lat,
      lng,
      rating,
      reviews,
      googleMapsUrlFromPlaceId(placeId),
      attributes
    ]);

    written += 1;
  }

  return written;
}

async function main() {
  const client = new Client({ connectionString: DATABASE_URL });
  await client.connect();

  try {
    const unique = new Map(); // placeId -> place obj (dedupe)

    for (const t of INCLUDED_TYPES) {
      const places = await searchNearbyOneType(t);
      for (const p of places) {
        if (p?.id) unique.set(p.id, p);
      }
      console.log(`type=${t} -> fetched=${places.length}, unique_total=${unique.size}`);
    }

    const list = Array.from(unique.values());
    const written = await upsertPlacesToItems(client, list);

    console.log(`DONE. unique_places=${list.length}, upserted_rows=${written}`);
  } finally {
    await client.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
