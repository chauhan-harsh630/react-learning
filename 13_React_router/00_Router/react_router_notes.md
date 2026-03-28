# React Router DOM - Conceptual Notes

## 1. What is `react-router-dom`?
React applications are **Single Page Applications (SPAs)**. They only load one HTML file ever. `react-router-dom` is the library that manages URLs in the browser. 

Instead of asking the server for a completely new page (which causes a white blank screen and page refresh), React Router acts as a "Traffic Cop". It listens to the URL in the address bar and instantly *swaps out* components on your screen without ever refreshing the page.

*   URL is `/home` -> Inject the `<Home />` component.
*   URL is `/about` -> Hide `<Home />` and inject the `<About />` component.

---

## 2. Nested Routing and Layouts
When building apps, you often have a "Layout" (like a Navbar or Footer) that must stay visible across multiple pages.

*   **The Wrong Way (Sibling Routes):** If you define routes side-by-side, navigating from `/` to `/home` will completely destroy the original component (and its layout) and replace it entirely with the Home page.
*   **The Right Way (Nested Routes):** You define a parent "Layout Route" that wraps around its "Child Routes". When you navigate to a child's path, React Router keeps the parent component on the screen and injects the child component inside of it.

### Router Setup Example
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'; // The Layout
import Home from './Home';

// App is the Parent, Home is the Child
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
       <Route path="home" element={<Home />} />
    </Route>
  </Routes>
</BrowserRouter>
```

---

## 3. The `<Outlet />` Component
The `<Outlet />` component from `react-router-dom` is a placeholder. It tells the parent Layout component exactly *where* to inject the active child route's content.

### The Picture Frame Analogy
Imagine a physical Picture Frame sitting on a desk.
*   **The Frame (Layout):** The wooden frame, glass, and stand are permanent. They never change. This is like your `Navbar` or `Footer`.
*   **The Picture Inside (Child Component):** You can swap out a picture of a dog (`<Home />`) for a picture of your family (`<About />`).
*   **The Empty Space (`<Outlet />`):** The actual empty rectangular space inside the frame where the picture goes is the `<Outlet />`.

### Layout Example
```jsx
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav /> {/* The wooden frame top (Permanent) */}
      
      {/* React Router says: "I will inject <Home /> or <About /> exactly here!" */}
      <Outlet /> 

      <Footer /> {/* The wooden frame bottom (Permanent) */}
    </div>
  )
}
```

---

## 4. Professional File & Folder Structure
When using React Router, it's industry-standard to separate your files based on their role:

*   **/pages**: Anything in this folder represents a whole "screen" or page in your app. These are the components you connect directly to the `<Route>` element (e.g., `Home.jsx`, `Contact.jsx`).
*   **/components**: These are smaller, reusable Lego bricks used *inside* a page or layout (e.g., `Nav.jsx`, `Button.jsx`).
*   **/layouts**: (Optional) Components specifically built to wrap around pages (e.g., `AppLayout.jsx`).

---

## 5. Navigation: `Link` vs. `NavLink`
**Never use a standard HTML `<a>` tag.** An `<a>` tag forces the browser to completely refresh the webpage, destroying the SPA experience.

### A. `<Link>` (The Basic Navigator)
Use `<Link>` for simple background navigation.
*   **Use case:** A logo that goes back to the home page, a "Read More" button, or links in a footer.
```jsx
<Link to="/about">Go to About Page</Link>
```

### B. `<NavLink>` (The Professional Navbar Tool)
Use `<NavLink>` specifically for **Navigation Menus** (like Sidebars or Tabs). It perfectly tracks whether or not it is the **"active"** page. If the user is on `/about`, the `<NavLink>` for that specific route will automatically receive an `active` class, allowing you to highlight it in your CSS (e.g., bolding the text or adding an underline).

*   **Use case:** The main `Nav.jsx` links.

```jsx
// NavLink automatically adds the class "active" if the user is on /home
<NavLink to="/home" className={({ isActive }) => isActive ? "active-link" : ""}>
  Home
</NavLink>
```
