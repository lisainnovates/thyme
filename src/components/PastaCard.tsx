
import React from 'react';

interface PastaType {
  name: string;
  time: number; // in seconds
  description: string;
  story: string;
  location: string;
  icon: string;
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
            <div className="text-4xl animate-mediterranean-breeze" style={{ animationDelay: '0.5s' }}>
              {pasta.icon}
            </div>
            <div>
              <div className="text-xs text-volcanic-stone/60 font-medium uppercase tracking-wide">
                {pasta.location}
              </div>
              <div className="text-sm text-terracotta-warm opacity-80 font-serif italic">
                {Math.floor(pasta.time / 60)}:{(pasta.time % 60).toString().padStart(2, '0')} min
              </div>
            </div>
          </div>
          
          {/* Decorative lemon accent */}
          <div className="animate-gentle-sway">
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-lemon-sun opacity-70">
              <ellipse cx="12" cy="12" rx="4" ry="6" fill="currentColor" />
              <path
                d="M12 8c-1 0-1.5 0.5-1.5 1s0.5 1 1.5 1 1.5-0.5 1.5-1-0.5-1-1.5-1z"
                fill="#F1C40F"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>

        {/* Pasta name */}
        <h3 className="text-xl font-bold text-volcanic-stone mb-3 font-serif relative z-10">
          {pasta.name}
        </h3>
        
        {/* Story excerpt */}
        <p className="text-sm text-volcanic-stone/80 leading-relaxed mb-3 font-serif italic relative z-10">
          "{pasta.story}"
        </p>

        {/* Description */}
        <p className="text-xs text-volcanic-stone opacity-70 leading-relaxed relative z-10">
          {pasta.description}
        </p>

        {/* Decorative Mediterranean elements */}
        <div className="absolute bottom-3 right-3 flex space-x-2 opacity-40">
          <svg width="12" height="12" viewBox="0 0 24 24" className="text-olive-grove animate-gentle-sway">
            <path
              d="M12 2c2 0 4 1 4 3v4c0 2-2 3-4 3s-4-1-4-3V5c0-2 2-3 4-3z"
              fill="currentColor"
            />
          </svg>
          <svg width="12" height="12" viewBox="0 0 24 24" className="text-amalfi-blue animate-mediterranean-breeze">
            <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.6" />
            <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.8" />
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
