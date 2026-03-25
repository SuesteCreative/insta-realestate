import React from 'react';

export default function PrivacyPage() {
  return (
    <main className="legal-page fade-in">
      <div className="legal-card glass-card">
        <h1 className="gold-text">Privacy Policy</h1>
        <p>Last Updated: March 25, 2026</p>
        
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, use our property scraping tools, or contact support.</p>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, and to process your subscription payments via Stripe.</p>
          </section>

          <section className="legal-section">
            <h2>3. Data Security</h2>
            <p>We use industry-standard encryption to protect your data. Your payment information is handled securely by Stripe and never stored on our servers.</p>
          </section>

          <section className="legal-section">
            <h2>4. Contact Us</h2>
            <p>If you have questions about this policy, contact us at: info.instarealestate@gmail.com</p>
          </section>
        </div>

        <a href="/" className="btn-outline">Back to Home</a>
      </div>
    </main>
  );
}
