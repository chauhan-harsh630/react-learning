
import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (

    <div className="container">
      <div className="box">
        <h1>Counter App</h1>
        <h2>Count : {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} id="decrement">Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>


    </div>
  )
}

export default App
