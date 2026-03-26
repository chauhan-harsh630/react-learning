import './About.css';

function About() {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <h2>About Shopify Clone</h2>
                    <p className="lead">We are building the best place to find high-quality tech gear and accessories on the web.</p>
                    <p>Founded in 2026, our mission has always been to provide premium products with an unparalleled shopping experience. We believe that technology should be accessible, beautiful, and functional.</p>
                    <div className="stats-row">
                        <div className="stat">
                            <h3>10k+</h3>
                            <span>Happy Customers</span>
                        </div>
                        <div className="stat">
                            <h3>500+</h3>
                            <span>Premium Products</span>
                        </div>
                        <div className="stat">
                            <h3>24/7</h3>
                            <span>Expert Support</span>
                        </div>
                    </div>
                </div>
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" alt="Our Team" />
                </div>
            </div>
        </section>
    );
}

export default About;
