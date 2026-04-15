/* =============================================
   ReviseIQ — main.js
   Navbar, dark mode, auth state, page transitions,
   announcement banner, scroll animations
   ============================================= */

// ── Dark mode (runs before DOM to avoid flash) ──
(function initTheme() {
  const saved = localStorage.getItem('riq_theme') || localStorage.getItem('lcStudyTheme');
  // Default to dark unless user has explicitly chosen light
  if (saved === 'light') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

// ── Helper ─────────────────────────────────────
function escHtml(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Page transitions (event delegation) ────────
// Runs immediately so the handler is registered before DOMContentLoaded
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (
    !href ||
    href.startsWith('#') ||
    href.startsWith('http') ||
    href.startsWith('mailto') ||
    href.endsWith('.pdf') ||
    link.hasAttribute('target') ||
    link.hasAttribute('data-no-transition')
  ) return;
  e.preventDefault();
  document.body.classList.add('page-exit');
  setTimeout(() => { window.location.href = href; }, 220);
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-ready');

  // ── Theme button ────────────────────────────
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const dark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (dark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('riq_theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('riq_theme', 'dark');
      }
    });
  }

  // ── Navbar scroll shadow ────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Mobile nav toggle ───────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      const spans = navToggle.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(9px) rotate(45deg)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'translateY(-9px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity   = '';
        });
      }
    });
  }

  // ── Active nav link ─────────────────────────
  (function highlightActiveNav() {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href && href !== '#' && page.startsWith(href.split('?')[0])) {
        link.classList.add('active');
      } else if (href !== 'index.html') {
        link.classList.remove('active');
      }
    });
  })();

  // ── Auth navbar injection ───────────────────
  injectAuthNav();

  // ── Announcement banner (homepage only) ─────
  injectAnnouncement();

  // ── Activity tracking ───────────────────────
  trackPageVisit();

  // ── Scroll fade-in ──────────────────────────
  const fadeEls = document.querySelectorAll(
    '.subject-card, .feature-card, .section-header, .hero-badge, .hero-stats, .hero-actions'
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.querySelectorAll('.fade-in')];
        const delay = siblings.indexOf(entry.target) * 60;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => { el.classList.add('fade-in'); observer.observe(el); });
});

// ── Auth nav ────────────────────────────────────
function injectAuthNav() {
  const container = document.querySelector('.nav-container');
  if (!container) return;

  // Don't inject on auth pages themselves
  const page = location.pathname.split('/').pop();
  if (page === 'login.html' || page === 'signup.html') return;

  // Auth module may not be loaded on every page — guard it
  const session = (typeof Auth !== 'undefined') ? Auth.getSession() : null;

  const authDiv = document.createElement('div');
  authDiv.id        = 'navAuth';
  authDiv.className = 'nav-auth';

  if (session) {
    const adminLink = (typeof Auth !== 'undefined' && Auth.isAdmin())
      ? `<a href="admin.html" class="nav-link nav-admin-link" data-no-transition="1">Admin</a>`
      : '';
    authDiv.innerHTML = `
      <span class="nav-user-name">Hi, ${escHtml(session.firstName)}</span>
      ${adminLink}
      <button class="nav-logout-btn" id="logoutBtn">Log out</button>
    `;
    authDiv.querySelector('#logoutBtn').addEventListener('click', () => {
      if (typeof Auth !== 'undefined') Auth.clearSession();
      window.location.href = 'index.html';
    });
  } else {
    authDiv.innerHTML = `
      <a href="login.html"  class="nav-link nav-auth-login"  data-no-transition="1">Log in</a>
      <a href="signup.html" class="nav-auth-signup" data-no-transition="1">Sign up</a>
    `;
    // Use real navigation for auth links (no fade transition)
    authDiv.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent event-delegation transition handler
      });
    });
  }

  container.appendChild(authDiv);
}

// ── Announcement banner ─────────────────────────
function injectAnnouncement() {
  if (typeof Auth === 'undefined') return;

  // Only on homepage
  const page = location.pathname.split('/').pop();
  if (page && page !== '' && page !== 'index.html') return;

  const ann = Auth.getAnnouncement();
  if (!ann || !ann.active || !ann.text.trim()) return;

  // Don't show again if dismissed this browser session
  const dismissKey = 'riq_ann_dismissed_' + ann.publishedAt;
  if (sessionStorage.getItem(dismissKey)) return;

  const banner = document.createElement('div');
  banner.className = 'announcement-banner';
  banner.innerHTML = `
    <div class="announcement-inner">
      <span class="announcement-icon">📢</span>
      <span class="announcement-text">${escHtml(ann.text)}</span>
      <button class="announcement-close" aria-label="Dismiss announcement">×</button>
    </div>
  `;
  banner.querySelector('.announcement-close').addEventListener('click', () => {
    sessionStorage.setItem(dismissKey, '1');
    banner.style.opacity  = '0';
    banner.style.maxHeight = '0';
    setTimeout(() => banner.remove(), 300);
  });

  const nav = document.getElementById('navbar');
  if (nav) nav.insertAdjacentElement('afterend', banner);
}

// ── Activity tracking ───────────────────────────
function trackPageVisit() {
  if (typeof Auth === 'undefined') return;
  const page = location.pathname.split('/').pop() || 'index.html';
  const labels = {
    'index.html':        'Visited homepage',
    'papers.html':       'Visited Past Papers',
    'quiz.html':         'Visited Quiz',
    'trends.html':       'Visited Topic Trends',
    'subject.html':      'Visited a subject page',
    'past-papers.html':  'Visited Past Papers (old)',
  };
  const detail = labels[page] || `Visited ${page}`;
  Auth.track('page_visit', detail);
}
