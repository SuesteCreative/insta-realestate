import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Showcase = () => {
  return (
    <section className="showcase-section fade-in">
      <div className="section-header center">
        <h2 className="section-title gold-text">From messy listing to premium marketing</h2>
        <p className="section-subtitle">We transform any raw property URL into a designer-grade carousel package.</p>
      </div>

      <div className="showcase-grid">
        <div className="showcase-item">
          <span className="showcase-label">The Raw Listing</span>
          <img 
            src="/showcase/before.png" 
            alt="Real estate listing mock" 
            className="showcase-image"
          />
        </div>

        <div className="showcase-arrow">
          <ArrowRight size={48} />
        </div>

        <div className="showcase-item">
          <span className="showcase-label">Pro Strategy Pack</span>
          <img 
            src="/showcase/after.png" 
            alt="Pro carousel results mock" 
            className="showcase-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
