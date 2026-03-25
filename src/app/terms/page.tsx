import React from 'react';

export default function TermsPage() {
  return (
    <main className="legal-page fade-in">
      <div className="legal-card glass-card">
        <h1 className="gold-text">Terms of Service</h1>
        <p>Last Updated: March 25, 2026</p>
        
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By using Insta-RealEstate, you agree to these terms. If you do not agree, do not use the service.</p>
          </section>

          <section className="legal-section">
            <h2>2. Description of Service</h2>
            <p>Insta-RealEstate provides automated property data scraping and marketing asset generation tools for real estate professionals.</p>
          </section>

          <section className="legal-section">
            <h2>3. Subscriptions & Payments</h2>
            <p>Payments are handled via Stripe. Subscriptions automatically renew unless cancelled. No refunds once a generation cycle has started.</p>
          </section>

          <section className="legal-section">
            <h2>4. Limitation of Liability</h2>
            <p>We provide the service "as is." We are not liable for any damages arising from your use of the generated assets or scraped data.</p>
          </section>
        </div>

        <a href="/" className="btn-outline">Back to Home</a>
      </div>
    </main>
  );
}
