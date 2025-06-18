
import React, { useState, useCallback, useEffect } from 'react';
import CircularTimer from '../components/CircularTimer';
import RecipeBook from '../components/RecipeBook';
import TimerControls from '../components/TimerControls';
import DecorationElements from '../components/DecorationElements';
import CustomTimeInput from '../components/CustomTimeInput';
import { ChefHat, Heart } from 'lucide-react';

interface PastaType {
  name: string;
  time: number; // in seconds
  description: string;
  story: string;
  location: string;
}

const pastaTypes: PastaType[] = [
  {
    name: 'spaghetti',
    time: 600, // 10 minutes
    description: 'creamy and enveloping, like a warm embrace.',
    story: 'a secret recipe where eggs are whispered to gently, never rushed...',
    location: 'naples'
  },
  {
    name: 'penne',
    time: 660, // 11 minutes
    description: 'spicy like the sicilian character, sweet like the sunset.',
    story: 'crafted where the sea meets the stove',
    location: 'palermo'
  },
  {
    name: 'fettuccine',
    time: 480, // 8 minutes
    description: 'silky like silk, rich like family love.',
    story: 'made famous in a small roman trattoria, where dreams are born...',
    location: 'rome'
  },
  {
    name: 'rigatoni',
    time: 720, // 12 minutes
    description: 'a tribute to etna, with eggplant and aged ricotta.',
    story: 'born in catania\'s shadow of etna, where volcanic soil feeds the soul...',
    location: 'catania'
  },
  {
    name: 'linguine',
    time: 540, // 9 minutes
    description: 'the taste of the amalfi sea, whispers of salty waves.',
    story: 'inspired by fishermen in amalfi, cooking with the catch of the day...',
    location: 'amalfi'
  },
  {
    name: 'ravioli',
    time: 240, // 4 minutes
    description: 'delicate pasta pillows, filled with sicilian tradition.',
    story: 'sunday mornings in cozy kitchens, where hands speak love...',
    location: 'bergamo'
  },
  {
    name: 'fusilli',
    time: 600, // 10 minutes
    description: 'twisted like the mountain paths of campania.',
    story: 'shaped by wooden tools in ancient hill towns...',
    location: 'gragnano'
  },
  {
    name: 'tagliatelle',
    time: 420, // 7 minutes
    description: 'golden ribbons from emilia\'s fertile plains.',
    story: 'cut by hand in bologna\'s morning light...',
    location: 'bologna'
  },
  {
    name: 'farfalle',
    time: 660, // 11 minutes
    description: 'butterfly wings dancing in summer herbs.',
    story: 'pinched with care in lombardy\'s quiet valleys...',
    location: 'lombardy'
  },
  {
    name: 'orecchiette',
    time: 780, // 13 minutes
    description: 'little ears that catch the essence of puglia.',
    story: 'shaped on marble tables in bari\'s old quarter...',
    location: 'bari'
  },
  {
    name: 'tortellini',
    time: 180, // 3 minutes
    description: 'tiny parcels of modena\'s gentle tradition.',
    story: 'folded like secrets in emilian kitchens...',
    location: 'modena'
  },
  {
    name: 'gnocchi',
    time: 120, // 2 minutes
    description: 'pillowy clouds from alpine potato fields.',
    story: 'rolled by generations in mountain villages...',
    location: 'trentino'
  },
  {
    name: 'paccheri',
    time: 840, // 14 minutes
    description: 'wide tubes that embrace neapolitan sun.',
    story: 'born from the need to hold precious sauces...',
    location: 'naples'
  },
  {
    name: 'cacio e pepe',
    time: 360, // 6 minutes (tonnarelli)
    description: 'roman simplicity in three ingredients.',
    story: 'perfected in trattorie near the pantheon...',
    location: 'rome'
  }
];

const Index = () => {
  const [selectedPasta, setSelectedPasta] = useState<PastaType>(pastaTypes[0]);
  const [currentTime, setCurrentTime] = useState<number>(pastaTypes[0].time);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [flippingIndex, setFlippingIndex] = useState<number | null>(null);
  const [isTimerComplete, setIsTimerComplete] = useState<boolean>(false);
  const [customTime, setCustomTime] = useState<number | null>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        const currentIndex = pastaTypes.findIndex(p => p.name === selectedPasta.name);
        const nextIndex = event.key === 'ArrowRight' 
          ? (currentIndex + 1) % pastaTypes.length
          : (currentIndex - 1 + pastaTypes.length) % pastaTypes.length;
        
        handlePastaSelect(pastaTypes[nextIndex], nextIndex);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedPasta]);

  const handlePastaSelect = (pasta: PastaType, index: number) => {
    if (isRunning) return; // Don't allow selection while timer is running
    
    setFlippingIndex(index);
    setTimeout(() => {
      setSelectedPasta(pasta);
      const timeToUse = customTime || pasta.time;
      setCurrentTime(timeToUse);
      setIsTimerComplete(false);
      setFlippingIndex(null);
    }, 400);
  };

  const handleCustomTimeChange = (minutes: number) => {
    if (isRunning) return;
    const timeInSeconds = minutes * 60;
    setCustomTime(timeInSeconds);
    setCurrentTime(timeInSeconds);
    setIsTimerComplete(false);
  };

  const handleResetToDefault = () => {
    if (isRunning) return;
    setCustomTime(null);
    setCurrentTime(selectedPasta.time);
    setIsTimerComplete(false);
  };

  const getDisplayTime = () => {
    return customTime || selectedPasta.time;
  };

  const handleStart = () => {
    setIsRunning(true);
    setIsTimerComplete(false);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    const timeToUse = customTime || selectedPasta.time;
    setCurrentTime(timeToUse);
    setIsTimerComplete(false);
  };

  const handleTimerComplete = useCallback(() => {
    setIsRunning(false);
    setIsTimerComplete(true);
    console.log('perfect! your pasta is ready!');
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden mediterranean-texture">
      <DecorationElements />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Heart className="text-terracotta-warm mr-4 animate-story-shimmer" size={32} />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-lemon-sun via-terracotta-warm to-mediterranean-blue bg-clip-text text-transparent font-dancing">
              thyme
            </h1>
            <ChefHat className="text-olive-grove ml-4 animate-gentle-sway" size={32} />
          </div>
          <p className="text-xl text-volcanic-stone opacity-90 max-w-2xl mx-auto font-dancing leading-relaxed">
            where every pasta tells a story...
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Timer section */}
            <div className="flex flex-col items-center">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-volcanic-stone mb-3 font-dancing">
                  {selectedPasta.name}
                </h2>
                <p className="text-sm text-volcanic-stone/70 uppercase tracking-wide font-medium mb-2">
                  {selectedPasta.location}
                </p>
                <p className="text-base text-volcanic-stone opacity-80 max-w-md mx-auto font-playfair italic leading-relaxed">
                  {selectedPasta.description}
                </p>
              </div>
              
              <CircularTimer
                duration={getDisplayTime()}
                isRunning={isRunning}
                onComplete={handleTimerComplete}
                currentTime={currentTime}
                setCurrentTime={setCurrentTime}
              />

              <CustomTimeInput
                onTimeChange={handleCustomTimeChange}
                onResetToDefault={handleResetToDefault}
                defaultTime={selectedPasta.time}
                isRunning={isRunning}
                hasCustomTime={customTime !== null}
              />
              
              <TimerControls
                isRunning={isRunning}
                onStart={handleStart}
                onPause={handlePause}
                onReset={handleReset}
              />

              {isTimerComplete && (
                <div className="mt-8 bg-gradient-to-r from-lemon-sun to-terracotta-warm text-white px-8 py-4 rounded-full animate-story-shimmer shadow-2xl">
                  <span className="font-bold font-dancing text-lg">perfect! your pasta is ready!</span>
                </div>
              )}
            </div>

            {/* Recipe Book */}
            <div className="space-y-6">
              <RecipeBook
                pastaTypes={pastaTypes}
                selectedPasta={selectedPasta}
                onPastaSelect={handlePastaSelect}
                flippingIndex={flippingIndex}
                isRunning={isRunning}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 opacity-80">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-volcanic-stone/30 to-transparent w-32"></div>
            <Heart className="text-terracotta-warm mx-4 animate-story-shimmer" size={20} />
            <div className="h-px bg-gradient-to-r from-transparent via-volcanic-stone/30 to-transparent w-32"></div>
          </div>
          <p className="text-lg text-volcanic-stone font-dancing leading-relaxed">
            inspired by moments shared from mount etna to the coast of sorrento
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
