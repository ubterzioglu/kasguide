-- Venue Analytics Table
-- Tracks views, clicks, and other interactions with venues

CREATE TABLE IF NOT EXISTS venue_analytics (
  id SERIAL PRIMARY KEY,
  venue_id INTEGER NOT NULL,
  venue_type VARCHAR(20) NOT NULL CHECK (venue_type IN ('place', 'hotel', 'pet', 'article')),
  event_type VARCHAR(20) NOT NULL DEFAULT 'view' CHECK (event_type IN ('view', 'click', 'share')),
  viewed_at TIMESTAMP DEFAULT NOW(),
  session_id VARCHAR(255),
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_venue_analytics_venue ON venue_analytics(venue_id, venue_type);
CREATE INDEX IF NOT EXISTS idx_venue_analytics_date ON venue_analytics(viewed_at DESC);
CREATE INDEX IF NOT EXISTS idx_venue_analytics_session ON venue_analytics(session_id);

-- Useful queries for admin panel

-- Most viewed venues (last 30 days)
COMMENT ON TABLE venue_analytics IS 'Query example:
SELECT
  p.title,
  COUNT(*) as total_views,
  COUNT(DISTINCT session_id) as unique_visitors
FROM venue_analytics va
JOIN places p ON va.venue_id = p.id AND va.venue_type = ''place''
WHERE va.viewed_at > NOW() - INTERVAL ''30 days''
  AND va.event_type = ''view''
GROUP BY p.id, p.title
ORDER BY total_views DESC
LIMIT 20;
';
