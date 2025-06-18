
import React, { useState } from 'react';
import { Clock, RotateCcw } from 'lucide-react';

interface CustomTimeInputProps {
  onTimeChange: (minutes: number) => void;
  onResetToDefault: () => void;
  defaultTime: number;
  isRunning: boolean;
  hasCustomTime: boolean;
}

const CustomTimeInput: React.FC<CustomTimeInputProps> = ({
  onTimeChange,
  onResetToDefault,
  defaultTime,
  isRunning,
  hasCustomTime
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const minutes = parseInt(inputValue);
    if (minutes > 0 && minutes <= 60) {
      onTimeChange(minutes);
      setInputValue('');
      setShowInput(false);
    }
  };

  const defaultMinutes = Math.floor(defaultTime / 60);

  return (
    <div className="flex flex-col items-center gap-3 mt-4">
      {!showInput ? (
        <div className="flex gap-2">
          <button
            onClick={() => setShowInput(true)}
            disabled={isRunning}
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-volcanic-stone px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            <Clock size={14} />
            Custom Time
          </button>
          
          {hasCustomTime && (
            <button
              onClick={onResetToDefault}
              disabled={isRunning}
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-volcanic-stone px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              <RotateCcw size={14} />
              Default ({defaultMinutes}m)
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
          <input
            type="number"
            min="1"
            max="60"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Minutes"
            className="w-20 px-3 py-2 rounded-full text-center text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lemon-sun"
            autoFocus
          />
          <button
            type="submit"
            className="bg-lemon-sun text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-terracotta-warm transition-colors shadow-md"
          >
            Set
          </button>
          <button
            type="button"
            onClick={() => {
              setShowInput(false);
              setInputValue('');
            }}
            className="bg-gray-300 text-volcanic-stone px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-400 transition-colors shadow-md"
          >
            Cancel
          </button>
        </form>
      )}
      
      {hasCustomTime && (
        <p className="text-xs text-volcanic-stone/60 font-playfair italic">
          Using custom timer
        </p>
      )}
    </div>
  );
};

export default CustomTimeInput;
