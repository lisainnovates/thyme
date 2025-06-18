
import React, { useState, useCallback, useEffect } from 'react';
import CircularTimer from '../components/CircularTimer';
import PastaCard from '../components/PastaCard';
import TimerControls from '../components/TimerControls';
import DecorationElements from '../components/DecorationElements';
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
    description: 'creamy and enveloping, like a warm roman embrace.',
    story: 'nonna maria\'s secret: never let the eggs scramble, whisper to them gently...',
    location: 'rome, italy'
  },
  {
    name: 'penne',
    time: 660, // 11 minutes
    description: 'spicy like the sicilian character, sweet like the sunset.',
    story: 'from giuseppe\'s kitchen in palermo, where passion meets perfection...',
    location: 'palermo, italy'
  },
  {
    name: 'fettuccine',
    time: 480, // 8 minutes
    description: 'silky like silk, rich like family love.',
    story: 'made famous in a small roman trattoria, where dreams are born...',
    location: 'rome, italy'
  },
  {
    name: 'rigatoni',
    time: 720, // 12 minutes
    description: 'a tribute to etna, with eggplant and aged ricotta.',
    story: 'born in catania\'s shadow of etna, where volcanic soil feeds the soul...',
    location: 'catania, italy'
  },
  {
    name: 'linguine',
    time: 540, // 9 minutes
    description: 'the taste of the amalfi sea, whispers of salty waves.',
    story: 'fishermen\'s wives in amalfi, cooking with the catch of the day...',
    location: 'amalfi, italy'
  },
  {
    name: 'ravioli',
    time: 240, // 4 minutes
    description: 'delicate pasta pillows, filled with sicilian tradition.',
    story: 'sunday mornings in nonna\'s kitchen, where hands speak love...',
    location: 'taormina, italy'
  }
];

const Index = () => {
  const [selectedPasta, setSelectedPasta] = useState<PastaType>(pastaTypes[0]);
  const [currentTime, setCurrentTime] = useState<number>(pastaTypes[0].time);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [flippingIndex, setFlippingIndex] = useState<number | null>(null);
  const [isTimerComplete, setIsTimerComplete] = useState<boolean>(false);

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
      setCurrentTime(pasta.time);
      setIsTimerComplete(false);
      setFlippingIndex(null);
    }, 400);
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
    setCurrentTime(selectedPasta.time);
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
        {/* Header - like opening a beloved cookbook */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Heart className="text-terracotta-warm mr-4 animate-story-shimmer" size={32} />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-lemon-sun via-terracotta-warm to-mediterranean-blue bg-clip-text text-transparent font-serif">
              limoncello
            </h1>
            <ChefHat className="text-olive-grove ml-4 animate-gentle-sway" size={32} />
          </div>
          <p className="text-xl text-volcanic-stone opacity-90 max-w-2xl mx-auto font-serif italic leading-relaxed">
            where every pasta tells a story...
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Timer section - nonna's watchful guidance */}
            <div className="flex flex-col items-center">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-volcanic-stone mb-3 font-serif">
                  {selectedPasta.name}
                </h2>
                <p className="text-sm text-volcanic-stone/70 uppercase tracking-wide font-medium mb-2">
                  {selectedPasta.location}
                </p>
                <p className="text-base text-volcanic-stone opacity-80 max-w-md mx-auto font-serif italic leading-relaxed">
                  {selectedPasta.description}
                </p>
              </div>
              
              <CircularTimer
                duration={selectedPasta.time}
                isRunning={isRunning}
                onComplete={handleTimerComplete}
                currentTime={currentTime}
                setCurrentTime={setCurrentTime}
              />
              
              <TimerControls
                isRunning={isRunning}
                onStart={handleStart}
                onPause={handlePause}
                onReset={handleReset}
              />

              {isTimerComplete && (
                <div className="mt-8 bg-gradient-to-r from-lemon-sun to-terracotta-warm text-white px-8 py-4 rounded-full animate-story-shimmer shadow-2xl">
                  <span className="font-bold font-serif text-lg">perfect! your pasta is ready!</span>
                </div>
              )}
            </div>

            {/* Recipe cards - like flipping through nonna's cookbook */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-volcanic-stone text-center mb-8 font-serif">
                family stories
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {pastaTypes.map((pasta, index) => (
                  <PastaCard
                    key={pasta.name}
                    pasta={pasta}
                    isSelected={selectedPasta.name === pasta.name}
                    onClick={() => handlePastaSelect(pasta, index)}
                    isFlipping={flippingIndex === index}
                  />
                ))}
              </div>
              
              <div className="text-center text-sm text-volcanic-stone/60 mt-6 font-serif italic">
                use arrow keys to browse recipes
              </div>
            </div>
          </div>
        </div>

        {/* Footer - heartfelt inspiration */}
        <div className="text-center mt-20 opacity-80">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-volcanic-stone/30 to-transparent w-32"></div>
            <Heart className="text-terracotta-warm mx-4 animate-story-shimmer" size={20} />
            <div className="h-px bg-gradient-to-r from-transparent via-volcanic-stone/30 to-transparent w-32"></div>
          </div>
          <p className="text-lg text-volcanic-stone font-serif italic leading-relaxed">
            inspired by moments shared from mount etna to amalfi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
