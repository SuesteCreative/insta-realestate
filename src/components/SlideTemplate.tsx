import React from 'react';

interface SlideProps {
  data: {
    title: string;
    price: string;
    images: string[];
  };
  id: string;
}

export default function SlideTemplate({ data, id }: SlideProps) {
  return (
    <div id={id} className="slide-template">
      <div className="bg-image">
        <img src={data.images[0]} alt="Prop" />
      </div>
      <div className="overlay">
        <div className="content">
          <div className="gold-badge">Luxury Listing</div>
          <h1 className="title">{data.title}</h1>
          <div className="price">{data.price}</div>
          <div className="line"></div>
          <div className="footer-tag">Insta-RealEstate</div>
        </div>
      </div>

      <style jsx>{`
        .slide-template {
          width: 1080px;
          height: 1080px;
          position: relative;
          background: #1A1A1A;
          color: #FDFCF8;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .bg-image {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .bg-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.6) contrast(1.1);
        }

        .overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 80px;
        }

        .content {
          max-width: 800px;
        }

        .gold-badge {
          background: #D4AF37;
          color: #1A1A1A;
          display: inline-block;
          padding: 8px 16px;
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 2px;
          font-size: 18px;
          margin-bottom: 24px;
        }

        .title {
          font-family: 'Playfair Display', serif;
          font-size: 72px;
          line-height: 1.1;
          margin-bottom: 20px;
          text-shadow: 0 4px 10px rgba(0,0,0,0.4);
        }

        .price {
          font-size: 48px;
          font-weight: 700;
          color: #D4AF37;
          margin-bottom: 40px;
        }

        .line {
          width: 100px;
          height: 4px;
          background: #D4AF37;
          margin-bottom: 20px;
        }

        .footer-tag {
          font-size: 16px;
          font-weight: 500;
          opacity: 0.6;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
}
