/* ==========================================================================
   NEXRA ELITE ECOSYSTEM - CORE ENGINE v3.0
   ========================================================================== */

window.NexraCore = (function() {
    'use strict';

    // 1. ENGINE STATE
    const state = {
        theme: localStorage.getItem('nexra-theme') || 'light',
        isOnline: navigator.onLine,
        baseUrl: window.location.origin
    };

    // 2. ROUTING ENGINE (Domain-Independent URL Manager)
    const routes = {
        home: '/h',
        shop: '/s',
        product: (slug) => `/p/${slug}`,
        checkout: (slug) => `/c/${slug}`,
        orderSuccess: (id) => `/o/${id}`,
        freebies: '/f',
        freebieDetail: (slug) => `/f/${slug}`,
        blog: '/b',
        blogDetail: (slug) => `/b/${slug}`,
        userDash: (username) => `/u/${username}`,
        resellerDash: '/agency',
        storefront: (storeSlug) => `/r/${storeSlug}`,
        support: '/help',
        login: '/auth'
    };

    function navigate(routeKey, param = '') {
        const path = typeof routes[routeKey] === 'function' ? routes[routeKey](param) : routes[routeKey];
        if (path) {
            window.location.href = state.baseUrl + path;
        } else {
            console.error(`[Nexra Engine] Route '${routeKey}' not found.`);
        }
    }

    // 3. THEME MANAGER
    function applyTheme() {
        document.documentElement.setAttribute('data-theme', state.theme);
        // Dispatch custom event for UI components to listen to
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: state.theme } }));
    }

    function toggleTheme() {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('nexra-theme', state.theme);
        applyTheme();
        showToast(`${state.theme.charAt(0).toUpperCase() + state.theme.slice(1)} Mode Activated`, 'info');
    }

    // 4. MODULAR COMPONENT INJECTOR
    async function loadComponents() {
        const injectables = document.querySelectorAll('[data-include]');
        
        for (let el of injectables) {
            const componentName = el.getAttribute('data-include');
            try {
                // Fetch the component HTML
                const response = await fetch(`${state.baseUrl}/components/${componentName}.html`);
                if (response.ok) {
                    const html = await response.text();
                    el.innerHTML = html;
                    
                    // Execute scripts if any exist inside the loaded component
                    const scripts = el.querySelectorAll('script');
                    scripts.forEach(script => {
                        const newScript = document.createElement('script');
                        if (script.src) newScript.src = script.src;
                        else newScript.textContent = script.textContent;
                        document.body.appendChild(newScript);
                        document.body.removeChild(newScript);
                    });
                }
            } catch (err) {
                console.error(`[Nexra Engine] Failed to load component: ${componentName}`, err);
            }
        }
    }

    // 5. GLOBAL UI NOTIFICATIONS (TOASTS)
    function showToast(message, type = 'info') {
        let container = document.getElementById('nexra-toast-container');
        
        // If container doesn't exist, create it
        if (!container) {
            container = document.createElement('div');
            container.id = 'nexra-toast-container';
            container.style.cssText = 'position:fixed; bottom:30px; left:50%; transform:translateX(-50%); z-index:99999; display:flex; flex-direction:column; gap:10px; pointer-events:none;';
            document.body.appendChild(container);
        }

        const icons = {
            success: '<i class="fa-solid fa-circle-check" style="color:var(--success);"></i>',
            error: '<i class="fa-solid fa-circle-xmark" style="color:var(--danger);"></i>',
            warning: '<i class="fa-solid fa-triangle-exclamation" style="color:var(--warning);"></i>',
            info: '<i class="fa-solid fa-circle-info" style="color:var(--brand-main);"></i>'
        };

        const toast = document.createElement('div');
        toast.style.cssText = 'background:var(--bg-surface); border:1px solid var(--glass-border); padding:15px 25px; border-radius:50px; box-shadow:var(--shadow-float); font-size:13px; font-weight:700; color:var(--text-100); display:flex; align-items:center; gap:10px; pointer-events:auto; animation:slideUpToast 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;';
        
        toast.innerHTML = `${icons[type] || icons.info} <span>${message}</span>`;
        container.appendChild(toast);

        // Add dynamic CSS for toast animation if not exists
        if (!document.getElementById('toast-keyframes')) {
            const style = document.createElement('style');
            style.id = 'toast-keyframes';
            style.innerHTML = `
                @keyframes slideUpToast { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
                @keyframes fadeOutToast { to { opacity:0; transform:translateY(20px); } }
            `;
            document.head.appendChild(style);
        }

        // Auto remove
        setTimeout(() => {
            toast.style.animation = 'fadeOutToast 0.4s forwards';
            setTimeout(() => toast.remove(), 400);
        }, 3500);
    }

    // 6. INITIALIZATION
    function init() {
        applyTheme();
        loadComponents();

        // Global Event Listeners
        window.addEventListener('online', () => showToast('Connection Restored', 'success'));
        window.addEventListener('offline', () => showToast('You are offline. Features may be limited.', 'error'));
        
        console.log('%c🚀 Nexra Ecosystem Core Initialized', 'color:#FF4A17; font-weight:bold; font-size:14px;');
    }

    // Auto-init on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // PUBLIC API
    return {
        navigate,
        toggleTheme,
        showToast,
        getRoute: (key, param) => typeof routes[key] === 'function' ? routes[key](param) : routes[key]
    };

})();
