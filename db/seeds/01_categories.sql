-- Seed Categories
-- Based on analysis of categories.js

INSERT INTO categories (slug, name, icon_code, color_code) VALUES
('places', 'Gezi', '🗺️', '#4A90E2'),
('plaj', 'Plaj', '🏖️', '#50C878'),
('aktivite', 'Aktivite', '⚡', '#FF6B6B'),
('restoran', 'Restoran', '🍽️', '#FF9F1C'),
('deniz', 'Deniz', '🌊', '#00BCD4'),
('tarih', 'Tarih', '🏛️', '#A0522D'),
('doga', 'Doğa', '🌿', '#2ECC71'),
('carsi', 'Çarşı', '🛍️', '#E74C3C'),
('kahvalti', 'Kahvaltı', '☕', '#F39C12'),
('faqspecial', 'Özel Soru Serileri', '❓', '#3498DB'),
('meyhane', 'Meyhane', '🍷', '#8E44AD'),
('bar', 'Bar', '🍺', '#E67E22'),
('cafe', 'Cafe', '☕', '#16A085'),
('dalis', 'Dalış', '🤿', '#3498DB'),
('articles', 'Yazılar', '📝', '#95A5A6')
ON CONFLICT (slug) DO NOTHING;
