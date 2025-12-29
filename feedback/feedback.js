(() => {
  const form = document.getElementById('feedbackForm');
  const success = document.getElementById('successMessage');
  const submitBtn = document.getElementById('submitBtn');
  const messageEl = document.getElementById('message');
  const titleEl = document.getElementById('title');
  const charCount = document.getElementById('charCount');

  const MAX = 5000;

  const setCount = () => {
    const len = (messageEl.value || '').length;
    charCount.textContent = String(len);
  };

  messageEl.addEventListener('input', setCount);
  setCount();

  const setBusy = (busy) => {
    submitBtn.disabled = !!busy;
    submitBtn.textContent = busy ? 'Gönderiliyor…' : 'Gönder';
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Native required kontrolünü tetikle
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const payload = {
      title: titleEl.value.trim(),
      message: messageEl.value.trim(),
      page: window.location.pathname
    };

    if (!payload.title || !payload.message) {
      form.reportValidity();
      return;
    }

    try {
      setBusy(true);

      // Endpoint senin projende neredeyse burayı ona göre değiştir
      // Örn: /api/feedback-submit
      const res = await fetch('/api/feedback-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Request failed');

      // Başarılı: formu gizle, mesajı göster
      form.classList.add('is-hidden');
      success.removeAttribute('hidden');
      success.classList.add('show');

      // Scroll to top of card for visibility
      success.scrollIntoView({ behavior: 'smooth', block: 'start' });

    } catch (err) {
      alert('Gönderilemedi. Lütfen biraz sonra tekrar deneyin.');
      setBusy(false);
    }
  });
})();
