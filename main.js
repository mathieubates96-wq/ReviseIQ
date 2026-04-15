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

  // ── My Subjects (homepage, logged-in users) ─
  renderMySubjects();

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

// ── My Subjects section (homepage only) ────────
function renderMySubjects() {
  if (typeof Auth === 'undefined') return;
  const page = location.pathname.split('/').pop();
  if (page && page !== '' && page !== 'index.html') return;

  const session = Auth.getSession();
  if (!session) return;

  const subjects = session.subjects || [];
  if (!subjects.length) return;

  const SUBJECT_INFO = {
    irish:      { emoji: '🇮🇪', label: 'Irish',      href: 'subject.html?s=irish',      available: false },
    english:    { emoji: '📖',  label: 'English',    href: 'subject.html?s=english',    available: false },
    maths:      { emoji: '📐',  label: 'Maths',      href: 'subject.html?s=maths',      available: false },
    biology:    { emoji: '🧬',  label: 'Biology',    href: 'subject.html?s=biology',    available: false },
    chemistry:  { emoji: '⚗️',  label: 'Chemistry',  href: 'subject.html?s=chemistry',  available: false },
    physics:    { emoji: '🔭',  label: 'Physics',    href: 'subject.html?s=physics',    available: false },
    history:    { emoji: '🏛️',  label: 'History',    href: 'subject.html?s=history',    available: false },
    geography:  { emoji: '🌍',  label: 'Geography',  href: 'subject.html?s=geography',  available: false },
    business:   { emoji: '💼',  label: 'Business',   href: 'subject.html?s=business',   available: false },
    french:     { emoji: '🥐',  label: 'French',     href: 'subject.html?s=french',     available: false },
    spanish:    { emoji: '🇪🇸',  label: 'Spanish',    href: 'subject.html?s=spanish',    available: false },
    accounting: { emoji: '🧾',  label: 'Accounting', href: 'subject.html?s=accounting', available: false },
    economics:  { emoji: '📉',  label: 'Economics',  href: 'papers.html?s=economics',   available: true  },
    art:        { emoji: '🎨',  label: 'Art',        href: 'subject.html?s=art',        available: false },
    music:      { emoji: '🎵',  label: 'Music',      href: 'subject.html?s=music',      available: false },
  };

  const subjectsSection = document.getElementById('subjects');
  if (!subjectsSection) return;

  const cards = subjects.map(s => {
    const info = SUBJECT_INFO[s];
    if (!info) return '';
    return `
      <a href="${info.href}" class="my-subject-card${info.available ? '' : ' my-subject-card--soon'}">
        <span class="my-subject-emoji">${info.emoji}</span>
        <div class="my-subject-body">
          <span class="my-subject-label">${escHtml(info.label)}</span>
          ${info.available
            ? '<span class="my-subject-status my-subject-status--avail">Papers available</span>'
            : '<span class="my-subject-status my-subject-status--soon">Coming soon</span>'}
        </div>
        ${info.available ? '<span class="my-subject-arrow">→</span>' : ''}
      </a>
    `;
  }).join('');

  const section = document.createElement('section');
  section.className = 'my-subjects-section';
  section.innerHTML = `
    <div class="container">
      <div class="my-subjects-header">
        <div>
          <h2 class="section-title" style="margin-bottom:6px">Your Subjects</h2>
          <p class="section-sub" style="margin:0">Resources for the subjects you chose at sign-up.</p>
        </div>
        <button class="my-subjects-edit-btn" id="mySubjectsEditBtn">Edit subjects</button>
      </div>
      <div class="my-subjects-grid">${cards}</div>
    </div>
  `;

  subjectsSection.insertAdjacentElement('beforebegin', section);

  // Edit button → opens inline picker modal
  document.getElementById('mySubjectsEditBtn').addEventListener('click', openSubjectEditor);
}

function openSubjectEditor() {
  if (document.getElementById('subjectEditorOverlay')) return;
  const SUBJECTS = [
    { key: 'irish',      emoji: '🇮🇪', label: 'Irish' },
    { key: 'english',    emoji: '📖',  label: 'English' },
    { key: 'maths',      emoji: '📐',  label: 'Maths' },
    { key: 'biology',    emoji: '🧬',  label: 'Biology' },
    { key: 'chemistry',  emoji: '⚗️',  label: 'Chemistry' },
    { key: 'physics',    emoji: '🔭',  label: 'Physics' },
    { key: 'history',    emoji: '🏛️',  label: 'History' },
    { key: 'geography',  emoji: '🌍',  label: 'Geography' },
    { key: 'business',   emoji: '💼',  label: 'Business' },
    { key: 'french',     emoji: '🥐',  label: 'French' },
    { key: 'spanish',    emoji: '🇪🇸',  label: 'Spanish' },
    { key: 'accounting', emoji: '🧾',  label: 'Accounting' },
    { key: 'economics',  emoji: '📉',  label: 'Economics' },
    { key: 'art',        emoji: '🎨',  label: 'Art' },
    { key: 'music',      emoji: '🎵',  label: 'Music' },
  ];

  const current = (typeof Auth !== 'undefined') ? (Auth.getSession()?.subjects || []) : [];

  const pills = SUBJECTS.map(s => `
    <button type="button" class="subject-editor-pill${current.includes(s.key) ? ' selected' : ''}" data-subject="${s.key}">
      ${s.emoji} ${s.label}
    </button>
  `).join('');

  const overlay = document.createElement('div');
  overlay.id = 'subjectEditorOverlay';
  overlay.className = 'subject-editor-overlay';
  overlay.innerHTML = `
    <div class="subject-editor-modal">
      <div class="subject-editor-head">
        <div>
          <h3>Your subjects</h3>
          <p>Select all the subjects you're studying this year.</p>
        </div>
        <button class="subject-editor-close" id="subjectEditorCancel" aria-label="Close">✕</button>
      </div>
      <div class="subject-editor-body">
        <div class="subject-editor-pills">${pills}</div>
      </div>
      <div class="subject-editor-foot">
        <button class="subject-editor-save" id="subjectEditorSave">Save changes</button>
        <button class="subject-editor-cancel" id="subjectEditorCancelBtn">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelectorAll('.subject-editor-pill').forEach(pill => {
    pill.addEventListener('click', () => pill.classList.toggle('selected'));
  });

  document.getElementById('subjectEditorCancel').addEventListener('click', () => overlay.remove());
  document.getElementById('subjectEditorCancelBtn').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

  document.getElementById('subjectEditorSave').addEventListener('click', () => {
    const selected = [...overlay.querySelectorAll('.subject-editor-pill.selected')]
      .map(p => p.dataset.subject);
    if (typeof Auth !== 'undefined') Auth.updateSubjects(selected);
    overlay.remove();
    // Refresh the my-subjects section
    const existing = document.querySelector('.my-subjects-section');
    if (existing) existing.remove();
    renderMySubjects();
  });
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
