'use client';

import React, { useState } from 'react';
import { Check, Zap, Building2, ShieldCheck } from 'lucide-react';

const plans = [
  {
    id: 'monthly',
    name: 'Pro Monthly',
    price: '29€',
    period: '/month',
    description: 'Perfect for individual agents looking to scale their social presence.',
    features: [
      'Unlimited property carousels',
      'High-end branded templates',
      'Zillow & Idealista scraping',
      'Downloadable high-res assets',
      'Priority email support',
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY || 'price_1TEtxJA9MEhB4gDgud4cqXbU',
    highlight: false,
  },
  {
    id: 'annual',
    name: 'Pro Annual',
    price: '199€',
    period: '/year',
    description: 'Best value for high-volume agencies. Save 2 months free.',
    features: [
      'Everything in Pro Monthly',
      'Custom agency branding',
      'Bulk listing generation',
      'API access (coming soon)',
      'Dedicated success manager',
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_ANNUAL || 'price_1TEtxaA9MEhB4gDgPKRonlm6',
    highlight: true,
  },
];

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (priceId: string | undefined) => {
    if (!priceId) return;
    setLoading(priceId);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="pricing" className="container">
      <div className="section-header fade-in">
        <h2 className="section-title">The Membership</h2>
        <p className="section-subtitle">Premium property marketing. One-time setup, lifetime efficiency.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`pricing-card glass-card fade-in ${plan.highlight ? 'featured' : ''}`}
          >
            {plan.highlight && (
              <div 
                style={{ 
                  textTransform: 'uppercase', 
                  fontSize: '0.75rem', 
                  letterSpacing: '0.1rem',
                  color: 'var(--gold)',
                  marginBottom: '1rem'
                }}
              >
                Best Value
              </div>
            )}
            
            <div className="plan-header">
              <h3 className="gold-text" style={{ fontSize: '1.8rem' }}>{plan.name}</h3>
              <div className="plan-price" style={{ margin: '1rem 0' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 700 }}>{plan.price}</span>
                <span className="period" style={{ color: 'var(--text-secondary)' }}>{plan.period}</span>
              </div>
              <p className="plan-description" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{plan.description}</p>
            </div>

            <ul style={{ margin: '2rem 0', flex: 1 }}>
              {plan.features.map((feature, index) => (
                <li key={index} className="price-item" style={{ marginBottom: '1rem' }}>
                  <Check className="gold-text" size={18} style={{ flexShrink: 0 }} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => handleSubscribe(plan.priceId)}
              disabled={loading !== null}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              {loading === plan.priceId ? 'Redirecting...' : 'Get Started Now'}
            </button>
          </div>
        ))}
      </div>

      <div 
        className="trust-badges fade-in" 
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '2.5rem', 
          marginTop: '5rem',
          opacity: 0.6
        }}
      >
         <div className="badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={20} className="gold-text" />
            <span>GDPR Compliant</span>
         </div>
         <div className="badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={20} className="gold-text" />
            <span>Instant Access</span>
         </div>
         <div className="badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Building2 size={20} className="gold-text" />
            <span>Used by 50+ Agencies</span>
         </div>
      </div>
    </section>
  );
}
