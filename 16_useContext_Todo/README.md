# 📝 Advanced React Todo App 

A feature-rich Todo Application built with **React**, **Vite**, and **Tailwind CSS**. This project was developed to master global state management using the **React Context API**, demonstrating how to avoid prop-drilling while building a scalable frontend architecture.

## 🚀 Features

- **Add Tasks**: Quickly add new todos to your list.
- **Edit Tasks**: Update the text of existing tasks with a seamless inline form.
- **Toggle Completion**: Mark tasks as complete with a checkbox and strikethrough styling.
- **Delete Tasks**: Remove items from your list instantly.
- **Data Persistence**: Uses browser `localStorage` to save your tasks, so they remain even after you refresh or close the page.
- **Responsive UI**: Styled with Tailwind CSS to look great on both desktop and mobile screens.

## 🧠 Core Concepts Learned

### 1. The Context API & Custom Hooks
Instead of passing props down manually at every level, we create a centralized `TodoContext` and a custom `useTodo` hook.

```javascript
// src/contexts/TodoContext.jsx
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

// Custom hook to easily consume the context anywhere
export function useTodo() {
    return useContext(TodoContext);
}
```

### 2. Context Provider & State
In `App.jsx`, we wrap the entire application in the `TodoProvider` and plug in the actual functions that manipulate our state.

```javascript
// src/App.jsx
import { TodoProvider } from './contexts';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // Spreading the existing arrays to preserve immutability
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);  
  }
  // ... other methods (update, delete, toggle)

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      {/* Rest of the App UI */}
    </TodoProvider>
  )
}
```

### 3. Safely using LocalStorage (Lazy Initialization)
To prevent the app from briefly flashing an empty list on reload, we grab the saved data directly during the very first render by passing an anonymous function to `useState()`.

```javascript
// src/App.jsx
const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    if(saved) return JSON.parse(saved);
    return [];
});

// Save to storage every time 'todos' changes
useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

### 4. Form Validation & UX tweaks
We prevent users from adding blank tasks using `.trim()` and improved User Experience (UX) by submitting edits when the `Enter` key is pressed.

```javascript
// Example: Adding Enter Key Support to an input field
onKeyDown={(e) => {
    if (e.key === "Enter" && isTodoEditable) {
        editTodo();
    }
}}
```

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Context API
- **Deployment**: Local / Node JS

## ⚙️ Local Development

1. Clone the repository 
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the localhost port provided in the terminal.
