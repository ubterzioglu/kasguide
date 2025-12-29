/*
  KAŞGUIDE HOTELS - DATA FILE
  Bu dosya Kaş'taki otellerin verilerini içerir
  
  Hotel Types:
  - butik: Butik Otel
  - aile: Aile Oteli
  - luks: Lüks Otel
  - pansiyon: Pansiyon
  - apart: Apart Otel
  - hostel: Hostel
  - villa: Villa
  
  Facilities:
  - pool, spa, gym, restaurant, bar, beach, wifi, ac, parking
  - garden, seaview, breakfast, petfriendly, transfer, terrace, kids
*/

const allHotels = [
  /* ÖRNEK OTEL - Bu template'i kopyalayarak yeni oteller ekleyin */
  {
    id: 'ornek-otel-1',
    
    // Temel Bilgiler
    title: 'Mavi Deniz Butik Otel',
    hotelType: 'butik',  // butik, aile, luks, pansiyon, apart, hostel, villa
    starRating: '4',     // 1-5 arası veya 'yok'
    roomCount: 12,
    capacity: 30,
    
    // Konum
    location: 'Kaş Merkez',
    distanceToSea: '50 metre',
    coordinates: { lat: 36.2015, lng: 29.6401 },
    
    // Açıklamalar
    description: 'Kaş merkezde, denize sıfır konumda butik bir otel. Modern tasarım, sıcak hizmet ve mükemmel kahvaltısıyla öne çıkıyor.',
    longText: `Mavi Deniz Butik Otel, Kaş'ın kalbinde, denize sıfır konumuyla misafirlerini ağırlıyor. 
12 odası ve 30 kişilik kapasitesiyle samimi bir atmosfer sunuyor.

Her odamız deniz manzaralı, klimalı ve modern olarak döşenmiştir. Sabah kahvaltımız özenle hazırlanır 
ve yerel lezzetlerle doludur.

Teras bar'ımızda gün batımını izleyebilir, havuzumuzda serinleyebilirsiniz. Kaş'ın en iyi konumunda, 
her yere yürüme mesafesinde olan otelimiz, unutulmaz bir tatil için ideal.`,
    
    // Fotoğraflar
    image: './assets/hotels/mavi-deniz/mavi-deniz-001.jpg',
    images: [
      './assets/hotels/mavi-deniz/mavi-deniz-001.jpg',
      './assets/hotels/mavi-deniz/mavi-deniz-002.jpg',
      './assets/hotels/mavi-deniz/mavi-deniz-003.jpg',
      './assets/hotels/mavi-deniz/mavi-deniz-004.jpg'
    ],
    
    // Tesisler & Hizmetler
    facilities: [
      'pool',         // Havuz
      'restaurant',   // Restoran
      'bar',          // Bar
      'wifi',         // WiFi
      'ac',           // Klima
      'terrace',      // Teras
      'seaview',      // Deniz Manzarası
      'breakfast'     // Kahvaltı
    ],
    
    // Fiyat & Rezervasyon
    priceRange: 'mid',  // budget, mid, high, luxury
    checkinTime: '14:00',
    checkoutTime: '11:00',
    
    // İletişim
    phone: '+90 555 123 45 67',
    email: 'info@mavidenizhotel.com',
    website: 'https://mavidenizhotel.com',
    instagram: '@mavidenizhotel',
    booking: 'https://booking.com/hotel/mavi-deniz',
    googleMapsQuery: 'Mavi Deniz Butik Otel Kaş',
    
    // Ek Bilgiler (opsiyonel)
    tags: ['butik', 'deniz manzarası', 'merkez', 'havuzlu'],
    rating: 4.8,
    reviewCount: 156,
    
    // Trust Badge
    trust: {
      verified: true,
      infoDate: '2025-12',
      disclaimer: true
    }
  },
  
  /*
  
  YENİ OTEL EKLERKEN:
  
  1. Yukarıdaki template'i kopyalayın
  2. id'yi benzersiz yapın (örn: 'otel-adi-kas')
  3. Tüm bilgileri doldurun
  4. Fotoğraf dosyalarını ./assets/hotels/[otel-adi]/ klasörüne koyun
  5. facilities array'ine uygun değerleri ekleyin:
     - pool, spa, gym, restaurant, bar, beach
     - wifi, ac, parking, garden, seaview
     - breakfast, petfriendly, transfer, terrace, kids
  6. priceRange: budget | mid | high | luxury
  7. hotelType: butik | aile | luks | pansiyon | apart | hostel | villa
  8. starRating: '1' | '2' | '3' | '4' | '5' | 'yok'
  
  */

];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { allHotels };
}
