/* pet-data.js
   - Demo dataset
   - Gerçekte backend'den geliyorsa burası generate edilebilir.
*/

const pets = [
  {
    id: "pet-001",
    type: "kedi",
    age: "1-2 yaş",
    breed: "Tekir (mix)",
    shortNote: "Çukurbağ tarafında görüldü. İnsanlara alışık gibi, sakin. Boynunda tasma yoktu.",
    extraNotes: "Gün batımı saatlerinde daha çok ortaya çıkıyor.",
    photos: [
      "../assets/0_img/placeholder.jpg",
      "../assets/0_img/placeholder.jpg"
    ],
    createdAt: "2025-12-28"
  },
  {
    id: "pet-002",
    type: "kopek",
    age: "Yaklaşık 3 yaş",
    breed: "Golden (mix)",
    shortNote: "Kalkan yolunda gölgede dinleniyordu. Su verilince içti. Agresif değil.",
    extraNotes: "",
    photos: [
      "../assets/0_img/placeholder.jpg"
    ],
    createdAt: "2025-12-28"
  }
];
