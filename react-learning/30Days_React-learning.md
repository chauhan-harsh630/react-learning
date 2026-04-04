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
| 08 | Forms & State | Contact Form Setup | Controlled vs uncontrolled inputs |
| 09 | Forms Validation | Login & Signup Validation | Handling complex object state |
| 10 | useEffect | Password Generator API | Side effects & dependencies |
| 11 | Component Design | Layout Architectures | Thinking in components |
| 12 | API Fetching & Hooks | Currency Converter | Custom Hooks & `fetch` integration |
| 13 | React Router Routing | Multi-Page Routing Layouts | Nested routing and `Outlet` |
| 14 | **Mini Project** | ✅ E-Commerce Product List | Combine Week 2 concepts |

---

## 🗓️ Week 3 — Intermediate React

| Day | Concept | Project to Build | Key Takeaway |
|-----|---------|-----------------|--------------|
| 15 | useContext (Basics) | Global Theme Switcher | Global state without prop drilling |
| 16 | useContext (Advanced) | Context Todo App | Integrating Context Provider with LocalStorage |
| 17 | Backend + Frontend | Photo to Doc Converter | Linking Node.js Backend to React UI |
| 18 | Scalable Structure | Shopify Layout & Router | Architecting a large E-Commerce app |
| 19 | Auth Flow Integration | Shopify Auth State | Global context for Login/Signup |
| 20 | Enterprise State | Redux Toolkit (Mini Todo) | Slices, Stores, and Dispatching actions |
| 21 | **Mini Project** | ✅ Shopify E-Commerce | Full E-Commerce storefront with real routing |

---

## 🗓️ Week 4 — Advanced React & Capstone (The Final 7 Days)

| Day | Concept | Project to Build | Key Takeaway |
|-----|---------|-----------------|--------------|
| 22 | Performance Optimization | Heavy Component Demo | `React.memo`, `useMemo`, `useCallback` |
| 23 | Advanced Forms | Complex Registration | `react-hook-form` and `zod` validation |
| 24 | Code Splitting & Errors | Lazy Loading App | `React.lazy()`, `Suspense`, Error Boundaries |
| 25 | Advanced Custom Hooks| Reusable Utilities | `useFetch`, `useDebounce`, `useLocalStorage` |
| 26 | Capstone Setup | Pick Idea & Scaffold | Integrating React Router & Tailwind |
| 27 | Capstone Logic | Build Core Features | Global State with Redux Toolkit / Context |
| 28 | Capstone Polish | Flagship App Completion | Final UI/UX touches and bug fixing |

---

## 🏁 Capstone Project Ideas (Final 3 Days)

Instead of small components, you must build **one complete application** that uses everything:
- 🛍️ **Full E-Commerce Store** (with Redux Cart & Mock Auth)
- 📝 **Advanced Kanban Task Manager** (Trello Clone tracking complex state)
- 💰 **Crypto Dashboard** (with complex API fetching, charts, and code-splitting)

---

## 📁 Actual Folder Structure (What We Built)

```
Month1/
├── 00_customReact/
├── 01_react-jsx-basic/
├── 02_props/
├── 03_Hooks/
├── 04_Event_Handling/
├── 05_Conditional_Rendering/
├── 06_Lists_key/
├── 07_Todo_List/
├── 08_Froms/
├── 09_Controlled_components/
├── 11_Currency_Convertor/
├── 12_Component_Design/
├── 13_React_router/
├── 14_Product_List/
├── 15_useContext/
├── 16_useContext_Todo/
├── 17_ReduxToolKit/
├── README.md (This summary)
└── react-learning/

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