# 📦 TOPLU VERİ GİRİŞİ REHBERİ - BULK DATA IMPORT GUIDE

## 🎯 Bu Rehber Kimler İçin?

✅ Çok sayıda yer eklemek isteyenler
✅ Excel/CSV dosyasından import yapacaklar
✅ Mevcut veriyi güncellemek isteyenler
✅ Başka sistemden migration yapanlar

---

## 📋 İçindekiler

1. [Excel/CSV'den Import](#1-excelcsvden-import)
2. [JSON'dan Import](#2-jsondan-import)
3. [JavaScript Dosyasından Import](#3-javascript-dosyas%C4%B1ndan-import)
4. [API ile Toplu Ekleme](#4-api-ile-toplu-ekleme)
5. [Direct SQL Import](#5-direct-sql-import)

---

## 1️⃣ EXCEL/CSV'DEN IMPORT

### Adım 1: Excel Hazırla

**Gerekli Kolonlar:**

| slug | title | description | category | rating | price | images |
|------|-------|-------------|----------|--------|-------|--------|
| kaputas-plaji | Kaputaş Plajı | Turkuaz sular... | plajlar | 4.8 | | /img/kaputas.jpg |
| saklıkent | Saklıkent Kanyonu | Doğa harikası... | dogal | 4.5 | ₺50 | /img/saklikent.jpg |

**Opsiyonel Kolonlar:**
- `long_text` - Detaylı açıklama
- `badge` - Rozet (emoji)
- `tags` - Etiketler (virgülle ayırarak)
- `address` - Adres
- `phone` - Telefon
- `website` - Website URL

### Adım 2: CSV'ye Dönüştür

Excel'de: **File → Save As → CSV (Comma delimited)**

### Adım 3: Import Script Kullan

```bash
# CSV'yi JSON'a çevir
node scripts/csv-to-json.js places.csv > places.json

# JSON'u database'e import et
node scripts/import-from-json.js places.json
```

### CSV Import Script Oluştur:

`scripts/csv-to-json.js` dosyası oluştur:

```javascript
const fs = require('fs');
const csv = require('csv-parser');

const results = [];
const inputFile = process.argv[2] || 'data.csv';

fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    // CSV satırını database formatına çevir
    results.push({
      slug: row.slug,
      title: row.title,
      description: row.description,
      long_text: row.long_text || null,
      category: row.category ? row.category.split(',').map(c => c.trim()) : [],
      rating: row.rating ? parseFloat(row.rating) : null,
      price: row.price || null,
      images: row.images ? row.images.split(',').map(i => i.trim()) : [],
      tags: row.tags ? row.tags.split(',').map(t => t.trim()) : [],
      badge: row.badge || null,
      status: 'pending' // Onay bekleyecek
    });
  })
  .on('end', () => {
    console.log(JSON.stringify(results, null, 2));
  });
```

---

## 2️⃣ JSON'DAN IMPORT

### JSON Format:

`places-import.json`:

```json
[
  {
    "slug": "kaputas-plaji",
    "title": "Kaputaş Plajı",
    "description": "Turkuaz sularıyla ünlü plaj",
    "long_text": "Detaylı açıklama buraya...",
    "category": ["plajlar", "populer"],
    "images": [
      "/assets/places/kaputas1.jpg",
      "/assets/places/kaputas2.jpg"
    ],
    "rating": 4.8,
    "price": null,
    "badge": "🏖️",
    "tags": ["turkuaz", "manzara"],
    "status": "approved"
  },
  {
    "slug": "saklikent",
    "title": "Saklıkent Kanyonu",
    "description": "Muhteşem kanyon",
    "category": ["dogal", "aktivite"],
    "images": ["/assets/places/saklikent.jpg"],
    "rating": 4.5,
    "price": "₺50",
    "status": "approved"
  }
]
```

### Import Script:

`scripts/import-from-json.js`:

```javascript
const fs = require('fs');
const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL
});

async function importPlaces(jsonFile) {
  const data = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
  
  console.log(`📦 Importing ${data.length} places...`);

  for (const place of data) {
    try {
      // 1. Insert place
      const placeResult = await pool.query(`
        INSERT INTO places (slug, title, description, long_text, rating, price, status, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
        ON CONFLICT (slug) DO UPDATE
        SET title = $2, description = $3, long_text = $4, rating = $5, price = $6
        RETURNING id
      `, [
        place.slug,
        place.title,
        place.description,
        place.long_text || null,
        place.rating || null,
        place.price || null,
        place.status || 'pending'
      ]);

      const placeId = placeResult.rows[0].id;

      // 2. Insert images
      if (place.images && place.images.length > 0) {
        for (let i = 0; i < place.images.length; i++) {
          await pool.query(`
            INSERT INTO place_images (place_id, image_url, sequence_order)
            VALUES ($1, $2, $3)
            ON CONFLICT (place_id, image_url) DO NOTHING
          `, [placeId, place.images[i], i]);
        }
      }

      // 3. Insert categories
      if (place.category && place.category.length > 0) {
        for (const catSlug of place.category) {
          // Get or create category
          const catResult = await pool.query(`
            INSERT INTO categories (slug, name)
            VALUES ($1, $1)
            ON CONFLICT (slug) DO NOTHING
            RETURNING id
          `, [catSlug]);

          let categoryId;
          if (catResult.rows.length > 0) {
            categoryId = catResult.rows[0].id;
          } else {
            const existingCat = await pool.query(
              'SELECT id FROM categories WHERE slug = $1',
              [catSlug]
            );
            categoryId = existingCat.rows[0].id;
          }

          // Link place to category
          await pool.query(`
            INSERT INTO place_categories (place_id, category_id)
            VALUES ($1, $2)
            ON CONFLICT DO NOTHING
          `, [placeId, categoryId]);
        }
      }

      console.log(`✅ Imported: ${place.title}`);

    } catch (error) {
      console.error(`❌ Error importing ${place.slug}:`, error.message);
    }
  }

  console.log('🎉 Import complete!');
  await pool.end();
}

// Kullanım
const jsonFile = process.argv[2] || 'places-import.json';
importPlaces(jsonFile);
```

### Çalıştırma:

```bash
# JSON dosyasını import et
node scripts/import-from-json.js places-import.json

# Veya
npm run bulk-import places-import.json
```

---

## 3️⃣ JAVASCRIPT DOSYASINDAN IMPORT

Mevcut `places-data.js` gibi dosyalardan import:

### Mevcut Format:

```javascript
// places-data.js
const allPlaces = [
  {
    title: "Kaputaş Plajı",
    description: "...",
    category: ["plajlar"],
    images: ["..."]
  }
];
```

### Import Kodu:

```javascript
// scripts/import-from-js.js
const { allPlaces } = require('../places/places-data.js');
const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

async function importFromJS() {
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
  });

  for (const place of allPlaces) {
    // Slug oluştur (title'dan)
    const slug = place.title
      .toLowerCase()
      .replace(/ı/g, 'i')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    await pool.query(`
      INSERT INTO places (slug, title, description, rating, status)
      VALUES ($1, $2, $3, $4, 'approved')
      ON CONFLICT (slug) DO NOTHING
    `, [slug, place.title, place.description, place.rating || null]);
  }

  console.log('✅ Import complete!');
  await pool.end();
}

importFromJS();
```

---

## 4️⃣ API İLE TOPLU EKLEME

### Node.js Script ile:

```javascript
// scripts/bulk-submit.js
const places = require('./my-data.json');

async function bulkSubmit() {
  for (const place of places) {
    const response = await fetch('https://kasguide.de/api/venue-submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        venueName: place.title,
        venueDescription: place.description,
        venueCategory: place.category,
        venueImage: place.images[0],
        // ... diğer alanlar
      })
    });

    const result = await response.json();
    console.log(`✅ ${place.title}:`, result.message);
    
    // Rate limit için bekle
    await new Promise(r => setTimeout(r, 1000));
  }
}

bulkSubmit();
```

### Curl ile (Bash):

```bash
#!/bin/bash
# bulk-submit.sh

# JSON dosyasındaki her item için
cat places.json | jq -c '.[]' | while read place; do
  curl -X POST https://kasguide.de/api/venue-submit \
    -H "Content-Type: application/json" \
    -d "$place"
  
  # Rate limit
  sleep 1
done
```

---

## 5️⃣ DIRECT SQL IMPORT

### SQL Dosyası Oluştur:

`import-data.sql`:

```sql
-- Places toplu insert
INSERT INTO places (slug, title, description, rating, status, created_at) VALUES
('kaputas-plaji', 'Kaputaş Plajı', 'Turkuaz sular...', 4.8, 'approved', NOW()),
('saklikent', 'Saklıkent Kanyonu', 'Doğa harikası...', 4.5, 'approved', NOW()),
('patara', 'Patara Plajı', 'Uzun kumsal...', 4.7, 'approved', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Images toplu insert
INSERT INTO place_images (place_id, image_url, sequence_order) VALUES
((SELECT id FROM places WHERE slug = 'kaputas-plaji'), '/img/kaputas1.jpg', 0),
((SELECT id FROM places WHERE slug = 'kaputas-plaji'), '/img/kaputas2.jpg', 1),
((SELECT id FROM places WHERE slug = 'saklikent'), '/img/saklikent.jpg', 0)
ON CONFLICT DO NOTHING;
```

### SQL Dosyasını Çalıştır:

**Neon Dashboard'da:**
1. Neon Console → SQL Editor
2. Dosya içeriğini kopyala-yapıştır
3. Run

**Terminal'den:**
```bash
psql $POSTGRES_URL < import-data.sql
```

---

## 🔄 EXCEL → DATABASE TAM AKIŞ

### Baştan Sona Örnek:

```bash
# 1. Excel dosyanı hazırla
# places.xlsx içinde veriler olsun

# 2. CSV'ye dönüştür (Excel'de Save As → CSV)
# places.csv oluştu

# 3. CSV'den JSON'a çevir
node scripts/csv-to-json.js places.csv > places.json

# 4. JSON'u incele
cat places.json

# 5. Database'e import et
node scripts/import-from-json.js places.json

# 6. Kontrol et
psql $POSTGRES_URL -c "SELECT COUNT(*) FROM places;"

# 7. Admin panelden onayla
# https://kasguide.de/admin
```

---

## 📊 GÜNCELLEME (UPDATE) İŞLEMLERİ

### Mevcut Veriyi Güncelle:

```javascript
// scripts/bulk-update.js
const updates = [
  { slug: 'kaputas-plaji', rating: 4.9 },
  { slug: 'saklikent', price: '₺75' }
];

async function bulkUpdate() {
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
  });

  for (const item of updates) {
    await pool.query(
      'UPDATE places SET rating = $1, price = $2 WHERE slug = $3',
      [item.rating || null, item.price || null, item.slug]
    );
    console.log(`✅ Updated: ${item.slug}`);
  }

  await pool.end();
}

bulkUpdate();
```

---

## 🗑️ TOPLU SİLME (BULK DELETE)

### Dikkat! Bu işlem geri alınamaz!

```sql
-- Belirli category'deki yerleri sil
DELETE FROM places
WHERE id IN (
  SELECT place_id FROM place_categories
  WHERE category_id = (SELECT id FROM categories WHERE slug = 'test')
);

-- Pending olanları sil
DELETE FROM places WHERE status = 'pending';

-- Belirli tarihten eski olanları sil
DELETE FROM places WHERE created_at < '2024-01-01';
```

---

## ✅ BEST PRACTICES

### Do's ✅

- ✅ Import öncesi backup al
- ✅ Slug'ları unique tut
- ✅ Test verisi ile önce dene
- ✅ Transaction kullan (hata durumunda rollback)
- ✅ Duplicate kontrol et
- ✅ Status = 'pending' ile başla, sonra onayla

### Don'ts ❌

- ❌ Production'da direkt SQL çalıştırma
- ❌ Büyük dosyaları tek seferde import etme (batch'le)
- ❌ Validation skip etme
- ❌ Backup almadan silme
- ❌ İmage path'lerini yanlış girme

---

## 🔧 HAZIR SCRIPTLER

`package.json`'a ekle:

```json
{
  "scripts": {
    "bulk-import": "node scripts/import-from-json.js",
    "bulk-update": "node scripts/bulk-update.js",
    "csv-to-json": "node scripts/csv-to-json.js",
    "validate-data": "node scripts/validate-import.js"
  }
}
```

---

## 📞 Yardım

Toplu import sırasında sorun yaşarsanız:
- Önce küçük batch ile test et (10-20 item)
- Logs kontrol et
- Duplicate kontrol et: `SELECT slug, COUNT(*) FROM places GROUP BY slug HAVING COUNT(*) > 1;`

**Son Güncelleme:** 2024-12-29
