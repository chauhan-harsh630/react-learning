import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Header.css';
import { useAuth } from '../../context/AuthContext';

function Header() {
    const { cartCount } = useCart();
    const { user, logout } = useAuth();

    return (
        <header className="header">
            <div className="header-logo">
                <Link to="/" style={{textDecoration: 'none'}}><h3>Shopify</h3></Link>
            </div>
            
            <nav className="header-nav">  
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
                </ul>
            </nav>

            <div className="header-actions">
                <Link to="/cart" className="cart-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </Link>
                {user ? (
                    <>
                        <span className="user-greeting" style={{marginRight: '15px', fontWeight: '600', color: '#2f3542'}}>
                            Hello, {user.name || user.email.split('@')[0]}
                        </span>
                        <button className="login-btn" onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login"><button className="login-btn">Login</button></Link>
                        <Link to="/signup"><button className="login-btn">Sign Up</button></Link>
                    </>
                )}
            </div>
        </header>
    );
}   

export default Header;