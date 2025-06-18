
import React from 'react';

const DecorationElements: React.FC = () => {
  return (
    <>
      {/* Hand-drawn lemon - top left */}
      <div className="absolute top-12 left-12 animate-mediterranean-breeze" style={{ animationDelay: '0.5s' }}>
        <svg width="44" height="44" viewBox="0 0 40 40" className="text-lemon-sun">
          <path
            d="M20 8c-4 0-7 3-8 8-1 6 0 12 2 17 2 5 5 7 6 7s4-2 6-7c2-5 3-11 2-17-1-5-4-8-8-8z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.8"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(241, 196, 15, 0.3))'
            }}
          />
          <path
            d="M20 12c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"
            fill="#F7DC6F"
            opacity="0.9"
          />
          <path
            d="M16 20c0 4 2 8 4 8s4-4 4-8"
            fill="none"
            stroke="#8FBC8F"
            strokeWidth="1.2"
            opacity="0.6"
            strokeDasharray="2,1"
          />
        </svg>
      </div>

      {/* Hand-drawn wine glass - top right */}
      <div className="absolute top-16 right-16 animate-gentle-sway" style={{ animationDelay: '1s' }}>
        <svg width="36" height="36" viewBox="0 0 40 40" className="text-mediterranean-blue">
          <path
            d="M12 8h16v12c0 6-4 10-8 10s-8-4-8-10V8z"
            fill="currentColor"
            opacity="0.7"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <rect x="19" y="30" width="2" height="8" fill="currentColor" />
          <rect x="15" y="38" width="10" height="1.5" rx="0.75" fill="currentColor" />
          <ellipse cx="20" cy="14" rx="6" ry="3" fill="#5DADE2" opacity="0.5" />
          <path
            d="M12 8c2 1 6 2 8 2s6-1 8-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Hand-drawn volcanic stones - bottom left */}
      <div className="absolute bottom-20 left-20 animate-story-shimmer" style={{ animationDelay: '1.5s' }}>
        <svg width="48" height="48" viewBox="0 0 40 40" className="text-volcanic-stone">
          <circle 
            cx="20" 
            cy="20" 
            r="15" 
            fill="currentColor" 
            opacity="0.6" 
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.8" />
          <circle cx="26" cy="16" r="3" fill="currentColor" opacity="0.7" />
          <circle cx="20" cy="26" r="3.5" fill="currentColor" opacity="0.9" />
          <path
            d="M10 30c4-4 8-2 12-4s8 0 12-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.4"
            strokeDasharray="3,2"
          />
        </svg>
      </div>

      {/* Hand-drawn herbs - bottom right */}
      <div className="absolute bottom-16 right-20 animate-mediterranean-breeze" style={{ animationDelay: '2s' }}>
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-olive-grove">
          <path
            d="M20 8c4 0 8 2 8 6v12c0 4-4 6-8 6s-8-2-8-6V14c0-4 4-6 8-6z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <path
            d="M14 16c0 2 2 4 4 4h4c2 0 4-2 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="1,1"
          />
          <rect x="19.5" y="32" width="1" height="6" fill="currentColor" />
          <ellipse cx="20" cy="12" rx="2" ry="1.5" fill="#8FBC8F" opacity="0.8" />
          <ellipse cx="20" cy="18" rx="1.5" ry="1" fill="#8FBC8F" opacity="0.6" />
          <path
            d="M16 14c1 0 2 1 4 1s3-1 4-1"
            fill="none"
            stroke="#8FBC8F"
            strokeWidth="0.8"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Hand-drawn curtain effects */}
      <div className="absolute top-0 left-0 w-full h-4 linen-curtain opacity-30 animate-gentle-sway">
        <svg width="100%" height="16" viewBox="0 0 800 16" className="text-mediterranean-cream opacity-40">
          <path
            d="M0 8c20-4 40 4 80 0s60-8 80-4 40 8 80 4 60-8 80-4 40 8 80 4 60-8 80-4 40 8 80 4 60-8 80-4 40 8 80 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-4 linen-curtain opacity-30 animate-gentle-sway">
        <svg width="100%" height="16" viewBox="0 0 800 16" className="text-mediterranean-cream opacity-40">
          <path
            d="M0 8c20 4 40-4 80 0s60 8 80 4 40-8 80-4 60 8 80 4 40-8 80-4 60 8 80 4 40-8 80-4 60 8 80 4 40-8 80-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Floating hand-drawn elements */}
      <div className="absolute top-1/4 right-1/4 animate-story-shimmer opacity-20">
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-coastal-yellow">
          <path 
            d="M12 2l2.5 7.5h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z" 
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-1/3 left-1/3 animate-gentle-sway opacity-15">
        <svg width="20" height="20" viewBox="0 0 24 24" className="text-amalfi-blue">
          <circle 
            cx="12" 
            cy="12" 
            r="8" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4,2"
          />
          <path 
            d="M8 12h8m-4-4v8" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
};

export default DecorationElements;
