import Generator from '@/components/Generator';
import Pricing from '@/components/Pricing';
import Showcase from '@/components/Showcase';
import Image from 'next/image';
import { Sparkles, Zap, Image as ImageIcon, Download, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="landing-page">
      {/* Absolute Section Isolation: Navigation */}
      <section className="container" style={{ padding: '2rem 0' }}>
        <nav className="navbar fade-in">
          <div className="logo-group">
            <Image 
              src="/logo.png" 
              alt="Insta-RealEstate Logo" 
              width={40} 
              height={40} 
              style={{ borderRadius: '8px' }} 
            />
            <div className="logo gold-text" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Insta-RealEstate</div>
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">The Workflow</a>
            <a href="#pricing" className="nav-link">Membership</a>
            <button className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>Agent Login</button>
          </div>
        </nav>
      </section>

      {/* Hero: Luxury Focus */}
      <header className="hero container fade-in">
        <h1 className="hero-title">
          The standard for <br />
          <span className="gold-text">High-Reach</span> Property Marketing.
        </h1>
        <p className="hero-subtitle">
          Instantly turn any listing URL into a 1080x1350 Portrait-optimized carousel package. Designed for the elite agent who demands precision, speed, and premium aesthetics.
        </p>
        <div className="hero-actions">
          <a href="#pricing" className="btn-primary">Elevate Your Listings</a>
        </div>
      </header>

      {/* Production-Grade Showcase */}
      <Showcase />

      {/* High-End Features: The Workflow */}
      <section id="features" className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Engineered for Conversion</h2>
          <p className="section-subtitle">Save 5 hours per listing. Reach 30% more screen space. Win the attention war.</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card glass-card fade-in">
            <Sparkles className="gold-text" size={32} />
            <h3 style={{ margin: '1.5rem 0' }}>Boutique Aesthetic</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Every slide is built with Playfair Display and Inter. No messy designs, only high-value typography that commands premium fees.</p>
          </div>
          <div className="feature-card glass-card fade-in">
            <Zap className="gold-text" size={32} />
            <h3 style={{ margin: '1.5rem 0' }}>30-Second Turnaround</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Paste a Zillow or Idealista link. Our engine extracts the data and renders your luxury carousel package in seconds.</p>
          </div>
          <div className="feature-card glass-card fade-in">
            <ImageIcon className="gold-text" size={32} />
            <h3 style={{ margin: '1.5rem 0' }}>High-Res Fulfillment</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Automated extraction of high-resolution property imagery. No blurring, only crisp, retina-ready assets for Meta.</p>
          </div>
          <div className="feature-card glass-card fade-in">
            <Download className="gold-text" size={32} />
            <h3 style={{ margin: '1.5rem 0' }}>Portrait Impact</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Full 1080x1350 vertical format. Take up 30% more phone space than 1:1 posts. Win the attention war on Instagram and Threads.</p>
          </div>
        </div>
      </section>

      {/* Membership Tiers: Fixed Spacing */}
      <Pricing />

      {/* Final Call to Action */}
      <section className="container section-header fade-in">
         <div className="glass-card" style={{ padding: '6rem 2rem' }}>
            <h2 className="section-title">Elite efficiency for elite agents.</h2>
            <p className="section-subtitle">Join the 50+ boutique agencies automating their property portfolios.</p>
            <br /><br />
            <a href="#pricing" className="btn-primary">Secure Access - €29/mo</a>
         </div>
      </section>

      {/* Luxury Footer: Non-Amateur */}
      <footer className="footer">
         <div className="footer-links">
            <a href="/privacy">Integrity Policy</a>
            <a href="/terms">Membership Rules</a>
            <a href="mailto:info.instarealestate@gmail.com">Direct Support</a>
         </div>
         <p>© 2026 INSTA-REALESTATE. PREMIUM PROPERTY AUTOMATION. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
