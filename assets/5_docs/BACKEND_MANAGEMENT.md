# 🗄️ BACKEND VERİ YÖNETİMİ REHBERİ

## 📋 İçindekiler

1. [Database Erişimi](#database-eri%C5%9Fimi)
2. [Veri Sorgulama (Query)](#veri-sorgulama-query)
3. [Veri Ekleme (Insert)](#veri-ekleme-insert)
4. [Veri Güncelleme (Update)](#veri-g%C3%BCncelleme-update)
5. [Veri Silme (Delete)](#veri-silme-delete)
6. [İlişkiler Yönetimi](#ili%C5%9Fkiler-y%C3%B6netimi)
7. [Backup & Restore](#backup--restore)
8. [Performance Optimization](#performance-optimization)

---

## 🔑 DATABASE ERİŞİMİ

### 1. Neon Dashboard (GUI)

**Erişim:**
1. https://console.neon.tech adresine git
2. Login ol
3. Kasguide projesini seç
4. **SQL Editor** sekmesini aç

**Avantajları:**
- Görsel arayüz
- Query editor
- Sonuçları tablo halinde gösterir
- Hata mesajları net

**Örnek:**
```sql
-- SQL Editor'e yapıştır ve Run
SELECT * FROM places LIMIT 10;
```

### 2. psql (Terminal)

**Kurulum:**
```bash
# Mac
brew install postgresql

# Ubuntu/Debian
sudo apt-get install postgresql-client

# Windows
# PostgreSQL installer ile gelir
```

**Bağlanma:**
```bash
# .env.local'den URL'i al
psql $POSTGRES_URL

# Veya direkt
psql "postgresql://neondb_owner:pass@ep-xxx.neon.tech/neondb?sslmode=require"
```

**Avantajları:**
- Hızlı
- Script friendly
- Batch işlemler

### 3. Node.js Scripts

**Basit Query:**
```javascript
// query.js
const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL
});

async function query(sql, params = []) {
  const result = await pool.query(sql, params);
  console.table(result.rows);
  await pool.end();
}

// Kullanım
query('SELECT * FROM places LIMIT 10');
```

**Çalıştırma:**
```bash
node query.js
```

---

## 📊 VERİ SORGULAMA (QUERY)

### Basit SELECT:

```sql
-- Tüm yerler
SELECT * FROM places;

-- Sadece başlık ve açıklama
SELECT title, description FROM places;

-- İlk 10 kayıt
SELECT * FROM places LIMIT 10;

-- Sayfalama (pagination)
SELECT * FROM places LIMIT 10 OFFSET 20;  -- 21-30 arası
```

### WHERE ile Filtreleme:

```sql
-- Belirli status
SELECT * FROM places WHERE status = 'approved';

-- Rating'e göre
SELECT * FROM places WHERE rating >= 4.5;

-- Title'da arama
SELECT * FROM places WHERE title ILIKE '%plaj%';

-- Kombinasyon
SELECT * FROM places
WHERE status = 'approved'
  AND rating >= 4.0
  AND title ILIKE '%kaş%';
```

### ORDER BY ile Sıralama:

```sql
-- Rating'e göre yüksek → düşük
SELECT * FROM places ORDER BY rating DESC;

-- Alfabetik
SELECT * FROM places ORDER BY title ASC;

-- Çoklu sıralama
SELECT * FROM places ORDER BY rating DESC, title ASC;

-- Son eklenenler
SELECT * FROM places ORDER BY created_at DESC LIMIT 10;
```

### JOIN ile İlişkiler:

```sql
-- Place + images
SELECT
  p.title,
  pi.image_url
FROM places p
LEFT JOIN place_images pi ON pi.place_id = p.id;

-- Place + categories
SELECT
  p.title,
  c.name as category_name
FROM places p
JOIN place_categories pc ON pc.place_id = p.id
JOIN categories c ON c.id = pc.category_id;

-- Tüm bilgiler birlikte
SELECT
  p.id,
  p.title,
  p.description,
  p.rating,
  json_agg(DISTINCT pi.image_url) as images,
  json_agg(DISTINCT c.slug) as categories
FROM places p
LEFT JOIN place_images pi ON pi.place_id = p.id
LEFT JOIN place_categories pc ON pc.place_id = p.id
LEFT JOIN categories c ON c.id = pc.category_id
GROUP BY p.id;
```

### Aggregate Functions:

```sql
-- Toplam yer sayısı
SELECT COUNT(*) as total FROM places;

-- Status'lere göre say
SELECT status, COUNT(*) as count
FROM places
GROUP BY status;

-- Ortalama rating
SELECT AVG(rating) as avg_rating FROM places WHERE rating IS NOT NULL;

-- En yüksek ve düşük rating
SELECT MAX(rating) as highest, MIN(rating) as lowest FROM places;

-- Kategori başına yer sayısı
SELECT
  c.name,
  COUNT(pc.place_id) as place_count
FROM categories c
LEFT JOIN place_categories pc ON pc.category_id = c.id
GROUP BY c.id, c.name
ORDER BY place_count DESC;
```

---

## ➕ VERİ EKLEME (INSERT)

### Tek Kayıt Ekleme:

```sql
-- Basit insert
INSERT INTO places (slug, title, description, status)
VALUES ('yeni-yer', 'Yeni Yer', 'Açıklama buraya', 'approved');

-- Tüm alanlarla
INSERT INTO places (
  slug, title, description, long_text,
  rating, price, status, created_at
) VALUES (
  'kaputas-plaji',
  'Kaputaş Plajı',
  'Kısa açıklama',
  'Uzun detaylı açıklama...',
  4.8,
  NULL,
  'approved',
  NOW()
);

-- Return ID (eklenen kaydın ID'sini al)
INSERT INTO places (slug, title, description, status)
VALUES ('test', 'Test Mekan', 'Test', 'pending')
RETURNING id, slug, title;
```

### Çoklu Kayıt Ekleme:

```sql
INSERT INTO places (slug, title, description, status) VALUES
('yer-1', 'Yer 1', 'Açıklama 1', 'approved'),
('yer-2', 'Yer 2', 'Açıklama 2', 'approved'),
('yer-3', 'Yer 3', 'Açıklama 3', 'approved');
```

### Duplicate Kontrolü (ON CONFLICT):

```sql
-- Varsa güncelle, yoksa ekle (UPSERT)
INSERT INTO places (slug, title, description, status)
VALUES ('kaputas', 'Kaputaş', 'Açıklama', 'approved')
ON CONFLICT (slug)
DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  updated_at = NOW();

-- Varsa skip et
INSERT INTO places (slug, title, description, status)
VALUES ('kaputas', 'Kaputaş', 'Açıklama', 'approved')
ON CONFLICT (slug) DO NOTHING;
```

### İlişkili Veri Ekleme:

```sql
-- 1. Place ekle
INSERT INTO places (slug, title, description, status)
VALUES ('yeni-plaj', 'Yeni Plaj', 'Harika plaj', 'approved')
RETURNING id;
-- Diyelim ki ID = 100 geldi

-- 2. Image ekle
INSERT INTO place_images (place_id, image_url, sequence_order) VALUES
(100, '/assets/places/plaj1.jpg', 0),
(100, '/assets/places/plaj2.jpg', 1);

-- 3. Category bağla
-- Önce category ID'yi bul
SELECT id FROM categories WHERE slug = 'plajlar';
-- Diyelim ki ID = 5

-- Bağlantıyı ekle
INSERT INTO place_categories (place_id, category_id)
VALUES (100, 5);
```

---

## ✏️ VERİ GÜNCELLEME (UPDATE)

### Basit Güncelleme:

```sql
-- Title güncelle
UPDATE places
SET title = 'Yeni Başlık'
WHERE slug = 'kaputas-plaji';

-- Çoklu alan güncelle
UPDATE places
SET
  description = 'Güncellenmiş açıklama',
  rating = 4.9,
  updated_at = NOW()
WHERE slug = 'kaputas-plaji';

-- Status değiştir
UPDATE places
SET status = 'approved'
WHERE id = 123;
```

### Toplu Güncelleme:

```sql
-- Tüm pending'leri approved yap
UPDATE places
SET status = 'approved'
WHERE status = 'pending';

-- Rating'i artır
UPDATE places
SET rating = rating + 0.1
WHERE rating < 5.0;

-- NULL olan price'ları güncelle
UPDATE places
SET price = 'Ücretsiz'
WHERE price IS NULL;
```

### Conditional Update:

```sql
-- Rating yüksek olanlara badge ekle
UPDATE places
SET badge_id = (SELECT id FROM badges WHERE title = 'Premium')
WHERE rating >= 4.8;

-- Eski kayıtları arşivle
UPDATE places
SET status = 'archived'
WHERE created_at < '2023-01-01'
  AND status = 'approved';
```

---

## 🗑️ VERİ SİLME (DELETE)

### ⚠️ DİKKAT: Delete işlemleri geri alınamaz!

```sql
-- Tek kayıt sil
DELETE FROM places WHERE slug = 'test-mekan';

-- ID ile sil
DELETE FROM places WHERE id = 999;

-- Pending olanları sil
DELETE FROM places WHERE status = 'pending';

-- Eski kayıtları sil
DELETE FROM places
WHERE created_at < '2023-01-01'
  AND status = 'rejected';
```

### Cascade Delete (İlişkili Verileri Otomatik Sil):

Schema'da `ON DELETE CASCADE` tanımlıysa, place silindiğinde ilgili images/categories de silinir.

```sql
-- Place sil → images ve categories de otomatik silinir
DELETE FROM places WHERE id = 100;
```

### Soft Delete (İşaretleyerek Sil):

```sql
-- Tamamen silme yerine status güncelle
UPDATE places
SET status = 'deleted', deleted_at = NOW()
WHERE id = 100;

-- Query'lerde deleted olmayanları getir
SELECT * FROM places WHERE status != 'deleted';
```

---

## 🔗 İLİŞKİLER YÖNETİMİ

### Many-to-Many İlişkiler (Place ↔ Categories):

```sql
-- Bir place'e yeni category ekle
INSERT INTO place_categories (place_id, category_id)
VALUES (
  (SELECT id FROM places WHERE slug = 'kaputas'),
  (SELECT id FROM categories WHERE slug = 'populer')
);

-- Place'in tüm kategorilerini listele
SELECT c.name
FROM categories c
JOIN place_categories pc ON pc.category_id = c.id
WHERE pc.place_id = (SELECT id FROM places WHERE slug = 'kaputas');

-- Bir category'yi place'den kaldır
DELETE FROM place_categories
WHERE place_id = (SELECT id FROM places WHERE slug = 'kaputas')
  AND category_id = (SELECT id FROM categories WHERE slug = 'populer');
```

### One-to-Many İlişkiler (Place → Images):

```sql
-- Place'e yeni image ekle
INSERT INTO place_images (place_id, image_url, sequence_order)
VALUES (
  (SELECT id FROM places WHERE slug = 'kaputas'),
  '/assets/places/kaputas-new.jpg',
  (SELECT COALESCE(MAX(sequence_order), -1) + 1
   FROM place_images
   WHERE place_id = (SELECT id FROM places WHERE slug = 'kaputas'))
);

-- Place'in tüm resimlerini listele
SELECT image_url
FROM place_images
WHERE place_id = (SELECT id FROM places WHERE slug = 'kaputas')
ORDER BY sequence_order;

-- Bir resmi sil
DELETE FROM place_images
WHERE place_id = (SELECT id FROM places WHERE slug = 'kaputas')
  AND image_url = '/assets/places/old-image.jpg';
```

---

## 💾 BACKUP & RESTORE

### Full Backup:

```bash
# Tüm database'i yedekle
pg_dump $POSTGRES_URL > kasguide-backup-$(date +%Y%m%d).sql

# Sadece data (schema olmadan)
pg_dump $POSTGRES_URL --data-only > kasguide-data-$(date +%Y%m%d).sql

# Sadece schema (data olmadan)
pg_dump $POSTGRES_URL --schema-only > kasguide-schema.sql
```

### Table-Specific Backup:

```bash
# Sadece places tablosu
pg_dump $POSTGRES_URL -t places > places-backup.sql

# Birden fazla tablo
pg_dump $POSTGRES_URL -t places -t categories > selected-tables.sql
```

### Restore:

```bash
# Backup'ı geri yükle
psql $POSTGRES_URL < kasguide-backup-20241229.sql

# Sadece places tablosunu restore et
psql $POSTGRES_URL < places-backup.sql
```

### JSON Export:

```bash
# Places'i JSON olarak export et
psql $POSTGRES_URL -c "COPY (SELECT row_to_json(t) FROM (SELECT * FROM places) t) TO STDOUT" > places.json
```

---

## ⚡ PERFORMANCE OPTIMIZATION

### İndexler:

```sql
-- Slug için index (zaten var)
CREATE INDEX idx_places_slug ON places(slug);

-- Status için index
CREATE INDEX idx_places_status ON places(status);

-- Rating için index
CREATE INDEX idx_places_rating ON places(rating DESC);

-- Composite index
CREATE INDEX idx_places_status_rating ON places(status, rating DESC);

-- Text search için index
CREATE INDEX idx_places_title_search ON places USING gin(to_tsvector('english', title));
```

### Query Optimization:

```sql
-- EXPLAIN kullan (query planını gör)
EXPLAIN ANALYZE
SELECT * FROM places
WHERE status = 'approved' AND rating >= 4.5;

-- İndex kullanımını kontrol et
EXPLAIN (ANALYZE, BUFFERS)
SELECT * FROM places WHERE slug = 'kaputas';
```

### View'lar (Sık Kullanılan Query'ler):

```sql
-- Approved places with all relations
CREATE VIEW approved_places_full AS
SELECT
  p.*,
  json_agg(DISTINCT pi.image_url) as images,
  json_agg(DISTINCT c.slug) as categories
FROM places p
LEFT JOIN place_images pi ON pi.place_id = p.id
LEFT JOIN place_categories pc ON pc.place_id = p.id
LEFT JOIN categories c ON c.id = pc.category_id
WHERE p.status = 'approved'
GROUP BY p.id;

-- Kullanım
SELECT * FROM approved_places_full WHERE rating >= 4.5;
```

---

## 🔒 GÜVENLİK

### Parametreli Sorgular (SQL Injection Önleme):

```javascript
// ❌ YANLIŞ - SQL Injection riski
const slug = req.query.slug;
pool.query(`SELECT * FROM places WHERE slug = '${slug}'`);

// ✅ DOĞRU - Parameterized query
const slug = req.query.slug;
pool.query('SELECT * FROM places WHERE slug = $1', [slug]);
```

### Role-Based Access:

```sql
-- Read-only user oluştur
CREATE ROLE kasguide_readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO kasguide_readonly;

-- API user oluştur (limited permissions)
CREATE USER kasguide_api WITH PASSWORD 'secure-password';
GRANT kasguide_readonly TO kasguide_api;
GRANT INSERT ON places TO kasguide_api;
```

---

## 📞 Yardım

Backend yönetimi için:
- Neon Docs: https://neon.tech/docs
- PostgreSQL Docs: https://www.postgresql.org/docs/
- USER_GUIDE.md
- BULK_DATA_GUIDE.md

**Son Güncelleme:** 2024-12-29
