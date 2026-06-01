import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/todos"
      );

      console.log(res.data);

      setTasks(res.data.todos);
    } catch (error) {
      console.log(error);
    }
  }

  async function addTask() {
    if (!input.trim()) return;

    try {
      await axios.post(
        "http://localhost:5000/api/todos",
        {
          title: input,
        }
      );

      setInput("");
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  }

 
  async function removeTask(id) {
    try {
      await axios.delete(
        `http://localhost:5000/api/todos/${id}`
      );

      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleComplete(id, status) {
    try {
      await axios.put(
        `http://localhost:5000/api/todos/${id}`,
        {
          isCompleted: !status,
        }
      );

      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  }

  function handleEvent(e) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  return (
    <div className="app-wrapper">
      <div className="container">
        <h2 className="title">✨ Task Manager</h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleEvent}
            className="modern-input"
          />

          <button
            className="modern-add-btn"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="Tasklist">
        {tasks.length === 0 ? (
          <div className="empty-state">
            No tasks yet. Add one above!
          </div>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li
                key={task._id}
                className={`task-card ${
                  task.isCompleted
                    ? "completed"
                    : ""
                }`}
              >
                <label className="task-content">
                  <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() =>
                      toggleComplete(
                        task._id,
                        task.isCompleted
                      )
                    }
                    className="modern-checkbox"
                  />

                  <div className="checkbox-custom"></div>

                  <span className="task-text">
                    {task.title}
                  </span>
                </label>

                <button
                  className="modern-remove-btn"
                  onClick={() =>
                    removeTask(task._id)
                  }
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;