/* ==========================================================================
   NEXRA ELITE ECOSYSTEM - FIREBASE CONFIGURATION v10+
   ========================================================================== */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, doc, getDoc, setDoc, updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// 1. FIREBASE SECURE CREDENTIALS
const firebaseConfig = {
    apiKey: "AIzaSyDeNZBtVQ5iX5PjV5Gj4xXgxqB3KaJ4cZw",
    authDomain: "nexrapk.firebaseapp.com",
    projectId: "nexrapk",
    storageBucket: "nexrapk.firebasestorage.app",
    messagingSenderId: "958761878252",
    appId: "1:958761878252:web:099246eb11de0e08755bc9",
    measurementId: "G-FRTWEZ47YZ"
};

// 2. INITIALIZE FIREBASE APPS
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
let analytics;
if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

// 3. EXPORT TO GLOBAL NAMESPACE FOR USAGE IN PAGES
window.NexraDB = {
    app,
    auth,
    db,
    storage,
    provider: new GoogleAuthProvider(),

    // Utility: Login with Google
    loginWithGoogle: async function() {
        try {
            const result = await signInWithPopup(auth, this.provider);
            const user = result.user;
            
            // Sync user to Firestore
            const userRef = doc(db, 'users', user.uid);
            const userSnap = await getDoc(userRef);
            
            if (!userSnap.exists()) {
                await setDoc(userRef, {
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    role: 'user', // user, reseller, admin
                    tier: 'free',
                    coins: 0,
                    createdAt: new Date().getTime()
                });
            }
            
            window.NexraCore.showToast('Authentication Successful!', 'success');
            return user;
        } catch (error) {
            console.error("Auth Error: ", error);
            window.NexraCore.showToast(error.message, 'error');
            throw error;
        }
    },

    // Utility: Logout
    logout: async function() {
        try {
            await signOut(auth);
            window.NexraCore.showToast('Logged out securely.', 'info');
            // Redirect to home
            window.NexraCore.navigate('home');
        } catch (error) {
            window.NexraCore.showToast('Logout failed.', 'error');
        }
    },

    // Current User Observer
    listenAuth: function(callback) {
        onAuthStateChanged(auth, (user) => {
            callback(user);
        });
    }
};

console.log('%c🔥 Firebase v10 Engine Initialized', 'color:#f59e0b; font-weight:bold; font-size:14px;');
