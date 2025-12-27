const LS_KEY = "artistsDraft_v1";

function strip(v){
  return (v ?? "").toString().trim();
}

function normalizeUrl(raw, type){
  const v = strip(raw);
  if(!v) return "";

  // Instagram handle shortcuts
  if(type === "instagram"){
    if(v.startsWith("@")){
      const handle = v.slice(1).trim();
      return handle ? `https://instagram.com/${handle}` : "";
    }

    // 'kullaniciadi' -> instagram.com/kullaniciadi
    if(!v.includes("/") && !v.includes(".") && v.length >= 2){
      return `https://instagram.com/${v}`;
    }

    // 'instagram.com/x' -> https://instagram.com/x
    if(!/^https?:\/\//i.test(v) && v.toLowerCase().includes("instagram.com")){
      return `https://${v}`;
    }
  }

  // If missing scheme, assume https
  const withScheme = /^https?:\/\//i.test(v) ? v : `https://${v}`;
  try{ return new URL(withScheme).toString(); }catch{ return ""; }
}

function setImgOrPlaceholder(imgEl, dataUrl, variant){
  if(dataUrl){
    imgEl.src = dataUrl;
    return;
  }

  // Lightweight embedded SVG placeholders
  const svg = (variant === "avatar")
    ? `<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'>
         <defs>
           <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
             <stop offset='0' stop-color='#e2e8f0'/>
             <stop offset='1' stop-color='#cbd5e1'/>
           </linearGradient>
         </defs>
         <rect width='100%' height='100%' rx='34' fill='url(#g)'/>
         <circle cx='130' cy='110' r='46' fill='#94a3b8' opacity='0.55'/>
         <rect x='60' y='170' width='140' height='60' rx='30' fill='#94a3b8' opacity='0.38'/>
       </svg>`
    : `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='600'>
         <defs>
           <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
             <stop offset='0' stop-color='#cbd5e1'/>
             <stop offset='1' stop-color='#94a3b8'/>
           </linearGradient>
         </defs>
         <rect width='100%' height='100%' fill='url(#g)'/>
         <text x='50%' y='52%' text-anchor='middle' font-family='Segoe UI, Arial' font-size='92' fill='#0f172a' opacity='0.18'>BANNER</text>
       </svg>`;

  imgEl.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function setSocialButton(aEl, url){
  const u = strip(url);
  aEl.classList.remove("is-active","is-disabled");
  if(u){
    aEl.href = u;
    aEl.classList.add("is-active");
    aEl.setAttribute("aria-disabled","false");
  }else{
    aEl.href = "#";
    aEl.classList.add("is-disabled");
    aEl.setAttribute("aria-disabled","true");
  }
}

function renderTags(rootEl, cats){
  rootEl.innerHTML = "";
  const list = Array.isArray(cats)
    ? cats
    : (cats ? [String(cats)] : []);

  list
    .map((x) => strip(x))
    .filter(Boolean)
    .forEach((label) => {
      const s = document.createElement("span");
      s.className = "tag";
      s.textContent = label;
      rootEl.appendChild(s);
    });
}

(function init(){
  const nameEl = document.getElementById("name");
  const tagsEl = document.getElementById("tags");
  const shortEl = document.getElementById("shortText");
  const longEl = document.getElementById("longText");
  const notesWrap = document.getElementById("notesWrap");
  const notesEl = document.getElementById("notes");
  const avatarEl = document.getElementById("avatar");
  const bannerEl = document.getElementById("banner");

  const aIg = document.getElementById("socialInstagram");
  const aYt = document.getElementById("socialYoutube");
  const aMu = document.getElementById("socialMusic");
  const aWeb = document.getElementById("socialWeb");

  let d = null;
  try{
    const raw = localStorage.getItem(LS_KEY);
    d = raw ? JSON.parse(raw) : null;
  }catch{}

  const profileDataUrl = sessionStorage.getItem("artistsDraft_profileDataUrl") || "";
  const bannerDataUrl  = sessionStorage.getItem("artistsDraft_bannerDataUrl") || "";

  setImgOrPlaceholder(avatarEl, profileDataUrl, "avatar");
  setImgOrPlaceholder(bannerEl, bannerDataUrl, "banner");

  const name = strip(d?.artistName) || "Sahne Adı";
  const shortText = strip(d?.shortText) || "Kısa tanıtım burada gözükecek.";
  const longText = strip(d?.longText) || "Detaylı tanıtım burada gözükecek.";
  const notes = strip(d?.notes);

  nameEl.textContent = name;
  shortEl.textContent = shortText;
  longEl.textContent = longText;
  renderTags(tagsEl, d?.artistCategory);

  // Notes: only show if provided
  if(notes){
    notesEl.textContent = notes;
    notesWrap.hidden = false;
  }else{
    notesWrap.hidden = true;
  }

  // Social buttons: always visible; active ones turn green
  const ig = normalizeUrl(d?.instagram, "instagram");
  const yt = normalizeUrl(d?.youtube, "youtube");
  const ml = normalizeUrl(d?.musicLink, "music");
  const ws = normalizeUrl(d?.website, "web");

  setSocialButton(aIg, ig);
  setSocialButton(aYt, yt);
  setSocialButton(aMu, ml);
  setSocialButton(aWeb, ws);
})();
