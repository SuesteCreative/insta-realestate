import React from 'react';
import { XCircle, ArrowLeft } from 'lucide-react';

export default function CancelPage() {
  return (
    <main className="status-page fade-in">
      <div className="status-card glass-card">
        <XCircle className="red-text" size={64} />
        <h1>Checkout Cancelled</h1>
        <p>No worries! Your account hasn't been charged. Feel free to come back when you're ready to scale your agency.</p>
        
        <a href="/" className="btn-outline">
          <ArrowLeft size={18} /> Back to Pricing
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
        .red-text { color: #ff4d4d; }
      `}</style>
    </main>
  );
}
