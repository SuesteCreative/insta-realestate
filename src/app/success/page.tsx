import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function SuccessPage() {
  return (
    <main className="status-page fade-in">
      <div className="status-card glass-card">
        <CheckCircle className="gold-text" size={64} />
        <h1 className="gold-text">Welcome to the Pro Tier!</h1>
        <p>Your subscription is active. You now have unlimited access to high-end property carousels.</p>
        
        <div className="next-steps">
           <div className="step">
              <span className="step-number">1</span>
              <span>Check your email for the receipt and login link.</span>
           </div>
           <div className="step">
              <span className="step-number">2</span>
              <span>Head back to the dashboard to start generating.</span>
           </div>
        </div>

        <a href="/" className="btn-primary">
          Go to Dashboard <ArrowRight size={18} />
        </a>
      </div>
    </main>
  );
}
