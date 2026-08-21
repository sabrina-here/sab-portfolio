# Sabrina Khan — Personal Developer Portfolio

A high-performance, modern developer portfolio built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**.

Featuring a bespoke **3-color palette**:
- **Background**: Deep Midnight Blue (`#0b132b` & `#070d19`)
- **Typography & Borders**: Crisp Slate White (`#f8fafc`) & Muted Slate (`#cbd5e1` / `#1c2d5a`)
- **Accent**: Warm Amber-Orange (`#f97316` / `#fb923c`)

---

## 🚀 Live Featured Projects Included

1. **QuizzingBuddy** (AI-Powered Quiz Platform) — [https://quizzingbuddy.web.app/](https://quizzingbuddy.web.app/)
2. **Shoe Resale** (Pre-Owned Footwear Marketplace) — [https://shoe-resale-3e39f.web.app/](https://shoe-resale-3e39f.web.app/)
3. **MachBazar** (Niche Fish & Seafood E-Commerce) — [https://machbazar-89a98.web.app/](https://machbazar-89a98.web.app/)

---

## 🛠️ Features & Architecture

- **Next.js 14 App Router**: Modern server-side rendering, metadata optimization, and client hydration.
- **Header / Navigation**: Responsive sticky blurred header with navigation anchors, quick resume launcher, and mobile menu.
- **Hero Section**: Value proposition highlighting frontend depth and full-stack progression, availability badge, quick metrics (`1+ Yr Exp`, `3.90 CGPA`, `100+ Solved DSA`).
- **Featured Projects**: Filterable project showcase cards with live application links, architecture highlights, tech badges, and "Currently Building" preview card.
- **Career Timeline**: Transparent, professional framing of 1+ year enterprise frontend development at Genie Info Tech (Denmark client delivery management platform).
- **Skills Matrix**: Categorized into Frontend Core, Backend & Database (Full-Stack Track), Languages & CS Fundamentals, and Workflow / AI Tools.
- **Academics & Competitive Programming**: B.Sc. CSE with 3.90 CGPA, LeetCode (50+), and Codeforces (50+) problem-solving credentials.
- **Interactive Contact**: 1-click email copy with animated feedback, direct contact inquiry form, location and timezone indicators.
- **Interactive Resume Modal**: Built-in formatted resume viewer with plain text copy and print/PDF support.

---

## 💻 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm run start
```

---

## ⚙️ Updating Content & Adding New Projects

All portfolio content is neatly organized in a single file:
👉 [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

You can easily:
- Add your new upcoming full-stack projects to the `PROJECTS` array.
- Update your competitive programming problem count.
- Update your bio, email, or social links.

---

## 🌐 Deployment (Vercel / Firebase / Netlify)

### Deploy to Vercel (Recommended for Next.js)
```bash
npx vercel
```
Or connect your GitHub repository directly to [Vercel](https://vercel.com) for automatic CI/CD deployments on every push.