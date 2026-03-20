# ⚛️ React Learning Journey — 30 Days

> **Author:** Harsh Chauhan | BCA Student → Aspiring Full-Stack Developer  
> **Goal:** Learn React fundamentals + build real projects every single day  
> **Stack:** React · Vite · JavaScript (ES6+) · HTML · CSS · Node.js

---

## ⚡ Create a New React Project (Vite)

```bash
# Create new React app with Vite
npm create vite@latest my-app -- --template react

# Move into the project folder
cd my-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

> 💡 Vite runs on `http://localhost:5173` by default

---

## 🐙 GitHub Commands (Daily Workflow)

### 🔧 First Time Setup
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 📁 Initialize a New Repo
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

### 🔄 Daily Push Workflow
```bash
git add .
git commit -m "Day 03 - useState Counter App"
git push
```

### 📥 Clone Existing Repo
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 🌿 Branch (Optional but Good Habit)
```bash
git checkout -b day-05-conditional-rendering   # create & switch branch
git push origin day-05-conditional-rendering   # push branch to GitHub
```

### 🔍 Useful Git Commands
```bash
git status          # see what changed
git log --oneline   # see commit history
git diff            # see exact line changes
```

---

## 🚀 Quick Start (Run Existing Project)

```bash
git clone <your-repo-url>
cd <project-folder>        # e.g. cd 03-react-state
npm install
npm run dev
```

---

## 🗓️ Week 1 — React Fundamentals

| Day | Concept | Project to Build | Key Takeaway |
|-----|---------|-----------------|--------------|
| 01 | JSX & React Basics | Profile Card | Understand how JSX compiles to JS |
| 02 | Props | Dynamic Profile Card | Data flows parent → child |
| 03 | useState | Counter App | State causes re-renders |
| 04 | Event Handling | Interactive Buttons | onClick, onChange basics |
| 05 | Conditional Rendering | Login / Logout UI | `&&` and ternary in JSX |
| 06 | Lists & Keys | Dynamic List App | Keys must be unique & stable |
| 07 | **Mini Project** | ✅ Todo UI | Combine Week 1 concepts |

---

## 🗓️ Week 2 — Core React Concepts

| Day | Concept | Project to Build | Key Takeaway |
|-----|---------|-----------------|--------------|
| 08 | Forms | Contact Form | Controlled vs uncontrolled |
| 09 | React Auth Flow (Login + Signup + Validation)| Form Validation | Single source of truth |
| 10 | useEffect | Data Fetch Demo | Side effects & cleanup |
| 11 | API Fetching | Weather App | fetch + async/await in React |
| 12 | Component Design | Dashboard Layout | Think in components |
| 13 | Reusable Components | UI Card Library | Props make components flexible |
| 14 | **Mini Project** | ✅ Product List | Combine Week 2 concepts |

---

## 🗓️ Week 3 — Intermediate React

| Day | Concept | Project to Build | Key Takeaway |
|-----|---------|-----------------|--------------|
| 15 | Folder Structure | Scalable App | `components/`, `pages/`, `hooks/` |
| 16 | Props Drilling | Multi-Component App | When drilling becomes a problem |
| 17 | useContext | Theme Switcher | Global state without prop drilling |
| 18 | Custom Hooks | Reusable Hook | Extract logic into `useSomething` |
| 19 | Performance Basics | Memo Demo | `React.memo`, `useMemo`, `useCallback` |
| 20 | React DevTools | Debugging | Inspect component tree & state |
| 21 | **Mini Project** | ✅ Blog UI | Combine Week 3 concepts |

---

## 🗓️ Week 4 — Real React Development

| Day | Concept | Project to Build | Key Takeaway |
|-----|---------|-----------------|--------------|
| 22 | React Router | Multi-Page App | `<BrowserRouter>`, `<Routes>`, `<Link>` |
| 23 | Dynamic Routing | Blog Pages | URL params with `useParams` |
| 24 | State Management Basics | App State | When to lift state up |
| 25 | API Integration | Crypto Dashboard | Real data + loading states |
| 26 | Loading & Error Handling | API UI | UX matters — show feedback |
| 27 | Component Optimization | Performance | Avoid unnecessary re-renders |
| 28 | UI Polishing | Styling Improvements | CSS modules or Tailwind basics |

---

## 🏁 Final Build Phase

| Day | Task | Details |
|-----|------|---------|
| 29 | Project Planning | Pick idea → design components → plan state |
| 30 | **Final Project** | Build a complete React app from scratch |

**Final Project Ideas (pick one):**
- 📝 Task Manager
- 📓 Notes App
- 💰 Crypto Tracker
- 🌤️ Weather Dashboard
- ✍️ Blog UI

---

## 📁 Folder Structure

```
Month1-React/
├── 01-react-basic-jsx/
├── 02-react-props/
├── 03-react-state/
├── 04-event-handling/
├── 05-conditional-rendering/
├── 06-list-rendering/
├── 07-mini-project-todo/
├── 08-forms/
├── 09-controlled-components/
├── 10-useEffect/
├── 11-api-fetch-weather/
├── 12-component-design/
├── 13-reusable-components/
├── 14-mini-project-products/
├── 15-folder-structure/
├── 16-props-drilling/
├── 17-useContext/
├── 18-custom-hooks/
├── 19-performance/
├── 20-devtools/
├── 21-mini-project-blog/
├── 22-react-router/
├── 23-dynamic-routing/
├── 24-state-management/
├── 25-api-project-crypto/
├── 26-error-handling/
├── 27-optimization/
├── 28-ui-polish/
├── 29-final-project-setup/
└── 30-final-project/
```

---

## 🧠 Concepts Checklist

- [ ] JSX & Components
- [ ] Props
- [ ] useState
- [ ] Event Handling
- [ ] Conditional Rendering
- [ ] Lists & Keys
- [ ] Forms & Controlled Components
- [ ] useEffect
- [ ] API Fetching
- [ ] useContext
- [ ] Custom Hooks
- [ ] React Router
- [ ] Performance Basics (memo, useMemo, useCallback)

---

## 🎯 End Goal

After 30 days you will be able to:

- ✅ Build complete React apps from scratch
- ✅ Structure projects professionally
- ✅ Fetch and display real API data
- ✅ Manage state effectively
- ✅ Write reusable, clean components
- ✅ Be ready for full-stack (React + backend)

---

> ⭐ **Consistency beats motivation. Ship code every day.**  
> — Harsh Chauhan