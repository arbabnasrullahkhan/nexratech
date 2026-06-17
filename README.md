<div align="center">
  <img src="https://uploads.onecompiler.io/42yatf6fu/44qbafhwy/IMG_4795.png" alt="Nexra Logo" width="150" style="filter: drop-shadow(0 15px 25px rgba(255,74,23,0.4));" />
  
  <h1 style="font-size: 3rem; margin-bottom: 0;">🚀 NEXRA PK | ELITE DIGITAL ECOSYSTEM</h1>
  <p style="font-size: 1.2rem; color: #666;"><b>The Ultimate B2C, B2B SaaS, and Digital Agency Infrastructure.</b></p>
  
  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Version-3.0.0--Enterprise-FF4A17.svg?style=for-the-badge&logo=rocket" alt="Version" />
    <img src="https://img.shields.io/badge/Architecture-Modular_MPA-10b981.svg?style=for-the-badge&logo=codeigniter" alt="Architecture" />
    <img src="https://img.shields.io/badge/Performance-Ultra_Fast-3b82f6.svg?style=for-the-badge&logo=speedtest" alt="Performance" />
    <img src="https://img.shields.io/badge/License-STRICTLY_CONFIDENTIAL-red.svg?style=for-the-badge&logo=probot" alt="License" />
  </p>
</div>

<hr />

<details open>
  <summary><b>📖 Table of Contents</b></summary>
  <ol>
    <li><a href="#-about-the-ecosystem">About The Ecosystem</a></li>
    <li><a href="#-architectural-marvel">Architectural Marvel (Tech Stack)</a></li>
    <li><a href="#-core-modules--features">Core Modules & Features</a></li>
    <li><a href="#-advanced-routing--seo-engine">Advanced Routing & SEO Engine</a></li>
    <li><a href="#-folder-structure">Folder Structure</a></li>
    <li><a href="#-deployment--setup">Deployment & Setup</a></li>
    <li><a href="#-strict-legal-disclaimer--copyright">STRICT LEGAL DISCLAIMER (MUST READ)</a></li>
  </ol>
</details>

<hr />

## 🌐 About The Ecosystem

**Nexra PK** is not just an e-commerce platform; it is a hyper-scalable, domain-independent **Multi-Page Application (MPA)** ecosystem. Engineered without the bloat of heavy JS frameworks (React/Vue), it relies on native HTML5, modern CSS3 (Custom Properties & Glassmorphism), and highly optimized Vanilla JS. 

The platform bridges the gap between **3 core audiences**:
1. **B2C Consumers:** Buying digital assets, software licenses, and SaaS subscriptions.
2. **B2B Resellers:** Managing white-labeled storefronts, margins, and API auto-dispatching.
3. **Content Creators:** Using the "Creator Hub" to download and share source codes, UI kits, and video templates.

---

## 🏗️ Architectural Marvel

We prioritized speed, SEO, and developer experience (DX). By utilizing **Dynamic Component Injection**, the entire 37-page ecosystem shares a single header, footer, and sidebar instance without requiring a Node.js backend to render them.

| Technology | Implementation Details |
| :--- | :--- |
| **Frontend UI** | HTML5, Native CSS3 (Glassmorphism, CSS Grid/Flexbox, Custom Variables). |
| **Logic Engine** | Vanilla JavaScript (ES6+). State management via `localStorage`. |
| **Routing** | Vercel Edge Rewrites (`vercel.json`). Removes `.html` extensions. |
| **Backend Integration** | Pre-architected for **Firebase** (Auth, Firestore, Cloud Storage). |
| **Icons & Fonts** | Premium Inline SVGs, FontAwesome V6, Space Grotesk, Plus Jakarta Sans. |

---

## 🔥 Core Modules & Features

### 🛒 1. Marketplace & E-Commerce
* **Smart Bundle Builder:** Drag-and-drop UI to build packages. JS automatically calculates progressive discounts (e.g., 20% off for 3+ items).
* **Live Giveaway Engine:** Verifiably random spin-wheel engine with unique Ticket ID generation and QR codes.
* **Encrypted Checkout:** Support for Crypto (USDT), Bank Transfers, and Local Wallets (Easypaisa/JazzCash) with screenshot proof uploading.

### 💼 2. B2B Reseller Enterprise
* **Live Storefront Builder:** A Shopify-style split-screen visual editor allowing resellers to customize colors, fonts, and logos in real-time.
* **Developer API Portal:** Stripe-inspired API documentation (`/api-docs`) for integrating Nexra's auto-dispatch webhooks externally.
* **Margin Controller:** Resellers set their own pricing on top of base API prices.

### 🎨 3. Creator Hub ("Youtuber Bano")
* **Upload Portal:** Interactive drag-and-drop zone for creators to submit files (.ZIP, .PSD, .PRPROJ).
* **Share-to-Unlock System:** Growth-hacking logic that forces users to share the link 3 times to unlock premium freebies.
* **Public Portfolios:** `nexrapk.com/u/creator-name` pages showcasing uploaded assets, followers, and badges.

### 🔐 4. Gamified User Dashboard
* **Digital Vault:** Secure storage for purchased license keys (click-to-reveal) and direct download links.
* **Nexra Coins & Wallet:** Loyalty system. Earn coins via referrals and spend them in the **Reward Store**.
* **Security Center:** Active session management, 2FA toggles, and password controls.

---

## 🧭 Advanced Routing & SEO Engine

The platform features a **Centralized URL Engine** (`core.js`) coupled with `vercel.json` rewrites. This guarantees that the architecture remains completely **Domain-Independent**.

**Beautiful, SEO-Optimized Slugs:**
* `nexrapk.com/h` *(Home Dashboard)*
* `nexrapk.com/s` *(Marketplace)*
* `nexrapk.com/p/capcut-pro` *(Product Detail)*
* `nexrapk.com/c/capcut-pro` *(Checkout)*
* `nexrapk.com/f/modern-ui-kit` *(Freebie Vault)*
* `nexrapk.com/u/arbab` *(User Profile)*
* `nexrapk.com/r/agency-store` *(Reseller Public Store)*

---

## 📂 Folder Structure

<details>
  <summary><b>Click to expand the file tree</b></summary>
  
```text
/nexra-ecosystem
├── vercel.json                 # Core routing engine (Hides .html)
├── index.html                  # Splash Screen & Maintenance Gatekeeper
├── /assets/
│   ├── /css/global.css         # Design Tokens & Themes
│   └── /js/core.js             # Router & Component Injector
├── /components/                # Auto-injected UI partials
│   ├── header.html             # Floating Island Nav
│   ├── cart-drawer.html        # Slide-out Cart
│   └── footer.html             # Global Mega Footer
├── /pages/
│   ├── /marketplace/           # s.html, p.html, c.html, bundle.html
│   ├── /reseller/              # agency.html, builder.html, api.html
│   ├── /creator/               # f.html, fd.html, creator-hub.html
│   ├── /user/                  # u.html (Vault, Wallet, Settings)
│   ├── /support/               # help.html, roadmap.html, feedback.html
│   └── /legal/                 # privacy.html, terms.html
</details>
🚀 Deployment & Setup
Because this ecosystem utilizes modern JavaScript fetch() APIs to inject components dynamically, it cannot be run by simply double-clicking an .html file (due to Browser CORS policies).
Local Development:
Clone the repository to your local machine.
Open the directory in VS Code.
Install the Live Server extension.
Right-click index.html -> Open with Live Server.
Production Deployment (Vercel):
Push the code to a private GitHub repository.
Import the repository into Vercel.
Vercel will automatically read vercel.json and apply the clean URL routing.
<br>
<!-- STRICT LEGAL DISCLAIMER -->
<div align="center">
<div style="background-color: rgba(239, 68, 68, 0.05); border: 2px solid #ef4444; border-left: 10px solid #ef4444; padding: 25px; border-radius: 12px; text-align: left; max-width: 900px; margin: 0 auto;">
<h2 style="color: #ef4444; font-family: 'Arial', sans-serif; font-weight: 900; margin-top: 0; text-transform: uppercase;">
🛑 STRICT LEGAL DISCLAIMER & COPYRIGHT NOTICE 🛑
</h2>
<p style="font-size: 15px; line-height: 1.6; color: #333;">
<b>CONFIDENTIALITY & INTELLECTUAL PROPERTY WARNING:</b><br><br>
This entire codebase, including its UI/UX design, custom algorithms, Vercel routing architecture, modular HTML component injection system, CSS design tokens, JavaScript logic, and folder structure, is the <b>exclusive intellectual property of ARBAB NASRULLAH / NEXRA PK</b>.
</p>
<h3 style="color: #ef4444; margin-bottom: 10px; font-weight: 800;">⚠️ ZERO TOLERANCE POLICY</h3>
<ul style="font-size: 14px; line-height: 1.6; color: #333; margin-bottom: 20px;">
<li><b>NO PERMISSION</b> is granted to copy, fork, clone, replicate, reverse-engineer, sell, distribute, or host this code (partially or fully) under any circumstances.</li>
<li><b>NO OPEN SOURCE LICENSE</b> is attached to this repository. You are viewing proprietary, enterprise-grade software.</li>
<li>Using this code, its UI components, or its unique logic flow to build a competing business (e.g., selling digital products, SaaS licenses, templates, or B2B reseller APIs) is strictly prohibited.</li>
</ul>
<p style="font-size: 14px; line-height: 1.6; color: #333; border-top: 1px solid rgba(239,68,68,0.2); padding-top: 15px;">
<b>LEGAL ACTION:</b> Any unauthorized use, modification, or distribution of this code will result in immediate legal action. This includes, but is not limited to, <b>DMCA Takedown notices</b> sent directly to your hosting provider (Vercel, GitHub, Hostinger, Cloudflare, etc.), and financial damages claims pursued under international copyright and intellectual property laws.
</p>
<p style="font-size: 12px; font-style: italic; color: #666; margin-bottom: 0;">
*If you have been granted temporary access to this repository for review, auditing, or development purposes, you are legally bound by a Non-Disclosure Agreement (NDA). Do not download, distribute, or share.*
</p>
</div>
</div>
<br>
<hr />
<div align="center">
<p style="font-size: 14px; color: #666;">Engineered with precision for the future of the digital economy.</p>
<p style="font-size: 16px;"><b>© 2026 NEXRA PK. All Rights Reserved.</b></p>
<p>
<a href="https://www.instagram.com/nexrapk/" target="_blank"><img src="https://img.shields.io/badge/Official-Instagram-E1306C?style=flat-square&logo=instagram" alt="Nexra Instagram"/></a>
&nbsp;
<a href="https://www.instagram.com/iam.arbabnasru/" target="_blank"><img src="https://img.shields.io/badge/Founder-Arbab_Nasrullah-10b981?style=flat-square&logo=instagram" alt="Founder Contact"/></a>
</p>
</div>
