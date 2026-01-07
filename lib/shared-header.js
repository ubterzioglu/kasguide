/**
 * Shared Header Component
 * Parametrik header oluşturur - tek bir değişiklikle tüm sayfalara yansır
 * 
 * Kullanım:
 * <div id="shared-header"></div>
 * <script src="../lib/shared-header.js"></script>
 * <script>
 *   initSharedHeader({
 *     homePath: '../index.html',  // Ana sayfa yolu
 *     assetsPath: '../assets'      // Assets klasörü yolu
 *   });
 * </script>
 */

function initSharedHeader(config = {}) {
  const {
    homePath = '../index.html',
    assetsPath = '../assets',
    showBackToTop = true
  } = config;

  const headerContainer = document.getElementById('shared-header');
  if (!headerContainer) {
    console.warn('Shared header container not found');
    return;
  }

  // Header HTML'i oluştur
  headerContainer.innerHTML = `
    <header class="header">
      <div class="container header-content">
        <!-- LEFT ACTIONS -->
        <div class="header-actions">
          <a href="${homePath}" class="action-btn" aria-label="Ana Sayfa">
            <img src="${assetsPath}/0_img/clip_home.png" alt="Home" style="width: 24px; height: 24px;">
          </a>
          ${showBackToTop ? `
            <button class="action-btn back-to-top" aria-label="Başa Dön" type="button" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
              <img src="${assetsPath}/0_img/clip_up.png" alt="Up" style="width: 24px; height: 24px;">
            </button>
          ` : ''}
        </div>

        <!-- LOGO -->
        <div class="logo">
          <img class="logo-img" src="${assetsPath}/0_img/logokasguide.png" alt="Kaş Guide">
          <h1 class="logo-text">Kaş Guide</h1>
        </div>

        <div style="width:48px"></div>
      </div>
    </header>
  `;
}

// Auto-init if container exists and no config provided
if (document.getElementById('shared-header') && typeof initSharedHeaderConfig === 'undefined') {
  // Default config - sayfa konumuna göre otomatik ayarlanır
  const isRoot = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');
  const depth = (window.location.pathname.match(/\//g) || []).length - 1;
  
  let homePath = '../index.html';
  let assetsPath = '../assets';
  
  if (isRoot || depth <= 1) {
    homePath = 'index.html';
    assetsPath = 'assets';
  } else if (depth === 2) {
    homePath = '../index.html';
    assetsPath = '../assets';
  } else {
    homePath = '../../index.html';
    assetsPath = '../../assets';
  }
  
  initSharedHeader({ homePath, assetsPath });
}
