import { ArrowRight } from 'lucide-react';

const Showcase = () => {
  return (
    <section className="container section-header fade-in">
      <div className="section-header">
        <h2 className="section-title">The "Portrait Impact" Workflow</h2>
        <p className="section-subtitle">We transform any raw listing URL into a high-reach marketing package.</p>
      </div>

      <div className="showcase-grid glass-card">
        <div className="showcase-item">
          <span className="showcase-label">Raw Listing</span>
          <br /><br />
          <img 
            src="/showcase/before.png" 
            alt="Typical Real Estate Listing" 
            className="showcase-image"
          />
        </div>

        <div className="showcase-arrow" style={{ opacity: 0.8 }}>
          <ArrowRight size={48} className="gold-text" />
        </div>

        <div className="showcase-item">
          <span className="showcase-label">Pro Strategy Pack</span>
          <br /><br />
          <img 
            src="/showcase/after.png" 
            alt="Insta-RealEstate Vertical Result" 
            className="showcase-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
