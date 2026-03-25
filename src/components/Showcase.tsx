import { ArrowRight } from 'lucide-react';

const Showcase = () => {
  return (
    <section className="container">
      <div className="section-header fade-in">
        <h2 className="section-title">The "Portrait Impact" Workflow</h2>
        <p className="section-subtitle">We transform any raw listing URL into a high-reach marketing package.</p>
      </div>

      <div className="showcase-grid glass-card fade-in" style={{ padding: '4rem 2.5rem' }}>
        <div className="showcase-item">
          <div className="showcase-label">Source Listing</div>
          <br />
          <img 
            src="/showcase/before.png" 
            alt="Typical Real Estate Listing" 
            className="showcase-image"
          />
          <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Chaotic, unbranded raw listing data.</p>
        </div>

        <div className="showcase-arrow" style={{ opacity: 0.8, display: 'flex', justifyContent: 'center' }}>
          <ArrowRight size={56} className="gold-text" />
        </div>

        <div className="showcase-item">
          <div className="showcase-label">Designer Fulfillment</div>
          <br />
          <img 
            src="/showcase/after.png" 
            alt="Insta-RealEstate Vertical Result" 
            className="showcase-image"
          />
          <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>High-reach 1080x1350 Portrait carousels.</p>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
