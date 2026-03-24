import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("admin@shopee.com");
    const [password, setPassword] = useState("password");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock authentication
        if (email && password) {
            navigate("/");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-logo">
                        <ShoppingBag size={40} color="#ee4d2d" />
                    </div>
                    <h2>Welcome to Shopee Admin</h2>
                    <p>Enter your details to log in to your account</p>
                </div>
                <form className="auth-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="xyz@example.com" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********" 
                            required 
                        />
                    </div>
                    <div className="auth-options">
                        <label className="remember-me">
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit" className="auth-btn">Log In</button>
                </form>
                <div className="auth-footer">
                    <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
