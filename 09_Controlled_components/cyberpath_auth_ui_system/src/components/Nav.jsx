import './Nav.css';

function Nav({ setAuthMode }) {
  return (
    <nav className="nav">
      <span className="nav-brand" onClick={() => setAuthMode(null)} style={{cursor: 'pointer'}}>CYBERPATH</span>
      <div className="nav-links">
        <a href="#" onClick={(e) => { e.preventDefault(); setAuthMode(null); }}>Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="nav-actions">
        <button className="btn btn-outline" onClick={() => setAuthMode('login')}>Login</button>
        <button className="btn btn-solid" onClick={() => setAuthMode('signup')}>Signup</button>
      </div>
    </nav>
  );
}

export default Nav;