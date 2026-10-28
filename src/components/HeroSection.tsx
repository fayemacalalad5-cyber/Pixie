import React from 'react';
import { PixieMascot } from './PixieMascot';
import { GradeLevel, SubjectId } from '../types';
import { Sparkles, ArrowRight, Compass, GraduationCap } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface HeroSectionProps {
  currentGrade: GradeLevel;
  onSelectGrade: (grade: GradeLevel) => void;
  onStartLearning: () => void;
  onExploreSubjects: () => void;
  equippedAccessoryId?: string | null;
  onMascotClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentGrade,
  onSelectGrade,
  onStartLearning,
  onExploreSubjects,
  equippedAccessoryId,
  onMascotClick
}) => {
  const grades: { id: GradeLevel; label: string; age: string; icon: string }[] = [
    { id: 'kindergarten', label: 'Kindergarten', age: 'Ages 4–5', icon: '🐣' },
    { id: 'grade1', label: 'Grade 1', age: 'Ages 6–7', icon: '🚀' },
    { id: 'grade2', label: 'Grade 2', age: 'Ages 7–8', icon: '⭐' }
  ];

  const handleGradeChange = (grade: GradeLevel) => {
    soundFx.playClick();
    onSelectGrade(grade);
    soundFx.speak(`Switched to ${grade}! Let's do this!`);
  };

  return (
    <section className="relative pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Headlines, Grade Selector, CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-5 text-left">
          {/* Welcome Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-900 text-xs sm:text-sm font-fun font-semibold w-fit shadow-xs">
            <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
            <span>Interactive Educational Kingdom</span>
          </div>

          {/* Main Headline & Subtitle */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-fun font-bold tracking-tight text-slate-900 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
                PIXIE!
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-fun font-medium text-purple-700 mt-2">
              Where Little Minds Go on Big Adventures!
            </p>
          </div>

          {/* Supporting Copy */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
            Discover, play, learn, and grow! Explore exciting drag-and-drop challenges in English,
            Mathematics, Science, and Good Habits. Every challenge brings sparkling star rewards!
          </p>

          {/* Grade Level Selector Buttons */}
          <div className="pt-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 mb-2.5">
              <GraduationCap className="w-4 h-4 text-purple-600" />
              <span>Select Your Learning Level:</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5 max-w-md">
              {grades.map((g) => {
                const isSelected = currentGrade === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => handleGradeChange(g.id)}
                    className={`flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-purple-600 text-white border-purple-700 shadow-md scale-102 font-bold'
                        : 'bg-white/80 text-slate-700 border-slate-200 hover:border-purple-300 hover:bg-purple-50/50'
                    }`}
                  >
                    <span className="text-xl mb-0.5">{g.icon}</span>
                    <span className="text-xs sm:text-sm font-fun leading-tight">{g.label}</span>
                    <span className={`text-[11px] font-sans ${isSelected ? 'text-purple-200' : 'text-slate-400'}`}>
                      {g.age}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => {
                soundFx.playClick();
                onStartLearning();
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-fun font-bold text-base sm:text-lg shadow-lg shadow-purple-300/50 hover:shadow-xl hover:scale-102 active:scale-98 transition-all cursor-pointer"
            >
              <span>Start Learning!</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                onExploreSubjects();
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/90 border-2 border-purple-200 hover:border-purple-400 text-purple-800 font-fun font-bold text-base shadow-xs hover:bg-purple-50/60 transition-all cursor-pointer"
            >
              <Compass className="w-5 h-5 text-purple-600" />
              <span>Explore Subjects</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Mascot with Surrounding Whimsical Orbit */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[340px]">
          {/* Subtle glow circle */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-purple-200/50 via-pink-200/40 to-amber-200/50 blur-2xl -z-10 animate-pulse" />

          {/* Surrounding floating whimsical items */}
          <div className="absolute top-2 left-6 text-2xl animate-float-slow select-none">📚</div>
          <div className="absolute top-4 right-10 text-2xl animate-float-reverse select-none">✏️</div>
          <div className="absolute bottom-6 left-8 text-2xl animate-float-reverse select-none">🔢</div>
          <div className="absolute bottom-10 right-8 text-2xl animate-float-slow select-none">🌱</div>
          <div className="absolute -top-4 right-1/2 text-2xl animate-bounce select-none">✨</div>

          {/* Pixie Character */}
          <PixieMascot
            size="xl"
            speechText="Ready to learn something amazing?"
            mood="waving"
            equippedAccessoryId={equippedAccessoryId}
            onMascotClick={onMascotClick}
          />
        </div>
      </div>
    </section>
  );
};
