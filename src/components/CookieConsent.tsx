'use client';

import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner glass-card fade-in">
      <div className="cookie-content">
        <p>
          We use cookies to ensure you get the best experience on our website. 
          By clicking "Accept", you agree to our <a href="/privacy">Privacy Policy</a>.
        </p>
        <button onClick={handleAccept} className="btn-primary">Accept</button>
      </div>

      <style jsx>{`
        .cookie-banner {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 600px;
          z-index: 9999;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid var(--gold);
        }
        .cookie-content {
           display: flex;
           align-items: center;
           gap: 2rem;
        }
        .cookie-content p {
          font-size: 0.9rem;
          margin: 0;
        }
        .cookie-content a {
          color: var(--gold);
          text-decoration: underline;
        }
        @media (max-width: 768px) {
           .cookie-banner { flex-direction: column; gap: 1rem; text-align: center; }
           .cookie-content { flex-direction: column; gap: 1rem; }
        }
      `}</style>
    </div>
  );
}
