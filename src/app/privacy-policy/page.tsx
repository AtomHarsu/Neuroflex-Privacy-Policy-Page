import './privacy-policy.css';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
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

      <main className="container">
        <div className="privacy-content">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: <strong>January 2025</strong></p>

          <section>
            <h2>1. Introduction</h2>
            <p>NeuroFlex (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our gaming application.</p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Personal Information</h3>
            <ul>
              <li><strong>Profile Data:</strong> Name, age, and user preferences</li>
              <li><strong>Game Performance:</strong> Scores, levels completed, achievements, and progress metrics</li>
              <li><strong>Usage Data:</strong> Game session duration, frequency of use, and feature interactions</li>
              <li><strong>Device Information:</strong> Device type, operating system, and app version</li>
            </ul>

            <h3>2.2 Technical Information</h3>
            <ul>
              <li>App usage analytics and crash reports</li>
              <li>Performance optimization data</li>
              <li>Error logs and diagnostic information</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li><strong>Personalization:</strong> Customize game difficulty and provide adaptive training</li>
              <li><strong>Progress Tracking:</strong> Monitor gaming progress and generate achievement reports</li>
              <li><strong>App Improvement:</strong> Enhance user experience and develop new features</li>
              <li><strong>Gaming Support:</strong> Provide customer support and game assistance</li>
              <li><strong>Communication:</strong> Send important updates and notifications</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Storage and Security</h2>
            
            <h3>4.1 Local Storage</h3>
            <p>Most of your data is stored locally on your device using secure storage mechanisms. This includes:</p>
            <ul>
              <li>User profiles and preferences</li>
              <li>Game progress and scores</li>
              <li>Calibration settings</li>
            </ul>

            <h3>4.2 Cloud Storage</h3>
            <p>Some data may be stored securely in the cloud for:</p>
            <ul>
              <li>Cross-device synchronization</li>
              <li>Backup and recovery</li>
              <li>Game progress preservation</li>
              <li>Enhanced gaming experience</li>
            </ul>

            <h3>4.3 Security Measures</h3>
            <ul>
              <li>End-to-end encryption for sensitive data</li>
              <li>Secure authentication protocols</li>
              <li>Regular security audits and updates</li>
              <li>Industry-standard data protection practices</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Sharing and Privacy</h2>
            
            <h3>5.1 No Data Sharing</h3>
            <p><strong>We do not share, sell, or disclose your personal data to any third parties.</strong> Your information remains completely private and secure within our application.</p>
            
            <h3>5.2 Data Security</h3>
            <p>All your data is:</p>
            <ul>
              <li>Stored securely both locally and in the cloud</li>
              <li>Encrypted and protected during transmission and storage</li>
              <li>Transmitted only to our secure servers</li>
              <li>Protected with industry-standard security measures</li>
            </ul>

            <h3>5.3 Legal Requirements</h3>
            <p>We may only disclose information when legally required by court order or law enforcement, but we will notify you whenever legally possible.</p>
          </section>

          <section>
            <h2>6. Your Rights and Choices</h2>
            
            <h3>6.1 Data Access and Control</h3>
            <ul>
              <li><strong>Access:</strong> View all data we have collected about you</li>
              <li><strong>Correction:</strong> Update or correct your personal information</li>
              <li><strong>Deletion:</strong> Request deletion of your data and account</li>
              <li><strong>Portability:</strong> Export your data in a readable format</li>
            </ul>

            <h3>6.2 Privacy Settings</h3>
            <ul>
              <li>Full control over your local data</li>
              <li>Manage notification preferences</li>
              <li>Opt-out of analytics and research participation</li>
              <li>Adjust data retention settings</li>
            </ul>
          </section>

          <section>
            <h2>7. Children&apos;s Privacy</h2>
            <p>NeuroFlex may be used by individuals under 18. We take special care to:</p>
            <ul>
              <li>Limit data collection to what&apos;s necessary for gaming functionality</li>
              <li>Ensure age-appropriate content and features</li>
              <li>Maintain the same security standards for all users</li>
              <li>Allow data deletion requests from users of any age</li>
            </ul>
          </section>

          <section>
            <h2>8. Data Retention</h2>
            <p>We retain your information for as long as necessary to:</p>
            <ul>
              <li>Provide ongoing gaming services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            <p>You can request data deletion at any time through the app settings or by contacting us.</p>
          </section>

          <section>
            <h2>9. Updates to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of significant changes through:</p>
            <ul>
              <li>In-app notifications</li>
              <li>Email notifications (if provided)</li>
              <li>Updated version posted on our website</li>
            </ul>
            <p>Continued use of the app after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2>10. Contact Information</h2>
            <p>For questions about this Privacy Policy or your data, contact us:</p>
            <div className="contact-info">
              <p><strong>Email:</strong> harshgor399@gmail.com</p>
              <p><strong>Address:</strong> NeuroFlex Privacy Team<br />
              Bhuj Kutch Gujarat 370001<br />
              India</p>
              <p><strong>Phone:</strong> +91 9099780465</p>
            </div>
          </section>



          <div className="disclaimer">
            <h3>Gaming Disclaimer</h3>
            <p><strong>Important:</strong> NeuroFlex is a fun game designed for entertainment purposes and to sharpen the brain. Please take this as a game. Please game responsibly and take regular breaks. The data collected is for gaming enhancement and customer support purposes only.</p>
            <p><strong>Privacy Policy Updates:</strong> Privacy policy changes day by day so please stay up to date regarding the things.</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 NeuroFlex. All rights reserved.</p>
      </footer>
    </div>
  );
}