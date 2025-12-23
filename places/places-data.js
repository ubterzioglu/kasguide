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
  id: 'frida-pub',
  title: 'Frida Pub',
  description: 'Canlı müzik, rock ağırlıklı playlist ve pub havasıyla; Kaş’ta akşamları enerjik geçirmek isteyenlerin sık uğradığı bar.',
  category: ['bar', 'cafe'],

  image: '../assets/1_places/frida-pub-001.jpg',
  images: [
    '../assets/1_places/frida-pub-002.jpg',
    '../assets/1_places/frida-pub-003.jpg',
    '../assets/1_places/frida-pub-004.jpg'
  ],

  rating: 4.6,
  price: '₺₺',
  selected: false,

  location: 'Andifli Mah., Kaş/Antalya (merkez, barlar sokağı çevresi)',
  distance: 'Merkez',
  coordinates: { lat: 36.1998, lng: 29.6422 },

  website: 'https://www.instagram.com/fridapubkas/',
  phone: '',
  duration: '2–4 saat',

  facilities: [
    'Bar servisi',
    'Bira & kokteyl',
    'Canlı müzik',
    'DJ performansları (bazı geceler)',
    'Ayakta ve sınırlı oturma alanı',
    'Arkadaş gruplarına uygun',
    'Kart ile ödeme'
  ],

  features: [
    'Rock ağırlıklı müzik kültürü',
    'Gece saatlerinde yükselen enerji',
    'Merkezde kolay ulaşım',
    'Geç saatlere kadar açık',
    'Kalabalık ama samimi ortam'
  ],

  tags: [
    'pub',
    'rock bar',
    'canlı müzik',
    'bira',
    'gece hayatı',
    'barlar sokağı'
  ],

  trust: {
    verified: true,
    infoDate: '2025-12-23',
    disclaimer: true
  },

  longText: `
Frida Pub, Kaş’ta “akşam sakin başlayıp geceyi müzikle bitirelim” diyenlerin yolu mutlaka düşen yerlerden biri. Barlar sokağı çevresindeki konumuyla, özellikle gün batımı sonrası hızlıca dolmaya başlıyor. Mekânın kimliği net: pub ruhu, rock ağırlıklı müzik ve enerjisi yüksek bir gece atmosferi.

Atmosfer nasıl?
- Akşam erken saatlerde daha rahat, gece ilerledikçe kalabalık ve hareketli.
- Canlı müzik olan gecelerde ortam belirgin şekilde ısınıyor; eşlik edenler, şarkılara katılanlar eksik olmuyor.
- Oturup uzun sohbet etmekten çok, ayakta durup müziğe eşlik etmeye uygun bir düzen var.

Kimler için uygun?
- Rock ve alternatif müzik sevenler.
- Arkadaş grubuyla eğlenmek isteyenler.
- “Sessiz bar” değil, enerjik ve gürültülü ortam arayanlar.
- Kaş gece hayatını yerel tadında yaşamak isteyen gezginler.

Ne içilir?
Bira ve klasik pub kokteylleri ön planda. Menü karmaşık değil; hızlı servis ve akışı bozmayan içecek seçenekleri var. Amaç “içkiyi al, müziğe dön” düzeni.

Pratik ipuçları:
- Canlı müzik gecelerinde erken gitmek, içeride yer bulmayı kolaylaştırır.
- Ayakta durma süresi uzun olabileceği için rahat ayakkabı işe yarar.
- Kalabalıktan hoşlanmıyorsan 21:00 civarı, enerjiyi seviyorsan 22:30 sonrası daha uygun.

Kısa özet:
Frida Pub; Kaş’ta rock müzik, canlı performans ve pub atmosferini bir arada arayanlar için doğru adres. Sessiz bir akşam yemeğinden sonra geceyi hareketlendirmek isteyenlerin listesinde olması gereken duraklardan.
  `
},





{
  id: 'bunbun-kas',
  title: 'Bunbun Kaş',
  description: 'Taze kahve, iyi sandviçler ve tatlılarla; günün her saati uğranabilen, rahat ve modern bir kafe.',
  category: ['cafe', 'breakfast', 'food'],

  image: '../assets/1_places/bunbun-kas-001.jpg',
  images: [
    '../assets/1_places/bunbun-kas-002.jpg',
    '../assets/1_places/bunbun-kas-003.jpg',
    '../assets/1_places/bunbun-kas-004.jpg'
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
  image: '../assets/1_places/manos-greek-tavern-001.jpg',
  images: [
    '../assets/1_places/manos-greek-tavern-002.jpg',
    '../assets/1_places/manos-greek-tavern-003.jpg',
    '../assets/1_places/manos-greek-tavern-004.jpg',
    '../assets/1_places/manos-greek-tavern-005.jpg'
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

  image: '../assets/1_places/ci-neo-cucina-by-mezetaryen-001.jpg',
  images: [
    '../assets/1_places/ci-neo-cucina-by-mezetaryen-002.jpg',
    '../assets/1_places/ci-neo-cucina-by-mezetaryen-003.jpg',
    '../assets/1_places/ci-neo-cucina-by-mezetaryen-004.jpg'
    
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
  image: '../assets/1_places/dragoman-bahce-001.jpg',

  // Galeri: telifsiz placeholder (istersen gerçek mekan foto linklerini sonra ekleriz)
  images: [
    '../assets/1_places/dragoman-bahce-002.jpg',
    '../assets/1_places/dragoman-bahce-003.jpg',
    '../assets/1_places/dragoman-bahce-004.jpg'   
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
  image:  '../assets/1_places/nereid-meyhanesi-001.jpg',

  // Galeri: telifsiz placeholder (istersen gerçek mekan foto linklerini sonra ekleriz)
  images: [
     '../assets/1_places/nereid-meyhanesi-002.jpg',
      '../assets/1_places/nereid-meyhanesi-003.jpg',
      '../assets/1_places/nereid-meyhanesi-004.jpg'
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


{
  id: 'dragoman-diving-and-outdoor',
  title: 'Dragoman Diving and Outdoor',
  description: 'Kaş’ta dalış başta olmak üzere doğa ve deniz odaklı aktiviteler sunan, güven veren ve tecrübeli bir outdoor & dalış merkezi.',
  category: ['diving', 'activities'],

  image: '../assets/1_places/dragoman-diving-and-outdoor-001.jpg',
  images: [
    '../assets/1_places/dragoman-diving-and-outdoor-002.jpg',
    '../assets/1_places/dragoman-diving-and-outdoor-003.jpg',
    '../assets/1_places/dragoman-diving-and-outdoor-004.jpg'
  ],

  rating: 4.8,
  price: '₺₺₺',
  selected: false,

  location: 'Andifli Mah., Kaş/Antalya (merkez, liman çevresi)',
  distance: 'Merkez',
  coordinates: { lat: 36.1996, lng: 29.6404 },

  website: 'https://www.instagram.com/dragomandiving/',
  phone: '+90 242 836 19 06',
  duration: 'Yarım gün – tam gün',

  facilities: [
    'Tüplü dalış (beginner & certified)',
    'Deneme dalışı',
    'Tekne ile dalış noktalarına ulaşım',
    'Profesyonel eğitmenler',
    'Ekipman temini',
    'Briefing & güvenlik eğitimi',
    'Fotoğraf / video çekimi (opsiyonel)'
  ],

  features: [
    'Kaş’ın en iyi dalış noktalarına erişim',
    'Yeni başlayanlara uygun sakin yaklaşım',
    'Küçük gruplarla dalış',
    'Güvenlik ve bilgilendirme odaklı',
    'Uzun yıllara dayanan yerel tecrübe'
  ],

  tags: [
    'tüplü dalış',
    'scuba',
    'deneme dalışı',
    'outdoor',
    'kaş dalış',
    'tekne turu',
    'su altı'
  ],

  trust: {
    verified: true,
    infoDate: '2025-12-23',
    disclaimer: true
  },

  longText: `
Dragoman Diving and Outdoor, Kaş’ta denizin altını gerçekten güvenle keşfetmek isteyenlerin tercih ettiği köklü dalış merkezlerinden biri. Liman çevresindeki konumuyla ulaşımı kolay; sabah buluşup kısa bir hazırlık sonrası direkt tekneyle dalış noktalarına açılıyorsun. Burada hissedilen şey “turist fabrikası” değil, işini bilen bir ekiple kontrollü ve keyifli bir deneyim.

Atmosfer nasıl?
- Rahat ama disiplinli. Her şey aceleye getirilmeden anlatılıyor.
- İlk kez dalacak olanlara karşı sabırlı ve açıklayıcı bir yaklaşım var.
- Sert komutlardan çok, güven veren bir iletişim dili kullanılıyor.

Kimler için uygun?
- Hayatında ilk kez tüplü dalış yapacak olanlar.
- Sertifikalı dalgıçlar için Kaş’ın klasik ve özel noktalarını görmek isteyenler.
- Tatilde adrenalin arayan ama “risk almak istemeyen” gezginler.
- Denizle ilişkisi güçlü, doğa odaklı tatil sevenler.

Dalış deneyimi nasıl ilerliyor?
Önce kısa ama net bir bilgilendirme yapılıyor. Ekipmanlar kontrol ediliyor, suya girmeden önce herkesin ne yapacağı netleşiyor. Deneme dalışlarında tempo yavaş tutuluyor; panik yaratacak hiçbir zorlamaya girilmiyor. Sertifikalı dalışlarda ise Kaş’ın batıkları, mağaramsı yapıları ve berrak görüşü gerçekten etkileyici.

Pratik ipuçları:
- Yaz sezonunda yerler hızlı doluyor; bir gün önceden rezervasyon iyi olur.
- Sabah saatleri hem deniz hem görüş açısından genelde daha iyi.
- Dalış sonrası hafif bir sersemlik normal; programını çok sıkıştırmamak mantıklı.
- Deniz tutması olanlar için tekne öncesi önlem almak işe yarar.

Kısa özet:
Dragoman Diving and Outdoor, Kaş’ta dalışı güvenli, sakin ve keyifli şekilde deneyimlemek isteyenler için doğru adres. İlk kez deneyecek olanları da, tecrübeli dalgıçları da rahat ettiren bir yaklaşımı var. Kaş’ın su altı dünyasını gerçekten görmek istiyorsan, gönül rahatlığıyla listene eklenebilir.
  `
},

{
  id: 'the-shotlar-terminali',
  title: 'The Shotlar Terminali',
  description: 'Shot odaklı konsepti, yüksek enerjisi ve eğlenceli atmosferiyle; Kaş’ta geceyi hızlandırmak isteyenlerin uğradığı küçük ama hareketli bir bar.',
  category: ['bar'],

  image: '../assets/1_places/the-shotlar-terminali-001.jpg',
  images: [
    '../assets/1_places/the-shotlar-terminali-002.jpg',
    '../assets/1_places/the-shotlar-terminali-003.jpg',
    '../assets/1_places/the-shotlar-terminali-004.jpg',
  ],

  rating: 4.5,
  price: '₺₺',
  selected: false,

  location: 'Andifli Mah., Kaş/Antalya (merkez, barlar sokağına çok yakın)',
  distance: 'Merkez',
  coordinates: { lat: 36.1997, lng: 29.6420 },

  website: '',
  phone: '',
  duration: '30 dk – 1.5 saat',

  facilities: [
    'Shot bar konsepti',
    'Çok sayıda shot çeşidi',
    'Ayakta servis',
    'Hızlı içim & hızlı servis',
    'Arkadaş gruplarına uygun',
    'Kart ile ödeme'
  ],

  features: [
    'Küçük ama enerjisi yüksek mekân',
    'Geceye hızlı başlamak için ideal',
    'Eğlenceli ve genç kitle',
    'Barlar sokağına geçiş için iyi ara durak',
    'Kısa süreli ama yoğun deneyim'
  ],

  tags: [
    'shot bar',
    'gece hayatı',
    'hızlı eğlence',
    'barlar sokağı',
    'arkadaş grubu',
    'kaş gece'
  ],

  trust: {
    verified: true,
    infoDate: '2025-12-23',
    disclaimer: true
  },

  longText: `
The Shotlar Terminali, Kaş’ta “bir-iki shot atalım, sonra akalım” diyenlerin net adresi. Küçük bir alan, ayakta servis ve sürekli hareket… Buraya uzun uzun oturmak için değil, geceye enerji eklemek için geliniyor. Barlar sokağına yakınlığı sayesinde çoğu kişi için bir başlangıç noktası ya da mekânlar arası kısa ama eğlenceli bir mola.

Atmosfer nasıl?
- Kalabalık, gürültülü ve yüksek tempolu.
- Müzik hızlı, sohbet kısa; eğlence ön planda.
- Tanımadığın insanlarla yan yana shot kaldırmak çok olağan.

Kimler için uygun?
- Arkadaş grubuyla eğlence arayanlar.
- “Sessiz bar” beklentisi olmayanlar.
- Geceyi uzatmadan önce mod yükseltmek isteyenler.
- Kısa sürede eğlenip başka mekâna geçmeyi sevenler.

Ne içilir?
Burada iş net: shot. Klasikten aromalı karışımlara kadar birçok seçenek var. Uzun uzun içecek menüsü incelemek yok; seç, iç ve devam et. İlk kez gelenler için daha yumuşak shotlarla başlamak mantıklı.

Pratik ipuçları:
- Mekân küçük olduğu için kalabalık saatlerde içerisi hızlı doluyor.
- Ayakta durma ve hareket fazla; rahat ayakkabı avantaj.
- Shot temposuna kapılıp abartmamak tamamen senin kontrolünde.
- Geceye geç saatlerde gelmek ortamı daha eğlenceli kılıyor.

Kısa özet:
The Shotlar Terminali; Kaş gece hayatında kısa sürede tempo yakalamak isteyenler için tasarlanmış, hızlı ve eğlenceli bir shot bar. Uzun oturmalık değil ama doğru zamanda girildiğinde geceyi ciddi şekilde canlandırıyor.
  `
},


{
  id: "mavi-bar",
  title: "Mavi Bar",
  description: "Kaş merkezde, deniz kenarında sakin atmosferi ve gün batımı manzarasıyla öne çıkan rahat bir bar.",
  category: ["bar"],

  image: "../assets/1_places/mavi-bar-001.jpg",
  images: [
    "../assets/1_places/mavi-bar-002.jpg",
    "../assets/1_places/mavi-bar-003.jpg",
    "../assets/1_places/mavi-bar-004.jpg"
  ],

  rating: 4.3,
  price: "₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (liman tarafı, denize sıfır)",
  distance: "Merkez",
  coordinates: { lat: 36.2019, lng: 29.6377 },

  website: "",
  phone: "",
  duration: "1–3 saat",

  facilities: [
    "Deniz kenarı oturma",
    "Açık alan",
    "Bar servisi",
    "Bira & kokteyl",
    "Masa servisi",
    "Kart ile ödeme"
  ],

  features: [
    "Gün batımı manzarası",
    "Sakin ve rahat atmosfer",
    "Merkezde ama gürültüden uzak",
    "Uzun sohbetlere uygun",
    "Akşam saatlerinde keyifli ambiyans"
  ],

  tags: [
    "deniz kenarı bar",
    "gün batımı",
    "sakin akşam",
    "kaş merkez",
    "manzara",
    "sohbet"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Mavi Bar, Kaş’ta akşamı sakin bir tempoyla karşılamak isteyenlerin yolunun sık düştüğü, deniz kenarında yer alan bir bar. Gösterişten uzak yapısı ve manzarayı öne çıkaran düzeniyle, Kaş’ın “yavaşla ve etrafına bak” ruhunu iyi yansıtıyor. Gün batımına doğru geldiğinde, denizin rengiyle birlikte ortamın havası da yumuşuyor.

Atmosfer nasıl?
- Genel olarak sakin, rahat ve sohbet odaklı.
- Müzik arka planda; konuşmayı bastırmıyor.
- Deniz kenarında oturmak mekânın en güçlü tarafı.
- Gece ilerledikçe hareket artsa da hiçbir zaman kulüp havasına bürünmüyor.

Kimler için uygun?
- İki kişi ya da küçük arkadaş gruplarıyla uzun sohbet etmek isteyenler.
- Gün batımını izleyerek bir şeyler içmek isteyenler.
- Gürültülü, kalabalık barlardan hoşlanmayanlar.
- Kaş’ta günü yavaş yavaş kapatmayı sevenler.

Ne içilir?
Menü genelde klasik bar çizgisinde ilerliyor. Bira ve temel kokteyller ön planda. “Özel imza kokteyl” iddiası yok; burada amaç manzara eşliğinde keyifli ve sade bir içim. Uzun süre oturacaksan hafif içeceklerle ilerlemek mantıklı.

Pratik ipuçları:
- Gün batımı saatlerinde denize en yakın masalar hızlı doluyor; biraz erken gelmek avantaj sağlar.
- Akşam saatlerinde rüzgâr serinleyebiliyor, ince bir üst almak iyi olur.
- Uzun oturmak için uygun bir yer olduğu için acele planı olanlar yerine zamanı olanlara daha çok hitap ediyor.
- Merkezde olduğu için yürüyerek ulaşım en rahat seçenek.

Kısa özet:
Mavi Bar, Kaş’ta yüksek sesli eğlence değil; manzara, sakinlik ve sohbet arayanların tercih ettiği bir bar. Gün batımında başlayıp geceyi yormadan bitirmek isteyenler için güvenli ve keyifli bir durak.
  `
},


{
  id: "oxygen-pub",
  title: "Oxygen Pub",
  description: "Kaş Marina içinde, tekne manzarası eşliğinde gün batımına oturmalık; kahve–yemek–içki hattında çalışan bir pub/bar.",
  category: ["bar", "food", "breakfast", "cafe"],

  image: "../assets/1_places/oxygen-pub-001.jpg",
  images: [
    "../assets/1_places/oxygen-pub-002.jpg",
    "../assets/1_places/oxygen-pub-003.jpg",
    "../assets/1_places/oxygen-pub-004.jpg"
  ],

  rating: 4.5,
  price: "₺₺",
  selected: false,

  location: "Kaş Marina, Bucak Denizi, Acısu Mevki No:37/9, Kaş/Antalya",
  distance: "Kaş Marina",
  coordinates: { lat: 36.206545, lng: 29.626338 },

  website: "https://www.instagram.com/oxygen.pub/",
  phone: "+90 242 836 37 05",
  duration: "1–3 saat",

  facilities: [
    "Marina manzarası",
    "Açık alan oturma",
    "Kahve servisi",
    "Yemek (gün içi/akşam)",
    "Bira & kokteyl",
    "Canlı müzik (bazı günler)"
  ],

  features: [
    "Marina içinde konum",
    "Gün batımında oturmalık",
    "Gündüzden geceye uzayan kullanım",
    "Sohbet ve manzara odaklı masa düzeni",
    "Bar + yemek + kahve karması"
  ],

  tags: [
    "kaş marina",
    "gün batımı",
    "pub",
    "kahve",
    "kokteyl",
    "manzara",
    "canlı müzik"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Oxygen Pub, Kaş Marina’nın içinde yer aldığı için “barlar sokağı” çizgisinden biraz ayrılıyor. Buraya gelmenin ana sebebi genelde manzara: tekneler, marina yürüyüşü ve özellikle gün batımı saatinde oluşan o sakin tempo. Mekân da buna göre çalışıyor; sadece geceye değil, gün içine de yayılan bir ritmi var.

Atmosfer nasıl?
- Marina havası: daha ferah, daha “oturup izlemelik”.
- Müzik ve kalabalık seviyesi güne/saatine göre değişiyor; gün batımı saatleri daha dolu oluyor.
- Pub hissi var ama “yalnızca bira” odaklı değil; kahve/yemek tarafı da aktif.

Kimler için uygun?
- Gün batımında sakin bir masa arayan çiftler ve küçük gruplar.
- “Bir içki içip kalkalım” yerine, manzaraya karşı biraz daha uzun oturmak isteyenler.
- Gündüz marina turu yapıp kahve–atıştırmalık molası vermek isteyenler.
- Barlar sokağının kalabalığını sevmeyen ama akşam dışarı çıkmak isteyenler.

Ne içilir / nasıl kullanılır?
Oxygen’i tek bir kategoriye sıkıştırmak zor: kahve içen de var, yemek yiyen de, bira/kokteyl içip gün batımına oturan da. Bu yüzden burayı “programlı” kullanmak kolay:
- Gündüz: kahve + hafif bir şeyler
- Akşamüstü: gün batımı masası + içecek
- Gece: daha sosyal bir pub akışı

Pratik ipuçları:
- Gün batımı saatinde marina tarafındaki masalar hızlı dolabilir; erken gitmek rahat ettirir.
- Marina içinde olduğu için yürüyüşle gelmek genelde en konforlu seçenek.
- Canlı müzik olan günleri seviyorsan sosyal hesaplarından (varsa) program kontrolü iyi olur; sessiz sohbet arıyorsan tersine planla.

Kısa özet:
Oxygen Pub, Kaş’ta “marina manzarasında oturalım” fikrini en net veren yerlerden. Bar kimliği var ama gün içi kahve/yemek tarafıyla da çalışan, gün batımında en çok anlam kazanan bir marina mekânı.
  `
},
{
  id: "zaika-ocakbasi",
  title: "Zaika Ocakbaşı",
  description: "Kaş’ın Çukurbağ Yarımadası’nda, ocakbaşı ve geleneksel kebap odaklı lezzetler sunan uzun yıllardır yerel ve turist tarafından bilinen restoran.",
  category: ["food"],

  image: "../assets/1_places/zaika-ocakbasi-001.jpg",
  images: [
    "../assets/1_places/zaika-ocakbasi-002.jpg",
    "../assets/1_places/zaika-ocakbasi-003.jpg",
    "../assets/1_places/zaika-ocakbasi-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺₺",
  selected: false,

  location: "Çukurbağ Yarımadası, Kaş/Antalya",
  distance: "Yarımada",
  coordinates: { lat: 36.2085, lng: 29.6000 },

  website: "http://www.zaikaocakbasi.com/",
  phone: "+90 242 836 23 73",

  duration: "1.5–3 saat",

  facilities: [
    "Açık / yarı açık oturma",
    "Ocakbaşı & grill",
    "Mezeler",
    "Et odaklı menü",
    "Tatlılar",
    "Rezervasyon önerisi"
  ],

  features: [
    "Geleneksel ızgara ve ocakbaşı pişirme",
    "Yerel ve turist karışık müşteri kitlesi",
    "Rezervasyon gerektirebilen popülerlik",
    "Çukurbağ Yarımadası atmosferi",
    "Akşamüstü & gece yemek servisi"
  ],

  tags: [
    "ocakbaşı",
    "ızgara",
    "kebap",
    "Çukurbağ",
    "yarımada",
    "akşam yemeği"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
**Atmosfer & Konum**  
:contentReference[oaicite:0]{index=0}, Kaş’ın Çukurbağ Yarımadası’nda yer alıyor ve yıllardır yöresel et pişirme biçimi ile tanınan bir ocakbaşı restoranı. Mekân deniz kıyısına yakın ama yürüyüş mesafesinden ziyade çoğu ziyaretçi için **araçla ulaşım** daha kolay olan bir yerde konumlanıyor; bu nedenle akşam yemeği için çoğu kişi rezervasyonla geliyor. Konum çevresinde taş döşeli geniş bir alan, açık/yarı açık masalar ve Akdeniz akşam havası var. :contentReference[oaicite:1]{index=1}

**Lezzet & Menü Öne Çıkanlar**  
Zaika’nın menüsü geleneksel Türk mutfağı ile ocakbaşı/ızgara odaklı. Etler genellikle odun ateşinde pişiriliyor ve kebap çeşitleri (şaşlık, küsneme, beyti gibi) sıkça övgü alıyor; Google yorumlarında özellikle **etlerin lezzeti ve pişme kalitesi** öne çıkmış. Bazı ziyaretçiler mezelerin ortalamanın altında olduğunu düşünse de ana etler ve özel tatlılar çoğu kez beğeniliyor. :contentReference[oaicite:2]{index=2}

**Kimler İçin Uygun?**  
- Et severler ve klasik Türk kebaplarını deneyimlemek isteyenler.  
- Akşam yemeği için daha “yerel” bir deneyim arayan ziyaretçiler.  
- Rezervasyonla planlı akşam yemekleri yapanlar; yaz sezonunda yer bulmak zor olabilir.  
- Deniz manzaralı ve yarımada havası olan dış mekânı sevenler.

**Pratik İpuçları**  
- **Rezervasyon** özellikle yaz sezonu **gerekli**; aksi halde masa bulmak zorlaşabilir.  
- Araçla veya taksiyle ulaşım çoğu ziyaretçi için daha rahat olur.  
- Meze yerine **ana et odaklı** siparişler çoğu yorumda daha tatmin edici bulunmuş.  
- Sineklik/arı konusunda bazı ziyaretçiler olumsuz deneyim bildirmiş; rüzgârın az olduğu akşamlar için bu detayı hesaba katmak faydalı olabilir. :contentReference[oaicite:3]{index=3}

**Kısa Özet**  
Zaika Ocakbaşı, Çukurbağ Yarımadası’nda **geleneksel ocakbaşı lezzetlerini** deneyimlemek isteyenler için popüler bir adres. Et yemekleri ve kebap çeşitleri övgü alıyor, açık/yarı açık ortam yaz akşamlarında keyifli oluyor. Rezervasyon ve ulaşım planlaması bu tip mekânlarda ziyaret deneyimini olumlu etkiliyor.
  `
},

{
  id: "oburus-momus",
  title: "Oburus Momus",
  description: "Kaş merkezde vegan/vejetaryen odaklı, Akdeniz-füzyon tarzı modern restoran; deniz manzarasına yakın konumuyla akşamüstü ve akşam yemekleri için popüler.",
  category: ["food"],

  image: "../assets/1_places/oburus-momus-001.jpg",
  images: [
    "../assets/1_places/oburus-momus-002.jpg",
    "../assets/1_places/oburus-momus-003.jpg",
    "../assets/1_places/oburus-momus-004.jpg"
  ],

  rating: 4.7,
  price: "₺₺₺",
  selected: false,

  location: "Adil Akba Sk. No:13, Andifli Mah., Kaş/Antalya",
  distance: "Merkez",
  coordinates: { lat: 36.2008, lng: 29.6405 },

  website: "",
  phone: "+90 507 704 20 32",

  duration: "1.5–3 saat",

  facilities: [
    "Vegan/vejetaryen menü",
    "Gluten-free ve sağlıklı seçenekler",
    "Kokteyl & şarap servisi",
    "Dış mekan oturma",
    "Masa servis",
    "Rezervasyon önerisi"
  ],

  features: [
    "Modern ve Akdeniz-füzyon tarzı yemekler",
    "Deniz/liman yakın yürüyüş mesafesi",
    "İçeceklerle eşleşen hafif lezzetler",
    "Gün batımı sonrası akşam molası için uygun",
    "Yerel ve yabancı konuklar arasında popüler"
  ],

  tags: [
    "vegan",
    "vejetaryen",
    "Akdeniz mutfağı",
    "sağlıklı",
    "kaş",
    "akşam yemeği"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
**Konum ve kimlik**  
Oburus Momus, Kaş merkezde Adil Akba Sokak üzerinde yer alır ve özellikle **vegan/vejetaryen odaklı modern yemekler** sunmasıyla bilinir; bu, Kaş’taki “klasik kebap/deniz ürünleri” rotasından farklı bir durak oluşturur. :contentReference[oaicite:1]{index=1}

**Atmosfer & tarz**  
Mekân merkeze oldukça yakın olduğundan yürüyerek ulaşmak kolaydır. İç mekân ve dış oturma alanı karışımıyla sakin ama **çağdaş bir his** verir; masalarda deniz ya da liman yerine dar sokakların hafif akışı hissedilir. Akşamüstü ve akşam yemekleri için tercih edilen bir yer; bazı ziyaretçiler gün batımına doğru daha yoğun bir kalabalık olduğunu bildiriyor. :contentReference[oaicite:2]{index=2}

**Menü ve lezzet odakları**  
Oburus Momus’un menüsü genel olarak vegan ve vejetaryen seçeneklere yoğunlaşır; örneğin humus, falafel, sebzeli makarnalar, salatalar ve yer yer dünya mutfağı dokunuşlu sunumlar göze çarpar. Bazı yorumlarda makarna ve mezelerin başarılı bulunduğu, bazı yorumlarda ise porsiyon büyüklüklerinin tatmin edici olduğu belirtilmiş. Menüsü et odaklı olmadığından, bu mekân et arayanlar için ilk seçenek değildir. :contentReference[oaicite:3]{index=3}

**Kimler için uygun?**  
- Vegan/vejetaryen veya hafif yemek arayanlar. :contentReference[oaicite:4]{index=4}  
- Akşamüstü ya da akşam yemeğini merkezi bir yerde geçirmek isteyenler. :contentReference[oaicite:5]{index=5}  
- Deniz kenarı manzarası yerine **sokak içi modern restoran** havası isteyenler.

**Pratik ipuçları**  
- Yaz sezonunda rezervasyon yapmak akıllıca olabilir çünkü popüler bir durak. :contentReference[oaicite:6]{index=6}  
- Menüde gluten-free ve sağlıklı seçenekler olduğu için farklı diyetlere uygun alternatifler bulunabiliyor. :contentReference[oaicite:7]{index=7}  
- İç mekân bazı günlerde dolabiliyor; dış alanı özellikle akşamüstü tercih etmek ferah bir deneyim sağlar.

**Kısa özet**  
Oburus Momus, Kaş’ta klasik lezzetlerin dışında, **modern, vegan/vejetaryen odaklı Akdeniz-eşleşimi mutfağı** sunan, merkezde konumlanmış hoş bir restoran; özellikle farklı tatlar arayan gezginlerin listesinde sıkça yer alıyor. :contentReference[oaicite:8]{index=8}
  `
},

{
  id: "l-apero",
  title: "L’Apéro",
  description: "Kaş merkezde, eski bir evin bahçesinde modern Fransız-Akdeniz mutfağı ve şarap/kokteyl eşliğinde akşam yemekleri için öne çıkan restoran.",
  category: ["food", "bar"],

  image: "../assets/1_places/l-apero-001.jpg",
  images: [
    "../assets/1_places/l-apero-002.jpg",
    "../assets/1_places/l-apero-003.jpg",
    "../assets/1_places/l-apero-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺₺",
  selected: false,

  location: "Doğruyol Cd. No:1, Andifli Mah., Kaş/Antalya",
  distance: "Merkez",
  coordinates: { lat: 36.1995, lng: 29.6429 },

  website: "",
  phone: "+90 537 789 20 85",

  duration: "1.5–3 saat",

  facilities: [
    "Açık/şık bahçe oturma",
    "Fransız & Akdeniz mutfağı",
    "Kurgu kokteyller & şarap",
    "Tatlı & aperitif",
    "Rezervasyon önerisi"
  ],

  features: [
    "Eski Kaş evinin bahçesinde atmosfer",
    "Akşam yemeği odaklı servis",
    "Deniz ürünleri & et seçenekleri",
    "Vejetaryen/vegan alternatifler",
    "Arkadaş ve çift akşamları"
  ],

  tags: [
    "fransız mutfağı",
    "akdeniz",
    "şarap",
    "bahçe restoran",
    "dinner",
    "aperitif"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
**Konum & genel hissiyat**  
L’Apéro, Kaş merkezinde Doğruyol Caddesi üzerinde, **150 yıllık eski bir Kaş evinin geniş bahçesinde** hizmet veren Fransız-Akdeniz mutfağı sunan bir restoran-bardır. Mekân bahçesi ve ağaç gölgesiyle yaz akşamlarında özellikle romantik ya da sakin bir akşam yemeği için tercih ediliyor; aynı zamanda kokteyl ve şarap eşliğinde “aperitif” deneyimi için de popüler. :contentReference[oaicite:0]{index=0}

**Yemek & içecek dünyası**  
Menü ağırlıklı olarak **Fransız mutfağı etkisiyle hazırlanmış yemekler** içeriyor: soğan çorbası, keçi peynirli kiş, steak tartare, escargot, salmon ve profiterol gibi klasikler Kaş’ta nadir tatlar arasında. Şarap ve kokteyller de öne çıkıyor; özellikle akşamüstü ve gece yemeklerinde şarap-kokteyl eşleştirmeleri sıkça öneriliyor. Vejetaryen/vegan arkadaşlara yönelik bazı seçenekler ve tatlı alternatifleri de mevcut. :contentReference[oaicite:1]{index=1}

**Atmosfer & müşteri deneyimi**  
L’Apéro’nun atmosferi büyük oranda **sakin, şık ama samimi** olarak tanımlanıyor. Bahçe kısmı özellikle akşamüstü rüzgârı ve ışıklandırmayla güzel oluyor; iç mekân ise daha dingin ve sofistike bir hissiyat veriyor. Personel çoğu yorumda nazik ve yardımcı olarak anılıyor. :contentReference[oaicite:2]{index=2}

**Kimler için uygun?**  
- Fransız ve Akdeniz füzyon mutfağını deneyimlemek isteyenler.  
- Akşam yemeği için atmosferik, romantik bir durak arayan çiftler.  
- Şarap/kokteyl eşliğinde uzun sohbet-yemek akışı isteyenler.  
- Vejetaryen/vegan ya da dünya mutfağından farklı lezzetler arayan gezginler. :contentReference[oaicite:3]{index=3}

**Pratik ipuçları**  
- Mekân sezonda akşam saatlerinde **yoğunlaşıyor**, rezervasyon yapmanız önerilir.  
- Menü fiyatları Kaş ortalamasının üzerinde olabilir; birkaç kişilik deneyim birkaç içkiyle birlikte daha maliyetli olabilir.  
- Bahçe alanı rüzgârlı akşam saatlerinde serin olabilir; üst kıyafet bulundurmak konfor artırır.  
- Başlangıç olarak soğan çorbası ve ardından ana yemeklerde steak/deniz ürünleri kombinasyonu iyi denge sağlar. :contentReference[oaicite:4]{index=4}

**Kısa özet**  
L’Apéro, Kaş merkezde **Fransız ve Akdeniz lezzetlerini birleştiren**, bahçe atmosferiyle öne çıkan ve çoğu yorumda **nazik servis ve dikkatli sunum** ile tavsiye edilen bir restoran-bardır. Akşam yemekleri ve kokteyller için sakin ama keyifli bir durak arayanlara özellikle uygun. :contentReference[oaicite:5]{index=5}
  `
},
{
  id: "oburus-momus",
  title: "Oburus Momus",
  description: "Kaş merkezde vegan/vejetaryen odaklı, Akdeniz-füzyon tarzı modern restoran; deniz manzarasına yakın konumuyla akşamüstü ve akşam yemekleri için popüler.",
  category: ["food"],

  image: "../assets/1_places/oburus-momus-001.jpg",
  images: [
    "../assets/1_places/oburus-momus-002.jpg",
    "../assets/1_places/oburus-momus-003.jpg",
    "../assets/1_places/oburus-momus-004.jpg"
  ],

  rating: 4.7,
  price: "₺₺₺",
  selected: false,

  location: "Adil Akba Sk. No:13, Andifli Mah., Kaş/Antalya",
  distance: "Merkez",
  coordinates: { lat: 36.2008, lng: 29.6405 },

  website: "",
  phone: "+90 507 704 20 32",

  duration: "1.5–3 saat",

  facilities: [
    "Vegan/vejetaryen menü",
    "Gluten-free ve sağlıklı seçenekler",
    "Kokteyl & şarap servisi",
    "Dış mekan oturma",
    "Masa servis",
    "Rezervasyon önerisi"
  ],

  features: [
    "Modern ve Akdeniz-füzyon tarzı yemekler",
    "Deniz/liman yakın yürüyüş mesafesi",
    "İçeceklerle eşleşen hafif lezzetler",
    "Gün batımı sonrası akşam molası için uygun",
    "Yerel ve yabancı konuklar arasında popüler"
  ],

  tags: [
    "vegan",
    "vejetaryen",
    "Akdeniz mutfağı",
    "sağlıklı",
    "kaş",
    "akşam yemeği"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
**Konum ve kimlik**  
Oburus Momus, Kaş merkezde Adil Akba Sokak üzerinde yer alır ve özellikle **vegan/vejetaryen odaklı modern yemekler** sunmasıyla bilinir; bu, Kaş’taki “klasik kebap/deniz ürünleri” rotasından farklı bir durak oluşturur. :contentReference[oaicite:1]{index=1}

**Atmosfer & tarz**  
Mekân merkeze oldukça yakın olduğundan yürüyerek ulaşmak kolaydır. İç mekân ve dış oturma alanı karışımıyla sakin ama **çağdaş bir his** verir; masalarda deniz ya da liman yerine dar sokakların hafif akışı hissedilir. Akşamüstü ve akşam yemekleri için tercih edilen bir yer; bazı ziyaretçiler gün batımına doğru daha yoğun bir kalabalık olduğunu bildiriyor. :contentReference[oaicite:2]{index=2}

**Menü ve lezzet odakları**  
Oburus Momus’un menüsü genel olarak vegan ve vejetaryen seçeneklere yoğunlaşır; örneğin humus, falafel, sebzeli makarnalar, salatalar ve yer yer dünya mutfağı dokunuşlu sunumlar göze çarpar. Bazı yorumlarda makarna ve mezelerin başarılı bulunduğu, bazı yorumlarda ise porsiyon büyüklüklerinin tatmin edici olduğu belirtilmiş. Menüsü et odaklı olmadığından, bu mekân et arayanlar için ilk seçenek değildir. :contentReference[oaicite:3]{index=3}

**Kimler için uygun?**  
- Vegan/vejetaryen veya hafif yemek arayanlar. :contentReference[oaicite:4]{index=4}  
- Akşamüstü ya da akşam yemeğini merkezi bir yerde geçirmek isteyenler. :contentReference[oaicite:5]{index=5}  
- Deniz kenarı manzarası yerine **sokak içi modern restoran** havası isteyenler.

**Pratik ipuçları**  
- Yaz sezonunda rezervasyon yapmak akıllıca olabilir çünkü popüler bir durak. :contentReference[oaicite:6]{index=6}  
- Menüde gluten-free ve sağlıklı seçenekler olduğu için farklı diyetlere uygun alternatifler bulunabiliyor. :contentReference[oaicite:7]{index=7}  
- İç mekân bazı günlerde dolabiliyor; dış alanı özellikle akşamüstü tercih etmek ferah bir deneyim sağlar.

**Kısa özet**  
Oburus Momus, Kaş’ta klasik lezzetlerin dışında, **modern, vegan/vejetaryen odaklı Akdeniz-eşleşimi mutfağı** sunan, merkezde konumlanmış hoş bir restoran; özellikle farklı tatlar arayan gezginlerin listesinde sıkça yer alıyor. :contentReference[oaicite:8]{index=8}
  `
}
,
{
  id: "l-apero",
  title: "L’Apéro",
  description: "Kaş merkezde, eski bir evin bahçesinde modern Fransız-Akdeniz mutfağı ve şarap/kokteyl eşliğinde akşam yemekleri için öne çıkan restoran.",
  category: ["food", "bar"],

  image: "../assets/1_places/l-apero-001.jpg",
  images: [
    "../assets/1_places/l-apero-002.jpg",
    "../assets/1_places/l-apero-003.jpg",
    "../assets/1_places/l-apero-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺₺",
  selected: false,

  location: "Doğruyol Cd. No:1, Andifli Mah., Kaş/Antalya",
  distance: "Merkez",
  coordinates: { lat: 36.1995, lng: 29.6429 },

  website: "",
  phone: "+90 537 789 20 85",

  duration: "1.5–3 saat",

  facilities: [
    "Açık/şık bahçe oturma",
    "Fransız & Akdeniz mutfağı",
    "Kurgu kokteyller & şarap",
    "Tatlı & aperitif",
    "Rezervasyon önerisi"
  ],

  features: [
    "Eski Kaş evinin bahçesinde atmosfer",
    "Akşam yemeği odaklı servis",
    "Deniz ürünleri & et seçenekleri",
    "Vejetaryen/vegan alternatifler",
    "Arkadaş ve çift akşamları"
  ],

  tags: [
    "fransız mutfağı",
    "akdeniz",
    "şarap",
    "bahçe restoran",
    "dinner",
    "aperitif"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
**Konum & genel hissiyat**  
L’Apéro, Kaş merkezinde Doğruyol Caddesi üzerinde, **150 yıllık eski bir Kaş evinin geniş bahçesinde** hizmet veren Fransız-Akdeniz mutfağı sunan bir restoran-bardır. Mekân bahçesi ve ağaç gölgesiyle yaz akşamlarında özellikle romantik ya da sakin bir akşam yemeği için tercih ediliyor; aynı zamanda kokteyl ve şarap eşliğinde “aperitif” deneyimi için de popüler. :contentReference[oaicite:0]{index=0}

**Yemek & içecek dünyası**  
Menü ağırlıklı olarak **Fransız mutfağı etkisiyle hazırlanmış yemekler** içeriyor: soğan çorbası, keçi peynirli kiş, steak tartare, escargot, salmon ve profiterol gibi klasikler Kaş’ta nadir tatlar arasında. Şarap ve kokteyller de öne çıkıyor; özellikle akşamüstü ve gece yemeklerinde şarap-kokteyl eşleştirmeleri sıkça öneriliyor. Vejetaryen/vegan arkadaşlara yönelik bazı seçenekler ve tatlı alternatifleri de mevcut. :contentReference[oaicite:1]{index=1}

**Atmosfer & müşteri deneyimi**  
L’Apéro’nun atmosferi büyük oranda **sakin, şık ama samimi** olarak tanımlanıyor. Bahçe kısmı özellikle akşamüstü rüzgârı ve ışıklandırmayla güzel oluyor; iç mekân ise daha dingin ve sofistike bir hissiyat veriyor. Personel çoğu yorumda nazik ve yardımcı olarak anılıyor. :contentReference[oaicite:2]{index=2}

**Kimler için uygun?**  
- Fransız ve Akdeniz füzyon mutfağını deneyimlemek isteyenler.  
- Akşam yemeği için atmosferik, romantik bir durak arayan çiftler.  
- Şarap/kokteyl eşliğinde uzun sohbet-yemek akışı isteyenler.  
- Vejetaryen/vegan ya da dünya mutfağından farklı lezzetler arayan gezginler. :contentReference[oaicite:3]{index=3}

**Pratik ipuçları**  
- Mekân sezonda akşam saatlerinde **yoğunlaşıyor**, rezervasyon yapmanız önerilir.  
- Menü fiyatları Kaş ortalamasının üzerinde olabilir; birkaç kişilik deneyim birkaç içkiyle birlikte daha maliyetli olabilir.  
- Bahçe alanı rüzgârlı akşam saatlerinde serin olabilir; üst kıyafet bulundurmak konfor artırır.  
- Başlangıç olarak soğan çorbası ve ardından ana yemeklerde steak/deniz ürünleri kombinasyonu iyi denge sağlar. :contentReference[oaicite:4]{index=4}

**Kısa özet**  
L’Apéro, Kaş merkezde **Fransız ve Akdeniz lezzetlerini birleştiren**, bahçe atmosferiyle öne çıkan ve çoğu yorumda **nazik servis ve dikkatli sunum** ile tavsiye edilen bir restoran-bardır. Akşam yemekleri ve kokteyller için sakin ama keyifli bir durak arayanlara özellikle uygun. :contentReference[oaicite:5]{index=5}
  `
}
,

{
  id: "ruhi-bey-meyhanesi",
  title: "Ruhi Bey Meyhanesi",
  description: "Kaş merkezde, klasik meyhane düzeninde, meze ve rakı eşliğinde uzun sofralara odaklanan sakin bir akşam yemeği mekânı.",
  category: ["meyhane", "food"],

  image: "../assets/1_places/ruhi-bey-meyhanesi-001.jpg",
  images: [
    "../assets/1_places/ruhi-bey-meyhanesi-002.jpg",
    "../assets/1_places/ruhi-bey-meyhanesi-003.jpg",
    "../assets/1_places/ruhi-bey-meyhanesi-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.1998, lng: 29.6420 },

  website: "",
  phone: "",

  duration: "2–3 saat",

  facilities: [
    "Masa servisi",
    "Meze çeşitleri",
    "Deniz ürünleri",
    "Alkollü servis",
    "Rezervasyon önerilir"
  ],

  features: [
    "Klasik meyhane düzeni",
    "Sohbet odaklı masa yapısı",
    "Akşam yemeği temposu",
    "Merkezde kolay ulaşım"
  ],

  tags: [
    "meyhane",
    "rakı",
    "meze",
    "kaş merkez",
    "akşam yemeği"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Ruhi Bey Meyhanesi, Kaş merkezde “yüksek sesli eğlence” değil, meyhane kültürünü sakin bir tempoyla yaşamak isteyenlere hitap eden bir yer. Mekânın temel odağı masa başı sohbeti; akşam yemeği boyunca acele edilmeyen, yavaş ilerleyen bir akış var.

Atmosfer:
Klasik meyhane düzeni hissediliyor. Masalar birbirine çok sıkışık değil, sohbeti bölmeyecek bir müzik seviyesi tercih ediliyor. Akşam saatleri ilerledikçe doluluk artıyor ama ortam genelde kontrollü kalıyor.

Kimler için uygun?
- Rakı–meze akşamı yapmak isteyenler  
- Gürültülü barlardan hoşlanmayanlar  
- Uzun oturup sohbet etmeyi seven çiftler ve küçük gruplar  

Pratik ipuçları:
- Akşam yoğunluğu oluşabildiği için rezervasyon faydalı.
- Meze seçimini garsonla konuşarak yapmak çoğu zaman daha iyi sonuç veriyor.
- Merkezde olduğu için yürüyerek ulaşım en rahat seçenek.

Kısa özet:
Ruhi Bey Meyhanesi, Kaş’ta klasik meyhane deneyimini sade ve sohbet odaklı yaşamak isteyenler için güvenli bir tercih.
  `
}
,
{
  id: "voyn-meyhane",
  title: "Voyn Meyhane",
  description: "Kaş merkezde, modern meyhane çizgisinde, meze ve deniz ürünü ağırlıklı menüsüyle akşamları tercih edilen bir rakı-balık mekânı.",
  category: ["meyhane", "food"],

  image: "../assets/1_places/voyn-meyhane-001.jpg",
  images: [
    "../assets/1_places/voyn-meyhane-002.jpg",
    "../assets/1_places/voyn-meyhane-003.jpg",
    "../assets/1_places/voyn-meyhane-004.jpg"
  ],

  rating: 4.5,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez, çarşıya yakın)",
  distance: "Merkez",
  coordinates: { lat: 36.1995, lng: 29.6424 },

  website: "",
  phone: "",

  duration: "2–3 saat",

  facilities: [
    "Masa servisi",
    "Soğuk & sıcak mezeler",
    "Deniz ürünleri",
    "Alkollü servis",
    "Rezervasyon önerilir"
  ],

  features: [
    "Modern meyhane yorumu",
    "Meze çeşitliliği",
    "Akşam saatlerinde artan doluluk",
    "Merkez konum"
  ],

  tags: [
    "meyhane",
    "rakı-balık",
    "meze",
    "modern meyhane",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Voyn Meyhane, Kaş’ta klasik meyhane anlayışını biraz daha modern bir çizgiyle sunan yerlerden biri. Menü meze ve deniz ürünleri etrafında dönüyor; rakı eşliğinde uzun bir akşam yemeği planlayanlar için uygun bir tempo sunuyor.

Atmosfer:
Ortam klasik meyhanelere göre daha modern; masa düzeni ve sunum daha derli toplu. Akşam ilerledikçe doluluk artıyor ve mekân canlılaşıyor, ancak tamamen gürültülü bir yapıya dönüşmüyor.

Kimler için uygun?
- Rakı-balık sevenler  
- Klasik ama biraz daha modern meyhane arayanlar  
- Akşam yemeğini tek mekânda uzun uzun geçirmek isteyenler  

Pratik ipuçları:
- Yaz aylarında özellikle akşam saatlerinde rezervasyon önemli.
- Meze seçimi yaparken günlük çıkanlara sormak avantaj sağlar.
- Çarşıya yakın olduğu için yürüyerek gelmek rahat.

Kısa özet:
Voyn Meyhane, Kaş merkezde modern meyhane tarzında, meze ve deniz ürünü ağırlıklı bir akşam geçirmek isteyenler için güçlü bir alternatif.
  `
}
,
{
  id: "demeti-meyhane",
  title: "Demeti Meyhane",
  description: "Kaş’ta ev sıcaklığı hissi veren, küçük ölçekli ve samimi yapısıyla öne çıkan, meze ve rakı odaklı bir meyhane.",
  category: ["meyhane", "food"],

  image: "../assets/1_places/demeti-meyhane-001.jpg",
  images: [
    "../assets/1_places/demeti-meyhane-002.jpg",
    "../assets/1_places/demeti-meyhane-003.jpg",
    "../assets/1_places/demeti-meyhane-004.jpg"
  ],

  rating: 4.6,
  price: "₺₺₺",
  selected: false,

  location: "Kaş Merkez, Andifli Mah.",
  distance: "Merkez",
  coordinates: { lat: 36.1997, lng: 29.6419 },

  website: "",
  phone: "",

  duration: "2–3 saat",

  facilities: [
    "Masa servisi",
    "Ev yapımı meze hissi",
    "Alkollü servis",
    "Sınırlı masa sayısı",
    "Rezervasyon önerilir"
  ],

  features: [
    "Samimi ve küçük ölçekli mekân",
    "Ev mutfağına yakın meze tarzı",
    "Sohbet öncelikli ortam",
    "Akşam yemeği odaklı"
  ],

  tags: [
    "meyhane",
    "ev yapımı",
    "rakı",
    "samimi",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Demeti Meyhane, Kaş’ta “küçük ama karakterli” meyhanelerden biri. Büyük ve kalabalık mekânlardan ziyade, ev sıcaklığına yakın bir ortam sunuyor. Masalar sınırlı olduğu için mekân genelde daha sakin ve kontrollü bir akşam vadediyor.

Atmosfer:
Samimi ve sohbet odaklı. Yüksek müzik ya da kalabalık eğlence yok; masada oturan herkesin birbirini duyabildiği bir düzen hâkim. Akşam saatlerinde doluluk oluşabiliyor ama ortam hiçbir zaman karmaşık hale gelmiyor.

Kimler için uygun?
- Küçük grup veya çift olarak meyhane akşamı yapmak isteyenler  
- Ev yemeği tadında meze arayanlar  
- Gürültüden kaçan, sakin bir Kaş akşamı isteyenler  

Pratik ipuçları:
- Masa sayısı az olduğu için önceden rezervasyon iyi fikir.
- Uzun oturulacak bir akşam planı için uygun.
- Merkezde olduğu için ulaşım kolay.

Kısa özet:
Demeti Meyhane, Kaş’ta sakin, samimi ve ev sıcaklığında bir meyhane deneyimi arayanlar için ideal bir durak.
  `
}
,
{
  id: "zuhtu-meze-cocktails",
  title: "Zühtü Meze & Cocktails",
  description: "Kaş merkezde, meze odaklı mutfağı ve imza kokteylleriyle meyhane ile bar çizgisini birleştiren akşam mekânı.",
  category: ["meyhane", "bar", "food"],

  image: "../assets/1_places/zuhtu-meze-cocktails-001.jpg",
  images: [
    "../assets/1_places/zuhtu-meze-cocktails-002.jpg",
    "../assets/1_places/zuhtu-meze-cocktails-003.jpg",
    "../assets/1_places/zuhtu-meze-cocktails-004.jpg"
  ],

  rating: 4.5,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.1998, lng: 29.6423 },

  website: "",
  phone: "",

  duration: "2–3 saat",

  facilities: [
    "Masa servisi",
    "Soğuk & sıcak mezeler",
    "Kokteyl servisi",
    "Alkollü servis",
    "Rezervasyon önerilir"
  ],

  features: [
    "Meyhane + kokteyl bar hibrit konsepti",
    "Modern sunumlu mezeler",
    "Akşam saatlerinde artan doluluk",
    "Sohbet ve içki dengesi"
  ],

  tags: [
    "meze",
    "kokteyl",
    "meyhane",
    "modern meyhane",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Zühtü Meze & Cocktails, Kaş’ta klasik meyhane anlayışını biraz daha modern bir noktaya taşıyan mekânlardan biri. Burada rakı–meze düzeni hâlâ merkezde, fakat kokteyl tarafı da güçlü. Bu da Zühtü’yü hem meyhane sevenlere hem de “birkaç kadeh kokteyl içelim” diyenlere hitap eden bir ara durak hâline getiriyor.

Atmosfer:
Ortam modern ama kasıntı değil. Akşam erken saatlerde daha sakin, ilerleyen saatlerde masa dolulukları artıyor. Müzik seviyesi sohbeti bastırmıyor; daha çok masada vakit geçirmeye odaklı bir düzen var.

Kimler için uygun?
- Meze odaklı ama klasik meyhaneden biraz farklı bir şey arayanlar
- Rakı yerine kokteyl tercih eden ama meyhane havasından kopmak istemeyenler
- Çiftler ve küçük arkadaş grupları

Pratik ipuçları:
- Akşam saatlerinde rezervasyon avantaj sağlar.
- Meze seçimini tek tek değil, karışık söylemek masayı daha keyifli kılıyor.
- Uzun oturmalık bir akşam için uygun; hızlı yiyip kalkmalık değil.

Kısa özet:
Zühtü, Kaş’ta meyhane ile kokteyl bar arasında dengeli bir yerde duran, modern ve akşam odaklı bir mekân.
  `
}
,
{
  id: "beyhude-meyhane",
  title: "Beyhude Meyhane",
  description: "Kaş merkezde, klasik meyhane kültürünü sade ve samimi bir ortamda sunan, meze ve rakı odaklı akşam mekânı.",
  category: ["meyhane", "food"],

  image: "../assets/1_places/beyhude-meyhane-001.jpg",
  images: [
    "../assets/1_places/beyhude-meyhane-002.jpg",
    "../assets/1_places/beyhude-meyhane-003.jpg",
    "../assets/1_places/beyhude-meyhane-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.1996, lng: 29.6421 },

  website: "",
  phone: "",

  duration: "2–3 saat",

  facilities: [
    "Masa servisi",
    "Meze çeşitleri",
    "Alkollü servis",
    "Sakin müzik",
    "Rezervasyon önerilir"
  ],

  features: [
    "Klasik meyhane düzeni",
    "Sohbet odaklı masa yapısı",
    "Gösterişsiz ama karakterli",
    "Akşam yemeği temposu"
  ],

  tags: [
    "meyhane",
    "rakı",
    "meze",
    "sakin akşam",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Beyhude Meyhane, Kaş’ta meyhane denince akla gelen “uzun masa – yavaş akşam” hissini net şekilde veren yerlerden biri. Mekânın iddiası gösteriş değil; rakı, meze ve masadaki sohbet. Bu nedenle kalabalık eğlenceden çok, sakin ama dolu bir akşam arayanların tercih ettiği bir adres.

Atmosfer:
Sade, sıcak ve samimi. Müzik arka planda, masadaki konuşma ön planda. Akşam ilerledikçe doluluk artıyor ama ortam genelde kontrolünü kaybetmiyor.

Kimler için uygun?
- Klasik meyhane kültürünü sevenler
- Uzun uzun oturup sohbet etmek isteyenler
- Gürültülü eğlenceden hoşlanmayan çiftler ve küçük gruplar

Pratik ipuçları:
- Özellikle yaz akşamlarında rezervasyon iyi olur.
- Meze çeşitliliği masayı kurmak için yeterli; ana yemeği ağırdan almak avantajlı.
- Merkezde olduğu için yürüyerek ulaşım en rahatı.

Kısa özet:
Beyhude Meyhane, Kaş’ta “abartısız ama düzgün” bir meyhane akşamı arayanlar için güvenli bir durak.
  `
}
,
{
  id: "uzum-kizi-meyhanesi",
  title: "Üzüm Kızı Meyhanesi",
  description: "Kaş merkezde, ev mutfağı hissi veren mezeleri ve sakin ortamıyla öne çıkan, küçük ölçekli bir meyhane.",
  category: ["meyhane", "food"],

  image: "../assets/1_places/uzum-kizi-meyhanesi-001.jpg",
  images: [
    "../assets/1_places/uzum-kizi-meyhanesi-002.jpg",
    "../assets/1_places/uzum-kizi-meyhanesi-003.jpg",
    "../assets/1_places/uzum-kizi-meyhanesi-004.jpg"
  ],

  rating: 4.6,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.1997, lng: 29.6417 },

  website: "",
  phone: "",

  duration: "2–3 saat",

  facilities: [
    "Masa servisi",
    "Ev yapımı meze tarzı",
    "Alkollü servis",
    "Sınırlı masa",
    "Rezervasyon önerilir"
  ],

  features: [
    "Ev sıcaklığında meyhane atmosferi",
    "Sakin ve kontrollü ortam",
    "Küçük ama karakterli mekân",
    "Uzun sohbet sofraları"
  ],

  tags: [
    "meyhane",
    "ev yapımı",
    "rakı",
    "samimi",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Üzüm Kızı Meyhanesi, Kaş’ta “büyük mekân, büyük kalabalık” istemeyenlerin tercih ettiği daha küçük ve samimi bir meyhane. Ortam ev mutfağına yakın bir his veriyor; masa sayısı az olduğu için akşamlar genelde daha sakin ve kontrollü geçiyor.

Atmosfer:
Sıcak ve samimi. Yüksek müzik yok, acele servis yok. Masaya oturup uzun süre kalmak için uygun bir düzen var. Akşam saatlerinde doluluk oluşabiliyor ama ortam hiçbir zaman karmaşaya dönmüyor.

Kimler için uygun?
- Ev yemeği hissinde meze arayanlar
- Küçük grup veya çift olarak meyhane akşamı isteyenler
- Gürültüden uzak Kaş akşamı arayanlar

Pratik ipuçları:
- Masa sayısı sınırlı olduğu için rezervasyon önemli.
- Uzun oturulacak bir akşam planı için ideal.
- Merkezde olduğu için ulaşım kolay.

Kısa özet:
Üzüm Kızı Meyhanesi, Kaş’ta sakin, samimi ve ev sıcaklığında bir meyhane deneyimi arayanlar için doğru adreslerden biri.
  `
}
,
{
  id: "mupptela-ocakbasi",
  title: "Müpptela Ocakbaşı",
  description: "Kaş merkezde, klasik ocakbaşı düzeninde kebap ve ızgara etlere odaklanan, akşam yemeği için tercih edilen restoran.",
  category: ["food"],

  image: "../assets/1_places/mupptela-ocakbasi-001.jpg",
  images: [
    "../assets/1_places/mupptela-ocakbasi-002.jpg",
    "../assets/1_places/mupptela-ocakbasi-003.jpg",
    "../assets/1_places/mupptela-ocakbasi-004.jpg"
  ],

  rating: 4.3,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.1999, lng: 29.6425 },

  website: "",
  phone: "",

  duration: "1.5–2.5 saat",

  facilities: [
    "Ocakbaşı ızgara",
    "Kebap çeşitleri",
    "Masa servisi",
    "Alkollü & alkolsüz içecek",
    "Rezervasyon önerilir"
  ],

  features: [
    "Et ve kebap odaklı menü",
    "Klasik ocakbaşı düzeni",
    "Akşam yemeği temposu",
    "Merkezde kolay ulaşım"
  ],

  tags: [
    "ocakbaşı",
    "kebap",
    "ızgara",
    "akşam yemeği",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Müpptela Ocakbaşı, Kaş’ta et ve kebap ağırlıklı bir akşam yemeği planlayanların tercih ettiği klasik bir ocakbaşı restoranı. Menü, süslü yorumlardan çok ızgara ve pişirme kalitesine odaklanıyor. Bu da mekânı “ne yiyeceğim belli olsun” diyenler için net bir seçenek haline getiriyor.

Atmosfer:
Ocakbaşı düzeni ve masa servisi birlikte çalışıyor. Ortam gösterişli değil; daha çok yemek odaklı. Akşam saatlerinde doluluk artıyor ama mekân genel olarak kontrollü bir akışta ilerliyor.

Kimler için uygun?
- Kebap ve ızgara et sevenler
- Akşam yemeğini merkezde geçirmek isteyenler
- Kalabalık eğlence değil, yemek odaklı bir ortam arayanlar

Pratik ipuçları:
- Akşam yoğunluğu oluşabildiği için rezervasyon rahat ettirir.
- Meze beklentisi yüksek tutulmamalı; ana etlere odaklanmak daha doğru.
- Merkezde olduğu için yürüyerek ulaşım kolay.

Kısa özet:
Müpptela Ocakbaşı, Kaş’ta klasik ocakbaşı çizgisinde, et odaklı ve akşam yemeği için güvenli bir adres.
  `
}
,
{
  id: "pisekar-restoran",
  title: "Pişekar Restoran",
  description: "Kaş merkezde, ev yemeği ve Türk mutfağı ağırlıklı menüsüyle öğle ve akşam yemeklerinde tercih edilen sade bir restoran.",
  category: ["food"],

  image: "../assets/1_places/pisekar-restoran-001.jpg",
  images: [
    "../assets/1_places/pisekar-restoran-002.jpg",
    "../assets/1_places/pisekar-restoran-003.jpg",
    "../assets/1_places/pisekar-restoran-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺",
  selected: false,

  location: "Kaş Merkez, Andifli Mah.",
  distance: "Merkez",
  coordinates: { lat: 36.2001, lng: 29.6422 },

  website: "",
  phone: "",

  duration: "45 dk – 1.5 saat",

  facilities: [
    "Ev yemeği tarzı menü",
    "Masa servisi",
    "Günlük çıkan yemekler",
    "Alkolsüz servis",
    "Hızlı servis"
  ],

  features: [
    "Ev mutfağına yakın lezzetler",
    "Öğle yemeğine uygun tempo",
    "Merkezde pratik durak",
    "Fiyat–performans dengesi"
  ],

  tags: [
    "ev yemeği",
    "türk mutfağı",
    "öğle yemeği",
    "kaş merkez",
    "sade restoran"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Pişekar Restoran, Kaş’ta ağır restoran konseptlerinden ziyade ev yemeği hissi veren, sade ve pratik bir yemek noktası. Menü genellikle Türk mutfağına dayanıyor ve “günün yemeği” mantığıyla ilerliyor. Bu yüzden özellikle öğle saatlerinde tercih ediliyor.

Atmosfer:
Gösterişsiz, temiz ve sakin. Uzun uzun oturmaktan çok, düzgün bir yemek yiyip kalkmaya uygun. Turistik şovlardan uzak bir havası var.

Kimler için uygun?
- Ev yemeği arayanlar
- Öğle yemeğinde hızlı ama düzgün bir alternatif isteyenler
- Alkollü mekân istemeyenler
- Merkezde pratik bir durak arayanlar

Pratik ipuçları:
- Günlük çıkan yemekleri sormak en doğru seçim.
- Öğle saatlerinde daha yoğun oluyor.
- Akşamları daha sakin bir tempo var.

Kısa özet:
Pişekar Restoran, Kaş’ta ev yemeği tadında, sade ve güvenilir bir öğün arayanlar için doğru adreslerden biri.
  `
}

,
{
  id: "meydan-restaurant-cafe",
  title: "Meydan Restaurant & Cafe",
  description: "Kaş merkezde, gün boyu açık yapısıyla kahvaltıdan akşam yemeğine kadar geniş bir menü sunan merkezi bir kafe-restoran.",
  category: ["food", "cafe", "breakfast"],

  image: "../assets/1_places/meydan-restaurant-cafe-001.jpg",
  images: [
    "../assets/1_places/meydan-restaurant-cafe-002.jpg",
    "../assets/1_places/meydan-restaurant-cafe-003.jpg",
    "../assets/1_places/meydan-restaurant-cafe-004.jpg"
  ],

  rating: 4.2,
  price: "₺₺",
  selected: false,

  location: "Kaş Merkez, meydan çevresi",
  distance: "Merkez",
  coordinates: { lat: 36.1994, lng: 29.6428 },

  website: "",
  phone: "",

  duration: "30 dk – 2 saat",

  facilities: [
    "Kahvaltı servisi",
    "Kafe & restoran menüsü",
    "Açık oturma",
    "Masa servisi",
    "Alkollü & alkolsüz içecek"
  ],

  features: [
    "Gün boyu açık",
    "Merkezi meydan konumu",
    "Geniş menü",
    "Kısa mola veya uzun oturma seçeneği"
  ],

  tags: [
    "kahvaltı",
    "kafe",
    "restoran",
    "merkez",
    "meydan"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Meydan Restaurant & Cafe, Kaş merkezde günün her saatine uyum sağlayan, çok yönlü bir kafe-restoran. Kahvaltıdan başlayıp akşam yemeğine kadar uzanan geniş bir menüsü var. Bu da mekânı özellikle “ne yesek?” sorusuna pratik bir cevap haline getiriyor.

Atmosfer:
Merkezi konumu nedeniyle sürekli hareketli. Kafe havası baskın ama restoran olarak da çalışıyor. Kısa bir kahve molası için de, oturup yemek yemek için de uygun.

Kimler için uygun?
- Gün içinde esnek bir durak arayanlar
- Kahvaltı, öğle yemeği veya akşam yemeğini merkezde yapmak isteyenler
- Grup içinde farklı beklentilere sahip olanlar

Pratik ipuçları:
- Meydan çevresi olduğu için gün içinde kalabalık olabilir.
- Uzun uzun oturmak için daha sakin saatler tercih edilebilir.
- Menü geniş olduğu için karar vermek biraz zaman alabilir.

Kısa özet:
Meydan Restaurant & Cafe, Kaş’ta gün boyu çalışan, merkezi ve çok amaçlı bir kafe-restoran olarak pratik bir seçenek.
  `
}
,

{
  id: "keyf-i-dem-meyhane",
  title: "Keyf-i Dem Meyhane",
  description: "Kaş merkezde, klasik meyhane düzeninde, rakı–meze ağırlıklı uzun akşam sofraları için tercih edilen bir meyhane.",
  category: ["meyhane", "food"],

  image: "../assets/1_places/keyf-i-dem-meyhane-001.jpg",
  images: [
    "../assets/1_places/keyf-i-dem-meyhane-002.jpg",
    "../assets/1_places/keyf-i-dem-meyhane-003.jpg",
    "../assets/1_places/keyf-i-dem-meyhane-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.1996, lng: 29.6420 },

  website: "",
  phone: "",

  duration: "2–3 saat",

  facilities: [
    "Masa servisi",
    "Soğuk & sıcak mezeler",
    "Alkollü servis",
    "Sakin müzik",
    "Rezervasyon önerilir"
  ],

  features: [
    "Klasik meyhane atmosferi",
    "Sohbet odaklı masa düzeni",
    "Akşam yemeği temposu",
    "Merkezde kolay ulaşım"
  ],

  tags: [
    "meyhane",
    "rakı",
    "meze",
    "sakin akşam",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Keyf-i Dem Meyhane, Kaş’ta meyhane denince beklenen “yavaş akşam” hissini veren yerlerden biri. Burada amaç hızlı servis ya da yüksek sesli eğlence değil; masaya oturup rakı–meze eşliğinde uzun uzun sohbet etmek.

Atmosfer:
Ortam sade ve dengeli. Müzik arka planda, sohbet ön planda. Akşam saatlerinde doluluk artıyor ama mekân genelde kontrolünü kaybetmiyor.

Kimler için uygun?
- Klasik meyhane kültürünü sevenler
- Gürültülü barlardan hoşlanmayanlar
- Çiftler ve küçük arkadaş grupları

Pratik ipuçları:
- Yaz akşamlarında rezervasyon rahat ettirir.
- Meze seçimini garsonla konuşmak masayı daha iyi kurmayı sağlar.
- Merkezde olduğu için yürüyerek ulaşım ideal.

Kısa özet:
Keyf-i Dem Meyhane, Kaş’ta sakin, klasik ve sohbet odaklı bir meyhane akşamı arayanlar için güvenli bir durak.
  `
}
,

{
  id: "fici-restaurant",
  title: "Fıçı Restaurant",
  description: "Kaş merkezde, deniz ürünü ve Akdeniz mutfağı ağırlıklı menüsüyle akşam yemekleri için tercih edilen restoran.",
  category: ["food"],

  image: "../assets/1_places/fici-restaurant-001.jpg",
  images: [
    "../assets/1_places/fici-restaurant-002.jpg",
    "../assets/1_places/fici-restaurant-003.jpg",
    "../assets/1_places/fici-restaurant-004.jpg"
  ],

  rating: 4.3,
  price: "₺₺₺",
  selected: false,

  location: "Kaş Merkez, Andifli Mah.",
  distance: "Merkez",
  coordinates: { lat: 36.2000, lng: 29.6418 },

  website: "",
  phone: "",

  duration: "1.5–2.5 saat",

  facilities: [
    "Masa servisi",
    "Deniz ürünleri",
    "Akdeniz mutfağı",
    "Alkollü servis",
    "Rezervasyon önerilir"
  ],

  features: [
    "Balık ve deniz ürünü odaklı menü",
    "Akşam yemeğine uygun atmosfer",
    "Merkezde kolay ulaşım",
    "Turist ve yerel karışık kitle"
  ],

  tags: [
    "balık",
    "deniz ürünleri",
    "akdeniz mutfağı",
    "akşam yemeği",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Fıçı Restaurant, Kaş’ta balık ve deniz ürünü ağırlıklı bir akşam yemeği düşünenlerin listesine giren merkez restoranlardan biri. Menü klasik Akdeniz çizgisinde ilerliyor; ağır füzyonlardan ziyade bilinen tatlara odaklanıyor.

Atmosfer:
Restoran havası baskın. Uzun masa sohbetlerinden çok, yemek odaklı bir akşam akışı var. Akşam saatlerinde doluluk artabiliyor.

Kimler için uygun?
- Deniz ürünü sevenler
- Akşam yemeğini merkezde yapmak isteyenler
- Klasik restoran düzenini tercih edenler

Pratik ipuçları:
- Balık çeşitleri günlük duruma göre değişebiliyor; sormakta fayda var.
- Yaz sezonunda rezervasyon avantaj sağlar.
- Merkezde olduğu için ulaşım kolay.

Kısa özet:
Fıçı Restaurant, Kaş’ta deniz ürünü ağırlıklı, sade ve akşam yemeğine odaklı bir restoran arayanlar için makul bir seçenek.
  `
}
,

{
  id: "smileys-restaurant",
  title: "Smileys Restaurant",
  description: "Kaş merkezde, uluslararası mutfak seçenekleri ve rahat ortamıyla gün boyu hizmet veren bir restoran.",
  category: ["food"],

  image: "../assets/1_places/smileys-restaurant-001.jpg",
  images: [
    "../assets/1_places/smileys-restaurant-002.jpg",
    "../assets/1_places/smileys-restaurant-003.jpg",
    "../assets/1_places/smileys-restaurant-004.jpg"
  ],

  rating: 4.2,
  price: "₺₺",
  selected: false,

  location: "Kaş Merkez, çarşı çevresi",
  distance: "Merkez",
  coordinates: { lat: 36.1993, lng: 29.6429 },

  website: "",
  phone: "",

  duration: "45 dk – 2 saat",

  facilities: [
    "Masa servisi",
    "Uluslararası mutfak",
    "Alkollü & alkolsüz içecek",
    "Açık oturma",
    "Gün boyu servis"
  ],

  features: [
    "Geniş menü",
    "Turistik ve rahat atmosfer",
    "Merkezi konum",
    "Hızlı servis"
  ],

  tags: [
    "uluslararası mutfak",
    "restoran",
    "gün boyu",
    "merkez",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Smileys Restaurant, Kaş merkezde günün her saatinde açık olan, özellikle turistlerin sık tercih ettiği rahat bir restoran. Menü oldukça geniş; Türk mutfağından uluslararası seçeneklere kadar farklı beklentilere cevap vermeyi amaçlıyor.

Atmosfer:
Rahat ve hareketli. Kafe–restoran arası bir düzen var. Uzun akşam sofralarından çok, pratik yemek molalarına uygun.

Kimler için uygun?
- Grupta herkesin farklı şeyler yemek istediği durumlar
- Gün içinde hızlı ama oturarak yemek isteyenler
- Turistik, rahat bir ortam arayanlar

Pratik ipuçları:
- Menü geniş olduğu için karar vermek zaman alabilir.
- Merkezde olduğu için gün içinde kalabalık olabilir.
- Uzun oturmalı meyhane beklentisiyle gelinmemeli.

Kısa özet:
Smileys Restaurant, Kaş’ta geniş menülü, rahat ve gün boyu çalışan bir restoran olarak pratik bir durak.
  `
}
,
{
  id: "bi-lokma",
  title: "Bi’Lokma",
  description: "Kaş merkezde, bahçeli ortamda kahvaltıdan akşam yemeğine uzanan Türk mutfağı menüsüyle gün boyu çalışan bir restoran.",
  category: ["food", "breakfast", "cafe"],

  image: "../assets/1_places/bi-lokma-001.jpg",
  images: [
    "../assets/1_places/bi-lokma-002.jpg",
    "../assets/1_places/bi-lokma-003.jpg",
    "../assets/1_places/bi-lokma-004.jpg"
  ],

  rating: 4.3,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Uğur Mumcu Cd. No:21, 07580 Kaş/Antalya",
  distance: "Merkez",
  coordinates: { lat: 36.1997, lng: 29.6422 },

  website: "https://www.bilokma.com.tr/",
  phone: "+90 242 836 39 42",

  duration: "1–2.5 saat",

  facilities: [
    "Bahçe oturma",
    "Kahvaltı",
    "Masa servisi",
    "Vejetaryen seçenekler",
    "Take-away kahve seçeneği"
  ],

  features: [
    "Gün boyu servis (kahvaltı → akşam)",
    "Bahçede sakin oturma",
    "Türk mutfağı ağırlıklı geniş menü",
    "Merkezde yürüyerek ulaşım"
  ],

  tags: [
    "bahçe",
    "kahvaltı",
    "türk mutfağı",
    "meze",
    "mantı",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
**Genel**  
Bi’Lokma, Kaş merkezde bahçeli oturumu olan, günün farklı saatlerine uyum sağlayan bir restoran. Sabah kahvaltı ile başlayıp, öğleden sonra daha hafif tabaklara ve akşam da Türk mutfağı ağırlıklı yemeklere dönen bir akışı var. Adres ve iletişim bilgileri kendi sitesinde net şekilde yer alıyor. :contentReference[oaicite:0]{index=0}

**Atmosfer**  
Burası “Kaş’ta bahçede oturayım” diyenlerin sevdiği tipte bir yer. Özellikle sıcak günlerde gölgeye kaçıp sakin sakin oturmak için uygun. Kalabalık saatlerde hareketleniyor ama genel ruhu yemek odaklı. :contentReference[oaicite:1]{index=1}

**Ne yenir / ne içilir**  
Menü geniş: kahvaltı, mezeler, ana yemekler, tatlılar ve içecekler. Site menü yapısından da anlaşılacağı gibi “bir iki seçenekle sınırlı” değil; grupta herkes farklı bir şey isterse sorun çıkarmıyor. :contentReference[oaicite:2]{index=2}

**Kimler için uygun?**  
- Kahvaltıyı merkezde yapıp yürüyüşe devam etmek isteyenler  
- Bahçede daha sakin oturmayı sevenler  
- Grupta “herkes farklı bir şey yesin” senaryosu yaşayanlar  

**Pratik ipuçları**  
- Merkezde olduğu için yürüyerek gitmek en rahatı.  
- Menü geniş olduğu için hızlı karar vermek zor olabilir; aç gidiyorsan önce “küçük bir başlangıç + ana” diye plan yapmak iyi oluyor.  
- Saat bilgisi ve iletişim için en güvenlisi mekânın kendi sitesi. :contentReference[oaicite:3]{index=3}
  `
}
,
{
  id: "dudu-mutfak",
  title: "Dudu Mutfak",
  description: "Kaş merkezde, küçük ve samimi bahçe ortamında kahvaltı ve ev işi lezzetleriyle öne çıkan popüler bir mutfak.",
  category: ["breakfast", "food", "cafe"],

  image: "../assets/1_places/dudu-mutfak-001.jpg",
  images: [
    "../assets/1_places/dudu-mutfak-002.jpg",
    "../assets/1_places/dudu-mutfak-003.jpg",
    "../assets/1_places/dudu-mutfak-004.jpg"
  ],

  rating: 4.6,
  price: "₺₺",
  selected: false,

  location: "Andifli Mahallesi Süleyman Sandıkçı Sokak No:1/3, Kaş 07580",
  distance: "Merkez",
  coordinates: { lat: 36.1997, lng: 29.6422 },

  website: "",
  phone: "+90 537 431 00 09",

  duration: "45 dk – 1.5 saat (yoğunlukta daha uzun)",

  facilities: [
    "Açık havada oturma",
    "Kahvaltı",
    "Masaya servis",
    "Kredi kartı geçerli",
    "Ücretsiz Wi-Fi"
  ],

  features: [
    "Küçük mekân, sıra ihtimali",
    "Kahvaltı + gün içi yemek akışı",
    "Vejetaryen/vegan seçenekler",
    "Samimi servis"
  ],

  tags: [
    "kahvaltı",
    "samimi",
    "küçük bahçe",
    "ev yapımı",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
**Genel**  
Dudu Mutfak, Kaş merkezde küçük ölçekli, samimi bir yer. Tripadvisor’da puanı yüksek ve “küçük ama sıcak” yorumları sık geliyor; mekânın adresi ve telefonu da aynı sayfada net görünüyor. :contentReference[oaicite:4]{index=4}

**Atmosfer**  
Burası “bahçede gölgede oturup kahvaltı yapalım” kafasında. Masa sayısı sınırlı olduğu için özellikle sabah saatlerinde sıra olabiliyor; bu da Dudu’nun en belirgin gerçeği. :contentReference[oaicite:5]{index=5}

**Ne yenir / ne içilir**  
Kahvaltı güçlü tarafı; bunun yanında gün içinde daha doyurucu tabaklar da var. Tripadvisor’daki işletme bilgilerinde öğün türleri “kahvaltı, öğle, akşam ve içecekler” olarak geçiyor; yani sadece sabahçı değil. :contentReference[oaicite:6]{index=6}

**Kimler için uygun?**  
- Kahvaltıda “ev işi” hissi sevenler  
- Küçük ve samimi mekân arayanlar  
- Vejetaryen/vegan opsiyon görmek isteyenler  

**Pratik ipuçları**  
- Mekân küçük: yoğun saatte gidersen 10–20 dakika bekleme ihtimalini hesaba kat.  
- Kahvaltı hedefse çok geç saate bırakmamak daha iyi; kalabalık dalgasını yakalamak kolay.  
- Adres/telefon/özellik gibi net bilgileri Tripadvisor üzerinden teyit etmek güvenli. :contentReference[oaicite:7]{index=7}
  `
}
,
{
  id: "sempati-turkish-cuisine",
  title: "Sempati Turkish Cuisine",
  description: "Uzun Çarşı civarında, ev yemekleri ve deniz ürünü seçenekleriyle bilinen, akşamları yoğunlaşan popüler bir Kaş restoranı.",
  category: ["food"],

  image: "../assets/1_places/sempati-turkish-cuisine-001.jpg",
  images: [
    "../assets/1_places/sempati-turkish-cuisine-002.jpg",
    "../assets/1_places/sempati-turkish-cuisine-003.jpg",
    "../assets/1_places/sempati-turkish-cuisine-004.jpg"
  ],

  rating: 4.7,
  price: "₺₺₺",
  selected: false,

  location: "Uzun Çarşı Caddesi, Gürsoy Sokak No:11, Kaş 07580",
  distance: "Merkez (Uzun Çarşı)",
  coordinates: { lat: 36.1997, lng: 29.6422 },

  website: "",
  phone: "+90 535 519 23 82",

  duration: "1.5–3 saat",

  facilities: [
    "Açık havada oturma",
    "Masaya servis",
    "Rezervasyon",
    "Kredi kartı geçerli",
    "Ücretsiz Wi-Fi"
  ],

  features: [
    "Ev yemekleri çizgisi + mezeler",
    "Deniz ürünü ve ızgara seçenekleri",
    "Akşamları kapıda yoğunluk olabiliyor",
    "Uzun Çarşı’ya çok yakın konum"
  ],

  tags: [
    "ev yemekleri",
    "mezeler",
    "uzun çarşı",
    "akşam yemeği",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
**Genel**  
Sempati, Kaş merkezde Uzun Çarşı çevresinde, ev yemekleri ve geniş menü yaklaşımıyla bilinen bir yer. Tripadvisor’da puanı yüksek görünüyor; adres, telefon ve çalışma saatleri de aynı sayfada net şekilde yer alıyor. :contentReference[oaicite:8]{index=8}

**Atmosfer**  
Burası “akşam yemeği için gidelim, masada biraz oturalım” temposunda. Konumu gereği (Uzun Çarşı) akşamları hareketlenmesi normal; yorumlarda da kapıda sıra/yoğunluk olabildiği notu geçiyor. :contentReference[oaicite:9]{index=9}

**Ne yenir / ne içilir**  
İşletme açıklamasında ev yemekleri, günlük sıcak/soğuk mezeler; ayrıca deniz ürünleri ve ızgara çeşitlerinden bahsediliyor. Yani sadece tek bir çizgiye sıkışmıyor; masayı meze ile kurup devam etmek mümkün. :contentReference[oaicite:10]{index=10}

**Kimler için uygun?**  
- Uzun Çarşı’da akşam yemeği planlayanlar  
- Ev yemeği tadını sevenler ama masada meze de olsun diyenler  
- Grup halinde gidip menüde seçenek arayanlar  

**Pratik ipuçları**  
- Akşam yoğunluğu olabiliyor: rezervasyon işleri kolaylaştırır. :contentReference[oaicite:11]{index=11}  
- Menü geniş olduğu için “her şeyi söyleyelim” yerine önce 2–3 net tabak seçmek daha iyi oluyor.  
- Konum olarak çarşı içi yürüyüşte çok rahat; araçla geliyorsan park konusu ayrı dert olabilir (Kaş klasiği).
  `
}
,
{
  id: "panorama-restaurant",
  title: "Panorama Restaurant",
  description: "Kaş merkezde, yüksek konumu sayesinde geniş manzaraya sahip, Akdeniz ve Türk mutfağı ağırlıklı akşam yemeği restoranı.",
  category: ["food"],

  image: "../assets/1_places/panorama-restaurant-001.jpg",
  images: [
    "../assets/1_places/panorama-restaurant-002.jpg",
    "../assets/1_places/panorama-restaurant-003.jpg",
    "../assets/1_places/panorama-restaurant-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez, yokuş üstü)",
  distance: "Merkez",
  coordinates: { lat: 36.2014, lng: 29.6402 },

  website: "",
  phone: "",

  duration: "1.5–3 saat",

  facilities: [
    "Manzaralı teras",
    "Masa servisi",
    "Akdeniz & Türk mutfağı",
    "Alkollü servis",
    "Rezervasyon önerilir"
  ],

  features: [
    "Geniş Kaş manzarası",
    "Gün batımında öne çıkan konum",
    "Akşam yemeği odaklı servis",
    "Sakin ve romantik ortam"
  ],

  tags: [
    "manzara",
    "teras",
    "akşam yemeği",
    "gün batımı",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Panorama Restaurant, adını gerçekten hak eden bir konumda yer alıyor. Kaş merkezde, biraz yukarıda kalan konumu sayesinde hem limanı hem de yerleşimi geniş açıdan görmek mümkün. Mekâna gelmenin ana motivasyonu çoğu zaman manzara; yemek deneyimi bu manzarayı tamamlayan bir unsur olarak ilerliyor.

Atmosfer:
Genel hava sakin ve akşam yemeğine odaklı. Gün batımına yakın saatlerde masalar doluyor, ortam daha romantik bir tona bürünüyor. Gürültülü eğlence yok; sohbet ve manzara ön planda.

Kimler için uygun?
- Gün batımında manzaraya karşı akşam yemeği isteyenler
- Çiftler ve sakin akşam planlayanlar
- Kaş’ı yukarıdan izlemek isteyen ziyaretçiler

Pratik ipuçları:
- Gün batımı saatleri için rezervasyon avantaj sağlar.
- Yokuşlu konum nedeniyle yürüyüşte rahat ayakkabı iyi olur.
- Manzara masaları erken dolabiliyor.

Kısa özet:
Panorama Restaurant, Kaş’ta manzara eşliğinde sakin ve uzun bir akşam yemeği geçirmek isteyenler için doğru adreslerden biri.
  `
}
,
{
  id: "luna-restaurant-bar",
  title: "Luna Restaurant & Bar",
  description: "Kaş merkezde, akşam yemekleri sonrası bar havasına dönen, restoran ve bar konseptini bir arada sunan mekân.",
  category: ["food", "bar"],

  image: "../assets/1_places/luna-restaurant-bar-001.jpg",
  images: [
    "../assets/1_places/luna-restaurant-bar-002.jpg",
    "../assets/1_places/luna-restaurant-bar-003.jpg",
    "../assets/1_places/luna-restaurant-bar-004.jpg"
  ],

  rating: 4.3,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.1998, lng: 29.6426 },

  website: "",
  phone: "",

  duration: "1.5–3 saat",

  facilities: [
    "Masa servisi",
    "Akşam yemeği",
    "Bar servisi",
    "Kokteyl & alkollü içecekler",
    "Rezervasyon önerilir"
  ],

  features: [
    "Restoran → bar dönüşen akşam akışı",
    "Merkez konum",
    "Akşam saatlerinde artan enerji",
    "Sosyal ortam"
  ],

  tags: [
    "restoran",
    "bar",
    "kokteyl",
    "akşam",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Luna Restaurant & Bar, Kaş’ta akşamı tek bir mekânda başlatıp bitirmek isteyenlerin tercih ettiği yerlerden biri. Günün erken saatlerinde daha çok restoran kimliğiyle çalışırken, akşam ilerledikçe bar tarafı öne çıkıyor.

Atmosfer:
Akşam yemeği saatlerinde daha sakin, geceye doğru daha hareketli. Müzik ve kalabalık seviyesi saat ilerledikçe artıyor. Tam bir kulüp havası yok; daha çok sosyal bir bar-restoran çizgisi var.

Kimler için uygun?
- Akşam yemeği sonrası mekân değiştirmek istemeyenler
- Yemek + içkiyi tek yerde planlayanlar
- Sosyal ama aşırı gürültülü olmayan ortam arayanlar

Pratik ipuçları:
- Akşam yemeği için gidersen daha sakin bir deneyim olur.
- Gece saatlerinde masa bulmak zorlaşabilir.
- Bar tarafı için geç saatler daha keyifli.

Kısa özet:
Luna, Kaş’ta restoran ve bar arasında geçiş yapan, akşamı tek noktada değerlendirmek isteyenler için pratik bir mekân.
  `
}
,
{
  id: "lilys-corner",
  title: "Lily’s Corner",
  description: "Kaş merkezde, küçük ölçekli, kahve ve hafif yemeklere odaklanan, samimi bir köşe kafe-restoran.",
  category: ["cafe", "food"],

  image: "../assets/1_places/lilys-corner-001.jpg",
  images: [
    "../assets/1_places/lilys-corner-002.jpg",
    "../assets/1_places/lilys-corner-003.jpg",
    "../assets/1_places/lilys-corner-004.jpg"
  ],

  rating: 4.5,
  price: "₺₺",
  selected: false,

  location: "Kaş Merkez, çarşı içi",
  distance: "Merkez",
  coordinates: { lat: 36.1995, lng: 29.6427 },

  website: "",
  phone: "",

  duration: "30 dk – 1.5 saat",

  facilities: [
    "Kahve servisi",
    "Hafif yemekler",
    "Açık oturma",
    "Masa servisi"
  ],

  features: [
    "Küçük ve samimi ortam",
    "Köşe konum",
    "Kısa mola için uygun",
    "Rahat kafe havası"
  ],

  tags: [
    "kafe",
    "kahve",
    "samimi",
    "hafif yemek",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Lily’s Corner, Kaş merkezde adının hakkını veren küçük ve köşe bir mekân. Büyük restoran beklentisiyle değil, kısa bir mola ya da hafif bir şeyler yemek için tercih ediliyor. Mekânın gücü samimiyet ve rahatlık hissi.

Atmosfer:
Küçük ölçekli, sakin ve rahat. Uzun akşam yemeklerinden çok, kahve molası ya da hafif atıştırmalık için uygun.

Kimler için uygun?
- Kısa mola vermek isteyenler
- Kahve eşliğinde oturmayı sevenler
- Büyük ve kalabalık mekânlardan kaçanlar

Pratik ipuçları:
- Masa sayısı sınırlı, yoğun saatlerde bekleme olabilir.
- Uzun süreli oturma planı için değil, kısa durak olarak düşünülmeli.
- Çarşı içi olduğu için yürüyerek ulaşım en kolay yol.

Kısa özet:
Lily’s Corner, Kaş’ta küçük, samimi ve rahat bir kafe-restoran arayanlar için sade ama keyifli bir durak.
  `
}
,
{
  id: "memedin-yeri",
  title: "Memed’in Yeri",
  description: "Kaş merkezde, ev yemeği ve ızgara ağırlıklı menüsüyle bilinen, sade ve yerel bir lokanta.",
  category: ["food"],

  image: "../assets/1_places/memedin-yeri-001.jpg",
  images: [
    "../assets/1_places/memedin-yeri-002.jpg",
    "../assets/1_places/memedin-yeri-003.jpg",
    "../assets/1_places/memedin-yeri-004.jpg"
  ],

  rating: 4.5,
  price: "₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.1999, lng: 29.6421 },

  website: "",
  phone: "",

  duration: "45 dk – 1.5 saat",

  facilities: [
    "Ev yemeği",
    "Izgara seçenekleri",
    "Masa servisi",
    "Alkolsüz servis",
    "Hızlı mutfak"
  ],

  features: [
    "Yerel lokanta havası",
    "Gösterişsiz ama doyurucu menü",
    "Öğle yemeğine çok uygun",
    "Fiyat–performans dengesi"
  ],

  tags: [
    "ev yemeği",
    "lokanta",
    "ızgara",
    "öğle yemeği",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Memed’in Yeri, Kaş’ta “gösteriş aramıyorum, düzgün yemek istiyorum” diyenlerin bildiği, daha çok yerel lokanta çizgisinde bir mekân. Menü ev yemeği ve ızgara etrafında dönüyor; tabaklar sade ama doyurucu.

Atmosfer:
Lokanta havası net. Uzun akşam oturmalarından çok, öğle veya erken akşam yemeğine uygun. Gürültü yok, hızlı ama telaşsız bir servis var.

Kimler için uygun?
- Ev yemeği arayanlar
- Öğle yemeğinde hızlı ama düzgün bir alternatif isteyenler
- Alkollü mekân istemeyenler
- Yerel lokanta deneyimi sevenler

Pratik ipuçları:
- Öğle saatlerinde yoğunluk oluşabiliyor.
- Günlük çıkanları sormak her zaman avantajlı.
- Uzun uzun oturmalık değil, yemek odaklı düşünülmeli.

Kısa özet:
Memed’in Yeri, Kaş’ta sade, yerel ve fiyat–performans odaklı bir lokanta arayanlar için güvenilir bir durak.
  `
}
,
{
  id: "tasra-restoran",
  title: "Taşra Restoran",
  description: "Kaş merkezde, Türk mutfağı ağırlıklı menüsü ve rahat ortamıyla öğle ve akşam yemeklerinde tercih edilen restoran.",
  category: ["food"],

  image: "../assets/1_places/tasra-restoran-001.jpg",
  images: [
    "../assets/1_places/tasra-restoran-002.jpg",
    "../assets/1_places/tasra-restoran-003.jpg",
    "../assets/1_places/tasra-restoran-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺",
  selected: false,

  location: "Kaş Merkez, Andifli Mah.",
  distance: "Merkez",
  coordinates: { lat: 36.1996, lng: 29.6423 },

  website: "",
  phone: "",

  duration: "1–2 saat",

  facilities: [
    "Masa servisi",
    "Türk mutfağı",
    "Alkollü & alkolsüz içecek",
    "Açık oturma"
  ],

  features: [
    "Sade ve rahat restoran havası",
    "Geniş menü",
    "Öğle ve akşam yemeğine uygun",
    "Merkezde kolay ulaşım"
  ],

  tags: [
    "türk mutfağı",
    "restoran",
    "öğle yemeği",
    "akşam yemeği",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Taşra Restoran, Kaş’ta hem öğle hem de akşam yemeğinde tercih edilen, sade ama geniş menülü bir restoran. İsminin çağrıştırdığı gibi abartıdan uzak; tanıdık Türk mutfağı lezzetlerine odaklanıyor.

Atmosfer:
Rahat ve gündelik. Uzun masa kurulan meyhane havası yok; klasik restoran düzeni hâkim. Gün içinde gelip giden bir temposu var.

Kimler için uygun?
- Türk mutfağına yakın tatlar arayanlar
- Öğle yemeği için merkezde bir durak isteyenler
- Akşam yemeğinde sakin bir restoran arayanlar

Pratik ipuçları:
- Menü geniş; karar vermek zorlaşabilir.
- Öğle saatleri daha hızlı servis temposunda.
- Merkezde olduğu için yürüyerek gelmek kolay.

Kısa özet:
Taşra Restoran, Kaş’ta sade, rahat ve tanıdık lezzetlerle yemek yemek isteyenler için pratik bir seçenek.
  `
}
,
{
  id: "yelken-restaurant-meyhane",
  title: "Yelken Restaurant & Meyhane",
  description: "Kaş merkezde, deniz ürünü ve meze ağırlıklı menüsüyle restoran ve meyhane çizgisini birleştiren akşam mekânı.",
  category: ["meyhane", "food"],

  image: "../assets/1_places/yelken-restaurant-meyhane-001.jpg",
  images: [
    "../assets/1_places/yelken-restaurant-meyhane-002.jpg",
    "../assets/1_places/yelken-restaurant-meyhane-003.jpg",
    "../assets/1_places/yelken-restaurant-meyhane-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺₺",
  selected: false,

  location: "Kaş Merkez, Andifli Mah.",
  distance: "Merkez",
  coordinates: { lat: 36.1994, lng: 29.6426 },

  website: "",
  phone: "",

  duration: "2–3 saat",

  facilities: [
    "Masa servisi",
    "Deniz ürünleri",
    "Meze çeşitleri",
    "Alkollü servis",
    "Rezervasyon önerilir"
  ],

  features: [
    "Restoran + meyhane hibrit konsepti",
    "Akşam yemeği odaklı",
    "Sohbet ve masa kültürü",
    "Merkez konum"
  ],

  tags: [
    "meyhane",
    "rakı-balık",
    "deniz ürünleri",
    "akşam yemeği",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Yelken Restaurant & Meyhane, Kaş’ta restoran ile meyhane arasında duran bir akşam mekânı. Menüde deniz ürünleri ve mezeler ön planda; rakı eşliğinde uzun bir masa kurmak mümkün.

Atmosfer:
Akşam saatlerinde dolan, sohbet ve masa kültürüne uygun bir ortam. Gürültülü eğlence yok; daha çok akşam yemeği temposu hâkim.

Kimler için uygun?
- Rakı–balık akşamı planlayanlar
- Deniz ürünü sevenler
- Uzun sofralı ama kontrollü bir ortam isteyenler

Pratik ipuçları:
- Akşam saatleri için rezervasyon faydalı.
- Meze ile başlayıp ana yemeği sonra seçmek masayı daha keyifli kılıyor.
- Merkezde olduğu için ulaşım kolay.

Kısa özet:
Yelken Restaurant & Meyhane, Kaş’ta deniz ürünü ve meze odaklı, sakin ama dolu bir meyhane akşamı arayanlar için uygun bir adres.
  `
}
,

{
  id: "sardelaki-greek-tavern",
  title: "Sardelaki Greek Tavern",
  description: "Kaş merkezde, Yunan mutfağı odaklı mezeleri ve deniz ürünü ağırlıklı menüsüyle sakin akşam sofraları sunan bir taverna.",
  category: ["meyhane", "food"],

  image: "../assets/1_places/sardelaki-greek-tavern-001.jpg",
  images: [
    "../assets/1_places/sardelaki-greek-tavern-002.jpg",
    "../assets/1_places/sardelaki-greek-tavern-003.jpg",
    "../assets/1_places/sardelaki-greek-tavern-004.jpg"
  ],

  rating: 4.6,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.2001, lng: 29.6408 },

  website: "",
  phone: "",

  duration: "2–3 saat",

  facilities: [
    "Masa servisi",
    "Yunan mezeleri",
    "Deniz ürünleri",
    "Alkollü servis",
    "Rezervasyon önerilir"
  ],

  features: [
    "Yunan mutfağı ağırlıklı menü",
    "Sakin ve sohbet odaklı atmosfer",
    "Akşam yemeği temposu",
    "Merkezde kolay ulaşım"
  ],

  tags: [
    "yunan mutfağı",
    "taverna",
    "meze",
    "deniz ürünleri",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Sardelaki Greek Tavern, Kaş’ta Yunan mutfağına özgü meze ve deniz ürünü lezzetlerini sakin bir taverna atmosferinde sunan yerlerden biri. Menü ve servis anlayışı hızlı tüketimden çok, masada uzun süre kalmaya uygun şekilde ilerliyor.

Atmosfer:
Genel hava sakin ve dengeli. Müzik geri planda, sohbet masanın merkezinde. Akşam saatlerinde doluluk artıyor ama ortam genellikle kontrolünü koruyor.

Kimler için uygun?
- Yunan mutfağı ve mezelerini sevenler
- Rakı ya da uzo eşliğinde uzun masa kurmak isteyenler
- Gürültülü eğlence yerine sohbet arayanlar

Pratik ipuçları:
- Akşam saatleri için rezervasyon iyi olur.
- Meze çeşitlerini karışık söylemek masayı daha keyifli kılıyor.
- Merkezde olduğu için yürüyerek ulaşım rahat.

Kısa özet:
Sardelaki, Kaş’ta Yunan mutfağı tadında, sakin ve uzun akşam sofraları arayanlar için güçlü bir taverna seçeneği.
  `
}
,
{
  id: "bella-vita-pizza",
  title: "Bella Vita Pizza",
  description: "Kaş merkezde, odun fırın pizzalarıyla bilinen, hızlı ama kaliteli yemek arayanlara hitap eden İtalyan tarzı pizza mekânı.",
  category: ["food"],

  image: "../assets/1_places/bella-vita-pizza-001.jpg",
  images: [
    "../assets/1_places/bella-vita-pizza-002.jpg",
    "../assets/1_places/bella-vita-pizza-003.jpg",
    "../assets/1_places/bella-vita-pizza-004.jpg"
  ],

  rating: 4.5,
  price: "₺₺",
  selected: false,

  location: "Kaş Merkez, Andifli Mah.",
  distance: "Merkez",
  coordinates: { lat: 36.1995, lng: 29.6424 },

  website: "",
  phone: "",

  duration: "30 dk – 1.5 saat",

  facilities: [
    "Odun fırını",
    "Pizza & makarna",
    "Masa servisi",
    "Take-away",
    "Alkollü & alkolsüz içecek"
  ],

  features: [
    "Odun fırın pizza",
    "Hızlı servis",
    "Merkez konum",
    "Rahat ve gündelik ortam"
  ],

  tags: [
    "pizza",
    "italyan mutfağı",
    "odun fırını",
    "hızlı yemek",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Bella Vita Pizza, Kaş’ta “bir akşam pizza yiyelim ama düzgün olsun” diyenlerin uğradığı merkez pizza adreslerinden biri. Odun fırın pizzalar menünün ana omurgasını oluşturuyor ve servis temposu genelde hızlı.

Atmosfer:
Gündelik ve rahat. Uzun akşam sofralarından ziyade, pizza yiyip devam etmeye uygun bir düzen var. Turistik ama bunaltıcı olmayan bir hareketlilik hâkim.

Kimler için uygun?
- Pizza ve İtalyan mutfağı sevenler
- Uzun meyhane akşamı istemeyenler
- Hızlı ama kaliteli bir öğün arayanlar

Pratik ipuçları:
- Akşam yoğunluğu oluşabiliyor; pizza çıkış süreleri uzayabilir.
- Take-away seçeneği pratik bir alternatif.
- Uzun süreli oturma planı için değil, yemek odaklı düşünülmeli.

Kısa özet:
Bella Vita Pizza, Kaş’ta odun fırın pizzasıyla öne çıkan, hızlı ve net bir pizza durağı.
  `
}
,
{
  id: "oburus-notos",
  title: "Oburus Notos",
  description: "Kaş’ta, Oburus mutfak anlayışını daha modern ve yaratıcı tabaklarla sunan, akşam yemeği odaklı bir restoran.",
  category: ["food"],

  image: "../assets/1_places/oburus-notos-001.jpg",
  images: [
    "../assets/1_places/oburus-notos-002.jpg",
    "../assets/1_places/oburus-notos-003.jpg",
    "../assets/1_places/oburus-notos-004.jpg"
  ],

  rating: 4.7,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.2002, lng: 29.6406 },

  website: "",
  phone: "",

  duration: "2–3 saat",

  facilities: [
    "Modern mutfak",
    "Masa servisi",
    "Şarap & kokteyl",
    "Akşam yemeği servisi",
    "Rezervasyon önerilir"
  ],

  features: [
    "Modern ve yaratıcı tabaklar",
    "Akşam yemeği odaklı konsept",
    "Sunum ön planda",
    "Daha butik restoran deneyimi"
  ],

  tags: [
    "modern mutfak",
    "fine dining",
    "yaratıcı tabaklar",
    "akşam yemeği",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Oburus Notos, Oburus mutfak çizgisinin Kaş’taki daha modern ve deneysel yorumunu sunan bir restoran. Menü, klasik ev yemeklerinden ziyade daha yaratıcı ve sunum odaklı tabaklar etrafında şekilleniyor.

Atmosfer:
Şık ama kasıntısız. Akşam yemeğine odaklı bir düzen var; masa başında geçirilen süre daha uzun. Gürültülü bir ortam yok, daha çok yemek deneyimi ön planda.

Kimler için uygun?
- Modern mutfak ve farklı tabaklar denemek isteyenler
- Klasik restoranlardan sıkılanlar
- Akşam yemeğini deneyim olarak görenler

Pratik ipuçları:
- Rezervasyon özellikle yaz sezonunda faydalı.
- Menüde porsiyonlar paylaşmaya uygun olabilir.
- Acele bir yemek planı için değil, yavaş akşamlar için düşünülmeli.

Kısa özet:
Oburus Notos, Kaş’ta modern ve yaratıcı mutfak deneyimi arayanlar için öne çıkan, butik bir akşam yemeği adresi.
  `
}
,
{
  id: "emre-restaurant",
  title: "Emre Restaurant",
  description: "Kaş merkezde, deniz ürünü ve Türk mutfağı ağırlıklı menüsüyle uzun yıllardır hizmet veren klasik bir restoran.",
  category: ["food"],

  image: "../assets/1_places/emre-restaurant-001.jpg",
  images: [
    "../assets/1_places/emre-restaurant-002.jpg",
    "../assets/1_places/emre-restaurant-003.jpg",
    "../assets/1_places/emre-restaurant-004.jpg"
  ],

  rating: 4.5,
  price: "₺₺₺",
  selected: false,

  location: "Kaş Merkez, liman/çarşı çevresi",
  distance: "Merkez",
  coordinates: { lat: 36.1992, lng: 29.6430 },

  website: "",
  phone: "",

  duration: "1.5–3 saat",

  facilities: [
    "Deniz ürünleri",
    "Masa servisi",
    "Alkollü servis",
    "Açık oturma",
    "Rezervasyon önerilir"
  ],

  features: [
    "Balık ve deniz ürünü ağırlıklı menü",
    "Uzun süredir hizmet veren işletme",
    "Akşam yemeği odaklı",
    "Merkez konum"
  ],

  tags: [
    "balık",
    "deniz ürünleri",
    "restoran",
    "akşam yemeği",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Emre Restaurant, Kaş’ta uzun süredir hizmet veren, özellikle balık ve deniz ürünü ile bilinen merkez restoranlardan biri. Menü Türk mutfağı ve deniz ürünleri etrafında dönüyor; klasik çizgiden şaşmıyor.

Atmosfer:
Restoran havası net. Akşam saatlerinde doluluk artıyor, masa başı sohbet ve yemek temposu öne çıkıyor.

Kimler için uygun?
- Balık ve deniz ürünü sevenler
- Akşam yemeğini merkezde geçirmek isteyenler
- Klasik restoran deneyimi arayanlar

Pratik ipuçları:
- Balık çeşitleri günlük duruma göre değişebilir.
- Akşam için rezervasyon iyi olur.
- Uzun oturmalı bir akşam planına uygun.

Kısa özet:
Emre Restaurant, Kaş’ta balık ve deniz ürünü ağırlıklı, güvenilir ve klasik bir akşam yemeği adresi.
  `
}
,
{
  id: "ora-kebap-restaurant",
  title: "Ora Kebap Restaurant",
  description: "Kaş merkezde, kebap ve ızgara et odaklı menüsüyle klasik ocakbaşı çizgisinde hizmet veren bir restoran.",
  category: ["food"],

  image: "../assets/1_places/ora-kebap-restaurant-001.jpg",
  images: [
    "../assets/1_places/ora-kebap-restaurant-002.jpg",
    "../assets/1_places/ora-kebap-restaurant-003.jpg",
    "../assets/1_places/ora-kebap-restaurant-004.jpg"
  ],

  rating: 4.3,
  price: "₺₺₺",
  selected: false,

  location: "Kaş Merkez, Andifli Mah.",
  distance: "Merkez",
  coordinates: { lat: 36.1996, lng: 29.6424 },

  website: "",
  phone: "",

  duration: "1–2.5 saat",

  facilities: [
    "Kebap & ızgara",
    "Masa servisi",
    "Alkollü & alkolsüz içecek",
    "Rezervasyon önerilir"
  ],

  features: [
    "Kebap odaklı menü",
    "Akşam yemeği temposu",
    "Merkezde kolay ulaşım",
    "Klasik restoran düzeni"
  ],

  tags: [
    "kebap",
    "ızgara",
    "ocakbaşı",
    "akşam yemeği",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Ora Kebap Restaurant, Kaş’ta kebap ve ızgara et yemek isteyenlerin tercih ettiği merkez restoranlardan biri. Menü klasik kebap çizgisinde; fazla deneysellik yok, tanıdık tatlar ön planda.

Atmosfer:
Restoran düzeni hâkim. Akşam saatlerinde doluluk artıyor ama ortam genelde yemek odaklı kalıyor.

Kimler için uygun?
- Kebap ve ızgara sevenler
- Akşam yemeğini merkezde planlayanlar
- Klasik restoran düzenini tercih edenler

Pratik ipuçları:
- Akşam yoğunluğu için rezervasyon rahat ettirir.
- Meze beklentisini düşük tutup ana yemeğe odaklanmak daha iyi sonuç verir.
- Merkez konum yürüyerek ulaşımı kolaylaştırır.

Kısa özet:
Ora Kebap Restaurant, Kaş’ta kebap odaklı, sade ve net bir akşam yemeği seçeneği.
  `
}
,
{
  id: "kasik-manti-ev-yemekleri",
  title: "Kaşık Mantı & Ev Yemekleri",
  description: "Kaş merkezde, mantı ve ev yemeği odaklı menüsüyle sade, hızlı ve doyurucu öğünler sunan küçük bir lokanta.",
  category: ["food"],

  image: "../assets/1_places/kasik-manti-ev-yemekleri-001.jpg",
  images: [
    "../assets/1_places/kasik-manti-ev-yemekleri-002.jpg",
    "../assets/1_places/kasik-manti-ev-yemekleri-003.jpg",
    "../assets/1_places/kasik-manti-ev-yemekleri-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.1998, lng: 29.6421 },

  website: "",
  phone: "",

  duration: "30 dk – 1.25 saat",

  facilities: [
    "Ev yemeği",
    "Mantı çeşitleri",
    "Masa servisi",
    "Alkolsüz servis",
    "Hızlı mutfak"
  ],

  features: [
    "Mantı odaklı menü",
    "Ev yemeği hissi",
    "Öğle yemeğine uygun",
    "Fiyat–performans dengesi"
  ],

  tags: [
    "mantı",
    "ev yemeği",
    "lokanta",
    "öğle yemeği",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Kaşık Mantı & Ev Yemekleri, Kaş’ta mantı ve ev yemeği denince akla gelen sade lokantalardan biri. Menü çok geniş değil; zaten mekânın iddiası da bu değil. Buraya gelenler mantı ve günlük çıkan ev yemekleri için geliyor.

Atmosfer:
Klasik lokanta havası hâkim. Uzun oturmalar veya akşam eğlencesi yok. Daha çok öğle saatlerinde hareketli, akşamları ise sakin.

Kimler için uygun?
- Mantı sevenler
- Ev yemeği arayanlar
- Öğle yemeğini hızlı ama doyurucu geçirmek isteyenler

Pratik ipuçları:
- Günlük yemekleri sormak avantaj sağlar.
- Öğle saatlerinde yoğunluk olabilir.
- Uzun oturmalı bir plan için değil, yemek odaklı düşünülmeli.

Kısa özet:
Kaşık Mantı & Ev Yemekleri, Kaş’ta mantı ve ev yemeği için net, sade ve güvenilir bir lokanta.
  `
}
,
{
  id: "bay-kofte",
  title: "Bay Köfte",
  description: "Kaş merkezde, köfte ve ızgara odaklı menüsüyle sade, doyurucu ve yemek merkezli bir köfteci.",
  category: ["food"],

  image: "../assets/1_places/bay-kofte-001.jpg",
  images: [
    "../assets/1_places/bay-kofte-002.jpg",
    "../assets/1_places/bay-kofte-003.jpg",
    "../assets/1_places/bay-kofte-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺",
  selected: false,

  location: "Kaş Merkez, Andifli Mah.",
  distance: "Merkez",
  coordinates: { lat: 36.1994, lng: 29.6420 },

  website: "",
  phone: "",

  duration: "30–75 dk",

  facilities: [
    "Izgara köfte",
    "Masa servisi",
    "Alkolsüz servis",
    "Hızlı mutfak"
  ],

  features: [
    "Köfte odaklı menü",
    "Sade lokanta havası",
    "Öğle ve erken akşam için uygun",
    "Fiyat–performans dengesi"
  ],

  tags: [
    "köfte",
    "ızgara",
    "lokanta",
    "hızlı yemek",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Bay Köfte, Kaş’ta köfte üzerine yoğunlaşan, süsü olmayan ama net bir beklentiye cevap veren bir köfteci. Menüde köfte ve ızgara çeşitleri ön planda; karmaşık tabaklar ya da uzun menüler yok.

Atmosfer:
Lokanta havası baskın. Uzun akşam sofraları için değil, yemek odaklı kısa oturmalar için uygun. Öğle saatlerinde daha hareketli.

Kimler için uygun?
- Köfte sevenler
- Öğle yemeğinde hızlı ama doyurucu bir şey isteyenler
- Alkollü mekân aramayanlar

Pratik ipuçları:
- Öğle saatlerinde yoğunluk oluşabiliyor.
- Uzun uzun oturmak için değil, yemek için gelmek daha doğru.
- Menü sade olduğu için karar vermek kolay.

Kısa özet:
Bay Köfte, Kaş’ta köfte odaklı, sade ve doyurucu bir öğün arayanlar için pratik bir adres.
  `
}
,
{
  id: "hold-and-bite",
  title: "Hold&Bite",
  description: "Kaş merkezde, burger ve sandviç odaklı menüsüyle modern street food anlayışını sunan küçük ve hızlı servisli bir mekân.",
  category: ["food"],

  image: "../assets/1_places/hold-and-bite-001.jpg",
  images: [
    "../assets/1_places/hold-and-bite-002.jpg",
    "../assets/1_places/hold-and-bite-003.jpg",
    "../assets/1_places/hold-and-bite-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.1997, lng: 29.6429 },

  website: "",
  phone: "",

  duration: "30–60 dk",

  facilities: [
    "Burger & sandviç",
    "Hızlı servis",
    "Take-away",
    "Alkolsüz servis"
  ],

  features: [
    "Burger odaklı menü",
    "Modern street food yaklaşımı",
    "Kısa sürede servis",
    "Merkez konum"
  ],

  tags: [
    "burger",
    "street food",
    "sandviç",
    "hızlı yemek",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Hold&Bite, Kaş’ta burger ve sandviç üzerine odaklanan, modern street food çizgisinde bir mekân. Menü sade; amaç çok seçenekten ziyade net birkaç ürünü düzgün yapmak.

Atmosfer:
Küçük, hızlı ve gündelik. Uzun oturmaya değil, yiyip devam etmeye uygun. Genç kitle ve hızlı yemek arayanlar ağırlıkta.

Kimler için uygun?
- Burger sevenler
- Akşam yemeğini kısa tutmak isteyenler
- Uzun restoran oturması istemeyenler

Pratik ipuçları:
- Take-away sık tercih ediliyor.
- Yoğun saatlerde servis süresi biraz uzayabilir.
- Büyük grup yemekleri için uygun değil.

Kısa özet:
Hold&Bite, Kaş’ta burger ve sandviçle hızlı ama düzgün bir öğün arayanlar için net bir seçenek.
  `
}
,
{
  id: "zoka-street-food",
  title: "Zoka Street Food",
  description: "Kaş merkezde, sokak lezzetleri odaklı menüsüyle hızlı, doyurucu ve pratik yemekler sunan küçük ölçekli bir street food noktası.",
  category: ["food"],

  image: "../assets/1_places/zoka-street-food-001.jpg",
  images: [
    "../assets/1_places/zoka-street-food-002.jpg",
    "../assets/1_places/zoka-street-food-003.jpg",
    "../assets/1_places/zoka-street-food-004.jpg"
  ],

  rating: 4.5,
  price: "₺₺",
  selected: false,

  location: "Kaş Merkez, Andifli Mah.",
  distance: "Merkez",
  coordinates: { lat: 36.1996, lng: 29.6427 },

  website: "",
  phone: "",

  duration: "20–45 dk",

  facilities: [
    "Hızlı servis",
    "Ayakta/yüksek masa",
    "Take-away",
    "Alkolsüz servis"
  ],

  features: [
    "Street food konsepti",
    "Kısa sürede servis",
    "Gece yemeğine uygun",
    "Merkez konum"
  ],

  tags: [
    "street food",
    "hızlı yemek",
    "gece yemeği",
    "pratik",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Zoka Street Food, Kaş’ta “acıkınca hızlıca bir şeyler yiyelim” ihtiyacına net cevap veren yerlerden biri. Uzun masa, servis ritüeli ya da akşam yemeği temposu yok; burada amaç kısa sürede doyurucu bir şeyler yemek.

Atmosfer:
Street food mantığı hâkim. Otur–kalk hızlı, ortam hareketli. Özellikle akşam geç saatlerde ve bar çıkışlarında daha canlı.

Kimler için uygun?
- Hızlı ve pratik yemek arayanlar
- Uzun restoran oturması istemeyenler
- Gece acıkanlar

Pratik ipuçları:
- Ayakta veya yüksek masada yemek normal.
- Take-away en sık kullanılan seçenek.
- Yoğun saatlerde sıra oluşabilir ama hızlı ilerler.

Kısa özet:
Zoka Street Food, Kaş’ta hızlı, net ve doyurucu sokak lezzetleri arayanlar için ideal bir kısa durak.
  `
}
,

{
  id: "oburus-notos",
  title: "Oburus Notos",
  description: "Kaş’ta, Oburus mutfak anlayışını daha modern ve yaratıcı tabaklarla sunan, akşam yemeği odaklı bir restoran.",
  category: ["food"],

  image: "../assets/1_places/oburus-notos-001.jpg",
  images: [
    "../assets/1_places/oburus-notos-002.jpg",
    "../assets/1_places/oburus-notos-003.jpg",
    "../assets/1_places/oburus-notos-004.jpg"
  ],

  rating: 4.7,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.2002, lng: 29.6406 },

  website: "",
  phone: "",

  duration: "2–3 saat",

  facilities: [
    "Modern mutfak",
    "Masa servisi",
    "Şarap & kokteyl",
    "Akşam yemeği servisi",
    "Rezervasyon önerilir"
  ],

  features: [
    "Modern ve yaratıcı tabaklar",
    "Akşam yemeği odaklı konsept",
    "Sunum ön planda",
    "Daha butik restoran deneyimi"
  ],

  tags: [
    "modern mutfak",
    "fine dining",
    "yaratıcı tabaklar",
    "akşam yemeği",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Oburus Notos, Oburus mutfak çizgisinin Kaş’taki daha modern ve deneysel yorumunu sunan bir restoran. Menü, klasik ev yemeklerinden ziyade daha yaratıcı ve sunum odaklı tabaklar etrafında şekilleniyor.

Atmosfer:
Şık ama kasıntısız. Akşam yemeğine odaklı bir düzen var; masa başında geçirilen süre daha uzun. Gürültülü bir ortam yok, daha çok yemek deneyimi ön planda.

Kimler için uygun?
- Modern mutfak ve farklı tabaklar denemek isteyenler
- Klasik restoranlardan sıkılanlar
- Akşam yemeğini deneyim olarak görenler

Pratik ipuçları:
- Rezervasyon özellikle yaz sezonunda faydalı.
- Menüde porsiyonlar paylaşmaya uygun olabilir.
- Acele bir yemek planı için değil, yavaş akşamlar için düşünülmeli.

Kısa özet:
Oburus Notos, Kaş’ta modern ve yaratıcı mutfak deneyimi arayanlar için öne çıkan, butik bir akşam yemeği adresi.
  `
}
,

{
  id: "bella-vita-pizza",
  title: "Bella Vita Pizza",
  description: "Kaş merkezde, odun fırın pizzalarıyla bilinen, hızlı ama kaliteli yemek arayanlara hitap eden İtalyan tarzı pizza mekânı.",
  category: ["food"],

  image: "../assets/1_places/bella-vita-pizza-001.jpg",
  images: [
    "../assets/1_places/bella-vita-pizza-002.jpg",
    "../assets/1_places/bella-vita-pizza-003.jpg",
    "../assets/1_places/bella-vita-pizza-004.jpg"
  ],

  rating: 4.5,
  price: "₺₺",
  selected: false,

  location: "Kaş Merkez, Andifli Mah.",
  distance: "Merkez",
  coordinates: { lat: 36.1995, lng: 29.6424 },

  website: "",
  phone: "",

  duration: "30 dk – 1.5 saat",

  facilities: [
    "Odun fırını",
    "Pizza & makarna",
    "Masa servisi",
    "Take-away",
    "Alkollü & alkolsüz içecek"
  ],

  features: [
    "Odun fırın pizza",
    "Hızlı servis",
    "Merkez konum",
    "Rahat ve gündelik ortam"
  ],

  tags: [
    "pizza",
    "italyan mutfağı",
    "odun fırını",
    "hızlı yemek",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Bella Vita Pizza, Kaş’ta “bir akşam pizza yiyelim ama düzgün olsun” diyenlerin uğradığı merkez pizza adreslerinden biri. Odun fırın pizzalar menünün ana omurgasını oluşturuyor ve servis temposu genelde hızlı.

Atmosfer:
Gündelik ve rahat. Uzun akşam sofralarından ziyade, pizza yiyip devam etmeye uygun bir düzen var. Turistik ama bunaltıcı olmayan bir hareketlilik hâkim.

Kimler için uygun?
- Pizza ve İtalyan mutfağı sevenler
- Uzun meyhane akşamı istemeyenler
- Hızlı ama kaliteli bir öğün arayanlar

Pratik ipuçları:
- Akşam yoğunluğu oluşabiliyor; pizza çıkış süreleri uzayabilir.
- Take-away seçeneği pratik bir alternatif.
- Uzun süreli oturma planı için değil, yemek odaklı düşünülmeli.

Kısa özet:
Bella Vita Pizza, Kaş’ta odun fırın pizzasıyla öne çıkan, hızlı ve net bir pizza durağı.
  `
}
,
{
  id: "sardelaki-greek-tavern",
  title: "Sardelaki Greek Tavern",
  description: "Kaş merkezde, Yunan mutfağı odaklı mezeleri ve deniz ürünü ağırlıklı menüsüyle sakin akşam sofraları sunan bir taverna.",
  category: ["meyhane", "food"],

  image: "../assets/1_places/sardelaki-greek-tavern-001.jpg",
  images: [
    "../assets/1_places/sardelaki-greek-tavern-002.jpg",
    "../assets/1_places/sardelaki-greek-tavern-003.jpg",
    "../assets/1_places/sardelaki-greek-tavern-004.jpg"
  ],

  rating: 4.6,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.2001, lng: 29.6408 },

  website: "",
  phone: "",

  duration: "2–3 saat",

  facilities: [
    "Masa servisi",
    "Yunan mezeleri",
    "Deniz ürünleri",
    "Alkollü servis",
    "Rezervasyon önerilir"
  ],

  features: [
    "Yunan mutfağı ağırlıklı menü",
    "Sakin ve sohbet odaklı atmosfer",
    "Akşam yemeği temposu",
    "Merkezde kolay ulaşım"
  ],

  tags: [
    "yunan mutfağı",
    "taverna",
    "meze",
    "deniz ürünleri",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Sardelaki Greek Tavern, Kaş’ta Yunan mutfağına özgü meze ve deniz ürünü lezzetlerini sakin bir taverna atmosferinde sunan yerlerden biri. Menü ve servis anlayışı hızlı tüketimden çok, masada uzun süre kalmaya uygun şekilde ilerliyor.

Atmosfer:
Genel hava sakin ve dengeli. Müzik geri planda, sohbet masanın merkezinde. Akşam saatlerinde doluluk artıyor ama ortam genellikle kontrolünü koruyor.

Kimler için uygun?
- Yunan mutfağı ve mezelerini sevenler
- Rakı ya da uzo eşliğinde uzun masa kurmak isteyenler
- Gürültülü eğlence yerine sohbet arayanlar

Pratik ipuçları:
- Akşam saatleri için rezervasyon iyi olur.
- Meze çeşitlerini karışık söylemek masayı daha keyifli kılıyor.
- Merkezde olduğu için yürüyerek ulaşım rahat.

Kısa özet:
Sardelaki, Kaş’ta Yunan mutfağı tadında, sakin ve uzun akşam sofraları arayanlar için güçlü bir taverna seçeneği.
  `
},

{
  id: "bella-vita-pizza",
  title: "Bella Vita Pizza",
  description: "Kaş merkezde, odun fırın pizzalarıyla bilinen, hızlı ama kaliteli yemek arayanlara hitap eden İtalyan tarzı pizza mekânı.",
  category: ["food"],

  image: "../assets/1_places/bella-vita-pizza-001.jpg",
  images: [
    "../assets/1_places/bella-vita-pizza-002.jpg",
    "../assets/1_places/bella-vita-pizza-003.jpg",
    "../assets/1_places/bella-vita-pizza-004.jpg"
  ],

  rating: 4.5,
  price: "₺₺",
  selected: false,

  location: "Kaş Merkez, Andifli Mah.",
  distance: "Merkez",
  coordinates: { lat: 36.1995, lng: 29.6424 },

  website: "",
  phone: "",

  duration: "30 dk – 1.5 saat",

  facilities: [
    "Odun fırını",
    "Pizza & makarna",
    "Masa servisi",
    "Take-away",
    "Alkollü & alkolsüz içecek"
  ],

  features: [
    "Odun fırın pizza",
    "Hızlı servis",
    "Merkez konum",
    "Rahat ve gündelik ortam"
  ],

  tags: [
    "pizza",
    "italyan mutfağı",
    "odun fırını",
    "hızlı yemek",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Bella Vita Pizza, Kaş’ta “bir akşam pizza yiyelim ama düzgün olsun” diyenlerin uğradığı merkez pizza adreslerinden biri. Odun fırın pizzalar menünün ana omurgasını oluşturuyor ve servis temposu genelde hızlı.

Atmosfer:
Gündelik ve rahat. Uzun akşam sofralarından ziyade, pizza yiyip devam etmeye uygun bir düzen var. Turistik ama bunaltıcı olmayan bir hareketlilik hâkim.

Kimler için uygun?
- Pizza ve İtalyan mutfağı sevenler
- Uzun meyhane akşamı istemeyenler
- Hızlı ama kaliteli bir öğün arayanlar

Pratik ipuçları:
- Akşam yoğunluğu oluşabiliyor; pizza çıkış süreleri uzayabilir.
- Take-away seçeneği pratik bir alternatif.
- Uzun süreli oturma planı için değil, yemek odaklı düşünülmeli.

Kısa özet:
Bella Vita Pizza, Kaş’ta odun fırın pizzasıyla öne çıkan, hızlı ve net bir pizza durağı.
  `
}
,
{
  id: "oburus-notos",
  title: "Oburus Notos",
  description: "Kaş’ta, Oburus mutfak anlayışını daha modern ve yaratıcı tabaklarla sunan, akşam yemeği odaklı bir restoran.",
  category: ["food"],

  image: "../assets/1_places/oburus-notos-001.jpg",
  images: [
    "../assets/1_places/oburus-notos-002.jpg",
    "../assets/1_places/oburus-notos-003.jpg",
    "../assets/1_places/oburus-notos-004.jpg"
  ],

  rating: 4.7,
  price: "₺₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.2002, lng: 29.6406 },

  website: "",
  phone: "",

  duration: "2–3 saat",

  facilities: [
    "Modern mutfak",
    "Masa servisi",
    "Şarap & kokteyl",
    "Akşam yemeği servisi",
    "Rezervasyon önerilir"
  ],

  features: [
    "Modern ve yaratıcı tabaklar",
    "Akşam yemeği odaklı konsept",
    "Sunum ön planda",
    "Daha butik restoran deneyimi"
  ],

  tags: [
    "modern mutfak",
    "fine dining",
    "yaratıcı tabaklar",
    "akşam yemeği",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Oburus Notos, Oburus mutfak çizgisinin Kaş’taki daha modern ve deneysel yorumunu sunan bir restoran. Menü, klasik ev yemeklerinden ziyade daha yaratıcı ve sunum odaklı tabaklar etrafında şekilleniyor.

Atmosfer:
Şık ama kasıntısız. Akşam yemeğine odaklı bir düzen var; masa başında geçirilen süre daha uzun. Gürültülü bir ortam yok, daha çok yemek deneyimi ön planda.

Kimler için uygun?
- Modern mutfak ve farklı tabaklar denemek isteyenler
- Klasik restoranlardan sıkılanlar
- Akşam yemeğini deneyim olarak görenler

Pratik ipuçları:
- Rezervasyon özellikle yaz sezonunda faydalı.
- Menüde porsiyonlar paylaşmaya uygun olabilir.
- Acele bir yemek planı için değil, yavaş akşamlar için düşünülmeli.

Kısa özet:
Oburus Notos, Kaş’ta modern ve yaratıcı mutfak deneyimi arayanlar için öne çıkan, butik bir akşam yemeği adresi.
  `
}
,
{
  id: "zoka-street-food",
  title: "Zoka Street Food",
  description: "Kaş merkezde, sokak lezzetleri odaklı menüsüyle hızlı, doyurucu ve pratik yemekler sunan küçük ölçekli bir street food noktası.",
  category: ["food"],

  image: "../assets/1_places/zoka-street-food-001.jpg",
  images: [
    "../assets/1_places/zoka-street-food-002.jpg",
    "../assets/1_places/zoka-street-food-003.jpg",
    "../assets/1_places/zoka-street-food-004.jpg"
  ],

  rating: 4.5,
  price: "₺₺",
  selected: false,

  location: "Kaş Merkez, Andifli Mah.",
  distance: "Merkez",
  coordinates: { lat: 36.1996, lng: 29.6427 },

  website: "",
  phone: "",

  duration: "20–45 dk",

  facilities: [
    "Hızlı servis",
    "Ayakta/yüksek masa",
    "Take-away",
    "Alkolsüz servis"
  ],

  features: [
    "Street food konsepti",
    "Kısa sürede servis",
    "Gece yemeğine uygun",
    "Merkez konum"
  ],

  tags: [
    "street food",
    "hızlı yemek",
    "gece yemeği",
    "pratik",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Zoka Street Food, Kaş’ta “acıkınca hızlıca bir şeyler yiyelim” ihtiyacına net cevap veren yerlerden biri. Uzun masa, servis ritüeli ya da akşam yemeği temposu yok; burada amaç kısa sürede doyurucu bir şeyler yemek.

Atmosfer:
Street food mantığı hâkim. Otur–kalk hızlı, ortam hareketli. Özellikle akşam geç saatlerde ve bar çıkışlarında daha canlı.

Kimler için uygun?
- Hızlı ve pratik yemek arayanlar
- Uzun restoran oturması istemeyenler
- Gece acıkanlar

Pratik ipuçları:
- Ayakta veya yüksek masada yemek normal.
- Take-away en sık kullanılan seçenek.
- Yoğun saatlerde sıra oluşabilir ama hızlı ilerler.

Kısa özet:
Zoka Street Food, Kaş’ta hızlı, net ve doyurucu sokak lezzetleri arayanlar için ideal bir kısa durak.
  `
}
,
{
  id: "hold-and-bite",
  title: "Hold&Bite",
  description: "Kaş merkezde, burger ve sandviç odaklı menüsüyle modern street food anlayışını sunan küçük ve hızlı servisli bir mekân.",
  category: ["food"],

  image: "../assets/1_places/hold-and-bite-001.jpg",
  images: [
    "../assets/1_places/hold-and-bite-002.jpg",
    "../assets/1_places/hold-and-bite-003.jpg",
    "../assets/1_places/hold-and-bite-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.1997, lng: 29.6429 },

  website: "",
  phone: "",

  duration: "30–60 dk",

  facilities: [
    "Burger & sandviç",
    "Hızlı servis",
    "Take-away",
    "Alkolsüz servis"
  ],

  features: [
    "Burger odaklı menü",
    "Modern street food yaklaşımı",
    "Kısa sürede servis",
    "Merkez konum"
  ],

  tags: [
    "burger",
    "street food",
    "sandviç",
    "hızlı yemek",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Hold&Bite, Kaş’ta burger ve sandviç üzerine odaklanan, modern street food çizgisinde bir mekân. Menü sade; amaç çok seçenekten ziyade net birkaç ürünü düzgün yapmak.

Atmosfer:
Küçük, hızlı ve gündelik. Uzun oturmaya değil, yiyip devam etmeye uygun. Genç kitle ve hızlı yemek arayanlar ağırlıkta.

Kimler için uygun?
- Burger sevenler
- Akşam yemeğini kısa tutmak isteyenler
- Uzun restoran oturması istemeyenler

Pratik ipuçları:
- Take-away sık tercih ediliyor.
- Yoğun saatlerde servis süresi biraz uzayabilir.
- Büyük grup yemekleri için uygun değil.

Kısa özet:
Hold&Bite, Kaş’ta burger ve sandviçle hızlı ama düzgün bir öğün arayanlar için net bir seçenek.
  `
}
,
{
  id: "bay-kofte",
  title: "Bay Köfte",
  description: "Kaş merkezde, köfte ve ızgara odaklı menüsüyle sade, doyurucu ve yemek merkezli bir köfteci.",
  category: ["food"],

  image: "../assets/1_places/bay-kofte-001.jpg",
  images: [
    "../assets/1_places/bay-kofte-002.jpg",
    "../assets/1_places/bay-kofte-003.jpg",
    "../assets/1_places/bay-kofte-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺",
  selected: false,

  location: "Kaş Merkez, Andifli Mah.",
  distance: "Merkez",
  coordinates: { lat: 36.1994, lng: 29.6420 },

  website: "",
  phone: "",

  duration: "30–75 dk",

  facilities: [
    "Izgara köfte",
    "Masa servisi",
    "Alkolsüz servis",
    "Hızlı mutfak"
  ],

  features: [
    "Köfte odaklı menü",
    "Sade lokanta havası",
    "Öğle ve erken akşam için uygun",
    "Fiyat–performans dengesi"
  ],

  tags: [
    "köfte",
    "ızgara",
    "lokanta",
    "hızlı yemek",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Bay Köfte, Kaş’ta köfte üzerine yoğunlaşan, süsü olmayan ama net bir beklentiye cevap veren bir köfteci. Menüde köfte ve ızgara çeşitleri ön planda; karmaşık tabaklar ya da uzun menüler yok.

Atmosfer:
Lokanta havası baskın. Uzun akşam sofraları için değil, yemek odaklı kısa oturmalar için uygun. Öğle saatlerinde daha hareketli.

Kimler için uygun?
- Köfte sevenler
- Öğle yemeğinde hızlı ama doyurucu bir şey isteyenler
- Alkollü mekân aramayanlar

Pratik ipuçları:
- Öğle saatlerinde yoğunluk oluşabiliyor.
- Uzun uzun oturmak için değil, yemek için gelmek daha doğru.
- Menü sade olduğu için karar vermek kolay.

Kısa özet:
Bay Köfte, Kaş’ta köfte odaklı, sade ve doyurucu bir öğün arayanlar için pratik bir adres.
  `
}
,
{
  id: "kasik-manti-ev-yemekleri",
  title: "Kaşık Mantı & Ev Yemekleri",
  description: "Kaş merkezde, mantı ve ev yemeği odaklı menüsüyle sade, hızlı ve doyurucu öğünler sunan küçük bir lokanta.",
  category: ["food"],

  image: "../assets/1_places/kasik-manti-ev-yemekleri-001.jpg",
  images: [
    "../assets/1_places/kasik-manti-ev-yemekleri-002.jpg",
    "../assets/1_places/kasik-manti-ev-yemekleri-003.jpg",
    "../assets/1_places/kasik-manti-ev-yemekleri-004.jpg"
  ],

  rating: 4.4,
  price: "₺₺",
  selected: false,

  location: "Andifli Mah., Kaş/Antalya (merkez)",
  distance: "Merkez",
  coordinates: { lat: 36.1998, lng: 29.6421 },

  website: "",
  phone: "",

  duration: "30 dk – 1.25 saat",

  facilities: [
    "Ev yemeği",
    "Mantı çeşitleri",
    "Masa servisi",
    "Alkolsüz servis",
    "Hızlı mutfak"
  ],

  features: [
    "Mantı odaklı menü",
    "Ev yemeği hissi",
    "Öğle yemeğine uygun",
    "Fiyat–performans dengesi"
  ],

  tags: [
    "mantı",
    "ev yemeği",
    "lokanta",
    "öğle yemeği",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Kaşık Mantı & Ev Yemekleri, Kaş’ta mantı ve ev yemeği denince akla gelen sade lokantalardan biri. Menü çok geniş değil; zaten mekânın iddiası da bu değil. Buraya gelenler mantı ve günlük çıkan ev yemekleri için geliyor.

Atmosfer:
Klasik lokanta havası hâkim. Uzun oturmalar veya akşam eğlencesi yok. Daha çok öğle saatlerinde hareketli, akşamları ise sakin.

Kimler için uygun?
- Mantı sevenler
- Ev yemeği arayanlar
- Öğle yemeğini hızlı ama doyurucu geçirmek isteyenler

Pratik ipuçları:
- Günlük yemekleri sormak avantaj sağlar.
- Öğle saatlerinde yoğunluk olabilir.
- Uzun oturmalı bir plan için değil, yemek odaklı düşünülmeli.

Kısa özet:
Kaşık Mantı & Ev Yemekleri, Kaş’ta mantı ve ev yemeği için net, sade ve güvenilir bir lokanta.
  `
}
,
{
  id: "ora-kebap-restaurant",
  title: "Ora Kebap Restaurant",
  description: "Kaş merkezde, kebap ve ızgara et odaklı menüsüyle klasik ocakbaşı çizgisinde hizmet veren bir restoran.",
  category: ["food"],

  image: "../assets/1_places/ora-kebap-restaurant-001.jpg",
  images: [
    "../assets/1_places/ora-kebap-restaurant-002.jpg",
    "../assets/1_places/ora-kebap-restaurant-003.jpg",
    "../assets/1_places/ora-kebap-restaurant-004.jpg"
  ],

  rating: 4.3,
  price: "₺₺₺",
  selected: false,

  location: "Kaş Merkez, Andifli Mah.",
  distance: "Merkez",
  coordinates: { lat: 36.1996, lng: 29.6424 },

  website: "",
  phone: "",

  duration: "1–2.5 saat",

  facilities: [
    "Kebap & ızgara",
    "Masa servisi",
    "Alkollü & alkolsüz içecek",
    "Rezervasyon önerilir"
  ],

  features: [
    "Kebap odaklı menü",
    "Akşam yemeği temposu",
    "Merkezde kolay ulaşım",
    "Klasik restoran düzeni"
  ],

  tags: [
    "kebap",
    "ızgara",
    "ocakbaşı",
    "akşam yemeği",
    "kaş"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Ora Kebap Restaurant, Kaş’ta kebap ve ızgara et yemek isteyenlerin tercih ettiği merkez restoranlardan biri. Menü klasik kebap çizgisinde; fazla deneysellik yok, tanıdık tatlar ön planda.

Atmosfer:
Restoran düzeni hâkim. Akşam saatlerinde doluluk artıyor ama ortam genelde yemek odaklı kalıyor.

Kimler için uygun?
- Kebap ve ızgara sevenler
- Akşam yemeğini merkezde planlayanlar
- Klasik restoran düzenini tercih edenler

Pratik ipuçları:
- Akşam yoğunluğu için rezervasyon rahat ettirir.
- Meze beklentisini düşük tutup ana yemeğe odaklanmak daha iyi sonuç verir.
- Merkez konum yürüyerek ulaşımı kolaylaştırır.

Kısa özet:
Ora Kebap Restaurant, Kaş’ta kebap odaklı, sade ve net bir akşam yemeği seçeneği.
  `
}
,
{
  id: "emre-restaurant",
  title: "Emre Restaurant",
  description: "Kaş merkezde, deniz ürünü ve Türk mutfağı ağırlıklı menüsüyle uzun yıllardır hizmet veren klasik bir restoran.",
  category: ["food"],

  image: "../assets/1_places/emre-restaurant-001.jpg",
  images: [
    "../assets/1_places/emre-restaurant-002.jpg",
    "../assets/1_places/emre-restaurant-003.jpg",
    "../assets/1_places/emre-restaurant-004.jpg"
  ],

  rating: 4.5,
  price: "₺₺₺",
  selected: false,

  location: "Kaş Merkez, liman/çarşı çevresi",
  distance: "Merkez",
  coordinates: { lat: 36.1992, lng: 29.6430 },

  website: "",
  phone: "",

  duration: "1.5–3 saat",

  facilities: [
    "Deniz ürünleri",
    "Masa servisi",
    "Alkollü servis",
    "Açık oturma",
    "Rezervasyon önerilir"
  ],

  features: [
    "Balık ve deniz ürünü ağırlıklı menü",
    "Uzun süredir hizmet veren işletme",
    "Akşam yemeği odaklı",
    "Merkez konum"
  ],

  tags: [
    "balık",
    "deniz ürünleri",
    "restoran",
    "akşam yemeği",
    "kaş merkez"
  ],

  trust: {
    verified: true,
    infoDate: "2025-12-23",
    disclaimer: true
  },

  longText: `
Emre Restaurant, Kaş’ta uzun süredir hizmet veren, özellikle balık ve deniz ürünü ile bilinen merkez restoranlardan biri. Menü Türk mutfağı ve deniz ürünleri etrafında dönüyor; klasik çizgiden şaşmıyor.

Atmosfer:
Restoran havası net. Akşam saatlerinde doluluk artıyor, masa başı sohbet ve yemek temposu öne çıkıyor.

Kimler için uygun?
- Balık ve deniz ürünü sevenler
- Akşam yemeğini merkezde geçirmek isteyenler
- Klasik restoran deneyimi arayanlar

Pratik ipuçları:
- Balık çeşitleri günlük duruma göre değişebilir.
- Akşam için rezervasyon iyi olur.
- Uzun oturmalı bir akşam planına uygun.

Kısa özet:
Emre Restaurant, Kaş’ta balık ve deniz ürünü ağırlıklı, güvenilir ve klasik bir akşam yemeği adresi.
  `
}
,
{
  id: "pells-cafe",
  title: "Pell’s Cafe",
  description: "Kaş merkezde, kahve ve hafif yiyeceklerle günün her saatine uyum sağlayan bir kafe.",
  category: ["cafe"],
  image: "../assets/1_places/pells-cafe-001.jpg",
  images: [
    "../assets/1_places/pells-cafe-002.jpg",
    "../assets/1_places/pells-cafe-003.jpg",
    "../assets/1_places/pells-cafe-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "30–90 dk",
  facilities: ["oturma alanı"],
  features: ["kahve", "hafif atıştırmalıklar"],
  tags: ["kahve", "kafe", "kaş merkez"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Pell’s Cafe, Kaş merkezde sakin ve rahat bir ortam sunan küçük ölçekli bir kafe. Gün içinde mola vermek ya da kısa bir oturum için uygun.

## Kimler için uygun
Kahve içmek isteyenler, kısa bir dinlenme arası arayanlar ve merkezde sakin bir durak arayanlar için uygun.

## Ne alınır – ne yapılır
Kahve çeşitleri ve hafif atıştırmalıklar tercih ediliyor. Uzun oturumdan ziyade kısa molalar için daha uygun.

## Pratik ipuçları
Merkezde olduğu için yürüyerek ulaşım kolay. Yoğun saatlerde yer bulmak zorlaşabilir.

## Kısa özet
Kaş merkezde, sade ve pratik bir kahve molası noktası.
`
}
,
{
  id: "pika-coffee",
  title: "Pika Coffee",
  description: "Kaş’ta nitelikli kahveye odaklanan, modern ve sade bir kahve dükkanı.",
  category: ["cafe"],
  image: "../assets/1_places/pika-coffee-001.jpg",
  images: [
    "../assets/1_places/pika-coffee-002.jpg",
    "../assets/1_places/pika-coffee-003.jpg",
    "../assets/1_places/pika-coffee-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "30–60 dk",
  facilities: ["oturma alanı"],
  features: ["nitelikli kahve"],
  tags: ["coffee", "specialty coffee", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Pika Coffee, daha modern ve minimal bir çizgiye sahip. Kahve odaklı, sakin ve net bir ortam sunuyor.

## Kimler için uygun
Kahvesini gerçekten kahve için içenler ve kısa ama kaliteli bir mola arayanlar için uygun.

## Ne alınır – ne yapılır
Kahve çeşitleri öne çıkıyor. Menü genelde sade, odak noktası içecekler.

## Pratik ipuçları
Oturma alanı sınırlı olabilir. Take-away için de uygun bir durak.

## Kısa özet
Kaş’ta nitelikli kahve arayanlar için sade ve net bir adres.
`
}

,
{
  id: "godo-coffee-and-more",
  title: "Godo Coffee & More",
  description: "Kahve merkezli menüsünü farklı içecek ve atıştırmalıklarla tamamlayan bir kafe.",
  category: ["cafe"],
  image: "../assets/1_places/godo-coffee-and-more-001.jpg",
  images: [
    "../assets/1_places/godo-coffee-and-more-002.jpg",
    "../assets/1_places/godo-coffee-and-more-003.jpg",
    "../assets/1_places/godo-coffee-and-more-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "45–120 dk",
  facilities: ["oturma alanı"],
  features: ["kahve", "atıştırmalık"],
  tags: ["kafe", "kahve", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Godo Coffee & More, klasik bir kafe ortamı sunuyor. Uzun oturmaya da kısa molaya da uygun bir yapısı var.

## Kimler için uygun
Kahve içip biraz vakit geçirmek isteyenler, sohbet etmek isteyen küçük gruplar için uygun.

## Ne alınır – ne yapılır
Kahve ana ürün. Yanında basit atıştırmalıklar tercih ediliyor. Sohbet ve dinlenme için uygun.

## Pratik ipuçları
Merkezde olduğu için ulaşım kolay. Öğleden sonra saatlerinde daha sakin oluyor.

## Kısa özet
Kahve odaklı ama esnek kullanıma açık, rahat bir Kaş kafesi.
`
}

,
{
  id: "nur-pastanesi",
  title: "Nur Pastanesi",
  description: "Kaş merkezde, klasik pastane ürünleri ve tatlılarıyla bilinen yerel bir pastane.",
  category: ["cafe", "breakfast"],
  image: "../assets/1_places/nur-pastanesi-001.jpg",
  images: [
    "../assets/1_places/nur-pastanesi-002.jpg",
    "../assets/1_places/nur-pastanesi-003.jpg",
    "../assets/1_places/nur-pastanesi-004.jpg"
  ],
  rating: "",
  price: "₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "15–45 dk",
  facilities: ["oturma alanı"],
  features: ["tatlı", "pastane ürünleri", "çay"],
  tags: ["pastane", "tatlı", "kahvaltı", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Nur Pastanesi, Kaş’ta uzun süredir varlığını sürdüren, sade ve yerel bir pastane havasına sahip. Gösterişten uzak, günlük ziyaretlere uygun.

## Kimler için uygun
Tatlı veya çay molası vermek isteyenler, hızlı bir kahvaltı alternatifi arayanlar için uygun.

## Ne alınır – ne yapılır
Pastane ürünleri ve klasik tatlılar öne çıkıyor. Çayla birlikte kısa bir mola için tercih ediliyor.

## Pratik ipuçları
Genellikle hızlı gir-çık yapılan bir yer. Uzun oturum beklentisiyle gitmemek daha doğru.

## Kısa özet
Kaş merkezde, klasik ve pratik bir pastane durağı.
`
}

,
{
  id: "chayote-cafe",
  title: "Chayote Cafe",
  description: "Kaş’ta kahve, hafif yemekler ve rahat oturum sunan sakin bir kafe.",
  category: ["cafe"],
  image: "../assets/1_places/chayote-cafe-001.jpg",
  images: [
    "../assets/1_places/chayote-cafe-002.jpg",
    "../assets/1_places/chayote-cafe-003.jpg",
    "../assets/1_places/chayote-cafe-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "60–120 dk",
  facilities: ["oturma alanı"],
  features: ["kahve", "hafif yemekler"],
  tags: ["kafe", "kahve", "rahat ortam", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Chayote Cafe, sakin ve rahat bir kafe atmosferine sahip. Gürültüden uzak, uzun oturmaya uygun bir ortam sunuyor.

## Kimler için uygun
Çalışmak, sohbet etmek ya da uzun bir kahve molası vermek isteyenler için uygun.

## Ne alınır – ne yapılır
Kahve başlıca tercih. Yanında hafif yemek ve atıştırmalıklar eşlik edebiliyor.

## Pratik ipuçları
Yoğun olmayan saatlerde daha keyifli. Uzun süre oturmayı planlayanlar için iyi bir seçenek.

## Kısa özet
Kaş’ta sakinlik arayanlar için rahat bir kafe alternatifi.
`
}
,
{
  id: "panu-kas",
  title: "Panu Kaş",
  description: "Kaş merkezde, Akdeniz mutfağı odaklı modern bir restoran.",
  category: ["food"],
  image: "../assets/1_places/panu-kas-001.jpg",
  images: [
    "../assets/1_places/panu-kas-002.jpg",
    "../assets/1_places/panu-kas-003.jpg",
    "../assets/1_places/panu-kas-004.jpg"
  ],
  rating: "",
  price: "₺₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "90–150 dk",
  facilities: ["oturma alanı"],
  features: ["akdeniz mutfağı", "modern sunum"],
  tags: ["restoran", "akdeniz", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Panu Kaş, modern ve özenli bir restoran atmosferi sunuyor. Daha çok akşam yemekleri için tercih edilen bir yapıya sahip.

## Kimler için uygun
Yemek deneyimine önem verenler, daha sakin ve uzun bir akşam planlayanlar için uygun.

## Ne alınır – ne yapılır
Akdeniz mutfağı odaklı tabaklar öne çıkıyor. Yemekle birlikte uzun sohbetlere uygun.

## Pratik ipuçları
Akşam saatlerinde yoğun olabiliyor. Gitmeden önce plan yapmak faydalı olabilir.

## Kısa özet
Kaş’ta daha özenli bir akşam yemeği arayanlar için modern bir adres.
`
}
,
{
  id: "hideaway-bar-and-cafe",
  title: "Hideaway Bar & Cafe",
  description: "Kaş’ta gün içinde kafe, akşam saatlerinde bar olarak kullanılan rahat bir mekân.",
  category: ["bar", "cafe"],
  image: "../assets/1_places/hideaway-bar-and-cafe-001.jpg",
  images: [
    "../assets/1_places/hideaway-bar-and-cafe-002.jpg",
    "../assets/1_places/hideaway-bar-and-cafe-003.jpg",
    "../assets/1_places/hideaway-bar-and-cafe-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "60–150 dk",
  facilities: ["oturma alanı"],
  features: ["alkollü içecekler", "kahve"],
  tags: ["bar", "kafe", "akşam", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Hideaway Bar & Cafe, isminin hakkını veren sakin ve rahat bir ortama sahip. Gün içinde daha dingin, akşam saatlerinde ise bar havasına bürünen bir yapısı var.

## Kimler için uygun
Gündüz kahve içmek isteyenler, akşamüstü ve akşam saatlerinde içkiyle sohbet etmeyi sevenler için uygun.

## Ne alınır – ne yapılır
Kahve ve alkollü içecekler öne çıkıyor. Uzun sohbetler ve sakin vakit geçirmek için tercih ediliyor.

## Pratik ipuçları
Akşam saatlerinde bar kimliği daha baskın. Sessiz bir ortam arayanlar için gündüz saatleri daha uygun.

## Kısa özet
Kaş’ta gün ve akşam temposuna uyum sağlayan, rahat bir bar-kafe.
`
}

,
{
  id: "menta-coffee",
  title: "Menta Coffee",
  description: "Kaş’ta kahve odaklı, küçük ve sade bir kafe.",
  category: ["cafe"],
  image: "../assets/1_places/menta-coffee-001.jpg",
  images: [
    "../assets/1_places/menta-coffee-002.jpg",
    "../assets/1_places/menta-coffee-003.jpg",
    "../assets/1_places/menta-coffee-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "30–60 dk",
  facilities: ["oturma alanı"],
  features: ["kahve"],
  tags: ["coffee", "kafe", "kaş merkez"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Menta Coffee, küçük ve sade bir kafe. Gösterişten uzak, kahveye odaklanan bir ortam sunuyor.

## Kimler için uygun
Kısa bir kahve molası vermek isteyenler ve sakin bir ortam arayanlar için uygun.

## Ne alınır – ne yapılır
Kahve ana odak noktası. Genellikle kısa süreli oturumlar tercih ediliyor.

## Pratik ipuçları
Oturma alanı sınırlı olabilir. Yoğun saatlerde hızlı gir-çık daha yaygın.

## Kısa özet
Kaş’ta sade, kahve odaklı ve pratik bir durak.
`
}
,
{
  id: "huseyinin-yeri-cafe-white",
  title: "Hüseyin’in Yeri (Cafe White)",
  description: "Kaş’ta deniz manzarasıyla bilinen, sade ve yerel bir kafe.",
  category: ["cafe"],
  image: "../assets/1_places/huseyinin-yeri-cafe-white-001.jpg",
  images: [
    "../assets/1_places/huseyinin-yeri-cafe-white-002.jpg",
    "../assets/1_places/huseyinin-yeri-cafe-white-003.jpg",
    "../assets/1_places/huseyinin-yeri-cafe-white-004.jpg"
  ],
  rating: "",
  price: "₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "45–120 dk",
  facilities: ["oturma alanı", "manzara"],
  features: ["kahve", "çay"],
  tags: ["kafe", "manzara", "yerel", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Hüseyin’in Yeri (Cafe White), sade ve samimi bir atmosfere sahip. Manzarasıyla öne çıkan, yerel bir kafe havası sunuyor.

## Kimler için uygun
Manzara eşliğinde çay veya kahve içmek isteyenler, sakin bir mola arayanlar için uygun.

## Ne alınır – ne yapılır
Çay ve kahve öne çıkıyor. Uzun sohbetler ve manzara izlemek için tercih ediliyor.

## Pratik ipuçları
Yoğun sezonlarda manzaralı masalar çabuk dolabiliyor. Daha sakin saatler tercih edilebilir.

## Kısa özet
Kaş’ta manzarasıyla öne çıkan, sade ve yerel bir kafe.
`
}
,
{
  id: "dejavu-cafe-and-bar",
  title: "Dejavu Cafe & Bar",
  description: "Kaş’ta gündüz kafe, akşam bar olarak kullanılan sosyal ve canlı bir mekân.",
  category: ["cafe", "bar"],
  image: "../assets/1_places/dejavu-cafe-and-bar-001.jpg",
  images: [
    "../assets/1_places/dejavu-cafe-and-bar-002.jpg",
    "../assets/1_places/dejavu-cafe-and-bar-003.jpg",
    "../assets/1_places/dejavu-cafe-and-bar-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "60–180 dk",
  facilities: ["oturma alanı"],
  features: ["kahve", "alkollü içecekler"],
  tags: ["bar", "kafe", "sosyal", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Dejavu Cafe & Bar, gün içinde daha sakin bir kafe havasına sahipken akşam saatlerinde bar kimliği öne çıkan bir mekân. Sosyal ve hareketli bir ortam sunuyor.

## Kimler için uygun
Gündüz kahve molası vermek isteyenler, akşamüstü ve akşam saatlerinde içki eşliğinde sohbet arayanlar için uygun.

## Ne alınır – ne yapılır
Kahve ve alkollü içecekler öne çıkıyor. Arkadaş buluşmaları ve uzun sohbetler için tercih ediliyor.

## Pratik ipuçları
Akşam saatlerinde daha kalabalık olabiliyor. Daha sakin bir deneyim için gündüz saatleri uygun.

## Kısa özet
Kaş’ta gün ve geceye uyum sağlayan, sosyal bir bar-kafe.
`
}
,
{
  id: "echo-bar",
  title: "Echo Bar",
  description: "Kaş’ta akşam saatlerinde hareketlenen, müzik ve içki odaklı bir bar.",
  category: ["bar"],
  image: "../assets/1_places/echo-bar-001.jpg",
  images: [
    "../assets/1_places/echo-bar-002.jpg",
    "../assets/1_places/echo-bar-003.jpg",
    "../assets/1_places/echo-bar-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "90–240 dk",
  facilities: ["oturma alanı"],
  features: ["alkollü içecekler", "müzik"],
  tags: ["bar", "gece", "müzik", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Echo Bar, akşam saatlerinde canlanan ve müzikle öne çıkan bir bar atmosferine sahip. Daha çok gece saatlerinde tercih ediliyor.

## Kimler için uygun
Müzik eşliğinde içki içmek isteyenler ve gece hayatını sevenler için uygun.

## Ne alınır – ne yapılır
Alkollü içecekler ön planda. Müzik eşliğinde vakit geçirmek temel deneyim.

## Pratik ipuçları
Gece saatlerinde kalabalık olabilir. Daha rahat bir ortam için erken saatler tercih edilebilir.

## Kısa özet
Kaş’ta akşam ve gece saatlerine yönelik, müzik odaklı bir bar.
`
}
,
{
  id: "red-point-bar",
  title: "Red Point Bar",
  description: "Kaş’ta akşamları tercih edilen, sade ve bar odaklı bir mekân.",
  category: ["bar"],
  image: "../assets/1_places/red-point-bar-001.jpg",
  images: [
    "../assets/1_places/red-point-bar-002.jpg",
    "../assets/1_places/red-point-bar-003.jpg",
    "../assets/1_places/red-point-bar-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "90–210 dk",
  facilities: ["oturma alanı"],
  features: ["alkollü içecekler"],
  tags: ["bar", "akşam", "kaş merkez"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Red Point Bar, sade ve net bir bar atmosferine sahip. Akşam saatlerinde daha canlı bir yapıya bürünüyor.

## Kimler için uygun
Sessiz ama bar havası olan bir mekân arayanlar ve akşam içkisi için merkezde bir durak isteyenler için uygun.

## Ne alınır – ne yapılır
Alkollü içecekler ana odak. Uzun sohbetler ve sakin bir akşam için tercih ediliyor.

## Pratik ipuçları
Gece ilerledikçe yoğunluk artabilir. Daha sakin saatler için erken gelmek avantaj sağlar.

## Kısa özet
Kaş’ta sade, bar odaklı ve akşam saatlerine uygun bir adres.
`
}
,
{
  id: "quanta-rock-bar",
  title: "Quanta Rock Bar (Quanta Rock Cafe)",
  description: "Kaş’ta rock müzik ağırlıklı, akşamları canlanan bar-kafe.",
  category: ["bar", "cafe"],
  image: "../assets/1_places/quanta-rock-bar-001.jpg",
  images: [
    "../assets/1_places/quanta-rock-bar-002.jpg",
    "../assets/1_places/quanta-rock-bar-003.jpg",
    "../assets/1_places/quanta-rock-bar-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "90–240 dk",
  facilities: ["oturma alanı"],
  features: ["rock müzik", "alkollü içecekler"],
  tags: ["rock bar", "müzik", "bar", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Quanta Rock Bar, rock müzik odaklı ve enerjik bir atmosfere sahip. Akşam saatlerinde hareketleniyor ve bar kimliği öne çıkıyor.

## Kimler için uygun
Rock müzik sevenler ve müzik eşliğinde içki içmek isteyenler için uygun.

## Ne alınır – ne yapılır
Alkollü içecekler ana odak. Müzik eşliğinde vakit geçirmek temel deneyim.

## Pratik ipuçları
Gece saatlerinde ses seviyesi yüksek olabilir. Daha sakin bir ortam için erken saatler tercih edilebilir.

## Kısa özet
Kaş’ta rock müzik sevenler için akşamları tercih edilen bir bar-kafe.
`
}
,
{
  id: "barboon-bar",
  title: "Barboon Bar",
  description: "Kaş’ta akşam ve gece saatlerinde tercih edilen, sosyal bir bar.",
  category: ["bar"],
  image: "../assets/1_places/barboon-bar-001.jpg",
  images: [
    "../assets/1_places/barboon-bar-002.jpg",
    "../assets/1_places/barboon-bar-003.jpg",
    "../assets/1_places/barboon-bar-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "90–210 dk",
  facilities: ["oturma alanı"],
  features: ["alkollü içecekler"],
  tags: ["bar", "gece", "kaş merkez"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Barboon Bar, akşam saatlerinde canlanan ve sosyal yapısıyla öne çıkan bir bar. Daha çok geceye doğru hareketleniyor.

## Kimler için uygun
Akşam içkisi için merkezde bir durak arayanlar ve arkadaş grupları için uygun.

## Ne alınır – ne yapılır
Alkollü içecekler ön planda. Sohbet ve sosyalleşme ağırlıklı bir deneyim sunuyor.

## Pratik ipuçları
Gece ilerledikçe kalabalık artabiliyor. Daha rahat bir ortam için erken saatler tercih edilebilir.

## Kısa özet
Kaş’ta sosyal ve akşam odaklı bir bar alternatifi.
`
}
,
{
  id: "ara-bar",
  title: "Ara Bar",
  description: "Kaş’ta küçük ölçekli, samimi ve bar odaklı bir mekân.",
  category: ["bar"],
  image: "../assets/1_places/ara-bar-001.jpg",
  images: [
    "../assets/1_places/ara-bar-002.jpg",
    "../assets/1_places/ara-bar-003.jpg",
    "../assets/1_places/ara-bar-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "60–180 dk",
  facilities: ["oturma alanı"],
  features: ["alkollü içecekler"],
  tags: ["bar", "samimi", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Ara Bar, küçük ve samimi bir bar atmosferine sahip. Gürültülü mekânlardan ziyade daha sakin bir yapı sunuyor.

## Kimler için uygun
Daha sessiz bir bar arayanlar ve kısa ya da orta süreli oturum isteyenler için uygun.

## Ne alınır – ne yapılır
Alkollü içecekler ana ürün. Sohbet ve dinlenme ön planda.

## Pratik ipuçları
Oturma alanı sınırlı olabilir. Kalabalık saatlerde ayakta vakit geçirmek gerekebilir.

## Kısa özet
Kaş’ta sade, samimi ve bar odaklı bir durak.
`
}
,
{
  id: "no-11-bar",
  title: "No.11 Bar",
  description: "Kaş’ta akşam saatlerinde hareketlenen, bar odaklı bir mekân.",
  category: ["bar"],
  image: "../assets/1_places/no-11-bar-001.jpg",
  images: [
    "../assets/1_places/no-11-bar-002.jpg",
    "../assets/1_places/no-11-bar-003.jpg",
    "../assets/1_places/no-11-bar-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "90–210 dk",
  facilities: ["oturma alanı"],
  features: ["alkollü içecekler"],
  tags: ["bar", "akşam", "kaş merkez"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
No.11 Bar, sade ve net bir bar atmosferi sunuyor. Akşam saatlerinde daha canlı bir hale geliyor.

## Kimler için uygun
Merkezde akşam içkisi için pratik bir durak arayanlar için uygun.

## Ne alınır – ne yapılır
Alkollü içecekler ön planda. Sohbet ve kısa-orta süreli oturumlar yaygın.

## Pratik ipuçları
Gece ilerledikçe kalabalık artabiliyor. Daha sakin bir deneyim için erken saatler tercih edilebilir.

## Kısa özet
Kaş’ta akşam saatlerine uygun, sade bir bar alternatifi.
`
}
,
{
  id: "hijazz-bar",
  title: "HiJazz Bar",
  description: "Kaş’ta caz ve benzeri müziklerle öne çıkan, akşam odaklı bir bar.",
  category: ["bar"],
  image: "../assets/1_places/hijazz-bar-001.jpg",
  images: [
    "../assets/1_places/hijazz-bar-002.jpg",
    "../assets/1_places/hijazz-bar-003.jpg",
    "../assets/1_places/hijazz-bar-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "90–240 dk",
  facilities: ["oturma alanı"],
  features: ["müzik", "alkollü içecekler"],
  tags: ["bar", "caz", "müzik", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
HiJazz Bar, müzik odaklı ve daha karakterli bir bar atmosferine sahip. Akşam saatlerinde öne çıkıyor.

## Kimler için uygun
Caz ve benzeri müzikleri sevenler, müzik eşliğinde içki içmek isteyenler için uygun.

## Ne alınır – ne yapılır
Alkollü içecekler ana ürün. Müzik eşliğinde vakit geçirmek temel deneyim.

## Pratik ipuçları
Müzik saatlerinde ortam daha canlı olabilir. Daha sakin bir deneyim için erken saatler tercih edilebilir.

## Kısa özet
Kaş’ta müzik odaklı, akşamları tercih edilen bir bar.
`
}
,
{
  id: "old-house-bar",
  title: "Old House Bar",
  description: "Kaş’ta eski ev dokusu hissi veren, akşam saatlerinde tercih edilen bir bar.",
  category: ["bar"],
  image: "../assets/1_places/old-house-bar-001.jpg",
  images: [
    "../assets/1_places/old-house-bar-002.jpg",
    "../assets/1_places/old-house-bar-003.jpg",
    "../assets/1_places/old-house-bar-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "90–210 dk",
  facilities: ["oturma alanı"],
  features: ["alkollü içecekler"],
  tags: ["bar", "akşam", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Old House Bar, daha klasik ve sakin bir bar atmosferi sunuyor. Akşam saatlerinde daha çok tercih ediliyor.

## Kimler için uygun
Daha sakin bir ortamda içki içmek isteyenler ve sohbet odaklı akşam planlayanlar için uygun.

## Ne alınır – ne yapılır
Alkollü içecekler öne çıkıyor. Uzun sohbetler için uygun bir ortam sunuyor.

## Pratik ipuçları
Gece ilerledikçe yoğunluk artabilir. Daha rahat bir deneyim için erken saatler tercih edilebilir.

## Kısa özet
Kaş’ta sakin, klasik bar havası arayanlar için bir seçenek.
`
}
,
{
  id: "gagarin-bar",
  title: "Gagarin Bar",
  description: "Kaş’ta alternatif müzik ve sosyal atmosferiyle bilinen akşam odaklı bir bar.",
  category: ["bar"],
  image: "../assets/1_places/gagarin-bar-001.jpg",
  images: [
    "../assets/1_places/gagarin-bar-002.jpg",
    "../assets/1_places/gagarin-bar-003.jpg",
    "../assets/1_places/gagarin-bar-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "90–240 dk",
  facilities: ["oturma alanı"],
  features: ["alkollü içecekler", "müzik"],
  tags: ["bar", "müzik", "gece", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Gagarin Bar, alternatif ve enerjik bir bar atmosferine sahip. Akşam saatlerinde daha canlı, sosyal bir yapıya bürünüyor.

## Kimler için uygun
Müzik eşliğinde sosyalleşmek isteyenler ve gece hayatını sevenler için uygun.

## Ne alınır – ne yapılır
Alkollü içecekler ana odak. Müzik dinleyip sohbet etmek temel deneyim.

## Pratik ipuçları
Gece ilerledikçe kalabalık artabiliyor. Daha sakin bir ortam için erken saatler tercih edilebilir.

## Kısa özet
Kaş’ta müzik ve sosyal atmosfer arayanlar için akşamları tercih edilen bir bar.
`
}
,
{
  id: "botanik-garden-bar",
  title: "Botanik Garden Bar",
  description: "Kaş’ta açık alanı ve bahçe hissiyle öne çıkan, akşamları tercih edilen bir bar.",
  category: ["bar"],
  image: "../assets/1_places/botanik-garden-bar-001.jpg",
  images: [
    "../assets/1_places/botanik-garden-bar-002.jpg",
    "../assets/1_places/botanik-garden-bar-003.jpg",
    "../assets/1_places/botanik-garden-bar-004.jpg"
  ],
  rating: "",
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6370 },
  website: "",
  phone: "",
  duration: "90–210 dk",
  facilities: ["açık alan", "bahçe"],
  features: ["alkollü içecekler", "açık hava"],
  tags: ["bar", "bahçe", "açık alan", "kaş"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
## Atmosfer
Botanik Garden Bar, açık alan ve bahçe hissiyle daha ferah bir bar atmosferi sunuyor. Akşam saatlerinde keyifli bir ortam oluşuyor.

## Kimler için uygun
Açık havada içki içmeyi sevenler ve daha ferah bir bar ortamı arayanlar için uygun.

## Ne alınır – ne yapılır
Alkollü içecekler ön planda. Açık alanda sohbet ederek vakit geçirmek temel deneyim.

## Pratik ipuçları
Yoğun sezonda bahçe alanı hızlı dolabiliyor. Erken gitmek yer bulmayı kolaylaştırır.

## Kısa özet
Kaş’ta açık hava ve bahçe atmosferi arayanlar için rahat bir bar alternatifi.
`
}










];


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