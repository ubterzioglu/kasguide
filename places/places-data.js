const allPlaces = [

// Tamamlandı! 2025 – Nereid Meyhanesi
{
  id: 'nereid-meyhanesi',
  title: 'Nereid Meyhanesi',
  description: 'Kaş merkezde yer alan, klasik meyhane kültürünü modern dokunuşlarla sunan, sakin ve keyifli bir akşam yemeği noktası.',
  category: ['food', 'places'],

  // Mevcut tek görsel (fallback olarak kalsın)
  image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200',

  // YENİ: Hero slider görselleri (1+)
  images: [
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=1600',
    'https://images.unsplash.com/photo-1555992336-03a23c7b20b0?w=1600',
    'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1600'
  ],

  rating: 4.6,
  price: '₺₺₺',
  selected: false,

  location: 'Kaş merkez, Uzun Çarşı çevresi',
  distance: 'Merkez',
  coordinates: { lat: 36.1989, lng: 29.6362 },
  website: '',
  phone: '',
  duration: '2–3 saat',

  facilities: [
    'Akşam yemeği',
    'Meze çeşitleri',
    'Alkollü servis',
    'Masa servisi',
    'Rezervasyon önerilir'
  ],

  features: [
    'Klasik meyhane kültürü',
    'Sakin atmosfer',
    'Yerel ve taze ürünler',
    'Uzun akşam yemekleri'
  ],

  tags: [
    'meyhane',
    'rakı-balık',
    'akşam yemeği',
    'kaş merkez'
  ],

  trust: {
    verified: true,
    infoDate: '2025',
    disclaimer: true
  },

  longText: `
Nereid Meyhanesi, Kaş merkezde klasik meyhane anlayışını benimseyen ve bunu sade bir atmosferle sunan mekanlardan biridir...
  `
},

{
  id: 'kaputas',
  title: 'Kaputaş Plajı',
  description: 'Turkuaz suları ve beyaz kumsalıyla ünlü muhteşem plaj. Kaş ile Kalkan arasında 187 merdiven inilerek ulaşılıyor.',
  category: ['beaches', 'places', 'nature'],
  image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200',

  // İstersen buraya da ekle, eklemezsen image tek foto olarak kullanılır.
  // images: ['...','...'],

  rating: 4.9,
  price: 'Ücretsiz',
  selected: false,
  trust: { verified: true, infoDate: '2025', disclaimer: true },
  location: 'Kaş-Kalkan yolu üzeri',
  distance: '20 km',
  coordinates: { lat: 36.2542, lng: 29.2991 },
  website: '',
  phone: '',
  duration: '3-5 saat',
  facilities: ['Ücretsiz Giriş', 'Kantin', 'Duş', 'WC', 'Şezlong', 'Şemsiye'],
  features: ['Ücretsiz Giriş', 'Kantin', 'Duş', 'WC'],
  tags: ['turkuaz', 'kumsal', 'merdiven', 'populer']
}

];
