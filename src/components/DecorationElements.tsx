
import React from 'react';

const DecorationElements: React.FC = () => {
  return (
    <>
      {/* Top left lemon */}
      <div className="absolute top-8 left-8 animate-float" style={{ animationDelay: '0.5s' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" className="text-lemon-yellow">
          <ellipse cx="12" cy="12" rx="6" ry="8" fill="currentColor" />
          <path
            d="M12 6c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"
            fill="#F7DC6F"
            opacity="0.8"
          />
          <path
            d="M12 16c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"
            fill="#F7DC6F"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Top right wine glass */}
      <div className="absolute top-12 right-12 animate-sway" style={{ animationDelay: '1s' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" className="text-terracotta">
          <path
            d="M8 2h8v6c0 2-2 4-4 4s-4-2-4-4V2z"
            fill="currentColor"
            opacity="0.7"
          />
          <rect x="11" y="12" width="2" height="8" fill="currentColor" />
          <rect x="8" y="20" width="8" height="2" fill="currentColor" />
        </svg>
      </div>

      {/* Bottom left pasta plate */}
      <div className="absolute bottom-16 left-16 animate-float" style={{ animationDelay: '1.5s' }}>
        <svg width="36" height="36" viewBox="0 0 24 24" className="text-lemon-green">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.6" />
          <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      {/* Bottom right basil sprig */}
      <div className="absolute bottom-12 right-16 animate-sway" style={{ animationDelay: '2s' }}>
        <svg width="30" height="30" viewBox="0 0 24 24" className="text-lemon-green">
          <path
            d="M12 2c2 0 4 1 4 3v4c0 2-2 3-4 3s-4-1-4-3V5c0-2 2-3 4-3z"
            fill="currentColor"
          />
          <path
            d="M8 8c0 1 1 2 2 2h4c1 0 2-1 2-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <rect x="11.5" y="12" width="1" height="8" fill="currentColor" />
        </svg>
      </div>

      {/* Volcanic texture edges */}
      <div className="absolute top-0 left-0 w-full h-2 volcanic-texture opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 volcanic-texture opacity-40"></div>
      <div className="absolute top-0 left-0 w-2 h-full volcanic-texture opacity-40"></div>
      <div className="absolute top-0 right-0 w-2 h-full volcanic-texture opacity-40"></div>
    </>
  );
};

export default DecorationElements;
