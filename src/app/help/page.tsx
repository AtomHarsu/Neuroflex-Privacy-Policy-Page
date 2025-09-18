import Link from 'next/link';
import '../globals.css';

export default function Help() {
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
            <h1>❓ Help & Support</h1>
            <p>Get assistance and find answers to common questions about NeuroFlex.</p>
          </div>
        </section>

        <section className="features">
          <h2>Support Topics</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">📱</div>
              <h3>App Installation</h3>
              <p>Step-by-step guide to download and install NeuroFlex</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚙️</div>
              <h3>Settings & Setup</h3>
              <p>Configure your profile and customize game preferences</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📞</div>
              <h3>Contact Support</h3>
              <p>Reach out to our team for technical assistance</p>
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