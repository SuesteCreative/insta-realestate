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
    </main>
  );
}
