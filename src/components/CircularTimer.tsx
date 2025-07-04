import React, { useEffect, useRef } from 'react';

interface CircularTimerProps {
  duration: number;
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Create a kitchen alarm sound using Web Audio API
  const playCompletionSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create multiple beeps like a kitchen timer
      const beepCount = 5;
      for (let i = 0; i < beepCount; i++) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Higher pitched beep sound (like kitchen timers)
        oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + i * 0.3);
        
        // Short, sharp beeps
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + i * 0.3);
        gainNode.gain.setValueAtTime(0.4, audioContext.currentTime + i * 0.3 + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.3 + 0.15);
        
        oscillator.start(audioContext.currentTime + i * 0.3);
        oscillator.stop(audioContext.currentTime + i * 0.3 + 0.15);
      }
    } catch (error) {
      console.log('Audio not available:', error);
    }
  };
  
  useEffect(() => {
    if (isRunning && currentTime > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(currentTime - 1);
      }, 1000);
    } else if (currentTime === 0 && isRunning) {
      playCompletionSound();
      onComplete();
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, currentTime, onComplete, setCurrentTime]);

  const progress = ((duration - currentTime) / duration) * 100;
  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;

  return (
    <div className="relative flex flex-col items-center">
      {/* Timer Circle */}
      <div className="relative w-80 h-80 mb-8">
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 256 256"
        >
          {/* Background circle */}
          <circle
            cx="128"
            cy="128"
            r="120"
            fill="none"
            stroke="rgba(139, 188, 143, 0.2)"
            strokeWidth="8"
            className="drop-shadow-sm"
          />
          
          {/* Progress circle */}
          <circle
            cx="128"
            cy="128"
            r="120"
            fill="none"
            stroke="url(#timerGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-linear drop-shadow-lg"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(230, 126, 34, 0.4))'
            }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F1C40F" />
              <stop offset="50%" stopColor="#E67E22" />
              <stop offset="100%" stopColor="#D35400" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Digital time display */}
          <div className="text-5xl font-bold text-volcanic-stone font-mono mb-2 tracking-wider">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </div>
          
          {/* Hand-drawn lemon accent */}
          <div className="animate-gentle-sway">
            <svg width="40" height="40" viewBox="0 0 48 48" className="text-lemon-sun opacity-80">
              <path
                d="M24 8c-4 0-7 3-8 8-1 6 0 12 2 17 2 5 5 7 6 7s4-2 6-7c2-5 3-11 2-17-1-5-4-8-8-8z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
                style={{
                  filter: 'drop-shadow(0 0 4px rgba(241, 196, 15, 0.3))'
                }}
              />
              <path
                d="M24 12c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"
                fill="#F7DC6F"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>

        {/* Decorative elements around the timer */}
        <div className="absolute -top-4 -left-4 animate-mediterranean-breeze" style={{ animationDelay: '1s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-olive-grove opacity-60">
            <path
              d="M12 2c3 0 6 1 7 4v12c0 3-3 5-7 5s-7-2-7-5V6c1-3 4-4 7-4z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <ellipse cx="12" cy="8" rx="3" ry="2" fill="currentColor" opacity="0.6" />
          </svg>
        </div>

        <div className="absolute -bottom-4 -right-4 animate-gentle-sway" style={{ animationDelay: '2s' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" className="text-amalfi-blue opacity-70">
            <circle 
              cx="12" 
              cy="12" 
              r="8" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              opacity="0.6"
              strokeDasharray="3,2"
            />
            <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.8" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CircularTimer;
