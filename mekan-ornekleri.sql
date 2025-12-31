-- ============================================================================
-- MEKAN EKLEME ÖRNEKLERİ
-- Kopyala-Değiştir-Çalıştır
-- ============================================================================

-- ÖRNEK 1: Minimal Restoran (Sadece zorunlu alanlar)
-- ============================================================================
INSERT INTO items (item_number, item_type, title, slug, long_text, status, attributes)
VALUES (
  'PLACE-MINIMAL-001',
  'place',
  'Minimal Restoran',
  'minimal-restoran',
  'Kaş merkezde harika bir restoran. Taze balık ve mezeler. Deniz manzaralı.',
  'approved',
  '{"categories": ["restoran"]}'
);


-- ÖRNEK 2: Bar (Tüm detaylar)
-- ============================================================================
INSERT INTO items (
  item_number,
  item_type,
  title,
  slug,
  description,
  long_text,
  phone,
  email,
  website,
  instagram,
  location,
  status,
  attributes
) VALUES (
  'PLACE-SUNSET-BAR',
  'place',
  'Sunset Bar & Grill',
  'sunset-bar-grill',
  'Kaş''ın en iyi gün batımı manzarası',
  'Küçükçakıl plajında, denize sıfır konumda. Muhteşem gün batımı manzarası ve kokteyl menüsü. Hafta sonları canlı müzik. Rezervasyon önerilir.',
  '+90 242 836 1234',
  'info@sunsetbar.com',
  'https://sunsetbar.com',
  '@sunsetbarkas',
  'Küçükçakıl Plajı',
  'approved',
  '{"categories": ["bar", "restoran"], "price": "₺₺₺", "features": ["deniz-manzara", "canlı-müzik"], "facilities": ["wifi", "parking"]}'
);


-- ÖRNEK 3: Meyhane
-- ============================================================================
INSERT INTO items (item_number, item_type, title, slug, long_text, phone, instagram, status, attributes)
VALUES (
  'PLACE-KOSE-MEYHANE',
  'place',
  'Köşe Meyhane',
  'kose-meyhane',
  'Geleneksel meyhane atmosferi. Ev yapımı mezeler, taze balık ve soğuk rakı. Kapalı ve açık oturma alanı mevcut.',
  '+90 242 836 5678',
  '@kosemeyhane',
  'approved',
  '{"categories": ["meyhane"], "price": "₺₺"}'
);


-- ÖRNEK 4: Cafe
-- ============================================================================
INSERT INTO items (item_number, item_type, title, slug, description, long_text, location, status, attributes)
VALUES (
  'PLACE-ÇINAR-CAFE',
  'place',
  'Çınar Altı Cafe',
  'cinar-alti-cafe',
  'Tarihi çınar ağacının gölgesinde huzurlu kahve keyfi',
  'Kaş''ın en eski çınar ağacının altında kurulmuş butik cafe. Özel kahve çeşitleri, ev yapımı pastalar. Sessiz ve sakin ortam.',
  'Kaş Merkez - Çarşı',
  'approved',
  '{"categories": ["cafe"], "price": "₺"}'
);


-- ÖRNEK 5: Restoran + Bar (Çift kategori)
-- ============================================================================
INSERT INTO items (item_number, item_type, title, slug, long_text, phone, status, attributes)
VALUES (
  'PLACE-DENIZ-YILDIZI',
  'place',
  'Deniz Yıldızı Restaurant & Bar',
  'deniz-yildizi-restaurant-bar',
  'Öğleden akşama kadar açık. Öğle yemekleri, akşam yemekleri ve bar servisi. Taze balık, ızgara et çeşitleri. Geniş kokteyl menüsü.',
  '+90 242 836 9999',
  'approved',
  '{"categories": ["restoran", "bar"], "price": "₺₺", "facilities": ["wifi"]}'
);


-- ============================================================================
-- TOPLU EKLEME ÖRNEĞİ (5 mekan birden)
-- ============================================================================
INSERT INTO items (item_number, item_type, title, slug, long_text, status, attributes)
VALUES
  (
    'PLACE-BALIK-EVI',
    'place',
    'Balık Evi',
    'balik-evi',
    'Sabah taze balık, akşam sofraya. Günlük avlanan balıklar.',
    'approved',
    '{"categories": ["restoran"], "price": "₺₺"}'
  ),
  (
    'PLACE-KAHVALTI-DUNYASI',
    'place',
    'Kahvaltı Dünyası',
    'kahvalti-dunyasi',
    'Serpme kahvaltı ve açık büfe seçenekleri. 09:00-14:00 arası.',
    'approved',
    '{"categories": ["kahvalti"], "price": "₺"}'
  ),
  (
    'PLACE-LIMAN-BAR',
    'place',
    'Liman Bar',
    'liman-bar',
    'Marina manzaralı chill bar. Kokteyller ve atıştırmalıklar.',
    'approved',
    '{"categories": ["bar"], "price": "₺₺"}'
  ),
  (
    'PLACE-MEZE-SOFRASI',
    'place',
    'Meze Sofrası',
    'meze-sofrasi',
    'Ev yapımı 40 çeşit meze. Rakı balık kültürü.',
    'approved',
    '{"categories": ["meyhane"], "price": "₺₺₺"}'
  ),
  (
    'PLACE-KAKTUS-CAFE',
    'place',
    'Kaktüs Cafe & Bistro',
    'kaktus-cafe-bistro',
    'Kahve, smoothie, salata ve sandviç çeşitleri. Vegan seçenekler mevcut.',
    'approved',
    '{"categories": ["cafe"], "price": "₺"}'
  );


-- ============================================================================
-- ŞABLON: Kendi mekanını ekle (Bu satırları kopyala-değiştir)
-- ============================================================================
/*
INSERT INTO items (item_number, item_type, title, slug, description, long_text, phone, instagram, location, status, attributes)
VALUES (
  'PLACE-___',                    -- Buraya benzersiz numara yaz
  'place',
  'Mekan İsmi',                   -- Buraya mekan ismini yaz
  'mekan-ismi',                   -- Buraya slug yaz (küçük harf, tire ile)
  'Kısa açıklama',                -- OPSIYONEL
  'Detaylı açıklama buraya. En az bir cümle yaz.', -- ZORUNLU!
  '+90 242 XXX XXXX',             -- OPSIYONEL
  '@instagramkullanici',          -- OPSIYONEL
  'Kaş Merkez',                   -- OPSIYONEL
  'approved',
  '{"categories": ["restoran"], "price": "₺₺"}'  -- Kategori ve fiyat
);
*/


-- ============================================================================
-- KATEGORİLER HATIRLATMA
-- ============================================================================
-- "bar", "meyhane", "restoran", "cafe", "kahvalti"
-- "tarih", "doga", "dalis", "aktivite", "etkinlik"
-- "carsi", "plaj", "roportaj", "acildurum"

-- FİYAT SEÇENEKLERİ
-- "₺" (ekonomik), "₺₺" (orta), "₺₺₺" (lüks)
