/* ============================================================
   NEXRA TECH PK - FIREBASE CONFIGURATION
   ============================================================ */
const firebaseConfig = {
  apiKey: "AIzaSyDeNZBtVQ5iX5PjV5Gj4xXgxqB3KaJ4cZw",
  authDomain: "nexrapk.firebaseapp.com",
  projectId: "nexrapk",
  storageBucket: "nexrapk.firebasestorage.app",
  messagingSenderId: "958761878252",
  appId: "1:958761878252:web:099246eb11de0e08755bc9",
  measurementId: "G-FRTWEZ47YZ"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Global Shortcuts
window.db = firebase.firestore();
window.auth = firebase.auth();
window.storage = null; // As per instructions: not using storage


// Optimization: Enable Offline Persistence
db.enablePersistence().catch((err) => {
    if (err.code == 'failed-precondition') {
        console.warn("Multiple tabs open, persistence can only be enabled in one tab at a time.");
    } else if (err.code == 'unimplemented') {
        console.warn("The current browser does not support all of the features required to enable persistence");
    }
});
