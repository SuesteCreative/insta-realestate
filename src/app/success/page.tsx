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

      <style jsx>{`
        .status-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: var(--bg-primary);
        }
        .status-card {
          max-width: 600px;
          padding: 5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        h1 { font-size: 3rem; }
        p { color: var(--text-muted); line-height: 1.6; font-size: 1.2rem; }
        .next-steps {
           text-align: left;
           margin: 2rem 0;
           width: 100%;
        }
        .step {
           display: flex;
           align-items: center;
           gap: 1.5rem;
           margin-bottom: 1.5rem;
        }
        .step-number {
           background: var(--gold);
           color: var(--bg-primary);
           width: 30px;
           height: 30px;
           border-radius: 50%;
           display: flex;
           align-items: center;
           justify-content: center;
           font-weight: bold;
           flex-shrink: 0;
        }
      `}</style>
    </main>
  );
}
