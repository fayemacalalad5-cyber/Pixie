import React, { useState } from 'react';
import { soundFx } from '../utils/sound';
import { Sparkles, RotateCcw, CheckCircle2, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FeaturedMiniGameProps {
  onEarnStar: () => void;
}

export const FeaturedMiniGame: React.FC<FeaturedMiniGameProps> = ({ onEarnStar }) => {
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const pairs = [
    { letter: 'A', name: 'Apple', emoji: '🍎' },
    { letter: 'B', name: 'Butterfly', emoji: '🦋' },
    { letter: 'C', name: 'Cute Cat', emoji: '🐱' },
    { letter: 'S', name: 'Bright Sun', emoji: '☀️' }
  ];

  const handleSelectLetter = (letter: string) => {
    soundFx.playPop();
    setSelectedLetter(letter);
    soundFx.speak(`Letter ${letter}`);
  };

  const handleSelectPicture = (name: string, targetLetter: string) => {
    if (!selectedLetter) {
      soundFx.playClick();
      soundFx.speak(`Select a letter first, then choose the matching picture!`);
      return;
    }

    if (selectedLetter === targetLetter) {
      soundFx.playCorrect();
      soundFx.speak(`Yes! ${targetLetter} is for ${name}!`);
      const next = { ...matches, [targetLetter]: name };
      setMatches(next);
      setSelectedLetter(null);

      if (Object.keys(next).length === pairs.length) {
        setIsCompleted(true);
        soundFx.playFanfare();
        onEarnStar();
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
          });
        } catch {
          // ignore
        }
      }
    } else {
      soundFx.playGentleRetry();
      soundFx.speak(`Almost! What picture begins with the sound of ${selectedLetter}?`);
    }
  };

  const handleReset = () => {
    soundFx.playClick();
    setMatches({});
    setSelectedLetter(null);
    setIsCompleted(false);
  };

  return (
    <section className="my-12 sm:my-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-amber-50 via-purple-50 to-pink-50 rounded-3xl border-4 border-amber-200/80 p-6 sm:p-10 shadow-lg relative overflow-hidden">
        {/* Background decorative star */}
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-amber-200/30 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 border-b border-amber-200/60 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-amber-950 font-fun font-bold text-xs rounded-full mb-2 shadow-xs">
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Instant Interactive Sandbox</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-fun font-bold text-slate-900">
              Quick Mini-Game: Alphabet Picture Match!
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Tap a big letter first, then tap the picture that starts with that sound!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-white border border-amber-300 rounded-2xl text-xs font-fun font-bold text-slate-700 hover:bg-amber-50 transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Challenge</span>
            </button>
          </div>
        </div>

        {/* Playable Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {/* Letters Column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-purple-800 uppercase tracking-wider text-center">
              1. Tap a Letter
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {pairs.map((p) => {
                const isMatched = !!matches[p.letter];
                const isSelected = selectedLetter === p.letter;
                return (
                  <button
                    key={p.letter}
                    disabled={isMatched}
                    onClick={() => handleSelectLetter(p.letter)}
                    className={`h-20 rounded-2xl font-fun font-bold text-3xl border-2 transition-all flex flex-col items-center justify-center cursor-pointer shadow-sm ${
                      isMatched
                        ? 'bg-emerald-100 text-emerald-700 border-emerald-300 opacity-80 cursor-default'
                        : isSelected
                        ? 'bg-purple-600 text-white border-purple-700 scale-105 shadow-md'
                        : 'bg-white hover:bg-purple-50 text-slate-800 border-purple-200 hover:scale-102'
                    }`}
                  >
                    <span>{p.letter}</span>
                    {isMatched && <span className="text-[10px] text-emerald-700">Matched ✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pictures Column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-purple-800 uppercase tracking-wider text-center">
              2. Tap the Matching Picture
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {pairs.map((p) => {
                const isMatched = !!matches[p.letter];
                return (
                  <button
                    key={p.name}
                    disabled={isMatched}
                    onClick={() => handleSelectPicture(p.name, p.letter)}
                    className={`h-20 rounded-2xl font-fun border-2 transition-all flex flex-col items-center justify-center cursor-pointer shadow-sm ${
                      isMatched
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300 opacity-80 cursor-default'
                        : 'bg-white hover:bg-amber-50 border-amber-200 text-slate-800 hover:scale-102'
                    }`}
                  >
                    <span className="text-3xl">{p.emoji}</span>
                    <span className="text-[11px] font-semibold mt-1">{p.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Celebration State */}
        {isCompleted && (
          <div className="mt-8 p-4 bg-emerald-100 border-2 border-emerald-400 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-bounce">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎉</span>
              <div>
                <p className="font-fun font-bold text-emerald-950 text-sm sm:text-base">
                  Awesome Job! You matched all 4 letters!
                </p>
                <p className="text-xs text-emerald-800">
                  +1 Bonus Star added to your total treasure!
                </p>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-fun font-bold text-xs rounded-xl shadow-xs cursor-pointer"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
