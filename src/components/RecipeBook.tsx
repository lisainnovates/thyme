
import React from 'react';

interface PastaType {
  name: string;
  time: number;
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
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-volcanic-stone mb-6 font-dancing text-center">
        Recipe Collection
      </h3>
      <div className="grid gap-3 max-h-96 overflow-y-auto">
        {pastaTypes.map((pasta, index) => (
          <div
            key={pasta.name}
            className={`recipe-card p-4 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
              selectedPasta.name === pasta.name
                ? 'border-lemon-sun bg-lemon-grove/20'
                : 'border-gray-200 hover:border-amalfi-blue'
            } ${flippingIndex === index ? 'flipping' : ''} ${
              isRunning ? 'pointer-events-none opacity-60' : ''
            }`}
            onClick={() => !isRunning && onPastaSelect(pasta, index)}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-volcanic-stone capitalize font-dancing text-lg">
                {pasta.name}
              </h4>
              <span className="text-sm text-volcanic-stone/70 font-mono">
                {Math.floor(pasta.time / 60)}:{(pasta.time % 60).toString().padStart(2, '0')}
              </span>
            </div>
            <p className="text-xs text-volcanic-stone/60 uppercase tracking-wide mb-1">
              {pasta.location}
            </p>
            <p className="text-sm text-volcanic-stone/80 font-playfair italic leading-relaxed">
              {pasta.description}
            </p>
            <p className="text-xs text-volcanic-stone/60 mt-2 font-playfair">
              {pasta.story}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeBook;
