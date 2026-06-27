/**
 * NEXRA COMPONENTS ENGINE
 * Injects and manages Global UI Modules
 */

window.NexraUI = {
    init: async function() {
        // Mount Header & Slider
        await this.loadComponent('header-container', 'components/header.html');
        await this.loadComponent('sidebar-container', 'components/slider.html');
        
        // Refresh Branding Assets
        if(window.NexraBrand) NexraBrand.refreshDOMAssets();
    },

    loadComponent: async function(id, path) {
        const target = document.getElementById(id);
        if(!target) return;
        try {
            const res = await fetch(path);
            const html = await res.text();
            target.innerHTML = html;
            
            // Execute scripts within component
            const scripts = target.querySelectorAll("script");
            scripts.forEach(s => {
                const ns = document.createElement("script");
                ns.text = s.innerHTML;
                document.body.appendChild(ns).parentNode.removeChild(ns);
            });
        } catch(e) { console.error(`[UI] Failed to load ${path}`); }
    },

    toggleSlider: function() {
        document.getElementById('s-overlay').classList.toggle('active');
        document.getElementById('s-drawer').classList.toggle('active');
    },

    toggleCart: function() {
        // Placeholder for Step: Cart Module
        Nexra.navTo('checkout');
    },

    setTheme: function(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        document.getElementById('t-light').classList.toggle('active', theme === 'light');
        document.getElementById('t-dark').classList.toggle('active', theme === 'dark');
    }
};

// Auto-init UI
window.addEventListener('load', () => NexraUI.init());
