// CardLoader.jsx
import React from 'react';
import './CardLoader.css';

const CardLoader = () => {
  return (
    <div className="skeleton-banner">
            <div className="skeleton-slider" style={{
                '--quantity': '10',
            }}>
                <div className="skeleton-item" style={{ '--position': '1' }}></div>
                <div className="skeleton-item" style={{ '--position': '2' }}></div>
                <div className="skeleton-item" style={{ '--position': '3' }}></div>
                <div className="skeleton-item" style={{ '--position': '4' }}></div>
                <div className="skeleton-item" style={{ '--position': '5' }}></div>
                <div className="skeleton-item" style={{ '--position': '6' }}></div>
                <div className="skeleton-item" style={{ '--position': '7' }}></div>
                <div className="skeleton-item" style={{ '--position': '8' }}></div>
                <div className="skeleton-item" style={{ '--position': '9' }}></div>
                <div className="skeleton-item" style={{ '--position': '10' }}></div>
            </div>
            {/* <div className="skeleton-content">
              <div className="skeleton-modal"></div>
            </div> */}
        </div>
  );
};

export default CardLoader;
