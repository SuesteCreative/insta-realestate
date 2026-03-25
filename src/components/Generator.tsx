'use client';

import React, { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import SlideTemplate from './SlideTemplate';

export default function Generator() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (slideRef.current === null) return;
    
    // Set explicit size for 1080x1080 capture
    const dataUrl = await htmlToImage.toPng(slideRef.current, {
      width: 1080,
      height: 1080,
    });
    
    const link = document.createElement('a');
    link.download = `insta-carousel-slide.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="generator-container glass-card">
      <div className="input-group">
        <label className="input-label">Paste Property URL</label>
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)}
          placeholder="e.g. zillow.com/homes/..."
          className="url-input"
        />
        <button 
          onClick={handleGenerate} 
          disabled={loading || !url}
          className="btn-primary"
        >
          {loading ? 'Processing...' : 'Generate Assets'}
        </button>
      </div>

      {result && (
        <div className="result-preview fade-in">
           <div className="preview-header">
              <h3 className="gold-text">Preview</h3>
           </div>
           
           <div className="slides-grid">
              <div className="slide-item glass-card">
                 <div className="preview-thumbnail">
                    <img src={result.data.images[0]} alt="Thumbnail" />
                    <div className="thumb-overlay">
                       <span>{result.data.title}</span>
                    </div>
                 </div>
                 <button onClick={handleDownload} className="btn-download">Download Slide 1</button>
              </div>
           </div>

           {/* Hidden container for rendering at high res */}
           <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
              <div ref={slideRef} style={{ width: '1080px', height: '1080px' }}>
                 <SlideTemplate data={result.data} id="slide-capture" />
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
