const categories = [
  // İlk Sıra - Yeme İçme
  {
    id: 'bar',
    name: 'Bar',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M5 3h14M5 3v4l7 7v10M19 3v4l-7 7"/>
    </svg>`,
    color: 'category-orange'
  },
  {
    id: 'meyhane',
    name: 'Meyhane',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v20M8 2h8M10 6h4M9 10h6"/>
    </svg>`,
    color: 'category-purple'
  },
  {
    id: 'restoran',
    name: 'Restoran',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 3v7"/>
      <path d="M6 3v7"/>
      <path d="M8 3v7"/>
      <path d="M6 10v11"/>
      <path d="M14 3c2 3 2 6 0 9v9"/>
    </svg>`,
    color: 'category-red'
  },
  {
    id: 'cafe',
    name: 'Cafe',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    </svg>`,
    color: 'category-teal'
  },
  {
    id: 'kahvalti',
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

  // İkinci Sıra - Aktivite & Kültür
  {
    id: 'tarih',
    name: 'Tarih',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
      <path d="M12 6v6l4 2"/>
    </svg>`,
    color: 'category-indigo'
  },
  {
    id: 'doga',
    name: 'Doğa',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2a10 10 0 0 0-8 16"/>
      <path d="M12 2a10 10 0 0 1 8 16"/>
      <path d="M12 10v4"/>
      <path d="M12 16v2"/>
    </svg>`,
    color: 'category-green'
  },
  {
    id: 'dalis',
    name: 'Dalış',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M2 12c.6-1.2 1.5-2.4 2.5-3.5"/>
      <path d="M22 12c-.6-1.2-1.5-2.4-2.5-3.5"/>
      <path d="M2 16c.6 1.2 1.5 2.4 2.5 3.5"/>
      <path d="M22 16c-.6 1.2-1.5 2.4-2.5 3.5"/>
    </svg>`,
    color: 'category-cyan'
  },
  {
    id: 'aktivite',
    name: 'Aktivite',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
    </svg>`,
    color: 'category-amber'
  },
  {
    id: 'sanatci',
    name: 'Sanatçı',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>`,
    color: 'category-pink'
  },

  // Son Sıra - Diğer
  {
    id: 'carsi',
    name: 'Çarşı',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2.82 2.82 0 0 0 2 1.61h9.72a2.82 2.82 0 0 0 2-1.61L23 6H6"/>
    </svg>`,
    color: 'category-gray'
  },
  {
    id: 'articles',
    name: 'Yazılar',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>`,
    color: 'category-slate',
    action: { type: 'page', href: 'articles/articles.html' }
  },
  {
    id: 'faqspecial',
    name: 'Özel Soru Serileri',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16v14H5.5L4 19.5V4z"/>
      <path d="M8 8h8"/>
      <path d="M8 12h8"/>
      <path d="M8 16h5"/>
    </svg>`,
    color: 'category-violet',
    action: { type: 'page', href: 'faqspecial/faqspecial.html' }
  },
  {
    id: 'places',
    name: 'Gezi',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>`,
    color: 'category-blue'
  },
  {
    id: 'plaj',
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
    id: 'roportaj',
    name: 'Röportaj',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" y1="19" x2="12" y2="22"/>
      <line x1="8" y1="22" x2="16" y2="22"/>
    </svg>`,
    color: 'category-purple'
  },
  {
    id: 'fotograf',
    name: 'Fotoğraf',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>`,
    color: 'category-indigo'
  },
  {
    id: 'acildurum',
    name: 'Acil Durum',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>`,
    color: 'category-red'
  },

  // Special item types (hotels, pets) - separate forms
  {
    id: 'hotels',
    name: 'Oteller',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M2 4v16"/>
      <path d="M2 8h18a2 2 0 0 1 2 2v10"/>
      <path d="M2 17h20"/>
      <path d="M6 8v9"/>
    </svg>`,
    color: 'category-amber',
    action: { type: 'page', href: 'owner/owner.html?type=hotel' }
  },
  {
    id: 'pets',
    name: 'Patili Dostlar',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="4" r="2"/>
      <circle cx="18" cy="8" r="2"/>
      <circle cx="20" cy="16" r="2"/>
      <path d="M9 10a5 5 0 0 1 5 5v6h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1"/>
    </svg>`,
    color: 'category-rose',
    action: { type: 'page', href: 'owner/owner.html?type=pet' }
  }
];
