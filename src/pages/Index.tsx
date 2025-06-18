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
  icon: string;
}

const pastaTypes: PastaType[] = [
  {
    name: 'Spaghetti alla Carbonara',
    time: 600, // 10 minutes
    description: 'Cremosa e avvolgente, come un abbraccio romano.',
    story: 'Nonna Maria\'s secret: never let the eggs scramble, whisper to them gently...',
    location: 'Roma, Lazio',
    icon: '🍝'
  },
  {
    name: 'Penne all\'Arrabbiata',
    time: 660, // 11 minutes
    description: 'Piccante come il carattere siciliano, dolce come il tramonto.',
    story: 'From Giuseppe\'s kitchen in Palermo, where passion meets perfection...',
    location: 'Palermo, Sicilia',
    icon: '🌶️'
  },
  {
    name: 'Fettuccine Alfredo',
    time: 480, // 8 minutes
    description: 'Setosa come la seta, ricca come l\'amore di famiglia.',
    story: 'Made famous in a small Roman trattoria, where dreams are born...',
    location: 'Roma, Lazio',
    icon: '🧈'
  },
  {
    name: 'Rigatoni alla Norma',
    time: 720, // 12 minutes
    description: 'Un tributo all\'Etna, con melanzane e ricotta salata.',
    story: 'Born in Catania\'s shadow of Etna, where volcanic soil feeds the soul...',
    location: 'Catania, Sicilia',
    icon: '🍆'
  },
  {
    name: 'Linguine alle Vongole',
    time: 540, // 9 minutes
    description: 'Il sapore del mare della costiera, sussurri di onde salate.',
    story: 'Fishermen\'s wives in Amalfi, cooking with the catch of the day...',
    location: 'Amalfi, Campania',
    icon: '🐚'
  },
  {
    name: 'Ravioli di Ricotta',
    time: 240, // 4 minutes
    description: 'Delicati cuscini di pasta, ripieni di tradizione siciliana.',
    story: 'Sunday mornings in nonna\'s kitchen, where hands speak love...',
    location: 'Taormina, Sicilia',
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
    console.log('Perfetto! Your pasta is ready!');
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
              Limoncello
            </h1>
            <ChefHat className="text-olive-grove ml-4 animate-gentle-sway" size={32} />
          </div>
          <p className="text-xl text-volcanic-stone opacity-90 max-w-2xl mx-auto font-serif italic leading-relaxed">
            Dove ogni pasta racconta una storia... <br />
            <span className="text-lg text-terracotta-warm">Where every pasta tells a story</span>
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
                  <span className="font-bold font-serif text-lg">🍝 Perfetto! La pasta è pronta! 🍝</span>
                </div>
              )}
            </div>

            {/* Recipe cards - like flipping through nonna's cookbook */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-volcanic-stone text-center mb-8 font-serif">
                Storie di Famiglia
                <br />
                <span className="text-lg text-terracotta-warm font-normal italic">Family Stories</span>
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
                Usa le frecce ← → per sfogliare le ricette <br />
                <span className="text-xs">Use arrow keys to browse recipes</span>
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
            Inspired by moments shared from Mount Etna to Amalfi
          </p>
          <p className="text-sm text-volcanic-stone/70 mt-2 font-serif">
            Ispirato dai momenti condivisi dall'Etna alla Costiera Amalfitana
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
