
import React from 'react';

interface PastaType {
  name: string;
  time: number; // in seconds
  description: string;
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
      className={`recipe-card cursor-pointer transition-all duration-300 ${
        isFlipping ? 'flipping' : ''
      } ${
        isSelected 
          ? 'scale-105 shadow-xl border-lava-orange' 
          : 'hover:scale-102 shadow-lg border-lemon-green'
      }`}
      onClick={onClick}
    >
      <div className="bg-gradient-to-br from-creamy-white to-lemon-yellow border-2 rounded-xl p-6 h-full">
        {/* Card header with pasta icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl">{pasta.icon}</div>
          <div className="text-right">
            <div className="text-sm text-volcanic-gray opacity-70">Tempo di cottura</div>
            <div className="text-lg font-bold text-terracotta">
              {Math.floor(pasta.time / 60)}:{(pasta.time % 60).toString().padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Pasta name */}
        <h3 className="text-xl font-bold text-volcanic-gray mb-2">{pasta.name}</h3>
        
        {/* Description */}
        <p className="text-sm text-volcanic-gray opacity-80 leading-relaxed">
          {pasta.description}
        </p>

        {/* Decorative lemon accent */}
        <div className="mt-4 flex justify-end">
          <svg width="16" height="16" viewBox="0 0 24 24" className="text-lemon-yellow opacity-60">
            <circle cx="12" cy="12" r="8" fill="currentColor" />
            <path
              d="M12 8c-2 0-4 1-4 3s2 3 4 3 4-1 4-3-2-3-4-3z"
              fill="#F7DC6F"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Volcanic texture border */}
        {isSelected && (
          <div className="absolute inset-0 rounded-xl border-2 border-lava-orange volcanic-texture opacity-30 pointer-events-none"></div>
        )}
      </div>
    </div>
  );
};

export default PastaCard;
