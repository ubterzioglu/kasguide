# Kaş Guide - Data Template System

Bu template, yeni veri tipleri eklemek için hazır bir yapı sağlar. Tüm bağımlılıkları içinde barındıran, bağımsız bir sistemdir.

## 📋 İçindekiler

- **template.html** - Ana HTML template dosyası
- **template-style.css** - Stil dosyası (bağımsız, harici bağımlılık yok)
- **template-data.js** - Örnek veri yapısı ve dökümanlar
- **template-script.js** - JavaScript mantığı (arama, filtreleme, render)
- **example/** - Çalışan örnek uygulama
- **README.md** - Bu dosya

## 🚀 Hızlı Başlangıç

### 1. Template'i Kopyalayın

```bash
# Yeni bir veri tipi için template klasörünü kopyalayın
cp -r template/ museums/

# Veya Windows'da
xcopy template museums\ /E /I
```

### 2. Dosyaları Özelleştirin

#### A. HTML Dosyası (template.html)

```html
<!-- DATATYPE kelimesini veri tipinizle değiştirin -->
<title>Museums - Kaş Guide</title>

<!-- Kategorileri güncelleyin -->
<button class="filter-btn" data-category="historical">
  <span class="filter-icon">🏛️</span>
  <span class="filter-text">Tarihi Müzeler</span>
</button>
```

#### B. Veri Dosyası (template-data.js)

```javascript
window.templateData = [
  {
    id: 1,
    slug: 'kas-muzesi',
    title: 'Kaş Müzesi',
    description: 'Antik eserler sergisi',
    category: 'historical',
    image: '/assets/museums/kas-museum.jpg',
    rating: 4.5
  },
  // Daha fazla veri...
];
```

#### C. Kategoriler (template-data.js)

```javascript
window.templateCategories = [
  { slug: 'all', name: 'Tümü', icon: '🌟' },
  { slug: 'historical', name: 'Tarihi', icon: '🏛️' },
  { slug: 'modern', name: 'Modern', icon: '🎨' }
];
```

### 3. Renk ve Stil Özelleştirme

**template-style.css** dosyasında CSS değişkenlerini güncelleyin:

```css
:root {
  --primary-color: #0066cc;    /* Ana renk */
  --secondary-color: #ff6b35;   /* İkincil renk */
  --accent-color: #ffa726;      /* Vurgu rengi */
}
```

### 4. Test Edin

```bash
# example/ klasöründeki preview'i açın
open template/example/index.html
```

## 📊 Veri Yapısı

### Zorunlu Alanlar

```javascript
{
  id: 1,              // Benzersiz kimlik (number)
  slug: 'ornek',      // URL-dostu kimlik (string)
  title: 'Başlık',    // Görünen isim (string)
  description: '...',  // Kısa açıklama (string)
  category: 'cat1'    // Kategori (string)
}
```

### Opsiyonel Alanlar

```javascript
{
  // Görsel
  image: '/path/to/image.jpg',
  images: ['/img1.jpg', '/img2.jpg'],

  // Detaylar
  longDescription: 'Uzun açıklama...',
  rating: 4.5,        // 0-5 arası
  price: '₺₺',        // Fiyat göstergesi
  featured: true,     // Öne çıkarılsın mı?

  // Kategorizasyon
  categories: ['cat1', 'cat2'], // Birden fazla kategori
  tags: ['populer', 'yeni'],    // Etiketler

  // İletişim
  address: 'Kaş, Antalya',
  phone: '+90 555 123 4567',
  website: 'https://example.com',

  // Ek Bilgiler
  openingHours: '09:00 - 18:00',
  facilities: ['WiFi', 'Otopark'],

  // Tarihler
  createdAt: '2024-01-15',
  updatedAt: '2024-01-20'
}
```

## 🎨 Özelleştirme Seçenekleri

### Arama Ayarları

```javascript
window.templateConfig = {
  searchFields: ['title', 'description', 'tags'],
  searchMinLength: 2
};
```

### Sıralama

```javascript
window.templateConfig = {
  defaultSort: 'rating',  // 'rating', 'title', 'date'
  sortOrder: 'desc',      // 'asc' or 'desc'
  showFeaturedFirst: true
};
```

### Gösterim

```javascript
window.templateConfig = {
  itemsPerPage: 12,
  showRatings: true,
  showPrices: true
};
```

## 🔌 API Entegrasyonu

Statik veri yerine API kullanmak için:

### 1. template-data.js içinde API fonksiyonunu aktif edin:

```javascript
async function loadDataFromAPI() {
  const response = await fetch('/api/museums');
  const data = await response.json();
  window.templateData = data.items || data;
  initializeApp();
}

loadDataFromAPI();
```

### 2. template-script.js içinde gerekli güncellemeleri yapın:

```javascript
// loadData() fonksiyonunu API versiyonu ile değiştirin
```

## 📁 Klasör Yapısı

```
template/
├── template.html           # Ana HTML dosyası
├── template-style.css      # Stil dosyası
├── template-data.js        # Veri ve konfigürasyon
├── template-script.js      # JavaScript mantığı
├── README.md              # Döküman (bu dosya)
└── example/               # Çalışan örnek
    └── index.html         # Preview sayfası
```

## ✨ Özellikler

- ✅ Bağımsız ve taşınabilir
- ✅ Responsive tasarım
- ✅ Arama fonksiyonu
- ✅ Kategori filtreleme
- ✅ Çoklu kategori desteği
- ✅ Sıralama seçenekleri
- ✅ İstatistik görüntüleme
- ✅ Loading ve error states
- ✅ SEO dostu yapı
- ✅ Kolay özelleştirme
- ✅ API entegrasyonu hazır

## 🎯 Kullanım Senaryoları

### Senaryo 1: Statik Veri
Küçük, sık değişmeyen veri setleri için:
- Veriyi template-data.js içine yazın
- Doğrudan kullanıma hazır

### Senaryo 2: API ile Dinamik Veri
Büyük veya sık güncellenen veriler için:
- API endpoint oluşturun
- template-data.js içinde API entegrasyonunu aktif edin

### Senaryo 3: Hibrit Yaklaşım
İlk yükleme için statik, sonra API:
- Sayfa açılışta statik veri göster
- Arka planda API'den güncel veri çek
- Veriyi güncelle

## 🔧 İleri Seviye Özelleştirme

### Kart Tasarımını Değiştirme

**template-script.js** dosyasında `renderItem()` fonksiyonunu düzenleyin:

```javascript
function renderItem(item) {
  const card = document.createElement('div');
  card.className = 'item-card';

  card.innerHTML = `
    <!-- Kendi HTML yapınızı buraya ekleyin -->
    <div class="custom-card">
      <h3>${item.title}</h3>
      <!-- ... -->
    </div>
  `;

  return card;
}
```

### Özel Filtreleme Mantığı

```javascript
function customFilter(items, criteria) {
  return items.filter(item => {
    // Kendi filtreleme mantığınız
    return item.price === criteria.price &&
           item.rating >= criteria.minRating;
  });
}
```

### Event Handlers Ekleme

```javascript
function handleItemClick(item) {
  // Modal aç
  showModal(item);

  // Veya detay sayfasına git
  // window.location.href = `/detail/${item.slug}`;

  // Veya analytics kaydet
  // trackEvent('item_click', item.id);
}
```

## 🐛 Troubleshooting

### Problem: Veriler görünmüyor
**Çözüm:** Browser console'u kontrol edin. `window.templateData` tanımlı mı?

### Problem: Filtreleme çalışmıyor
**Çözüm:** Kategori slug'ları veri ve HTML'de eşleşiyor mu kontrol edin.

### Problem: Görseller yüklenmiyor
**Çözüm:** Görsel yollarının doğru olduğundan emin olun. Placeholder kullanın.

### Problem: Responsive görünmüyor
**Çözüm:** Viewport meta tag'i eklenmiş mi kontrol edin.

## 📚 Kaynaklar

- [Kaş Guide Ana Proje](/)
- [Vercel Deployment Guide](/DEPLOYMENT_GUIDE.md)
- [Database Integration](/DATABASE_SETUP.md)

## 📝 Lisans

© 2024 Kaş Guide. Tüm hakları saklıdır.

---

## 🎓 Örnek Projeler

Template kullanılarak oluşturulabilecek veri tipleri:

- 🏖️ Plajlar (beaches)
- 🍽️ Restoranlar (restaurants)
- 🏛️ Müzeler (museums)
- 🎭 Etkinlikler (events)
- 🏨 Oteller (hotels)
- 🚤 Aktiviteler (activities)
- 🛍️ Mağazalar (shops)
- 🌅 Gezilecek Yerler (places)

Her biri için:
1. Template'i kopyalayın
2. Veri yapısını özelleştirin
3. Stilleri ayarlayın
4. Deploy edin!

## 💡 İpuçları

1. **Performans:** 100'den fazla öğe için sayfalama ekleyin
2. **SEO:** Meta tagları ve açıklamaları güncelleyin
3. **Accessibility:** ARIA etiketlerini kontrol edin
4. **Images:** Lazy loading kullanın
5. **Cache:** API cevaplarını cache'leyin
6. **Error Handling:** Kullanıcı dostu hata mesajları ekleyin

---

**Yardım mı lazım?** [İletişim](/contact/contact.html)
