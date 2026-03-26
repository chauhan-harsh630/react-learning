import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Have questions about our products or your order? We're here to help.</p>
                    
                    <div className="info-item">
                        <div className="icon">📍</div>
                        <div>
                            <h4>Visit Us</h4>
                            <p>123 Commerce St, Tech City, TC 10101</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <div className="icon">✉️</div>
                        <div>
                            <h4>Email Us</h4>
                            <p>support@shopifyclone.ext</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <div className="icon">📞</div>
                        <div>
                            <h4>Call Us</h4>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                </div>
                
                <div className="contact-form">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (name && email && message) {
                            alert(`Thank you, ${name}! Your message has been sent. We will respond to ${email} shortly.`);
                            setName('');
                            setEmail('');
                            setMessage('');
                        }
                    }}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" value={name} onChange={(e)=>setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="john@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="How can we help you?" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
