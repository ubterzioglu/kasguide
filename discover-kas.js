// discover-kas.js
// PowerShell: node .\discover-kas.js

import "dotenv/config";
import { Client } from "pg";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const DATABASE_URL = process.env.DATABASE_URL;

if (!API_KEY) throw new Error("Missing GOOGLE_PLACES_API_KEY in .env");
if (!DATABASE_URL) throw new Error("Missing DATABASE_URL in .env");

console.log("API_KEY starts with:", API_KEY.slice(0, 8));

// Kaş merkez (başlangıç)
const CENTER = { latitude: 36.201, longitude: 29.637 };

// Not: 5km deniyoruz; hata verirse 2000'e düşür
const RADIUS_METERS = 5000;

// 500 hedef için "önce en verimli" type seti
const INCLUDED_TYPES = [
  "restaurant",
  "cafe",
  "bar",
  "lodging",
  "tourist_attraction",
  "museum",
  "park",
  "shopping_mall",
  "store",
  "meal_takeaway",
];

const FIELD_MASK = [
  "places.id",
  "places.displayName",
  "places.types",
  "places.location",
  "places.rating",
  "places.userRatingCount",
].join(",");

const INSERT_SQL = `
  insert into public.items (
    google_place_id,
    item_number,
    item_type,
    slug,
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
    $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11, now(), now()
  )
  on conflict (google_place_id)
  do update set
    slug = coalesce(public.items.slug, excluded.slug),
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

function googleMapsUrlFromPlaceId(placeId) {
  return `https://www.google.com/maps/place/?q=place_id:${placeId}`;
}

function makeItemNumber(placeId) {
  const tail = (placeId || "").slice(-8);
  return `GPS-${tail}`;
}

function slugify(text) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // accents
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

async function searchNearbyOneType(type) {
  const url = "https://places.googleapis.com/v1/places:searchNearby";
  const body = {
    includedTypes: [type],
    maxResultCount: 20,
    locationRestriction: {
      circle: {
        center: CENTER,
        radius: RADIUS_METERS,
      },
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask": FIELD_MASK,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Places API error for type=${type}: ${res.status} ${text}`);
  }

  const json = await res.json();
  return json.places ?? [];
}

async function upsertPlacesToItems(client, places) {
  let written = 0;

  for (const p of places) {
    const placeId = p?.id;
    if (!placeId) continue;

    const title = p?.displayName?.text ?? null;
    const lat = p?.location?.latitude ?? null;
    const lng = p?.location?.longitude ?? null;
    const rating = typeof p.rating === "number" ? p.rating : null;
    const reviews = typeof p.userRatingCount === "number" ? p.userRatingCount : null;

    const itemNumber = makeItemNumber(placeId);
    const itemType = "place";

    const base = slugify(title || "place");
    const suffix = (placeId || "").slice(-6).toLowerCase();
    const slug = `${base}-${suffix}`;

    const attributes = {
      google: {
        types: p.types ?? [],
        source: "places_new_searchNearby",
      },
    };

    await client.query(INSERT_SQL, [
      placeId, // $1
      itemNumber, // $2
      itemType, // $3
      slug, // $4
      title, // $5
      lat, // $6
      lng, // $7
      rating, // $8
      reviews, // $9
      googleMapsUrlFromPlaceId(placeId), // $10
      attributes, // $11
    ]);

    written += 1;
  }

  return written;
}

async function main() {
  const client = new Client({ connectionString: DATABASE_URL });
  await client.connect();

  try {
    const unique = new Map(); // placeId -> place

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
