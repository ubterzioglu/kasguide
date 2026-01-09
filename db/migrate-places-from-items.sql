-- ============================================================================
-- MIGRATION: Move Places from Unified Items Table to Dedicated Places Table
-- ============================================================================
-- This script migrates places from items table (item_type='place') 
-- to the dedicated places table, preserving all data including:
-- - Basic information (title, description, location, etc.)
-- - Photos (from JSONB to place_images table)
-- - Categories (from JSONB to place_categories table)
-- - Attributes (badge, price, facilities, features, tags, etc.)
--
-- Run this AFTER ensuring the places table structure is correct
-- ============================================================================

-- ============================================================================
-- STEP 1: MIGRATE PLACES FROM ITEMS TO PLACES TABLE
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
  CASE
    WHEN i.attributes->>'badge_id' IS NOT NULL 
    THEN (i.attributes->>'badge_id')::integer
    ELSE NULL
  END as badge_id,
  i.rating,
  i.attributes->>'price' as price,
  COALESCE((i.attributes->>'selected')::boolean, false) as selected,
  i.location,
  i.attributes->>'distance' as distance,
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
  i.attributes->>'duration' as duration,
  i.attributes->>'access_info' as access_info,
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
WHERE i.item_type = 'place'
  AND NOT EXISTS (
    -- Skip if place with same slug already exists
    SELECT 1 FROM places p WHERE p.slug = i.slug
  )
ORDER BY i.id;

-- ============================================================================
-- STEP 2: MIGRATE PHOTOS FROM JSONB TO place_images TABLE
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
WHERE i.item_type = 'place'
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
-- STEP 3: MIGRATE CATEGORIES FROM JSONB TO place_categories TABLE
-- ============================================================================

INSERT INTO place_categories (place_id, category_id)
SELECT DISTINCT
  p.id as place_id,
  c.id as category_id
FROM items i
JOIN places p ON p.slug = i.slug
CROSS JOIN LATERAL jsonb_array_elements_text(
  CASE
    WHEN jsonb_typeof(i.attributes->'categories') = 'array' 
    THEN i.attributes->'categories'
    ELSE '[]'::jsonb
  END
) AS cat_slug(value)
JOIN categories c ON c.slug = cat_slug.value
WHERE i.item_type = 'place'
  AND i.attributes->'categories' IS NOT NULL
  AND jsonb_array_length(i.attributes->'categories') > 0
  AND cat_slug.value IS NOT NULL
  AND cat_slug.value != ''
  AND NOT EXISTS (
    -- Skip if category already linked to this place
    SELECT 1 FROM place_categories pc 
    WHERE pc.place_id = p.id 
      AND pc.category_id = c.id
  );

-- ============================================================================
-- STEP 4: MIGRATE FACILITIES FROM JSONB TO place_facilities TABLE
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
WHERE i.item_type = 'place'
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
-- STEP 5: MIGRATE FEATURES FROM JSONB TO place_features TABLE
-- ============================================================================

INSERT INTO place_features (place_id, feature_text)
SELECT
  p.id as place_id,
  feature.value as feature_text
FROM items i
JOIN places p ON p.slug = i.slug
CROSS JOIN LATERAL jsonb_array_elements_text(
  CASE
    WHEN jsonb_typeof(i.attributes->'features') = 'array' 
    THEN i.attributes->'features'
    ELSE '[]'::jsonb
  END
) AS feature(value)
WHERE i.item_type = 'place'
  AND i.attributes->'features' IS NOT NULL
  AND jsonb_array_length(i.attributes->'features') > 0
  AND feature.value IS NOT NULL
  AND feature.value != ''
  AND NOT EXISTS (
    -- Skip if feature already exists for this place
    SELECT 1 FROM place_features pft 
    WHERE pft.place_id = p.id 
      AND pft.feature_text = feature.value
  );

-- ============================================================================
-- STEP 6: MIGRATE TAGS FROM JSONB TO place_tags TABLE
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
WHERE i.item_type = 'place'
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

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================
-- Run these after migration to verify data integrity

-- Count places migrated
-- SELECT COUNT(*) as migrated_places FROM places;

-- Count places still in items table
-- SELECT COUNT(*) as remaining_in_items FROM items WHERE item_type = 'place';

-- Check for any missing photos
-- SELECT p.id, p.slug, p.title, COUNT(pi.id) as photo_count
-- FROM places p
-- LEFT JOIN place_images pi ON pi.place_id = p.id
-- GROUP BY p.id, p.slug, p.title
-- ORDER BY photo_count, p.id;

-- Check for any missing categories
-- SELECT p.id, p.slug, p.title, COUNT(pc.category_id) as category_count
-- FROM places p
-- LEFT JOIN place_categories pc ON pc.place_id = p.id
-- GROUP BY p.id, p.slug, p.title
-- ORDER BY category_count, p.id;

-- Sample migrated place with all relationships
-- SELECT 
--   p.id, p.slug, p.title,
--   (SELECT json_agg(pi.image_url ORDER BY pi.sequence_order) FROM place_images pi WHERE pi.place_id = p.id) as images,
--   (SELECT json_agg(c.slug) FROM place_categories pc JOIN categories c ON c.id = pc.category_id WHERE pc.place_id = p.id) as categories,
--   (SELECT json_agg(pf.facility_name) FROM place_facilities pf WHERE pf.place_id = p.id) as facilities,
--   (SELECT json_agg(pft.feature_text) FROM place_features pft WHERE pft.place_id = p.id) as features,
--   (SELECT json_agg(pt.tag_name) FROM place_tags pt WHERE pt.place_id = p.id) as tags
-- FROM places p
-- WHERE p.slug IN (SELECT slug FROM items WHERE item_type = 'place' LIMIT 1);
