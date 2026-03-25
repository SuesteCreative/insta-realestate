import Generator from '@/components/Generator';
import Pricing from '@/components/Pricing';
import Showcase from '@/components/Showcase';
import Image from 'next/image';
import { Sparkles, Zap, Image as ImageIcon, Download, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="landing-page">
      {/* Prime Navigation */}
      <nav className="navbar glass-card fade-in">
        <div className="logo-group" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Image src="/logo.png" alt="Insta-RealEstate Logo" width={40} height={40} style={{ borderRadius: '8px' }} />
          <div className="logo gold-text">Insta-RealEstate</div>
        </div>
        <div className="nav-links">
          <a href="#features">The Workflow</a>
          <a href="#pricing">Membership</a>
          <button className="btn-primary">Connect Account</button>
        </div>
      </nav>

      {/* Hero: Luxury Focus */}
      <header className="hero fade-in">
        <div className="container">
          <h1 className="hero-title">
            The standard for <br />
            <span className="gold-text">High-Reach</span> Property Carousels.
          </h1>
          <p className="hero-subtitle">
            Instantly turn any listing URL into a 1080x1350 Portrait-optimized marketing package. Designed for the elite agent who demands precision, speed, and premium aesthetics.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Elevate Your Listings</button>
          </div>
        </div>
      </header>

      {/* Production-Grade Showcase */}
      <Showcase />

      {/* High-End Features */}
      <section id="features" className="container section-header">
        <h2 className="section-title">Engineered for conversion</h2>
        <div className="features-grid">
          <div className="feature-card glass-card">
            <Sparkles className="gold-text" size={28} />
            <h3>Boutique Aesthetic</h3>
            <p>Every slide is built with Playfair Display and Inter. No messy designs, only high-value typography that commands premium fees.</p>
          </div>
          <div className="feature-card glass-card">
            <Zap className="gold-text" size={28} />
            <h3>30-Second Turnaround</h3>
            <p>Paste a Zillow or Idealista link. Our engine extracts the data and renders your luxury carousel package in seconds.</p>
          </div>
          <div className="feature-card glass-card">
            <ImageIcon className="gold-text" size={28} />
            <h3>High-Res Fulfillment</h3>
            <p>Automated extraction of high-resolution property imagery. No blurring, only crisp, retina-ready assets for Meta.</p>
          </div>
          <div className="feature-card glass-card">
            <Download className="gold-text" size={28} />
            <h3>Portrait Optimized</h3>
            <p>Full 1080x1350 vertical format. Take up 30% more screen real estate than 1:1 posts. Win the attention war.</p>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <Pricing />

      {/* Final Call to Action */}
      <section className="container section-header fade-in">
         <div className="glass-card">
            <h2 className="section-title">The elite choosing efficiency.</h2>
            <p className="section-subtitle">Save 5 hours a week per listing. Start now with 3 complimentary generations.</p>
            <br />
            <button className="btn-primary">Get Access - €29/mo</button>
         </div>
      </section>

      {/* Luxury Footer */}
      <footer className="footer">
         <div className="footer-links">
            <a href="/privacy">Integrity Policy</a>
            <a href="/terms">Terms of Membership</a>
            <a href="mailto:info.instarealestate@gmail.com">Direct Support</a>
         </div>
         <p>© 2026 INSTA-REALESTATE. PREMIUM PROPERTY AUTOMATION. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
