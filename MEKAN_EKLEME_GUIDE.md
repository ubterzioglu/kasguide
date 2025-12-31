# 🏪 MEKAN EKLEME GUIDE - SQL Yöntemi

## 📋 Hızlı Başlangıç

Bu guide ile **restoran, bar, cafe, meyhane** gibi mekanları database'e toplu ekleyebilirsiniz.

---

## 1️⃣ SQL Template (Kopyala-Değiştir-Çalıştır)

```sql
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
  'PLACE-001',                           -- 1. MEKAN NUMARASI (benzersiz olmalı)
  'place',                               -- 2. TİP (hep 'place')
  'Örnek Restoran',                      -- 3. MEKAN İSMİ (zorunlu)
  'ornek-restoran',                      -- 4. SLUG (URL-friendly isim)
  'Deniz manzaralı harika restoran',     -- 5. KISA AÇIKLAMA (opsiyonel)
  'Detaylı açıklama buraya. Kaş merkezde, harika manzara, taze balık...', -- 6. DETAYLI AÇIKLAMA (zorunlu)
  '+90 242 123 4567',                    -- 7. TELEFON (opsiyonel)
  'info@ornekrestoran.com',              -- 8. E-POSTA (opsiyonel)
  'https://ornekrestoran.com',           -- 9. WEBSITE (opsiyonel)
  '@ornekrestoran',                      -- 10. INSTAGRAM (opsiyonel)
  'Kaş Merkez',                          -- 11. KONUM (opsiyonel)
  'approved',                            -- 12. STATUS (approved/pending)
  '{"categories": ["restoran", "bar"], "price": "₺₺₺"}' -- 13. ÖZELLİKLER (JSONB)
);
```

---

## 2️⃣ Alan Açıklamaları

### ZORUNLU ALANLAR ⚠️

| Alan | Açıklama | Örnek |
|------|----------|-------|
| **item_number** | Benzersiz mekan numarası | `PLACE-001`, `PLACE-002`, `PLACE-BAR-SUNSET` |
| **item_type** | Her zaman `'place'` | `'place'` |
| **title** | Mekan ismi | `'Sunset Bar'`, `'Köşe Meyhane'` |
| **slug** | URL-friendly isim (Türkçe karakter yok) | `'sunset-bar'`, `'kose-meyhane'` |
| **long_text** | Detaylı açıklama (min 10 karakter) | `'Harika deniz manzarası...'` |
| **status** | `'approved'` (direkt yayınla) veya `'pending'` (onay bekle) | `'approved'` |

### OPSİYONEL ALANLAR

| Alan | Açıklama | Örnek | Boş Bırakma |
|------|----------|-------|-------------|
| **description** | Kısa açıklama (1-2 cümle) | `'Deniz kenarında romantik restoran'` | `NULL` |
| **phone** | Telefon numarası | `'+90 242 836 1234'` | `NULL` |
| **email** | E-posta | `'info@mekan.com'` | `NULL` |
| **website** | Web sitesi | `'https://mekan.com'` | `NULL` |
| **instagram** | Instagram kullanıcı adı | `'@mekanim'` veya `'mekanim'` | `NULL` |
| **location** | Konum bilgisi | `'Kaş Merkez'`, `'Küçükçakıl'` | `NULL` |

---

## 3️⃣ Kategoriler (attributes → categories)

### Mevcut Kategoriler:

```json
"categories": ["restoran"]          // Tek kategori
"categories": ["bar", "meyhane"]    // Çift kategori
"categories": ["cafe", "kahvalti", "restoran"]  // Üç kategori
```

### Kategori Listesi:

| Kategori ID | Açıklama | Emoji |
|-------------|----------|-------|
| `bar` | Bar | 🍸 |
| `meyhane` | Meyhane | 🥂 |
| `restoran` | Restoran | 🍽️ |
| `cafe` | Cafe | ☕ |
| `kahvalti` | Kahvaltı | 🥐 |
| `tarih` | Tarihi Yerler | 🏛️ |
| `doga` | Doğa | 🌿 |
| `dalis` | Dalış | 🤿 |
| `aktivite` | Aktivite | 🏄 |
| `etkinlik` | Etkinlik | 🎪 |
| `carsi` | Çarşı/Alışveriş | 🛍️ |
| `plaj` | Plaj | 🏖️ |
| `roportaj` | Röportaj | 🎙️ |
| `acildurum` | Acil Durum | 🚨 |

---

## 4️⃣ Fiyat Aralığı (attributes → price)

```json
"price": "₺"       // Ekonomik
"price": "₺₺"      // Orta
"price": "₺₺₺"     // Lüks
```

Boş bırakmak için: `"price": null` veya hiç yazma

---

## 5️⃣ Tam Attributes Örneği (JSONB)

### Minimal (Sadece Kategori):
```json
{"categories": ["restoran"]}
```

### Orta Detay:
```json
{
  "categories": ["restoran", "bar"],
  "price": "₺₺"
}
```

### Tam Detay:
```json
{
  "categories": ["restoran"],
  "price": "₺₺₺",
  "google_maps_query": "Sunset Restaurant Kaş",
  "booking_url": "https://rezervasyon.com/mekan",
  "facilities": ["wifi", "parking", "ac"],
  "features": ["deniz-manzara", "canlı-müzik"],
  "tags": ["romantik", "aile-dostu"]
}
```

---

## 6️⃣ Gerçek Örnek: Restoran Ekle

```sql
INSERT INTO items (
  item_number,
  item_type,
  title,
  slug,
  description,
  long_text,
  phone,
  instagram,
  location,
  status,
  attributes
) VALUES (
  'PLACE-SUNSET-BAR',
  'place',
  'Sunset Bar & Restaurant',
  'sunset-bar-restaurant',
  'Kaş''ın en iyi gün batımını izleyebileceğiniz yer',
  'Küçükçakıl plajında, denize sıfır konumda yer alan Sunset Bar, muhteşem gün batımı manzarası ve taze deniz ürünleriyle Kaş''ın vazgeçilmez mekanlarından. Canlı müzik ve kokteyl menüsüyle akşam saatlerinde romantik bir atmosfer sunar.',
  '+90 242 836 3456',
  '@sunsetbarkas',
  'Küçükçakıl Plajı',
  'approved',
  '{"categories": ["bar", "restoran"], "price": "₺₺₺", "features": ["deniz-manzara", "canlı-müzik"]}'
);
```

**Not:** Metinde tek tırnak `'` kullanıyorsan, SQL'de `''` (iki tek tırnak) yaz.

---

## 7️⃣ Toplu Ekleme (Çoklu INSERT)

Aynı anda birden fazla mekan ekle:

```sql
INSERT INTO items (item_number, item_type, title, slug, long_text, status, attributes)
VALUES
  ('PLACE-001', 'place', 'Köşe Meyhane', 'kose-meyhane', 'Geleneksel meyhane', 'approved', '{"categories": ["meyhane"]}'),
  ('PLACE-002', 'place', 'Balık Evi', 'balik-evi', 'Taze balık ve rakı', 'approved', '{"categories": ["restoran", "meyhane"], "price": "₺₺"}'),
  ('PLACE-003', 'place', 'Sunset Cafe', 'sunset-cafe', 'Kahve ve tatlı', 'approved', '{"categories": ["cafe"]}');
```

---

## 8️⃣ Slug Oluşturma Kuralları

Slug = URL-friendly mekan ismi

**Kurallar:**
1. Küçük harf
2. Türkçe karakterleri değiştir: ğ→g, ü→u, ş→s, ı→i, ö→o, ç→c
3. Boşlukları tire `-` yap
4. Özel karakterleri kaldır

**Örnekler:**
- `Köşe Meyhane` → `kose-meyhane`
- `Balık & Rakı Evi` → `balik-raki-evi`
- `Çınar Altı Cafe` → `cinar-alti-cafe`

---

## 9️⃣ Status Seçenekleri

| Status | Açıklama | Ne Zaman? |
|--------|----------|-----------|
| `approved` | Onaylandı, sitede görünür | Hemen yayınlamak için |
| `pending` | Onay bekliyor | Admin onayı gerekiyorsa |
| `active` | Aktif (approved ile aynı) | - |
| `rejected` | Reddedildi | Kullanma |

**Öneri:** `'approved'` kullan (direkt yayınla)

---

## 🔟 NULL (Boş) Değerler

Opsiyonel bir alanı boş bırakmak için:

```sql
-- Yöntem 1: NULL yaz
phone = NULL,
email = NULL,

-- Yöntem 2: Alanı tamamen çıkar
INSERT INTO items (item_number, title, slug, ...) -- phone yazmadık
VALUES ('PLACE-001', 'Mekan', 'mekan', ...);       -- phone değeri yok
```

---

## 1️⃣1️⃣ Hata Çözümü

### ❌ Hata: `duplicate key value violates unique constraint "items_item_number_key"`
**Çözüm:** `item_number` zaten kullanılmış. Yeni bir numara seç (`PLACE-004`, `PLACE-BAR-MERKEZ`, vb.)

### ❌ Hata: `duplicate key value violates unique constraint "items_slug_key"`
**Çözüm:** `slug` zaten kullanılmış. Farklı bir slug yaz (`sunset-bar-2`, `sunset-bar-merkez`, vb.)

### ❌ Hata: `null value in column "title" violates not-null constraint`
**Çözüm:** `title` zorunlu! Mekan ismini ekle.

### ❌ Hata: `invalid input syntax for type json`
**Çözüm:** `attributes` JSONB formatı yanlış. Tırnakları kontrol et: `{"categories": ["bar"]}`

---

## 1️⃣2️⃣ Şablon: Kopyala-Yapıştır

```sql
INSERT INTO items (item_number, item_type, title, slug, description, long_text, phone, instagram, location, status, attributes)
VALUES
(
  'PLACE-___',                    -- Buraya numara
  'place',
  '___',                          -- Buraya mekan ismi
  '___',                          -- Buraya slug
  '___',                          -- Buraya kısa açıklama (opsiyonel)
  '___',                          -- Buraya detaylı açıklama (ZORUNLU)
  '___',                          -- Buraya telefon (opsiyonel)
  '___',                          -- Buraya instagram (opsiyonel)
  'Kaş Merkez',                   -- Konum
  'approved',
  '{"categories": ["___"], "price": "₺₺"}'  -- Kategori buraya
);
```

---

## 1️⃣3️⃣ Database Bağlantısı

### Vercel Postgres kullanıyorsan:

```bash
# Terminal'de
npm install -g vercel
vercel login
vercel env pull
```

Sonra connection string'i `.env` dosyasından al ve psql ile bağlan:

```bash
psql "postgresql://username:password@host/database"
```

Veya Node.js script kullan:

```javascript
import sql from './db/connection.js';

await sql`
  INSERT INTO items (item_number, item_type, title, ...)
  VALUES ('PLACE-001', 'place', 'Mekan', ...)
`;
```

---

## ✅ Checklist

Mekan eklemeden önce:a

- [ ] `item_number` benzersiz mi?
- [ ] `slug` benzersiz mi?
- [ ] `title` dolduruldu mu? (ZORUNLU)
- [ ] `long_text` dolduruldu mu? (ZORUNLU)
- [ ] `categories` array doğru mu? Örn: `["restoran"]`
- [ ] JSONB tek tırnak `'` değil çift tırnak `"` kullanıyor mu?
- [ ] SQL'de tek tırnak varsa `''` (iki tane) yazdın mı?

---

**🎉 Artık hazırsın! Kopyala-değiştir-çalıştır!**
