# Placeholder Fotoğraf Ekleme Rehberi

Bu rehber, mekanlara geçici (placeholder) fotoğrafların toplu olarak nasıl ekleneceğini açıklar.

## 📝 Amaç

SQL ile toplu eklenen mekanlarda fotoğraf olmadığı için kartlar boş görünüyor. Bu script ile:
- Tüm fotoğrafsız mekanlara geçici Kaş fotoğrafları eklenecek
- 10 fotoğraf döngüsel olarak atanacak (1,2,3...10,1,2,3...)
- Sonradan gerçek fotoğraflar tek tek eklenecek

## 🚀 Kullanım Adımları

### 1️⃣ Kaş Fotoğrafları Bul

10 adet Kaş fotoğrafı bul ve bir yere upload et:

**Önerilen kaynaklar:**
- **Unsplash**: https://unsplash.com/s/photos/kas-turkey
- **Pexels**: https://www.pexels.com/search/kas%20turkey/
- **Imgur**: Kendi fotoğraflarını yükle
- **Vercel Blob**: Proje blob storage'ına yükle

**Örnek URL formatı:**
```
https://images.unsplash.com/photo-1234567890?w=1200
https://i.imgur.com/abc123.jpg
https://xyz.blob.vercel-storage.com/kas-1.jpg
```

### 2️⃣ Script'i Düzenle

`scripts/bulk-add-placeholder-photos.js` dosyasını aç ve **PLACEHOLDER_URLS** array'ini doldur:

```js
const PLACEHOLDER_URLS = [
  'https://images.unsplash.com/photo-kas-beach-1?w=1200',
  'https://images.unsplash.com/photo-kas-harbor-2?w=1200',
  'https://images.unsplash.com/photo-kas-sunset-3?w=1200',
  'https://i.imgur.com/kas-restaurant.jpg',
  'https://i.imgur.com/kas-cafe.jpg',
  'https://i.imgur.com/kas-bar.jpg',
  'https://i.imgur.com/kas-beach.jpg',
  'https://i.imgur.com/kas-hotel.jpg',
  'https://i.imgur.com/kas-street.jpg',
  'https://i.imgur.com/kas-view.jpg',
];
```

### 3️⃣ Ayarları Kontrol Et

Script'te şu ayarları değiştirebilirsin:

```js
const OPTIONS = {
  // Hangi tip item'lara eklensin?
  itemType: 'place',  // 'place', 'pet', 'hotel', 'artist', ya da null (hepsi)

  // Sadece approved item'lar mı?
  onlyApproved: true,

  // Test modu (değişiklik yapmaz, sadece gösterir)
  dryRun: false,
};
```

### 4️⃣ İlk Önce Test Et (Dry Run)

```bash
# Test modda çalıştır (veritabanına dokunmaz)
# Script'te dryRun: true yap ve çalıştır
node scripts/bulk-add-placeholder-photos.js
```

**Çıktı örnek:**
```
🖼️  Bulk Placeholder Photo Assignment

Configuration:
  - Item type: place
  - Only approved: true
  - Dry run: true
  - Placeholder photos: 10

📊 Found 47 items without photos

Sample items:
  1. [PLACE-001] Sunset Bar & Grill (place)
  2. [PLACE-002] Balık Evi (place)
  3. [PLACE-003] Kahvaltı Dünyası (place)
  ... and 44 more

[DRY RUN] Would update PLACE-001: Photo 1/10
[DRY RUN] Would update PLACE-002: Photo 2/10
...

🔍 DRY RUN COMPLETE - No changes made
Would have updated 47 items
```

### 5️⃣ Gerçek Çalıştırma

Test sonucu iyi görünüyorsa:

```bash
# Script'te dryRun: false yap
node scripts/bulk-add-placeholder-photos.js
```

**Çıktı:**
```
✅ Updated PLACE-001 (Sunset Bar & Grill): Photo 1/10
✅ Updated PLACE-002 (Balık Evi): Photo 2/10
✅ Updated PLACE-003 (Kahvaltı Dünyası): Photo 3/10
...

✅ COMPLETE
Updated: 47 items
```

## 🎯 Sonuç

Tüm fotoğrafsız mekanlara placeholder atandı! Artık:
- Ana sayfada kartlar boş görünmeyecek
- Detay sayfalarında geçici fotoğraf olacak
- Sonradan gerçek fotoğraflar tek tek eklenebilir

## 🔄 Gerçek Fotoğrafları Nasıl Eklerim?

### Yöntem 1: Admin Panelden
```
/admin → Item bul → Edit → Fotoğraf upload → Save
```

### Yöntem 2: SQL UPDATE
```sql
UPDATE items
SET photos = '[
  {"url": "https://real-photo-url.jpg", "sequence": 0}
]'::jsonb
WHERE item_number = 'PLACE-001';
```

### Yöntem 3: Bulk Upload Script (Gelecek)
Klasördeki fotoğrafları toplu yükleyen script yazılabilir.

## 📊 Placeholder Kontrolü

Placeholder olan fotoğrafları listele:

```sql
-- Placeholder işaretli fotoğrafları bul
SELECT
  item_number,
  title,
  photos
FROM items
WHERE photos::text LIKE '%"placeholder": true%';
```

## 🧹 Tüm Placeholder'ları Temizle

```sql
-- Placeholder fotoğrafları kaldır
UPDATE items
SET photos = '[]'::jsonb
WHERE photos::text LIKE '%"placeholder": true%';
```

## ⚠️ Önemli Notlar

1. **URL'ler geçerli olmalı**: Ölü link kullanma, fotoğraflar yüklenmez
2. **10 fotoğraf öneriliyor**: Daha fazla veya az olabilir ama 10 ideal
3. **Döngüsel atama**: 50 mekan varsa, her fotoğraf ~5 mekanda kullanılır
4. **Placeholder işareti**: Script otomatik `"placeholder": true` ekler
5. **Sonradan değiştirilebilir**: Gerçek fotoğraflar eklenince placeholder silinir

## 🎨 Fotoğraf Önerileri

Çeşitlilik için farklı temalar seç:
- Kaş plajları (2-3)
- Kaş limanı (1-2)
- Restoran/cafe dış mekan (2-3)
- Gün batımı (1-2)
- Kaş sokakları (1-2)

**Fotoğraf boyutu:** Min 1200px genişlik (responsive için)
**Format:** JPG veya WEBP (PNG ağır olur)

---

**Sorular?** Script hatası varsa:
- `console.log()` ekle debug için
- `dryRun: true` ile test et
- Database backup al önemli işlemlerden önce
