// =============================================
// APP.JS — Accor O'zbekiston / Asosiy Modul
// =============================================

// ---- Navbar ----
function renderNavbar(activePage = '') {
  const user = DB.getCurrentUser();
  const isAdmin = user && user.role === 'admin';
  const navItems = [
    { href: '../index.html', label: '🏠 Bosh sahifa', key: 'home' },
    { href: 'hotels.html', label: '🏨 Mehmonxonalar', key: 'hotels' },
    { href: 'tours.html', label: '✈️ Tur paketlar', key: 'tours' },
    { href: 'booking.html', label: '📅 Bron qilish', key: 'booking' },
    { href: 'gallery.html', label: '🖼️ Galereya', key: 'gallery' },
    { href: 'blog.html', label: '📝 Blog', key: 'blog' },
    { href: 'contact.html', label: '📞 Kontakt', key: 'contact' },
  ];

  const navItemsHTML = navItems.map(item => `
    <li><a href="${item.href}" class="${activePage === item.key ? 'active' : ''}">${item.label}</a></li>
  `).join('');

  const userHTML = user ? `
    <div class="user-menu">
      <button class="user-btn" onclick="toggleUserDropdown()" id="userBtn">
        👤 ${user.name.split(' ')[0]}
        <span style="font-size:0.7rem">▼</span>
      </button>
      <div class="user-dropdown" id="userDropdown">
        <a href="profile.html">👤 Profilim</a>
        <a href="my-bookings.html">📋 Bronlarim</a>
        ${isAdmin ? '<a href="admin.html">⚙️ Admin panel</a>' : ''}
        <div class="dropdown-divider"></div>
        <button class="danger" onclick="handleLogout()">🚪 Chiqish</button>
      </div>
    </div>
  ` : `
    <a href="login.html" class="btn btn-outline">Kirish</a>
    <a href="login.html?mode=register" class="btn btn-primary">Ro'yxatdan o'tish</a>
  `;

  const mobileMenuHTML = navItems.map(item => `
    <a href="${item.href}" class="${activePage === item.key ? 'active' : ''}">${item.label}</a>
  `).join('');

  return `
    <nav class="navbar" id="navbar">
      <a href="../index.html" class="navbar-brand">
        <div class="brand-logo" style="background:transparent;font-size:0;width:auto;height:auto"><svg width="32" height="32" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="4" fill="#c9a96e"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Raleway,sans-serif" font-weight="900" font-size="11" fill="#0d0d0d" letter-spacing="1">AC</text></svg></div>
        <span class="brand-text">ACCOR</span>
      </a>
      <ul class="navbar-nav" id="navbarNav">${navItemsHTML}</ul>
      <div class="navbar-actions" id="navbarActions">${userHTML}</div>
      <button class="mobile-toggle" onclick="toggleMobileMenu()" aria-label="Menu">☰</button>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
      ${mobileMenuHTML}
      ${user ? `
        <a href="profile.html">👤 Profilim</a>
        <a href="my-bookings.html">📋 Bronlarim</a>
        ${isAdmin ? '<a href="admin.html">⚙️ Admin panel</a>' : ''}
        <a href="#" onclick="handleLogout()">🚪 Chiqish</a>
      ` : `
        <a href="login.html">Kirish</a>
        <a href="login.html?mode=register">Ro'yxatdan o'tish</a>
      `}
    </div>
  `;
}

function renderIndexNavbar(activePage = '') {
  const user = DB.getCurrentUser();
  const isAdmin = user && user.role === 'admin';
  const navItems = [
    { href: './index.html', label: '🏠 Bosh sahifa', key: 'home' },
    { href: './pages/hotels.html', label: '🏨 Mehmonxonalar', key: 'hotels' },
    { href: './pages/tours.html', label: '✈️ Tur paketlar', key: 'tours' },
    { href: './pages/booking.html', label: '📅 Bron qilish', key: 'booking' },
    { href: './pages/gallery.html', label: '🖼️ Galereya', key: 'gallery' },
    { href: './pages/blog.html', label: '📝 Blog', key: 'blog' },
    { href: './pages/contact.html', label: '📞 Kontakt', key: 'contact' },
  ];

  const navItemsHTML = navItems.map(item => `
    <li><a href="${item.href}" class="${activePage === item.key ? 'active' : ''}">${item.label}</a></li>
  `).join('');

  const userHTML = user ? `
    <div class="user-menu">
      <button class="user-btn" onclick="toggleUserDropdown()" id="userBtn">
        👤 ${user.name.split(' ')[0]}
        <span style="font-size:0.7rem">▼</span>
      </button>
      <div class="user-dropdown" id="userDropdown">
        <a href="./pages/profile.html">👤 Profilim</a>
        <a href="./pages/my-bookings.html">📋 Bronlarim</a>
        ${isAdmin ? '<a href="./pages/admin.html">⚙️ Admin panel</a>' : ''}
        <div class="dropdown-divider"></div>
        <button class="danger" onclick="handleLogout()">🚪 Chiqish</button>
      </div>
    </div>
  ` : `
    <a href="./pages/login.html" class="btn btn-outline">Kirish</a>
    <a href="./pages/login.html?mode=register" class="btn btn-primary">Ro'yxatdan o'tish</a>
  `;

  const mobileMenuHTML = navItems.map(item => `
    <a href="${item.href}" class="${activePage === item.key ? 'active' : ''}">${item.label}</a>
  `).join('');

  return `
    <nav class="navbar" id="navbar">
      <a href="./index.html" class="navbar-brand">
        <div class="brand-logo" style="background:transparent;font-size:0;width:auto;height:auto"><svg width="32" height="32" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="4" fill="#c9a96e"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Raleway,sans-serif" font-weight="900" font-size="11" fill="#0d0d0d" letter-spacing="1">AC</text></svg></div>
        <span class="brand-text">ACCOR</span>
      </a>
      <ul class="navbar-nav" id="navbarNav">${navItemsHTML}</ul>
      <div class="navbar-actions" id="navbarActions">${userHTML}</div>
      <button class="mobile-toggle" onclick="toggleMobileMenu()" aria-label="Menu">☰</button>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
      ${mobileMenuHTML}
      ${user ? `
        <a href="./pages/profile.html">👤 Profilim</a>
        <a href="./pages/my-bookings.html">📋 Bronlarim</a>
        ${isAdmin ? '<a href="./pages/admin.html">⚙️ Admin panel</a>' : ''}
        <a href="#" onclick="handleLogout()">🚪 Chiqish</a>
      ` : `
        <a href="./pages/login.html">Kirish</a>
        <a href="./pages/login.html?mode=register">Ro'yxatdan o'tish</a>
      `}
    </div>
  `;
}

// ---- Footer ----
function renderFooter(isRoot = false) {
  const prefix = isRoot ? './pages/' : '';
  return `
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="${isRoot ? './index.html' : '../index.html'}" class="navbar-brand" style="margin-bottom:1rem;display:inline-flex">
            <div class="brand-logo" style="background:transparent;font-size:0;width:auto;height:auto"><svg width="32" height="32" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="4" fill="#c9a96e"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Raleway,sans-serif" font-weight="900" font-size="11" fill="#0d0d0d" letter-spacing="1">AC</text></svg></div>
            <span class="brand-text">ACCOR</span>
          </a>
          <p>Accor S.A. — Dunyo bo'ylab 110+ mamlakat, 5,700+ mehmonxona. O'zbekistonda Sofitel, Pullman, Novotel, Mövenpick, MGallery, Mercure va ibis brendlari.</p>
          <div class="social-links" style="margin-top:1.25rem">
            <a href="#" class="social-link">📘</a>
            <a href="#" class="social-link">📸</a>
            <a href="#" class="social-link">🐦</a>
            <a href="#" class="social-link">▶️</a>
          </div>
        </div>
        <div>
          <h4 class="footer-title">Tezkor havolalar</h4>
          <ul class="footer-links">
            <li><a href="${isRoot ? './index.html' : '../index.html'}">🏠 Bosh sahifa</a></li>
            <li><a href="${prefix}hotels.html">🏨 Mehmonxonalar</a></li>
            <li><a href="${prefix}tours.html">✈️ Tur paketlar</a></li>
            <li><a href="${prefix}booking.html">📅 Bron qilish</a></li>
            <li><a href="${prefix}blog.html">📝 Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-title">Xizmatlar</h4>
          <ul class="footer-links">
            <li><a href="#">🚗 Transfer xizmati</a></li>
            <li><a href="#">🗺️ Ekskursiyalar</a></li>
            <li><a href="#">🎁 Maxsus takliflar</a></li>
            <li><a href="#">💳 Onlayn to'lov</a></li>
            <li><a href="${prefix}contact.html">📞 Yordam</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-title">Bog'lanish</h4>
          <div class="footer-contact-item">
            <span>📍</span>
            <span>Toshkent, Amir Temur ko'chasi, 1A</span>
          </div>
          <div class="footer-contact-item">
            <span>📞</span>
            <span>+998 71 200-00-00</span>
          </div>
          <div class="footer-contact-item">
            <span>📧</span>
            <span>uzbekistan@accor.com</span>
          </div>
          <div class="footer-contact-item">
            <span>🌐</span>
            <span>accor.com/uzbekistan</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Accor S.A. — Barcha huquqlar himoyalangan.</span>
        <span>Euronext: <strong style="color:var(--accent)">AC</strong></span>
      </div>
    </footer>
  `;
}

// ---- Navbar Scroll Effect ----
function initNavbar() {
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
    const scrollTop = document.getElementById('scrollTop');
    if (scrollTop) {
      scrollTop.classList.toggle('show', window.scrollY > 300);
    }
  });
}

// ---- Mobile Menu ----
function toggleMobileMenu() {
  document.getElementById('mobileMenu')?.classList.toggle('open');
}

// ---- User Dropdown ----
function toggleUserDropdown() {
  document.getElementById('userDropdown')?.classList.toggle('show');
}

document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('userDropdown');
  const btn = document.getElementById('userBtn');
  if (dropdown && btn && !btn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove('show');
  }
});

// ---- Logout ----
function handleLogout() {
  DB.logout();
  showToast('Tizimdan muvaffaqiyatli chiqdingiz', 'success');
  setTimeout(() => window.location.href = '../index.html', 1000);
}

// ---- Toast Notifications ----
function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || icons.info}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
  `;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// ---- Star Rating Renderer ----
function renderStars(count) {
  return '⭐'.repeat(count) + '☆'.repeat(5 - count);
}

// ---- Hotel Card ----
function renderHotelCard(hotel) {
  const minPrice = Math.min(...hotel.rooms.map(r => r.price));
  const availableRooms = hotel.rooms.filter(r => r.available).length;
  const amenitiesHTML = hotel.amenities.slice(0, 4).map(a => `<span class="amenity-tag">${a}</span>`).join('');
  return `
    <div class="hotel-card fade-in" id="hotel-card-${hotel.id}">
      <div class="hotel-card-image">
        <img src="${hotel.image}" alt="${hotel.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800'">
        <div class="hotel-badge">${hotel.stars}★ Yulduz</div>
        <button class="hotel-favorite" onclick="toggleFavorite(${hotel.id})" title="Sevimlilar">❤️</button>
      </div>
      <div class="hotel-card-body">
        <div class="hotel-card-header">
          <h3 class="hotel-name">${hotel.name}</h3>
          <div class="hotel-stars">${renderStars(hotel.stars)}</div>
        </div>
        <div class="hotel-location">📍 ${hotel.city} · ${availableRooms} xona bo'sh</div>
        <div class="hotel-rating">
          <span class="rating-badge">${hotel.rating}</span>
          <span class="rating-text">Yaxshi · ${hotel.reviews} reyting</span>
        </div>
        <div class="hotel-amenities">${amenitiesHTML}${hotel.amenities.length > 4 ? `<span class="amenity-tag">+${hotel.amenities.length - 4}</span>` : ''}</div>
        <div class="hotel-card-footer">
          <div class="hotel-price">
            <span class="price-label">Boshlab</span>
            <span class="price-amount">${DB.formatPrice(minPrice)}</span>
            <span class="price-period">/ kecha</span>
          </div>
          <a href="booking.html?hotel=${hotel.id}" class="btn btn-primary btn-sm">Bron qilish →</a>
        </div>
      </div>
    </div>
  `;
}

// ---- Tour Card ----
function renderTourCard(tour) {
  const includesHTML = tour.includes.map(i => `<span class="include-tag">✓ ${i}</span>`).join('');
  return `
    <div class="tour-card fade-in">
      <div class="tour-card-image">
        <img src="${tour.image}" alt="${tour.name}" loading="lazy">
        <div class="tour-duration">⏱ ${tour.duration}</div>
      </div>
      <div class="tour-card-body">
        <h3 class="tour-name">${tour.name}</h3>
        <p class="tour-description">${tour.description}</p>
        <div class="tour-includes">${includesHTML}</div>
        <div class="tour-footer">
          <div>
            <span class="price-label">Narxi</span>
            <div class="price-amount">${DB.formatPrice(tour.price)}</div>
          </div>
          <a href="booking.html?tour=${tour.id}" class="btn btn-primary btn-sm">Bron qilish →</a>
        </div>
      </div>
    </div>
  `;
}

// ---- Blog Card ----
function renderBlogCard(post) {
  return `
    <div class="blog-card fade-in">
      <div class="blog-card-image">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </div>
      <div class="blog-card-body">
        <span class="blog-category">${post.category}</span>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-meta">
          <span>✍️ ${post.author}</span>
          <span>📅 ${new Date(post.date).toLocaleDateString('uz-UZ')}</span>
        </div>
      </div>
    </div>
  `;
}

// ---- Scroll to top ----
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// ---- Toggle Favorite ----
function toggleFavorite(hotelId) {
  let favs = JSON.parse(localStorage.getItem('favorites') || '[]');
  const idx = favs.indexOf(hotelId);
  if (idx === -1) { favs.push(hotelId); showToast('Sevimlilarga qo\'shildi ❤️', 'success'); }
  else { favs.splice(idx, 1); showToast('Sevimlilardan olib tashlandi', 'info'); }
  localStorage.setItem('favorites', JSON.stringify(favs));
}

// ---- Format Date ----
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('uz-UZ', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

// ---- Days Difference ----
function daysDiff(from, to) {
  const a = new Date(from), b = new Date(to);
  return Math.max(1, Math.round((b - a) / (1000 * 60 * 60 * 24)));
}

// ---- Init ----
DB.init();
initNavbar();
