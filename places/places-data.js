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
},







{
  id: "kaputas-plaji",
  title: "Kaputaş Plajı",
  description: "Turkuaz rengi denizi ve kanyon ağzındaki konumuyla ünlü, küçük ve fotojenik bir plaj.",
  category: ["beaches"],
  image: "../assets/1_places/kaputas-plaji-001.jpg",
  images: [
    "../assets/1_places/kaputas-plaji-002.jpg",
    "../assets/1_places/kaputas-plaji-003.jpg",
    "../assets/1_places/kaputas-plaji-004.jpg"
  ],
  rating: 4.4,
  price: "₺",
  selected: false,
  location: "Kaş – Kalkan Yolu",
  distance: "Kaş merkezden 20 km",
  coordinates: { lat: 36.228767, lng: 29.449142 },
  website: "",
  phone: "",
  duration: "2-3 saat",
  facilities: ["şezlong", "şemsiye", "duş", "kafe"],
  features: ["altın rengi kum", "turkuaz deniz", "dalgalı deniz", "dik yamaçlar"],
  tags: ["fotojenik", "turistlerin gözdesi", "doğal güzellik"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
**Atmosfer:** Kaputaş Plajı, dik bir kanyonun denize açıldığı noktada yer alan, kartpostalları andıran bir koy. Turkuaz renkteki denizi ve altın rengi kumsalıyla ilk görüşte büyülüyor. Yazın oldukça kalabalık olabiliyor; küçük plaj alanı erken saatlerden itibaren renkli şemsiyelerle doluyor. Dalgaların sesi ve çevresini saran yüksek kayalıklar atmosferi doğal ve etkileyici kılıyor.

**Kimler için uygun:** Eşsiz manzaralar peşindeki fotoğraf tutkunları ve serin sularda yüzmeyi seven maceraperestler için ideal. Yüzme bilen yetişkinler burada çok keyif alır; ancak deniz aniden derinleşip dalgalı olabildiği için küçük çocuklu ailelerin ve yüzme konusunda kendini güvende hissetmeyenlerin dikkatli olması gerekir.

**Ne alınır-ne yapılır:** Plaja ulaşmak için yol kenarına aracınızı bırakıp yaklaşık 170 basamak iniyorsunuz. Bu zahmete kesinlikle değiyor; turkuaz sularda yüzüp serinlemek en popüler aktivite. Günün erken saatlerinde deniz daha sakin ve çarşaf gibi oluyor, öğleden sonra ise dalgalar artabiliyor. Yanınızda şnorkel getirirseniz berrak suda balıkları gözlemleyebilirsiniz. Plajın hemen yanında küçük bir kafe belediye tarafından işletiliyor; burada atıştırmalık bir şeyler alabilir veya duş ve tuvalet imkânlarından yararlanabilirsiniz.

**Pratik ipuçları:** Yazın plaj çok kalabalıklaştığı için sabah erken gitmek hem park yeri bulmak hem de sakin bir ortam yakalamak adına önemli. Otopark alanı kısıtlı olduğundan aracınızı yol kenarına park edebilirsiniz. Giriş ücreti kişi başı 50 TL (2025 itibarıyla) ve dilerseniz kendi havlunuzu serip ücretsiz şekilde denizin tadını çıkarabilirsiniz. Şezlong ve şemsiye kiralamak isterseniz oldukça pahalı (çift olarak ~510 TL):contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}, bu yüzden birçok ziyaretçi kendi şemsiyesini getiriyor. Plajda öğleden sonra sert rüzgar ve dalga olabileceğini unutmayın; çocuklarla gelenler veya iyi yüzme bilmeyenler sabah saatlerini tercih etmeli. Yüksek kayalıklardan sızan tatlı su kaynakları nedeniyle deniz suyu yer yer serin gelebilir, hazırlıklı olun.

**Kısa özet:** Kaputaş Plajı, Kaş ile Kalkan arasındaki kıvrımlı sahil yolunun en etkileyici durağı. Ulaşımı biraz zahmetli ve kalabalık olsa da, kanyon ağzındaki bu plajın turkuaz sularında yüzmek ve o nefes kesen manzarayı görmek unutulmaz bir deneyim. Türkiye’nin en meşhur plajlarından biri olan Kaputaş, kısa bir mola için bile rotanıza değecek bir doğa harikası.
`
},

{
  id: "hidayet-koyu",
  title: "Hidayet Koyu (Blanca Beach)",
  description: "Akvaryum gibi berrak deniziyle ünlü, tesisli ve popüler bir koy.",
  category: ["beaches"],
  image: "../assets/1_places/hidayet-koyu-001.jpg",
  images: [
    "../assets/1_places/hidayet-koyu-002.jpg",
    "../assets/1_places/hidayet-koyu-003.jpg",
    "../assets/1_places/hidayet-koyu-004.jpg"
  ],
  rating: 4.2,
  price: "₺₺₺",
  selected: false,
  location: "Kaş – Çukurbağ Yarımadası",
  distance: "Kaş merkezden 3 km",
  coordinates: { lat: 36.197000, lng: 29.613000 },
  website: "",
  phone: "",
  duration: "Yarım gün",
  facilities: ["platform plaj", "şezlong", "şemsiye", "restoran", "duş"],
  features: ["berrak deniz", "kaya snorkeling", "canlı müzik (yazın)"],
  tags: ["şnorkel", "plaj kulübü", "popüler"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
**Atmosfer:** Hidayet Koyu, Çukurbağ Yarımadası’nda zeytin ağaçlarıyla çevrili küçük bir cennet koyu. Turkuaz denizi o kadar berrak ki su altını adeta bir akvaryum gibi izleyebiliyorsunuz. Koyda 2015’ten beri hizmet veren Blanca Beach işletmesi sayesinde ortam oldukça canlı ve hareketli:contentReference[oaicite:2]{index=2}. Tahta platformlar üzerine sıralanmış şezlonglar, arka planda çalan hafif müzikler ve cıvıl cıvıl sohbet eden tatilcilerle tam bir yaz kulübü atmosferi hissediliyor. Doğal güzellik ile modern tesis havası iç içe geçmiş durumda.

**Kimler için uygun:** Konforundan ödün vermeden denize girmek isteyenler için ideal bir yer. Şnorkelle dalmayı sevenler, berrak sularda rengârenk balıkları görmek için mutlaka uğramalı. Genç çiftler ve arkadaş grupları popüler müzikler eşliğinde güneşlenip sosyalleşmekten keyif alacaktır. Aileler de çocuklarla burada vakit geçirebilir, ancak derinlik aniden arttığı için küçük çocuklar dikkatle yüzdürülmeli.

**Ne alınır-ne yapılır:** Şezlongunuza uzanıp masmavi koy manzarasının tadını çıkarabilirsiniz; deniz burada inanılmaz temiz ve sakin. Mutlaka şnorkel veya deniz gözlüğü getirin, çünkü kayalık kenarlarda yüzerken çeşit çeşit balığı ve deniz canlılarını gözlemlemek çok zevkli. Blanca Beach’in restoranında öğle yemeği için taze deniz ürünleri veya atıştırmalıklar bulabilirsiniz. Kokteylinizi yudumlayıp güneşlenirken, zaman zaman yapılan canlı müzik performanslarına kulak vermek de mümkün. Dalış meraklıları için koyun açıkları gece dalışı gibi aktivitelerle de ünlü.

**Pratik ipuçları:** Hidayet Koyu oldukça popüler olduğundan özellikle temmuz-ağustos aylarında yer bulmak zorlaşabiliyor. Sabah erken saatlerde gelip şezlong kapmak en iyisi; 10-11’den sonra neredeyse tüm localar doluyor:contentReference[oaicite:3]{index=3}. Giriş ücreti yok fakat 2025 itibarıyla 1 şezlong 600 TL, şemsiye 100 TL gibi yüksek kiralama bedelleri var:contentReference[oaicite:4]{index=4}. Bütçeniz kısıtlıysa havlunuzu çim alana serip ücretsiz oturabilirsiniz, ancak tesis kuralları gereği kendi yiyecek-içeceğinizi sokmak mümkün değil. Denizin derinliği kıyıdan birkaç adım sonra arttığı için yüzme bilmeyenler açılsa da deniz gözlüğüyle etrafı izlemek daha uygun olabilir. Su pırıl pırıl olsa da zaman zaman Caretta caretta kaplumbağalarla veya ufak denizanalarıyla karşılaşabilirsiniz; bu doğallığın bir parçası. Son olarak, yüksek sezonda hizmet kalitesinin düşebildiğini ve fiyatların Kaş ortalamasının epey üstünde olduğunu hatırlatmakta fayda var.

**Kısa özet:** Hidayet Koyu, Kaş’ın en gözde koylarından biri olarak berrak denizi ve canlı atmosferiyle öne çıkıyor. Şnorkelle balıkları izleyebileceğiniz bu turkuaz sularda yüzmek harika bir deneyim. Lüks beach club hizmeti sayesinde konforlu bir gün geçirebilirsiniz ancak kalabalığı ve yüksek fiyatları göze alın. Doğal güzelliğiyle büyüleyen bu koy, Kaş tatilinde en az bir kez uğramaya değer.
`
},

{
  id: "antiphellos-antik-tiyatro",
  title: "Antiphellos Antik Tiyatrosu",
  description: "Deniz manzaralı, Likya döneminden kalma tarihi bir açık hava tiyatrosu.",
  category: ["history"],
  image: "../assets/1_places/antiphellos-antik-tiyatro-001.jpg",
  images: [
    "../assets/1_places/antiphellos-antik-tiyatro-002.jpg",
    "../assets/1_places/antiphellos-antik-tiyatro-003.jpg",
    "../assets/1_places/antiphellos-antik-tiyatro-004.jpg"
  ],
  rating: 4.3,
  price: "₺",
  selected: false,
  location: "Kaş – Andifli",
  distance: "Kaş merkezde",
  coordinates: { lat: 36.200030, lng: 29.634850 },
  website: "",
  phone: "",
  duration: "1 saat",
  facilities: ["oturma basamakları"],
  features: ["tarihî kalıntı", "deniz manzarası", "gün batımı noktası"],
  tags: ["Likya tarihi", "müze kart gerektirmez", "ücretsiz"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
**Atmosfer:** Kaş Antiphellos Antik Tiyatrosu, milattan önce 1. yüzyıla tarihlenen Likya döneminden kalma etkileyici bir yapıdır. Yarımadanın kıyısında, denize bakan bir yamaç üzerinde konumlandığı için Anadolu’da deniz manzaralı tek antik tiyatro unvanına sahiptir:contentReference[oaicite:5]{index=5}. Oturma basamaklarına adım attığınızda, hemen aşağıda uzanan Kaş koyu ve Meis Adası manzarası sizi selamlar. Gün içinde sakin ve huzurlu bir atmosferi vardır; öğleden sonraları birkaç ziyaretçi gölgeliklerde oturup dinlenirken, akşamüstü saatlerinde altın turuncu gün batımı ışıkları antik taşları boyar ve ortamı büyülü bir havaya sokar.

**Kimler için uygun:** Tarihe meraklı gezginler ve antik kalıntıları görmek isteyenler için ideal bir durak. Özellikle Likya uygarlığı hakkında bilgi sahibi olmak isteyenler, bu tiyatroya hayran kalacak. Aynı zamanda Kaş’ta romantik bir gün batımı noktası arayan çiftler veya sakin bir manzara keyfi yaşamak isteyen herkes burada vakit geçirebilir. Yürüyüş mesafesinde olduğundan çocuklu aileler de bebek arabasıyla rahatça ulaşabilir (tiyatro içinde merdivenler olduğunu unutmayarak).

**Ne alınır-ne yapılır:** Tiyatroya giriş ücretsiz; herhangi bir bilet veya MüzeKart gerekmiyor. Gündüz saatlerinde tarihi taş basamaklarda dolaşıp Akdeniz’in ve karşı kıyıdaki Meis Adası’nın manzarasını fotoğraflayabilirsiniz. Bu antik yapı yaklaşık 4 bin kişilik kapasitesiyle geçmişteki gösterilere ev sahipliği yapmış. Basamakların en üst sırasına çıkıp oturarak deniz meltemi eşliğinde manzaranın tadını çıkarmak çok keyifli. Yaz aylarında bazen burada yoga seansları veya küçük konserler de düzenleniyor – eğer şanslıysanız tarihi atmosferde müzik dinleme imkanınız olabilir. Akşam üstü ise bir içeceğinizi yanınıza alıp gün batımını izlemek yapabileceğiniz en unutulmaz aktivitelerden.

**Pratik ipuçları:** Özellikle yazın öğle sıcağında antik tiyatronun taşları epey ısınabilir; bu yüzden sabah erken veya akşamüzeri ziyaret etmek daha konforlu olacaktır. Basamaklar yüksek ve dar olduğundan tırmanırken dikkat edin, sağlam sandalet veya spor ayakkabı tercih edin. Tiyatroda bilgilendirici tabelalar sınırlı, bu nedenle biraz tarih bilgisiyle gelirseniz gezerken daha anlamlı hale gelir. Gün batımında fotoğraf çekmek isterseniz yanınıza tripod alabilir veya biraz erken gelip en üst sırada kendinize güzel bir yer bulabilirsiniz. Etraf açık alan olduğundan yaz akşamları sivrisinek spreyi bulundurmak da iyi bir fikir.

**Kısa özet:** Antiphellos Antik Tiyatrosu, Kaş merkezine yürüme mesafesinde ulaşabileceğiniz, denize nazır muhteşem bir tarihi miras. Hem gündüz hem de gün batımında farklı güzellikler sunan bu tiyatro, Kaş’ın sakinliğinde tarih ve manzarayı bir arada deneyimlemek isteyen herkesin görmesi gereken bir nokta. Ücretsiz olarak ziyaret edebileceğiniz bu açık hava tiyatrosu, Kaş tatiline kültürel bir dokunuş katıyor.
`
},

{
  id: "kekova-batik-sehir",
  title: "Kekova Batık Şehir",
  description: "Tekneyle gezilebilen, deniz altındaki Likya dönemi kalıntılarıyla ünlü tarihi bir bölge.",
  category: ["history", "nature"],
  image: "../assets/1_places/kekova-batik-sehir-001.jpg",
  images: [
    "../assets/1_places/kekova-batik-sehir-002.jpg",
    "../assets/1_places/kekova-batik-sehir-003.jpg",
    "../assets/1_places/kekova-batik-sehir-004.jpg"
  ],
  rating: 4.6,
  price: "₺₺",
  selected: false,
  location: "Kaş – Üçağız (Kekova)",
  distance: "Kaş merkezden 35 km",
  coordinates: { lat: 36.183330, lng: 29.883330 },
  website: "",
  phone: "",
  duration: "Tüm gün",
  facilities: ["tekne turları", "rehberli gezi"],
  features: ["sualtı kalıntıları", "Likya kenti", "kale (Kaleköy)", "kristal deniz"],
  tags: ["tekne turu", "tarih ve doğa", "sualtı arkeolojisi"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
**Atmosfer:** Kekova bölgesi, tarihi ve doğayı bir arada sunan büyüleyici bir atmosfere sahip. Turkuaz denizin üzerinde tekneniz süzülürken, altında binlerce yıl öncesinin Likya kenti kalıntılarını görebiliyorsunuz. Batık Şehir adı verilen bu kesimde, MS 2. yüzyıldaki depremlerle sulara gömülmüş ev temelleri, liman kalıntıları ve merdivenler cam gibi berrak suyun altında seçilebiliyor. Tekneler motorlarını yavaşlatıp süzülürken suyun altındaki tarihi kalıntılar adeta hayalet gibi size eşlik ediyor. Çevrede sadece dalgaların ve rüzgarın sesi duyuluyor; etraftaki ıssız adacıklar ve antik çağın izleri insana huzur veren bir atmosfer yaratıyor.

**Kimler için uygun:** Hem tarihe hem de doğal güzelliklere ilgi duyan gezginler için ideal bir deneyim. Özellikle antik uygarlıklar ve arkeoloji meraklıları, sualtındaki Likya kalıntılarını görmekten etkilenecektir. Çocuklu aileler de tekne turu konsepti sayesinde rahatlıkla katılabilir; çocuklar genellikle su altındaki “batık şehir” efsanesini dinlemeye bayılıyor. Yüzme ve şnorkel sevenler de turun yüzme molası verilen koylarında keyifli vakit geçirebilir (batık şehirde yüzmek yasak olduğu için başka koylarda duruluyor).

**Ne alınır-ne yapılır:** Kekova’yı keşfetmenin en yaygın yolu Üçağız köyünden veya Kaş’tan kalkan günlük tekne turlarına katılmak. Bu turlar genelde tüm gün sürer ve içerisinde Batık Şehir’i panoramik gezme, Kaleköy (Simena) ziyareti ve yüzme molaları bulunur. Tekne üzerinde rehberiniz size su altındaki kalıntıların ne olduğunu, antik Likya kenti Dolichiste’nin hikayesini anlatır. Batık Şehir üzerinde tekneyle süzülürken denizin dibindeki eski liman taşlarını ve şehir planını hayal etmeye çalışın. Simena (Kaleköy) durağında karaya çıkıp tarihi kaleye tırmanabilir, kale içindeki tiyatro ve manzarayı görebilirsiniz. Ayrıca Kaleköy’de meşhur ev yapımı dondurmanın tadına bakmayı unutmayın. Turun yüzme molalarında tertemiz koylarda Akdeniz’in keyfini çıkarabilir, şnorkelle balıkları izleyebilirsiniz.

**Pratik ipuçları:** Tekne turu için Kaş’tan direkt kalkan turlara katılabileceğiniz gibi araçla Üçağız köyüne gidip oradan da tura başlayabilirsiniz. Kaş-Kekova arası kara yolu yaklaşık 50 dakika sürüyor (35 km). Turlar genelde sabah 9-10 civarında başlar, bu nedenle önceden rezervasyon yapmak iyi olur; yaz sezonunda tekneler dolabiliyor. Tekne gezisi sırasında güneş çok yakıcı olabileceği için şapka, güneş kremi ve bol su getirmeniz önemli. Batık Şehir üzerinde yüzme yasağı var – bölge sit alanı olduğu için dalış veya şnorkel yapmak yasak, sadece tekneden izleyebilirsiniz. Ancak turun diğer duraklarında bol bol yüzme şansı oluyor, yanınıza mayo ve havlu almayı unutmayın. Kamera veya su altı görüntü alma ekipmanınız varsa, su altındaki kalıntıları tekneden çekerken polarize filtre kullanmak parlamayı azaltabilir. Son olarak, Kaleköy’de yürüyüş yapacağınız için sandalet gibi rahat ayakkabılar giyin.

**Kısa özet:** Kekova Batık Şehir, Akdeniz’in dibine saklanmış bir tarih hazinesi. Sadece tekneden görülebilen bu sualtı antik kenti, doğal güzelliğiyle birleşerek ziyaretçilerine unutulmaz bir deneyim sunuyor. Tekne turuyla gezerken hem masmavi koylarda yüzmenin hem de binlerce yıllık Likya kalıntılarını keşfetmenin heyecanını yaşayacaksınız. Kekova, Kaş tatilinizde tarih ve doğayı iç içe geçirmek için mutlaka planınıza eklemeniz gereken özel bir rota.
`
},

{
  id: "kas-dalis",
  title: "Kaş Dalış Deneyimi",
  description: "Türkiye’nin en zengin sualtı yaşamına sahip bölgelerinden birinde unutulmaz dalış deneyimi.",
  category: ["diving", "activities"],
  image: "../assets/1_places/kas-dalis-001.jpg",
  images: [
    "../assets/1_places/kas-dalis-002.jpg",
    "../assets/1_places/kas-dalis-003.jpg",
    "../assets/1_places/kas-dalis-004.jpg"
  ],
  rating: 4.9,
  price: "₺₺₺",
  selected: false,
  location: "Kaş – Merkez",
  distance: "Kaş merkezde",
  coordinates: { lat: 36.201800, lng: 29.637300 },
  website: "",
  phone: "",
  duration: "2-4 saat (bir dalış turu)",
  facilities: ["dalış okulları", "ekipman kiralama", "tekneyle ulaşım"],
  features: ["batıklar", "resifler", "mağaralar", "deniz kaplumbağaları"],
  tags: ["scuba diving", "sertifika kursu", "şnorkel"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
**Atmosfer:** Kaş, Akdeniz’in en iyi dalış noktalarından biri olarak bilinir ve sualtının atmosferi adeta büyüleyicidir. Limandan hareket eden dalış tekneleriyle açıldığınız anda, tertemiz ve derin mavilikler sizi sarar. Dalış noktalarında suyun altına süzülürken etrafınızı saran sessizlik, sadece kendi nefes baloncuklarınızın sesiyle bölünür. Rengârenk balık sürüleri, mercan kayalıkları ve antik amphora parçaları arasında yüzerken kendinizi başka bir dünyada hissedersiniz. Bazen koca bir deniz kaplumbağası yanınızdan süzülür, bazen de bir Akdeniz fokunun görüldüğüne dair hikayeler duyarsınız. Kaş’ın sualtı atmosferi hem huzur verici hem de keşif duygusunu kamçılayan bir sakinliğe sahip.

**Kimler için uygun:** Kaş’ta dalış, ister yeni başlayan olsun ister tecrübeli her seviyeden dalgıca hitap ediyor. Hiç dalış yapmamış olanlar için birçok dalış okulu tarafından “deneme dalışı” imkânı sunuluyor – eğitmen eşliğinde temel bilgilerle sualtını keşfedebilirler. Sertifikalı dalgıçlar ise Kaş’ın zengin dalış rotalarına bayılacak; hem orta seviye resif dalışları hem de ileri seviye derin dalışlar mümkün. Sualtı fotoğrafçıları için de Kaş gerçek bir cennet: berrak görüş mesafesi sayesinde antik kalıntılarla dolu batıkları ve deniz canlılarını görüntülemek keyifli. Macera arayan gençlerden, sakin bir hobi olarak dalış yapan orta yaş gruplarına kadar herkes burada uygun bir dalış deneyimi bulabilir.

**Ne alınır-ne yapılır:** Kaş’ta yapacağınız dalışlarda birbirinden ilginç noktalara gidebilirsiniz. Ünlü dalış noktalarından bazıları: sualtı kanyonuyla ünlenen **Kanyon** bölgesi, eski bir askeri uçağın batığının bulunduğu **DC-3 Dakota Uçak Batığı**, içinde heykeller ve antik çağdan kalma parçalar sergilenen **Kaş Arkeopark (sualtı müzesi)** ve dipteki mağarasıyla **Mavi Mağara**. Dalış teknesine bindiğinizde size uygun ekipmanlar veriliyor veya kendi malzemelerinizi kullanabiliyorsunuz. Eğitmenler her seviyeye göre gruplar ayarlıyor; brifing sonrası akıntısız ve güvenli noktalarda dalışa geçiliyor. 1 günde genellikle 2 dalış yapılıyor (sabah ve öğleden sonra). Dalışlar arasında teknede çay, öğle yemeği veya atıştırmalıklar sunuluyor. Su altında 18-20 metrelerde gezinen caretta caretta deniz kaplumbağalarıyla karşılaşmak çok olası, özellikle **Yaz Batığı** ve **Güvercin Adası** civarında. Ayrıca küçük renkli mürenler, ahtapotlar ve orfoz gibi balıklar da Kaş’ın sualtı sakinlerinden. Eğer şanslıysanız, Kaş açıklarında nadir görülen Akdeniz fokuna bile denk gelinebildiği anlatılır.

**Pratik ipuçları:** Dalış planınızı önceden yapıp Kaş’taki lisanslı dalış okullarından birine rezervasyon yaptırmanız tavsiye edilir. Yaz sezonunda (özellikle Temmuz-Ağustos) tekneler hızlı doluyor. İlk kez dalış yapacaksanız, sabah daha dinç olacağınız için sabah turunu tercih edin. Yanınıza mayo, havlu, güneş kremi (teknenin üstünde güneşlenirken lazım) ve deniz tutmasına karşı bir ilaç almayı unutmayın. Dalış yapacağınız gün ağır alkol almamış ve iyi dinlenmiş olmaya dikkat edin. Ayrıca uçakla seyahat planınız varsa, dönüş uçağınızdan en az 24 saat önce son dalışınızı yapmış olmanız güvenli olacaktır (dalış sonrası vücuttaki azot atılımı için). Kaş’ta su altı görüş mesafesi genelde 30 metrelere kadar çok iyi, ancak en iyi dönemler Eylül ayı civarı suyun en sıcak ve sakin olduğu zamanlar. Dalış sonrasında, çektiğiniz sualtı fotoğraflarını Kaş’ta bir kafede oturup incelemek ve anıları tazelemek de ayrı bir keyif!

**Kısa özet:** Kaş, Türkiye’nin dalış cenneti olarak ünlenmiş bir destinasyon. İster başlangıç seviyesinde olun ister ileri seviye bir dalgıç, Kaş’ın kristal berraklıktaki sularında unutulmaz bir dalış deneyimi yaşayabilirsiniz. Batık antik kentler, uçak batığı ve zengin deniz yaşamıyla dolu bu sularda dalmak, Kaş tatilinin en heyecan verici anılarından biri olacak. Profesyonel dalış merkezlerinin rehberliğinde güvenle keşfe çıkabilir, Akdeniz’in büyülü derinliklerinde bambaşka bir dünya keşfedebilirsiniz.
`
},

{
  id: "keyf-i-dem-meyhane",
  title: "Keyf-i Dem Meyhane",
  description: "Marina manzaralı, mezeleri ve canlı atmosferiyle ünlü geleneksel bir meyhane.",
  category: ["meyhane", "food"],
  image: "../assets/1_places/keyf-i-dem-meyhane-001.jpg",
  images: [
    "../assets/1_places/keyf-i-dem-meyhane-002.jpg",
    "../assets/1_places/keyf-i-dem-meyhane-003.jpg",
    "../assets/1_places/keyf-i-dem-meyhane-004.jpg"
  ],
  rating: 4.8,
  price: "₺₺₺",
  selected: false,
  location: "Kaş – Andifli",
  distance: "Kaş merkezde",
  coordinates: { lat: 36.201000, lng: 29.637000 },
  website: "",
  phone: "+90 542 836 14 20",
  duration: "2-3 saat",
  facilities: ["açık oturma alanı", "rezervasyon", "alkollü içecek servisi"],
  features: ["deniz ürünleri", "mezeler", "canlı müzik (bazı akşamlar)"],
  tags: ["rakı-balık", "romantik", "popüler mekan"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
**Atmosfer:** Keyf-i Dem, Kaş’ın tam kalbinde, limana yakın konumuyla misafirlerini karşılıyor. Geniş bir açık hava oturma alanına sahip bu meyhane, etrafını saran sarmaşıklarla ve ahşap masaların üzerindeki mavi-beyaz pötikareli örtülerle samimi bir Ege atmosferi sunuyor:contentReference[oaicite:6]{index=6}. Ayaklarınızın altında serilmiş marina manzarası, yakamozlar eşliğinde içkinizi yudumlarken insana huzur veriyor. Arkada çalan hafif Türk sanat müziği ve eski şarkılar, sohbetlere keyif katıyor. Kalabalık akşamlarda bile güleryüzlü garsonların koşturduğu, cıvıl cıvıl ama kimseyi rahatsız etmeyen bir canlılık hissediliyor. Keyf-i Dem’in atmosferi, zamanı yavaşlatan ve sizi dost meclisinde hissettiren bir sığınak gibi:contentReference[oaicite:7]{index=7}.

**Kimler için uygun:** Klasik bir rakı-balık gecesi yaşamak isteyen herkes için ideal bir mekân. Özellikle çiftler ve arkadaş grupları, mezelerle donatılmış masada uzun sohbetlerin tadını çıkarabilir. Kaş’a gelip de meyhane deneyimi arayan turistlerin bir numaralı tercihlerinden; hem yerli hem yabancı misafirlerin memnun ayrıldığı bir yer. Romantik bir akşam yemeği için deniz manzarası ve loş ışıklar eşliğinde güzel bir ambiyansı var. Çocuklu aileler de rahatlıkla gelebilir, açık alandaki ferahlık sayesinde ortam ailelere de uygun düşüyor (ancak geç saatlerde müzik ve sohbet yoğun olabileceğinden küçük çocuklar için biraz gürültülü olabilir).

**Ne alınır-ne yapılır:** Masanızı birbirinden leziz meze tabaklarıyla donatmak buradaki en keyifli ritüel. Özellikle deniz börülcesi, Girit ezmesi, fava, köpoğlu gibi Ege mezeleri çok beğeniliyor. Balık olarak günlük taze levrek ızgara veya kağıtta lagos gibi seçenekler övgü alıyor:contentReference[oaicite:8]{index=8}. Ara sıcaklardan kalamar tava ve sarımsaklı karides mutlaka denenmeli; çıtır kalamarın yanında gelen özel sos harika. Ana yemek isterseniz balık dışında bademli tavuk veya lokum gibi et seçenekleri de mevcut ve özenle hazırlanıyor:contentReference[oaicite:9]{index=9}. Menüsünde geniş bir rakı ve şarap listesi var, geleneksel rakı sohbetine uygun her şey düşünülmüş. Yemeğinizin sonunda tatlı olarak tahin-pekmez veya fırın helva deneyebilirsiniz. Keyf-i Dem’de bazı akşamlar canlı fasıl müziği veya soft bir gitar müziği olabiliyor; eğer öyle bir geceye denk gelirseniz şarkılara zaman zaman siz de eşlik edebilirsiniz.

**Pratik ipuçları:** Mekân Kaş’ın en popüler meyhanelerinden olduğundan yaz sezonunda kesinlikle önceden rezervasyon yaptırın, özellikle liman manzaralı ön masalarda oturmak isterseniz birkaç gün öncesinden aramakta fayda var. Akşam 19:00-20:00 suları kalabalık artmaya başlıyor, mümkünse gün batımına yakın gidip hem manzaranın hem de sakin başlangıcın keyfini çıkarın. Menülerinde İngilizce açıklamalar da bulunduğundan yabancı misafirler sipariş vermekte zorlanmıyor. Fiyatlar Kaş ortalamasına göre yüksek gelebilir, ancak porsiyonlar doyurucu ve servis kalitesi iyi olduğundan genel deneyim fiyatını hak ediyor. Hesap öderken nakit veya kart geçiyor; bahşiş bırakmak yaygın bir nezaket. Konum olarak merkezi bir cadde üzerinde olduğu için yemeğin ardından Kaş çarşısında yürüyüşe çıkmak da kolay.

**Kısa özet:** Keyf-i Dem Meyhane, Kaş’ta Ege ruhunu tam anlamıyla yaşayabileceğiniz, leziz mezeler ve taptaze deniz ürünleri eşliğinde rakı keyfi yapabileceğiniz özel bir mekan. Sıcacık atmosferi, marina manzarası ve güler yüzlü servisiyle hem damaklara hem ruhlara hitap ediyor. Kaş’ta unutulmaz bir akşam geçirmek isterseniz, dostlarınızla Keyf-i Dem’in samimi masasında buluşmayı ihmal etmeyin.
`
},

{
  id: "dudu-mutfak",
  title: "Dudu Mutfak",
  description: "Eski bir Kaş evinde, zengin serpme kahvaltısıyla ünlü sıcak ve samimi bir kafe-restoran.",
  category: ["breakfast", "food"],
  image: "../assets/1_places/dudu-mutfak-001.jpg",
  images: [
    "../assets/1_places/dudu-mutfak-002.jpg",
    "../assets/1_places/dudu-mutfak-003.jpg",
    "../assets/1_places/dudu-mutfak-004.jpg"
  ],
  rating: 4.6,
  price: "₺₺",
  selected: false,
  location: "Kaş – Andifli",
  distance: "Kaş merkezde",
  coordinates: { lat: 36.201500, lng: 29.638000 },
  website: "",
  phone: "+90 536 347 10 94",
  duration: "1-2 saat",
  facilities: ["deniz manzarası", "vegan seçenek", "paket servis"],
  features: ["serpme kahvaltı", "ev yapımı reçeller", "günlük ev yemekleri"],
  tags: ["kahvaltı", "ev yapımı lezzetler", "vejetaryen dostu"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
**Atmosfer:** Dudu Mutfak, Kaş ilçe merkezinde tarihi bir Kaş evinin giriş katında hizmet veriyor:contentReference[oaicite:10]{index=10}. Kapısından içeri adım attığınızda hemen o nostaljik ve sıcak atmosferi hissediyorsunuz: Taş duvarlar, ahşap detaylar ve birkaç masalık küçük bir salon... Mekânın arka tarafındaki terastan ve pencerelerden Kaş’ın mavi denizi ve Meis Adası manzarası göz kırpıyor. Sade ama özenli dekore edilmiş bu ufak restoranda ortam oldukça huzurlu ve samimi. Sabahları kuş sesleri ve hafif bir müzik eşliğinde kahvaltı eden insanların sohbeti ortama neşe katıyor. Kendinizi sanki bir arkadaşınızın evinde konuk olmuşsunuz gibi rahat hissedebileceğiniz, ferah ve içten bir atmosfer var.

**Kimler için uygun:** Özellikle kahvaltı severler için Kaş’ta bir numaralı adreslerden biri. Zengin serpme kahvaltısıyla ünlü olduğu için güne güzel bir başlangıç yapmak isteyen çiftler, aileler ve arkadaş grupları burada buluşuyor. Vegan, vejetaryen veya glutensiz beslenenler de Dudu Mutfak’ta kendilerine uygun seçenekler bulabiliyor, çünkü menü herkesin damak tadına hitap edecek çeşitlilikte. Öğle ve akşam saatlerinde ise ev yemekleri arayanlar ve hafif, sağlıklı öğün tercih edenler için de uygun bir durak. Çocuklu aileler de samimi ortam sayesinde rahat ediyor; çocuklar ev yapımı reçellerle tatlı bir ziyafet çekebiliyor.

**Ne alınır-ne yapılır:** Dudu Mutfak’ın alametifarikası serpme kahvaltısı. Masanız, ev yapımı reçeller, taze köy peyniri ve zeytinler, çıtır sıcak börekler, pişi (hamur kızartması) ve mis kokulu omletler ile donatılıyor. Özellikle mandalina ve karadut reçelleri çok beğeniliyor; bu reçeller tamamen ev yapımı ve mevsimine göre çeşitleniyor. Vegan kahvaltı tabağı da bulmak mümkün, bitkisel sütlü kahve veya taze sıkma meyve sularıyla destekleyebilirsiniz. Kahvaltı dışında öğleden sonra uğrarsanız anne köftesi, ev mantısı, yaprak ciğer veya günlük değişen zeytinyağlılar gibi ev yemekleri sunuyorlar:contentReference[oaicite:11]{index=11}. Falafel ve erişte gibi vejetaryen seçenekler de mevcut. Yemeklerin ardından menüdeki ev yapımı kek veya tatlılardan alıp Türk kahvesiyle keyif yapmak da önerilir. Mekân alkollü içecek servisi de yapıyor, dilerseniz akşam yemeğinde bir kadeh şarap da alabilirsiniz.

**Pratik ipuçları:** Dudu Mutfak haftanın her günü Salı hariç açık, 09:00-22:00 saatleri arasında hizmet veriyor:contentReference[oaicite:12]{index=12}. Kahvaltı için rezervasyon almıyorlar, bu yüzden özellikle yüksek sezonda sabah biraz erken gitmek yer bulmak açısından avantajlı olabilir. En yoğun zamanlar 09:30-11:00 arası; eğer beklemek istemiyorsanız 9’a doğru giderseniz rahat edersiniz. Mekânın oturma kapasitesi sınırlı (toplam 6-7 masası var), bu da aslında hizmetin kaliteli ve ilgili olmasını sağlıyor. Yazın terastaki masalarda güneş olabileceği için şapka veya güneş gözlüğü almanız iyi olabilir. Fiyatlar sunulan ev yapımı ürünlerin kalitesine göre makul seviyede, ancak toplu serpme kahvaltı söylediğinizde kişi başı ücreti biraz yüksek gelebilir – ürünlerin doğallığı ve çeşitliliği bunu dengeliyor. Paket servis imkânı da var; Kaş’ta kaldığınız yere menülerindeki bazı ürünleri sipariş edebilirsiniz.

**Kısa özet:** Dudu Mutfak, Kaş’ın bir klasiği haline gelmiş, sıcacık ortamıyla misafirlerini kendi evinde gibi hissettiren bir kafe-restoran. Özellikle serpme kahvaltısıyla dillere destan olan bu mekânda, organik ve ev yapımı lezzetlerle dolu bir sofrada güne başlayabilirsiniz. Samimi atmosferi ve zengin menüsüyle Dudu Mutfak, Kaş’ta hem kahvaltı hem de diğer öğünler için güvenle tercih edilecek, damakta tatlı bir anı bırakan özel bir adres.
`
},

{
  id: "mavi-bar",
  title: "Mavi Bar",
  description: "Kaş’ın en eski barı; alternatif müzikleri, salaş ortamı ve gün batımı manzarasıyla meşhur buluşma noktası.",
  category: ["bar"],
  image: "../assets/1_places/mavi-bar-001.jpg",
  images: [
    "../assets/1_places/mavi-bar-002.jpg",
    "../assets/1_places/mavi-bar-003.jpg",
    "../assets/1_places/mavi-bar-004.jpg"
  ],
  rating: 4.4,
  price: "₺₺",
  selected: false,
  location: "Kaş – Andifli",
  distance: "Kaş merkezde",
  coordinates: { lat: 36.199400, lng: 29.640800 },
  website: "http://www.mavibarkas.com",
  phone: "+90 533 391 31 71",
  duration: "2-4 saat (akşam)",
  facilities: ["açık alan", "kokteyl menüsü", "canlı müzik"],
  features: ["rock müzik", "gün batımı manzarası", "ikonik mekan"],
  tags: ["gece hayatı", "alternatif", "yerel müdavimler"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
**Atmosfer:** Mavi Bar, 1980’lerden bu yana Kaş’ın simgesi haline gelmiş, ruhu olan bir mekan:contentReference[oaicite:13]{index=13}. Küçük meydandaki konumuyla akşamları herkesin buluştuğu, capcanlı bir atmosferi var. Salaş bir sahil barı konseptinde, renkli ahşap sandalyeler kaldırıma kadar taşıyor ve barın hemen yanında seyyar midyeciler müşterilere atıştırmalık sunuyor:contentReference[oaicite:14]{index=14}. Duvarları eski posterler ve hatıralarla dolu içeride hafif loş bir ışık, dışarıda ise yıldızlı Kaş göğü altındasınız. Rock, hard rock ve alternatif müzik burada gecenin ritmini belirliyor; özenle seçilmiş klasik rock şarkıları çalıyor ve müdavimler kimi zaman parçaları mırıldanıyor. Yerli yabancı herkesin kaynaştığı, samimi sohbetlerin dönüp bira bardaklarının tokuşturulduğu bir ortam hakim. Kaş’ın 40 yıllık efsanesi Mavi Bar’ın kendine has bir ruhu ve sıcaklığı var; sanki duvarları bile anılarla konuşuyor.

**Kimler için uygun:** Özellikle rock müzik severlerin ve rahat, salaş bir ortam arayan gezginlerin vazgeçilmez adresi. Genç gezginler, dalgıçlar, sanatçılar – her kesimden insan burada yan yana oturup muhabbet edebiliyor. Kaş’ın gece hayatını deneyimlemek isteyen ama kulüp gürültüsü yerine sohbet edebileceği bir yer arayanlar için ideal. Aynı zamanda gün batımında bir içkiyle günü noktalamak isteyen çiftler de Mavi Bar’ın önündeki merdivenlere oturup manzaranın tadını çıkarıyor. Gündüzleri sakin bir kafeterya gibi olsa da aslında akşamları canlanan bir mekan; 18 yaş altı gençler de akşam belli bir saate kadar ortamda görülebiliyor ama genel olarak yetişkin bir kitleye hitap ediyor.

**Ne alınır-ne yapılır:** Mavi Bar’da özel bir kokteyl menüsü olsa da en çok tercih edilen içecek klasik bir soğuk bira veya bir kadeh yerel şarap. Barın içi küçük olduğundan genelde herkes içkisini alıp dışarıdaki meydanda veya barın önündeki banklarda oturuyor, hatta yere minder serip oturan bile var. Gün batımı saatlerinde burada olmak ayrı bir keyif; turuncu gökyüzü ve hafif esinti eşliğinde içkinizi yudumlayın. Menüde fiyatlar makul düzeyde, örneğin kokteyller 130-160 TL civarı:contentReference[oaicite:15]{index=15}, bira ise uygun fiyatlı ve buz gibi geliyor. Atıştırmalık olarak barın kendisi çok kapsamlı bir yemek sunmasa da hemen yanındaki midyeci tezgahından taze midye dolma alabilirsiniz; birçok kişi birasını yudumlarken midye yemeyi adet haline getirmiş. Arada sırada DJ performansları veya konuk müzisyenler de olabiliyor, özellikle yaz aylarında belirli gecelerde canlı rock müzik yapıldığı oluyor. Servis hızlı ve çalışanlar samimi; hatta müdavimler garsonları yıllardır tanır, muhabbet eder. 

**Pratik ipuçları:** Mavi Bar gece yarısından sonra da açık kalan bir yer (genelde yazın 03:00’e kadar canlıdır), ancak en hareketli zamanı 21:00-01:00 arası diyebiliriz. Oturacak yer bulmak istiyorsanız biraz erken gidip barın önündeki masalardan birine kurulun. Eğer yer bulamazsanız üzülmeyin; Kaş’ta adet olduğu üzere pek çok kişi içkisini alıp barın karşısındaki merdivenlere veya meydana yayılıp oturur, sokak atmosferinin tadını çıkarır. Müzik bazen içeride yüksek gelebilir, sohbet etmek isterseniz dışarıda oturmak daha iyi olacaktır (içeride çalan müzik dışarıya hoparlörle de veriliyor ama biraz daha kısık duyuluyor). Yaz sezonunda servis yoğunluktan aksarsa biraz sabırlı olun, Kaş’ın rahat temposuna uyum sağlamak gerekiyor. Kış aylarında ise Mavi Bar apayrı sıcak bir ortama bürünür; soba etrafında toplanan Kaş sakinleriyle sohbet edip farklı bir yüzünü deneyimleyebilirsiniz. 

**Kısa özet:** Mavi Bar, Kaş’ın kırk yılı aşkın süredir yaşayan efsanesi, bir barından öte anıların mekanı. Renkli sandalyelerinde oturup rock müzik eşliğinde içkinizi yudumlarken, bir yandan da limana vuran dalgaları ve yıldızlı gökyüzünü seyredebilirsiniz. Salaş ve özgün atmosferiyle Mavi Bar, Kaş gecelerinin vazgeçilmez buluşma noktası ve herkesin en az bir kez uğrayıp müdavimi olduğu özel bir yer.
`
},

{
  id: "uzun-carsi",
  title: "Uzun Çarşı & Aslanlı Lahit",
  description: "Tarihi Kaş çarşısı; otantik dükkanları ve sonunda yer alan 2400 yıllık Aslanlı Lahit ile ünlü sokak.",
  category: ["shopping", "history"],
  image: "../assets/1_places/uzun-carsi-001.jpg",
  images: [
    "../assets/1_places/uzun-carsi-002.jpg",
    "../assets/1_places/uzun-carsi-003.jpg",
    "../assets/1_places/uzun-carsi-004.jpg"
  ],
  rating: 4.2,
  price: "₺₺",
  selected: false,
  location: "Kaş – Andifli",
  distance: "Kaş merkezde",
  coordinates: { lat: 36.201700, lng: 29.637500 },
  website: "",
  phone: "",
  duration: "1-2 saat",
  facilities: ["mağazalar", "kafe ve dondurmacılar", "bankamatik"],
  features: ["el işi ürünler", "antikacılar", "fotojenik sokak"],
  tags: ["hediyelik eşya", "Likia lahdi", "otantik deneyim"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
**Atmosfer:** Uzun Çarşı, Kaş’ın ruhunu yansıtan en canlı ve otantik sokaklardan biri. Arnavutkaldırımı taş döşeli bu daracık çarşı sokağının iki yanında sıralanan cumbalı eski evler, begonvillerle bezenmiş balkonlarıyla göz dolduruyor. Gündüz saatlerinde dükkanlardan yayılan baharat ve taze kahve kokuları, takı ve halı mağazalarından gelen hafif müziklerle karışıyor. Akşamüstüne doğru çarşı hareketleniyor; lambalar yanmaya başladığında sıcacık sarı ışıklar altında alışveriş yapan insanlar, dondurma yalayan çocuklar, sokak boyunca yürüyen turistlerle tam bir Akdeniz akşamı atmosferi oluşuyor. Sokak sonunda, dev bir çınar ağacının dibinde duran 2400 yıllık Aslanlı Lahit (Kral Mezarı) tüm ihtişamıyla yükseliyor:contentReference[oaicite:16]{index=16}. Hem tarih hem canlılık iç içe geçmiş; Uzun Çarşı’da gezerken bir yandan tarih kokusunu alıyor, bir yandan da rengarenk vitrinler arasında kayboluyorsunuz.

**Kimler için uygun:** Kaş’tan hatıra bir şeyler almak isteyen her ziyaretçinin mutlaka uğraması gereken bir yer. El işi takılar, tekstil ürünleri, hediyelik eşya meraklıları için cennet gibi. Tarih meraklıları da sokağın sonunda duran Likya dönemine ait Aslanlı Lahit’i görmekten keyif alacak. Fotoğraf çekmeyi sevenler için de Uzun Çarşı oldukça fotogenik; özellikle sabah erken saatlerde boşken veya akşam kalabalığında çekilen fotoğraflar çok güzel çıkıyor. Aileler çocuklarıyla rahatlıkla gezebilir, çünkü trafiğe kapalı bir bölge. Romantik bir akşam yürüyüşü yapmak isteyen çiftler için de ideal bir ortam; dükkanlara baka baka yürürken zamanın nasıl geçtiğini anlamazsınız.

**Ne alınır-ne yapılır:** Çarşının girişinden itibaren takıcılar, halıcılar, giysi butikleri ve baharatçılar sıralanıyor. Kaş’a özgü el yapımı deri sandaletlerden bir çift edinebilirsiniz; bu işi yıllardır yapan ustaların dükkanları var. Gümüş takılar ve özellikle lacivert renkli oymalı Osmanlı yüzükleri turistlerin gözdesi. Yöresel desenli peştamaller, el dokuması kilimler de birkaç dükkanda bulunuyor. Baharat ve doğal ürünler satan aktarların önünde durup adaçayı, kekik gibi kokuları koklayın; belki biraz taze adaçayı veya nar ekşisi almadan geçmeyin. Uzun Çarşı boyunca ayrıca küçük kafeler ve dondurmacılar da var; alışverişe mola vermek isterseniz ev yapımı dondurmasıyla ünlü köşedeki dondurmacıdan bir top karadut dondurması alıp yürüyüşe öyle devam edin. Sokağın sonunda ulaştığınız Aslanlı Lahit’in üzerindeki aslan kabartmalarını inceleyin; bu lahit Likya döneminden kalma ve Kaş’ın simgelerinden biri. Dilerseniz lahitin önünde hatıra fotoğrafı çektirin – lahitin heybeti ve arka plandaki çarşı manzarası harika bir kare oluyor.

**Pratik ipuçları:** Uzun Çarşı yaz aylarında akşamları kalabalık olsa da dükkanlar genelde 23:00’e kadar açık kaldığı için rahatça gezebilirsiniz. Özellikle cuma akşamları ertesi günün Kaş pazarı için gelenlerle çarşı ekstra hareketli olabilir. Sabah saatlerinde daha sakin bir ortam istiyorsanız 10:00 civarı dükkanlar yeni açılmışken gitmek iyi bir fikir; fotoğraf çekmek için de o saatler güzel ışık veriyor. Çarşı içindeki fiyatlar turistik olduğu için biraz pazarlık payı bırakılmış olabilir, beğendiğiniz bir ürün olursa çekinmeden pazarlık yapın. Aslanlı Lahit çevresinde genelde sokak sanatçıları veya el yapımı bileklik satan gençler olabiliyor, onlara da göz atabilirsiniz. Çarşının bir bölümü merdivenli yokuş şeklinde; rahat ayakkabı giymekte fayda var. Son olarak, lahitin bulunduğu noktadan yukarı doğru devam eden merdivenler sizi Kaş’ın arka sokaklarına ve daha sessiz mahallelerine götürür – eğer keşfetmek isterseniz o tarafı da yürüyebilirsiniz.

**Kısa özet:** Uzun Çarşı, Kaş’ın hem ticari hem tarihi kalbi diyebileceğimiz, canlı ve renkli bir sokak. Otantik dükkanlarında dolaşıp alışveriş yaparken, sokak sonunda sizi bekleyen binlerce yıllık Aslanlı Lahit’le zamanda yolculuk yapmış gibi olacaksınız. El işi hediyelikler almak, yerel lezzetleri tatmak veya sadece atmosferin tadını çıkarmak için Kaş’ta mutlaka görülmesi gereken bu çarşı, gündüzü ayrı gecesi ayrı güzellikte bir deneyim sunuyor.
`
},

{
  id: "lukka-exclusive-hotel",
  title: "Lukka Exclusive Hotel",
  description: "Çukurbağ Yarımadası’nda, denize sıfır konumu ve lüks olanaklarıyla tanınan, yetişkinlere yönelik butik otel.",
  category: ["hotels"],
  image: "../assets/1_places/lukka-exclusive-hotel-001.jpg",
  images: [
    "../assets/1_places/lukka-exclusive-hotel-002.jpg",
    "../assets/1_places/lukka-exclusive-hotel-003.jpg",
    "../assets/1_places/lukka-exclusive-hotel-004.jpg"
  ],
  rating: 4.9,
  price: "₺₺₺",
  selected: false,
  location: "Kaş – Çukurbağ Yarımadası",
  distance: "Kaş merkezden 5 km",
  coordinates: { lat: 36.194015, lng: 29.593389 },
  website: "https://www.lukkahotel.com",
  phone: "+90 242 836 14 20",
  duration: "Konaklama",
  facilities: ["özel plaj platformu", "sonsuzluk havuzu", "restoran", "spa hizmetleri"],
  features: ["yalnız yetişkin (+12)", "deniz manzaralı odalar", "butik hizmet", "sessiz ortam"],
  tags: ["lüks", "balayı oteli", "ödüllü"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `
**Atmosfer:** Lukka Exclusive Hotel, Kaş Çukurbağ Yarımadası’nın en ucunda, huzur dolu bir ortam sunuyor:contentReference[oaicite:17]{index=17}. Otele adım attığınız anda sizi Akdeniz’in uçsuz bucaksız maviliği ve palmiye ağaçları karşılıyor. 30 odalı bu butik otel son derece zarif ve ferah bir tasarıma sahip; her köşesinden deniz manzarası görülebiliyor. Ortam sakin, sadece yetişkin misafir kabul edildiği için (14 yaş altı almıyor) sessizlik ve mahremiyet ön planda. Büyük bir sonsuzluk havuzu bulunuyor ve deniz suyu ile doldurulmuş bu havuzdan ufukla birleşen bir manzarada yüzmek büyüleyici bir deneyim. Günbatımında otelin terası yumuşak bir müzik eşliğinde altın renginde ışıklara bürünüyor; atmosfer adeta romantik bir film sahnesini andırıyor. Hem doğal güzellik hem de sofistike lüksün buluştuğu bir ambiyans hakim.

**Kimler için uygun:** Balayı çiftleri, özel bir tatil arayanlar ve Kaş tatilinde konforu en üst düzeyde yaşamak isteyen misafirler için ideal. Lukka, üst üste yıllarca Kaş’ın en iyi oteli seçilmiş ödüllü bir tesis:contentReference[oaicite:18]{index=18}, dolayısıyla beklentisi yüksek olan konukları bile memnun ediyor. Çocuk kabul edilmediğinden özellikle çiftler ve yetişkin arkadaş grupları için huzurlu bir kaçamak ortamı sunuyor. Kalabalıktan ve şehir gürültüsünden uzak, dingin bir atmosfer arayanlar burada kendilerini şımartabilir. Dalış, yamaç paraşütü gibi macera aktivitelerine katılıp gün sonunda sakin bir lüks mekâna çekilmek isteyenler de Lukka’nın sunduğu olanaklardan memnun kalacaktır.

**Ne alınır-ne yapılır:** Otelin kendine ait deniz platformundan masmavi denize girebilirsiniz; merdivenden indiğiniz an kendinizi Akdeniz’in serin sularında buluyorsunuz. Platformda şezlongunuza uzanıp size özel hizmetle kokteylinizi sipariş edebilirsiniz. Lukka’nın restoranı, gurme lezzetleriyle ünlü – taze deniz mahsulleri ve Akdeniz mutfağından seçkin tatlar sunuluyor. Özellikle gün batımında terasta akşam yemeği yemek unutulmaz bir deneyim; şefin özel menüsünden karidesli risotto veya kabak çiçeği dolması gibi lezzetler tavsiye edilir. Sabahları ise deniz manzaralı terasta serpme kahvaltı servis ediliyor; ev yapımı reçellerden taze meyvelere oldukça zengin. Otelin havuzunda yüzmek isterseniz havuz kenarında da bar hizmeti var, buzlu içeceğinizi yudumlayıp sonsuzluk havuzunda vakit geçirebilirsiniz. Ayrıca isteyen misafirlere oda içinde masaj ve spa hizmetleri de organize ediliyor; odanızın balkonunda dalga sesleri eşliğinde masaj yapmak mümkün. Otelde gün boyu yapılacak çok şey var ama Kaş merkeze inmek isterseniz resepsiyondan 5 dakikalık bir taksi çağırmak yeterli, akşamları Kaş’ın merkezinde vakit geçirdikten sonra yine otele dönüp sessizliğin tadını çıkarabilirsiniz.

**Pratik ipuçları:** Lukka Exclusive oldukça popüler olduğu için yaz sezonu ve bayram dönemleri için aylar öncesinden rezervasyon yaptırmak gerekebiliyor. Oda seçenekleri 30 m² ile 80 m² arasında değişiyor, bütçenize uygunsa deniz manzaralı süit odaları tercih edin – balkonunuzdan gün doğumu ve batımını izlemek harika oluyor. Otel +12 yetişkin oteli olduğu için ailecek çocuklarla gelmek mümkün değil, bunu göz önünde bulundurun. Kaş merkeze yaklaşık 5 km mesafede olduğu için kendi arabanız yoksa ulaşımı taksiyle sağlayabilirsiniz; otel çalışanları bu konuda çok yardımcı ve hızlıca araç çağırıyorlar. Tesis konumu gereği yamaca kurulu olduğundan ve denize inmek için merdiven kullanıldığından eğer yürüme güçlüğü çeken biri varsa önceden durumunu bildirmenizde fayda var (personel yardımcı oluyor ancak çok fazla basamak olduğunu bilin). Check-in saati 14:00, çıkış 11:00 ama müsaitlik durumunda esneklik gösterebiliyorlar. Özellikle balayı için geliyorsanız, odaya çiçek ve şarap ikramı gibi jestler yapılıyor; rezervasyon sırasında belirtmeyi unutmayın.

**Kısa özet:** Lukka Exclusive Hotel, Kaş’ta lüks ve huzurun adresi. Muhteşem deniz manzarası, özenli hizmeti ve romantik atmosferiyle misafirlerine unutulmaz bir konaklama deneyimi sunuyor. Ödüllü bu butik otel, balayı çiftlerinden dinlenmeye çekilen gezginlere kadar herkesin beklentisini fazlasıyla karşılıyor. Kaş’ın sakin yarımadasında, dalga sesleri ve gün batımları eşliğinde rüya gibi bir tatil için Lukka, doğru tercih olacaktır.
`
},




// 2. onluk (10/72)

// 11) Büyük Çakıl Plajı
{
  id: "buyuk-cakil-plaji",
  title: "Büyük Çakıl Plajı",
  description: "Kaş merkeze yürünebilir mesafede, çakıllı yapısı ve hızlı derinleşen deniziyle bilinen popüler bir halk plajı.",
  category: ["beaches"],
  image: "../assets/1_places/buyuk-cakil-plaji-001.jpg",
  images: [
    "../assets/1_places/buyuk-cakil-plaji-002.jpg",
    "../assets/1_places/buyuk-cakil-plaji-003.jpg",
    "../assets/1_places/buyuk-cakil-plaji-004.jpg"
  ],
  rating: 0.0,
  price: "₺",
  selected: false,
  location: "Andifli, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.19176, lng: 29.65163 },
  website: "",
  phone: "",
  duration: "",
  facilities: ["duş", "şezlong/şemsiye (sezona göre)", "yakınında yeme-içme (sezona göre)"],
  features: ["çakıllı sahil", "hızlı derinleşen deniz", "şnorkel için uygun (deniz sakin olduğunda)"],
  tags: ["halk plajı", "merkeze yakın", "gün batımı"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Büyük Çakıl, Kaş’ın “hemen çıkıp denize gireyim” dediğin klasik noktalarından biri. Sahil çakıllı; deniz genelde çok berrak oluyor. Plajın en belirgin özelliği, suyun kısa sürede derinleşmesi. Bu yüzden hem yüzmeyi sevenlerin hem de serin, temiz su arayanların favorilerinden.

**Kimler için uygun**
Merkeze yakın bir plaj arayanlar, günü kısa bir kaçamakla değerlendirmek isteyenler için ideal. Yüzme bilmeyenler veya çocuklu aileler içinse dikkatli olmak gerekiyor; derinleşme hızlı olabildiği için güvenli bir alan seçmek ve denizi gözlemek önemli.

**Ne alınır-ne yapılır**
Gün boyu denize girip çıkmak, kıyıda güneşlenmek ve sakin bir zamanda şnorkelle kıyı çizgisini keşfetmek güzel oluyor. Deniz dalgasızsa, su altı görüşü tatmin edici. Kısa bir yürüyüşle Kaş merkezle birleştirip “deniz + kahve” şeklinde de planlanabilir.

**Pratik ipuçları**
Çakıl nedeniyle deniz ayakkabısı işini kolaylaştırır. Erken saatler daha sakindir; öğleden sonra kalabalık artabilir. Denize giriş çıkışta kaygan taşlara dikkat et. Şezlong/şemsiye durumu ve işletme düzeni sezona göre değişebildiği için, gittiğinde yerinde bakmak en doğrusu.

**Kısa özet**
Merkeze yakın, berrak su, çakıllı sahil ve hızlı derinleşen deniz: Büyük Çakıl’ın özeti bu. “Kısa sürede denize gireyim” diyenler için güçlü bir seçenek.`
},

// 12) Küçük Çakıl Plajı (Çınarlar Plajı)
{
  id: "kucuk-cakil-plaji",
  title: "Küçük Çakıl Plajı (Çınarlar Plajı)",
  description: "Kaş merkezde küçük bir koy hissi veren, çakıllı ve berrak suya sahip, yürüyerek kolay ulaşılan plaj.",
  category: ["beaches"],
  image: "../assets/1_places/kucuk-cakil-plaji-001.jpg",
  images: [
    "../assets/1_places/kucuk-cakil-plaji-002.jpg",
    "../assets/1_places/kucuk-cakil-plaji-003.jpg",
    "../assets/1_places/kucuk-cakil-plaji-004.jpg"
  ],
  rating: 0.0,
  price: "₺",
  selected: false,
  location: "Kaş Merkez, Andifli/Kaş",
  distance: "",
  coordinates: { lat: 36.19741, lng: 29.64418 },
  website: "",
  phone: "",
  duration: "",
  facilities: ["yakınında kafe/işletmeler (sezona göre)"],
  features: ["küçük koy", "berrak su", "merkez içi ulaşım kolaylığı"],
  tags: ["merkez plajı", "kolay ulaşım", "kısa kaçamak"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Küçük Çakıl, Kaş’ın tam merkezinde “şehrin içinden denize” hissini en net veren noktalardan. Küçük bir koy gibi; su genelde berrak ve ferah. Alanı sınırlı olduğu için gün içinde kalabalık olabiliyor; buna rağmen Kaş’ın en pratik yüzme noktalarından biri.

**Kimler için uygun**
Arabayla uğraşmadan yürüyerek denize girmek isteyenler, kısa süreli serinleme molası arayanlar ve merkezde konaklayanlar için çok uygun. Çocuklu aileler için kalabalık saatlerde yer bulmak zor olabilir; ayrıca taş/çakıl zemine hazırlıklı olmak iyi olur.

**Ne alınır-ne yapılır**
Kısa bir yüzme, kıyıda güneşlenme, sonra merkezde yemek/kahve… Küçük Çakıl’ın en güzel tarafı bu “akışkan plan.” Deniz sakinse kıyı boyunca şnorkelle bakınmak da keyifli; fakat alan dar olduğu için çevreyi rahatsız etmeden hareket etmek önemli.

**Pratik ipuçları**
Deniz ayakkabısı konfor sağlar. Sabah erken veya akşamüstü daha nefes aldırır. Alan küçük olduğundan, eşyaları derli toplu tutmak hem senin hem herkesin işini kolaylaştırır. Sezonda işletme düzeni değişebilir; gittiğinde güncel duruma göre plan yapmak en doğrusu.

**Kısa özet**
Küçük, merkezde, pratik ve berrak: Küçük Çakıl tam olarak bu. “Kaş’tayım ve şimdi denize girmek istiyorum” cümlesinin en hızlı cevabı.`
},

// 13) Kaş Belediyesi Halk Plajı
{
  id: "kas-belediyesi-halk-plaji",
  title: "Kaş Belediyesi Halk Plajı",
  description: "Kaş merkezde platform/çakıl karışımı yapısıyla, duş–WC gibi temel imkanları bulunan popüler belediye plajı.",
  category: ["beaches"],
  image: "../assets/1_places/kas-belediyesi-halk-plaji-001.jpg",
  images: [
    "../assets/1_places/kas-belediyesi-halk-plaji-002.jpg",
    "../assets/1_places/kas-belediyesi-halk-plaji-003.jpg",
    "../assets/1_places/kas-belediyesi-halk-plaji-004.jpg"
  ],
  rating: 0.0,
  price: "₺",
  selected: false,
  location: "Andifli, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.19802, lng: 29.61765 },
  website: "",
  phone: "",
  duration: "",
  facilities: ["duş", "wc", "soyuna kabini", "gölgelik alan", "otopark (sezona göre)", "kafe/teras (sezona göre)"],
  features: ["platformlu alanlar", "hızlı derinleşebilen deniz", "merkeze yakın"],
  tags: ["belediye plajı", "tesis var", "kolay gün planı"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Kaş Belediyesi Halk Plajı, “tesis olsun ama yine de halk plajı rahatlığı kalsın” isteyenlerin sık kullandığı bir yer. Platformlu alanlar ve düzenli bir yerleşim hissi var. Deniz genelde temiz ve serin; bazı noktalarda hızlı derinleşebiliyor.

**Kimler için uygun**
Duş, WC, soyunma kabini gibi temel ihtiyaçları plajda çözmek isteyenler için iyi. Merkeze yakın olduğu için günü ikiye bölmek isteyenlere de uygun: sabah deniz, öğleden sonra şehir. Yüzme bilmeyenler veya çocuklarla gelenler, denizin derinleşen kısımlarına karşı temkinli olmalı.

**Ne alınır-ne yapılır**
Klasik “günlük deniz” planı için ideal: gir-çık, gölgede dinlen, bir şeyler iç, tekrar yüz. Deniz sakin olduğunda platformdan giriş çıkış rahat olur. Gün batımı saatlerinde ışık çok güzel olabiliyor; kısa bir yürüyüşle manzarayı da tamamlayabilirsin.

**Pratik ipuçları**
Sezonda yoğun olabiliyor; erken gitmek yer seçimini kolaylaştırır. Platform/merdivenlerden inerken kayganlığa dikkat et. Tesislerin çalışma düzeni ve ücretlendirme detayları sezona göre değişebildiği için, gittiğinde güncel durumu kontrol etmek en sağlıklısı.

**Kısa özet**
Merkeze yakın, temel imkanları olan, düzenli bir halk plajı: Kaş Belediyesi Halk Plajı. “Konfor + pratiklik” dengesini sevenlere iyi gider.`
},

// 14) İnceboğaz Plajı
{
  id: "incebogaz-plaji",
  title: "İnceboğaz Plajı",
  description: "Kaş yarımada tarafında, daha korunaklı koy hissi veren, çakıllı ve sakin deniziyle bilinen plaj.",
  category: ["beaches"],
  image: "../assets/1_places/incebogaz-plaji-001.jpg",
  images: [
    "../assets/1_places/incebogaz-plaji-002.jpg",
    "../assets/1_places/incebogaz-plaji-003.jpg",
    "../assets/1_places/incebogaz-plaji-004.jpg"
  ],
  rating: 0.0,
  price: "₺",
  selected: false,
  location: "Kaş Yarımada, Andifli/Kaş",
  distance: "",
  coordinates: { lat: 36.200693, lng: 29.624793 },
  website: "",
  phone: "",
  duration: "",
  facilities: ["sezona göre şezlong/şemsiye", "yakınında yeme-içme (sezona göre)"],
  features: ["korunaklı koy hissi", "daha sakin deniz (hava durumuna bağlı)", "çakıllı sahil"],
  tags: ["yarımada", "sakinlik", "berrak su"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
İnceboğaz, Kaş’ta “daha korunaklı bir su” arayanların aklına gelen yerlerden. Yarımada tarafında olduğu için rüzgâr yönüne bağlı olarak deniz daha sakin hissedebilir. Çakıllı zemin ve berrak su, Kaş klasiği.

**Kimler için uygun**
Kalabalıktan biraz uzaklaşmak isteyenler, daha sakin bir koy hissi sevenler ve gününü yarımada tarafında geçirmek isteyenler için uygun. Çocuklu aileler için de (deniz sakin olduğunda) daha rahat bir deneyim olabilir; yine de derinleşme ve taşlı zemin her zaman hesaba katılmalı.

**Ne alınır-ne yapılır**
Burada plan basit: denize gir, uzun uzun yüz, kıyıda dinlen. Deniz uygun olduğunda şnorkel iyi bir eşlikçi. Ayrıca yarımada hattında kısa bir yürüyüşle manzara izlemek de keyifli oluyor.

**Pratik ipuçları**
Deniz ayakkabısı ve su gözlüğü faydalı. Rüzgâr yönü deniz deneyimini çok etkiler; gitmeden önce hava durumuna göz atmak iyi fikir. Sezonda şezlong/işletme düzeni değişebildiği için, yerinde güncel durumu kontrol etmek en doğrusu.

**Kısa özet**
Yarımada tarafında, koy hissi veren, sakinlik arayana iyi gelen bir Kaş plajı: İnceboğaz.`
},

// 15) Narr Plajı
{
  id: "narr-plaji",
  title: "Narr Plajı",
  description: "Merkeze yakın, iskele/rocky shore tarzı denize giriş sunan ve yeme-içmeyle birleşen beach-cafe konseptli nokta.",
  category: ["beaches", "cafe"],
  image: "../assets/1_places/narr-plaji-001.jpg",
  images: [
    "../assets/1_places/narr-plaji-002.jpg",
    "../assets/1_places/narr-plaji-003.jpg",
    "../assets/1_places/narr-plaji-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Andifli, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.204441, lng: 29.638981 }, // kesin koordinat bulamazsak Kaş merkez placeholder
  website: "",
  phone: "+90 538 477 50 49",
  duration: "",
  facilities: ["iskele/platfom giriş (duruma göre)", "yeme-içme", "şezlong/oturma alanı (sezona göre)"],
  features: ["merkeze yakın", "iskele üzerinden denize giriş", "gün boyu takılmalık"],
  tags: ["beach-cafe", "merkez", "iskele"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Narr tarafı daha “plaj gibi uzanayım”dan ziyade “deniz + oturma + yeme-içme” akışında. Kaş merkez çevresinde, kayalık/iskele karakteriyle denize girilen tarzda bir noktadan bahsediyoruz. Gün içinde hem yüzüp hem de masada vakit geçiren çok olur.

**Kimler için uygun**
Kum/şezlong plajı aramayan, denize girip çıkmayı iskeleden seven, arkadaş grubu veya çift olarak günü uzun tutmak isteyenler için uygun. Çocuklu ailelerde ise kayalık/iskele girişi herkes için rahat olmayabilir; daha güvenli giriş isteyenler alternatif bakabilir.

**Ne alınır-ne yapılır**
Günün planı net: denize gir, kurulan, bir şeyler ye/iç, tekrar denize… Kaş’ta “bir yere çöküp tüm günü orada geçirmek” isteyenler için bu format seviliyor. Deniz sakinse kısa şnorkel turu da eklenebilir.

**Pratik ipuçları**
Kayalık/merdivenli giriş olasılığı için deniz ayakkabısı iyi fikir. Sezonda harcama limiti veya işletme düzeni olabiliyor; gittiğinde güncel koşulları sorup ona göre rahat edersin. Akşamüstü saatleri daha keyifli bir ışık verebilir.

**Kısa özet**
Narr, Kaş’ta deniz keyfini “oturmalı-kalkmalı” bir beach-cafe düzeninde yaşamak isteyenlere uygun, merkez çevresi bir seçenek.`
},

// 16) Derya Beach Club
{
  id: "derya-beach-club",
  title: "Derya Beach Club",
  description: "Küçük Çakıl hattında, denize girme ve kokteyl/yeme-içmeyi birleştiren beach club konseptli işletme.",
  category: ["beaches", "bar", "food"],
  image: "../assets/1_places/derya-beach-club-001.jpg",
  images: [
    "../assets/1_places/derya-beach-club-002.jpg",
    "../assets/1_places/derya-beach-club-003.jpg",
    "../assets/1_places/derya-beach-club-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Küçük Çakıl Mevkii, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.204441, lng: 29.638981 }, // kesin koordinat yerine Kaş merkez placeholder
  website: "",
  phone: "+90 242 836 33 76",
  duration: "",
  facilities: ["yeme-içme", "gün içi oturma/şezlong (sezona göre)", "denize giriş alanı"],
  features: ["merkeze yakın", "beach club", "gün boyu kullanım"],
  tags: ["küçük çakıl", "kokteyl", "deniz günü"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Derya, Küçük Çakıl çevresinde “deniz + kokteyl + yemek” konseptini sevenlerin bildiği bir adres. Denize girip çıktıkça masaya dönülen, günün yavaş aktığı bir düzen var. Kaş’ta merkezden çok uzaklaşmadan beach club havası isteyenler burada takılıyor.

**Kimler için uygun**
Günü tek bir noktada geçirmek, yüzme molalarını yeme-içmeyle birleştirmek isteyenler için uygun. Sessiz-sakin “kendi havlumla minimal” tarzından ziyade, işletme düzeniyle günü yaşamak isteyenlere hitap ediyor.

**Ne alınır-ne yapılır**
Denize girme aralarıyla uzun oturmalar, soğuk içecekler ve gün içinde atıştırmalık/yemek planı. Denizin berrak olduğu günlerde kısa şnorkel bakışları da eklenebilir (giriş yapısına göre).

**Pratik ipuçları**
Sezonda yoğun olabiliyor; erken gitmek yer bulmayı kolaylaştırır. Harcama/şezlong uygulaması sezona göre değişebildiği için en net bilgi gittiğinde alınır. Çakıl/kayalık giriş ihtimaline karşı deniz ayakkabısı yine kurtarır.

**Kısa özet**
Derya, Kaş merkez çevresinde beach club gününü “yüzme + yeme-içme” şeklinde yaşamak isteyenler için pratik bir seçenek.`
},

// 17) Leymona Beach Club
{
  id: "leymona-beach-club",
  title: "Leymona Beach Club",
  description: "Kaş merkezde, deniz günü ile yeme-içmeyi birleştiren ve sakin bir atmosfer hedefleyen beach restoran/bar konsepti.",
  category: ["beaches", "food", "bar"],
  image: "../assets/1_places/leymona-beach-club-001.jpg",
  images: [
    "../assets/1_places/leymona-beach-club-002.jpg",
    "../assets/1_places/leymona-beach-club-003.jpg",
    "../assets/1_places/leymona-beach-club-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Andifli, Hastane Cd. çevresi, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.204441, lng: 29.638981 }, // kesin koordinat yerine Kaş merkez placeholder
  website: "https://leymonabeach.com/",
  phone: "",
  duration: "",
  facilities: ["yeme-içme", "denize giriş alanı", "oturma alanı", "wi-fi (işletmeye göre)"],
  features: ["merkeze yakın", "beach restoran", "gün boyu oturmalık"],
  tags: ["beach day", "merkez", "rahat ortam"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Leymona, Kaş’ta merkez civarında olup da “biraz daha sakin bir tonda beach günü” arayanların radarına giren tarzda. Denize girip çıktıkça masaya dönülen, müzik ve kalabalık dozunun (güne göre) daha kontrollü olabildiği bir beach-restoran hissi var.

**Kimler için uygun**
Günü uzun uzun oturarak geçirmek isteyenler, hem yüzüp hem de yemek/içecek eşliğinde vakit geçirmek isteyenler için uygun. “Sadece havlumu serer girer çıkarım” minimalizmi yerine, işletme düzeniyle günü yaşayanlara daha yakın.

**Ne alınır-ne yapılır**
Denize giriş + güneşlenme + yemek/içmek. Kaş’ta plan çoğu zaman bu kadar basit ve iyi. Eğer günün bir kısmında çalışmak/dinlenmek istiyorsan, bazı beach noktalarında masa/wifi gibi pratikler olabiliyor; en neti gittiğinde sorarak ilerlemek.

**Pratik ipuçları**
Sezonda yoğunluk artabilir; erken saatler daha rahat eder. Harcama limiti/rezervasyon gibi uygulamalar dönemsel değişebilir—gitmeden önce web/instagram üzerinden güncel bilgi bakmak faydalı olur. Deniz ayakkabısı yine konfor sağlar.

**Kısa özet**
Leymona, Kaş merkez çevresinde beach günü + yeme-içme kombinini, görece daha “rahat oturmalı” bir tonda yaşamak isteyenlere uygun bir seçenek.`
},

// 18) Asma6 Beach & Restaurant
{
  id: "asma6-beach-restaurant",
  title: "Asma6 Beach & Restaurant",
  description: "Kaş merkez sahil hattında, denize girme alanı ve gün boyu yeme-içmeyi bir arada sunan beach restoran/bar.",
  category: ["beaches", "food", "bar", "cafe"],
  image: "../assets/1_places/asma6-beach-restaurant-001.jpg",
  images: [
    "../assets/1_places/asma6-beach-restaurant-002.jpg",
    "../assets/1_places/asma6-beach-restaurant-003.jpg",
    "../assets/1_places/asma6-beach-restaurant-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Andifli, İskele Sk. No:22, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.204441, lng: 29.638981 }, // kesin koordinat yerine Kaş merkez placeholder
  website: "http://www.asma6.net/",
  phone: "+90 534 359 35 37",
  duration: "",
  facilities: ["yeme-içme", "oturma alanı", "denize giriş alanı", "wi-fi (işletmeye göre)"],
  features: ["sahil hattı", "beach bar", "gün boyu kullanım"],
  tags: ["iskele", "deniz+akşam", "merkez"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Asma6, Kaş’ta sahil hattında günün saatine göre şekil değiştiren yerlerden: gündüz beach gibi, akşamüstü daha sosyal, geceye doğru daha “oturup uzatayım” havası. Denize girme imkânı ve yeme-içme bir arada olunca, “bir yer seçeyim ve uzun takılayım” planına iyi oturuyor.

**Kimler için uygun**
Günü tek mekânda geçirmek isteyenler, yüzme molalarını yemek/içecekle birleştirmeyi sevenler için uygun. Daha sakin ve izole bir koy arayanlar yerine, merkez dinamizmini sevenler daha mutlu olur.

**Ne alınır-ne yapılır**
Denize gir-çık, hafif bir şeyler ye, serin içecek al, güneş düşünce manzaraya karşı otur… Kaş’ta “günlük ritim” tam bu şekilde akıyor. Deniz girişi kayalık/merdivenli olabileceği için, planı buna göre düşünmek iyi.

**Pratik ipuçları**
Sezonda yer bulmak zorlaşabilir; erken saatler avantaj. Harcama/rezervasyon gibi detaylar dönemsel değişebilir; gitmeden önce güncel kanallardan bakmak iyi olur. Deniz ayakkabısı konfor, küçük bir çanta da “gün boyu” planı için şart.

**Kısa özet**
Merkezde beach-restoran düzeni: deniz + yeme-içme + uzun oturma. Asma6 bu kombinasyonu sevenlere iyi gider.`
},

// 19) Nuri’s Beach (Limanağzı)
{
  id: "nuris-beach",
  title: "Nuri’s Beach (Limanağzı)",
  description: "Limanağzı’nda, karayolu olmayan bölgede tekneyle ulaşılan, deniz günü ve konaklamayı birleştirebilen sahil işletmesi.",
  category: ["beaches", "food", "hotels"],
  image: "../assets/1_places/nuris-beach-001.jpg",
  images: [
    "../assets/1_places/nuris-beach-002.jpg",
    "../assets/1_places/nuris-beach-003.jpg",
    "../assets/1_places/nuris-beach-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Limanağzı Mevkii, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.172741, lng: 29.649598 },
  website: "https://www.nurisbeachbungalow.com/",
  phone: "+90 538 899 32 72",
  duration: "",
  facilities: ["tekne ile ulaşım", "yeme-içme", "şezlong/oturma alanı (sezona göre)", "konaklama (bungalow)"],
  features: ["Limanağzı", "arabası olmayan koy", "günlük deniz kaçamağı"],
  tags: ["water taxi", "doğa", "tüm gün"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Nuri’s Beach, Limanağzı’nın “arabadan uzak, tekneyle gidilen” dünyasında yer alıyor. Bu tarafın ortak hissi: daha yavaş, daha doğaya yakın ve şehir gürültüsünden kopuk. Deniz genelde çok berrak; gün boyu aynı koyda kalınca gerçekten “kaçmış” gibi oluyorsun.

**Kimler için uygun**
Merkezden kısa bir tekne yolculuğuyla farklı bir gün yaşamak isteyenler için ideal. Kalabalık şehir plajı yerine koy deneyimi arayanlar, doğa severler ve “tüm gün orada takılayım” diyenler daha çok sever. Karayolu erişimi olmadığı için, hareket kabiliyeti kısıtlı olanlar planı daha dikkatli yapmalı.

**Ne alınır-ne yapılır**
Gün burada yüzme, güneşlenme ve uzun uzun oturma üzerine kurulu. Denizin berrak olduğu saatlerde şnorkel güzel eşlik eder. Limanağzı’nda “bir yer seçip bütün günü denize göre ayarlamak” en doğru yaklaşım.

**Pratik ipuçları**
Ulaşım genelde Kaş’tan kalkan tekne/su taksiyle olur; saatler sezona göre değişebilir. Nakit/ödeme yöntemlerini ve dönüş saatini baştan netleştirmek rahat ettirir. Akşamüstü rüzgârı artarsa, dönüşü buna göre planlamak iyi olur.

**Kısa özet**
Limanağzı’nda tekneyle ulaşılan, doğa hissi yüksek bir deniz günü: Nuri’s Beach, “Kaş’ta bir günlüğüne kaçış” arayanlara çok uygun.`
},

// 20) Bilal’in Yeri (Limanağzı)
{
  id: "bilalin-yeri",
  title: "Bilal’in Yeri (Limanağzı)",
  description: "Limanağzı’nda tekneyle ulaşılan, denize girme alanı ve yeme-içmeyi birleştiren klasik duraklardan biri.",
  category: ["beaches", "food", "cafe"],
  image: "../assets/1_places/bilalin-yeri-001.jpg",
  images: [
    "../assets/1_places/bilalin-yeri-002.jpg",
    "../assets/1_places/bilalin-yeri-003.jpg",
    "../assets/1_places/bilalin-yeri-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Limanağzı Mevkii, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.204441, lng: 29.638981 }, // kesin koordinat bulamazsak Kaş merkez placeholder
  website: "",
  phone: "+90 545 881 86 86",
  duration: "",
  facilities: ["tekne ile ulaşım", "yeme-içme", "oturma alanı", "denize giriş alanı"],
  features: ["Limanağzı", "gün boyu deniz", "doğaya yakın"],
  tags: ["water taxi", "limanağzı klasiği", "tüm gün"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Bilal’in Yeri, Limanağzı’nın klasik “denize gir-otur-yemek ye” düzenini yaşatan duraklarından. Bu bölgede arabasızlık hissi atmosferi otomatik güzelleştiriyor: deniz sesi, daha doğal bir koy düzeni ve şehirden kopuş.

**Kimler için uygun**
Günü Limanağzı’nda geçirmek isteyenler, denize girmeyi bir işletme düzeniyle (oturma/yeme-içme) birleştirmek isteyenler için uygun. “Sadece yüzüp döneyim” diyenler de uğrayabilir ama asıl keyif, günü yavaşlatınca çıkıyor.

**Ne alınır-ne yapılır**
Denize girip çıkmak, güneşlenmek, sonra gölgede bir şeyler yiyip içmek. Limanağzı’nda en güzel plan bu. Deniz sakin olduğunda şnorkel de çok yakışır; kıyı çizgisi genelde görsel olarak tatmin edici oluyor.

**Pratik ipuçları**
Ulaşım çoğunlukla Kaş’tan kalkan tekne/su taksiyle; dönüş saatini baştan netleştir. Sezonda yoğunluk olabilir—erken saatler daha rahat. Kayalık/merdivenli giriş ihtimaline karşı deniz ayakkabısı yine iyi fikir.

**Kısa özet**
Bilal’in Yeri, Limanağzı’nda tekneyle gidilen bir deniz gününü, yeme-içmeyle birlikte “tüm güne” yaymak isteyenler için uygun bir durak.`
},





// 3. onluk (21–30 / 72)

// 21) La Moda Beach (Limanağzı)
{
  id: "la-moda-beach",
  title: "La Moda Beach (Limanağzı)",
  description: "Limanağzı’nda tekneyle ulaşılan, denize giriş platformu ve yeme-içmeyi birleştiren popüler beach noktası.",
  category: ["beaches", "food", "bar"],
  image: "../assets/1_places/la-moda-beach-001.jpg",
  images: [
    "../assets/1_places/la-moda-beach-002.jpg",
    "../assets/1_places/la-moda-beach-003.jpg",
    "../assets/1_places/la-moda-beach-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Limanağzı, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.1727, lng: 29.6496 }, // Limanağzı genel nokta
  website: "",
  phone: "",
  duration: "Tüm gün",
  facilities: ["tekne ile ulaşım", "şezlong/oturma alanı", "yeme-içme"],
  features: ["berrak deniz", "platform giriş", "koy atmosferi"],
  tags: ["limanağzı", "water taxi", "günlük deniz"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Limanağzı’nın klasik “arabadan kopuk” hissini veren La Moda, deniz sesi ve sade beach düzeniyle rahat bir gün vadediyor. Platformdan denize girişle berrak sulara ulaşılıyor.

**Kimler için uygun**
Günü tek bir koyda geçirmek isteyenler, deniz+yeme-içme kombinini sevenler için uygun. Küçük çocuklar için platform girişini göz önünde bulundurmak gerekir.

**Ne alınır-ne yapılır**
Uzun yüzme seansları, şnorkel (deniz sakinse) ve gün boyu masada dinlenme. Limanağzı’nda plan genelde bu.

**Pratik ipuçları**
Ulaşım su taksiyle; dönüş saatini baştan netleştir. Deniz ayakkabısı platform/kayalık girişlerde konfor sağlar.

**Kısa özet**
Limanağzı’nda sakin bir deniz günü arayanlara uygun, pratik bir beach durağı.`
},

// 22) Hakiliki Beach Club
{
  id: "hakiliki-beach-club",
  title: "Hakiliki Beach Club",
  description: "Kaş merkez çevresinde, denize giriş ve yeme-içmeyi bir araya getiren beach club.",
  category: ["beaches", "food", "bar"],
  image: "../assets/1_places/hakiliki-beach-club-001.jpg",
  images: [
    "../assets/1_places/hakiliki-beach-club-002.jpg",
    "../assets/1_places/hakiliki-beach-club-003.jpg",
    "../assets/1_places/hakiliki-beach-club-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Andifli, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // Kaş merkez placeholder
  website: "",
  phone: "",
  duration: "Yarım/Tüm gün",
  facilities: ["denize giriş alanı", "oturma alanı", "yeme-içme"],
  features: ["merkeze yakın", "beach club", "gün boyu kullanım"],
  tags: ["merkez", "beach day", "oturmalı"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Merkez çevresinde beach club ritmi: yüz, otur, ye-iç. Gün içinde temposu artıp azalabiliyor.

**Kimler için uygun**
Merkezden kopmadan beach günü isteyenler.

**Ne alınır-ne yapılır**
Deniz molaları arasında uzun oturmalar.

**Pratik ipuçları**
Sezonda yoğunluk ve uygulamalar değişebilir; gittiğinde sor.

**Kısa özet**
Merkez yakınında pratik bir beach club seçeneği.`
},

// 23) Lures Hotel Beach Club
{
  id: "lures-hotel-beach-club",
  title: "Lures Hotel Beach Club",
  description: "Çukurbağ Yarımadası’nda, denize sıfır konumda, otel misafirlerine ve dışarıdan gelenlere açık beach alanı.",
  category: ["beaches", "hotels", "food"],
  image: "../assets/1_places/lures-hotel-beach-club-001.jpg",
  images: [
    "../assets/1_places/lures-hotel-beach-club-002.jpg",
    "../assets/1_places/lures-hotel-beach-club-003.jpg",
    "../assets/1_places/lures-hotel-beach-club-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Çukurbağ Yarımadası, Kaş/Antalya",
  distance: "Kaş merkezden ~4 km",
  coordinates: { lat: 36.1964, lng: 29.5989 },
  website: "https://lureshotel.com",
  phone: "",
  duration: "Yarım/Tüm gün",
  facilities: ["platform plaj", "şezlong", "restoran", "bar"],
  features: ["yarımada", "daha sakin ortam", "temiz deniz"],
  tags: ["yarımada", "otel beach", "konfor"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Yarımada tarafında daha sakin ve düzenli bir beach hissi. Platformdan berrak denize giriş.

**Kimler için uygun**
Konfor arayanlar ve kalabalıktan kaçmak isteyenler.

**Ne alınır-ne yapılır**
Yüzme, güneşlenme, restoranda mola.

**Pratik ipuçları**
Dışarıdan kabul ve uygulamalar sezona göre değişebilir.

**Kısa özet**
Yarımadada konforlu bir beach günü.`
},

// 24) Mavi Kıyı Suites
{
  id: "mavi-kiyi-suites",
  title: "Mavi Kıyı Suites",
  description: "Denize yakın konumu ve modern süitleriyle bilinen butik konaklama tesisi.",
  category: ["hotels"],
  image: "../assets/1_places/mavi-kiyi-suites-001.jpg",
  images: [
    "../assets/1_places/mavi-kiyi-suites-002.jpg",
    "../assets/1_places/mavi-kiyi-suites-003.jpg",
    "../assets/1_places/mavi-kiyi-suites-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // placeholder
  website: "",
  phone: "",
  duration: "Konaklama",
  facilities: ["denize yakın", "suit odalar"],
  features: ["butik", "modern"],
  tags: ["konaklama", "suit"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Modern ve sade; denize yakın olmanın avantajı öne çıkıyor.

**Kimler için uygun**
Rahat ve merkezi konaklama arayanlar.

**Ne alınır-ne yapılır**
Kaş merkez ve plajlara kolay erişim.

**Pratik ipuçları**
Oda tipleri ve sezon fiyatları değişken.

**Kısa özet**
Denize yakın, modern bir butik konaklama.`
},

// 25) Lures Hotel & Beach Club
{
  id: "lures-hotel",
  title: "Lures Hotel & Beach Club",
  description: "Çukurbağ Yarımadası’nda, otel konaklaması ile beach club deneyimini birleştiren tesis.",
  category: ["hotels", "beaches"],
  image: "../assets/1_places/lures-hotel-001.jpg",
  images: [
    "../assets/1_places/lures-hotel-002.jpg",
    "../assets/1_places/lures-hotel-003.jpg",
    "../assets/1_places/lures-hotel-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Çukurbağ Yarımadası, Kaş/Antalya",
  distance: "Kaş merkezden ~4 km",
  coordinates: { lat: 36.1964, lng: 29.5989 },
  website: "https://lureshotel.com",
  phone: "",
  duration: "Konaklama",
  facilities: ["özel plaj", "restoran", "bar"],
  features: ["yarımada", "sessiz"],
  tags: ["otel", "beach club"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Yarımada sakinliği ve düzenli tesis hissi.

**Kimler için uygun**
Sessiz, konforlu tatil isteyenler.

**Ne alınır-ne yapılır**
Plaj, havuz ve restoran kullanımı.

**Pratik ipuçları**
Rezervasyonları erken yapmak avantajlı.

**Kısa özet**
Konforlu yarımada oteli.`
},

// 26) Luvi Kaş Otel
{
  id: "luvi-kas-otel",
  title: "Luvi Kaş Otel",
  description: "Kaş merkezde, manzaralı ve butik yapısıyla öne çıkan otel.",
  category: ["hotels"],
  image: "../assets/1_places/luvi-kas-otel-001.jpg",
  images: [
    "../assets/1_places/luvi-kas-otel-002.jpg",
    "../assets/1_places/luvi-kas-otel-003.jpg",
    "../assets/1_places/luvi-kas-otel-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Andifli, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 },
  website: "",
  phone: "",
  duration: "Konaklama",
  facilities: ["teras", "manzara"],
  features: ["butik", "merkez"],
  tags: ["otel", "manzara"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Merkezde, manzaraya açılan sakin bir butik otel.

**Kimler için uygun**
Merkezde kalmak isteyenler.

**Ne alınır-ne yapılır**
Kaş çarşı ve plajlara yürüyüş.

**Pratik ipuçları**
Yazın erken rezervasyon önerilir.

**Kısa özet**
Merkezde butik ve manzaralı.`
},

// 27) Payam Hotel
{
  id: "payam-hotel",
  title: "Payam Hotel",
  description: "Kaş merkezde, küçük ölçekli ve samimi bir butik otel.",
  category: ["hotels"],
  image: "../assets/1_places/payam-hotel-001.jpg",
  images: [
    "../assets/1_places/payam-hotel-002.jpg",
    "../assets/1_places/payam-hotel-003.jpg",
    "../assets/1_places/payam-hotel-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Andifli, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 },
  website: "",
  phone: "",
  duration: "Konaklama",
  facilities: ["bahçe/teras"],
  features: ["butik", "samimi"],
  tags: ["otel", "merkez"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Samimi ve küçük ölçekli.

**Kimler için uygun**
Sade konaklama arayanlar.

**Ne alınır-ne yapılır**
Merkezden kolay erişim.

**Pratik ipuçları**
Sezonluk doluluk yüksek olabilir.

**Kısa özet**
Merkezde sade butik otel.`
},

// 28) Kaş Marin Hotel
{
  id: "kas-marin-hotel",
  title: "Kaş Marin Hotel",
  description: "Deniz manzaralı odaları ve merkezi konumuyla bilinen otel.",
  category: ["hotels"],
  image: "../assets/1_places/kas-marin-hotel-001.jpg",
  images: [
    "../assets/1_places/kas-marin-hotel-002.jpg",
    "../assets/1_places/kas-marin-hotel-003.jpg",
    "../assets/1_places/kas-marin-hotel-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 },
  website: "",
  phone: "",
  duration: "Konaklama",
  facilities: ["teras", "manzara"],
  features: ["deniz manzarası"],
  tags: ["otel"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Manzara odaklı, sakin.

**Kimler için uygun**
Manzara sevenler.

**Ne alınır-ne yapılır**
Merkez ve sahile erişim.

**Pratik ipuçları**
Manzaralı oda tercih edilebilir.

**Kısa özet**
Deniz manzaralı konaklama.`
},

// 29) Hideaway Hotel
{
  id: "hideaway-hotel",
  title: "Hideaway Hotel",
  description: "Merkezde, yetişkinlere yönelik, sessiz ve butik bir otel.",
  category: ["hotels"],
  image: "../assets/1_places/hideaway-hotel-001.jpg",
  images: [
    "../assets/1_places/hideaway-hotel-002.jpg",
    "../assets/1_places/hideaway-hotel-003.jpg",
    "../assets/1_places/hideaway-hotel-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Andifli, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 },
  website: "",
  phone: "",
  duration: "Konaklama",
  facilities: ["havuz", "teras"],
  features: ["adult friendly", "sessiz"],
  tags: ["butik", "yetişkin"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Sessiz ve yetişkin odaklı.

**Kimler için uygun**
Huzur arayan çiftler.

**Ne alınır-ne yapılır**
Merkezde sakin konaklama.

**Pratik ipuçları**
Yüksek sezonda erken rezervasyon.

**Kısa özet**
Merkezde huzurlu butik otel.`
},

// 30) Hotel Sonne
{
  id: "hotel-sonne",
  title: "Hotel Sonne",
  description: "Merkezde, teras manzarası ve klasik Kaş oteli atmosferiyle bilinen tesis.",
  category: ["hotels"],
  image: "../assets/1_places/hotel-sonne-001.jpg",
  images: [
    "../assets/1_places/hotel-sonne-002.jpg",
    "../assets/1_places/hotel-sonne-003.jpg",
    "../assets/1_places/hotel-sonne-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez, Andifli/Kaş",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 },
  website: "",
  phone: "",
  duration: "Konaklama",
  facilities: ["teras", "manzara"],
  features: ["merkez", "klasik"],
  tags: ["otel"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Klasik Kaş oteli hissi.

**Kimler için uygun**
Merkez ve manzara isteyenler.

**Ne alınır-ne yapılır**
Çarşı ve sahil yürüyüşleri.

**Pratik ipuçları**
Manzaralı oda tercih edilebilir.

**Kısa özet**
Merkezde klasik bir Kaş oteli.`
},

// 4. onluk (31–40 / 72)

// 31) Sardunya Otel
{
  id: "sardunya-otel",
  title: "Sardunya Otel",
  description: "Kaş merkezde denize çok yakın konumda, bahçe/terası ve deniz erişimiyle öne çıkan otel.",
  category: ["hotels"],
  image: "../assets/1_places/sardunya-otel-001.jpg",
  images: [
    "../assets/1_places/sardunya-otel-002.jpg",
    "../assets/1_places/sardunya-otel-003.jpg",
    "../assets/1_places/sardunya-otel-004.jpg"
  ],
  rating: 9.6, // Expedia puanı (10 üzerinden)
  price: "₺₺₺",
  selected: false,
  location: "Andifli, Hastane Cd., 07580 Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // emin olmadığım için Kaş merkez placeholder
  website: "https://sardunyaotel.com.tr",
  phone: "+90 242 836 30 80",
  duration: "Konaklama",
  facilities: ["kahvaltı", "Wi-Fi", "denize yakın", "teras/bahçe"],
  features: ["merkeze yürüme", "deniz manzarası (bazı odalar)", "sakin otel hissi"],
  tags: ["kas-merkez", "butik-otel", "denize-yakin"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Sardunya Otel, Kaş merkezde “her yere yürüyebileyim” diyenlerin sevdiği tipte bir yer. Gün içinde çarşı kalabalığına karışıp akşam daha sakin bir otele dönme hissi veriyor. Deniz tarafı/teras gibi alanlar günün ritmini yumuşatıyor.

**Kimler için uygun**
Merkezde kalıp arabayı unutmak isteyenler için iyi bir aday. Gün içinde tekne turu, akşam çarşı yürüyüşü gibi plan yapan çiftler ve arkadaş grupları uyum sağlar. Sessizlik arayanlar için de genel olarak uygun; yine de sezonda Kaş merkez hareketli olabilir.

**Ne alınır-ne yapılır**
Otel tarafında “çok aktivite” yerine Kaş’ı yaşama kolaylığı öne çıkıyor: sabah kahvaltı, gündüz deniz/tekne, akşamüstü kısa dinlenme, sonra çarşı. Deniz kenarında vakit geçirmek isteyenler için en pratik senaryo bu.

**Pratik ipuçları**
Merkezde otopark her zaman kolay değil; konaklama öncesi park/valet durumunu netleştirmek iyi olur. Oda seçerken manzara ve merdiven/konum detaylarını sor.

**Kısa özet**
Merkeze yakın, Kaş’ı yürüyerek yaşamak isteyenlere uygun, denize yakın bir otel.`
},

// 32) HillCity Hotel
{
  id: "hillcity-hotel",
  title: "HillCity Hotel",
  description: "Çukurbağ Yarımadası tarafında, manzara ve havuz odağında butik otel.",
  category: ["hotels"],
  image: "../assets/1_places/hillcity-hotel-001.jpg",
  images: [
    "../assets/1_places/hillcity-hotel-002.jpg",
    "../assets/1_places/hillcity-hotel-003.jpg",
    "../assets/1_places/hillcity-hotel-004.jpg"
  ],
  rating: 8.8, // Agoda genel puan (yaklaşık)
  price: "₺₺₺",
  selected: false,
  location: "Çukurbağ Yarımadası, Kaş/Antalya",
  distance: "Kaş merkezden ~5 km",
  coordinates: { lat: 36.1964, lng: 29.5989 }, // yarımada genel nokta
  website: "https://www.hillcityhotel.com",
  phone: "",
  duration: "Konaklama",
  facilities: ["havuz", "Wi-Fi", "kahvaltı", "otopark"],
  features: ["panoramik manzara", "yarımada sakinliği", "butik konsept"],
  tags: ["cukurbağ-yarimadasi", "manzara", "butik-otel"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Yarımada tarafındaki otellerin klasik avantajı burada da var: daha sakin, daha geniş manzara. Gün içinde Kaş merkezin temposundan uzak, daha “otelde de vakit geçireyim” hissi.

**Kimler için uygun**
Manzaraya önem verenler, günün bir kısmını havuz/teras düzeninde geçirmek isteyenler için uygun. Merkezde her yere yürüyeyim diyenler içinse araç/transfer ihtiyacı doğabilir.

**Ne alınır-ne yapılır**
Sabah kahvaltı sonrası havuz-manzara molası, gün ortasında plaj/tekne, akşam tekrar otelde dinlenme. Kaş’ta yorulmadan tatil kurgusu isteyenler bunu seviyor.

**Pratik ipuçları**
Yarımada rotalarında taksi/araç planını baştan yapmak rahat ettirir. Oda tipleri (manzara/teras) deneyimi ciddi etkiler; rezervasyon öncesi sor.

**Kısa özet**
Yarımadada manzara ve sakinlik isteyenlere uygun butik otel.`
},

// 33) Sea View Otel
{
  id: "sea-view-otel",
  title: "Sea View Otel",
  description: "Kaş sahil hattına yakın, özel güneşlenme terası/iskeleyi vurgulayan deniz kıyısı oteli.",
  category: ["hotels"],
  image: "../assets/1_places/sea-view-otel-001.jpg",
  images: [
    "../assets/1_places/sea-view-otel-002.jpg",
    "../assets/1_places/sea-view-otel-003.jpg",
    "../assets/1_places/sea-view-otel-004.jpg"
  ],
  rating: 8.8, // Agoda puanı
  price: "₺₺",
  selected: false,
  location: "Kaş sahil hattı, Kaş/Antalya (merkeze ~300 m)",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // Kaş merkez placeholder
  website: "https://www.seaviewotel.com",
  phone: "+90 242 836 10 14",
  duration: "Konaklama",
  facilities: ["özel güneşlenme terası/iskelesi", "Wi-Fi", "kahvaltı", "restoran/bar"],
  features: ["deniz manzarası", "merkeze yakın", "denize kolay erişim"],
  tags: ["sahil", "deniz-erisim", "kas-merkez"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Adından beklendiği gibi deniz odaklı bir konum: sabah manzarayla uyanıp gün içinde denize in-çık yapmak kolay. Merkeze yakın olduğundan dışarı çıkma planı da pratik.

**Kimler için uygun**
Denize yakın olayım, gün içinde sürekli denize girip çıkayım diyenlere uygun. Akşam yürüyerek çarşıya karışmak isteyenler de rahat eder.

**Ne alınır-ne yapılır**
En iyi senaryo basit: yüzme molaları, kısa yürüyüşler, akşamüstü gün batımı manzarası. Tekne turu + otelde dinlenme kombinine iyi oturur.

**Pratik ipuçları**
Deniz erişimi iskele/teras düzeninde olabiliyor; denize giriş tipini (merdiven/platform) sevmeyenler önceden kontrol etmeli. Sezonda oda tipleri ve manzara farkı belirgin.

**Kısa özet**
Denize yakın ve merkeze yakın; “deniz günü + çarşı akşamı” planı için pratik.`
},

// 34) Novva Hotel Kaş (Novva Hotels Kaş)
{
  id: "novva-hotel-kas",
  title: "Novva Hotel Kaş (Novva Hotels Kaş)",
  description: "Çukurbağ Yarımadası’nda, süit/özel havuz gibi seçenekleriyle öne çıkan modern konaklama.",
  category: ["hotels"],
  image: "../assets/1_places/novva-hotel-kas-001.jpg",
  images: [
    "../assets/1_places/novva-hotel-kas-002.jpg",
    "../assets/1_places/novva-hotel-kas-003.jpg",
    "../assets/1_places/novva-hotel-kas-004.jpg"
  ],
  rating: 8.0, // Booking yorum sayfasında görünen genel skor
  price: "₺₺₺",
  selected: false,
  location: "Andifli, Çukurbağ Yarımadası, Demokrasi Cd. No:30, 07580 Kaş/Antalya",
  distance: "Kaş merkezden ~4 km",
  coordinates: { lat: 36.1964, lng: 29.5989 }, // yarımada genel nokta
  website: "https://www.novvakas.com/novva-kas",
  phone: "+90 242 505 39 25",
  duration: "Konaklama",
  facilities: ["Wi-Fi", "otopark", "teras/bahçe", "bazı odalarda özel havuz"],
  features: ["yarımada", "modern süit konsepti", "daha izole tatil hissi"],
  tags: ["novva", "suite", "private-pool"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Novva tarafı daha “site/kompleks” hissi verebilen, modern tasarımlı bir konaklama çizgisinde. Yarımada konumu sayesinde merkezden biraz uzaklaşıp daha izole bir tempo yakalanıyor.

**Kimler için uygun**
Klasik pansiyon/merkez oteli yerine daha modern, süit ağırlıklı bir şey arayanlara uygun. “Odamda/terasımda da vakit geçireyim” diyenler daha çok keyif alır.

**Ne alınır-ne yapılır**
Yarımada-merkez dengesini kurup günü bölmek iyi çalışıyor: sabah otelde, öğlen deniz/tekne, akşam merkez. Oda konseptine göre “otelde dinlenme” daha büyük yer tutabilir.

**Pratik ipuçları**
Yarımada tarafında araç/transfer planı önem kazanır. Oda tipleri (havuz, manzara, mutfak vb.) çok değişebiliyor; rezervasyon öncesi netleştir.

**Kısa özet**
Modern süit konsepti ve yarımada sakinliği arayanlar için güçlü bir seçenek.`
},

// 35) Rhapsody Hotel Kaş
{
  id: "rhapsody-hotel-kas",
  title: "Rhapsody Hotel Kaş",
  description: "Kaş merkez çevresinde, Küçük Çakıl’a yakın konumuyla öne çıkan butik otel.",
  category: ["hotels"],
  image: "../assets/1_places/rhapsody-hotel-kas-001.jpg",
  images: [
    "../assets/1_places/rhapsody-hotel-kas-002.jpg",
    "../assets/1_places/rhapsody-hotel-kas-003.jpg",
    "../assets/1_places/rhapsody-hotel-kas-004.jpg"
  ],
  rating: 8.7, // HotelsCombined (10 üzerinden)
  price: "₺₺",
  selected: false,
  location: "Hükümet Cd. civarı / Küçük Çakıl mevkii, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // Kaş merkez placeholder
  website: "https://kas.rhapsodyhotels.com",
  phone: "+90 242 836 12 00",
  duration: "Konaklama",
  facilities: ["kahvaltı", "Wi-Fi", "merkeze yakınlık"],
  features: ["plajlara yakın", "yürünebilir lokasyon", "butik"],
  tags: ["kucuk-cakil", "kas-merkez", "butik-otel"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Merkeze yakın konumlarda sevilen “Kaş oteli” formatı: sabah kısa bir kahvaltı, gün boyu dışarıda deniz/tekne, akşam yürüyerek yemek.

**Kimler için uygun**
Merkezde kalayım, plaja da yakın olayım diyenler için uygun. Gün içinde sürekli dışarıda olan ama akşam otele dönünce rahat etmek isteyenler sever.

**Ne alınır-ne yapılır**
Küçük Çakıl-merkez hattında yürüyüş, gün batımında sahil tarafında oturma, gündüz tekne turu. Kaş’ın klasik akışı.

**Pratik ipuçları**
Merkezde otopark değişken olabilir; araçla geliyorsan önceden sor. Oda konumu/manzara beklentini netleştir.

**Kısa özet**
Merkez-plaj dengesini isteyenler için pratik, butik bir konaklama.`
},

// 36) Hotel Marsala
{
  id: "hotel-marsala",
  title: "Hotel Marsala",
  description: "Çukurbağ Yarımadası’nda, deniz terası ve sakin ortamıyla bilinen butik otel.",
  category: ["hotels"],
  image: "../assets/1_places/hotel-marsala-001.jpg",
  images: [
    "../assets/1_places/hotel-marsala-002.jpg",
    "../assets/1_places/hotel-marsala-003.jpg",
    "../assets/1_places/hotel-marsala-004.jpg"
  ],
  rating: 8.6, // Booking genel skor
  price: "₺₺₺",
  selected: false,
  location: "Çukurbağ Yarımadası, Demokrasi Cd., Melih Temizyürek Sk. No:12, Kaş/Antalya",
  distance: "Kaş merkezden ~4–5 km",
  coordinates: { lat: 36.1964, lng: 29.5989 }, // yarımada genel nokta
  website: "https://www.marsalahotelkas.com",
  phone: "+90 242 836 14 45",
  duration: "Konaklama",
  facilities: ["kahvaltı", "Wi-Fi", "deniz terası", "havuz (tesis bazlı)"],
  features: ["yarımada", "sakin", "deniz odaklı"],
  tags: ["marsala", "cukurbağ-yarimadasi", "butik-otel"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Marsala daha sakin bir yarımada temposu sunuyor. Merkez karmaşasını istemeyenlerin sevdiği türden: gün içinde deniz, akşam daha sessiz bir dönüş.

**Kimler için uygun**
Huzurlu bir konaklama arayan çiftler ve “otelde de dinleneyim” diyenler için uygun. Merkezde sürekli yürüyerek gezmek isteyenler için araç ihtiyacı doğabilir.

**Ne alınır-ne yapılır**
Deniz terası/deniz kıyısı düzeni olan otellerde gün daha yavaş akar: sabah kahvaltı, gün içinde deniz molaları, akşam erken dinlenme.

**Pratik ipuçları**
Yarımada rotasında taksi/araç planı rahat ettirir. Oda tiplerinde teras/özel havuz gibi detaylar olabiliyor; beklentini rezervasyonda netleştir.

**Kısa özet**
Yarımadada sakin, deniz odaklı bir butik otel.`
},

// 37) Aquarius Hotel (Cappari Hotels Aquarius)
{
  id: "aquarius-hotel",
  title: "Aquarius Hotel (Cappari Hotels Aquarius)",
  description: "Çukurbağ Yarımadası’nda, denize sıfır konum ve kendi plaj alanını vurgulayan otel.",
  category: ["hotels", "beaches"],
  image: "../assets/1_places/aquarius-hotel-001.jpg",
  images: [
    "../assets/1_places/aquarius-hotel-002.jpg",
    "../assets/1_places/aquarius-hotel-003.jpg",
    "../assets/1_places/aquarius-hotel-004.jpg"
  ],
  rating: 4.0, // Tripadvisor (5 üzerinden) sayfa özetinde
  price: "₺₺₺",
  selected: false,
  location: "Doğan Kaşaroğlu Sk. No:6, Çukurbağ Yarımadası, 07580 Kaş/Antalya",
  distance: "Kaş merkezden ~4–5 km",
  coordinates: { lat: 36.1964, lng: 29.5989 }, // yarımada genel nokta
  website: "https://aquariusotel.com",
  phone: "+90 242 836 18 96",
  duration: "Konaklama",
  facilities: ["özel plaj", "restoran", "bar", "Wi-Fi"],
  features: ["denize sıfır", "yarımada", "Meis manzarası (bazı noktalar)"],
  tags: ["cappari", "beach-hotel", "cukurbağ"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Denize sıfır otel hissi: günün büyük kısmı suya yakın geçiyor. Yarımada konumu merkezin temposunu biraz geride bırakıyor.

**Kimler için uygun**
“Otelden denize ineyim” rahatlığını isteyenler ve konforu öncelik yapanlar için uygun. Merkeze sürekli yürüyerek gidip gelmek isteyenler için mesafe yorucu olabilir.

**Ne alınır-ne yapılır**
Deniz molaları, gün boyu şezlong/teras düzeni, akşamüstü manzara keyfi. Kaş’ta tekne turu planlıyorsan dönüşte otelde dinlenme iyi oturur.

**Pratik ipuçları**
Denize giriş çoğu zaman platform/merdiven düzeninde olabilir; deniz ayakkabısı konfor sağlar. Ulaşım için araç/taksi planını önceden düşün.

**Kısa özet**
Yarımadada denize sıfır, plaj alanı olan, konfor odaklı bir otel.`
},

// 38) Nur Beach Hotel
{
  id: "nur-beach-hotel",
  title: "Nur Beach Hotel",
  description: "Kaş merkezde Küçük Çakıl’a yakın, deniz kenarı restoran/barı ve manzarasıyla bilinen otel.",
  category: ["hotels", "beaches", "food", "bar"],
  image: "../assets/1_places/nur-beach-hotel-001.jpg",
  images: [
    "../assets/1_places/nur-beach-hotel-002.jpg",
    "../assets/1_places/nur-beach-hotel-003.jpg",
    "../assets/1_places/nur-beach-hotel-004.jpg"
  ],
  rating: 4.0, // Tripadvisor (5 üzerinden)
  price: "₺₺₺",
  selected: false,
  location: "Andifli, Hükümet Cd. No:49, 07580 Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // Kaş merkez placeholder
  website: "https://www.nurbeachhotel.com",
  phone: "+90 242 836 18 28",
  duration: "Konaklama",
  facilities: ["kahvaltı", "Wi-Fi", "deniz kıyısı alan", "restoran/bar"],
  features: ["merkez", "denize yakın", "manzara"],
  tags: ["kucuk-cakil", "sahil", "hotel+beach"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Nur Beach Hotel’in olayı konum: denize yakın, merkeze yakın ve gün içinde “çok plan yapmadan” akıp gidebilen bir düzen. Deniz kenarı alanı da otelin ritmini belirliyor.

**Kimler için uygun**
Merkezde kalıp hem plaj hem akşam yemeğini aynı hatta çözmek isteyenler için uygun. Gün içinde tekne turu yapıp akşam yürüyerek merkeze karışmak isteyenler de rahat eder.

**Ne alınır-ne yapılır**
Sabah kısa kahvaltı, gün içinde deniz/tekne, akşamüstü deniz kenarında oturma. Burası “Kaş klasiği” akışına çok uyuyor.

**Pratik ipuçları**
Merkezde otopark ve trafik sezonda değişken olabilir. Deniz alanı ve masa düzeni yoğun saatlerde dolabilir; özellikle akşam için erken saat iyi fikir.

**Kısa özet**
Merkezde, denize yakın; hem konaklama hem deniz kenarı vakti isteyenler için pratik.`
},

// 39) La Kumsal Hotel
{
  id: "la-kumsal-hotel",
  title: "La Kumsal Hotel",
  description: "Çukurbağ Yarımadası’nda, manzara ve sakinlik odaklı butik otel.",
  category: ["hotels"],
  image: "../assets/1_places/la-kumsal-hotel-001.jpg",
  images: [
    "../assets/1_places/la-kumsal-hotel-002.jpg",
    "../assets/1_places/la-kumsal-hotel-003.jpg",
    "../assets/1_places/la-kumsal-hotel-004.jpg"
  ],
  rating: 9.3, // Expedia/Agoda puanları üzerinden (10 üzerinden)
  price: "₺₺₺",
  selected: false,
  location: "Çukurbağ Yarımadası, Beyhan Cenkçi Cd. No:74, 07580 Kaş/Antalya",
  distance: "Kaş merkezden ~4–5 km",
  coordinates: { lat: 36.1964, lng: 29.5989 }, // yarımada genel nokta
  website: "https://www.lakumsal.com",
  phone: "+90 242 836 34 04",
  duration: "Konaklama",
  facilities: ["havuz", "Wi-Fi", "kahvaltı", "restoran/bar"],
  features: ["yarımada", "manzara", "daha sakin tempo"],
  tags: ["la-kumsal", "manzara", "butik-otel"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
La Kumsal, yarımada tarafının “sakin ve manzaralı” çizgisinde. Merkezdeki kalabalık enerjiden uzaklaşıp daha yavaş bir tempo isteyenlere hitap ediyor.

**Kimler için uygun**
Manzarayı ve sessizliği önceleyen çiftler için uygun. Gün içinde çok gezen ama akşam sakin bir yere dönmek isteyenler de sever.

**Ne alınır-ne yapılır**
Gün planı genelde şöyle çalışıyor: sabah manzara-kahvaltı, öğlen deniz/tekne, akşamüstü havuz/teras dinlenmesi. Kaş’ta “dinlenmeyi” de tatilin parçası yapmak isteyenlere iyi oturur.

**Pratik ipuçları**
Yarımada tarafında araç/taksi planını baştan yapmak iyi olur. Oda tipleri ve manzara seçenekleri deneyimi etkiler; rezervasyonda sor.

**Kısa özet**
Yarımadada, sakin ve manzaralı bir butik otel arayanlara uygun.`
},

// 40) Upper House Hotel
{
  id: "upper-house-hotel",
  title: "Upper House Hotel",
  description: "Kaş merkezde, çarşı ve sahile yakın konumda butik konaklama.",
  category: ["hotels"],
  image: "../assets/1_places/upper-house-hotel-001.jpg",
  images: [
    "../assets/1_places/upper-house-hotel-002.jpg",
    "../assets/1_places/upper-house-hotel-003.jpg",
    "../assets/1_places/upper-house-hotel-004.jpg"
  ],
  rating: 7.2, // Expedia (10 üzerinden)
  price: "₺₺",
  selected: false,
  location: "Ptt Cd. Öztürk Sk. No:15, 07580 Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // Kaş merkez placeholder
  website: "https://www.upperhousehotel.net",
  phone: "+90 242 836 43 33",
  duration: "Konaklama",
  facilities: ["Wi-Fi", "kahvaltı (tesise göre)", "merkezi konum"],
  features: ["çarşıya yakın", "yürünebilir lokasyon", "butik"],
  tags: ["kas-merkez", "carsi", "butik-otel"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Upper House, Kaş merkezde “konum her şeydir” diyenlerin tercih ettiği tipte. Gün boyunca çarşı-sahil hattında dolaşıp otele kısa bir yürüyüşle dönme kolaylığı var.

**Kimler için uygun**
Merkezde kalıp her yere yürüyerek gitmek isteyenler için uygun. Gün boyu dışarıda olup otele sadece dinlenmek için dönenler daha memnun olur.

**Ne alınır-ne yapılır**
Kaş’ta merkez konaklamanın klasiği: sabah kahvaltı, gün içinde deniz/tekne, akşam çarşıda yemek. Otel konumu bu akışı kolaylaştırıyor.

**Pratik ipuçları**
Merkezde bazı otellerde merdiven ve asansör durumu önemli olabiliyor; mobilite hassasiyeti varsa önceden sor. Otopark konusu sezona göre değişir.

**Kısa özet**
Kaş merkezde, yürüyerek yaşamak isteyenler için pratik bir butik otel.`
},

// 5. onluk (41–50 / 72)

// 41) Talay Otel
{
  id: "talay-otel",
  title: "Talay Otel",
  description: "Küçük Çakıl’a çok yakın, merkezde konum avantajı olan, uzun yıllardır hizmet veren otel/pansiyon.",
  category: ["hotels"],
  image: "../assets/1_places/talay-otel-001.jpg",
  images: [
    "../assets/1_places/talay-otel-002.jpg",
    "../assets/1_places/talay-otel-003.jpg",
    "../assets/1_places/talay-otel-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Küçükçakıl Mah., Koza Sok. No:7, 07580 Kaş/Antalya",
  distance: "Küçük Çakıl'a ~2 dk yürüyüş",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // kesin koordinat yoksa Kaş merkez placeholder
  website: "https://talayotel.com/",
  phone: "+90 242 836 11 01",
  duration: "Konaklama",
  facilities: ["Wi-Fi", "otopark (duruma göre)", "teras", "bahçe"],
  features: ["merkeze yürüme", "Küçük Çakıl'a yakın", "klasik Kaş konaklaması"],
  tags: ["kas-merkez", "kucuk-cakil", "konaklama"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Talay Otel, Kaş merkezde “işim gücüm dışarıda, otelde konum rahatlığı arıyorum” diyenlerin tarzında. Küçük Çakıl hattına yakın olduğundan gün içinde denize inip çıkmak kolay. Akşam da çarşıya karışıp yürüyerek dönme rahatlığı var.

**Kimler için uygun**
Merkezde kalmak isteyenler, Kaş’ı yürüyerek yaşamak isteyenler için uygun. Çok izole, sessizlik odaklı resort beklentisi olanlar içinse merkez temposu yorucu gelebilir.

**Ne alınır-ne yapılır**
Klasik Kaş planı burada iyi çalışır: sabah kahvaltı → tekne turu/plaj → akşam çarşı. Otel tarafında “aktivite”den çok pratiklik öne çıkar.

**Pratik ipuçları**
Merkezde otopark sezon yoğunluğunda değişken olabilir; araçla geliyorsan önceden sor. Oda seçerken manzara/kat/merdiven gibi detayları netleştirmek konforu artırır.

**Kısa özet**
Merkez + Küçük Çakıl yakınlığıyla, Kaş’ı yürüyerek yaşamak isteyenlere pratik konaklama.`
},

// 42) Çakıl Pansiyon
{
  id: "cakil-pansiyon",
  title: "Çakıl Pansiyon",
  description: "Küçük Çakıl mevkiinde denize çok yakın, kahvaltı konseptiyle bilinen pansiyon.",
  category: ["hotels"],
  image: "../assets/1_places/cakil-pansiyon-001.jpg",
  images: [
    "../assets/1_places/cakil-pansiyon-002.jpg",
    "../assets/1_places/cakil-pansiyon-003.jpg",
    "../assets/1_places/cakil-pansiyon-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Andifli Mh., Küçük Çakıl Mevkii No:43, 07580 Kaş/Antalya",
  distance: "Küçük Çakıl'a ~1 dk",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // kesin koordinat yoksa Kaş merkez placeholder
  website: "https://www.cakilpension.com/",
  phone: "+90 242 836 15 32",
  duration: "Konaklama",
  facilities: ["açık büfe kahvaltı", "Wi-Fi", "klima", "denize yakın"],
  features: ["Küçük Çakıl mevkii", "manzara (bazı odalar)", "merkeze yürüme"],
  tags: ["kucuk-cakil", "pansiyon", "denize-yakin"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Çakıl Pansiyon’un olayı lokasyon: Küçük Çakıl hattında “deniz hemen aşağıda” rahatlığı. Kaş merkezde gün boyu dolaşanlar için otele dönüşler kısa ve kolay.

**Kimler için uygun**
Denize yakın konaklama arayanlar, sabah hızlı kahvaltı edip günü dışarıda geçirenler için uygun. Çok geniş tesis/havuz beklentisi olanlar için uygun olmayabilir.

**Ne alınır-ne yapılır**
Gündüz Küçük Çakıl’da hızlı deniz molaları, sonra tekne turu ya da başka koy planı. Akşam da çarşıda yemek ve yürüyüş.

**Pratik ipuçları**
Merkezde araç/park işi sezon yoğunluğuna göre değişir. Oda seçerken balkon/manzara ve merdiven durumunu sor.

**Kısa özet**
Küçük Çakıl mevkiinde, denize çok yakın ve merkez odaklı bir pansiyon.`
},

// 43) Nautilus Diving
{
  id: "nautilus-diving",
  title: "Nautilus Diving",
  description: "Kaş Limanı çıkışlı, tekne dalışları ve eğitimler sunan PADI odaklı dalış merkezi.",
  category: ["diving", "activities"],
  image: "../assets/1_places/nautilus-diving-001.jpg",
  images: [
    "../assets/1_places/nautilus-diving-002.jpg",
    "../assets/1_places/nautilus-diving-003.jpg",
    "../assets/1_places/nautilus-diving-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Kaş Limanı / Liman Cad. civarı, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // liman/merkez placeholder
  website: "https://www.nautilusdivingkas.com/?lang=en",
  phone: "+90 242 836 28 18",
  duration: "Yarım/Tam gün (dalış programına göre)",
  facilities: ["tekne dalışı", "eğitim", "ekipman", "rehberlik"],
  features: ["Kaş dalış noktaları", "yeni başlayanlara uygun seçenekler", "tekne çıkışı"],
  tags: ["padi", "tekne-dalisi", "kas-limani"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Kaş’ta dalış günü genelde limanda başlar: ekipman hazırlığı, kısa bilgilendirme, tekneyle noktalara çıkış. Nautilus da bu klasik akışın içinden çalışan bir merkez.

**Kimler için uygun**
İlk kez deneyecek olanlar (discovery), sertifikalı dalıcılar ve eğitim almak isteyenler için uygun. Dalış yapmayanlar bazen tekneye “yüzme/şnorkel” için de katılabiliyor (gününe göre değişebilir).

**Ne alınır-ne yapılır**
Kaş çevresindeki koylarda tekne dalışları; gün içinde 1–2 dalış + yüzme molaları gibi bir plan yaygın. Sertifikaya göre rota seçimi değişir.

**Pratik ipuçları**
Sezonda yer hızlı dolabilir; bir gün önceden yazmak/aramak iyi olur. Hangi seviyeye hangi noktaların planlandığını ve fiyata nelerin dahil olduğunu netleştir.

**Kısa özet**
Kaş Limanı çıkışlı, eğitim ve tekne dalışları yapan köklü dalış merkezi.`
},

// 44) Kaş Diving (Kas Diving®)
{
  id: "kas-diving",
  title: "Kaş Diving (Kas Diving®)",
  description: "Merkezde konumlanan, dalış turları ve kurslarıyla bilinen dalış okulu.",
  category: ["diving", "activities"],
  image: "../assets/1_places/kas-diving-001.jpg",
  images: [
    "../assets/1_places/kas-diving-002.jpg",
    "../assets/1_places/kas-diving-003.jpg",
    "../assets/1_places/kas-diving-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Andifli Mah., Hükümet Cd. No:10/1, 07580 Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // merkez placeholder
  website: "https://www.kas-diving.com/en/",
  phone: "+90 544 369 62 50",
  duration: "Yarım/Tam gün",
  facilities: ["tekne dalışı", "kurslar", "ekipman", "rehberlik"],
  features: ["Nitrox seçenekleri (kurs/opsiyon)", "merkez konum", "tekne programı"],
  tags: ["scuba", "nitrox", "kas-merkez"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Merkezden organize olan bir dalış günü: sabah buluş, ekipman, tekneyle noktalara çıkış. Kaş’ta su altı genelde sakin ve görüş iyi olduğunda efsane olur; hava/deniz koşulu planı doğrudan etkiler.

**Kimler için uygun**
Yeni başlayanlar, sertifikalı dalıcılar ve kurs almak isteyenler. “Dalışı bir-iki kez deneyip geçeyim” diyenler için de discovery formatları olur.

**Ne alınır-ne yapılır**
Tekne dalışları, eğitim dalışları, seviyeye göre farklı noktalar. Nitrox gibi opsiyonlar ilgini çekiyorsa baştan konuşmak iyi olur.

**Pratik ipuçları**
Kurs/tekne programı ve dahil olanlar (ekipman, transfer, foto/video) netleştirilmeli. Sezonda rezervasyon önemli.

**Kısa özet**
Merkez çıkışlı, kurs ve tekne dalışlarıyla öne çıkan bir dalış okulu.`
},

// 45) Ege Barakuda Dalış Merkezi
{
  id: "ege-barakuda-dalis-merkezi",
  title: "Ege Barakuda Dalış Merkezi",
  description: "Kaş’ta tekne dalışları ve eğitimler sunan, bilinen dalış merkezlerinden biri.",
  category: ["diving", "activities"],
  image: "../assets/1_places/ege-barakuda-dalis-merkezi-001.jpg",
  images: [
    "../assets/1_places/ege-barakuda-dalis-merkezi-002.jpg",
    "../assets/1_places/ege-barakuda-dalis-merkezi-003.jpg",
    "../assets/1_places/ege-barakuda-dalis-merkezi-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Kaş Merkez / Hükümet Cd. civarı, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // merkez placeholder
  website: "",
  phone: "+90 532 447 40 44",
  duration: "Yarım/Tam gün",
  facilities: ["tekne dalışı", "kurslar", "ekipman"],
  features: ["Kaş dalış noktaları", "tekne programı"],
  tags: ["barakuda", "scuba", "kas"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Kaş’ta dalış merkezlerinin çoğu liman/merkez hattında benzer bir ritimde çalışır: sabah hazırlık, tekneyle çıkış, gün boyu dalış + yüzme molaları.

**Kimler için uygun**
Yeni başlayanlar ve sertifikalı dalıcılar. Kurs düşünenler için de seçenekleri oluyor.

**Ne alınır-ne yapılır**
Seviyene göre 1–2 dalış planı, aralarda teknede dinlenme. Kaş’ta gün genelde denizde geçer.

**Pratik ipuçları**
Program saatlerini ve fiyata dahil olanları (ekipman, transfer, foto/video) baştan netleştir.

**Kısa özet**
Kaş’ta tekne dalışları ve eğitimler sunan bilinen bir dalış merkezi.`
},

// 46) SubAQUA Dalış Merkezi
{
  id: "subaqua-dalis-merkezi",
  title: "SubAQUA Dalış Merkezi",
  description: "Kaş Limanı çıkışlı, PADI eğitimleri ve tekne dalışları yapan dalış merkezi.",
  category: ["diving", "activities"],
  image: "../assets/1_places/subaqua-dalis-merkezi-001.jpg",
  images: [
    "../assets/1_places/subaqua-dalis-merkezi-002.jpg",
    "../assets/1_places/subaqua-dalis-merkezi-003.jpg",
    "../assets/1_places/subaqua-dalis-merkezi-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Kaş Limanı (Kas Harbour), Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // liman placeholder
  website: "https://www.subaquadive.com/",
  phone: "+90 532 221 01 29",
  duration: "Yarım/Tam gün",
  facilities: ["PADI kursları", "tekne dalışı", "ekipman", "sigorta (tesise göre)"],
  features: ["liman çıkışı", "kurs odaklı yapı", "tekne operasyonu"],
  tags: ["padi", "kas-harbour", "kurs"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Daha “eğitim” tarafı güçlü bir dalış merkezi hissi. Kaş’ta su altı deneyimi kadar, karada bilgilendirme ve düzen de önemli; özellikle ilk dalışını yapıyorsan.

**Kimler için uygun**
PADI kursu almak isteyenler, ilk kez deneyecekler ve düzenli tekne dalışına çıkan sertifikalı dalıcılar.

**Ne alınır-ne yapılır**
Kurslar, günlük tekne dalışları, seviye dalışları. Program, deniz durumuna göre esneyebilir.

**Pratik ipuçları**
Kurs seviyeni ve beklentini (kaç dalış, kaç gün) netleştir. Sezonda yoğunluk olabilir; önceden iletişim kurmak rahat ettirir.

**Kısa özet**
Kaş Limanı çıkışlı, PADI kursları ve tekne dalışları yapan dalış merkezi.`
},

// 47) Oceanids Dalış Merkezi
{
  id: "oceanids-dalis-merkezi",
  title: "Oceanids Dalış Merkezi",
  description: "Kaş merkezde, tekne dalışları ve eğitimler sunan dalış okulu.",
  category: ["diving", "activities"],
  image: "../assets/1_places/oceanids-dalis-merkezi-001.jpg",
  images: [
    "../assets/1_places/oceanids-dalis-merkezi-002.jpg",
    "../assets/1_places/oceanids-dalis-merkezi-003.jpg",
    "../assets/1_places/oceanids-dalis-merkezi-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Andifli Mah., Öztürk Sok. No:17/1, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // merkez placeholder
  website: "https://oceanids.org/",
  phone: "+90 535 434 57 80",
  duration: "Yarım/Tam gün",
  facilities: ["tekne dalışı", "kurslar", "ekipman"],
  features: ["merkez konum", "eğitim + gezi dalışı"],
  tags: ["oceanids", "scuba", "kas-merkez"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Kaş’ta dalış merkezleri “küçük ekip – yoğun gün” düzeninde çalışır. Oceanids de merkezde konumuyla hızlı organize olan, dalış günü ritmini iyi oturtan tarzda.

**Kimler için uygun**
İlk kez dalacaklar, sertifikalı dalıcılar ve kurs almak isteyenler.

**Ne alınır-ne yapılır**
Günlük tekne dalışları (genelde sabah/öğleden sonra çıkışları olur), eğitim dalışları ve seviyeye göre nokta seçimi.

**Pratik ipuçları**
Hangi saat çıkış olduğunu ve dalış sayısını baştan konuş. Dalış yapmayan eş/arkadaş varsa teknede yüzme/şnorkel imkânı olup olmadığını sor.

**Kısa özet**
Merkezde, eğitim ve tekne dalışlarını birlikte sunan bir dalış merkezi.`
},

// 48) Kanyon Diving
{
  id: "kanyon-diving",
  title: "Kanyon Diving",
  description: "Kaş’ta tüplü dalış turları ve kurslar sunan, yerel dalış merkezlerinden biri.",
  category: ["diving", "activities"],
  image: "../assets/1_places/kanyon-diving-001.jpg",
  images: [
    "../assets/1_places/kanyon-diving-002.jpg",
    "../assets/1_places/kanyon-diving-003.jpg",
    "../assets/1_places/kanyon-diving-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Andifli, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // merkez placeholder
  website: "",
  phone: "+90 532 456 54 82",
  duration: "Yarım/Tam gün",
  facilities: ["tekne dalışı", "kurs", "ekipman"],
  features: ["Kaş dalış noktaları", "günlük program"],
  tags: ["kanyon", "scuba", "kas"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Kaş dalışında gün hızlı geçer: tekne, dalış, yüzme molası, tekrar dalış. Kanyon Diving de bu günlük program akışında hizmet veren merkezlerden.

**Kimler için uygun**
İlk dalışını denemek isteyenler ve sertifikalı dalıcılar. Kurs düşünenler için de seçenekler olabilir.

**Ne alınır-ne yapılır**
Seviyeye göre 1–2 dalış, aralarda yüzme/şnorkel ve teknede dinlenme.

**Pratik ipuçları**
Kayıt öncesi sağlık beyanı ve seviyene uygun program detaylarını sor. Fiyata dahil olanları netleştir.

**Kısa özet**
Kaş’ta günlük tekne dalışları ve kurslar sunan yerel bir dalış merkezi.`
},

// 49) Life Aquatic (Serbest Dalış & Yoga)
{
  id: "life-aquatic",
  title: "Life Aquatic (Serbest Dalış & Yoga)",
  description: "Kaş merkezde serbest dalış (freediving) eğitimleri ve yoga derslerini bir arada sunan okul.",
  category: ["activities", "diving", "nature"],
  image: "../assets/1_places/life-aquatic-001.jpg",
  images: [
    "../assets/1_places/life-aquatic-002.jpg",
    "../assets/1_places/life-aquatic-003.jpg",
    "../assets/1_places/life-aquatic-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Andifli Mah., Necipbey Cad. No:3, 07580 Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // merkez placeholder
  website: "https://lifeaquatickas.com/en/homepage/",
  phone: "+90 532 400 88 36",
  duration: "1–3 saat (ders) / çok günlü program",
  facilities: ["freediving kursları", "yoga dersleri", "eğitmenler", "teori+pratik"],
  features: ["serbest dalış odaklı", "nefes/teknik çalışmaları", "yoga ile destek"],
  tags: ["freediving", "yoga", "nefes"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Burada tempo “tekneyle dalış”tan farklı: daha çok nefes, teknik, odak ve sakinlik. Serbest dalışın ritmi, Kaş’ın denizini daha meditasyon gibi yaşatabiliyor.

**Kimler için uygun**
Serbest dalışa meraklı olanlar, nefes/teknik geliştirmek isteyenler ve yoga ile denge arayanlar. “Adrenalin değil, kontrollü gelişim” isteyenlere daha uygun.

**Ne alınır-ne yapılır**
Freediving dersleri (teori + su çalışması), nefes teknikleri, yoga seansları. Programlar günlük ders veya çok günlü paket şeklinde olabiliyor.

**Pratik ipuçları**
Seviye ve hedefini (ilk kez mi, gelişim mi) baştan söyle. Ders süresi, ekipman ve buluşma noktası detaylarını netleştir.

**Kısa özet**
Kaş’ta serbest dalış + yoga kombinasyonu isteyenler için güçlü bir adres.`
},

// 50) Freedive Cosmos
{
  id: "freedive-cosmos",
  title: "Freedive Cosmos",
  description: "Kaş’ta serbest dalış (freediving) odaklı eğitim ve antrenmanlar sunan ekip/okul.",
  category: ["activities", "diving", "nature"],
  image: "../assets/1_places/freedive-cosmos-001.jpg",
  images: [
    "../assets/1_places/freedive-cosmos-002.jpg",
    "../assets/1_places/freedive-cosmos-003.jpg",
    "../assets/1_places/freedive-cosmos-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // net bilgi yoksa Kaş merkez placeholder
  website: "",
  phone: "",
  duration: "1–3 saat (ders) / programlara göre",
  facilities: ["serbest dalış eğitimi", "antrenman", "teknik çalışma"],
  features: ["freediving odaklı", "nefes ve teknik gelişim"],
  tags: ["freedive", "nefes", "kas"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Serbest dalış tarafında atmosfer genelde sakin ve odaklıdır: kısa brifing, nefes/teknik, su çalışması. Kaş’ın suyu bu tarz çalışmalara çok elverişli olabiliyor.

**Kimler için uygun**
Serbest dalışa giriş yapmak isteyenler veya tekniğini geliştirmek isteyenler. “Tüplü dalış” yerine daha çok beden kontrolü ve nefese odaklananlar.

**Ne alınır-ne yapılır**
Seviye dersleri, antrenman seansları, teknik geri bildirim. İçerik eğitmen planına göre değişir.

**Pratik ipuçları**
Program, buluşma yeri ve ekipman dahil mi gibi detayları mutlaka netleştir. İlk kez deneyeceksen sağlık/konfor sınırlarını açıkça paylaş.

**Kısa özet**
Kaş’ta serbest dalış odaklı eğitim/antrenman arayanlara yönelik bir seçenek.`
},

// 6.... onluk (51–60 / 72)

// 51) Likya Dalış Merkezi (Bougainville Travel)
{
  id: "likya-dalis-merkezi",
  title: "Likya Dalış Merkezi (Bougainville Travel)",
  description: "Kaş’ta dalış turları ve eğitimler sunan, Bougainville Travel çatısı altında geçen dalış hizmeti/organizasyonu.",
  category: ["diving", "activities"],
  image: "../assets/1_places/likya-dalis-merkezi-001.jpg",
  images: [
    "../assets/1_places/likya-dalis-merkezi-002.jpg",
    "../assets/1_places/likya-dalis-merkezi-003.jpg",
    "../assets/1_places/likya-dalis-merkezi-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Andifli, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // net adres/koordinat teyidi yoksa Kaş merkez placeholder
  website: "",
  phone: "",
  duration: "Yarım/Tam gün",
  facilities: ["tekne dalışı", "rehberlik", "organizasyon"],
  features: ["tur/ajans bağlantılı", "dalış programı"],
  tags: ["likya", "bougainville", "kas"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Ajans / organizasyon tarafı güçlü olan dalış yapılarında gün daha “paket” hissettirir: buluşma, tekneye geçiş, dalış noktaları ve gün sonunda dönüş. Kaş’ta dalış gününün ritmi yine deniz koşullarına göre şekillenir.

**Kimler için uygun**
“Ben uğraşmayayım, program hazır olsun” diyenler ve dalışı tura entegre etmek isteyenler. Sertifikalı dalıcılar için de programlar olabilir.

**Ne alınır-ne yapılır**
Tekne dalışları, eğitim/deneme dalışları (varsa) ve yüzme molaları. Hangi seviyeye hangi noktalar çıktığı gün içinde netleşebilir.

**Pratik ipuçları**
Kayıt olmadan önce: fiyata neler dahil, kaç dalış var, ekipman dahil mi, çıkış saati/dönüş saati gibi temel şeyleri yazışarak netleştir.

**Kısa özet**
Bougainville bağlantılı, dalış programını “organizasyon” gibi yöneten bir seçenek.`
},

// 52) Boat Trips by Captain Ergun
{
  id: "boat-trips-by-captain-ergun",
  title: "Boat Trips by Captain Ergun",
  description: "Kaş çıkışlı, günlük tekne turları ve koy molalarıyla deniz günü planlayan tekne turu işletmesi.",
  category: ["activities", "places", "nature"],
  image: "../assets/1_places/boat-trips-by-captain-ergun-001.jpg",
  images: [
    "../assets/1_places/boat-trips-by-captain-ergun-002.jpg",
    "../assets/1_places/boat-trips-by-captain-ergun-003.jpg",
    "../assets/1_places/boat-trips-by-captain-ergun-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Kaş Limanı, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.1994, lng: 29.6426 }, // Kaş Limanı genel nokta
  website: "",
  phone: "",
  duration: "Tam gün",
  facilities: ["tekne turu", "yüzme molaları", "öğle yemeği (tur paketine göre)"],
  features: ["koy gezisi", "şnorkel molaları", "tüm gün denizde"],
  tags: ["tekne-turu", "kas-limani", "koylar"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Kaş’ta tekne turu, tatilin “en kolay iyi geçen” günlerinden biridir: sabah limanda buluş, gün boyu koy koy yüzme, güneş, sohbet. Kaptanlı turlarda atmosfer çoğunlukla samimi ve pratiktir.

**Kimler için uygun**
Plajdan sıkılanlar, gün boyu denizde kalmak isteyenler, Kaş’ın koylarını tek günde görmek isteyenler için uygun. Çocuklu aileler için de iyi olabilir; teknenin düzeni ve gölge alanı önemli.

**Ne alınır-ne yapılır**
Koy molaları, şnorkel, teknede dinlenme. Bazı turlarda öğle yemeği dahil olabilir; menü/opsiyon turdan tura değişir.

**Pratik ipuçları**
Güneş koruması, havlu, deniz ayakkabısı ve su şart. Rüzgâr/deniz durumu rotayı etkileyebilir; “bugün hangi koylar?” sorusunu sabah sormak normal.

**Kısa özet**
Kaş’ta “bir gün full deniz” planı için tekne turu; Captain Ergun tarzı işletmeler bu günü paketler.`
},

// 53) Xanthos Travel
{
  id: "xanthos-travel",
  title: "Xanthos Travel",
  description: "Kaş’ta tekne turları, günlük geziler ve transfer gibi hizmetler sunan yerel tur acentesi.",
  category: ["activities", "places"],
  image: "../assets/1_places/xanthos-travel-001.jpg",
  images: [
    "../assets/1_places/xanthos-travel-002.jpg",
    "../assets/1_places/xanthos-travel-003.jpg",
    "../assets/1_places/xanthos-travel-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // merkez placeholder
  website: "",
  phone: "",
  duration: "",
  facilities: ["tekne turu", "günlük tur", "transfer (duruma göre)"],
  features: ["tur acentesi", "çoklu rota"],
  tags: ["travel", "turlar", "kas"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Acenteler Kaş’ta “tek bir yerden her şeyi bağlayayım” kolaylığı sağlar. Tekne turu, jeep safari, Saklıkent, Patara gibi rotaları aynı yerden almak mümkün olur.

**Kimler için uygun**
Plan yapmayı sevmeyenler, birkaç aktiviteyi kısa sürede organize etmek isteyenler.

**Ne alınır-ne yapılır**
Tekne turları, günlük gezi rotaları, bazen özel transferler. Hangi gün hangi tur var, sezona göre değişir.

**Pratik ipuçları**
İptal/erteleme koşullarını ve turda dahil olanları (yemek, giriş ücreti, transfer) netleştir.

**Kısa özet**
Kaş’ta tur ve aktiviteleri tek yerden organize etmek için yerel acente.`
},

// 54) Tatil Sihirbazı
{
  id: "tatil-sihirbazi",
  title: "Tatil Sihirbazı",
  description: "Kaş ve çevresine yönelik turlar, aktiviteler ve rezervasyonlar sunan tur/organizasyon firması.",
  category: ["activities", "places"],
  image: "../assets/1_places/tatil-sihirbazi-001.jpg",
  images: [
    "../assets/1_places/tatil-sihirbazi-002.jpg",
    "../assets/1_places/tatil-sihirbazi-003.jpg",
    "../assets/1_places/tatil-sihirbazi-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // placeholder
  website: "",
  phone: "",
  duration: "",
  facilities: ["tur satışı", "aktivite rezervasyonu"],
  features: ["organizasyon", "çoklu seçenek"],
  tags: ["tur", "rezervasyon"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Bu tarz firmalar genelde “WhatsApp’tan yaz, planı kur” kolaylığıyla çalışır. Kaş’ta günler dolu geçsin isteyenler için hızlı çözümdür.

**Kimler için uygun**
Birden fazla aktiviteyi kısa sürede ayarlamak isteyenler.

**Ne alınır-ne yapılır**
Tekne turu, günlük gezi, dalış/aktivite gibi seçenekler. En net liste sezonluk olur.

**Pratik ipuçları**
Fiyata dahil olanlar ve iptal koşulları mutlaka sorulmalı.

**Kısa özet**
Kaş’ta tur/aktivite planını hızlandıran organizasyon seçeneği.`
},

// 55) Aslar Travel
{
  id: "aslar-travel",
  title: "Aslar Travel",
  description: "Kaş merkezde, günlük turlar ve tekne turları dahil çeşitli gezi/aktivite satışları yapan acente.",
  category: ["activities", "places"],
  image: "../assets/1_places/aslar-travel-001.jpg",
  images: [
    "../assets/1_places/aslar-travel-002.jpg",
    "../assets/1_places/aslar-travel-003.jpg",
    "../assets/1_places/aslar-travel-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // placeholder
  website: "",
  phone: "",
  duration: "",
  facilities: ["günlük turlar", "tekne turları", "transfer (duruma göre)"],
  features: ["merkez acente", "çoklu rota"],
  tags: ["travel", "turlar"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Kaş merkezde acentelerle çalışmanın avantajı pratiklik: bir turu iptal edip başka güne kaydırmak, farklı rota sormak, toplu rezervasyon yapmak kolay.

**Kimler için uygun**
“Ben tek tek uğraşamam” diyenler ve birkaç aktiviteyi paketle almak isteyenler.

**Ne alınır-ne yapılır**
Tekne turları, Saklıkent/Patara gibi günlük geziler, bazen transfer.

**Pratik ipuçları**
Turun dahil olmayan masraflarını (giriş ücreti vb.) baştan öğren.

**Kısa özet**
Merkezden tur/aktivite organize etmeye yarayan yerel acente.`
},

// 56) Eroğlu Boat Tours
{
  id: "eroglu-boat-tours",
  title: "Eroğlu Boat Tours",
  description: "Kaş Limanı’ndan kalkan günlük tekne turlarıyla koy gezileri ve yüzme molaları sunan işletme.",
  category: ["activities", "nature", "places"],
  image: "../assets/1_places/eroglu-boat-tours-001.jpg",
  images: [
    "../assets/1_places/eroglu-boat-tours-002.jpg",
    "../assets/1_places/eroglu-boat-tours-003.jpg",
    "../assets/1_places/eroglu-boat-tours-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺₺",
  selected: false,
  location: "Kaş Limanı, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.1994, lng: 29.6426 }, // Kaş Limanı genel nokta
  website: "",
  phone: "",
  duration: "Tam gün",
  facilities: ["tekne turu", "yüzme molaları", "öğle yemeği (tura göre)"],
  features: ["koy gezisi", "şnorkel molaları", "gün boyu deniz"],
  tags: ["boat-tour", "kas-limani"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Kaş tekne turu, günün büyük kısmını su üstünde geçirdiğin bir “ritüel” gibi. Koylarda dur-kalk, denize atla, teknede uzan, sonra bir sonraki koy.

**Kimler için uygun**
Deniz seven herkes: arkadaş grubu, çiftler, aileler. Tekne düzeni (gölge, merdiven, WC) konforu etkiler.

**Ne alınır-ne yapılır**
Yüzme molaları, şnorkel, teknede dinlenme. Bazı teknelerde öğle yemeği dahil olur.

**Pratik ipuçları**
Güneş koruması şart. Rota rüzgâr/deniz durumuna göre değişebilir.

**Kısa özet**
Kaş Limanı çıkışlı klasik bir “koy koy yüzme” tekne turu.`
},

// 57) Kaş Cuma Pazarı (Kaş Pazar Yeri)
{
  id: "kas-cuma-pazari",
  title: "Kaş Cuma Pazarı (Kaş Pazar Yeri)",
  description: "Cuma günleri kurulan, sebze-meyve, yerel ürünler, giyim ve hediyelik bulabileceğin Kaş’ın en canlı pazarı.",
  category: ["shopping", "places"],
  image: "../assets/1_places/kas-cuma-pazari-001.jpg",
  images: [
    "../assets/1_places/kas-cuma-pazari-002.jpg",
    "../assets/1_places/kas-cuma-pazari-003.jpg",
    "../assets/1_places/kas-cuma-pazari-004.jpg"
  ],
  rating: 4.6,
  price: "₺",
  selected: false,
  location: "Andifli, Kaş Pazar Yeri, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2008, lng: 29.6418 }, // pazar alanı genel nokta
  website: "",
  phone: "",
  duration: "1–2 saat",
  facilities: ["yiyecek standları (sezona göre)", "otopark (yakın çevre)", "WC (yakın çevre)"],
  features: ["yerel ürünler", "taze sebze-meyve", "baharat/kurutmalık", "giyim-aksesuar"],
  tags: ["pazar", "cuma", "yerel-urun"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Kaş Cuma Pazarı gününde şehir daha bir canlanır. Tezgâhlar dolu, sesler karışık, hızlı bir akış vardır. Pazar alanına girince “buradan eli boş çıkmam” hissi gelir.

**Kimler için uygun**
Yerel ürün sevenler, evde bir şeyler yapmayı düşünenler, uygun fiyatlı meyve-sebze arayanlar ve küçük alışveriş keyfi isteyenler.

**Ne alınır-ne yapılır**
Mevsim meyvesi, zeytin/peynir, baharat, kurutmalık, domates gibi Kaş çevresinin klasik ürünleri; bir de yazın turistik giyim-aksesuar tezgâhları.

**Pratik ipuçları**
Erken saatler daha rahat; öğlene doğru kalabalık artar. Nakit taşımak işini kolaylaştırır. Alışveriş çantası (bez torba) iyi fikir.

**Kısa özet**
Cuma günü Kaş’ın en canlı noktası: yerel ürün, giyim ve hediyelik için hızlı bir tur.`
},

// 58) Rabia Ucuzluk Pazarı
{
  id: "rabia-ucuzluk-pazari",
  title: "Rabia Ucuzluk Pazarı",
  description: "Kaş merkezde, günlük ihtiyaçlar ve uygun fiyatlı ürünler bulabileceğin yerel ‘ucuzluk’ mağazası.",
  category: ["shopping"],
  image: "../assets/1_places/rabia-ucuzluk-pazari-001.jpg",
  images: [
    "../assets/1_places/rabia-ucuzluk-pazari-002.jpg",
    "../assets/1_places/rabia-ucuzluk-pazari-003.jpg",
    "../assets/1_places/rabia-ucuzluk-pazari-004.jpg"
  ],
  rating: 0.0,
  price: "₺",
  selected: false,
  location: "Kaş Merkez, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // placeholder
  website: "",
  phone: "",
  duration: "15–30 dk",
  facilities: ["market tipi alışveriş"],
  features: ["uygun fiyat", "günlük ihtiyaç"],
  tags: ["ucuzluk", "market"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Burası “turistik keşif”ten çok pratik bir durak. Kaş’ta uzun kalanların ya da eksiklerini tamamlamak isteyenlerin uğradığı türden.

**Kimler için uygun**
Pansiyonda/evde kalanlar, hızlı alışveriş yapmak isteyenler.

**Ne alınır-ne yapılır**
Günlük ihtiyaçlar, küçük ev/temizlik ürünleri, temel market ürünleri (stok dönemsel değişir).

**Pratik ipuçları**
Yoğun saatlerde kasa sırası olabilir; hızlı gir-çık için kısa listeyle gitmek iyi olur.

**Kısa özet**
Merkezde pratik ve uygun fiyatlı alışveriş noktası.`
},

// 59) Feraye Store & Atelier
{
  id: "feraye-store-atelier",
  title: "Feraye Store & Atelier",
  description: "Kaş’ta tasarım/atelier çizgisinde, seçki kıyafet-aksesuar ve el işi ürünler bulabileceğin butik mağaza.",
  category: ["shopping"],
  image: "../assets/1_places/feraye-store-atelier-001.jpg",
  images: [
    "../assets/1_places/feraye-store-atelier-002.jpg",
    "../assets/1_places/feraye-store-atelier-003.jpg",
    "../assets/1_places/feraye-store-atelier-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez, Uzun Çarşı çevresi, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // placeholder
  website: "",
  phone: "",
  duration: "20–45 dk",
  facilities: ["butik alışveriş"],
  features: ["tasarım ürün", "atelier", "hediyelik"],
  tags: ["butik", "tasarim", "hediyelik"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Kaş’ın çarşı içinde sevilen tarafı “küçük ama karakterli” dükkânlar. Feraye gibi atelier/butik yerler de bu havayı tamamlıyor: acele yok, bakınma var.

**Kimler için uygun**
Tasarım ürün sevenler, hediyelik arayanlar ve sıradan zincir mağaza yerine seçki butik gezmeyi sevenler.

**Ne alınır-ne yapılır**
Kıyafet, aksesuar, el işi/özel üretim ürünler (seçki sezonluk değişebilir).

**Pratik ipuçları**
Uzun Çarşı çevresinde yürürken uğramalık; açılış saatleri sezon dışı değişebilir.

**Kısa özet**
Kaş çarşısında seçki ve tasarım butik tarzı bir durak.`
},

// 60) Kash Cosmetics
{
  id: "kash-cosmetics",
  title: "Kash Cosmetics",
  description: "Kaş merkezde kozmetik ve kişisel bakım ürünleri bulabileceğin mağaza.",
  category: ["shopping"],
  image: "../assets/1_places/kash-cosmetics-001.jpg",
  images: [
    "../assets/1_places/kash-cosmetics-002.jpg",
    "../assets/1_places/kash-cosmetics-003.jpg",
    "../assets/1_places/kash-cosmetics-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // placeholder
  website: "",
  phone: "",
  duration: "10–30 dk",
  facilities: ["mağaza"],
  features: ["kişisel bakım", "kozmetik"],
  tags: ["kozmetik", "bakim"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Turistik rota üstünde olsa da amacı net: ihtiyaç tamamlamak. Güneş kremi, bakım ürünü, küçük eksikler gibi şeyler için uğranır.

**Kimler için uygun**
Tatilde eksiklerini tamamlamak isteyenler, hızlı alışveriş yapanlar.

**Ne alınır-ne yapılır**
Kozmetik/bakım ürünleri ve dönemsel kampanyalar (stok değişebilir).

**Pratik ipuçları**
Marka/ürün çeşitliliği dönemsel değişebilir; ihtiyacın spesifikse önceden arayıp sormak mantıklı.

**Kısa özet**
Merkezde pratik kozmetik/bakım alışverişi için bir durak.`
},

// 7. onluk (61–70 / 72)

// 61) Minelli Butik
{
  id: "minelli-butik",
  title: "Minelli Butik",
  description: "Kaş çarşı içinde, kadın giyim ve aksesuar ağırlıklı seçkisiyle bilinen butik mağaza.",
  category: ["shopping"],
  image: "../assets/1_places/minelli-butik-001.jpg",
  images: [
    "../assets/1_places/minelli-butik-002.jpg",
    "../assets/1_places/minelli-butik-003.jpg",
    "../assets/1_places/minelli-butik-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Kaş Çarşı, Uzun Çarşı çevresi, Andifli/Kaş",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // net teyit yoksa Kaş merkez placeholder
  website: "",
  phone: "",
  duration: "20–45 dk",
  facilities: ["butik alışveriş"],
  features: ["seçki ürünler", "çarşı içinde", "hediyelik/aksesuar seçenekleri"],
  tags: ["butik", "giyim", "uzun-carsi"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Kaş çarşıdaki butiklerin havası genelde aynı: acele yok, bakınma var. Minelli tarzı dükkânlar, Uzun Çarşı turunun “biraz stil molası” kısmı gibi.

**Kimler için uygun**
Kadın giyim/aksesuar bakmak isteyenler, hediyelik ya da “tatilde bir parça alayım” diyenler.

**Ne alınır-ne yapılır**
Elbise, üst giyim, aksesuar gibi ürünler; seçki sezonluk değişebilir.

**Pratik ipuçları**
Çarşı içinde yürürken uğramalık. Sezon dışı açılış saatleri değişebilir.

**Kısa özet**
Kaş çarşıda giyim-aksesuar için butik bir durak.`
},

// 62) Uzun Çarşı
{
  id: "uzun-carsi",
  title: "Uzun Çarşı",
  description: "Kaş’ın en ikonik yürüyüş hattı; butik dükkânlar, hediyelikçiler, kafeler ve Aslanlı Lahit çevresini birleştiren çarşı bölgesi.",
  category: ["shopping", "places"],
  image: "../assets/1_places/uzun-carsi-001.jpg",
  images: [
    "../assets/1_places/uzun-carsi-002.jpg",
    "../assets/1_places/uzun-carsi-003.jpg",
    "../assets/1_places/uzun-carsi-004.jpg"
  ],
  rating: 4.7,
  price: "₺₺",
  selected: false,
  location: "Andifli, Kaş Merkez, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2010, lng: 29.6406 }, // çarşı hattı genel nokta
  website: "",
  phone: "",
  duration: "1–2 saat",
  facilities: ["kafe/restoran", "butikler", "hediyelikçiler", "bankamatik (yakın çevre)"],
  features: ["çarşı yürüyüşü", "hediyelik", "fotoğraf noktaları", "tarihle iç içe rota"],
  tags: ["kas-merkez", "shopping-walk", "iconic"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Uzun Çarşı, Kaş’ın “en Kaş” yürüyüş rotası. Dar sokak dokusu, küçük butik dükkânlar, taş duvarlar ve aralara serpiştirilmiş kafe/restoranlar… Üstüne bir de Aslanlı Lahit gibi tarihi bir simgeyle iç içe olunca, burada yürümek sadece alışveriş değil, atmosfer turu.

**Kimler için uygun**
Çarşı gezmeyi seven herkes. Hediyelik arayanlar, fotoğraf çekmek isteyenler, “biraz dolaşayım, sonra bir kahve içeyim” diyenler için birebir. Akşamüstü ve akşam saatlerinde daha hareketli.

**Ne alınır-ne yapılır**
El yapımı takılar, tekstil/keten ürünler, küçük tasarım objeler, magnet/hediyelikler… Bir de tabii yürürken arada kafe molası verilir. Aslanlı Lahit’in çevresinde kısa durup hikâyesini okumak (ya da fotoğraf çekmek) klasik.

**Pratik ipuçları**
Yaz akşamları kalabalık olur; daha sakin gezmek için sabah veya öğle saatleri iyi. Rahat ayakkabı önemli; sokaklar taşlık ve dar. Pazarlık bazı dükkânlarda mümkün, ama her yerde değil.

**Kısa özet**
Kaş merkezde butik, tarih ve “sokak ruhu”nu aynı hatta yaşatan ikonik çarşı yürüyüşü.`
},

// 63) Tuğra Art Gallery
{
  id: "tugra-art-gallery",
  title: "Tuğra Art Gallery",
  description: "Kaş’ta yerel/çağdaş eserlerin sergilendiği, çarşı içinde gezilebilen sanat galerisi.",
  category: ["shopping", "places", "articles"],
  image: "../assets/1_places/tugra-art-gallery-001.jpg",
  images: [
    "../assets/1_places/tugra-art-gallery-002.jpg",
    "../assets/1_places/tugra-art-gallery-003.jpg",
    "../assets/1_places/tugra-art-gallery-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez / Uzun Çarşı çevresi, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // placeholder
  website: "",
  phone: "",
  duration: "15–45 dk",
  facilities: ["galeri"],
  features: ["sanat eserleri", "çerçeve/hediyelik olasılığı", "kısa ziyaret"],
  tags: ["art", "gallery", "kas"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Kaş’ta galeriler genelde küçük ama karakterli olur. İçeri girince çarşının gürültüsü azalır, daha sakin bir “bakınma” başlar.

**Kimler için uygun**
Sanat meraklıları, çarşı turuna farklı bir mola eklemek isteyenler.

**Ne alınır-ne yapılır**
Sergiyi gezmek, beğenilen bir işi satın almak ya da sadece ilham almak. Bazı galerilerde küçük baskılar/objeler de olabiliyor.

**Pratik ipuçları**
Açılış saatleri sezon dışı değişebilir; kapalıysa hemen yakında başka galeri/dükkânlarla tur devam eder.

**Kısa özet**
Çarşı içinde kısa bir sanat molası için galeri durağı.`
},

// 64) Atelier Thalia
{
  id: "atelier-thalia",
  title: "Atelier Thalia",
  description: "Kaş’ta atölye/butik çizgisinde, el işi ve tasarım ürünler görebileceğin sanat odaklı mekân.",
  category: ["shopping", "places", "articles"],
  image: "../assets/1_places/atelier-thalia-001.jpg",
  images: [
    "../assets/1_places/atelier-thalia-002.jpg",
    "../assets/1_places/atelier-thalia-003.jpg",
    "../assets/1_places/atelier-thalia-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // placeholder
  website: "",
  phone: "",
  duration: "20–60 dk",
  facilities: ["atelier", "butik"],
  features: ["tasarım/el işi", "sınırlı seçki", "hediyelik"],
  tags: ["atelier", "tasarim", "kas"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Atölye hissi olan yerlerde “ürün bakmak” yerine “işin hikâyesine bakmak” da olur. Kaş’ta bu tarz mekânlar çarşı turuna güzel çeşitlilik katar.

**Kimler için uygun**
Tasarım ve el işi meraklıları, özgün hediyelik arayanlar.

**Ne alınır-ne yapılır**
El işi objeler, küçük tasarım parçalar; dönemsel üretimler değişebilir.

**Pratik ipuçları**
Bazı atölyeler belli gün/saat açık olur; denk gelmezsen üzülme, Kaş çarşıda benzer tarz çok.

**Kısa özet**
Tasarım/atölye dokusunu sevenlere çarşı içinde alternatif mola.`
},

// 65) Gallery Anatolia
{
  id: "gallery-anatolia",
  title: "Gallery Anatolia",
  description: "Kaş çarşı içinde, resim/seramik gibi Anadolu temalı eserler görebileceğin sanat galerisi/butik.",
  category: ["shopping", "places", "articles"],
  image: "../assets/1_places/gallery-anatolia-001.jpg",
  images: [
    "../assets/1_places/gallery-anatolia-002.jpg",
    "../assets/1_places/gallery-anatolia-003.jpg",
    "../assets/1_places/gallery-anatolia-004.jpg"
  ],
  rating: 0.0,
  price: "₺₺",
  selected: false,
  location: "Kaş Merkez, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.2019, lng: 29.6374 }, // placeholder
  website: "",
  phone: "",
  duration: "15–45 dk",
  facilities: ["galeri", "satış"],
  features: ["sanat/objeler", "hediyelik"],
  tags: ["galeri", "anatolia", "kas"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Çarşı içinde kısa bir “sanat molası” sunan yerlerden. Kaş’ta galeri gezerken zamanın yavaşlaması hoş olur.

**Kimler için uygun**
Sanat meraklıları ve özgün hediyelik arayanlar.

**Ne alınır-ne yapılır**
Eserlere bakmak, küçük objeler/baskılar almak (varsa).

**Pratik ipuçları**
Açılış saatleri sezon dışı değişebilir.

**Kısa özet**
Çarşı içinde Anadolu temalı sanat/hediyelik için galeri durağı.`
},

// 66) Antiphellos Antik Tiyatrosu
{
  id: "antiphellos-antik-tiyatrosu",
  title: "Antiphellos Antik Tiyatrosu",
  description: "Kaş’ın simge noktası; deniz manzarasına karşı oturan antik tiyatro, özellikle gün batımında çok etkileyici.",
  category: ["history", "places"],
  image: "../assets/1_places/antiphellos-antik-tiyatrosu-001.jpg",
  images: [
    "../assets/1_places/antiphellos-antik-tiyatrosu-002.jpg",
    "../assets/1_places/antiphellos-antik-tiyatrosu-003.jpg",
    "../assets/1_places/antiphellos-antik-tiyatrosu-004.jpg"
  ],
  rating: 4.8,
  price: "₺",
  selected: false,
  location: "Andifli, Kaş/Antalya (Tiyatro Yolu/Çevresi)",
  distance: "",
  coordinates: { lat: 36.19696, lng: 29.63669 },
  website: "",
  phone: "",
  duration: "30–60 dk",
  facilities: ["oturma basamakları", "manzara noktası"],
  features: ["gün batımı", "tarih", "Meis manzarası (hava açıksa)"],
  tags: ["antik", "tiyatro", "sunset"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Antiphellos Tiyatrosu Kaş’ın “sessiz ama çok etkileyici” yerlerinden. Basamaklara oturunca önünde deniz, karşıda ufuk ve çoğu zaman Meis silueti. Gün batımında ışık yumuşayınca tiyatronun taş dokusu başka bir havaya bürünür.

**Kimler için uygun**
Tarih sevenler, manzara avcıları, fotoğraf çekmeyi sevenler ve “Kaş’ta kısa ama anlamlı bir yürüyüş” arayanlar için ideal. Çocuklu aileler için de uygun; sadece basamaklar nedeniyle dikkat gerek.

**Ne alınır-ne yapılır**
Gün batımı izlemek klasik. Tiyatronun etrafında kısa bir yürüyüş yapıp Kaş’ın taş sokaklarına geri dönmek de güzel bir mini rota. Etkinlik denk gelirse (konser vb.) deneyimi farklılaşır.

**Pratik ipuçları**
Akşamüstü kalabalık olabilir; biraz daha erken gidip yer seçmek iyi olur. Basamaklar taş olduğu için rahat ayakkabı önerilir. Yazın güneş sertse su götür.

**Kısa özet**
Kaş’ın simge tarih noktası; deniz manzaralı antik tiyatro ve en iyi zamanı gün batımı.`
},

// 67) Aslanlı Lahit (Kral Mezarı)
{
  id: "aslanli-lahit",
  title: "Aslanlı Lahit (Kral Mezarı)",
  description: "Kaş Uzun Çarşı içinde yer alan, Likya dönemine ait ikonik lahit; Kaş’ın en fotoğraflanan simgelerinden.",
  category: ["history", "places"],
  image: "../assets/1_places/aslanli-lahit-001.jpg",
  images: [
    "../assets/1_places/aslanli-lahit-002.jpg",
    "../assets/1_places/aslanli-lahit-003.jpg",
    "../assets/1_places/aslanli-lahit-004.jpg"
  ],
  rating: 4.7,
  price: "₺",
  selected: false,
  location: "Uzun Çarşı, Andifli, Kaş/Antalya",
  distance: "",
  coordinates: { lat: 36.20138, lng: 29.64216 },
  website: "",
  phone: "",
  duration: "10–20 dk",
  facilities: ["açık alan"],
  features: ["Likya tarihi", "çarşı içinde", "fotoğraf noktası"],
  tags: ["likya", "iconic", "uzun-carsi"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Aslanlı Lahit, Kaş’ta yürürken bir anda karşına çıkan “tarih burada” anı. Çarşının içinde olması çok etkileyici: bir yanda dükkânlar, bir yanda binlerce yıllık taş bir eser.

**Kimler için uygun**
Herkes. Çünkü zaten çarşı turunda yolun üstünde. Tarih meraklısı olmasan bile durup bir iki dakika bakınca Kaş’ın ruhunu daha iyi yakalıyorsun.

**Ne alınır-ne yapılır**
Fotoğraf çekmek klasik. Üzerindeki yazı/işlemelere yakından bakmak da keyifli. Lahitin çevresindeki sokaklarda dolaşmak, “Kaş çarşı turu”nun en güzel kısmı.

**Pratik ipuçları**
Akşamüstü ve akşam kalabalık olur; sakin fotoğraf için sabah daha iyi. Çok kısa bir durak; ama etkisi büyük.

**Kısa özet**
Kaş’ın çarşı içindeki ikonik Likya eseri; kısa dur, bak, fotoğraf çek, devam et.`
},

// 68) Kaleköy (Simena Kalesi)
{
  id: "kalekoy-simena-kalesi",
  title: "Kaleköy (Simena Kalesi)",
  description: "Kaş yakınlarında, tekneyle ulaşılan tarihi köy; Simena Kalesi’nden Kekova manzarasıyla ünlü.",
  category: ["history", "nature", "places"],
  image: "../assets/1_places/kalekoy-simena-kalesi-001.jpg",
  images: [
    "../assets/1_places/kalekoy-simena-kalesi-002.jpg",
    "../assets/1_places/kalekoy-simena-kalesi-003.jpg",
    "../assets/1_places/kalekoy-simena-kalesi-004.jpg"
  ],
  rating: 4.8,
  price: "₺₺",
  selected: false,
  location: "Kaleköy (Simena), Demre/Antalya",
  distance: "Kaş merkezden ~35–45 km (tekne/rota ile)",
  coordinates: { lat: 36.18590, lng: 29.85690 },
  website: "",
  phone: "",
  duration: "2–4 saat (tur planına göre)",
  facilities: ["tekne ile ulaşım", "kafe/restaurant", "kale girişi"],
  features: ["kale manzarası", "tarihi köy", "Kekova hattı"],
  tags: ["simena", "kalekoy", "kekova"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Kaleköy’e yaklaşırken bile “burası başka” hissi gelir: kıyıya dizilmiş küçük evler, tekne sesleri ve tepede kale. Köy trafiğe kapalı, bu yüzden ortam doğal olarak daha sakin.

**Kimler için uygun**
Kekova hattını görmek isteyen herkes. Tarih + manzara + kısa yürüyüş kombinini sevenler için ideal. Merdiven/yokuş sevmeyenler için kaleye çıkış yorucu olabilir ama köyde dolaşmak bile keyif.

**Ne alınır-ne yapılır**
Köy içinde kısa tur, dondurma/soğuk içecek molası, sonra Simena Kalesi’ne tırmanıp manzarayı izlemek. Kale yukarıdan Kekova’yı “harita gibi” gösterir.

**Pratik ipuçları**
Kale çıkışı için rahat ayakkabı şart. Yazın güneş sert; su ve şapka iyi olur. Tekne turlarında süre sınırlı olabilir; kaleye çıkacaksan zamanı iyi kullan.

**Kısa özet**
Tekneyle ulaşılan tarihi köy + kale manzarası: Kekova rotasının en sevilen duraklarından.`
},

// 69) Kekova Batık Şehir
{
  id: "kekova-batik-sehir",
  title: "Kekova Batık Şehir",
  description: "Kekova adası çevresinde, kıyı boyunca su altında kalan antik kalıntıları tekneyle izleyebileceğin koruma alanı.",
  category: ["history", "nature", "places"],
  image: "../assets/1_places/kekova-batik-sehir-001.jpg",
  images: [
    "../assets/1_places/kekova-batik-sehir-002.jpg",
    "../assets/1_places/kekova-batik-sehir-003.jpg",
    "../assets/1_places/kekova-batik-sehir-004.jpg"
  ],
  rating: 4.7,
  price: "₺₺",
  selected: false,
  location: "Kekova, Demre/Antalya",
  distance: "Kaş merkezden ~35–45 km (tekne/rota ile)",
  coordinates: { lat: 36.1737, lng: 29.8733 },
  website: "",
  phone: "",
  duration: "1–2 saat (tur planına göre)",
  facilities: ["tekne turu", "rehber anlatımı (tura göre)"],
  features: ["batık kalıntılar", "berrak su", "tarihle denizin birleşimi"],
  tags: ["batik-sehir", "kekova", "tekne-turu"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Kekova Batık Şehir’de atmosfer biraz “müze gibi” ama açık havada. Tekne yavaşlar, herkes suyun altına bakar; bazen taş duvar çizgileri, basamaklar, yapı izleri seçilir. Berrak günlerde görüntü çok daha etkileyici.

**Kimler için uygun**
Tarihle ilgilenenler, tekne turuna anlam katmak isteyenler, “suda tarih görmek” fikrini sevenler.

**Ne alınır-ne yapılır**
Teknede sakin bir izleme. Bazı turlarda kano/SUP gibi alternatifler de olur ama batık şehir bölgesinde kurallar sıkı olabilir; operatör ne diyorsa ona uymak gerekir.

**Pratik ipuçları**
Cam gibi deniz günlerinde görüntü harika olur; rüzgâr varsa su dalgalanır, görünürlük düşer. Polarize güneş gözlüğü su altını seçmeyi kolaylaştırır.

**Kısa özet**
Tekneyle geçerken su altındaki antik izleri gördüğün, Kekova rotasının “en farklı” noktası.`
},

// 70) Aperlai Antik Kenti
{
  id: "aperlai-antik-kenti",
  title: "Aperlai Antik Kenti",
  description: "Kekova hattında, daha sakin kalan Likya antik yerleşimi; karadan yürüyüş veya tekne rotalarıyla görülebilir.",
  category: ["history", "nature", "places"],
  image: "../assets/1_places/aperlai-antik-kenti-001.jpg",
  images: [
    "../assets/1_places/aperlai-antik-kenti-002.jpg",
    "../assets/1_places/aperlai-antik-kenti-003.jpg",
    "../assets/1_places/aperlai-antik-kenti-004.jpg"
  ],
  rating: 4.6,
  price: "₺",
  selected: false,
  location: "Aperlai, Demre/Antalya (Kekova çevresi)",
  distance: "Kaş merkezden ~40–55 km (rota ile)",
  coordinates: { lat: 36.1822, lng: 29.8446 },
  website: "",
  phone: "",
  duration: "1–2 saat",
  facilities: ["açık alan", "yürüyüş rotası (duruma göre)"],
  features: ["daha sakin antik kent", "doğa içinde", "Likya izleri"],
  tags: ["aperlai", "likya", "kekova-hatti"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Aperlai, “turist kalabalığı az, doğa daha çok” hissi veren antik yerlerden. Çevresi daha sessiz; kalıntılar doğayla iç içe. Bu yüzden gezmesi biraz keşif gibi.

**Kimler için uygun**
Kalabalık sevmeyen tarih meraklıları, yürüyüşü sevenler ve Kekova hattında daha az bilinen bir nokta görmek isteyenler.

**Ne alınır-ne yapılır**
Kalıntılar arasında kısa bir yürüyüş, kıyı çizgisini izleme ve fotoğraf. Tekne rotasıyla geçiliyorsa, kısa durak şeklinde de olabilir.

**Pratik ipuçları**
Yürüyüş zemini taşlık olabilir; rahat ayakkabı şart. Güneş ve su hazırlığı önemli. Ulaşım şekli (tekne mi, karadan mı) deneyimi değiştirir.

**Kısa özet**
Kekova hattında daha sakin, doğa içinde bir Likya antik kenti.`
}
,
// 8. onluk (71–72 / 72)  ✅ son parça

// 71) Patara Plajı
{
  id: "patara-plaji",
  title: "Patara Plajı",
  description: "Türkiye’nin en uzun ve en geniş kumsallarından; kum tepeleri ve gün batımıyla ünlü, Kaş çevresinin ikonik plajı.",
  category: ["beaches", "nature", "places"],
  image: "../assets/1_places/patara-plaji-001.jpg",
  images: [
    "../assets/1_places/patara-plaji-002.jpg",
    "../assets/1_places/patara-plaji-003.jpg",
    "../assets/1_places/patara-plaji-004.jpg"
  ],
  rating: 4.8,
  price: "₺₺",
  selected: false,
  location: "Patara, Gelemiş Mah., Kaş/Antalya",
  distance: "Kaş merkezden ~40–45 km",
  coordinates: { lat: 36.2759, lng: 29.3176 },
  website: "",
  phone: "",
  duration: "2–4 saat (tam gün de olur)",
  facilities: ["geniş kumsal", "şezlong/şemsiye (sezona göre)", "kafe/büfe (sezona göre)", "WC/duş (sezona göre)"],
  features: ["çok uzun kumsal", "kum tepeleri", "gün batımı", "rüzgarlı günler"],
  tags: ["patara", "kumsal", "sunset", "dogal-plaj"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Patara, “plaj” kelimesinin bildiğin karşılığı: uçsuz bucaksız kum, geniş bir ufuk ve yürüdükçe açılan bir sessizlik. Kaş’ta taşlık/platform denizlere alışınca, burada kumun verdiği rahatlık çok iyi gelir. Kum tepeleri ve gün batımı da atmosferi iyice sinematik yapar.

**Kimler için uygun**
Kumsal seven herkes için uygun. Uzun yürüyüş yapmayı sevenler, çocuklu aileler (kum avantaj), fotoğraf çekmeyi sevenler ve “kalabalıktan kaçayım” diyenler burada mutlu olur. Rüzgârlı günlerde deniz dalgalanabilir; o gün daha çok sahil yürüyüşü gibi düşünmek gerekir.

**Ne alınır-ne yapılır**
Kumda uzun yürüyüş, deniz keyfi, kum tepelerinde kısa bir “manzara molası”. Gün batımı planlayanlar için en güzel saatler akşamüstü. İstersen plaj + Patara Antik Kenti’ni aynı güne de koyabilirsin; yorucu ama çok dolu bir gün olur.

**Pratik ipuçları**
Güneş burada çok yakar; şapka, güneş kremi, su şart. Rüzgâr varsa kum uçuşabilir; gözlük iyi gelir. Aracın varsa ulaşım kolay; toplu taşımada plan yapmak gerekebilir.

**Kısa özet**
Kaş çevresinin en ikonik kumsalı: dev gibi sahil, kum tepeleri ve efsane gün batımı.`
},

// 72) Patara Antik Kenti
{
  id: "patara-antik-kenti",
  title: "Patara Antik Kenti",
  description: "Likya’nın önemli kentlerinden; tiyatro, meclis binası ve anıtsal kapı gibi yapılarıyla öne çıkan büyük arkeolojik alan.",
  category: ["history", "places", "nature"],
  image: "../assets/1_places/patara-antik-kenti-001.jpg",
  images: [
    "../assets/1_places/patara-antik-kenti-002.jpg",
    "../assets/1_places/patara-antik-kenti-003.jpg",
    "../assets/1_places/patara-antik-kenti-004.jpg"
  ],
  rating: 4.7,
  price: "₺₺",
  selected: false,
  location: "Patara (Gelemiş), Kaş/Antalya",
  distance: "Kaş merkezden ~40–45 km",
  coordinates: { lat: 36.2748, lng: 29.3199 },
  website: "",
  phone: "",
  duration: "1.5–3 saat",
  facilities: ["otopark (yakın çevre)", "bilet gişesi (sezona göre)", "yürüyüş rotaları", "bilgilendirme panoları"],
  features: ["Likya tarihi", "geniş alan", "anıtsal yapılar", "doğa içinde gezi"],
  tags: ["patara", "likya", "antik-kent", "arkeoloji"],
  trust: { verified: true, infoDate: "2025-12-23", disclaimer: true },
  longText: `**Atmosfer**
Patara Antik Kenti genişliğiyle etkileyen yerlerden. Birkaç yapı görüp çıkayım değil; yürüdükçe açılan bir alan. Kum, rüzgâr ve düzlükler yüzünden bazen “antik kent”ten çok “zamanın içinde bir manzara” gibi hissettirir. Bu da Patara’yı özel yapar.

**Kimler için uygun**
Tarih meraklıları, fotoğraf sevenler ve “büyük arkeolojik alan gezmeyi” sevenler için ideal. Çok kısa sürede hızlı tur isteyenler için zorlayıcı olabilir; çünkü alan büyük ve yürüyüş ister.

**Ne alınır-ne yapılır**
Anıtsal kapı, tiyatro, meclis binası gibi öne çıkan yapıları takip ederek bir rota yapmak iyi olur. Zamanın varsa yavaş yavaş gezip detaylarda kaybolmak daha keyifli. Aynı gün Patara Plajı’na da geçmek en popüler kombin.

**Pratik ipuçları**
Rahat ayakkabı, su ve güneş koruması şart. Yazın öğle sıcağında gezmek zorlayabilir; sabah veya geç öğleden sonra daha konforlu.

**Kısa özet**
Geniş ölçekte Likya tarihi: yürüyüşlü, etkileyici ve Patara Plajı’yla mükemmel ikili.`
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