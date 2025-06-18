
import React from 'react';

const DecorationElements: React.FC = () => {
  return (
    <>
      {/* Floating decorative elements */}
      <div className="fixed top-10 left-10 animate-mediterranean-breeze opacity-30 z-0">
        <svg width="60" height="60" viewBox="0 0 60 60" className="text-olive-grove">
          <path
            d="M30 10c8 0 15 3 18 10v30c0 8-8 12-18 12s-18-4-18-12V20c3-7 10-10 18-10z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          />
          <ellipse cx="30" cy="20" rx="8" ry="5" fill="currentColor" opacity="0.6" />
        </svg>
      </div>

      <div className="fixed top-20 right-20 animate-gentle-sway opacity-40 z-0" style={{ animationDelay: '2s' }}>
        <svg width="40" height="40" viewBox="0 0 48 48" className="text-lemon-sun">
          <path
            d="M24 8c-4 0-7 3-8 8-1 6 0 12 2 17 2 5 5 7 6 7s4-2 6-7c2-5 3-11 2-17-1-5-4-8-8-8z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="fixed bottom-20 left-20 animate-mediterranean-breeze opacity-25 z-0" style={{ animationDelay: '4s' }}>
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-amalfi-blue">
          <circle 
            cx="40" 
            cy="40" 
            r="30" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            opacity="0.6"
            strokeDasharray="5,3"
          />
          <circle cx="40" cy="40" r="10" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      <div className="fixed bottom-10 right-10 animate-gentle-sway opacity-35 z-0" style={{ animationDelay: '1s' }}>
        <svg width="50" height="50" viewBox="0 0 50 50" className="text-terracotta-warm">
          <path
            d="M25 5c10 0 18 8 18 18s-8 18-18 18S7 33 7 23 15 5 25 5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.7"
          />
          <circle cx="25" cy="23" r="8" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    </>
  );
};

export default DecorationElements;
