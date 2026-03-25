import React from 'react';

export default function PrivacyPage() {
  return (
    <main className="legal-container fade-in">
      <nav className="navbar glass-card">
         <div className="logo gold-text">Insta-RealEstate</div>
         <a href="/" className="nav-link">← Back to Home</a>
      </nav>

      <section className="legal-content glass-card">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: March 25, 2026</p>

        <h2>1. Overview</h2>
        <p>Insta-RealEstate ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our service, in compliance with the General Data Protection Regulation (GDPR).</p>

        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>Account Information</strong>: Email address and payment details provided via Stripe.</li>
          <li><strong>Usage Data</strong>: Property URLs you paste and the assets generated from them.</li>
          <li><strong>Cookies</strong>: Essential cookies for authentication and session management.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use your data strictly to:</p>
        <ul>
          <li>Provide and maintain the service.</li>
          <li>Process payments through Stripe.</li>
          <li>Communicate with you regarding updates or support.</li>
          <li>Improve the reliability of our automated generation engine.</li>
        </ul>

        <h2>4. Data Storage and Transfer</h2>
        <p>Your data is stored securely using industry-standard encryption. We do not sell your personal data to third parties. Payment information is handled exclusively by Stripe, a PCI-compliant processor.</p>

        <h2>5. Your Rights (GDPR)</h2>
        <p>Under GDPR, European residents have the right to:</p>
        <ul>
          <li>Access, update, or delete their personal info.</li>
          <li>Object to data processing.</li>
          <li>Request data portability.</li>
        </ul>
        <p>Contact us at info.instarealestate@gmail.com to exercise these rights.</p>

        <h2>6. Third-Party Services</h2>
        <p>We use the following third-party processors:</p>
        <ul>
          <li><strong>Stripe</strong>: For payment processing.</li>
          <li><strong>Supabase</strong>: For database and authentication.</li>
          <li><strong>Unsplash</strong>: For fallback imagery (No personal data shared).</li>
        </ul>
      </section>

      <style jsx>{`
        .legal-container {
          min-height: 100vh;
          padding: 2rem 5%;
          max-width: 1000px;
          margin: 0 auto;
        }
        .legal-content {
          padding: 4rem;
          line-height: 1.8;
        }
        h1 { font-size: 3rem; margin-bottom: 2rem; }
        h2 { font-size: 1.5rem; margin-top: 3rem; margin-bottom: 1rem; color: var(--gold); }
        ul { margin-bottom: 2rem; padding-left: 1.5rem; }
        .last-updated { color: var(--text-muted); margin-bottom: 3rem; font-style: italic; }
      `}</style>
    </main>
  );
}
