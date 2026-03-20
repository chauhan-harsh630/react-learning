import './Hero.css';

function Hero({ setAuthMode }) {
  return (
    <section className="hero">
      <span className="hero-tag">// SECURE YOUR FUTURE</span>
      <h1>Welcome to <span className="highlight">CyberPath</span></h1>
      <p>Learn Cyber Security with us — from zero to professional.</p>
      <div className="hero-btns">
        <button className="btn btn-primary" onClick={() => setAuthMode('signup')}>Get Started</button>
        <button className="btn btn-outline">View Courses</button>
      </div>
    </section>
  );
}

export default Hero;