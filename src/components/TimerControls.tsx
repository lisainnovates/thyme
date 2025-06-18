
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
    <div className="flex justify-center items-center space-x-6 mt-8">
      {/* Start/Pause Button */}
      <button
        onClick={isRunning ? onPause : onStart}
        className="bg-gradient-to-br from-lava-orange to-terracotta text-creamy-white 
                   px-8 py-3 rounded-full shadow-lg transition-all duration-300 
                   hover:scale-105 hover:shadow-xl active:scale-95
                   flex items-center space-x-2 font-medium"
      >
        {isRunning ? (
          <>
            <Pause size={20} />
            <span>Pausa</span>
          </>
        ) : (
          <>
            <Play size={20} />
            <span>Inizia</span>
          </>
        )}
      </button>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="bg-gradient-to-br from-lemon-green to-lemon-yellow text-volcanic-gray 
                   px-6 py-3 rounded-full shadow-lg transition-all duration-300 
                   hover:scale-105 hover:shadow-xl active:scale-95
                   flex items-center space-x-2 font-medium"
      >
        <RotateCcw size={18} />
        <span>Reset</span>
      </button>
    </div>
  );
};

export default TimerControls;
