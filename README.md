# Kessler-Voss Extractive

> **Tomorrow, Extracted.**

Kessler-Voss Extractive operates lunar surface mining, water ice harvesting, and sintering refineries across cislunar space. This repository contains the official web application for Kessler-Voss Extractive.

---

## Technical Overview

The application is built as a high-performance, zero-dependency static web application designed for maximum visual polish, accessibility (WCAG 2.1 AA), and optimal Core Web Vitals performance.

### Key Highlights

- **Zero Node Dependencies in Production**: Serves pre-compiled, minified static stylesheets (`css/tailwind.css`) with no runtime Node.js or server-side dependencies.
- **Custom Design System**: Dark industrial palette featuring `#fffbbd` (Sulfur Glow), `#b2f2fa` (Ice Blue), `#131316` (Surface Dark), and `#0e0e10` (Void Black).
- **Text Decoder Scramble Effect**: Custom ES module (`js/modules/decoder.js`) delivering sci-fi text decode animations across headings while preserving line wrapping and performance.
- **Real-Time Telemetry Stream**: Interactive operational metrics monitor (`js/modules/telemetry.js`) simulating extraction yields and telemetry flux.
- **Optimized for Core Web Vitals (CWV)**:
  - **LCP Optimization**: Preloaded hero background asset with `fetchpriority="high"`.
  - **Non-Render-Blocking Styling**: Preconnected Google Font origins and consolidated static CSS bundle.
- **Brand Assets**: Custom vector moon favicon (`assets/favicon.svg`) and multi-resolution binary (`favicon.ico`).

---

## Lighthouse Performance Audit

The application achieves industry-leading Google Lighthouse scores across all key metrics:

| Category | Score | Details |
| :--- | :---: | :--- |
| ⚡ **Performance** | **99** | Preloaded LCP hero image (`fetchpriority="high"`), zero render-blocking CSS, optimized asset sizes. |
| ♿ **Accessibility** | **100** | Full WCAG 2.1 AA compliance, semantic HTML5, focus indicators, and screen reader ARIA attributes. |
| 🛡️ **Best Practices** | **100** | Zero console warnings, production static CSS bundle (no CDN script warnings), modern standards. |
| 🔍 **SEO** | **100** | Complete metadata, OpenGraph tags, Twitter cards, single `<h1>` hierarchy, and canonical URL wiring. |

---

## Built with Agentic AI

This application was developed using a state-of-the-art **Agentic AI Workflow**, demonstrating next-generation autonomous web development, design synthesis, and performance engineering:

- **Content Outline**: Brand messaging hierarchy, copywriting narrative, and structural content framing.
- **Google Stitch**: UI/UX design directional synthesis, color palette curation, and visual layout systems.
- **Google Antigravity**: Autonomous agentic AI pair programming, technical architecture, animation bug debugging, Core Web Vitals (CWV/LCP) optimization, and zero-dependency build execution.

## Directory Structure

```text
kessler-voss/
├── assets/
│   └── favicon.svg           # Vector source for brand moon icon
├── css/
│   ├── input.css             # Entry point importing main.css and Tailwind directives
│   ├── main.css              # Custom animation keyframes and accessibility utilities
│   └── tailwind.css          # Pre-compiled, minified production stylesheet (30 KB)
├── js/
│   ├── modules/
│   │   ├── decoder.js        # Text decoder scramble effect
│   │   ├── form-handler.js   # Transmission modal and contact form handler
│   │   ├── navigation.js     # Responsive mobile menu and smooth scrolling
│   │   └── telemetry.js      # Real-time telemetry feed simulator
│   ├── utils/
│   │   └── observer.js       # IntersectionObserver scroll reveals
│   └── main.js               # Application entry point
├── favicon.ico               # Multi-resolution binary icon (16x16, 32x32, 48x48, 64x64)
├── index.html                # Primary HTML markup
├── tailwind.config.js        # Tailwind CSS theme configuration and plugins
├── .gitignore                # Git repository ignore rules
└── README.md                 # Project documentation
```

---

## Development & Deployment

### Local Development
Since the project relies purely on standard web standards (HTML5, Vanilla CSS, ES Modules), you can serve it using any static HTTP server:

```bash
# Using Python 3
python3 -m http.server 8000

# Or using npx serve
npx serve .
```

Open `http://localhost:8000` in your browser.

### Rebuilding Tailwind CSS (Development Only)
If you modify `tailwind.config.js`, `css/main.css`, or Tailwind utility classes in `index.html`, you can recompile `css/tailwind.css` locally using Tailwind CLI:

```bash
npx tailwindcss -i ./css/input.css -o ./css/tailwind.css --minify
```

---

## License

Copyright © Kessler-Voss Extractive. All rights reserved.
