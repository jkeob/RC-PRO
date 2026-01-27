# RC PRO - Ranger Challenge Training App

A Progressive Web App (PWA) for Ranger Challenge / EIB / ESB training. Study standards, track your progress, and prepare for competition — all from your phone, **no app store required**.



## ✨ Features

- **📱 Install on Any Device** — Add to Home Screen on iOS/Android for an app-like experience
- **📴 Works Offline** — Service worker caches everything for use without internet
- **✅ Progress Tracking** — Mark tasks complete; progress saves locally
- **🎯 Standards-Based** — Content from official EIB/ESB Handbook (USAIS PAM 350-6)
- **⏱️ Time Standards** — See GO/NO-GO time limits for each task

## 📋 Content Categories

| Category | Tasks |
|----------|-------|
| **Weapons** | M4/M16, M320, M18 Pistol, M249 SAW, Hand Grenades |
| **Medical / TC3** | 9-Line MEDEVAC, Care Under Fire, Bleeding Control, Chest Injuries |
| **Land Navigation** | Day/Night Nav, Resection, Map Reading |
| **Patrol** | Call For Fire, SPOT Report, Radio Ops, CBRN |
| **Fitness** | EPFA Standards, 12-Mile Ruck |

## 🚀 Quick Start

### Run Locally
```bash
cd ranger-challenge
python -m http.server 8080
# Open http://localhost:8080
```

### Deploy to GitHub Pages
1. Go to repo **Settings → Pages**
2. Set source to `main` branch, `/ranger-challenge` folder
3. Your app will be live at `https://jkeob.github.io/RC-PRO/`

## 📲 Install on iPhone
1. Open the app link in **Safari**
2. Tap the **Share** button (square with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **Add** — done!

## 🛠️ Tech Stack

- **HTML/CSS/JS** — No build step, no dependencies
- **PWA** — Manifest + Service Worker for offline/installable
- **LocalStorage** — Progress saves on-device
- **Mobile-First Design** — Dark theme, touch-optimized

## 📁 Project Structure

```
ranger-challenge/
├── index.html      # App shell
├── styles.css      # Dark military theme
├── app.js          # Navigation & progress logic
├── data.js         # Training content (tasks/steps)
├── manifest.json   # PWA manifest
├── sw.js           # Service worker (offline)
└── icons/          # App icons
```

## 📖 Content Source

Based on **1/25 SBCT EIB/ESB Handbook (2021)** — USAIS Pamphlet 350-6 & TRADOC Regulation 672-9.

---

**Made for Soldiers, by Soldiers.** 🪖
