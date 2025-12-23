/*
Gezi : places
Plaj : beaches
Aktivite : activities
Yeme-İçme : food
Otel : hotels
Tarih : history
Doğa : nature
Çarşı : shopping
Kahvaltı : breakfast
Özel Soru Serileri : faqspecial
Meyhane : meyhane
Bar : bar
Cafe : cafe
Dalış : diving
Yazılar : articles
*/


const allPlaces = [

{
  id: 'nereid-meyhanesi',
  title: 'Nereid Meyhanesi',
  description: 'Kaş merkezde, Ege & Akdeniz meyhane mutfağını “sahne” atmosferiyle birleştiren; meze, deniz ürünleri ve uzun sohbet sofralarıyla öne çıkan akşam yemeği noktası.',
  category: ['meyhane', 'food'],

  // Kapak görseli: telifsiz placeholder (içerik fotoğraflarını sonradan sen ekleyebilirsin)
  image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200',

  // Galeri: telifsiz placeholder (istersen gerçek mekan foto linklerini sonra ekleriz)
  images: [
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=1600',
    'https://images.unsplash.com/photo-1555992336-03a23c7b20b0?w=1600',
    'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1600',
    'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=1600'
  ],

  // Not: puan/fiyat bilgisi platforma göre değişebilir; burada “rehber” formatında ortalama değer.
  rating: 4.5,
  price: '₺₺₺',
  selected: false,

  location: 'Andifli Mah., Süleyman Sandıkçı Sk. No:8, Kaş/Antalya (Uzun Çarşı çevresi)',
  distance: 'Merkez',
  coordinates: { lat: 36.199052, lng: 29.642533 },

  website: 'https://nereidmeyhanesi.com/',
  phone: '+90 542 836 34 74',
  duration: '2–3 saat',

  facilities: [
    'Akşam yemeği',
    'Meze çeşitleri',
    'Deniz ürünleri',
    'Alkollü servis',
    'Masa servisi',
    'Rezervasyon önerilir',
    'Canlı müzik / sahne (bazı geceler)',
    'Kart ile ödeme'
  ],

  features: [
    'Ege & Akdeniz mutfağı',
    'Meyhane kültürü + “sahne” konsepti',
    'Sohbet odaklı sakin atmosfer (geceye göre değişebilir)',
    'Merkezde, yürüyerek ulaşım',
    'Yaz sezonunda yoğunluk artar'
  ],

  tags: [
    'meyhane',
    'rakı-balık',
    'meze',
    'deniz ürünleri',
    'canlı müzik',
    'kaş merkez',
    'uzun çarşı'
  ],

  trust: {
    verified: true,
    infoDate: '2025-12-23',
    disclaimer: true
  },

  longText: `
Nereid Meyhanesi, Kaş merkezde (Uzun Çarşı çevresinde) “meyhane” akşamı yapmak isteyenlerin listesine sık giren bir adres. Mekânın kimliği iki ana çizgide toplanıyor: bir yanda Ege & Akdeniz mutfağına dayanan meze/deniz ürünü ağırlığı, diğer yanda ise bazı akşamlarda devreye giren “sahne” havası (canlı performanslar, özel programlar vb.). Bu yüzden Nereid, hem “uzun sofrada sakin sohbet” arayana hem de “yemeğin üstüne hafif bir müzik olsun” diyenlere hitap edebiliyor.

Atmosfer ve oturma düzeni:
- Kaş’ta meyhane denince beklenen “uzun oturuş” ritmine uygun: acele etmeden, masada yavaş yavaş ilerleyen bir akşam.
- Akşam saatlerinde hareketlenir; sezon yoğunluğunda masalar daha hızlı dolar.
- Kalabalık gruplar için (özellikle yaz aylarında) rezervasyon işleri rahatlatır.

Menü yaklaşımı (genel çerçeve):
Nereid’de ana karakter mezeler. Soğuk-sıcak meze dengesi; zeytinyağlılar, deniz ürünü tabakları ve mevsime göre değişen seçenekler öne çıkar. Bazı ürünler günlük tedarike bağlı olduğu için, her gün aynı şeyi bulamayabilirsin — bu aslında “taze ve güncel” çalışan meyhanelerde sık görülen bir durum. Eğer masada net aradığın bir lezzet varsa (ör. belli bir deniz ürünü), gitmeden önce telefonla sormak iyi olur.

Sahne/müzik geceleri:
Mekânın “sahne” tarafı her gece aynı yoğunlukta olmayabilir; bazen daha sakin bir meyhane akşamı olurken bazen canlı performans programları öne çıkar. Eğer “tam sessizlik” istiyorsan haftanın günü/saatine göre plan yapmak mantıklı. Tam tersine, “biraz canlılık olsun” diyorsan sahne programını web sitesinden/Instagram’dan kontrol ederek gidebilirsin.

Kimler için daha uygun?
- Kaş merkezde yürüyerek gidip, uzun uzun meze atıştırıp sohbet etmek isteyenler,
- “Rakı-balık-meze” çizgisini seven ama aşırı gürültülü kulüp atmosferi aramayanlar,
- Kaş’ta akşamı tek bir mekânda ‘oturarak’ değerlendirmek isteyen çiftler ve arkadaş grupları.

Pratik ipuçları:
- Yaz sezonunda 20:00 sonrası doluluk artabilir; erken gitmek daha rahat bir masa demek.
- Sahne olan gecelerde “sohbet” tonu ile “müzik” tonu dengesi değişebilir; beklentine göre planla.
- Kaş merkezde olduğu için park konusu sezonda zorlayabilir; yürüyerek/ kısa taksiyle ulaşım daha az stresli olur.

Kısa özet:
Nereid Meyhanesi, Kaş’ta klasik meyhane hissini modern bir “sahne” dokunuşuyla birleştiren bir akşam yemeği noktası. Meze ağırlıklı bir masa kurup, Kaş gecesini uzatmak istiyorsan güçlü bir aday.
  `
},


];
