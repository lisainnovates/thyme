
import React, { useState, useEffect } from 'react';

interface CircularTimerProps {
  duration: number; // in seconds
  isRunning: boolean;
  onComplete: () => void;
  currentTime: number;
  setCurrentTime: (time: number) => void;
}

const CircularTimer: React.FC<CircularTimerProps> = ({
  duration,
  isRunning,
  onComplete,
  currentTime,
  setCurrentTime
}) => {
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && currentTime > 0) {
      interval = setInterval(() => {
        setCurrentTime(currentTime - 1);
      }, 1000);
    } else if (currentTime === 0) {
      onComplete();
    }

    return () => clearInterval(interval);
  }, [isRunning, currentTime, onComplete, setCurrentTime]);

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentTime / duration) * circumference;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Animated lemon leaves */}
      <div className="absolute -top-8 -left-8 animate-sway">
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-lemon-green">
          <path
            d="M12 2c3 0 6 2 6 6 0 3-2 5-4 6-1 1-2 1-2 1s-1 0-2-1c-2-1-4-3-4-6 0-4 3-6 6-6z"
            fill="currentColor"
          />
          <path
            d="M12 8c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z"
            fill="#BFD8B8"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Main timer circle */}
      <div className="relative">
        <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#FFF8E7"
            strokeWidth="8"
            fill="none"
            className="opacity-30"
          />
          
          {/* Animated progress circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="url(#timerGradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-linear"
            strokeLinecap="round"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E25822" />
              <stop offset="50%" stopColor="#F7DC6F" />
              <stop offset="100%" stopColor="#E25822" />
            </linearGradient>
          </defs>
        </svg>

        {/* Volcanic texture accent */}
        <div className="absolute inset-4 rounded-full volcanic-texture opacity-20"></div>

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-volcanic-gray mb-2">
              {formatTime(currentTime)}
            </div>
            <div className="text-sm text-terracotta font-medium">
              {currentTime === 0 ? 'Fatto!' : 'Al dente...'}
            </div>
          </div>
        </div>
      </div>

      {/* Floating basil sprig */}
      <div className="absolute -bottom-6 -right-6 animate-float">
        <svg width="20" height="20" viewBox="0 0 24 24" className="text-lemon-green">
          <path
            d="M12 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z"
            fill="currentColor"
            opacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
};

export default CircularTimer;
