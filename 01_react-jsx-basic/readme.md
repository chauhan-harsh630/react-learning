# ⚛️ React Learning Journey — Month 1, Day 1

> **30 Days of React** | Month 1 | Day 01

---

## 📌 Module: 01 — React Basics & JSX

### Overview

This project is part of my **30-day React learning journey**.
In this module, I covered the fundamentals of React — JSX syntax, component structure, and basic UI creation — by building a **Profile Card** component.

---

## 🤔 What is React?

React is a **JavaScript library** for building user interfaces, especially for **single-page applications (SPAs)**.

- Uses **reusable UI components**
- Efficiently updates the UI via the **Virtual DOM**
- Originally developed by **Meta (Facebook)**
- One of the most widely used frontend libraries today

---

## 💡 Why React?

React solves real problems in complex UI development:

- ✅ Component-based architecture
- ✅ Reusable UI elements
- ✅ Efficient DOM updates (Virtual DOM)
- ✅ Better state management
- ✅ Massive ecosystem & community

---

## 🧠 Key Concepts Learned

### 1. JSX

JSX = **JavaScript XML** — write HTML-like syntax inside JavaScript.

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

---

### 2. Components

Components are **reusable pieces of UI**.

```jsx
function ProfileCard() {
  return (
    <div>
      <h2>Harsh Chauhan</h2>
      <p>BCA Student & Future Software Engineer</p>
    </div>
  );
}

export default ProfileCard;
```

---

### 3. Component Usage

Components can be nested and reused inside other components.

```jsx
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div>
      <h1>Profile Card</h1>
      <ProfileCard />
    </div>
  );
}
```

---

## 📁 Project Structure

```
01-react-basic-jsx/
│
└── my-app/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   └── ProfileCard.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── package.json
    └── vite.config.js
```

---

## 🚀 Installation & Setup

### 1. Create React Project

```bash
npm create vite@latest
```

Select when prompted:

```
Framework: React
Variant:   JavaScript
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Then open the URL shown in your terminal.

---

## 🛠️ Mini Project — Profile Card Component

A simple UI card displaying:

| Feature        | Details              |
|----------------|----------------------|
| Profile Image  | ✅ Included          |
| Name           | Harsh Chauhan        |
| Bio            | BCA Student & Aspiring Engineer |
| Follow Button  | ✅ Included          |

**Concepts used:**
- JSX
- React components
- CSS styling

---

## ✅ Learning Outcomes

After completing this module, I now understand:

- [x] React project structure
- [x] JSX syntax
- [x] Creating components
- [x] Reusing components
- [x] Basic UI development with React

---

## ⏭️ Next Module

```
02 — React Props
```

**Topics coming up:**
- Passing data between components
- Dynamic UI rendering
- Building reusable components with props

---

## 👤 Author

**Harsh Chauhan**
BCA Student | Aspiring Software Engineer

---

*Keep building. Day 1 of 30 — let's go! 🚀*