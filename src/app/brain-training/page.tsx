import Link from 'next/link';
import '../globals.css';

export default function BrainTraining() {
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
            <h1>🧠 Brain Training</h1>
            <p>Enhance your cognitive abilities with scientifically-designed exercises.</p>
          </div>
        </section>

        <section className="features">
          <h2>Training Benefits</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Improved Focus</h3>
              <p>Enhance concentration and attention span</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🧩</div>
              <h3>Better Memory</h3>
              <p>Strengthen working and long-term memory</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Faster Processing</h3>
              <p>Boost mental speed and reaction time</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 NeuroFlex. All rights reserved.</p>
      </footer>
    </div>
  );
}