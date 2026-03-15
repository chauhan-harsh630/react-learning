import { useState } from 'react';
import './index.css'

function App() {

  const [isLogin, setLogin] = useState(false);

  const [theme, setTheme] = useState({
    backgroundColor: "black",
    color: "white"
  });

  return (
    <body style={theme}>
      <div>
        <h1>React Authentication</h1>
        {isLogin ? (
          <div>
            <h1>Welcome to the Cyberpath</h1>
            <button onClick={() => setLogin(false)}>Logout</button>
            <button onClick={() =>
              setTheme({ backgroundColor: "black", color: "white" })
            }>
              Dark Mode
            </button>
            <button onClick={() =>
              setTheme({ backgroundColor: "white", color: "black" })
            }>
              Light Mode
            </button>
          </div>
        ) : (
          <div>
            <h1>Please Login</h1>
            <button onClick={() => setLogin(true)}>Login</button>
          </div>
        )}
      </div>
    </body>
  )
}

export default App;