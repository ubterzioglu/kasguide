const categories = [
  {
    id: 'places',
    name: 'Gezi',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>`,
    color: 'category-orange'
  },
  {
    id: 'beaches',
    name: 'Plaj',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M2 12h.01"/>
      <path d="M20 12h.01"/>
      <path d="M6 12h.01"/>
      <path d="M18 12h.01"/>
      <path d="M10 12h.01"/>
      <path d="M14 12h.01"/>
      <path d="M2 8c6-4.5 14-4.5 20 0"/>
      <path d="M2 16c6 4.5 14 4.5 20 0"/>
    </svg>`,
    color: 'category-cyan'
  },
  {
    id: 'activities',
    name: 'Aktivite',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
    </svg>`,
    color: 'category-green'
  },
{
  id: 'food',
  name: 'Yeme-İçme',
  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- Çatal -->
    <path d="M4 3v7"/>
    <path d="M6 3v7"/>
    <path d="M8 3v7"/>
    <path d="M6 10v11"/>
    <!-- Bıçak -->
    <path d="M14 3c2 3 2 6 0 9v9"/>
  </svg>`,
  color: 'category-red'
},

  {
    id: 'hotels',
    name: 'Otel',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M2 4v16"/>
      <path d="M2 8h18a2 2 0 0 1 2 2v10"/>
      <path d="M2 17h20"/>
      <path d="M6 8v9"/>
    </svg>`,
    color: 'category-purple'
  },
  {
    id: 'history',
    name: 'Tarih',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
      <path d="M12 6v6l4 2"/>
    </svg>`,
    color: 'category-indigo'
  },
  {
    id: 'nature',
    name: 'Doğa',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2a10 10 0 0 0-8 16"/>
      <path d="M12 2a10 10 0 0 1 8 16"/>
      <path d="M12 10v4"/>
      <path d="M12 16v2"/>
    </svg>`,
    color: 'category-blue'
  },
  {
    id: 'shopping',
    name: 'Çarşı',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2.82 2.82 0 0 0 2 1.61h9.72a2.82 2.82 0 0 0 2-1.61L23 6H6"/>
    </svg>`,
    color: 'category-gray'
  },

  // sayfa action'ı olanalar aynı kalır (Kahvaltı)
    {
    id: 'breakfast',
    name: 'Kahvaltı',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v7a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <path d="M6 1v3"/>
      <path d="M10 1v3"/>
      <path d="M14 1v3"/>
    </svg>`,
    color: 'category-lime'
  },
// BUNLAR ARTIK dataset switch değil -> normal filtre
  {
    id: 'faqspecial',
    name: 'Özel Soru Serileri',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16v14H5.5L4 19.5V4z"/>
      <path d="M8 8h8"/>
      <path d="M8 12h8"/>
      <path d="M8 16h5"/>
    </svg>`,
    color: 'category-violet'
  },

  {
    id: 'meyhane',
    name: 'Meyhane',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M8 2h8v6a4 4 0 0 1-8 0V2z"/>
      <path d="M10 14v6"/>
      <path d="M14 14v6"/>
      <path d="M8 20h8"/>
    </svg>`,
    color: 'category-wine'
  },
  {
    id: 'bar',
    name: 'Bar',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M6 2h12l-5 8v8a2 2 0 0 1-2 2H9"/>
      <path d="M12 10H7"/>
    </svg>`,
    color: 'category-pink'
  },
  {
    id: 'cafe',
    name: 'Cafe',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v7a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <path d="M6 1v3"/>
      <path d="M10 1v3"/>
      <path d="M14 1v3"/>
    </svg>`,
    color: 'category-amber'
  },
  {
    id: 'diving',
    name: 'Dalış',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M2 12c3-3 7-3 10 0s7 3 10 0"/>
      <path d="M4 16c2-2 5-2 7 0s5 2 7 0"/>
      <path d="M12 6v6"/>
      <path d="M10 8l2-2 2 2"/>
    </svg>`,
    color: 'category-teal'
  },

  // dataset switch kaldırıldı -> normal filtre
  {
    id: 'articles',
    name: 'Yazılar',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20"/>
      <path d="M20 2H6.5A2.5 2.5 0 0 0 4 4.5v15"/>
      <path d="M8 7h10"/>
      <path d="M8 11h10"/>
      <path d="M8 15h7"/>
    </svg>`,
    color: 'category-slate'
  }
];
