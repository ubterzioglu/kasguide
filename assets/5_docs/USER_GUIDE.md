# 📖 KAŞ GUIDE - YENİ SİSTEM KULLANIM REHBERİ

## 🎯 Sistem Özeti

Kaş Guide artık **database-driven** (veritabanı tabanlı) bir sistem! 

**Eski Sistem:**
- Statik JavaScript dosyaları (`places-data.js`)
- Manuel kod düzenleme
- Her değişiklik için developer gerekli

**Yeni Sistem:**
- PostgreSQL database (Neon)
- REST API'ler
- Admin panel
- Toplu veri import/export
- Otomatik onay sistemi

---

## 📂 Sistem Mimarisi

```
┌─────────────────┐
│   FRONTEND      │
│  (index.html)   │
│   (script.js)   │
└────────┬────────┘
         │
         │ fetch()
         ▼
┌─────────────────┐
│   API LAYER     │
│  /api/places    │
│  /api/hotels    │
│     etc...      │
└────────┬────────┘
         │
         │ SQL
         ▼
┌─────────────────┐
│   DATABASE      │
│ Neon PostgreSQL │
│  (890+ items)   │
└─────────────────┘
```

---

## 🗂️ Database Yapısı

### Ana Tablolar:

| Tablo | Açıklama | Örnek Veri |
|-------|----------|------------|
| `places` | Yerler (plajlar, restoranlar, vb.) | 353 kayıt |
| `hotels` | Oteller | 1 kayıt |
| `pets` | Evcil hayvan dostu yerler | 2 kayıt |
| `articles` | Makaleler | 2 kayıt |
| `faq_series` | SSS serileri | 1 kayıt |
| `faqs` | Soru-Cevaplar | 500 kayıt |
| `categories` | Kategoriler | 15 kayıt |
| `badges` | Rozetler | 16 kayıt |

### İlişki Tabloları:

- `place_images` - Yer resimleri (çoklu resim desteği)
- `place_categories` - Yer-kategori ilişkileri (many-to-many)
- `hotel_images` - Otel resimleri
- `hotel_facilities` - Otel özellikleri
- `pet_photos` - Evcil hayvan fotoğrafları
- `article_tags` - Makale etiketleri

---

## 🔄 Veri Akışı

### 1. Veri Ekleme:

```
Kullanıcı → Form (/add/place/) → API (/api/venue-submit) 
→ Database (status: pending) → Admin Paneli
```

### 2. Onaylama:

```
Admin Panel → Approve butonu → Database (status: approved) 
→ Frontend'de görünür
```

### 3. Görüntüleme:

```
Tarayıcı → API (/api/places) → Database → JSON Response 
→ Frontend (script.js) → Render
```

---

## 👨‍💼 ADMIN PANELİ KULLANIMI

### Giriş:

1. `https://kasguide.de/admin/` adresine git
2. API Key'i gir (ADMIN_API_KEY)
3. Dashboard açılır

### Dashboard Özellikleri:

- **Pending Submissions:** Onay bekleyen yerler
- **All Places:** Tüm yerler listesi
- **Statistics:** İstatistikler
- **Search:** Arama

### Yer Onaylama:

1. "Pending" listesinde yeri bul
2. Detayları incele:
   - Title, description
   - Images
   - Categories
   - Rating, price
3. Karar ver:
   - **Approve** → Canlıda göster
   - **Reject** → Reddet
   - **Delete** → Sil

### Toplu İşlemler:

```javascript
// Console'da çalıştır (admin panelde F12)

// Tüm pending'leri onayla
document.querySelectorAll('.approve-btn').forEach(btn => btn.click());

// Belirli kategorideki yerleri bul
places.filter(p => p.categories.includes('plajlar'))
```

---

## 📊 VERİ YÖNETİMİ

### Veri Görüntüleme:

```bash
# Terminal'de
node -e "
const {Pool} = require('pg');
require('dotenv').config({path: '.env.local'});
const pool = new Pool({connectionString: process.env.POSTGRES_URL});

pool.query('SELECT title, status FROM places LIMIT 10')
  .then(r => console.table(r.rows));
"
```

### Manuel Veri Ekleme:

```sql
-- Neon dashboard SQL editor'de
INSERT INTO places (slug, title, description, status)
VALUES (
  'yeni-mekan',
  'Yeni Mekan',
  'Açıklama buraya',
  'approved'
);
```

### Veri Güncelleme:

```sql
-- Title güncelle
UPDATE places
SET title = 'Güncellenmiş Başlık'
WHERE slug = 'kaputas-plaji';

-- Status değiştir
UPDATE places
SET status = 'approved'
WHERE id = 123;
```

### Veri Silme:

```sql
-- Tek yer sil
DELETE FROM places WHERE slug = 'test-mekan';

-- Pending olanları temizle
DELETE FROM places WHERE status = 'pending';
```

---

## 🔄 TOPLU VERİ İŞLEMLERİ

### Import (Toplu Ekleme):

```bash
# Terminal'de
npm run db:import:places
npm run db:import:hotels
npm run db:import:pets
npm run db:import:articles
npm run db:import:faqspecial
npm run db:import:faqs
```

### Export (Yedekleme):

```bash
# Database'den JSON'a çıkar
node scripts/export-data.js

# Belirli tabloyu çıkar
node scripts/export-data.js places > places-backup.json
```

### Migration (Şema Değişiklikleri):

```bash
# Yeni migration oluştur
npm run db:migrate

# Migration geri al
npm run db:rollback
```

---

## 🌐 FRONTEND KULLANIMI

### Ana Sayfa Özellikleri:

1. **Arama:**
   - Title, description, tags'te arama
   - Gerçek zamanlı sonuç
   - 2+ karakter gerekli

2. **Kategori Filtreleme:**
   - Tıkla-filtrele
   - Çoklu kategori seçimi
   - Aktif filtre sayısı

3. **Sıralama:**
   - Rating (yüksek → düşük)
   - Featured önce
   - Alfabetik

4. **İstatistikler:**
   - Toplam mekan
   - Gösterilen mekan
   - Aktif filtre
   - Kategori sayısı

### URL Parametreleri:

```
# Kategori filtresi
https://kasguide.de/?category=plajlar

# Arama
https://kasguide.de/?search=kaputas

# Kombinasyon
https://kasguide.de/?category=plajlar&search=turkuaz
```

---

## 🛠️ TEKNİK DETAYLAR

### Environment Variables:

```bash
# .env.local dosyası
POSTGRES_URL=postgresql://...     # Database connection
ADMIN_API_KEY=...                 # Admin panel key
```

### API Endpoints:

| Endpoint | Query Params | Response |
|----------|-------------|----------|
| `/api/places` | `slug`, `category`, `limit`, `offset` | `{places: [], count: N}` |
| `/api/hotels` | `slug`, `limit` | `{hotels: [], count: N}` |
| `/api/pets` | `limit` | `{pets: [], count: N}` |
| `/api/articles` | `limit` | `{articles: [], count: N}` |
| `/api/faqspecial` | - | `{faqSeries: []}` |
| `/api/faqs` | `series_id` | `{faqs: []}` |

### Database Connection:

```javascript
// db/connection.js
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false }
});

export default pool;
```

---

## 📈 İZLEME VE ANALİTİK

### Vercel Analytics:

1. Vercel Dashboard → Kasguide
2. Analytics sekmesi
3. Görüntüle:
   - Page views
   - API çağrıları
   - Response times
   - Errors

### Database Metrics:

1. Neon Dashboard
2. Monitoring sekmesi
3. Görüntüle:
   - Connection count
   - Query performance
   - Storage usage

---

## 🚨 SORUN GİDERME

### Frontend yüklenmiyor:

```bash
# Console'da kontrol et (F12)
# Network tab → API calls başarılı mı?

# Hata varsa logları kontrol et
vercel logs --follow
```

### API hata veriyor:

```bash
# Database bağlantısı test et
curl https://kasguide.de/api/places

# Lokal test
vercel dev
```

### Admin panel açılmıyor:

```bash
# API key doğru mu kontrol et
echo $ADMIN_API_KEY

# Vercel env variables kontrol et
vercel env ls
```

---

## 📞 Destek

Sorun yaşarsanız:
- GitHub Issues
- DEPLOYMENT_TESTING.md
- API_TESTING_GUIDE.md
- BULK_DATA_GUIDE.md (toplu veri için)

**Son Güncelleme:** 2024-12-29
