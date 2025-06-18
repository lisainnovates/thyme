
import React from 'react';

const DecorationElements: React.FC = () => {
  return (
    <>
      {/* Sicilian lemon grove - top left */}
      <div className="absolute top-12 left-12 animate-mediterranean-breeze" style={{ animationDelay: '0.5s' }}>
        <svg width="40" height="40" viewBox="0 0 24 24" className="text-lemon-sun">
          <ellipse cx="12" cy="12" rx="6" ry="8" fill="currentColor" opacity="0.8" />
          <path
            d="M12 6c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"
            fill="#F7DC6F"
            opacity="0.9"
          />
          <path
            d="M12 16c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"
            fill="#F7DC6F"
            opacity="0.9"
          />
          <path
            d="M8 12c0 2 2 4 4 4s4-2 4-4"
            fill="none"
            stroke="#8FBC8F"
            strokeWidth="1"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Amalfi wine glass - top right */}
      <div className="absolute top-16 right-16 animate-gentle-sway" style={{ animationDelay: '1s' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" className="text-mediterranean-blue">
          <path
            d="M7 2h10v8c0 3-2 5-5 5s-5-2-5-5V2z"
            fill="currentColor"
            opacity="0.7"
          />
          <rect x="11" y="15" width="2" height="6" fill="currentColor" />
          <rect x="8" y="21" width="8" height="1" fill="currentColor" />
          <ellipse cx="12" cy="6" rx="3" ry="2" fill="#5DADE2" opacity="0.5" />
        </svg>
      </div>

      {/* Etna volcanic stones - bottom left */}
      <div className="absolute bottom-20 left-20 animate-story-shimmer" style={{ animationDelay: '1.5s' }}>
        <svg width="44" height="44" viewBox="0 0 24 24" className="text-volcanic-stone">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.6" />
          <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.8" />
          <circle cx="16" cy="10" r="2" fill="currentColor" opacity="0.7" />
          <circle cx="12" cy="16" r="2.5" fill="currentColor" opacity="0.9" />
          <path
            d="M6 18c2-2 4-1 6-2s4 0 6-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Mediterranean herbs - bottom right */}
      <div className="absolute bottom-16 right-20 animate-mediterranean-breeze" style={{ animationDelay: '2s' }}>
        <svg width="36" height="36" viewBox="0 0 24 24" className="text-olive-grove">
          <path
            d="M12 2c2 0 4 1 4 3v6c0 2-2 3-4 3s-4-1-4-3V5c0-2 2-3 4-3z"
            fill="currentColor"
          />
          <path
            d="M8 8c0 1 1 2 2 2h4c1 0 2-1 2-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <rect x="11.5" y="14" width="1" height="6" fill="currentColor" />
          <circle cx="12" cy="6" r="1" fill="#8FBC8F" opacity="0.8" />
          <circle cx="12" cy="10" r="0.8" fill="#8FBC8F" opacity="0.6" />
        </svg>
      </div>

      {/* Linen curtains - Mediterranean breeze effect */}
      <div className="absolute top-0 left-0 w-full h-3 linen-curtain opacity-30 animate-gentle-sway"></div>
      <div className="absolute bottom-0 left-0 w-full h-3 linen-curtain opacity-30 animate-gentle-sway"></div>
      <div className="absolute top-0 left-0 w-3 h-full linen-curtain opacity-30 animate-mediterranean-breeze"></div>
      <div className="absolute top-0 right-0 w-3 h-full linen-curtain opacity-30 animate-mediterranean-breeze"></div>

      {/* Floating story elements */}
      <div className="absolute top-1/4 right-1/4 animate-story-shimmer opacity-20">
        <svg width="20" height="20" viewBox="0 0 24 24" className="text-coastal-yellow">
          <path d="M12 2l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7l3-7z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="absolute bottom-1/3 left-1/3 animate-gentle-sway opacity-15">
        <svg width="18" height="18" viewBox="0 0 24 24" className="text-amalfi-blue">
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12h8m-4-4v8" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </>
  );
};

export default DecorationElements;
