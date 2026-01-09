-- ============================================================================
-- MIGRATION: Move Hotels from Unified Items Table to Places Table
-- ============================================================================
-- This script migrates hotels from items table (item_type='hotel') 
-- to the places table with 'hotels' category
--
-- Hotels will be stored in places table, just like regular places
-- They will be distinguished by having 'hotels' category
-- ============================================================================

-- ============================================================================
-- STEP 1: MIGRATE HOTELS FROM ITEMS TO PLACES TABLE
-- ============================================================================

INSERT INTO places (
  slug,
  title,
  description,
  long_text,
  badge_id,
  rating,
  price,
  selected,
  location,
  distance,
  coordinates_lat,
  coordinates_lng,
  primary_image,
  duration,
  access_info,
  phone,
  website,
  instagram,
  booking_url,
  google_maps_query,
  verified,
  info_date,
  disclaimer,
  status,
  submitted_by,
  submission_notes,
  created_at,
  updated_at,
  published_at
)
SELECT
  i.slug,
  i.title,
  i.description,
  COALESCE(i.long_text, '') as long_text,
  NULL as badge_id,  -- Hotels don't typically use badges
  i.rating,
  NULL as price,  -- Hotels use price_range in attributes, not price field
  false as selected,
  i.location,
  i.attributes->>'distance_to_sea' as distance,
  i.coordinates_lat,
  i.coordinates_lng,
  -- Extract primary image from photos array
  CASE
    WHEN i.photos IS NOT NULL AND jsonb_array_length(i.photos) > 0 THEN
      CASE
        WHEN jsonb_typeof(i.photos->0) = 'object' THEN
          i.photos->0->>'url'
        WHEN jsonb_typeof(i.photos->0) = 'string' THEN
          i.photos->0 #>> '{}'
        ELSE NULL
      END
    ELSE NULL
  END as primary_image,
  NULL as duration,  -- Hotels don't typically have duration
  NULL as access_info,  -- Hotels use facilities instead
  i.phone,
  i.website,
  i.instagram,
  i.attributes->>'booking_url' as booking_url,
  i.attributes->>'google_maps_query' as google_maps_query,
  i.verified,
  i.attributes->>'info_date' as info_date,
  COALESCE((i.attributes->>'disclaimer')::boolean, true) as disclaimer,
  i.status,
  i.submitted_by,
  i.submission_notes,
  i.created_at,
  i.updated_at,
  i.published_at
FROM items i
WHERE i.item_type = 'hotel'
  AND NOT EXISTS (
    -- Skip if place with same slug already exists
    SELECT 1 FROM places p WHERE p.slug = i.slug
  )
ORDER BY i.id;

-- ============================================================================
-- STEP 2: MIGRATE HOTEL PHOTOS FROM JSONB TO place_images TABLE
-- ============================================================================

INSERT INTO place_images (place_id, image_url, sequence_order, caption)
SELECT
  p.id as place_id,
  CASE
    WHEN jsonb_typeof(photo.value) = 'object' THEN photo.value->>'url'
    WHEN jsonb_typeof(photo.value) = 'string' THEN photo.value #>> '{}'
    ELSE NULL
  END as image_url,
  COALESCE(
    CASE
      WHEN jsonb_typeof(photo.value) = 'object' THEN (photo.value->>'sequence')::integer
      ELSE NULL
    END,
    photo.ordinality - 1
  ) as sequence_order,
  CASE
    WHEN jsonb_typeof(photo.value) = 'object' THEN photo.value->>'caption'
    ELSE NULL
  END as caption
FROM items i
JOIN places p ON p.slug = i.slug
CROSS JOIN LATERAL jsonb_array_elements(i.photos) WITH ORDINALITY AS photo(value, ordinality)
WHERE i.item_type = 'hotel'
  AND i.photos IS NOT NULL
  AND jsonb_array_length(i.photos) > 0
  AND (
    CASE
      WHEN jsonb_typeof(photo.value) = 'object' THEN photo.value->>'url'
      WHEN jsonb_typeof(photo.value) = 'string' THEN photo.value #>> '{}'
      ELSE NULL
    END
  ) IS NOT NULL
  AND NOT EXISTS (
    -- Skip if image already exists for this place
    SELECT 1 FROM place_images pi 
    WHERE pi.place_id = p.id 
      AND pi.image_url = (
        CASE
          WHEN jsonb_typeof(photo.value) = 'object' THEN photo.value->>'url'
          WHEN jsonb_typeof(photo.value) = 'string' THEN photo.value #>> '{}'
          ELSE NULL
        END
      )
  );

-- ============================================================================
-- STEP 3: ASSIGN 'hotels' CATEGORY TO ALL MIGRATED HOTELS
-- ============================================================================

INSERT INTO place_categories (place_id, category_id)
SELECT DISTINCT
  p.id as place_id,
  c.id as category_id
FROM items i
JOIN places p ON p.slug = i.slug
CROSS JOIN categories c
WHERE i.item_type = 'hotel'
  AND c.slug = 'hotels'
  AND NOT EXISTS (
    -- Skip if hotels category already linked to this place
    SELECT 1 FROM place_categories pc 
    WHERE pc.place_id = p.id 
      AND pc.category_id = c.id
  );

-- ============================================================================
-- STEP 4: MIGRATE HOTEL FACILITIES FROM JSONB TO place_facilities TABLE
-- ============================================================================

INSERT INTO place_facilities (place_id, facility_name)
SELECT
  p.id as place_id,
  facility.value as facility_name
FROM items i
JOIN places p ON p.slug = i.slug
CROSS JOIN LATERAL jsonb_array_elements_text(
  CASE
    WHEN jsonb_typeof(i.attributes->'facilities') = 'array' 
    THEN i.attributes->'facilities'
    ELSE '[]'::jsonb
  END
) AS facility(value)
WHERE i.item_type = 'hotel'
  AND i.attributes->'facilities' IS NOT NULL
  AND jsonb_array_length(i.attributes->'facilities') > 0
  AND facility.value IS NOT NULL
  AND facility.value != ''
  AND NOT EXISTS (
    -- Skip if facility already exists for this place
    SELECT 1 FROM place_facilities pf 
    WHERE pf.place_id = p.id 
      AND pf.facility_name = facility.value
  );

-- ============================================================================
-- STEP 5: MIGRATE HOTEL TAGS FROM JSONB TO place_tags TABLE
-- ============================================================================

INSERT INTO place_tags (place_id, tag_name)
SELECT
  p.id as place_id,
  tag.value as tag_name
FROM items i
JOIN places p ON p.slug = i.slug
CROSS JOIN LATERAL jsonb_array_elements_text(
  CASE
    WHEN jsonb_typeof(i.attributes->'tags') = 'array' 
    THEN i.attributes->'tags'
    ELSE '[]'::jsonb
  END
) AS tag(value)
WHERE i.item_type = 'hotel'
  AND i.attributes->'tags' IS NOT NULL
  AND jsonb_array_length(i.attributes->'tags') > 0
  AND tag.value IS NOT NULL
  AND tag.value != ''
  AND NOT EXISTS (
    -- Skip if tag already exists for this place
    SELECT 1 FROM place_tags pt 
    WHERE pt.place_id = p.id 
      AND pt.tag_name = tag.value
  );
