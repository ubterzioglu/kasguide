-- Seed Categories
-- Based on analysis of categories.js

INSERT INTO categories (slug, name, icon_code, color_code) VALUES
('places', 'Gezi', '🗺️', '#4A90E2'),
('beaches', 'Plaj', '🏖️', '#50C878'),
('activities', 'Aktivite', '⚡', '#FF6B6B'),
('food', 'Restoran', '🍽️', '#FF9F1C'),
('hotels', 'Otel', '🏨', '#9B59B6'),
('history', 'Tarih', '🏛️', '#A0522D'),
('nature', 'Doğa', '🌿', '#2ECC71'),
('shopping', 'Çarşı', '🛍️', '#E74C3C'),
('breakfast', 'Kahvaltı', '☕', '#F39C12'),
('faqspecial', 'Özel Soru Serileri', '❓', '#3498DB'),
('meyhane', 'Meyhane', '🍷', '#8E44AD'),
('bar', 'Bar', '🍺', '#E67E22'),
('cafe', 'Cafe', '☕', '#16A085'),
('diving', 'Dalış', '🤿', '#3498DB'),
('articles', 'Yazılar', '📝', '#95A5A6')
ON CONFLICT (slug) DO NOTHING;
