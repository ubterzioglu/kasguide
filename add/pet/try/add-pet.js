// add-pet.js – client-side validation + user-friendly error rendering + elite photo upload

(function () {
  const form = document.getElementById("petForm");
  const errorBox = document.getElementById("formError");
  const successBox = document.getElementById("success");
  const photosInput = document.getElementById("photosInput");
  const shortNoteEl = document.getElementById("shortNote");
  const shortCounter = document.getElementById("shortCounter");
  const uploadLabel = document.getElementById("uploadLabel");
  const photoInfo = document.getElementById("photoInfo");
  const photoCountBadge = document.getElementById("photoCountBadge");
  const changePhotosBtn = document.getElementById("changePhotosBtn");
  const photoThumbs = document.getElementById("photoThumbs");

  if (!form) return;

  function showError(msg) {
    if (!errorBox) return alert(msg);
    errorBox.textContent = msg;
    errorBox.hidden = false;
    errorBox.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clearError() {
    if (!errorBox) return;
    errorBox.hidden = true;
    errorBox.textContent = "";
  }

  function updateShortCounter() {
    if (!shortNoteEl || !shortCounter) return;
    shortCounter.textContent = String(shortNoteEl.value.length || 0);
  }

  // Photo upload UI management
  function updatePhotoUI() {
    if (!photosInput || !uploadLabel || !photoInfo || !photoCountBadge) return;
    
    const fileCount = photosInput.files?.length ?? 0;
    
    if (fileCount > 0) {
      uploadLabel.hidden = true;
      photoInfo.hidden = false;
      photoCountBadge.textContent = `${fileCount} fotoğraf seçildi`;
      
      // Generate thumbnails
      generateThumbnails(photosInput.files);
    } else {
      uploadLabel.hidden = false;
      photoInfo.hidden = true;
      if (photoThumbs) photoThumbs.innerHTML = '';
    }
  }

  // Generate thumbnail previews
  function generateThumbnails(files) {
    if (!photoThumbs) return;
    photoThumbs.innerHTML = '';
    
    Array.from(files).forEach((file, idx) => {
      if (idx >= 5) return; // Max 5 photos
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const div = document.createElement('div');
        div.className = 'thumb';
        div.innerHTML = `<img src="${e.target.result}" alt="Önizleme ${idx + 1}" loading="lazy" />`;
        photoThumbs.appendChild(div);
      };
      reader.readAsDataURL(file);
    });
  }

  // Change photos button handler
  if (changePhotosBtn) {
    changePhotosBtn.addEventListener('click', () => {
      if (photosInput) photosInput.click();
    });
  }

  // Photo input change handler
  if (photosInput) {
    photosInput.addEventListener('change', updatePhotoUI);
  }

  // Initialize counters
  updateShortCounter();
  if (shortNoteEl) shortNoteEl.addEventListener("input", updateShortCounter);

  // Drag and drop support for photo upload
  if (uploadLabel) {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      uploadLabel.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
      uploadLabel.addEventListener(eventName, () => {
        uploadLabel.style.borderColor = 'var(--brand)';
        uploadLabel.style.transform = 'scale(1.02)';
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      uploadLabel.addEventListener(eventName, () => {
        uploadLabel.style.borderColor = '';
        uploadLabel.style.transform = '';
      });
    });

    uploadLabel.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      
      if (photosInput) {
        photosInput.files = files;
        updatePhotoUI();
      }
    });
  }

  // Form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearError();

    const fd = new FormData(form);

    // Get form values
    const listingType = (fd.get("listingType") || "").toString().trim();
    const petName = (fd.get("petName") || "").toString().trim();
    const petType = (fd.get("petType") || "").toString().trim();
    const shortNote = (fd.get("shortNote") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();

    const photoCount = photosInput?.files?.length ?? 0;

    // Client-side validation
    const missing = [];
    if (!listingType) missing.push("İlan Tipi");
    if (!petName) missing.push("Pet Adı");
    if (!petType) missing.push("Tür");
    if (!shortNote) missing.push("Kısa Bilgi");
    if (!phone) missing.push("İletişim (WhatsApp / Tel)");
    if (photoCount < 1) missing.push("En az 1 fotoğraf");
    
    if (photoCount > 5) {
      showError("Fotoğraf sayısı 1 ile 5 arasında olmalı.");
      return;
    }

    if (missing.length) {
      showError(`Lütfen zorunlu alanları doldurun: ${missing.join(", ")}.`);
      return;
    }

    // Submit
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Gönderiliyor...';
    }

    try {
      const res = await fetch("/api/pet-submit", { method: "POST", body: fd });

      if (res.ok) {
        form.hidden = true;
        if (successBox) successBox.hidden = false;
        return;
      }

      // Try read server message (400/500)
      let serverMsg = "";
      try {
        const data = await res.json();
        serverMsg = (data && data.message) ? String(data.message) : "";
      } catch (_) {
        try {
          serverMsg = (await res.text())?.trim() || "";
        } catch (_) {}
      }

      // Map generic/technical messages to user-friendly ones
      let msg = serverMsg || "Gönderim başarısız. Lütfen zorunlu alanları kontrol edin.";
      if (res.status >= 500) {
        msg = "Şu an gönderimde bir sorun var. Lütfen biraz sonra tekrar deneyin.";
      } else if (serverMsg.includes("Zorunlu alanlar eksik")) {
        msg = "Lütfen zorunlu alanları doldurun.";
      } else if (serverMsg.includes("Fotoğraf sayısı")) {
        msg = "Fotoğraf sayısı 1 ile 5 arasında olmalı.";
      }

      showError(msg);
    } catch (err) {
      showError("Bağlantı hatası. İnternetinizi kontrol edip tekrar deneyin.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Gönder';
      }
    }
  });
})();
