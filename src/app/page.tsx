import Generator from '@/components/Generator';
import Pricing from '@/components/Pricing';
import { Sparkles, Zap, Image as ImageIcon, Download } from 'lucide-react';

export default function Home() {
  return (
    <main className="landing-page">
      {/* Navbar Placeholder */}
      <nav className="navbar glass-card">
        <div className="logo gold-text">Insta-RealEstate</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <button className="btn-primary">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero section fade-in">
        <div className="hero-content">
          <span className="badge">Updated v2.0</span>
          <h1 className="hero-title">
            Convert property URLs <br />
            into <span className="gold-text">Instagram carousels</span> in 30 seconds.
          </h1>
          <p className="hero-subtitle">
            Paste a link from Zillow, Idealista, or RE/MAX. Get a folder of branded slides manually designed by code. No Canva required.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Start Free Trial</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
        </div>
        
        {/* Visual Mockup Placeholder */}
        <div className="hero-mockup glass-card">
          <div className="mockup-header gold-text">Slide 1: Cover</div>
          <div className="mockup-content">
             <div className="mockup-skeleton-img"></div>
             <div className="mockup-skeleton-text">Luxury Ocean View Villa</div>
             <div className="mockup-skeleton-price">€ 2,450,000</div>
          </div>
        </div>
      </header>

      <section id="features" className="features-section">
        <h2 className="gold-text">Everything you need to stand out</h2>
        <div className="features-grid">
          <div className="feature-card glass-card">
            <Sparkles className="gold-text" size={32} />
            <h3>Premium Aesthetics</h3>
            <p>No generic templates. High-end typography and layouts that command attention.</p>
          </div>
          <div className="feature-card glass-card">
            <Zap className="gold-text" size={32} />
            <h3>30-Second Workflow</h3>
            <p>Paste a listing URL and get a full carousel pack instantly. No manual work.</p>
          </div>
          <div className="feature-card glass-card">
            <ImageIcon className="gold-text" size={32} />
            <h3>Auto-Scraping</h3>
            <p>We extract high-res images and details directly from Zillow, Idealista, and more.</p>
          </div>
          <div className="feature-card glass-card">
            <Download className="gold-text" size={32} />
            <h3>Ready for Meta</h3>
            <p>1080x1080 optimized assets ready for Instagram, Facebook, and Threads.</p>
          </div>
        </div>
      </section>

      <Pricing />

      {/* CTA Section */}
      <section className="cta-banner section">
         <div className="glass-card cta-content">
            <h2>Start with 3 free listings.</h2>
            <p>Most agents save 4 hours a week using Insta-RealEstate.</p>
            <button className="btn-primary">Get Pro Plan - €29/mo</button>
         </div>
      </section>

      <footer className="footer">
         <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
         </div>
         <p>© 2026 Insta-RealEstate. Powered by Antigravity Agent.</p>
      </footer>
    </main>
  );
}
