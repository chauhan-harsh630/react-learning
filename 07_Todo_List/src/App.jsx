import { useState } from 'react'
import './index.css'

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (input.trim() === "") return;
    const newTasks = {
      text: input,
      completed: false,
    }

    setTasks([...tasks, newTasks]);
    setInput("");
  }
  function removeTask(index) {
    const newTask = tasks.filter((_, i) => i !== index);
    setTasks(newTask);
  }

  function handleEvent(e) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  function toggleComplete(index) {
    const updateTask = [...tasks];
    updateTask[index].completed = !updateTask[index].completed;
    setTasks(updateTask);
  }
  return (
    <div className="app-wrapper">
      <div className="container">
        <h2 className="title">✨ Task Manager</h2>
        <div className="input-box">
          <input 
            type="text" 
            placeholder='What needs to be done?' 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleEvent} 
            className="modern-input"
          />
          <button className="modern-add-btn" onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div className="Tasklist">
        {tasks.length === 0 ? (
          <div className="empty-state">No tasks yet. Add one above!</div>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className={`task-card ${task.completed ? 'completed' : ''}`}>
                <label className="task-content">
                  <input 
                    type="checkbox" 
                    checked={task.completed} 
                    onChange={() => toggleComplete(index)} 
                    className="modern-checkbox" 
                  />
                  <div className="checkbox-custom"></div>
                  <span className="task-text">{task.text}</span>
                </label>
                <button className="modern-remove-btn" onClick={() => removeTask(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
