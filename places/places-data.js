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
  id: 'bunbun-kas',
  title: 'Bunbun Kaş',
  description: 'Taze kahve, iyi sandviçler ve tatlılarla; günün her saati uğranabilen, rahat ve modern bir kafe.',
  category: ['cafe', 'breakfast', 'food'],

  image: '../assets/0_img/bunbun-kas_001_kapak.jpg',
  images: [
    '../assets/0_img/bunbun-kas_002.jpg',
    '../assets/0_img/bunbun-kas_003.jpg',
    '../assets/0_img/bunbun-kas_004.jpg'
  ],

  rating: 4.7,
  price: '₺₺',
  selected: false,

  location: 'Andifli Mah., Kaş/Antalya (merkez, çarşıya ve sahile yürüme mesafesi)',
  distance: 'Merkez',
  coordinates: { lat: 36.1999, lng: 29.6426 },

  website: 'https://www.instagram.com/bunbun.kas/',
  phone: '',
  duration: '45 dk – 2 saat',

  facilities: [
    'Kahve & espresso bazlı içecekler',
    'Kahvaltı & brunch tabakları',
    'Sandviç & tatlılar',
    'Açık / kapalı oturma',
    'Tek başına oturmaya uygun',
    'Laptopla kısa süre çalışmaya elverişli',
    'Kart ile ödeme'
  ],

  features: [
    'Modern ve sade kafe atmosferi',
    'Merkezde kolay ulaşım',
    'Günün her saati çalışır konsept',
    'Sabahları sakin, öğleden sonra daha hareketli',
    'Hızlı servis'
  ],

  tags: [
    'kahve',
    'brunch',
    'kahvaltı',
    'sandviç',
    'tatlı',
    'kaş merkez',
    'kafe'
  ],

  trust: {
    verified: true,
    infoDate: '2025-12-23',
    disclaimer: true
  },


   longText: `
Bunbun Kaş, sabah “iyi bir kahveyle güne başlayalım” diyenlerin de, gün içinde kısa bir mola arayanların da rahatça uğradığı bir kafe. Kaş merkezde, çarşıya yakın konumu sayesinde plansızca bile girilebiliyor. İçeri adım attığında modern ama kasıntı olmayan bir atmosfer karşılıyor; sade tasarım, rahat oturma alanları ve sürekli akan bir kafe temposu var.

Atmosfer nasıl?
 Aydınlık ve ferah. Sabah saatleri daha sakin, öğleden sonra ise hareketleniyor.
 Uzun uzun oturmak mümkün ama mekânın ritmi “akıp giden kafe” hissini koruyor.
 Tek başına gelenler için de, iki-üç kişilik kısa buluşmalar için de uyumlu.

Kimler için uygun?
 Kahve severler: Espresso bazlı içecekler burada ana iş.
 Kahvaltı/brunch arayanlar: Ağır serpme değil, daha pratik ve lezzet odaklı tabaklar.
 Yalnız oturup kahve içmek ya da kısa süre laptop açmak isteyenler.
 Denize inmeden ya da çarşı turu öncesi hızlı bir mola vermek isteyenler.

Ne yenir, ne içilir?
Kahve menüsü geniş ve dengeli. Yanında sandviçler, tatlılar ve kahvaltı tabakları var. “Aşırı süslü tabaklar” yerine, tok tutan ve düzgün hazırlanmış seçenekler öne çıkıyor. Öğle saatlerinde hafif bir sandviç + kahve ikilisi oldukça kurtarıcı.

Pratik ipuçları:
- Sabah erken saatler en sakin zaman; özellikle yazın öğleden sonra masa bulmak zorlaşabiliyor.
- Uzun süre çalışmak için değil ama kısa işler ve kahve molası için ideal.
- Çarşıya yakın olduğu için park derdiyle uğraşmamak adına yürüyerek gelmek daha rahat.

Kısa özet:
Bunbun Kaş; iyi kahve, pratik kahvaltı ve rahat kafe atmosferi arayanlar için güvenli bir durak. Günün herhangi bir anında “bir uğrayıp çıkayım” dediğinde seni yormayan, Kaş merkezde işini iyi yapan kafelerden biri.
  `
}

,


  {
  id: 'manos-greek-tavern',
  title: 'Manos Greek Tavern',
  description: 'Samimi bir aile işletmesi havasında, Yunan mutfağının taze ve sade lezzetlerini Kaş’ta sunan tavern; özellikle deniz mahsulleri ve mezeleriyle keyifli akşamlar için tercih ediliyor.',
  category: ['food','meyhane'],
  image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200',
  images: [
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600',
    'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1600',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600',
    'https://images.unsplash.com/photo-1550889898-18b2cfe1979c?w=1600'
  ],

  rating: 4.6,
  price: '₺₺₺',
  selected: false,

  location: 'Kaş Merkez, Andifli Mah. (denize ve limana yürüme mesafesi)',
  distance: 'Merkez',
  coordinates: { lat: 36.2009, lng: 29.6401 },

  website: 'https://www.instagram.com/manosgreektavern/',
  phone: '+90 242 XXX XX XX',
  duration: '1.5–2.5 saat',

  facilities: [
    'Açık / kapalı oturma',
    'Yunan mezeleri & deniz ürünleri',
    'Ev yapımı nefis tatlar',
    'Şarap & meze eşleşmeleri',
    'Canlı müzik (sezonda)',
    'Rezervasyon önerilir'
  ],

  features: [
    'Yunan mutfağının sade ve taze tatları',
    'Merkezde, limana yakın',
    'Gruplar ve çiftler için uygun',
    'Akşam yemeği odağı',
    'Garson önerisiyle tadım tabakları'
  ],

  tags: [
    'Yunan mutfağı',
    'mezeler',
    'deniz ürünleri',
    'taverna',
    'şarap eşleşmesi',
    'merkez restoran'
  ],

  trust: {
    verified: true,
    infoDate: '2025-12-23',
    disclaimer: true
  },

  longText: `
Manos Greek Tavern, Kaş merkeze yakın, liman civarında yürüyerek erişebileceğin sıcak bir taverna. Sahiplerinin samimi karşılamasıyla başlayan akşam, Yunan mutfağının taze deniz ürünleri ve mezeleriyle devam ediyor. Burada yemek yemek “hızlı bir öğün” değil, sohbet ve yemek arasındaki güzel dengeyi bulduğun keyifli bir akşama dönüşüyor.

Atmosfer nasıl?
- Masa aralıkları ve dekor yalın, mekânın rahat aile hissini güçlendiriyor.
- Akşamüstü hafif deniz esintisi, gece ilerledikçe sakin bir sohbet temposu var.
- Yaz sezonunda dışarıda oturmak liman manzarasını tatlılaştırıyor.

Kimler için daha uygun?
- Deniz mahsulleri seven çiftler için akşam yemeği.
- Arkadaş gruplarıyla mezeler paylaşıp yavaş yavaş ilerleyen uzun akşamlar.
- Yerel ve basit ama lezzetli mutfak deneyimi arayan gezginler.

Ne yenir?
Mezelerden karışık tabaklar, ızgara deniz ürünleri ve zeytinyağlılar buranın öne çıkan lezzetleri. Şarapla eşleştirmek için mezelerle başlamayı düşünebilirsin; ardından ızgara seçeneklerle devam etmek, akşamı tamamlar.

Pratik ipuçları:
- Akşam saatlerinde rezervasyon yapmak özellikle yazda önemli; yerler hızlı dolabiliyor.
- Limana yakın olduğu için yürüyerek gelmek hem kolay hem de keyifli.
- Menü mevsime göre değişiyor; garson önerilerine kulak vermek yeni tatlar keşfetmeni sağlar.

Kısa özet:
Manos Greek Tavern, Kaş’ta Yunan mutfağının sade ve taze lezzetlerini, samimi atmosferde deneyimlemek isteyenler için güvenilir bir seçim. Mezelerle sohbeti uzatmak isteyenler burayı listelerine ekleyebilir.
  `
},


  {
  id: 'ci-neo-cucina-by-mezetaryen',
  title: 'Çi Neo Cucina by Mezetaryen',
  description: 'Modern Akdeniz esintileriyle İtalyan mutfağını buluşturan rahat ama özenli bir restoran; özellikle taze malzemeler, ev yapımı lezzetler ve iyi şarap eşleşmeleri arayanlar için.',
  category: ['food'],

  image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1200',
  images: [
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1600',
    'https://images.unsplash.com/photo-1532634896-26909d0d1517?w=1600',
    'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=1600',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600'
  ],

  rating: 4.7,
  price: '₺₺₺',
  selected: false,

  location: 'Çukurbağ Mah., Kaş/Antalya (merkez dışında, yürüyüş ve kısa dolmuş mesafesi)',
  distance: 'Merkez — 10–15 dk',
  coordinates: { lat: 36.2011, lng: 29.6245 },

  website: 'https://www.instagram.com/cineocucina/',
  phone: '+90 242 123 45 67',
  duration: '1.5–2 saat',

  facilities: [
    'Açık / kapalı oturma',
    'Akdeniz & İtalyan füzyon menü',
    'Taze deniz ürünleri seçenekleri',
    'Servisli akşam yemekleri',
    'Şarap & kokteyl eşleşmeleri',
    'Vejetaryen & hafif seçenekler',
    'Rezervasyon önerilir'
  ],

  features: [
    'Taze ve mevsimsel odaklı mutfak',
    'Akşam için romantik & şık atmosfer',
    'Geniş şarap menüsü',
    'Yemek sonrası espresso/grappa seçenekleri',
    'Yürüyüş veya kısa taksiyle kolay erişim'
  ],

  tags: [
    'italyan mutfağı',
    'akdeniz füzyon',
    'şarap eşleşmesi',
    'taze deniz ürünleri',
    'romantik akşam yemeği',
    'vejetaryen seçenek'
  ],

  trust: {
    verified: true,
    infoDate: '2025-12-23',
    disclaimer: true
  },

  longText: `
Çi Neo Cucina by Mezetaryen, Kaş’ın merkezine biraz mesafede ama kısa yürüyüş veya taksiyle kolay ulaşılabilen, modern ve özenli bir restoran deneyimi sunuyor. Mekân, İtalyan mutfağının sıcak dokusunu Akdeniz’in taze malzemeleriyle buluşturuyor; burada yediğin her tabak, malzemenin mevsimine ve lezzetine saygı duyulduğunu hissettiriyor.

Atmosfer nasıl?
- İç mekân şık ama aşırı gösterişli değil; apartman tarzı kaygısızlığı kırmadan masaya özen getiriyor.
- Akşam yemeği için uygun tempo: rahat sohbet ve tadımlık tabaklarla ilerleyen bir akış var.
- Akdeniz esintili dekorasyonla, Kaş’ın deniz havası burada sofraya da yansıyor.

Kimler için daha uygun?
- Çiftler: Romantik akşam yemekleri için öne çıkıyor. Sıcakkanlı servis ve hoş şarap eşleşmeleri atmosferi tamamlıyor.
- Aileler: Çocuk menüsü ve daha hafif seçeneklerle akşam yemeğini keyifli kılabilir.
- Yemek odaklı gezginler: Taze malzemeler, deniz ürünleri ve özgün tatlar peşindeysen burada uzun uzun oturmak mantıklı.

Ne yenir?
Ev yapımı makarnalar, deniz ürünleri ve Akdeniz otlarının öne çıktığı tabaklar, iyi seçilmiş bir şarapla birleştiğinde Kaş akşamını güzel kılar. Menü sezonluk olduğundan, gelenin önerisine bakmak iyi fikir.

Pratik ipuçları:
- Akşam üstü rezervasyon yapmak özellikle yaz sezonunda akıllıca; yer bulmak bazen zor olabilir.
- Merkezden yürüyüşle geliyorsan rahat ayakkabı ve hafif bir üst giysi düşün; akşam serinliği hissedilebilir.
- Şarap listesi geniş; yanına eşlik edecek tatları garsonla konuşmak lezzeti artırır.

Kısa özet:
Çi Neo Cucina, Kaş’ın mutfak sahnesinde modern Akdeniz ve İtalyan tatlarını taze bir bakışla sunan, akşam yemekleri için öncelikli uğrak yerlerden biri. Mekân hem romantik hem de keyifli grup yemekleri için uygun bir denge tutturuyor.
  `
},


  {
  id: 'dragoman-bahce',
  title: 'Dragoman Bahçe',
  description: 'Barlar sokağına yakın, yeşillikler içinde “bahçe bar” hissi veren; kokteyl, bira ve atıştırmalıkla uzayan akşamlar için rahat bir buluşma noktası.',
  category: ['bar', 'food'],

  // Kapak görseli: telifsiz placeholder (içerik fotoğraflarını sonradan sen ekleyebilirsin)
  image: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=1200',

  // Galeri: telifsiz placeholder (istersen gerçek mekan foto linklerini sonra ekleriz)
  images: [
    'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=1600',
    'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=1600&crop=entropy&cs=tinysrgb&fit=max',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600',
    'https://images.unsplash.com/photo-1515165562835-c3b8c9a67f1e?w=1600'
  ],

  // Not: puan/fiyat bilgisi platforma göre değişebilir; burada “rehber” formatında ortalama değer.
  rating: 4.8,
  price: '₺₺',
  selected: false,

  location: 'Andifli Mah., Süleyman Topçu Sk. No:12, Kaş/Antalya (merkez, barlar sokağı çevresi)',
  distance: 'Merkez',
  coordinates: { lat: 36.199742, lng: 29.641986 },

  website: 'https://www.instagram.com/dragomanbahce/',
  phone: '+90 533 285 35 70',
  duration: '2–4 saat',

  facilities: [
    'Bahçe / açık oturma',
    'Kokteyl & bar servisi',
    'Bira seçenekleri',
    'Atıştırmalıklar',
    'Canlı müzik (bazı geceler)',
    'Etkinlik / performans geceleri (dönemsel)',
    'Arkadaş gruplarına uygun',
    'Kart ile ödeme'
  ],

  features: [
    '“Gizli bahçe” hissi veren ferah atmosfer',
    'Merkezde, yürüyerek ulaşım kolay',
    'Akşamüstü–gece akışı için ideal',
    'Müzik seviyesi geceye göre değişebilir',
    'Sezonda geç saatlerde yoğunlaşır'
  ],

  tags: [
    'bahçe bar',
    'kokteyl',
    'bira',
    'atıştırmalık',
    'canlı müzik',
    'kaş merkez',
    'barlar sokağı'
  ],

  trust: {
    verified: true,
    infoDate: '2025-12-23',
    disclaimer: true
  },

  longText: `
Dragoman Bahçe’yi Kaş’ta “iki kadeh bir şey içelim ama kapalı, sıkışık bir yer olmasın” dediğin akşamlara koyabilirsin. Merkezin içinde olmasına rağmen adının hakkını veren bir bahçe havası var. Yeşillik, loş ışık ve rahat oturma düzeni; özellikle gün batımı sonrası Kaş’ın temposuna güzel oturuyor. Mekânın kimliği daha çok bar: kokteyl, bira ve eşlik eden atıştırmalıklarla uzayan bir akşam.

Atmosfer nasıl?
- Rahat, sohbet odaklı. Kalabalıkta bile “bağıra bağıra konuşma” hissi genelde kulüp kadar sert değil.
- Bazı geceler canlı müzik/etkinlik olabiliyor; o zaman enerji yükseliyor ve müzik sesi de ona göre artıyor.
- “Bir masada uzun oturalım” sevenler için uygun; acele ettirmeyen bir akış var.

Kimler için daha uygun?
- Arkadaş grupları: Kaş’ta akşamı başlatmak ya da “son bir içecek” için güvenli bir tercih.
- Çiftler: Bahçe ortamı romantik ama “aşırı romantik restoran” gibi değil; daha günlük, daha gerçek.
- Tek başına gelenler: Bar düzeni sayesinde yalnız oturmak garip durmuyor; kısa sohbetler açılabiliyor.

Ne içilir, ne yenir?
Burası “akşam yemeği restoranı” gibi düşünülmese daha doğru. Kokteyl/bira tarafı öne çıkıyor; yanında da atıştırmalıklar, küçük tabaklar ve pratik eşlikçiler var. Aç karnına uzun akşam planlıyorsan önce bir yerde yemek yiyip sonra buraya geçmek daha konforlu olur.

Pratik ipuçları:
- Yaz sezonunda 21:00 sonrası bir anda dolabiliyor. Daha sakin bir masa için 19:30–20:30 bandı avantajlı.
- Bahçe olduğu için akşam serinliği ve hafif esinti olur; ince bir üst, özellikle geç saatlerde işe yarar.
- Barlar sokağı çevresinde olduğu için araçla geliyorsan park stresi yaşatabilir; yürüyerek gelmek çoğu zaman daha iyi.
- Etkinlik/performans geceleri olabiliyor; “sakin sohbet” arıyorsan sosyal hesaplarından o günün programına hızlıca bakmak iyi fikir.

Kısa özet:
Dragoman Bahçe; Kaş merkezde, yeşillikler içinde, kokteyl-bira-atıştırmalık üçlüsüyle akşamı uzatmak için sevilen bir bahçe bar. İster gün batımı sonrası “ilk tur”, ister geceye doğru “son durak” olarak rahat çalışıyor.
  `
},


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
