import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import "./Login.css"; // Reuse login styles

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Mock account creation
        if (name && email && password) {
            navigate("/login");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-logo">
                        <ShoppingBag size={40} color="#ee4d2d" />
                    </div>
                    <h2>Create an Account</h2>
                    <p>Join Shopee Admin to manage your store</p>
                </div>
                <form className="auth-form" onSubmit={handleSignup}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe" 
                            required 
                        />
                    </div>
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
                    <button type="submit" className="auth-btn">Sign Up</button>
                </form>
                <div className="auth-footer">
                    <p>Already have an account? <Link to="/login">Log in here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
