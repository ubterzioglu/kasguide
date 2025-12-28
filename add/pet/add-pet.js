/* add-pet.js
   - 1..5 foto validasyonu
   - 500 char counter
   - draft: localStorage
   - submit: FormData -> /api/pet-submit (backend yoksa hata mesajı gösterir)
*/

(() => {
  const form = document.getElementById("petForm");
  const formWrap = document.getElementById("formWrap");
  const successWrap = document.getElementById("successWrap");
  const errBox = document.getElementById("formError");

  const petType = document.getElementById("petType");
  const age = document.getElementById("age");
  const breed = document.getElementById("breed");
  const shortNote = document.getElementById("shortNote");
  const extraNotes = document.getElementById("extraNotes");

  const photos = document.getElementById("photos");
  const thumbs = document.getElementById("thumbs");
  const photoMeta = document.getElementById("photoMeta");

  const noteCount = document.getElementById("noteCount");
  const submitBtn = document.getElementById("submitBtn");
  const clearBtn = document.getElementById("clearBtn");

  const DRAFT_KEY = "kasguide_pet_draft_v1";

  function showError(msg){
    errBox.textContent = msg;
    errBox.hidden = !msg;
  }

  function updateCounter(){
    noteCount.textContent = String(shortNote.value.length);
  }

  function clampFiles(fileList){
    const arr = Array.from(fileList || []);
    if (arr.length <= 5) return arr;
    return arr.slice(0, 5);
  }

  function renderThumbs(files){
    thumbs.innerHTML = "";
    if (!files.length){
      photoMeta.textContent = "Henüz foto seçilmedi.";
      return;
    }
    photoMeta.textContent = `${files.length} foto seçildi.`;
    files.forEach((f) => {
      const div = document.createElement("div");
      div.className = "thumb";
      const img = document.createElement("img");
      img.alt = "Fotoğraf önizleme";
      div.appendChild(img);
      thumbs.appendChild(div);

      const reader = new FileReader();
      reader.onload = () => { img.src = reader.result; };
      reader.readAsDataURL(f);
    });
  }

  function saveDraft(){
    const draft = {
      petType: petType.value || "",
      age: age.value || "",
      breed: breed.value || "",
      shortNote: shortNote.value || "",
      extraNotes: extraNotes.value || ""
    };
    try{ localStorage.setItem(DRAFT_KEY, JSON.stringify(draft)); }catch(_){}
  }

  function loadDraft(){
    try{
      const raw = localStorage.getItem(DRAFT_KEY);
      if(!raw) return;
      const d = JSON.parse(raw);
      if (d.petType) petType.value = d.petType;
      age.value = d.age || "";
      breed.value = d.breed || "";
      shortNote.value = d.shortNote || "";
      extraNotes.value = d.extraNotes || "";
      updateCounter();
    }catch(_){}
  }

  function clearDraft(){
    try{ localStorage.removeItem(DRAFT_KEY); }catch(_){}
  }

  function validate(files){
    if(!petType.value) return "Tür seçmelisin (Kedi/Köpek).";
    if(!shortNote.value.trim()) return "Kısa not alanı zorunlu.";
    if(shortNote.value.length > 500) return "Kısa not 500 karakteri geçemez.";
    if(!files.length) return "En az 1 fotoğraf yüklemelisin.";
    if(files.length > 5) return "En fazla 5 fotoğraf yükleyebilirsin.";
    return "";
  }

  // Events
  [petType, age, breed, shortNote, extraNotes].forEach((el) => {
    el.addEventListener("input", () => {
      updateCounter();
      saveDraft();
    });
    el.addEventListener("change", saveDraft);
  });

  photos.addEventListener("change", () => {
    showError("");
    const files = clampFiles(photos.files);
    // Kullanıcı 5'ten fazla seçtiyse, input'u yeniden set etmek mümkün değil;
    // ama UI'da sadece ilk 5'i göstereceğiz ve validate edeceğiz.
    renderThumbs(files);
  });

  clearBtn.addEventListener("click", () => {
    form.reset();
    thumbs.innerHTML = "";
    photoMeta.textContent = "Henüz foto seçilmedi.";
    updateCounter();
    clearDraft();
    showError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    showError("");

    const files = clampFiles(photos.files);
    const msg = validate(files);
    if(msg){
      showError(msg);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Gönderiliyor…";

    const fd = new FormData();
    fd.append("petType", petType.value);
    fd.append("age", age.value.trim());
    fd.append("breed", breed.value.trim());
    fd.append("shortNote", shortNote.value.trim());
    fd.append("extraNotes", extraNotes.value.trim());
    fd.append("viewport", window.innerWidth + "x" + window.innerHeight);
    // Not: Mail alıcısı backend'de sabit varsayılır (pet@kasguide.de).
    files.forEach((f) => fd.append("photos", f));

    try{
      const res = await fetch("/api/pet-submit", {
        method: "POST",
        body: fd
      });

      if(!res.ok){
        // Backend bu endpoint'i henüz sağlamıyorsa 404 vb. dönebilir
        let detail = "";
        try{ detail = await res.text(); }catch(_){}
        throw new Error(detail || `HTTP ${res.status}`);
      }

      // success
      clearDraft();
      formWrap.hidden = true;
      successWrap.hidden = false;
      window.scrollTo({ top: 0, behavior: "smooth" });

    }catch(err){
      showError("Gönderim şu an tamamlanamadı. Lütfen daha sonra tekrar dene veya pet@kasguide.de üzerinden bize yaz.");
      console.error(err);
    }finally{
      submitBtn.disabled = false;
      submitBtn.textContent = "Gönder";
    }
  });

  // init
  loadDraft();
  updateCounter();
})();
