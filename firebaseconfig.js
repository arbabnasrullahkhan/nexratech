/* 
 * FIREBASE CONFIGURATION MODULE 
 * Engine: Firebase v9 Compat
 * Services: Auth, Firestore (Storage is intentionally excluded)
 */

const firebaseConfig = {
    apiKey: "AIzaSyDeNZBtVQ5iX5PjV5Gj4xXgxqB3KaJ4cZw",
    authDomain: "nexrapk.firebaseapp.com",
    projectId: "nexrapk",
    storageBucket: "nexrapk.firebasestorage.app", // Won't be used for media uploads, but required for config
    messagingSenderId: "958761878252",
    appId: "1:958761878252:web:099246eb11de0e08755bc9",
    measurementId: "G-FRTWEZ47YZ"
};

// Initialize Firebase safely (Prevents double initialization)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Extract Core Services
const db = firebase.firestore();
const auth = firebase.auth();

// Set Global References for Modular Architecture
window.NexraApp = {
    db: db,
    auth: auth,
    currentUser: null, // Will be updated via Auth State Listener in global.js
    isGuest: true      // Default mode
};

console.log("🔥 Nexra Core: Firebase Initialized Successfully.");
