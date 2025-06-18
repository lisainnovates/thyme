
import React, { useState, useCallback, useEffect } from 'react';
import CircularTimer from '../components/CircularTimer';
import PastaCard from '../components/PastaCard';
import TimerControls from '../components/TimerControls';
import DecorationElements from '../components/DecorationElements';
import { ChefHat } from 'lucide-react';

interface PastaType {
  name: string;
  time: number; // in seconds
  description: string;
  icon: string;
}

const pastaTypes: PastaType[] = [
  {
    name: 'Spaghetti',
    time: 600, // 10 minutes
    description: 'Classico spaghetti al dente per la perfetta carbonara o aglio e olio.',
    icon: '🍝'
  },
  {
    name: 'Penne',
    time: 660, // 11 minutes
    description: 'Penne rigate perfette per trattenere sughi cremosi e pesti.',
    icon: '🍋'
  },
  {
    name: 'Fettuccine',
    time: 480, // 8 minutes
    description: 'Pasta fresca all\'uovo, ideale per ragù ricchi e burro e parmigiano.',
    icon: '🌿'
  },
  {
    name: 'Rigatoni',
    time: 720, // 12 minutes
    description: 'Pasta robusta per sughi di carne e verdure, perfetta per il forno.',
    icon: '🍅'
  },
  {
    name: 'Linguine',
    time: 540, // 9 minutes
    description: 'Sottili e eleganti, perfette con frutti di mare e pesto.',
    icon: '🐟'
  },
  {
    name: 'Ravioli',
    time: 240, // 4 minutes
    description: 'Pasta ripiena delicata, cotta al punto giusto per non rompere.',
    icon: '🥟'
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
    }, 300);
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
    // Play notification sound or show toast here
    console.log('Timer complete! Your pasta is ready!');
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <DecorationElements />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ChefHat className="text-terracotta mr-3" size={36} />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-lava-orange to-terracotta bg-clip-text text-transparent">
              Limoncello
            </h1>
          </div>
          <p className="text-lg text-volcanic-gray opacity-80 max-w-md mx-auto">
            Il timer perfetto per la pasta, ispirato dalla costiera amalfitana
          </p>
        </div>

        {/* Main timer section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Timer */}
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-volcanic-gray text-center mb-2">
                  {selectedPasta.name}
                </h2>
                <p className="text-sm text-volcanic-gray opacity-70 text-center max-w-xs">
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
                <div className="mt-6 bg-gradient-to-r from-lava-orange to-terracotta text-creamy-white px-6 py-3 rounded-full animate-pulse">
                  <span className="font-bold">🍝 La pasta è pronta! Buon appetito! 🍝</span>
                </div>
              )}
            </div>

            {/* Pasta selection cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-volcanic-gray text-center mb-6">
                Scegli il tuo tipo di pasta
              </h3>
              <div className="grid grid-cols-2 gap-4">
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
              
              <div className="text-center text-sm text-volcanic-gray opacity-60 mt-4">
                Usa le frecce ← → per navigare tra i tipi di pasta
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Amalfi inspiration */}
        <div className="text-center mt-16 opacity-60">
          <p className="text-sm text-volcanic-gray">
            Ispirato dalle soleggiate terrazze di limoni della costiera amalfitana 🍋
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
