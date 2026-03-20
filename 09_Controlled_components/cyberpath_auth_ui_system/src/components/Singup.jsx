import { useState } from 'react';
import './Singup.css';

function Signup({ onSwitch }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (form.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    
    // Fake user submit simulating network delay
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Account created successfully for ${form.name}! Welcome to CyberPath.`);
      setForm({ name: '', email: '', password: '' });
      // Optionally switch to Login after successful signup
      if (onSwitch) onSwitch();
    }, 1500);
  };

  return (
    <div className="auth-card">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="input-wrap">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="Your Name" 
            className={errors.name ? 'has-error' : ''}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="input-wrap">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="you@cyberpath.dev" 
            className={errors.email ? 'has-error' : ''}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input-wrap">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={form.password} 
            onChange={handleChange} 
            placeholder="••••••••" 
            className={errors.password ? 'has-error' : ''}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>
      <p className="auth-switch">Have an account? <span onClick={onSwitch}>Login →</span></p>
    </div>
  );
}

export default Signup;