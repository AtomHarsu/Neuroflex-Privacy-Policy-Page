import Link from 'next/link';
import '../globals.css';

export default function Download() {
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
            <h1>📱 Download NeuroFlex</h1>
            <p>Start your brain training journey today with our mobile app.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Download for Android</button>
            </div>
          </div>
        </section>

        <section className="features">
          <h2>App Features</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">📱</div>
              <h3>Mobile Optimized</h3>
              <p>Perfect gaming experience on your smartphone</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔄</div>
              <h3>Regular Updates</h3>
              <p>New games and features added frequently</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Your data is protected with industry standards</p>
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