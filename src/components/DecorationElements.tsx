
import React from 'react';

const DecorationElements: React.FC = () => {
  return (
    <>
      {/* Mount Etna silhouette - top center background */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-15 animate-mediterranean-breeze" style={{ animationDelay: '0s' }}>
        <svg width="200" height="120" viewBox="0 0 200 120" className="text-volcanic-stone">
          <path
            d="M20 100c20-30 40-50 60-70 10-10 20-15 25-20 5-5 8-8 10-10 2 2 5 5 10 10 5 5 15 10 25 20 20 20 40 40 60 70"
            fill="currentColor"
            opacity="0.3"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M95 30c2-2 4-4 5-6 1 2 3 4 5 6"
            fill="none"
            stroke="#E6B800"
            strokeWidth="2"
            opacity="0.4"
            strokeDasharray="3,2"
          />
        </svg>
      </div>

      {/* Lemon grove - left side */}
      <div className="absolute top-16 left-8 animate-gentle-sway opacity-25" style={{ animationDelay: '0.5s' }}>
        <svg width="80" height="100" viewBox="0 0 80 100" className="text-lemon-sun">
          <path
            d="M40 80c0-10-5-15-5-25s5-15 5-25-5-15-5-25"
            fill="none"
            stroke="#6B7B3F"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor" opacity="0.8" transform="rotate(-15 25 25)" />
          <ellipse cx="55" cy="35" rx="7" ry="10" fill="currentColor" opacity="0.7" transform="rotate(20 55 35)" />
          <ellipse cx="35" cy="50" rx="6" ry="9" fill="currentColor" opacity="0.9" transform="rotate(-10 35 50)" />
          <path
            d="M30 15c-5 0-8 3-8 8 0 3 2 5 5 6"
            fill="none"
            stroke="#6B7B3F"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M50 25c-4 0-7 2-7 6 0 2 1 4 3 5"
            fill="none"
            stroke="#6B7B3F"
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Olive branches - right side */}
      <div className="absolute top-20 right-12 animate-mediterranean-breeze opacity-30" style={{ animationDelay: '1s' }}>
        <svg width="90" height="80" viewBox="0 0 90 80" className="text-olive-grove">
          <path
            d="M10 40c20-5 40 0 60-5 10-2 15-5 20-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <ellipse cx="25" cy="35" rx="4" ry="8" fill="currentColor" opacity="0.8" transform="rotate(30 25 35)" />
          <ellipse cx="35" cy="42" rx="3" ry="6" fill="currentColor" opacity="0.7" transform="rotate(-20 35 42)" />
          <ellipse cx="50" cy="38" rx="4" ry="7" fill="currentColor" opacity="0.8" transform="rotate(15 50 38)" />
          <ellipse cx="65" cy="33" rx="3" ry="5" fill="currentColor" opacity="0.7" transform="rotate(-25 65 33)" />
          <ellipse cx="75" cy="30" rx="2" ry="4" fill="currentColor" opacity="0.6" transform="rotate(10 75 30)" />
        </svg>
      </div>

      {/* Amalfi Coast cliffs - bottom left */}
      <div className="absolute bottom-12 left-0 opacity-20 animate-story-shimmer" style={{ animationDelay: '1.5s' }}>
        <svg width="150" height="80" viewBox="0 0 150 80" className="text-amalfi-blue">
          <path
            d="M0 80c20-20 40-30 60-40 15-8 25-15 35-20 10-5 20-8 30-12 15-6 25-8 25-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            opacity="0.6"
          />
          <path
            d="M0 75c15-15 30-25 45-35 10-7 18-12 25-16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.4"
            strokeDasharray="5,3"
          />
        </svg>
      </div>

      {/* Pasta shapes scattered - various positions */}
      <div className="absolute top-1/3 left-1/4 opacity-15 animate-gentle-sway" style={{ animationDelay: '2s' }}>
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-terracotta-warm">
          {/* Farfalle */}
          <path
            d="M20 15c-5 0-8 3-8 5 0 2 3 5 8 5s8-3 8-5c0-2-3-5-8-5z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M12 18c0 0 2-2 4-2s4 2 4 2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M24 18c0 0 2-2 4-2s4 2 4 2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="absolute bottom-1/3 right-1/3 opacity-12 animate-mediterranean-breeze" style={{ animationDelay: '2.5s' }}>
        <svg width="35" height="35" viewBox="0 0 35 35" className="text-sicilian-olive">
          {/* Orecchiette */}
          <ellipse cx="17.5" cy="17.5" rx="12" ry="8" fill="currentColor" opacity="0.5" />
          <ellipse cx="17.5" cy="17.5" rx="8" ry="5" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Limoncello bottles - corner decorations */}
      <div className="absolute top-1/4 right-1/4 opacity-18 animate-story-shimmer" style={{ animationDelay: '3s' }}>
        <svg width="25" height="50" viewBox="0 0 25 50" className="text-coastal-yellow">
          <rect x="8" y="15" width="9" height="30" rx="1" fill="currentColor" opacity="0.7" />
          <rect x="9" y="12" width="7" height="4" rx="1" fill="currentColor" opacity="0.8" />
          <circle cx="12.5" cy="10" r="2" fill="currentColor" opacity="0.6" />
          <path
            d="M10 20c2 0 3 1 3 3s-1 3-3 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Wooden spoon - subtle kitchen element */}
      <div className="absolute bottom-1/4 left-1/5 opacity-12 animate-gentle-sway" style={{ animationDelay: '3.5s' }}>
        <svg width="60" height="20" viewBox="0 0 60 20" className="text-etna-terracotta">
          <ellipse cx="10" cy="10" rx="8" ry="6" fill="currentColor" opacity="0.6" />
          <rect x="18" y="9" width="35" height="2" rx="1" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      {/* Mediterranean breeze lines */}
      <div className="absolute top-0 left-0 w-full h-full opacity-8 animate-mediterranean-breeze" style={{ animationDelay: '4s' }}>
        <svg width="100%" height="100%" viewBox="0 0 800 600" className="text-sea-mist">
          <path
            d="M0 100c100 20 200-20 300 0s200 40 300 20 200-40 200-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="8,4"
          />
          <path
            d="M0 200c150-30 250 10 400-10s250-20 400 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="6,3"
          />
          <path
            d="M0 350c120 15 240-15 360 5s240 25 360-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="10,5"
          />
        </svg>
      </div>

      {/* Ceramic tile pattern - very subtle */}
      <div className="absolute bottom-0 right-0 opacity-8">
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-mediterranean-cream">
          <pattern id="ceramicTile" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
            <rect width="25" height="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="12.5" cy="12.5" r="3" fill="none" stroke="currentColor" strokeWidth="0.3" />
          </pattern>
          <rect width="100" height="100" fill="url(#ceramicTile)" opacity="0.6" />
        </svg>
      </div>
    </>
  );
};

export default DecorationElements;
