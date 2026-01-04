/**
 * Unified Item Submission Form - Single Page Version
 * Handles dynamic form for places, pets, hotels, artists
 */

let selectedType = null;

// DOM Elements
const typeSelection = document.getElementById('typeSelection');
const mainForm = document.getElementById('mainForm');
const itemForm = document.getElementById('itemForm');
const itemTypeInput = document.getElementById('itemType');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');

// Type cards
const typeCards = document.querySelectorAll('.type-card');

// Type-specific field containers
const typeFieldsMap = {
  place: document.getElementById('placeFields'),
  pet: document.getElementById('petFields'),
  hotel: document.getElementById('hotelFields'),
  artist: document.getElementById('artistFields')
};

/**
 * Handle photo upload file count
 */
function handlePhotoUpload(e) {
  const files = e.target.files;
  const fileCountDiv = document.getElementById('fileCount');
  const fileCountText = document.getElementById('fileCountText');

  if (files && files.length > 0) {
    fileCountText.textContent = `${files.length} fotoğraf seçildi`;
    fileCountDiv.style.display = 'inline-flex';
  } else {
    fileCountDiv.style.display = 'none';
  }
}

/**
 * Initialize form
 */
function init() {
  // Type selection listeners
  typeCards.forEach(card => {
    card.addEventListener('click', () => selectType(card.dataset.type));
  });

  // Photo upload listener
  const photoUpload = document.getElementById('photoUpload');
  if (photoUpload) {
    photoUpload.addEventListener('change', handlePhotoUpload);
  }

  // Form submission
  itemForm.addEventListener('submit', handleSubmit);
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

  // Show/hide type-specific info accordions
  const infoSection = document.getElementById('infoSection');
  const placeInfo = document.getElementById('placeInfo');
  const petInfo = document.getElementById('petInfo');
  const hotelInfo = document.getElementById('hotelInfo');
  const artistInfo = document.getElementById('artistInfo');

  // Hide all info sections first
  placeInfo.style.display = 'none';
  petInfo.style.display = 'none';
  hotelInfo.style.display = 'none';
  artistInfo.style.display = 'none';

  // Show the relevant one
  if (type === 'place') placeInfo.style.display = 'block';
  if (type === 'pet') petInfo.style.display = 'block';
  if (type === 'hotel') hotelInfo.style.display = 'block';
  if (type === 'artist') artistInfo.style.display = 'block';

  // Show info section
  infoSection.style.display = 'block';

  // Update title label based on type
  const titleLabel = document.getElementById('titleLabel');
  if (titleLabel) {
    const titleLabelText = {
      place: 'Mekan İsmi',
      pet: 'Patili İsmi',
      hotel: 'Başlık',
      artist: 'İsim'
    };
    titleLabel.innerHTML = `${titleLabelText[type] || 'Başlık'}<span class="required">*</span>`;
  }

  // Hide common contact fields for artist and pet (they have their own contact cards)
  const commonContactRows = document.querySelectorAll('#itemForm > section:first-of-type .form-box .form-row');
  if (commonContactRows.length >= 2) {
    // Phone/Email row
    commonContactRows[0].style.display = (type === 'artist' || type === 'pet') ? 'none' : 'grid';
    // Website/Instagram row
    commonContactRows[1].style.display = (type === 'artist' || type === 'pet') ? 'none' : 'grid';
  }

  // Show main form
  typeSelection.style.display = 'none';
  mainForm.classList.add('active');
}

/**
 * Handle form submission
 */
async function handleSubmit(e) {
  e.preventDefault();

  // Validate title
  const title = itemForm.querySelector('[name="title"]').value.trim();
  if (!title) {
    alert('Başlık zorunludur');
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
      document.querySelector('.form-nav').style.display = 'none';

      const successText = document.getElementById('successText');
      successText.textContent = result.message;

      successMessage.style.display = 'block';

      // Reset after 5 seconds
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } else {
      alert(result.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
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

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
