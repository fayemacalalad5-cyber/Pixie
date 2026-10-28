import React, { useState } from 'react';
import { soundFx } from '../utils/sound';

interface PixieMascotProps {
  speechText?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  mood?: 'happy' | 'thinking' | 'celebrating' | 'waving';
  equippedAccessoryId?: string | null;
  interactive?: boolean;
  onMascotClick?: () => void;
  className?: string;
}

export const PixieMascot: React.FC<PixieMascotProps> = ({
  speechText,
  size = 'md',
  mood = 'happy',
  equippedAccessoryId,
  interactive = true,
  onMascotClick,
  className = ''
}) => {
  const [isJumping, setIsJumping] = useState(false);
  const [sparkleActive, setSparkleActive] = useState(false);
  const [internalMessage, setInternalMessage] = useState<string | null>(null);

  const sizeClasses = {
    sm: 'w-20 h-28',
    md: 'w-32 h-44 sm:w-36 sm:h-48',
    lg: 'w-44 h-60 sm:w-52 sm:h-72',
    xl: 'w-60 h-80 sm:w-72 sm:h-96'
  };

  const handleMascotClick = () => {
    if (!interactive) return;
    soundFx.playSparkle();
    setIsJumping(true);
    setSparkleActive(true);

    const cheeringPhrases = [
      "YAY! You are doing wonderful!",
      "I love learning with you!",
      "Let's explore another magical island!",
      "Sparkles for your bright thinking!",
      "You're a super star learner today!"
    ];
    const randomPick = cheeringPhrases[Math.floor(Math.random() * cheeringPhrases.length)];
    setInternalMessage(randomPick);
    soundFx.speak(randomPick);

    setTimeout(() => setIsJumping(false), 700);
    setTimeout(() => setSparkleActive(false), 1500);

    if (onMascotClick) {
      onMascotClick();
    }
  };

  const currentSpeech = internalMessage || speechText;

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Dynamic Speech Bubble */}
      {currentSpeech && (
        <div className="mb-3 max-w-xs md:max-w-sm px-4 py-2.5 bg-white/95 backdrop-blur-md border-2 border-amber-300 rounded-2xl shadow-lg shadow-amber-200/40 text-slate-800 text-xs sm:text-sm md:text-base font-fun text-center relative animate-float-slow z-20">
          <p className="leading-snug">{currentSpeech}</p>
          {/* Bubble tail */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-amber-300 rotate-45 transform" />
        </div>
      )}

      {/* Mascot Graphic Container */}
      <div
        onClick={handleMascotClick}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        aria-label="Teacher Pixie, your friendly learning guide. Click to interact!"
        onKeyDown={(e) => {
          if (interactive && (e.key === 'Enter' || e.key === ' ')) {
            handleMascotClick();
          }
        }}
        className={`relative cursor-pointer transition-all duration-300 flex items-center justify-center ${
          isJumping ? '-translate-y-4 scale-105' : 'hover:scale-103 active:scale-95'
        } ${sizeClasses[size]}`}
      >
        {/* Subtle magical glow aura behind the character */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-200/40 via-amber-200/30 to-pink-200/40 rounded-full blur-xl -z-10 transform scale-90 pointer-events-none" />

        {/* The Woman Teacher Character (Background Removed) */}
        <img
          src="/assets/pixie_teacher_transparent.png"
          alt="Teacher Pixie, your friendly educational guide"
          className="w-full h-full object-contain filter drop-shadow-lg transition-transform duration-300"
          draggable={false}
        />

        {/* ============ EQUIPPED ACCESSORIES OVERLAY ============ */}
        {/* 1. Star Wizard Hat */}
        {equippedAccessoryId === 'hat-wizard' && (
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 sm:w-20 pointer-events-none z-10 animate-bounce">
            <svg viewBox="0 0 80 50" className="w-full h-full drop-shadow-md">
              <polygon points="40,0 2,42 78,42" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
              <ellipse cx="40" cy="42" rx="42" ry="7" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
              <polygon points="40,15 42,20 47,20 43,23 45,28 40,25 35,28 37,23 33,20 38,20" fill="#facc15" />
            </svg>
          </div>
        )}

        {/* 2. Rainbow Specs */}
        {equippedAccessoryId === 'glasses-rainbow' && (
          <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-16 sm:w-20 pointer-events-none z-10">
            <svg viewBox="0 0 80 30" className="w-full h-full drop-shadow-sm">
              <rect x="5" y="4" width="30" height="22" rx="7" fill="none" stroke="#ec4899" strokeWidth="3.5" />
              <rect x="45" y="4" width="30" height="22" rx="7" fill="none" stroke="#06b6d4" strokeWidth="3.5" />
              <line x1="35" y1="14" x2="45" y2="14" stroke="#f59e0b" strokeWidth="3.5" />
            </svg>
          </div>
        )}

        {/* 3. Golden Sun Crown */}
        {equippedAccessoryId === 'crown-golden' && (
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 sm:w-16 pointer-events-none z-10 animate-pulse">
            <svg viewBox="0 0 64 26" className="w-full h-full drop-shadow-md">
              <polygon points="0,20 8,0 20,10 32,0 44,10 56,0 64,20" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
              <rect x="0" y="18" width="64" height="6" rx="2" fill="#d97706" />
              <circle cx="8" cy="3" r="2.5" fill="#ef4444" />
              <circle cx="32" cy="3" r="3" fill="#3b82f6" />
              <circle cx="56" cy="3" r="2.5" fill="#10b981" />
            </svg>
          </div>
        )}

        {/* 4. Magic Star Wand */}
        {equippedAccessoryId === 'wand-star' && (
          <div className="absolute top-[40%] -right-4 sm:-right-6 w-10 sm:w-12 pointer-events-none z-10 rotate-12 animate-float-slow">
            <svg viewBox="0 0 40 70" className="w-full h-full drop-shadow-md">
              <line x1="20" y1="70" x2="20" y2="25" stroke="#fde047" strokeWidth="4" strokeLinecap="round" />
              <polygon
                points="20,5 24,18 37,18 27,26 31,39 20,31 9,39 13,26 3,18 16,18"
                fill="#facc15"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        )}

        {/* Sparkle Burst Animation on click */}
        {sparkleActive && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-30">
            <span className="absolute -top-3 left-2 text-2xl animate-bounce">✨</span>
            <span className="absolute -top-2 right-2 text-xl animate-pulse">⭐</span>
            <span className="absolute bottom-10 left-0 text-xl animate-ping">💖</span>
            <span className="absolute bottom-4 right-0 text-2xl animate-spin">🌟</span>
          </div>
        )}
      </div>

      {interactive && (
        <span className="mt-2 text-xs font-fun text-slate-500 hover:text-purple-600 transition-colors">
          Tap Teacher Pixie for tips! ✨
        </span>
      )}
    </div>
  );
};
