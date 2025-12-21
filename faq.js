const faqListEl = document.getElementById("faqList");
const searchInput = document.getElementById("searchInput");

const colors = [
  "#e74c3c",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#f39c12",
  "#16a085"
];

function renderFaq(list) {
  faqListEl.innerHTML = "";

  list.forEach((item, index) => {
    const color = colors[index % colors.length];

    const card = document.createElement("div");
    card.className = "faq-card";
    card.style.setProperty("--accent", color);

    card.innerHTML = `
      <div class="faq-badge">Q&A</div>
      <div class="faq-question">🔴 ${item.question}</div>
      <div class="faq-answer">🟢 ${item.answer}</div>
    `;

    faqListEl.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = faqData.filter(item =>
    item.question.toLowerCase().includes(value) ||
    item.answer.toLowerCase().includes(value)
  );

  renderFaq(filtered);
});

renderFaq(faqData);
