/* =============================================
   ReviseIQ — auth.js
   Firebase Auth + Firestore backend.
   Keeps a lightweight localStorage session cache
   so synchronous getSession() calls still work.
   ============================================= */

const Auth = (() => {

  // ── Storage keys ──────────────────────────
  const K = {
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

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ── Firebase handles ──────────────────────
  function fbAuth()  { return firebase.auth(); }
  function fbStore() { return firebase.firestore(); }
  function usersCol(){ return fbStore().collection('users'); }

  // ── Session cache (localStorage) ──────────
  // Stores non-sensitive profile data so getSession()
  // can stay synchronous throughout the app.
  function getSession() { return readJSON(K.SESSION, null); }

  function _setSessionCache(user, profile) {
    writeJSON(K.SESSION, {
      userId:    user.uid,
      email:     user.email,
      firstName: profile.firstName || '',
      subjects:  profile.subjects  || [],
    });
  }

  function clearSession() {
    localStorage.removeItem(K.SESSION);
    fbAuth().signOut().catch(() => {});
  }

  // Keep cache in sync with Firebase auth state.
  // Fires on every page load — refreshes profile from Firestore.
  fbAuth().onAuthStateChanged(async (user) => {
    if (user) {
      try {
        const doc = await usersCol().doc(user.uid).get();
        if (doc.exists) {
          _setSessionCache(user, doc.data());
        }
      } catch (e) {
        // Offline or rules issue — keep existing cache
      }
    } else {
      localStorage.removeItem(K.SESSION);
    }
  });

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

    try {
      const cred    = await fbAuth().createUserWithEmailAndPassword(email, password);
      const fbUser  = cred.user;
      const profile = {
        firstName,
        lastName,
        email,
        subjects:   Array.isArray(subjects) ? subjects : [],
        signupDate: new Date().toISOString(),
      };

      await usersCol().doc(fbUser.uid).set(profile);
      _setSessionCache(fbUser, profile);
      _track('signup', `${firstName} ${lastName}`.trim() + ' signed up', email);
      return { user: fbUser };

    } catch (e) {
      if (e.code === 'auth/email-already-in-use')
        return { error: 'An account with that email already exists.' };
      if (e.code === 'auth/weak-password')
        return { error: 'Password must be at least 6 characters.' };
      return { error: e.message };
    }
  }

  // ── Login ─────────────────────────────────
  async function login(email, password) {
    email = (email || '').trim().toLowerCase();

    try {
      const cred   = await fbAuth().signInWithEmailAndPassword(email, password);
      const fbUser = cred.user;
      const doc    = await usersCol().doc(fbUser.uid).get();
      const profile = doc.exists ? doc.data() : {};

      _setSessionCache(fbUser, profile);
      _track('login', `${profile.firstName || email} logged in`, email);
      return { user: fbUser };

    } catch (e) {
      if (e.code === 'auth/user-not-found' || e.code === 'auth/invalid-credential'
          || e.code === 'auth/invalid-email')
        return { error: 'No account found with that email.' };
      if (e.code === 'auth/wrong-password')
        return { error: 'Incorrect password.' };
      return { error: e.message };
    }
  }

  // ── Subjects ──────────────────────────────
  function getSubjects() {
    return getSession()?.subjects || [];
  }

  async function updateSubjects(subjects) {
    const session = getSession();
    if (!session) return;
    subjects = Array.isArray(subjects) ? subjects : [];
    session.subjects = subjects;
    writeJSON(K.SESSION, session);
    try {
      await usersCol().doc(session.userId).update({ subjects });
    } catch (e) {}
  }

  // ── All users (admin) ─────────────────────
  async function getAllUsers() {
    try {
      const snap = await usersCol().orderBy('signupDate', 'desc').get();
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) {
      return [];
    }
  }

  // ── Activity log (local per-device) ───────
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
    getSession, clearSession,
    signup, login,
    getSubjects, updateSubjects,
    getAllUsers,
    track, getActivity,
    getAnnouncement, setAnnouncement, clearAnnouncement,
    escapeHtml,
    isAdmin,
    ADMIN_EMAIL,
  };
})();
