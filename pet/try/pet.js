/* pet.js
   - pets dataset'i render eder
*/

(() => {
  const root = document.getElementById("petRoot");
  if (!root) return;

  function el(tag, attrs={}, children=[]){
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k,v]) => {
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v);
    });
    children.forEach((c) => node.appendChild(c));
    return node;
  }

  function render(){
    if (!Array.isArray(window.pets) || window.pets.length === 0){
      root.innerHTML = "";
      root.appendChild(el("div", { class: "pet-empty" }, [
        el("h2", { text: "Henüz içerik yok" }),
        el("p", { text: "İlk paylaşımı yapmak için "Pet Ekle" sayfasını kullanabilirsin." })
      ]));
      return;
    }

    const wrap = el("div", { class: "pet-wrap" });

    window.pets.forEach((p) => {
      const isCat = p.type === "kedi";
      const typeText = isCat ? "🐱 Kedi" : "🐕 Köpek";
      const badgeClass = isCat ? "pet-type-badge cat" : "pet-type-badge dog";

      // Header
      const typeBadge = el("span", { class: badgeClass, text: typeText });
      
      const titleGroup = el("div", { class: "pet-title-group" }, [
        typeBadge,
        el("h2", { class: "pet-title", text: p.id }),
        el("div", { class: "pet-meta", text: p.createdAt || "-" })
      ]);

      const headerRow = el("div", { class: "pet-header-row" }, [titleGroup]);
      const head = el("div", { class: "pet-head" }, [headerRow]);

      // Body - Info Grid
      const infoGrid = el("div", { class: "pet-info-grid" }, [
        el("div", { class: "pet-info-item" }, [
          el("div", { class: "pet-info-label", text: "Yaş" }),
          el("div", { class: "pet-info-value", text: p.age || "-" })
        ]),
        el("div", { class: "pet-info-item" }, [
          el("div", { class: "pet-info-label", text: "Cins" }),
          el("div", { class: "pet-info-value", text: p.breed || "-" })
        ])
      ]);

      const bodyChildren = [infoGrid];

      // Notes
      if (p.shortNote || p.extraNotes) {
        const noteParts = [];
        if (p.shortNote) noteParts.push(`📝 Kısa Not:\n${p.shortNote}`);
        if (p.extraNotes) noteParts.push(`\n💬 Ek Notlar:\n${p.extraNotes}`);
        
        bodyChildren.push(
          el("p", { class: "pet-note", text: noteParts.join("\n") })
        );
      }

      // Photos
      const photos = Array.isArray(p.photos) ? p.photos : [];
      if (photos.length){
        const grid = el("div", { class: "pet-grid" });
        photos.slice(0, 5).forEach((src) => {
          const img = el("img", { src, alt: "Pet fotoğrafı" });
          const box = el("div", { class: "pet-photo" }, [img]);
          grid.appendChild(box);
        });
        bodyChildren.push(grid);
      }

      const body = el("div", { class: "pet-body" }, bodyChildren);

      const card = el("article", { class: "pet-card" }, [head, body]);
      wrap.appendChild(card);
    });

    root.innerHTML = "";
    root.appendChild(wrap);
  }

  render();
})();
