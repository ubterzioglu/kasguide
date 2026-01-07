// Kaş Guide – FAQ list (non-clickable cards)
// Requirements:
// - No tags
// - Single column
// - Only emojis (🔴 for question, 🟢 for answer)
// - Left accent rail + Q&A badge in rotating colors
// - Search filters by keyword in question+answer

(function () {
  const grid = document.getElementById("cardsGrid");
  const search = document.getElementById("faqSearch");

  // NEW: counters
  const totalEl = document.getElementById("faqTotalCount");
  const resultEl = document.getElementById("faqResultCount");

  if (!grid || !search) return;

  if (!Array.isArray(window.faqData)) {
    grid.innerHTML = "<div style='opacity:.7'>FAQ verisi bulunamadı (faqData).</div>";
    return;
  }

  const colors = [
    "#8f1627", // deep red (Kaş/CAL vibe)
    "#2980b9", // blue
    "#27ae60", // green
    "#f39c12", // amber
    "#8e44ad", // purple
    "#16a085", // teal
    "#2c3e50", // dark
    "#c0392b"  // red alt
  ];

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function setCounts(total, shown) {
    if (totalEl) totalEl.textContent = String(total);
    if (resultEl) resultEl.textContent = String(shown);
  }

  function render(list) {
    grid.innerHTML = "";

    // NEW: always keep counts in sync
    setCounts(window.faqData.length, list.length);

    if (!list.length) {
      grid.innerHTML = "<div style='padding:14px 6px;opacity:.7'>Sonuç bulunamadı.</div>";
      return;
    }

    list.forEach((item, idx) => {
      const accent = colors[idx % colors.length];

      const card = document.createElement("article");
      card.className = "faq-card";
      card.style.setProperty("--accent", accent);

      const q = escapeHtml(item.question || "");
      const a = escapeHtml(item.answer || "");

      card.innerHTML = `
        <h3 class="faq-q">🔴 ${q}</h3>
        <p class="faq-a">🟢 ${a}</p>
      `;

      // non-clickable by design (no listeners)
      grid.appendChild(card);
    });
  }

  // Debounce function for performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Advanced search function with relevance scoring
  function searchFAQ(query, data) {
    if (!query || !query.trim()) {
      return data.map((item, idx) => ({ item, score: 0, index: idx }));
    }

    const queryLower = query.trim().toLowerCase();
    const queryWords = queryLower.split(/\s+/).filter(w => w.length > 0);

    return data.map((item, idx) => {
      const question = (item.question || "").toLowerCase();
      const answer = (item.answer || "").toLowerCase();
      const questionText = question;
      const answerText = answer;
      const fullText = questionText + " " + answerText;

      let score = 0;

      // Exact phrase match (highest priority)
      if (fullText.includes(queryLower)) {
        score += 100;
        // Question exact match gets bonus
        if (question.includes(queryLower)) {
          score += 50;
        }
      }

      // Word-by-word matching
      let matchedWords = 0;
      let questionMatches = 0;
      let answerMatches = 0;

      queryWords.forEach(word => {
        if (word.length < 2) return; // Skip very short words

        // Question matches (higher weight)
        if (question.includes(word)) {
          score += 20;
          questionMatches++;
          matchedWords++;
        }
        // Answer matches
        if (answer.includes(word)) {
          score += 10;
          answerMatches++;
          matchedWords++;
        }
      });

      // Bonus for matching all words
      if (matchedWords === queryWords.length && queryWords.length > 1) {
        score += 30;
      }

      // Bonus for question matches (questions are more important)
      if (questionMatches > 0) {
        score += questionMatches * 5;
      }

      // Position bonus (earlier in question is better)
      const questionIndex = question.indexOf(queryLower);
      if (questionIndex >= 0) {
        score += Math.max(0, 20 - questionIndex / 10);
      }

      return { item, score, index: idx };
    })
    .filter(result => result.score > 0) // Only return matches
    .sort((a, b) => {
      // Sort by score (descending), then by original index
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.index - b.index;
    });
  }

  function applyFilter() {
    const query = (search.value || "").trim();
    
    if (!query) {
      render(window.faqData);
      return;
    }

    // Use advanced search with scoring
    const results = searchFAQ(query, window.faqData);
    const filtered = results.map(r => r.item);

    render(filtered);
  }

  // Debounced search (300ms delay for better performance)
  const debouncedSearch = debounce(applyFilter, 300);
  search.addEventListener("input", debouncedSearch);
  
  // Also trigger on Enter for immediate feedback
  search.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      debouncedSearch.cancel?.();
      applyFilter();
    }
  });

  // init
  setCounts(window.faqData.length, window.faqData.length);
  render(window.faqData);

  // Generate and inject FAQPage structured data for SEO
  if (window.faqData && window.faqData.length > 0) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': window.faqData.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    // Inject schema into page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqSchema, null, 2);
    document.head.appendChild(script);
  }
})();
