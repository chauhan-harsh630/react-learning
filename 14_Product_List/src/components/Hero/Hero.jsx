import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>The Future of Tech is Here</h1>
                <p>Discover premium smartphones, laptops, and accessories curated just for you.</p>
                <div className="hero-buttons">
                    <button className="btn-primary">Shop Now</button>
                    <button className="btn-secondary">Explore</button>
                </div>
            </div>
            <div className="hero-image-wrapper">
                <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800" alt="Premium Technology" className="hero-image" />
            </div>
        </section>
    );
}

export default Hero;
