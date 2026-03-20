import { useState } from 'react';
import './Login.css';

function Login({ onSwitch }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    alert('Login successful!');
    setForm({ email: '', password: '' });
  };

  return (
    <div className="auth-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-wrap">
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@cyberpath.dev" />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input-wrap">
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="••••••••" />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Enter System</button>
      </form>
      <p className="auth-switch">No account? <span onClick={onSwitch}>Sign up →</span></p>
    </div>
  );
}

export default Login;