import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Welcome Back</h2>
                <p>Log in to your Shopify clone account</p>
                <form onSubmit={(e) => { 
                    e.preventDefault(); 
                    login({ email });
                    navigate('/');
                }}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="auth-btn">Log In</button>
                </form>
                <div className="auth-footer">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
