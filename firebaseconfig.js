/* ==========================================================================
   NEXRA TECH PK - MASTER ENTERPRISE HYBRID ENGINE
   Provider: Firebase (NoSQL/Auth) + Supabase (SQL/Storage)
   Description: Single Source of Truth for Database, Storage, and Branding.
   ========================================================================== */

/**
 * --------------------------------------------------------------------------
 * 1. FIREBASE CONFIGURATION (Authentication & Real-time NoSQL)
 * --------------------------------------------------------------------------
 * Why Firebase? We use Firebase for seamless Google/Email Authentication 
 * and Firestore for ultra-fast, real-time UI state syncing (like live 
 * notifications, maintenance mode toggles, and feature flags).
 */
const firebaseConfig = {
    apiKey: "AIzaSyDeNZBtVQ5iX5PjV5Gj4xXgxqB3KaJ4cZw",
    authDomain: "nexrapk.firebaseapp.com",
    projectId: "nexrapk",
    storageBucket: "nexrapk.firebasestorage.app", // NOT USED FOR UPLOADS (Constraint applied)
    messagingSenderId: "958761878252",
    appId: "1:958761878252:web:099246eb11de0e08755bc9",
    measurementId: "G-FRTWEZ47YZ"
};

// Initialize Firebase only once
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Global Firebase References
window.db = typeof firebase !== 'undefined' ? firebase.firestore() : null;
window.auth = typeof firebase !== 'undefined' ? firebase.auth() : null;

// Enable Offline Persistence for Firestore (Enterprise-grade reliability)
// This ensures the app works and caches data even if the user loses internet connection.
if (window.db) {
    window.db.enablePersistence().catch((err) => {
        if (err.code === 'failed-precondition') {
            console.warn("[Nexra Core] Offline persistence failed: Multiple tabs open.");
        } else if (err.code === 'unimplemented') {
            console.warn("[Nexra Core] Offline persistence not supported by this browser.");
        }
    });
}

/**
 * --------------------------------------------------------------------------
 * 2. SUPABASE CONFIGURATION (PostgreSQL & Storage)
 * --------------------------------------------------------------------------
 * Why Supabase? We use Supabase to handle complex relational data (SQL),
 * reporting, and robust file storage (replacing Firebase Storage).
 * 
 * Note: The actual Supabase JS client must be loaded via CDN in the HTML:
 * <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 */
const SUPABASE_URL = "https://pmovhigcwjrwevptovrs.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtb3ZoaWdjd2pyd2V2cHRvdnJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1MTU0NzUsImV4cCI6MjA5ODA5MTQ3NX0.bPpcK0PcWth59WGgnp4PGD6B_Rpn-ej18Qo6mOPb_Vo";

// Initialize Supabase Client globally
if (typeof supabase !== 'undefined') {
    window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("[Nexra Core] Supabase Engine Initialized.");
} else {
    console.warn("[Nexra Core] Supabase CDN script not detected in HTML. Waiting for load...");
}

/**
 * --------------------------------------------------------------------------
 * 3. CENTRALIZED ASSET & BRANDING ENGINE
 * --------------------------------------------------------------------------
 * This is the SINGLE SOURCE OF TRUTH for all visual assets. 
 * UI components must NEVER hardcode image URLs. They must call:
 * NexraBrand.getAsset('logo')
 */
window.NexraBrand = {
    // Defines the currently active package. (Default: 'beta', changeable via Admin Panel)
    activeEdition: localStorage.getItem('nexra_edition') || 'beta',
    
    // Festival Mode Override (Controlled by Firestore)
    festivalMode: {
        active: false,
        priorityLogo: null, // e.g., Eid/Ramadan logo
        priorityFavicon: null
    },

    // The Asset Packages
    assets: {
        alpha: { // Purple Edition
            themeColor: "#a855f7",
            logo: "https://uploads.onecompiler.io/42yatf6fu/1782533644984/logo_purple.png",
            favicon: "https://uploads.onecompiler.io/42yatf6fu/1782533644984/logo_purple.png",
            textTitle: "https://uploads.onecompiler.io/42yatf6fu/1782533719856/text_title_p.png",
            watermark: "https://uploads.onecompiler.io/42yatf6fu/1782533795284/watermark_purple.png"
        },
        beta: {  // Orange Edition (Default)
            themeColor: "#FF4A17",
            logo: "https://uploads.onecompiler.io/42yatf6fu/1782533768745/logo_orange%20y.png",
            favicon: "https://uploads.onecompiler.io/42yatf6fu/1782533768745/logo_orange%20y.png",
            textTitle: "https://uploads.onecompiler.io/42yatf6fu/1782533702320/text_title%20o.png",
            watermark: "https://uploads.onecompiler.io/42yatf6fu/1782533728574/watermark_orange.png"
        }
    },

    /**
     * Get the correct asset URL based on Edition and Festival status.
     * @param {string} type - 'logo', 'favicon', 'textTitle', 'watermark'
     */
    getAsset: function(type) {
        // 1. Check Festival Override first
        if (this.festivalMode.active) {
            if (type === 'logo' && this.festivalMode.priorityLogo) return this.festivalMode.priorityLogo;
            if (type === 'favicon' && this.festivalMode.priorityFavicon) return this.festivalMode.priorityFavicon;
        }

        // 2. Return Standard Edition Asset
        const edition = this.assets[this.activeEdition];
        return edition ? edition[type] : this.assets['beta'][type];
    },

    /**
     * Switch entire app branding instantly
     */
    switchEdition: function(editionName) {
        if (!this.assets[editionName]) return;
        this.activeEdition = editionName;
        localStorage.setItem('nexra_edition', editionName);
        document.documentElement.style.setProperty('--brand-main', this.assets[editionName].themeColor);
        this.refreshDOMAssets();
        console.log(`[Nexra Brand] Switched to ${editionName.toUpperCase()} Edition`);
    },

    /**
     * Updates all image tags in the DOM that use the dynamic branding classes
     */
    refreshDOMAssets: function() {
        document.querySelectorAll('.nx-brand-logo').forEach(el => el.src = this.getAsset('logo'));
        document.querySelectorAll('.nx-brand-title').forEach(el => el.src = this.getAsset('textTitle'));
        document.querySelectorAll('.nx-brand-watermark').forEach(el => el.src = this.getAsset('watermark'));
        
        const favicon = document.getElementById('dynamic-favicon');
        if(favicon) favicon.href = this.getAsset('favicon');
    }
};

/**
 * --------------------------------------------------------------------------
 * 4. HYBRID STORAGE ABSTRACTION LAYER
 * --------------------------------------------------------------------------
 * This service determines how files are saved. 
 * - Icons/Thumbnails -> Base64 string directly in Firestore (Ultra-fast load).
 * - Large Files/Images -> Uploaded to Supabase Storage, URL saved to Firestore.
 * - Firebase Storage is STRICTLY BYPASSED.
 */
window.NexraStorage = {
    /**
     * Converts a File to Base64 String
     */
    toBase64: (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    }),

    /**
     * Primary upload router
     * @param {File} file - The file to upload
     * @param {string} bucket - The Supabase bucket name (e.g., 'products', 'avatars')
     */
    upload: async function(file, bucket = 'general') {
        const MAX_BASE64_SIZE = 50 * 1024; // 50KB

        if (file.size <= MAX_BASE64_SIZE) {
            // Small file: Use Base64 (Store in DB directly)
            console.log("[Storage] File is small. Encoding to Base64...");
            return await this.toBase64(file);
        } else {
            // Large file: Use Supabase Storage
            console.log("[Storage] Uploading to Supabase Storage...");
            if (!window.supabaseClient) throw new Error("Supabase Client not loaded.");

            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
            const filePath = `${bucket}/${fileName}`;

            const { data, error } = await window.supabaseClient.storage
                .from('nexra_media') // Make sure this bucket is created in Supabase!
                .upload(filePath, file, { cacheControl: '3600', upsert: false });

            if (error) throw error;

            // Generate public URL
            const { data: urlData } = window.supabaseClient.storage
                .from('nexra_media').getPublicUrl(filePath);

            return urlData.publicUrl;
        }
    }
};

/**
 * --------------------------------------------------------------------------
 * 5. GLOBAL ROUTE REGISTRY (BASE SETUP)
 * --------------------------------------------------------------------------
 * All links in the app will use `Nexra.navTo('key')`. 
 * This registry maps Keys to Folder Paths.
 */
window.NexraRoutes = {
    baseUrl: window.location.origin, // Changes dynamically based on hosting (Vercel/InfinityFree)
    registry: {
        'home': '/discovery/home.html',
        'shop': '/shop/shop.html',
        'product': '/shop/product-detail.html',
        'freebies': '/freebies/free-vault.html',
        'blog': '/academy/academy-home.html',
        'admin': '/admin.html',
        '404': '/system/error-404.html'
    },
    
    // Universal URL Generator
    generateURL: function(key, params = '') {
        const path = this.registry[key] || this.registry['404'];
        return `${this.baseUrl}${path}${params}`;
    }
};

// Initialize DOM bindings once window loads
window.addEventListener('DOMContentLoaded', () => {
    if(window.NexraBrand) window.NexraBrand.refreshDOMAssets();
});
