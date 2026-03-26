import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Create an Account</h2>
                <p>Join Shopify clone to start shopping</p>
                <form onSubmit={(e) => { 
                    e.preventDefault(); 
                    signup({ name, email });
                    navigate('/');
                }}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="auth-btn">Sign Up</button>
                </form>
                <div className="auth-footer">
                    Already have an account? <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
