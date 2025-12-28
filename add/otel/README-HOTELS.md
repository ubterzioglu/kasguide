# 🏨 Kaş Guide Hotels - Kurulum Rehberi

Otellere özel mekan ekleme sisteminiz hazır! Bu dosyalar mevcut **Kaş Guide** altyapınıza entegre edilecek.

---

## 📦 Paket İçeriği

### Frontend Dosyaları:
1. **add-hotel.html** - Otel ekleme formu
2. **add-hotel.css** - Premium otel teması CSS
3. **example-hotel.html** - Önizleme sayfası
4. **example-hotel.css** - Önizleme sayfası CSS
5. **example-hotel.js** - Önizleme sayfası JavaScript
6. **hotels-data.js** - Veri dosyası şablonu

### Backend Dosyası:
7. **hotel-submit.js** - API endpoint (Next.js/Vercel)

---

## 🚀 Kurulum Adımları

### 1. Frontend Kurulumu

```bash
# Dosyaları projenize kopyalayın
cp add-hotel.html /proje/pages/hotels/
cp add-hotel.css /proje/pages/hotels/
cp example-hotel.html /proje/pages/hotels/example-hotel/
cp example-hotel.css /proje/pages/hotels/example-hotel/
cp example-hotel.js /proje/pages/hotels/example-hotel/
cp hotels-data.js /proje/data/
```

### 2. Backend Kurulumu (Next.js API)

```bash
# API endpoint'i oluşturun
cp hotel-submit.js /proje/pages/api/
```

### 3. Çevre Değişkenleri (.env)

```env
# SMTP ayarları (mevcut olanlara ekleme yapın)
SMTP_HOST=mail.kasguide.de
SMTP_PORT=465
SMTP_USER=noreply@kasguide.de
SMTP_PASS=********

# Otel başvurularının gideceği mail
HOTEL_MAIL_TO=hotels@kasguide.de
```

---

## 🎨 Özellikler

### Form Özellikleri:
✅ Otel-spesifik alanlar (tip, yıldız, oda sayısı, kapasite)
✅ Tesisler & hizmetler seçimi (havuz, spa, gym, vb.)
✅ Fiyat aralığı seçimi
✅ Check-in/out saatleri
✅ 5 fotoğraf yükleme (2MB limit)
✅ Önizleme özelliği
✅ Responsive tasarım

### Tasarım:
🎨 Premium mor-mavi gradient teması
🎨 Modern, profesyonel görünüm
🎨 Otel sahiplerine güven veren tasarım
🎨 Mobil uyumlu

### Backend:
📧 Otel-spesifik mail template
📧 Fotoğraf ekleri
📧 Validasyon
📧 Hata yönetimi

---

## 📝 Kullanım

### Otellere Mail Göndermek İçin:

1. Mail şablonunu hazırlayın:
```
Konu: Kaş Guide'da Ücretsiz Otel Listesi

Merhaba [Otel Adı],

Kaş'taki otellerin resmi rehberi olmayı hedefleyen Kaş Guide'da 
otelinizi tamamen ücretsiz listeleyebilirsiniz.

✅ Ücretsiz listeleme
✅ Direkt rezervasyon linkleri
✅ Instagram & web sitesi entegrasyonu
✅ Tesis özelliklerinizi detaylı tanıtma

Form linki: https://kasguide.de/hotels/add-hotel.html

Saygılarımızla,
Kaş Guide Ekibi
```

2. Otelleri arayıp davet edin
3. Başvurular `hotels@kasguide.de` adresine gelecek
4. İnceledikten sonra `hotels-data.js`'ye manuel ekleyin

---

## 🔧 Özelleştirme

### Renk Teması Değiştirmek:

`add-hotel.css` dosyasında:
```css
:root {
  --hotel-primary: #6366f1;     /* Ana renk */
  --hotel-secondary: #8b5cf6;   /* İkinci renk */
  --hotel-accent: #ec4899;      /* Vurgu rengi */
}
```

### Form Alanları Eklemek/Çıkarmak:

1. `add-hotel.html` dosyasından ilgili form-group'u ekleyin/çıkarın
2. `hotel-submit.js` dosyasında field'ı ekleyin/çıkarın
3. `example-hotel.js` dosyasında preview'a ekleyin/çıkarın

### Tesisler Eklemek:

`add-hotel.html` dosyasında category-grid içine:
```html
<div class="category-option">
  <input type="checkbox" id="fac-sauna" name="facilities" value="sauna" class="category-checkbox">
  <label for="fac-sauna" class="category-label">
    <span class="category-icon">🧖</span>
    <span class="category-name">Sauna</span>
  </label>
</div>
```

---

## 📊 Veri Yapısı

### hotels-data.js Örneği:

```javascript
{
  id: 'otel-adi',
  title: 'Otel Adı',
  hotelType: 'butik',      // butik, aile, luks, pansiyon, apart, hostel, villa
  starRating: '4',         // 1-5 arası veya 'yok'
  roomCount: 12,
  capacity: 30,
  location: 'Kaş Merkez',
  distanceToSea: '50 metre',
  description: 'Kısa açıklama',
  longText: 'Detaylı açıklama',
  facilities: ['pool', 'wifi', 'breakfast'],
  priceRange: 'mid',       // budget, mid, high, luxury
  checkinTime: '14:00',
  checkoutTime: '11:00',
  phone: '+90 555 123 45 67',
  email: 'info@otel.com',
  website: 'https://otel.com',
  instagram: '@otel',
  booking: 'https://booking.com/...',
  images: ['foto1.jpg', 'foto2.jpg']
}
```

---

## 🎯 Sonraki Adımlar

1. ✅ Dosyaları projenize entegre edin
2. ✅ Test edin (localhost'ta)
3. ✅ Mail şablonunu hazırlayın
4. ✅ Kaş'taki otellere mail gönderin
5. ✅ Gelen başvuruları inceleyin
6. ✅ `hotels-data.js`'ye ekleyin
7. ✅ Siteyi yayınlayın!

---

## 💡 Öneriler

### Mail Stratejisi:
- Küçük butik otellerle başlayın (daha responsive)
- Instagram'dan da ulaşın
- "Ücretsiz + direkt rezervasyon" vurgusunu yapın
- Örnek bir otel sayfası gösterin

### Hedef Kitle:
1. Butik oteller (15-30 oda)
2. Aile işletmeleri
3. Küçük pansiyonlar
4. Apart oteller

### Beklenti:
- İlk 10 otel: 2 hafta içinde
- 30+ otel: 2 ay içinde
- 50+ otel: Sezon başında

---

## 🐛 Sorun Giderme

### "Mail gönderilmiyor"
- SMTP ayarlarını kontrol edin
- Firewall/Port kontrolü yapın
- Logs'u inceleyin

### "Fotoğraflar yüklenmiyor"
- 2MB limiti kontrol edin
- MIME type kontrolü yapın
- Server upload limit kontrol edin

### "Önizleme çalışmıyor"
- localStorage enabled mi kontrol edin
- Console errors kontrol edin
- example-hotel.js yolu doğru mu kontrol edin

---

## 📞 Destek

Herhangi bir sorun yaşarsanız:
- GitHub Issues açın
- hello@kasguide.de adresine yazın

---

**Başarılar! 🎉**

Kaş Guide Hotels ekibi olarak, Kaş'taki tüm otelleri platformunuza kazandırmanızı umuyoruz!
