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
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY,
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
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_ANNUAL,
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
    <section id="pricing" className="pricing-section">
      <div className="section-header fade-in">
        <h2 className="gold-text">Pricing That Scales With You</h2>
        <p>Choose the plan that fits your agency's growth.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`pricing-card glass-card fade-in ${plan.highlight ? 'featured' : ''}`}
          >
            {plan.highlight && <div className="featured-badge">Best Value</div>}
            
            <div className="plan-header">
              <h3 className="gold-text">{plan.name}</h3>
              <div className="plan-price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
            </div>

            <ul className="plan-features">
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <Check className="gold-text" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => handleSubscribe(plan.priceId)}
              disabled={loading !== null}
              className={`btn-purchase ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}
            >
              {loading === plan.priceId ? 'Redirecting...' : 'Get Started Now'}
            </button>
          </div>
        ))}
      </div>

      <div className="trust-badges fade-in">
         <div className="badge">
            <ShieldCheck size={20} className="gold-text" />
            <span>GDPR Compliant</span>
         </div>
         <div className="badge">
            <Zap size={20} className="gold-text" />
            <span>Instant Access</span>
         </div>
         <div className="badge">
            <Building2 size={20} className="gold-text" />
            <span>Used by 50+ Agencies</span>
         </div>
      </div>
    </section>
  );
}
