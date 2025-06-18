
import React, { useState } from 'react';
import { Clock, RotateCcw } from 'lucide-react';
import { Input } from './ui/input';

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
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const minutes = parseFloat(value);
    if (!isNaN(minutes) && minutes > 0 && minutes <= 60) {
      onTimeChange(minutes);
    }
  };

  const handleReset = () => {
    setInputValue('');
    onResetToDefault();
  };

  const defaultMinutes = Math.floor(defaultTime / 60);
  const defaultSeconds = defaultTime % 60;

  return (
    <div className="flex items-center justify-center space-x-4 mt-6 mb-6">
      <div className="flex items-center space-x-2 bg-mediterranean-cream/60 rounded-full px-4 py-2 border border-olive-grove/20">
        <Clock className="text-volcanic-stone/60" size={16} />
        <Input
          type="number"
          placeholder={`${defaultMinutes} min`}
          value={inputValue}
          onChange={handleInputChange}
          disabled={isRunning}
          min="0.5"
          max="60"
          step="0.5"
          className="w-20 h-8 text-center border-none bg-transparent focus:ring-0 focus:outline-none text-volcanic-stone font-medium"
        />
        <span className="text-xs text-volcanic-stone/60 font-playfair">min</span>
      </div>

      {hasCustomTime && (
        <button
          onClick={handleReset}
          disabled={isRunning}
          className="bg-olive-grove/20 hover:bg-olive-grove/30 text-volcanic-stone p-2 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Reset to default time"
        >
          <RotateCcw size={14} />
        </button>
      )}
    </div>
  );
};

export default CustomTimeInput;
