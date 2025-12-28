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
        el("p", { text: "İlk paylaşımı yapmak için “Pet Ekle” sayfasını kullanabilirsin." })
      ]));
      return;
    }

    const wrap = el("div", { class: "pet-wrap" });

    window.pets.forEach((p) => {
      const title = (p.type === "kedi") ? "Kedi" : "Köpek";

      const head = el("div", { class: "pet-head" }, [
        el("div", {}, [
          el("h2", { class: "pet-title", text: `${title} • ${p.id}` }),
          el("div", { class: "pet-meta", text: `Tarih: ${p.createdAt || "-"}` })
        ]),
        el("div", { class: "pet-tags" }, [
          el("span", { class: "pet-tag", text: `Yaş: ${p.age || "-"}` }),
          el("span", { class: "pet-tag", text: `Cins: ${p.breed || "-"}` })
        ])
      ]);

      const noteParts = [];
      if (p.shortNote) noteParts.push(`Kısa Not:\n${p.shortNote}`);
      if (p.extraNotes) noteParts.push(`\nBize Not:\n${p.extraNotes}`);

      const body = el("div", { class: "pet-body" }, [
        el("p", { class: "pet-note", text: noteParts.join("\n") || "-" })
      ]);

      const photos = Array.isArray(p.photos) ? p.photos : [];
      if (photos.length){
        const grid = el("div", { class: "pet-grid" });
        photos.slice(0, 5).forEach((src) => {
          const img = el("img", { src, alt: "Pet fotoğrafı" });
          const box = el("div", { class: "pet-photo" }, [img]);
          grid.appendChild(box);
        });
        body.appendChild(grid);
      }

      const card = el("article", { class: "pet-card" }, [head, body]);
      wrap.appendChild(card);
    });

    root.innerHTML = "";
    root.appendChild(wrap);
  }

  render();
})();
