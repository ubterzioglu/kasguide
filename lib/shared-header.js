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
    showBackToTop = true,
    showMenu = true
  } = config;

  const headerContainer = document.getElementById('shared-header');
  if (!headerContainer) {
    console.warn('Shared header container not found');
    return;
  }

  // Eğer eski menü varsa, onu temizle
  const oldMenu = document.getElementById('sharedMobileMenu');
  if (oldMenu) {
    oldMenu.remove();
  }

  // Header HTML'i oluştur - Ana sayfadaki yapıyı kullan
  headerContainer.innerHTML = `
    <header class="header">
      <div class="container header-content">
        <!-- LEFT ACTIONS (Home & Up) -->
        <div class="header-actions">
          <a href="${homePath}" class="action-btn action-btn-home" aria-label="Ana Sayfa">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </a>
          ${showBackToTop ? `
            <button class="action-btn action-btn-up back-to-top" aria-label="Başa Dön" type="button" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          ` : ''}
        </div>

        <!-- LOGO (Centered) -->
        <div class="logo logo-centered">
          <img class="logo-img" src="${assetsPath}/0_img/logokasguide.png" alt="Kaş Guide" width="34" height="34">
        </div>

        <!-- RIGHT ACTIONS (Menu Toggle) -->
        ${showMenu ? `
          <button class="menu-toggle shared-menu-toggle" id="sharedMenuToggle" aria-label="Menü">
            <span class="menu-text">Menü</span>
          </button>
        ` : '<div style="width:48px"></div>'}
      </div>
    </header>
  `;

  // Mobile menu'i header içine ekle (ana sayfadaki gibi)
  if (showMenu) {
    const headerElement = headerContainer.querySelector('.header');
    if (headerElement) {
      const mobileMenuHTML = `
        <nav class="nav-mobile shared-nav-mobile" id="sharedMobileMenu">
          <button class="nav-link-mobile nav-close-btn" id="sharedMobileMenuClose" type="button">Menüyü Kapat</button>
          <a href="${homePath}" class="nav-link-mobile">Ana Sayfa</a>
          <a href="${homePath}#cards-section" class="nav-link-mobile">Keşfet</a>
          <a href="${homePath}#categories" class="nav-link-mobile">Kategoriler</a>
          <a href="${homePath}#stats" class="nav-link-mobile">İstatistikler</a>
          <a href="${homePath}#quick-links" class="nav-link-mobile">Hızlı Erişim</a>
          <a href="${homePath.includes('index.html') ? homePath.replace('index.html', 'bizkimiz/bizkimiz.html') : '../bizkimiz/bizkimiz.html'}" class="nav-link-mobile">Biz kimiz?</a>
          <a href="${homePath.includes('index.html') ? homePath.replace('index.html', 'contact/contact.html') : '../contact/contact.html'}" class="nav-link-mobile">İletişim</a>
          <a href="${homePath.includes('index.html') ? homePath.replace('index.html', 'emergency/emergency.html') : '../emergency/emergency.html'}" class="nav-link-mobile nav-link-alert">🚨 Acil Durum!</a>
        </nav>
      `;
      headerElement.insertAdjacentHTML('beforeend', mobileMenuHTML);
    }
  }

  // Initialize mobile menu if enabled
  if (showMenu) {
    const menuToggle = document.getElementById('sharedMenuToggle');
    const mobileMenu = document.getElementById('sharedMobileMenu');
    const mobileMenuClose = document.getElementById('sharedMobileMenuClose');

    function closeSharedMobileMenu() {
      if (mobileMenu) mobileMenu.classList.remove('active');
      if (menuToggle) menuToggle.classList.remove('active');
      document.body.classList.remove('menu-open');
      const menuText = menuToggle?.querySelector('.menu-text');
      if (menuText) menuText.textContent = 'Menü';
    }

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        const isActive = mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active', isActive);
        document.body.classList.toggle('menu-open', isActive);
        const menuText = menuToggle.querySelector('.menu-text');
        if (menuText) {
          menuText.textContent = 'Menü';
        }
      });
    }

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', closeSharedMobileMenu);
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(e.target) && !menuToggle?.contains(e.target)) {
          closeSharedMobileMenu();
        }
      }
    });
  }
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
