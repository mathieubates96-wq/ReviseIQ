/* =============================================
   ReviseIQ — auth.js
   Client-side auth using localStorage.
   ⚠️  Passwords are SHA-256 hashed client-side.
       This is suitable for a demo/study tool but
       NOT for a production app with sensitive data.
   ============================================= */

const Auth = (() => {

  // ── Storage keys ──────────────────────────
  const K = {
    USERS:        'riq_users',
    SESSION:      'riq_session',
    ACTIVITY:     'riq_activity',
    ANNOUNCEMENT: 'riq_announcement',
  };
  const MAX_ACTIVITY = 100;

  // ── Admin email ───────────────────────────
  const ADMIN_EMAIL = 'mathieu.bates96@gmail.com';

  // ── Helpers ───────────────────────────────
  function readJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) ?? 'null') ?? fallback; }
    catch { return fallback; }
  }

  function writeJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  async function hashPassword(password) {
    const data   = new TextEncoder().encode(password);
    const buf    = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(buf))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ── Users ─────────────────────────────────
  function getUsers()       { return readJSON(K.USERS, []); }
  function saveUsers(users) { writeJSON(K.USERS, users); }

  // ── Session ───────────────────────────────
  function getSession()     { return readJSON(K.SESSION, null); }

  function setSession(user) {
    writeJSON(K.SESSION, {
      userId:    user.id,
      email:     user.email,
      firstName: user.firstName,
      subjects:  user.subjects || [],
    });
  }

  function clearSession() {
    localStorage.removeItem(K.SESSION);
  }

  // ── Sign up ───────────────────────────────
  async function signup({ firstName, lastName, email, password, subjects }) {
    firstName = (firstName || '').trim();
    lastName  = (lastName  || '').trim();
    email     = (email     || '').trim().toLowerCase();

    if (!firstName) return { error: 'First name is required.' };
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return { error: 'Please enter a valid email address.' };
    if (!password || password.length < 6)
      return { error: 'Password must be at least 6 characters.' };

    const users = getUsers();
    if (users.some(u => u.email === email))
      return { error: 'An account with that email already exists.' };

    const user = {
      id:           crypto.randomUUID(),
      firstName,
      lastName,
      email,
      passwordHash: await hashPassword(password),
      subjects:     Array.isArray(subjects) ? subjects : [],
      signupDate:   new Date().toISOString(),
    };

    users.push(user);
    saveUsers(users);
    setSession(user);
    _track('signup', `${firstName} ${lastName || ''} signed up`.trim(), email);
    return { user };
  }

  // ── Login ─────────────────────────────────
  async function login(email, password) {
    email = (email || '').trim().toLowerCase();
    const users = getUsers();
    const user  = users.find(u => u.email === email);
    if (!user) return { error: 'No account found with that email.' };

    const hash = await hashPassword(password);
    if (hash !== user.passwordHash) return { error: 'Incorrect password.' };

    setSession(user);
    _track('login', `${user.firstName} logged in`, email);
    return { user };
  }

  // ── Subjects ──────────────────────────────
  function getSubjects() {
    const session = getSession();
    return session?.subjects || [];
  }

  function updateSubjects(subjects) {
    const session = getSession();
    if (!session) return;
    session.subjects = Array.isArray(subjects) ? subjects : [];
    writeJSON(K.SESSION, session);
    const users = getUsers();
    const user  = users.find(u => u.id === session.userId);
    if (user) {
      user.subjects = session.subjects;
      saveUsers(users);
    }
  }

  // ── Activity log ──────────────────────────
  function getActivity() { return readJSON(K.ACTIVITY, []); }

  function _track(type, detail, userEmail) {
    const session  = getSession();
    const activity = getActivity();
    activity.unshift({
      type,
      detail,
      timestamp: new Date().toISOString(),
      userEmail: userEmail || session?.email || null,
    });
    if (activity.length > MAX_ACTIVITY) activity.length = MAX_ACTIVITY;
    writeJSON(K.ACTIVITY, activity);
  }

  // Public alias so other scripts can call Auth.track(...)
  function track(type, detail) { _track(type, detail); }

  // ── Announcement ──────────────────────────
  function getAnnouncement() { return readJSON(K.ANNOUNCEMENT, null); }

  function setAnnouncement(text) {
    writeJSON(K.ANNOUNCEMENT, {
      text:        (text || '').trim(),
      publishedAt: new Date().toISOString(),
      active:      (text || '').trim().length > 0,
    });
  }

  function clearAnnouncement() {
    const ann = getAnnouncement();
    if (ann) { ann.active = false; writeJSON(K.ANNOUNCEMENT, ann); }
  }

  // ── Admin check ───────────────────────────
  function isAdmin() {
    const session = getSession();
    return session && session.email === ADMIN_EMAIL;
  }

  // ── Public API ────────────────────────────
  return {
    getSession, setSession, clearSession,
    getUsers,
    signup, login,
    getSubjects, updateSubjects,
    track, getActivity,
    getAnnouncement, setAnnouncement, clearAnnouncement,
    escapeHtml,
    isAdmin,
    ADMIN_EMAIL,
  };
})();
