
import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  onStart,
  onPause,
  onReset
}) => {
  return (
    <div className="flex justify-center items-center space-x-8 mt-12">
      {/* Start/Pause Button - like nonna's gentle command */}
      <button
        onClick={isRunning ? onPause : onStart}
        className="bg-gradient-to-br from-terracotta-warm to-etna-terracotta text-mediterranean-cream 
                   px-10 py-4 rounded-full shadow-xl transition-all duration-300 
                   hover:scale-110 hover:shadow-2xl active:scale-95
                   flex items-center space-x-3 font-serif font-medium text-lg
                   border-2 border-white/20 backdrop-blur-sm"
      >
        {isRunning ? (
          <>
            <Pause size={24} />
            <span>Pausa</span>
          </>
        ) : (
          <>
            <Play size={24} />
            <span>Inizia</span>
          </>
        )}
      </button>

      {/* Reset Button - fresh start like morning in Sicily */}
      <button
        onClick={onReset}
        className="bg-gradient-to-br from-olive-grove to-sicilian-olive text-mediterranean-cream 
                   px-8 py-4 rounded-full shadow-xl transition-all duration-300 
                   hover:scale-110 hover:shadow-2xl active:scale-95
                   flex items-center space-x-3 font-serif font-medium
                   border-2 border-white/20 backdrop-blur-sm"
      >
        <RotateCcw size={20} />
        <span>Ricomincia</span>
      </button>
    </div>
  );
};

export default TimerControls;
