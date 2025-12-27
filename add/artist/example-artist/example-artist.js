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

  // JPEG placeholders (shown until user uploads)
  if(variant === "avatar"){
    imgEl.src = "./example-artist-profile.png";
    return;
  }

  if(variant === "banner"){
    imgEl.src = "./example-artist-banner.png";
    return;
  }

  imgEl.removeAttribute("src");
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
