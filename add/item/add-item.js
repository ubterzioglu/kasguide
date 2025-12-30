/**
 * Unified Item Submission Form
 * Handles dynamic form for places, pets, hotels, artists
 */

let currentStep = 0;
let selectedType = null;
const totalSteps = 4;

// DOM Elements
const typeSelection = document.getElementById('typeSelection');
const mainForm = document.getElementById('mainForm');
const itemForm = document.getElementById('itemForm');
const itemTypeInput = document.getElementById('itemType');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');
const stepIndicator = document.getElementById('stepIndicator');

// Type cards
const typeCards = document.querySelectorAll('.type-card');

// Type-specific field containers
const typeFieldsMap = {
  place: document.getElementById('placeFields'),
  pet: document.getElementById('petFields'),
  hotel: document.getElementById('hotelFields'),
  artist: document.getElementById('artistFields')
};

// Required fields by type
const requiredFieldsByType = {
  place: ['title', 'longText', 'phone'],
  pet: ['title', 'phone', 'petType', 'listingType', 'shortNote'],
  hotel: ['title', 'phone', 'email', 'location', 'hotelType'],
  artist: ['title', 'longText']
};

/**
 * Initialize form
 */
function init() {
  // Type selection listeners
  typeCards.forEach(card => {
    card.addEventListener('click', () => selectType(card.dataset.type));
  });

  // Navigation listeners
  prevBtn.addEventListener('click', () => changeStep(-1));
  nextBtn.addEventListener('click', () => changeStep(1));

  // Form submission
  itemForm.addEventListener('submit', handleSubmit);

  // Dynamic field updates
  setupDynamicFields();
}

/**
 * Select item type
 */
function selectType(type) {
  selectedType = type;
  itemTypeInput.value = type;

  // Update UI
  typeCards.forEach(card => {
    card.classList.toggle('selected', card.dataset.type === type);
  });

  // Show/hide type-specific fields
  Object.keys(typeFieldsMap).forEach(key => {
    if (typeFieldsMap[key]) {
      typeFieldsMap[key].classList.toggle('active', key === type);
    }
  });

  // Update required fields
  updateRequiredFields(type);

  // Show main form
  typeSelection.style.display = 'none';
  mainForm.classList.add('active');

  // Start at step 1
  showStep(1);
}

/**
 * Update required fields based on type
 */
function updateRequiredFields(type) {
  // Remove all required attributes first
  document.querySelectorAll('[required]').forEach(el => {
    if (!['title', 'phone'].includes(el.name)) {
      el.removeAttribute('required');
    }
  });

  // Add required attributes for selected type
  const required = requiredFieldsByType[type] || [];
  required.forEach(fieldName => {
    const field = itemForm.querySelector(`[name="${fieldName}"]`);
    if (field) {
      field.setAttribute('required', 'required');
    }
  });

  // Type-specific adjustments
  if (type === 'pet') {
    document.getElementById('title').placeholder = 'Hayvan adı (opsiyonel)';
    document.getElementById('title').removeAttribute('required');
  } else {
    document.getElementById('title').placeholder = 'Başlık girin';
    document.getElementById('title').setAttribute('required', 'required');
  }
}

/**
 * Setup dynamic field behaviors
 */
function setupDynamicFields() {
  // Auto-fill title for pets based on type and listing type
  const petType = itemForm.querySelector('[name="petType"]');
  const listingType = itemForm.querySelector('[name="listingType"]');
  const titleField = document.getElementById('title');

  if (petType && listingType) {
    const updatePetTitle = () => {
      if (selectedType === 'pet' && !titleField.value) {
        const pet = petType.value || 'Hayvan';
        const listing = listingType.value || '';
        if (listing) {
          titleField.value = `${pet.charAt(0).toUpperCase() + pet.slice(1)} - ${listing.charAt(0).toUpperCase() + listing.slice(1)}`;
        }
      }
    };

    petType.addEventListener('change', updatePetTitle);
    listingType.addEventListener('change', updatePetTitle);
  }
}

/**
 * Show specific step
 */
function showStep(step) {
  currentStep = step;

  // Update sections
  document.querySelectorAll('.form-section').forEach((section, index) => {
    section.classList.toggle('active', index + 1 === step);
  });

  // Update step indicator
  document.querySelectorAll('.step').forEach((stepEl, index) => {
    const stepNum = index + 1;
    stepEl.classList.remove('active', 'completed');

    if (stepNum < step) {
      stepEl.classList.add('completed');
    } else if (stepNum === step) {
      stepEl.classList.add('active');
    }
  });

  // Update buttons
  prevBtn.style.display = step > 1 ? 'block' : 'none';
  nextBtn.style.display = step < totalSteps ? 'block' : 'none';
  submitBtn.style.display = step === totalSteps ? 'block' : 'none';

  // If on review step, update preview
  if (step === 4) {
    updateReview();
  }
}

/**
 * Change step
 */
function changeStep(direction) {
  const newStep = currentStep + direction;

  // Validate current step before moving forward
  if (direction > 0 && !validateCurrentStep()) {
    return;
  }

  if (newStep >= 1 && newStep <= totalSteps) {
    showStep(newStep);
  }
}

/**
 * Validate current step
 */
function validateCurrentStep() {
  const currentSection = document.querySelector(`.form-section[data-step="${currentStep}"]`);
  const requiredFields = currentSection.querySelectorAll('[required]');

  let isValid = true;

  requiredFields.forEach(field => {
    // Skip fields that are in inactive type-specific containers
    const typeFieldContainer = field.closest('.type-fields');
    if (typeFieldContainer && !typeFieldContainer.classList.contains('active')) {
      return;
    }

    if (!field.value.trim()) {
      field.classList.add('error');
      isValid = false;
    } else {
      field.classList.remove('error');
    }
  });

  if (!isValid) {
    alert('Lütfen zorunlu alanları doldurun.');
  }

  return isValid;
}

/**
 * Update review content
 */
function updateReview() {
  const formData = new FormData(itemForm);
  const reviewContent = document.getElementById('reviewContent');

  const typeNames = {
    place: '🏪 Mekan',
    pet: '🐾 Hayvan',
    hotel: '🏨 Otel',
    artist: '🎨 Sanatçı'
  };

  let html = `<h3>${typeNames[selectedType]}</h3>`;

  // Common fields
  const title = formData.get('title');
  const description = formData.get('description');
  const phone = formData.get('phone');

  if (title) html += `<p><strong>Başlık:</strong> ${title}</p>`;
  if (description) html += `<p><strong>Açıklama:</strong> ${description}</p>`;
  if (phone) html += `<p><strong>Telefon:</strong> ${phone}</p>`;

  // Type-specific preview
  switch (selectedType) {
    case 'place':
      const location = formData.get('location');
      const price = formData.get('price');
      if (location) html += `<p><strong>Konum:</strong> ${location}</p>`;
      if (price) html += `<p><strong>Fiyat:</strong> ${price}</p>`;
      break;

    case 'pet':
      const petType = formData.get('petType');
      const listingType = formData.get('listingType');
      if (petType) html += `<p><strong>Tür:</strong> ${petType}</p>`;
      if (listingType) html += `<p><strong>İlan:</strong> ${listingType}</p>`;
      break;

    case 'hotel':
      const hotelType = formData.get('hotelType');
      const hotelLocation = formData.get('location');
      const starRating = formData.get('starRating');
      if (hotelType) html += `<p><strong>Tip:</strong> ${hotelType}</p>`;
      if (hotelLocation) html += `<p><strong>Konum:</strong> ${hotelLocation}</p>`;
      if (starRating) html += `<p><strong>Yıldız:</strong> ${'⭐'.repeat(starRating)}</p>`;
      break;

    case 'artist':
      const youtube = formData.get('youtube');
      if (youtube) html += `<p><strong>YouTube:</strong> ${youtube}</p>`;
      break;
  }

  // Photos
  const photoInput = itemForm.querySelector('[name="photos"]');
  if (photoInput && photoInput.files.length > 0) {
    html += `<p><strong>Fotoğraflar:</strong> ${photoInput.files.length} adet</p>`;
  }

  reviewContent.innerHTML = html;
}

/**
 * Handle form submission
 */
async function handleSubmit(e) {
  e.preventDefault();

  if (!validateCurrentStep()) {
    return;
  }

  // Disable submit button
  const submitBtnText = document.getElementById('submitBtnText');
  const submitSpinner = document.getElementById('submitSpinner');
  submitBtn.disabled = true;
  submitBtnText.style.display = 'none';
  submitSpinner.style.display = 'inline';

  try {
    const formData = new FormData(itemForm);

    // Remove empty values
    for (let [key, value] of [...formData.entries()]) {
      if (value === '' || value === null) {
        formData.delete(key);
      }
    }

    // Submit to API
    const response = await fetch('/api/item-submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      // Show success message
      itemForm.style.display = 'none';
      stepIndicator.style.display = 'none';
      document.querySelector('.form-nav').style.display = 'none';
      successMessage.style.display = 'block';

      // Update success text
      document.getElementById('successText').textContent =
        `Başvuru numaranız: ${result.itemNumber || result.submissionId}. ` +
        'Bilgilerinizi inceliyoruz. En kısa sürede size dönüş yapacağız.';
    } else {
      alert(`Hata: ${result.message || 'Bir sorun oluştu'}`);
      submitBtn.disabled = false;
      submitBtnText.style.display = 'inline';
      submitSpinner.style.display = 'none';
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    submitBtn.disabled = false;
    submitBtnText.style.display = 'inline';
    submitSpinner.style.display = 'none';
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
