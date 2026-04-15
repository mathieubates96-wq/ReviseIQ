/* =============================================
   ReviseIQ — admin.js
   Admin dashboard logic
   Password: ReviseIQ@admin
   ⚠️  Change this before a production deployment.
   ============================================= */

// ── Hardcoded admin password ──────────────────
// Change this to a strong password before going live.
const ADMIN_PASSWORD = 'ReviseIQ@admin';
const ADMIN_SESSION_KEY = 'riq_admin_session';

// ── Helpers ───────────────────────────────────
function esc(s) {
  return String(s ?? '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function fmtDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-IE', { day: '2-digit', month: 'short', year: 'numeric' });
}

function fmtTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now - d;
  const diffM = Math.floor(diffMs / 60000);
  const diffH = Math.floor(diffM / 60);
  const diffD = Math.floor(diffH / 24);
  if (diffM < 1)  return 'just now';
  if (diffM < 60) return `${diffM}m ago`;
  if (diffH < 24) return `${diffH}h ago`;
  if (diffD < 7)  return `${diffD}d ago`;
  return fmtDate(iso);
}

function initials(firstName, lastName) {
  return ((firstName?.[0] ?? '') + (lastName?.[0] ?? '')).toUpperCase() || '?';
}

// ── Password gate ─────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const gate      = document.getElementById('passwordGate');
  const dashboard = document.getElementById('dashboard');
  const input     = document.getElementById('gateInput');
  const btn       = document.getElementById('gateBtn');
  const errEl     = document.getElementById('gateError');

  function unlock() {
    sessionStorage.setItem(ADMIN_SESSION_KEY, '1');
    gate.style.display      = 'none';
    dashboard.style.display = 'flex';
    initDashboard();
  }

  // Already authed this browser session
  if (sessionStorage.getItem(ADMIN_SESSION_KEY)) {
    gate.style.display      = 'none';
    dashboard.style.display = 'flex';
    initDashboard();
    return;
  }

  function tryUnlock() {
    if (input.value === ADMIN_PASSWORD) {
      errEl.textContent = '';
      unlock();
    } else {
      errEl.textContent = 'Incorrect password.';
      input.classList.add('shake');
      input.value = '';
      setTimeout(() => input.classList.remove('shake'), 400);
      input.focus();
    }
  }

  btn.addEventListener('click', tryUnlock);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') tryUnlock(); });

  // Logout button inside dashboard
  document.getElementById('adminLogoutBtn').addEventListener('click', () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    gate.style.display      = 'flex';
    dashboard.style.display = 'none';
    input.value = '';
    input.focus();
  });
});

// ── Dashboard ─────────────────────────────────
function initDashboard() {
  renderStats();
  renderUsers();
  renderActivity();
  renderAnnouncement();
}

function renderStats() {
  const users    = Auth.getUsers();
  const activity = Auth.getActivity();

  const today = new Date().toDateString();
  const todaySignups = users.filter(u => new Date(u.signupDate).toDateString() === today).length;
  const quizCount    = activity.filter(a => a.type === 'quiz_taken').length;

  document.getElementById('statUsers').textContent    = users.length;
  document.getElementById('statToday').textContent    = todaySignups;
  document.getElementById('statQuizzes').textContent  = quizCount;
  document.getElementById('statActivity').textContent = activity.length;
}

function renderUsers() {
  const users   = Auth.getUsers();
  const tbody   = document.getElementById('usersTableBody');
  const countEl = document.getElementById('usersCount');

  countEl.textContent = users.length;

  if (!users.length) {
    tbody.innerHTML = `<tr><td colspan="4" class="empty-table">No users signed up yet.</td></tr>`;
    return;
  }

  // Sort newest first
  const sorted = [...users].sort((a, b) => new Date(b.signupDate) - new Date(a.signupDate));

  tbody.innerHTML = sorted.map(u => `
    <tr>
      <td>
        <span class="user-avatar">${esc(initials(u.firstName, u.lastName))}</span>
        ${esc(u.firstName)} ${esc(u.lastName)}
      </td>
      <td>${esc(u.email)}</td>
      <td>${fmtDate(u.signupDate)}</td>
    </tr>
  `).join('');
}

function renderActivity() {
  const activity = Auth.getActivity();
  const list     = document.getElementById('activityFeed');
  const countEl  = document.getElementById('activityCount');

  const recent = activity.slice(0, 40);
  countEl.textContent = `${recent.length} recent`;

  if (!recent.length) {
    list.innerHTML = `<li class="activity-item"><span style="color:var(--ad-muted);font-size:0.85rem;">No activity yet.</span></li>`;
    return;
  }

  list.innerHTML = recent.map(item => `
    <li class="activity-item">
      <span class="activity-dot ${esc(item.type ?? 'other')}"></span>
      <div class="activity-detail">
        ${esc(item.detail)}
        <div class="activity-meta">${item.userEmail ? esc(item.userEmail) : 'Guest'}</div>
      </div>
      <span class="activity-time">${fmtTime(item.timestamp)}</span>
    </li>
  `).join('');
}

function renderAnnouncement() {
  const ann         = Auth.getAnnouncement();
  const textarea    = document.getElementById('annText');
  const preview     = document.getElementById('annPreview');
  const previewText = document.getElementById('annPreviewText');
  const statusEl    = document.getElementById('annStatus');
  const publishBtn  = document.getElementById('annPublishBtn');
  const clearBtn    = document.getElementById('annClearBtn');

  if (ann?.active && ann.text) {
    textarea.value        = ann.text;
    preview.style.display = 'block';
    previewText.textContent = ann.text;
    statusEl.textContent = `Active since ${fmtDate(ann.publishedAt)}`;
  } else {
    preview.style.display = 'none';
    statusEl.textContent  = '';
  }

  publishBtn.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (!text) {
      statusEl.textContent = 'Please enter a message first.';
      statusEl.style.color = 'var(--ad-red)';
      return;
    }
    Auth.setAnnouncement(text);
    preview.style.display   = 'block';
    previewText.textContent = text;
    statusEl.style.color    = 'var(--ad-green)';
    statusEl.textContent    = 'Published!';
    setTimeout(() => {
      const a = Auth.getAnnouncement();
      statusEl.textContent = a ? `Active since ${fmtDate(a.publishedAt)}` : '';
    }, 1500);
  });

  clearBtn.addEventListener('click', () => {
    Auth.clearAnnouncement();
    textarea.value        = '';
    preview.style.display = 'none';
    statusEl.textContent  = 'Announcement cleared.';
    statusEl.style.color  = 'var(--ad-muted)';
    setTimeout(() => { statusEl.textContent = ''; }, 2000);
  });

  // Live preview
  textarea.addEventListener('input', () => {
    if (textarea.value.trim()) {
      preview.style.display   = 'block';
      previewText.textContent = textarea.value;
    } else {
      preview.style.display = 'none';
    }
  });

  // Refresh button
  document.getElementById('refreshBtn').addEventListener('click', () => {
    initDashboard();
  });
}
