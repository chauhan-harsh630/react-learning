import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <h3>Shopify</h3>
                    <p>The premier platform for all your tech and accessory needs.</p>
                </div>
                
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Shop</h4>
                        <ul>
                            <li><a href="#">All Products</a></li>
                            <li><a href="#">On Sale</a></li>
                            <li><a href="#">New Arrivals</a></li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Shipping Returns</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-newsletter">
                    <h4>Stay in the loop</h4>
                    <p>Sign up and get 10% off your first order.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Shopify Clone. All rights reserved.</p>
                <div className="legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
