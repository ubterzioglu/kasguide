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
    '../assets/1_places/ci-neo-cucina-by-mezetaryen-004.jpg',
    '../assets/1_places/ci-neo-cucina-by-mezetaryen-005.jpg'
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

  image: 'the-shotlar-terminali-001.jpg',
  images: [
    '../assets/1_places/the-shotlar-terminali-002.jpg',
    '../assets/1_places/the-shotlar-terminali-003.jpg',
    '../assets/1_places/the-shotlar-terminali-004.jpg'
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