/* =============================================
   ReviseIQ — firebase-init.js
   Initialises Firebase app, auth, and Firestore.
   Loaded before auth.js on every page.
   ============================================= */

const firebaseConfig = {
  apiKey:            "AIzaSyDBXYVfKUKBp7Frxcrl6TOnospOOREfhqM",
  authDomain:        "reviseiq-89512.firebaseapp.com",
  projectId:         "reviseiq-89512",
  storageBucket:     "reviseiq-89512.firebasestorage.app",
  messagingSenderId: "50617900086",
  appId:             "1:50617900086:web:a331df527775a0395ecc97",
};

firebase.initializeApp(firebaseConfig);
