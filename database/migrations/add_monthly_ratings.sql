-- Monthly Ratings System Migration
-- Adds Google Maps and TripAdvisor ratings fields to items table
-- Version: 1.0
-- Date: 2026-01-01

-- Extend items table with ratings fields (unified system uses 'items' not 'places')
ALTER TABLE items
ADD COLUMN IF NOT EXISTS google_place_id TEXT,
ADD COLUMN IF NOT EXISTS google_maps_url TEXT,
ADD COLUMN IF NOT EXISTS google_rating NUMERIC(2,1),
ADD COLUMN IF NOT EXISTS google_reviews_count INTEGER,
ADD COLUMN IF NOT EXISTS tripadvisor_url TEXT,
ADD COLUMN IF NOT EXISTS tripadvisor_rating NUMERIC(2,1),
ADD COLUMN IF NOT EXISTS tripadvisor_reviews_count INTEGER,
ADD COLUMN IF NOT EXISTS ratings_last_synced_at TIMESTAMP;

-- Add constraints (use items_ prefix)
ALTER TABLE items
ADD CONSTRAINT IF NOT EXISTS check_items_google_rating CHECK (google_rating IS NULL OR (google_rating >= 0 AND google_rating <= 5)),
ADD CONSTRAINT IF NOT EXISTS check_items_tripadvisor_rating CHECK (tripadvisor_rating IS NULL OR (tripadvisor_rating >= 0 AND tripadvisor_rating <= 5)),
ADD CONSTRAINT IF NOT EXISTS check_items_google_reviews_count CHECK (google_reviews_count IS NULL OR google_reviews_count >= 0),
ADD CONSTRAINT IF NOT EXISTS check_items_tripadvisor_reviews_count CHECK (tripadvisor_reviews_count IS NULL OR tripadvisor_reviews_count >= 0);

-- Create index for google_place_id lookups
CREATE INDEX IF NOT EXISTS idx_items_google_place_id ON items(google_place_id) WHERE google_place_id IS NOT NULL;

-- Create index for sync status
CREATE INDEX IF NOT EXISTS idx_items_ratings_synced ON items(ratings_last_synced_at);

-- Optional: Ratings history table (for tracking changes over time)
CREATE TABLE IF NOT EXISTS ratings_history (
  id SERIAL PRIMARY KEY,
  item_id INTEGER NOT NULL REFERENCES items(id) ON DELETE CASCADE,
  source TEXT NOT NULL CHECK (source IN ('google','tripadvisor')),
  rating NUMERIC(2,1),
  reviews_count INTEGER,
  captured_at TIMESTAMP DEFAULT NOW(),

  -- Ensure valid data
  CONSTRAINT check_rating_value CHECK (rating IS NULL OR (rating >= 0 AND rating <= 5)),
  CONSTRAINT check_reviews_value CHECK (reviews_count IS NULL OR reviews_count >= 0)
);

-- Index for history queries
CREATE INDEX IF NOT EXISTS idx_ratings_history_item ON ratings_history(item_id, source, captured_at DESC);
CREATE INDEX IF NOT EXISTS idx_ratings_history_date ON ratings_history(captured_at DESC);

-- Add comments for documentation
COMMENT ON COLUMN items.google_place_id IS 'Google Places API place_id for monthly rating sync';
COMMENT ON COLUMN items.ratings_last_synced_at IS 'Last time ratings were synced from Google API (monthly)';
COMMENT ON TABLE ratings_history IS 'Historical snapshot of ratings for trend analysis';

-- Verify migration
DO $$
BEGIN
  RAISE NOTICE 'Ratings migration completed successfully';
  RAISE NOTICE 'New columns added to items table: google_place_id, google_maps_url, google_rating, google_reviews_count, tripadvisor_url, tripadvisor_rating, tripadvisor_reviews_count, ratings_last_synced_at';
  RAISE NOTICE 'Optional ratings_history table created for historical tracking';
END $$;
