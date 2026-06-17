<div align="center">
  <img src="https://uploads.onecompiler.io/42yatf6fu/44qbafhwy/IMG_4795.png" alt="Nexra Logo" width="130" />
  <h1>🚀 NEXRA PK | ELITE DIGITAL ECOSYSTEM</h1>
  <p><b>The Ultimate B2C Marketplace, B2B SaaS Reseller Network & Creator Hub.</b></p>
  
  [![Version](https://img.shields.io/badge/Version-3.0.0_Enterprise-FF4A17.svg?style=for-the-badge)]()
  [![Architecture](https://img.shields.io/badge/Architecture-Modular_MPA-10b981.svg?style=for-the-badge)]()
  [![Routing](https://img.shields.io/badge/Routing-Domain_Independent-8b5cf6.svg?style=for-the-badge)]()
  [![Tech](https://img.shields.io/badge/Tech-Vanilla_JS_+_Firebase-FFCA28.svg?style=for-the-badge)]()
  [![License](https://img.shields.io/badge/License-PROPRIETARY_&_STRICTLY_CONFIDENTIAL-red.svg?style=for-the-badge)]()
</div>

<hr />

<h2>🌐 1. Platform Overview</h2>
<p>
  <b>Nexra PK</b> is a highly optimized, domain-independent, Multi-Page Application (MPA) built without relying on bloated frontend frameworks like React or Vue. It delivers lightning-fast load times, superior SEO, and infinite scalability.
</p>
<p>
  More than just an e-commerce store, Nexra is a complete <b>Digital Ecosystem</b> that unites Buyers, Creators, Influencers, and B2B Agencies under one highly scalable architecture powered by custom Vanilla JS engines and Firebase.
</p>

---

<h2>🧠 2. Core Architectural Innovations</h2>

### 🔗 Domain-Independent URL Engine
The entire platform is built with a dynamic, migration-safe routing architecture. **No domain, subdomain, or hosting path is ever hardcoded.** 
* Seamlessly migrates between Vercel, Firebase Hosting, Cloudflare Pages, or custom VPS.
* Employs Vercel Rewrites (`vercel.json`) to mask physical `.html` files, delivering premium, short SEO slugs.
* **Routing Map:**
  * `/h` ➔ Main Dashboard
  * `/s` ➔ Marketplace
  * `/p/{product-slug}` ➔ Product Detail
  * `/c/{product-slug}` ➔ Secure Checkout
  * `/f/{freebie-slug}` ➔ Free Vault & Downloads
  * `/b/{blog-slug}` ➔ Tech Insights
  * `/u/{username}` ➔ Public Profile & Vault
  * `/r/{store-slug}` ➔ Reseller Public Storefront

### ⚡ Vanilla Component Injector
Achieves the modularity of React without the overhead. The custom `core.js` engine dynamically injects `header.html`, `footer.html`, and `sidebar.html` across 37+ pages instantly, maintaining a single source of truth for UI components.

### 📊 Advanced Analytics & Tracking Ready
Architected to support granular tracking:
* Independent tracking for WhatsApp, Telegram, LinkedIn, Instagram, and QR code traffic.
* Deep analytics for Clicks, Conversions, Affiliate Referrals, Commission Link performance, and Reseller Store visits.

---

<h2>🔥 3. Comprehensive Feature Matrix</h2>

### 🛒 A. E-Commerce & Checkout Engine
* **Instant Encrypted Delivery:** SaaS subscriptions and license keys are dispatched to the User Vault via automated APIs.
* **Smart Bundle Engine:** Interactive drag-and-drop builder. Auto-calculates progressive discounts (e.g., 20% off for 3+ items).
* **Localized & Crypto Payments:** Built-in UI for Easypaisa, JazzCash, Bank Transfers, and USDT (TRC-20) with screenshot/proof upload integration.

### 💼 B. B2B Reseller Enterprise
* **Shopify-Style Store Builder:** A live split-screen visual editor allowing resellers to customize colors, fonts, and logos for their branded storefront (`/r/{store-slug}`).
* **Developer API Portal:** Stripe-inspired API documentation allowing agencies to generate API keys and integrate Nexra's auto-dispatch system into their own websites.
* **Margin Calculator:** Resellers set their own retail prices while the system auto-calculates wholesale costs and profit margins.

### 🎨 C. Creator Hub (Youtuber Bano)
* **Upload Portal:** Creators can upload Source Codes, Premium Templates, and Thumbnail PSDs directly to the platform.
* **Gamified Unlocking:** "Share 3 Times to Unlock" local-storage mechanic driving viral organic growth.
* **Public Portfolios:** Creators get a public URL to showcase their assets, gather followers, and track downloads.

### 👑 D. VIP Gamification & Community
* **VIP Tiers:** Free, Pro, Diamond, and Agency tiers with dynamic pricing toggles (Monthly/Yearly).
* **Private Telegram-Style Hub:** A restricted, read-only feed for VIP members to receive zero-cost premium software drops and admin announcements.
* **Live Giveaway Engine:** A verifiably random spin-wheel system with unique ticket generation (e.g., `NX-GA-123456`) and QR code verification.
* **Achievements & Rewards:** Users earn XP, unlock milestone badges, and exchange Nexra Coins for discounts.

---

<h2>📁 4. Clean Folder Structure</h2>
<p><i>Strictly maintained without unnecessary sub-folders (like /public or /media) to ensure rapid routing and asset resolution.</i></p>

```text
/nexra-ecosystem
├── index.html                   # Splash Screen & Maintenance Gatekeeper
├── vercel.json                  # URL Routing & Rewrite Engine
├── /assets/                     # Global CSS, Core JS, Fonts
├── /components/                 # Reusable HTML (Nav, Footer, Cart, Toasts)
├── /pages/
│   ├── /marketplace/            # s.html, p.html, c.html, bundle.html
│   ├── /creator/                # f.html, fd.html, b.html, creator-hub.html
│   ├── /reseller/               # agency.html, builder.html, api.html
│   ├── /user/                   # u.html (Vault, Wallet, Security, Settings)
│   ├── /support/                # help.html, roadmap.html, tracking.html
│   └── /system/                 # 404.html, status.html, maintenance.html
<h2>🚀 5. Local Development Setup</h2>
Due to the Custom Component Injector (fetch API), this project cannot be run directly from the file system (file:///).
Clone the repository.
Open the directory in VS Code.
Install the Live Server extension.
Right-click index.html and select "Open with Live Server".
The platform will initialize at http://127.0.0.1:5500/.
<br>
<hr style="border: 2px solid #ff0000;" />
<div align="center" style="background-color: rgba(255,0,0,0.05); padding: 20px; border-radius: 10px; border: 1px solid #ff0000;">
<h2 style="color: #ff0000; font-family: 'Arial Black', sans-serif; font-weight: 900; letter-spacing: 1px; text-transform: uppercase;">
🛑 STRICT LEGAL DISCLAIMER & INTELLECTUAL PROPERTY WARNING 🛑
</h2>
</div>
<br>
CONFIDENTIALITY & TRADE SECRET NOTICE:
This entire ecosystem—including its source code, UI/UX design components, proprietary Vanilla JS routing architecture (vercel.json rewrites and core.js), business logic, B2B Reseller models, and directory structure—is the exclusive intellectual property of ARBAB NASRULLAH / NEXRA PK.
<h3 style="color: #ff0000;">⚠️ ZERO TOLERANCE POLICY ⚠️</h3>
NO OPEN SOURCE LICENSE: This is NOT an open-source project. You are viewing strictly proprietary, enterprise-grade software.
NO CLONING OR REPLICATION: You are strictly prohibited from copying, forking, cloning, reverse-engineering, modifying, selling, or distributing this code, partially or fully.
BUSINESS MODEL PROTECTION: Replicating the specific logic flows created here (e.g., The "Share 3x to Unlock" engine, The Reseller Live Storefront Builder, The Vercel Dynamic Slug Architecture, or the VIP Community Hub) for a competing business is a direct violation of trade secrets.
LEGAL CONSEQUENCES:
Any unauthorized use, extraction of CSS/JS, or hosting of this repository will result in immediate legal action. This includes filing DMCA Takedown notices directly to your hosting providers (Vercel, GitHub, Hostinger, AWS, Cloudflare) leading to the permanent suspension of your accounts, followed by financial damage claims under international Intellectual Property (IP) and Copyright laws.
If you have been granted temporary access to this repository for auditing, hiring review, or technical evaluation, you are bound by an implied Non-Disclosure Agreement (NDA). Close this repository immediately upon completion of your review.
<br>
<hr />
<div align="center">
<p>Engineered with precision for the future of the digital economy.</p>
<p><b>© 2026 NEXRA PK. All Rights Reserved.</b></p>
<p>
<a href="https://www.instagram.com/nexrapk/" target="_blank">Official Instagram</a> •
<a href="https://www.instagram.com/iam.arbabnasru/" target="_blank">Founder Contact</a>
</p>
</div>
