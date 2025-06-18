
import React, { useState, useEffect } from 'react';
import CircularTimer from '../components/CircularTimer';
import TimerControls from '../components/TimerControls';
import RecipeBook from '../components/RecipeBook';
import DecorationElements from '../components/DecorationElements';
import CustomTimeInput from '../components/CustomTimeInput';

interface PastaType {
  name: string;
  time: number; // in seconds
  description: string;
  story: string;
  location: string;
}

const pastaTypes: PastaType[] = [
  {
    name: "Spaghetti al Pomodoro",
    time: 8 * 60, // 8 minutes in seconds
    description: "Simple pasta with fresh tomatoes, basil, and olive oil - a staple of Italian kitchens for generations.",
    story: "In every Italian kitchen, this dish marks the rhythm of daily life - simple ingredients transformed by time-worn techniques.",
    location: "Naples"
  },
  {
    name: "Penne Arrabbiata", 
    time: 10 * 60,
    description: "Bold pasta with spicy tomato sauce, garlic, and red pepper flakes that awakens the senses.",
    story: "Born in the busy kitchens of Rome, where cooks needed quick, flavorful meals during long service hours.",
    location: "Rome"
  },
  {
    name: "Fettuccine Alfredo",
    time: 12 * 60,
    description: "Rich, creamy pasta with butter and Parmigiano-Reggiano cheese - comfort in its purest form.",
    story: "Created for quiet family dinners, where the gentle stirring of cream and cheese brings the table together.",
    location: "Rome"
  },
  {
    name: "Linguine alle Vongole",
    time: 15 * 60,
    description: "Delicate pasta with fresh clams, white wine, and parsley - the taste of coastal mornings.",
    story: "Fishermen's wives prepare this at dawn, using the day's catch while the seaside breeze carries salt through open windows.",
    location: "Amalfi Coast"
  },
  {
    name: "Carbonara",
    time: 6 * 60,
    description: "Silky pasta with eggs, pecorino, and guanciale - Roman tradition at its most essential.",
    story: "In the quiet hours before dawn, this dish sustained workers heading to the markets, simple yet deeply nourishing.",
    location: "Rome"
  },
  {
    name: "Aglio e Olio",
    time: 5 * 60,
    description: "Minimalist pasta with garlic, olive oil, and chili - midnight comfort food of Italian souls.",
    story: "Late-night ritual of tired cooks, when only the essential flavors of garlic and good oil can satisfy.",
    location: "Southern Italy"
  }
];

const Index = () => {
  const [selectedPasta, setSelectedPasta] = useState<PastaType>(pastaTypes[0]);
  const [timeRemaining, setTimeRemaining] = useState<number>(selectedPasta.time);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [customTime, setCustomTime] = useState<number>(selectedPasta.time);
  const [flippingIndex, setFlippingIndex] = useState<number | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeRemaining]);

  const handlePastaSelect = (pasta: PastaType, index: number) => {
    if (isRunning) return;
    
    setFlippingIndex(index);
    setTimeout(() => {
      setSelectedPasta(pasta);
      setTimeRemaining(pasta.time);
      setCustomTime(pasta.time);
      setFlippingIndex(null);
    }, 350);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeRemaining(customTime);
  };

  const handleTimerComplete = () => {
    setIsRunning(false);
  };

  const handleCustomTimeChange = (minutes: number) => {
    const newTime = Math.floor(minutes * 60);
    setCustomTime(newTime);
    if (!isRunning) {
      setTimeRemaining(newTime);
    }
  };

  const handleResetToDefault = () => {
    setCustomTime(selectedPasta.time);
    if (!isRunning) {
      setTimeRemaining(selectedPasta.time);
    }
  };

  const hasCustomTime = customTime !== selectedPasta.time;

  return (
    <div className="min-h-screen bg-gradient-to-br from-mediterranean-cream via-sea-mist to-lemon-sun/20 flex flex-col items-center justify-start p-4 font-playfair relative overflow-hidden">
      <DecorationElements />
      
      {/* Header */}
      <div className="text-center mb-8 mt-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-volcanic-stone mb-2 font-dancing">
          Limoncello
        </h1>
        <p className="text-lg text-volcanic-stone/80 italic">
          where time meets tradition
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-12 w-full max-w-6xl relative z-10">
        {/* Recipe Book */}
        <div className="w-full lg:w-auto flex-shrink-0">
          <RecipeBook 
            pastaTypes={pastaTypes}
            selectedPasta={selectedPasta}
            onPastaSelect={handlePastaSelect}
            flippingIndex={flippingIndex}
            isRunning={isRunning}
          />
        </div>

        {/* Timer Section */}
        <div className="flex flex-col items-center space-y-8 lg:ml-8">
          <CircularTimer 
            duration={customTime}
            currentTime={timeRemaining}
            setCurrentTime={setTimeRemaining}
            isRunning={isRunning}
            onComplete={handleTimerComplete}
          />
          
          <TimerControls
            isRunning={isRunning}
            onStart={handleStart}
            onPause={handlePause}
            onReset={handleReset}
          />

          <CustomTimeInput
            onTimeChange={handleCustomTimeChange}
            onResetToDefault={handleResetToDefault}
            defaultTime={selectedPasta.time}
            isRunning={isRunning}
            hasCustomTime={hasCustomTime}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
