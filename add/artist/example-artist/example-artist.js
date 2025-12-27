const LS_KEY = "artistsDraft_v1";

function safeUrl(v){
  if(!v) return "";
  const s = String(v).trim();
  if(!s) return "";
  try { return new URL(s).toString(); } catch { return ""; }
}

function setSocialLink(el, url){
  if(!el) return;
  if(url){
    el.href = url;
    el.classList.add("is-active");
    el.setAttribute("aria-disabled","false");
    el.tabIndex = 0;
  }else{
    el.href = "#";
    el.classList.remove("is-active");
    el.setAttribute("aria-disabled","true");
    el.tabIndex = -1;
  }
}

function placeholderSvg(kind){
  // Basit, hafif placeholder (data:image/svg+xml)
  const bg = kind === "banner" ? "#f2f2f2" : "#f2f2f2";
  const stroke = "#cfcfcf";
  const text = kind === "banner" ? "BANNER" : "PROFIL";
  const w = kind === "banner" ? 1200 : 400;
  const h = kind === "banner" ? 500 : 400;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <rect width="100%" height="100%" fill="${bg}"/>
      <rect x="18" y="18" width="${w-36}" height="${h-36}" fill="none" stroke="${stroke}" stroke-width="6" rx="24"/>
      <g fill="${stroke}" font-family="Arial, Helvetica, sans-serif" font-size="${kind === "banner" ? 56 : 44}" font-weight="700">
        <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle">${text}</text>
      </g>
    </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

(function(){
  const dRaw = localStorage.getItem(LS_KEY);
  let d = {};
  try { d = dRaw ? JSON.parse(dRaw) : {}; } catch { d = {}; }

  const nameEl = document.getElementById("name");
  const shortEl = document.getElementById("shortText");
  const longEl = document.getElementById("longText");
  const catsEl = document.getElementById("cats");
  const notesWrap = document.getElementById("notesWrap");
  const notesEl = document.getElementById("notes");

  const banner = document.getElementById("banner");
  const avatar = document.getElementById("avatar");

  if(nameEl) nameEl.textContent = d?.artistName || "—";
  if(shortEl) shortEl.textContent = d?.shortText || "Kısa tanım burada gözükecek.";
  if(longEl){
    const longText = (d?.longText || "").trim();
    longEl.textContent = longText || "Detaylı tanıtım burada gözükecek.";
  }

  // Kategoriler (telefon/e-posta hariç her şey gözüksün)
  if(catsEl){
    catsEl.innerHTML = "";
    const cats = Array.isArray(d?.artistCategory) ? d.artistCategory : (d?.artistCategory ? [String(d.artistCategory)] : []);
    const clean = cats.map(x => String(x).trim()).filter(Boolean);
    if(clean.length){
      clean.forEach(c => {
        const span = document.createElement("span");
        span.className = "cat";
        span.textContent = c;
        catsEl.appendChild(span);
      });
    }else{
      const span = document.createElement("span");
      span.className = "cat cat--muted";
      span.textContent = "Kategori seçilmedi";
      catsEl.appendChild(span);
    }
  }

  // Notlar (varsa)
  const notes = (d?.notes || "").trim();
  if(notesWrap && notesEl){
    if(notes){
      notesWrap.hidden = false;
      notesEl.textContent = notes;
    }else{
      notesWrap.hidden = true;
      notesEl.textContent = "";
    }
  }

  // Foto önizleme (sessionStorage dataURL). Yoksa placeholder.
  try{
    const av = sessionStorage.getItem("artistsDraft_profileDataUrl");
    const bn = sessionStorage.getItem("artistsDraft_bannerDataUrl");

    if(banner){
      banner.src = bn || placeholderSvg("banner");
    }
    if(avatar){
      avatar.src = av || placeholderSvg("avatar");
    }
  }catch{
    if(banner) banner.src = placeholderSvg("banner");
    if(avatar) avatar.src = placeholderSvg("avatar");
  }

  // Sosyaller: default ikonlar hep görünsün, dolu olanlar yeşillensin
  const ig = safeUrl(d?.instagram);
  const yt = safeUrl(d?.youtube);
  const ml = safeUrl(d?.musicLink);
  const ws = safeUrl(d?.website);

  setSocialLink(document.getElementById("sInstagram"), ig);
  setSocialLink(document.getElementById("sYouTube"), yt);
  setSocialLink(document.getElementById("sMusic"), ml);
  setSocialLink(document.getElementById("sWeb"), ws);
})();
