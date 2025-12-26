

const LS_KEY = "artistsDraft_v1";

function safeUrl(v){
  if(!v) return "";
  try{ return new URL(v).toString(); }catch{ return ""; }
}

function socialLink(label, url){
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = label;
  return a;
}

function setImgOrFallback(imgEl, dataUrl, fallbackText){
  if(dataUrl){
    imgEl.src = dataUrl;
    return;
  }

  imgEl.alt = fallbackText;
}

(function init(){
  const nameEl = document.getElementById("name");
  const shortEl = document.getElementById("shortText");
  const longEl = document.getElementById("longText");
  const socialEl = document.getElementById("social");
  const avatarEl = document.getElementById("avatar");
  const bannerEl = document.getElementById("banner");

  let d = null;
  try{
    const raw = localStorage.getItem(LS_KEY);
    d = raw ? JSON.parse(raw) : null;
  }catch{}

  const profileDataUrl = sessionStorage.getItem("artistsDraft_profileDataUrl") || "";
  const bannerDataUrl  = sessionStorage.getItem("artistsDraft_bannerDataUrl") || "";

  setImgOrFallback(avatarEl, profileDataUrl, "Profil fotoğrafı");
  setImgOrFallback(bannerEl, bannerDataUrl, "Banner fotoğrafı");

  const name = d?.artistName?.trim() || "Sahne Adı";
  const shortText = d?.shortText?.trim() || "Kısa tanıtım burada gözükecek.";
  const longText = d?.longText?.trim() || "Detaylı tanıtım burada gözükecek.";

  nameEl.textContent = name;
  shortEl.textContent = shortText;
  longEl.textContent = longText;

  socialEl.innerHTML = "";
  const ig = safeUrl(d?.instagram);
  const yt = safeUrl(d?.youtube);
  const ml = safeUrl(d?.musicLink);
  const ws = safeUrl(d?.website);

  if(ig) socialEl.appendChild(socialLink("Instagram", ig));
  if(yt) socialEl.appendChild(socialLink("YouTube", yt));
  if(ml) socialEl.appendChild(socialLink("Müzik", ml));
  if(ws) socialEl.appendChild(socialLink("Web", ws));
})();
