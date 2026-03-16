import { useState } from "react";
import "./App.css";

function App() {

 

  const [item, setItem] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() === "") return;

    setItem([...item, input]);
    setInput("");
  };

  const removeItem = (index) => {
    const newItems = item.filter((_, i) => i !== index);
    setItem(newItems);
  };

  return (
    <>
      <h1>Dynamic List</h1>
       <input
        type="text"
        placeholder="Enter item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addItem}>Add Item</button>

      <ul>
        {item.map((it, index) => (
          <li key={index}>
            {it}
            <button onClick={() => removeItem(index)}>Delete</button>
          </li>
        ))}
      </ul>

      
    </>
  );
}

export default App;