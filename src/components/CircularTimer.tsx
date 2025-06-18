
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

  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentTime / duration) * circumference;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Floating lemon leaves - nonna's garden touch */}
      <div className="absolute -top-12 -left-12 animate-mediterranean-breeze">
        <svg width="28" height="28" viewBox="0 0 24 24" className="text-olive-grove">
          <path
            d="M12 2c3 0 6 2 6 6 0 3-2 5-4 6-1 1-2 1-2 1s-1 0-2-1c-2-1-4-3-4-6 0-4 3-6 6-6z"
            fill="currentColor"
            opacity="0.7"
          />
          <path
            d="M12 8c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z"
            fill="#8FBC8F"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Main timer circle - like nonna's watchful eye */}
      <div className="relative mediterranean-texture rounded-full p-4">
        <svg className="w-52 h-52 transform -rotate-90" viewBox="0 0 200 200">
          {/* Outer decorative ring */}
          <circle
            cx="100"
            cy="100"
            r="95"
            stroke="url(#outerGradient)"
            strokeWidth="2"
            fill="none"
            className="opacity-20"
          />
          
          {/* Background circle - like worn cookbook pages */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#F8F4E6"
            strokeWidth="12"
            fill="none"
            className="opacity-40"
          />
          
          {/* Animated progress circle - warm Mediterranean sun */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="url(#timerGradient)"
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F1C40F" />
              <stop offset="30%" stopColor="#E67E22" />
              <stop offset="70%" stopColor="#3498DB" />
              <stop offset="100%" stopColor="#8FBC8F" />
            </linearGradient>
            <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5DADE2" />
              <stop offset="100%" stopColor="#F7DC6F" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center content - like reading a beloved recipe */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-full p-6 shadow-lg">
            <div className="text-4xl font-bold text-volcanic-stone mb-2 font-serif">
              {formatTime(currentTime)}
            </div>
            <div className="text-sm text-terracotta-warm font-medium font-serif italic">
              {currentTime === 0 ? 'Perfetto!' : 'Al dente...'}
            </div>
          </div>
        </div>

        {/* Nonna's wisdom - gentle guidance */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-lemon-sun/20 backdrop-blur-sm rounded-full px-4 py-1">
            <span className="text-xs text-volcanic-stone font-serif italic">
              Come nonna insegnava
            </span>
          </div>
        </div>
      </div>

      {/* Floating basil sprig - Mediterranean breeze */}
      <div className="absolute -bottom-8 -right-8 animate-gentle-sway">
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-olive-grove">
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
