
import React from 'react';

interface HandDrawnPastaIconProps {
  pastaType: string;
}

const HandDrawnPastaIcon: React.FC<HandDrawnPastaIconProps> = ({ pastaType }) => {
  const getIcon = () => {
    switch (pastaType) {
      case 'spaghetti':
        return (
          <svg width="32" height="32" viewBox="0 0 40 40" className="text-terracotta-warm">
            <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
              <path d="M8 30c3-2.5 7-1.5 12-2s8-.5 12 1" opacity="0.8" />
              <path d="M8 32c3.5-2 7.5-1 12.5-1.5s8.5 0 11.5 1.5" opacity="0.7" />
              <path d="M9 28c3-2 6.5-1 11-1.5s7.5 0 11 1" opacity="0.6" />
              <path d="M7 34c4-2.5 8-1.5 13-2s9-.5 13 1" opacity="0.5" />
            </g>
          </svg>
        );
      
      case 'penne':
        return (
          <svg width="32" height="32" viewBox="0 0 40 40" className="text-terracotta-warm">
            <g stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2">
              <rect x="15" y="12" width="4" height="12" rx="2" transform="rotate(15 17 18)" />
              <rect x="18" y="16" width="4" height="12" rx="2" transform="rotate(-10 20 22)" />
              <rect x="21" y="14" width="4" height="12" rx="2" transform="rotate(5 23 20)" />
            </g>
            <g stroke="currentColor" strokeWidth="0.8" fill="none">
              <path d="M16 14l2 10" opacity="0.6" />
              <path d="M22 18l2 10" opacity="0.6" />
              <path d="M25 16l2 10" opacity="0.6" />
            </g>
          </svg>
        );
      
      case 'fettuccine':
        return (
          <svg width="32" height="32" viewBox="0 0 40 40" className="text-terracotta-warm">
            <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
              <path d="M8 20c4-3 8-1 12 0s8 3 12 0" opacity="0.8" />
              <path d="M8 24c4-2.5 8-.5 12 .5s8 2.5 12-.5" opacity="0.7" />
              <path d="M8 28c4-2 8 0 12 1s8 2 12-1" opacity="0.6" />
            </g>
          </svg>
        );
      
      case 'rigatoni':
        return (
          <svg width="32" height="32" viewBox="0 0 40 40" className="text-terracotta-warm">
            <g stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15">
              <rect x="12" y="15" width="6" height="12" rx="3" />
              <rect x="18" y="13" width="6" height="12" rx="3" />
              <rect x="24" y="16" width="6" height="12" rx="3" />
            </g>
            <g stroke="currentColor" strokeWidth="0.8" fill="none">
              <line x1="12" y1="18" x2="18" y2="18" opacity="0.5" />
              <line x1="12" y1="22" x2="18" y2="22" opacity="0.5" />
              <line x1="18" y1="16" x2="24" y2="16" opacity="0.5" />
              <line x1="18" y1="20" x2="24" y2="20" opacity="0.5" />
              <line x1="24" y1="19" x2="30" y2="19" opacity="0.5" />
              <line x1="24" y1="23" x2="30" y2="23" opacity="0.5" />
            </g>
          </svg>
        );
      
      case 'linguine':
        return (
          <svg width="32" height="32" viewBox="0 0 40 40" className="text-terracotta-warm">
            <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round">
              <path d="M8 18c5-2 10 1 15-1s10-3 15 0" opacity="0.8" />
              <path d="M8 22c5-1.5 10 .5 15-.5s10-2.5 15 .5" opacity="0.7" />
              <path d="M8 26c5-1 10 0 15 0s10-2 15 1" opacity="0.6" />
            </g>
          </svg>
        );
      
      case 'ravioli':
        return (
          <svg width="32" height="32" viewBox="0 0 40 40" className="text-terracotta-warm">
            <g stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2">
              <path d="M12 15c0-2 2-4 6-4s6 2 6 4v6c0 2-2 4-6 4s-6-2-6-4z" />
              <path d="M20 18c0-1.5 1.5-3 4.5-3s4.5 1.5 4.5 3v4c0 1.5-1.5 3-4.5 3s-4.5-1.5-4.5-3z" />
            </g>
            <g stroke="currentColor" strokeWidth="0.8" fill="none">
              <path d="M15 18c1 0 2-.5 3 0s2 .5 3 0" opacity="0.6" />
              <path d="M22.5 21c.8 0 1.5-.3 2.2 0s1.5.3 2.3 0" opacity="0.6" />
            </g>
          </svg>
        );
      
      default:
        return (
          <svg width="32" height="32" viewBox="0 0 40 40" className="text-terracotta-warm">
            <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
          </svg>
        );
    }
  };

  return <div className="w-8 h-8 flex items-center justify-center">{getIcon()}</div>;
};

export default HandDrawnPastaIcon;
