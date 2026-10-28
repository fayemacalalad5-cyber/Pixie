import React, { useState, useEffect } from 'react';
import { soundFx } from '../utils/sound';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
}

interface InteractiveBackgroundProps {
  sparklesEnabled?: boolean;
  reducedMotion?: boolean;
  theme?: 'pastel-sky' | 'rainbow-garden' | 'candy-cloud';
}

export const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({
  sparklesEnabled = true,
  reducedMotion = false,
  theme = 'pastel-sky'
}) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [poppedIds, setPoppedIds] = useState<number[]>([]);

  // Generate gentle floating bubbles for kids to pop
  useEffect(() => {
    const bubbleColors = [
      'rgba(244, 114, 182, 0.35)', // pink
      'rgba(192, 132, 252, 0.35)', // lavender
      'rgba(56, 189, 248, 0.35)',  // sky blue
      'rgba(52, 211, 153, 0.35)',  // mint
      'rgba(251, 191, 36, 0.35)'   // sunshine
    ];

    const initialBubbles: Bubble[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 85 + 5,
      size: Math.floor(Math.random() * 26) + 32, // 32px to 58px touch friendly
      color: bubbleColors[i % bubbleColors.length],
      speed: Math.random() * 3 + 4
    }));
    setBubbles(initialBubbles);
  }, []);

  const handleBubbleClick = (id: number) => {
    soundFx.playPop();
    setPoppedIds((prev) => [...prev, id]);

    // Respawn bubble after a delay at a new position
    setTimeout(() => {
      setBubbles((prev) =>
        prev.map((b) =>
          b.id === id
            ? {
                ...b,
                x: Math.random() * 90 + 5,
                y: 95,
                size: Math.floor(Math.random() * 26) + 32
              }
            : b
        )
      );
      setPoppedIds((prev) => prev.filter((p) => p !== id));
    }, 1200);
  };

  const handleStarClick = () => {
    soundFx.playSparkle();
  };

  const themeGradient = {
    'pastel-sky': 'from-sky-100/70 via-indigo-50/60 to-pink-100/70',
    'rainbow-garden': 'from-emerald-50/70 via-amber-50/60 to-rose-100/70',
    'candy-cloud': 'from-purple-100/70 via-pink-50/70 to-yellow-100/60'
  }[theme];

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none transition-colors duration-700"
    >
      {/* Background Soft Pastel Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${themeGradient}`} />

      {/* Subtle organic cloud shapes */}
      <div className={`absolute -top-12 -left-20 w-96 h-96 bg-white/50 rounded-full blur-2xl ${reducedMotion ? '' : 'animate-float-slow'}`} />
      <div className={`absolute top-1/4 -right-20 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl ${reducedMotion ? '' : 'animate-float-reverse'}`} />
      <div className={`absolute bottom-10 left-1/3 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl ${reducedMotion ? '' : 'animate-float-slow'}`} />

      {/* Floating Rainbow Arch in background */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-25 pointer-events-none blur-[1px]">
        <svg viewBox="0 0 500 250" className="w-full h-full">
          <circle cx="250" cy="250" r="230" fill="none" stroke="#f43f5e" strokeWidth="12" />
          <circle cx="250" cy="250" r="218" fill="none" stroke="#fb923c" strokeWidth="12" />
          <circle cx="250" cy="250" r="206" fill="none" stroke="#facc15" strokeWidth="12" />
          <circle cx="250" cy="250" r="194" fill="none" stroke="#4ade80" strokeWidth="12" />
          <circle cx="250" cy="250" r="182" fill="none" stroke="#38bdf8" strokeWidth="12" />
          <circle cx="250" cy="250" r="170" fill="none" stroke="#c084fc" strokeWidth="12" />
        </svg>
      </div>

      {/* Interactive Pop-able Bubbles for Young Kids */}
      {sparklesEnabled && (
        <div className="pointer-events-auto">
          {bubbles.map((bubble) => {
            const isPopped = poppedIds.includes(bubble.id);
            return (
              <button
                key={bubble.id}
                onClick={() => handleBubbleClick(bubble.id)}
                aria-label="Magic bubble - tap to pop!"
                style={{
                  left: `${bubble.x}%`,
                  top: `${bubble.y}%`,
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                  backgroundColor: bubble.color,
                  animationDuration: `${bubble.speed}s`
                }}
                className={`absolute rounded-full border border-white/60 shadow-sm backdrop-blur-[1px] transition-transform duration-200 cursor-pointer flex items-center justify-center ${
                  isPopped
                    ? 'scale-150 opacity-0 pointer-events-none'
                    : reducedMotion
                    ? 'hover:scale-110 active:scale-90'
                    : 'animate-float-slow hover:scale-125 active:scale-95'
                }`}
              >
                {/* Bubble reflection highlight */}
                <span className="w-2.5 h-2.5 bg-white/80 rounded-full -mt-2 -ml-2" />
                {isPopped && <span className="absolute text-sm">✨</span>}
              </button>
            );
          })}
        </div>
      )}

      {/* Clickable Twinkling Stars scattered */}
      {sparklesEnabled && (
        <div className="pointer-events-auto">
          {[
            { top: '15%', left: '8%', delay: '0s', label: 'Star 1' },
            { top: '22%', right: '12%', delay: '1.2s', label: 'Star 2' },
            { top: '65%', left: '4%', delay: '0.7s', label: 'Star 3' },
            { top: '78%', right: '8%', delay: '1.9s', label: 'Star 4' },
            { top: '45%', left: '92%', delay: '2.5s', label: 'Star 5' }
          ].map((star, i) => (
            <button
              key={i}
              onClick={handleStarClick}
              aria-label="Twinkling star - click to make magic sound"
              style={{
                top: star.top,
                left: star.left,
                right: star.right,
                animationDelay: star.delay
              }}
              className={`absolute text-amber-400 cursor-pointer transition-transform hover:scale-150 active:scale-95 ${
                reducedMotion ? '' : 'animate-pulse-glow'
              }`}
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9" />
              </svg>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
