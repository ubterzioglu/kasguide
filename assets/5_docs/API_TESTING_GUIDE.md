# 🧪 API TEST REHBERİ

## 📋 Mevcut API Endpoint'leri

Aşağıdaki API'ler hazır ve kullanıma hazır:

| Endpoint | Metod | Açıklama | Veri Sayısı |
|----------|-------|----------|-------------|
| `/api/places` | GET | Tüm yerler | ~353 |
| `/api/hotels` | GET | Oteller | ~1 |
| `/api/pets` | GET | Evcil hayvan dostu yerler | ~2 |
| `/api/articles` | GET | Makaleler | ~2 |
| `/api/faqspecial` | GET | SSS serileri | ~1 |
| `/api/faqs` | GET | Soru-Cevaplar | ~500 |

---

## 🔍 1. LOKAL TEST (Geliştirme Ortamı)

### Gereksinimler:
```bash
# Node.js kurulu olmalı
node --version  # v16+ olmalı

# Dependencies yüklü olmalı
npm install

# .env.local dosyası oluşturulmuş olmalı
cp .env.example .env.local
# Gerçek değerleri .env.local'e gir
```

### Vercel Dev Sunucusu ile Test:

```bash
# Vercel CLI kur (yoksa)
npm i -g vercel

# Dev sunucusu başlat
vercel dev
```

Tarayıcıda şu URL'leri test et:
- http://localhost:3000/api/places
- http://localhost:3000/api/hotels
- http://localhost:3000/api/pets

---

## 🌐 2. VERCEL PREVIEW TEST (Claude Branch)

### Preview URL Bulma:

1. GitHub'a commit push et
2. Vercel Dashboard → Deployments
3. "claude/audit-dependencies..." branch'inden deployment bul
4. Preview URL'ini kopyala

**Örnek Preview URL:**
```
https://kasguide-abc123.vercel.app
```

### API Test URL'leri:

```bash
# Places API
https://kasguide-[preview-id].vercel.app/api/places

# Single place by slug
https://kasguide-[preview-id].vercel.app/api/places?slug=kaputas-plaji

# Filter by category
https://kasguide-[preview-id].vercel.app/api/places?category=plajlar

# Hotels API
https://kasguide-[preview-id].vercel.app/api/hotels

# Pets API
https://kasguide-[preview-id].vercel.app/api/pets

# Articles API
https://kasguide-[preview-id].vercel.app/api/articles

# FAQ Special API
https://kasguide-[preview-id].vercel.app/api/faqspecial

# FAQs API
https://kasguide-[preview-id].vercel.app/api/faqs
```

---

## 📊 3. EXPECTED RESPONSES (Beklenen Cevaplar)

### ✅ Başarılı Response - Places:

```json
{
  "places": [
    {
      "id": 1,
      "slug": "kaputas-plaji",
      "title": "Kaputaş Plajı",
      "description": "Turkuaz sularıyla ünlü...",
      "long_text": "Detaylı açıklama...",
      "badge_emoji": "🏖️",
      "badge_title": "Plaj",
      "rating": 4.8,
      "price": null,
      "images": [
        "/assets/places/kaputas1.jpg",
        "/assets/places/kaputas2.jpg"
      ],
      "categories": ["plajlar", "populer"]
    }
  ],
  "count": 353
}
```

### ✅ Başarılı Response - Single Place:

```json
{
  "id": 1,
  "slug": "kaputas-plaji",
  "title": "Kaputaş Plajı",
  "description": "...",
  "images": [...],
  "categories": [...]
}
```

### ❌ Error Response - Place Not Found:

```json
{
  "error": "Place not found"
}
```

### ❌ Error Response - Server Error:

```json
{
  "error": "Internal server error"
}
```

---

## 🛠️ 4. CURL İLE TEST

### Basit Test:

```bash
# Places API
curl https://your-preview-url.vercel.app/api/places

# Pretty print JSON
curl https://your-preview-url.vercel.app/api/places | jq '.'

# Sadece count göster
curl https://your-preview-url.vercel.app/api/places | jq '.count'

# İlk 3 place'i göster
curl https://your-preview-url.vercel.app/api/places | jq '.places[0:3]'
```

### Single Place Test:

```bash
curl "https://your-preview-url.vercel.app/api/places?slug=kaputas-plaji"
```

### Filter Test:

```bash
curl "https://your-preview-url.vercel.app/api/places?category=plajlar"
```

---

## 🧪 5. BROWSER CONSOLE İLE TEST

Tarayıcıda F12 basıp Console'a şunu yazın:

```javascript
// Places API test
fetch('/api/places')
  .then(res => res.json())
  .then(data => {
    console.log('Total places:', data.count);
    console.log('First place:', data.places[0]);
  });

// Single place test
fetch('/api/places?slug=kaputas-plaji')
  .then(res => res.json())
  .then(data => console.log('Place:', data));

// Hotels test
fetch('/api/hotels')
  .then(res => res.json())
  .then(data => console.log('Hotels:', data));
```

---

## ✅ 6. TEST CHECKLIST

### API Functionality:
- [ ] `/api/places` returns data (count > 0)
- [ ] `/api/places?slug=X` returns single place
- [ ] `/api/places?category=X` filters correctly
- [ ] `/api/hotels` returns data
- [ ] `/api/pets` returns data
- [ ] `/api/articles` returns data
- [ ] `/api/faqspecial` returns data
- [ ] `/api/faqs` returns data

### Frontend Integration:
- [ ] Ana sayfa yükleniyor
- [ ] Kartlar görünüyor
- [ ] Arama çalışıyor
- [ ] Kategori filtreleri çalışıyor
- [ ] İstatistikler doğru
- [ ] Console'da hata yok

### Performance:
- [ ] API response time < 1 saniye
- [ ] Sayfa load time < 3 saniye
- [ ] No 500 errors
- [ ] No timeout errors

---

## 🐛 7. COMMON ISSUES (Yaygın Sorunlar)

### Problem: API returns empty array

**Çözüm:**
- Database'e veri import edildi mi kontrol et
- Neon database erişilebilir mi kontrol et
- POSTGRES_URL doğru mu?

```bash
# Database connection test
node -e "const {Pool} = require('pg'); const pool = new Pool({connectionString: process.env.POSTGRES_URL}); pool.query('SELECT COUNT(*) FROM places').then(r => console.log('Places:', r.rows[0].count));"
```

### Problem: 500 Internal Server Error

**Çözüm:**
- Vercel logs kontrol et: `vercel logs`
- Database connection string doğru mu?
- Environment variables set edilmiş mi?

### Problem: CORS error

**Çözüm:**
- API endpoint'lerinde CORS headers var
- Başka bir origin'den test ediyorsanız CORS ekleyin

---

## 📱 8. PRODUCTION TEST (Canlıya Geçtikten Sonra)

**⚠️ ŞU AN YAPMAYIN! Henüz canlıya geçilmedi.**

Canlıya geçince:

```bash
# Production URL
https://www.kasguide.de/api/places

# Test et
curl https://www.kasguide.de/api/places | jq '.count'
```

---

## 📞 Yardım

Test sırasında sorun yaşarsanız:
- Vercel logs: `vercel logs --follow`
- Database logs: Neon dashboard
- Browser console: F12 → Network tab

**Son Güncelleme:** 2024-12-29
