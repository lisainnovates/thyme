
import React from 'react';
import HandDrawnPastaIcon from './HandDrawnPastaIcon';

interface PastaType {
  name: string;
  time: number; // in seconds
  description: string;
  story: string;
  location: string;
}

interface PastaCardProps {
  pasta: PastaType;
  isSelected: boolean;
  onClick: () => void;
  isFlipping: boolean;
}

const PastaCard: React.FC<PastaCardProps> = ({ pasta, isSelected, onClick, isFlipping }) => {
  return (
    <div
      className={`recipe-card cursor-pointer transition-all duration-500 ${
        isFlipping ? 'flipping' : ''
      } ${
        isSelected 
          ? 'scale-105 shadow-2xl border-2 border-lemon-sun ring-4 ring-lemon-sun/20' 
          : 'hover:scale-102 shadow-lg border border-olive-grove/30 hover:shadow-xl'
      } rounded-2xl overflow-hidden`}
      onClick={onClick}
    >
      <div className="bg-gradient-to-br from-mediterranean-cream via-white to-sea-mist p-6 h-full relative">
        {/* Story shimmer effect for selected card */}
        {isSelected && (
          <div className="absolute inset-0 story-glow animate-story-shimmer rounded-2xl"></div>
        )}

        {/* Card header with pasta icon and location */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className="flex items-center space-x-3">
            <div className="animate-mediterranean-breeze" style={{ animationDelay: '0.5s' }}>
              <HandDrawnPastaIcon pastaType={pasta.name} />
            </div>
            <div>
              <div className="text-xs text-volcanic-stone/60 font-medium uppercase tracking-wide">
                {pasta.location}
              </div>
              <div className="text-sm text-terracotta-warm opacity-80 font-playfair italic">
                {Math.floor(pasta.time / 60)}:{(pasta.time % 60).toString().padStart(2, '0')} min
              </div>
            </div>
          </div>
          
          {/* Hand-drawn lemon accent */}
          <div className="animate-gentle-sway">
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-lemon-sun opacity-70">
              <path
                d="M12 4c-2 0-3.5 1.5-4 4-.5 3 0 6 1 8.5 1 2.5 2.5 3.5 3 3.5s2-1 3-3.5c1-2.5 1.5-5.5 1-8.5-.5-2.5-2-4-4-4z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.5"
                style={{
                  filter: 'drop-shadow(0 0 2px rgba(241, 196, 15, 0.3))'
                }}
              />
              <path
                d="M12 6c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1z"
                fill="#F7DC6F"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>

        {/* Pasta name */}
        <h3 className="text-xl font-bold text-volcanic-stone mb-3 font-dancing relative z-10">
          {pasta.name}
        </h3>
        
        {/* Story excerpt */}
        <p className="text-sm text-volcanic-stone/80 leading-relaxed mb-3 font-playfair italic relative z-10">
          "{pasta.story}"
        </p>

        {/* Description */}
        <p className="text-xs text-volcanic-stone opacity-70 leading-relaxed relative z-10">
          {pasta.description}
        </p>

        {/* Hand-drawn decorative elements */}
        <div className="absolute bottom-3 right-3 flex space-x-2 opacity-40">
          <svg width="12" height="12" viewBox="0 0 24 24" className="text-olive-grove animate-gentle-sway">
            <path
              d="M12 2c1.5 0 3 .5 3.5 2v6c0 1.5-1.5 2.5-3.5 2.5s-3.5-1-3.5-2.5V4c.5-1.5 2-2 3.5-2z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.3"
            />
            <ellipse cx="12" cy="6" rx="1.5" ry="1" fill="currentColor" opacity="0.6" />
          </svg>
          <svg width="12" height="12" viewBox="0 0 24 24" className="text-amalfi-blue animate-mediterranean-breeze">
            <circle 
              cx="12" 
              cy="12" 
              r="5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              opacity="0.6"
              strokeDasharray="2,1"
            />
            <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.8" />
          </svg>
        </div>

        {/* Linen curtain texture overlay */}
        {isSelected && (
          <div className="absolute inset-0 linen-curtain rounded-2xl pointer-events-none opacity-30"></div>
        )}
      </div>
    </div>
  );
};

export default PastaCard;
