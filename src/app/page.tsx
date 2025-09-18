import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div className="home-page">
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <Link href="/">
              <h1>🧠 NeuroFlex</h1>
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link href="/">🏠 Home</Link></li>
            <li><Link href="/brain-training">🧠 Brain Training</Link></li>
            <li><Link href="/help">❓ Help</Link></li>
            <li><Link href="/download">📱 Download</Link></li>
            <li><Link href="/privacy-policy">🔒 Privacy</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p>The ultimate brain training game designed to enhance cognitive abilities through fun and engaging challenges.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Download Now</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </section>

        <section className="features">
          <h2>Game Features</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Focus Training</h3>
              <p>Improve concentration and attention span</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🧩</div>
              <h3>Memory Games</h3>
              <p>Enhance working and long-term memory</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Speed Challenges</h3>
              <p>Boost processing speed and reaction time</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📊</div>
              <h3>Progress Tracking</h3>
              <p>Monitor your cognitive improvement</p>
            </div>
          </div>
        </section>

        <section className="about">
          <h2>About NeuroFlex</h2>
          <p>NeuroFlex is a scientifically-designed brain training application that helps users improve their cognitive abilities through engaging games and exercises. Our platform offers personalized training programs that adapt to your skill level and progress.</p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🧠 NeuroFlex</h3>
            <p>Train your brain, enhance your life.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: harshgor399@gmail.com</p>
            <p>Phone: +91 9099780465</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 NeuroFlex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}