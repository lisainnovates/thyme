
import React from 'react';
import PastaCard from './PastaCard';

interface PastaType {
  name: string;
  time: number; // in seconds
  description: string;
  story: string;
  location: string;
}

interface RecipeBookProps {
  pastaTypes: PastaType[];
  selectedPasta: PastaType;
  onPastaSelect: (pasta: PastaType, index: number) => void;
  flippingIndex: number | null;
  isRunning: boolean;
}

const RecipeBook: React.FC<RecipeBookProps> = ({
  pastaTypes,
  selectedPasta,
  onPastaSelect,
  flippingIndex,
  isRunning
}) => {
  const currentIndex = pastaTypes.findIndex(p => p.name === selectedPasta.name);

  const handlePrevious = () => {
    if (isRunning) return;
    const prevIndex = (currentIndex - 1 + pastaTypes.length) % pastaTypes.length;
    onPastaSelect(pastaTypes[prevIndex], prevIndex);
  };

  const handleNext = () => {
    if (isRunning) return;
    const nextIndex = (currentIndex + 1) % pastaTypes.length;
    onPastaSelect(pastaTypes[nextIndex], nextIndex);
  };

  return (
    <div className="relative">
      {/* Recipe Book Container */}
      <div className="relative w-full max-w-md mx-auto">
        {/* Book spine and binding */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-volcanic-stone to-volcanic-stone/80 rounded-l-lg shadow-inner"></div>
        <div className="absolute left-1 top-4 bottom-4 w-0.5 bg-lemon-sun/30"></div>
        <div className="absolute left-1 top-8 bottom-8 w-0.5 bg-terracotta-warm/20"></div>

        {/* Current recipe page */}
        <div className="ml-6 relative">
          <PastaCard
            pasta={selectedPasta}
            isSelected={true}
            onClick={() => {}}
            isFlipping={flippingIndex === currentIndex}
          />

          {/* Page corner fold effect */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/80 to-transparent transform rotate-45 translate-x-2 -translate-y-2 rounded-sm shadow-sm"></div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={handlePrevious}
          disabled={isRunning}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-mediterranean-cream/80 hover:bg-mediterranean-cream border border-olive-grove/30 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" className="text-volcanic-stone">
            <path
              d="M15 18l-6-6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          disabled={isRunning}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-mediterranean-cream/80 hover:bg-mediterranean-cream border border-olive-grove/30 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" className="text-volcanic-stone">
            <path
              d="M9 18l6-6-6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Book title and page indicator */}
      <div className="text-center mt-6">
        <h3 className="text-lg font-bold text-volcanic-stone font-dancing mb-2">
          the pasta collection
        </h3>
        <div className="flex items-center justify-center space-x-2">
          {pastaTypes.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-terracotta-warm shadow-lg'
                  : 'bg-volcanic-stone/30'
              }`}
            />
          ))}
        </div>
        <div className="text-sm text-volcanic-stone/60 mt-2 font-playfair italic">
          page {currentIndex + 1} of {pastaTypes.length}
        </div>
        <div className="text-xs text-volcanic-stone/50 mt-2 font-playfair italic">
          use arrow keys to flip pages
        </div>
      </div>
    </div>
  );
};

export default RecipeBook;
