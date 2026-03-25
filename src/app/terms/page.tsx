import React from 'react';

export default function TermsPage() {
  return (
    <main className="legal-container fade-in">
      <nav className="navbar glass-card">
         <div className="logo gold-text">Insta-RealEstate</div>
         <a href="/" className="nav-link">← Back to Home</a>
      </nav>

      <section className="legal-content glass-card">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: March 25, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using Insta-RealEstate, you agree to comply with and be bound by these Terms of Service. If you do not agree, you are prohibited from using the service.</p>

        <h2>2. Service Description</h2>
        <p>Insta-RealEstate provides automated marketing asset generation for real estate property listings. We do not guarantee the accuracy of data scraped from third-party websites (Zillow, Idealista, etc.), although our engine is designed for high reliability.</p>

        <h2>3. Subscriptions and Payments</h2>
        <p>Subscriptions are billed monthly or annually via Stripe. All payments are non-refundable unless stated otherwise. If you cancel your subscription, you will maintain access until the end of the billing period.</p>

        <h2>4. User Responsibilities</h2>
        <p>You agree to only use our service for property listings you have the right to promote. You may not use the service for illegal or unauthorized purposes.</p>

        <h2>5. Content Delivery</h2>
        <p>We deliver digital assets (Instagram Carousels, Stories, Blog Teasers) generated from the listings you provide. We ensure the software delivers the files specified at the time of purchase.</p>

        <h2>6. Limitation of Liability</h2>
        <p>Insta-RealEstate shall not be liable for any damages arising out of your use or inability to use the service. Use of the service is at your own risk.</p>

        <h2>7. Governing Law</h2>
        <p>These terms are governed by the laws of the European Union and the specific jurisdiction of our registered entity.</p>

        <h2>8. Contact</h2>
        <p>For questions regarding these terms, contact info.instarealestate@gmail.com.</p>
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
        .last-updated { color: var(--text-muted); margin-bottom: 3rem; font-style: italic; }
      `}</style>
    </main>
  );
}
