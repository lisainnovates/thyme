
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
    <div className="flex gap-4 mt-8">
      <button
        onClick={isRunning ? onPause : onStart}
        className="flex items-center gap-2 bg-gradient-to-r from-lemon-sun to-terracotta-warm text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
      >
        {isRunning ? <Pause size={20} /> : <Play size={20} />}
        {isRunning ? 'Pause' : 'Start'}
      </button>
      
      <button
        onClick={onReset}
        className="flex items-center gap-2 bg-gradient-to-r from-volcanic-stone to-mediterranean-blue text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
      >
        <RotateCcw size={20} />
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
