import Login from './components/Login';
import Singup from './components/Singup';
import Hero from './components/Hero';
import Nav from './components/Nav';
import './index.css';
import { useState } from 'react';

function App() {
  const [authMode, setAuthMode] = useState(null); // 'login', 'signup', or null

  return (
    <div className="app-container">
      <Nav setAuthMode={setAuthMode} />
      <main className="main-content">
        {authMode === 'login' && <Login onSwitch={() => setAuthMode('signup')} />}
        {authMode === 'signup' && <Singup onSwitch={() => setAuthMode('login')} />}
        {!authMode && <Hero setAuthMode={setAuthMode} />}
      </main>
    </div>
  )
}

export default App;