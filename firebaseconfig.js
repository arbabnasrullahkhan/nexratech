// firebaseconfig.js

// Firebase Configuration Keys
const firebaseConfig = {
    apiKey: "AIzaSyDeNZBtVQ5iX5PjV5Gj4xXgxqB3KaJ4cZw",
    authDomain: "nexrapk.firebaseapp.com",
    projectId: "nexrapk",
    storageBucket: "nexrapk.firebasestorage.app",
    messagingSenderId: "958761878252",
    appId: "1:958761878252:web:099246eb11de0e08755bc9",
    measurementId: "G-FRTWEZ47YZ"
};

// Initialize Firebase App
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("🔥 Firebase Initialized Successfully!");
}

// Global Variables for easy access across all files
window.db = firebase.firestore();
window.auth = firebase.auth();
window.storage = firebase.storage();
