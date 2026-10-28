import React from 'react';
import { Volume2, VolumeX, Sparkles, Settings as SettingsIcon, Music, UserCheck, ArrowLeftRight } from 'lucide-react';
import { soundFx } from '../utils/sound';
import { StudentProfile } from '../types';

export type NavigationTab = 'home' | 'subjects' | 'progress' | 'rewards' | 'guide';

interface NavbarProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  starsCount: number;
  soundEnabled: boolean;
  bgmEnabled: boolean;
  onToggleSound: () => void;
  onToggleBgm: () => void;
  onOpenSettings: () => void;
  studentProfile?: StudentProfile;
  onSwitchStudent?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  starsCount,
  soundEnabled,
  bgmEnabled,
  onToggleSound,
  onToggleBgm,
  onOpenSettings,
  studentProfile,
  onSwitchStudent
}) => {
  const handleNavClick = (tab: NavigationTab) => {
    soundFx.playClick();
    onSelectTab(tab);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 md:gap-6">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group cursor-pointer whitespace-nowrap shrink-0"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-purple-300 shadow-sm bg-purple-50 flex items-center justify-center group-hover:scale-105 transition-transform">
            <img
              src="/assets/pixie_teacher_avatar.png"
              alt="Teacher Pixie"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl font-fun font-bold tracking-tight bg-gradient-to-r from-purple-700 via-pink-600 to-amber-600 bg-clip-text text-transparent">
            PIXIE
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => handleNavClick('home')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors cursor-pointer ${
              currentTab === 'home'
                ? 'text-purple-700 font-semibold border-b-2 border-purple-600'
                : 'hover:text-purple-700'
            }`}
          >
            World Map (Quizzes)
          </button>
          <button
            onClick={() => handleNavClick('subjects')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors cursor-pointer ${
              currentTab === 'subjects'
                ? 'text-purple-700 font-semibold border-b-2 border-purple-600'
                : 'hover:text-purple-700'
            }`}
          >
            Explore Subjects
          </button>
          <button
            onClick={() => handleNavClick('progress')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors cursor-pointer ${
              currentTab === 'progress'
                ? 'text-purple-700 font-semibold border-b-2 border-purple-600'
                : 'hover:text-purple-700'
            }`}
          >
            My Progress & Scores
          </button>
          <button
            onClick={() => handleNavClick('rewards')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors cursor-pointer ${
              currentTab === 'rewards'
                ? 'text-purple-700 font-semibold border-b-2 border-purple-600'
                : 'hover:text-purple-700'
            }`}
          >
            Rewards Room
          </button>
          <button
            onClick={() => handleNavClick('guide')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors cursor-pointer ${
              currentTab === 'guide'
                ? 'text-purple-700 font-semibold border-b-2 border-purple-600'
                : 'hover:text-purple-700'
            }`}
          >
            Guide
          </button>
        </nav>

        {/* Zone 3: Student Profile Chip + Functional Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Active Student Profile Pill & Switch Button */}
          {studentProfile && (
            <div className="hidden sm:flex items-center gap-1.5 p-1 bg-purple-50 border border-purple-200 rounded-2xl text-xs font-fun">
              <span className="text-lg pl-1.5">{studentProfile.avatar}</span>
              <div className="leading-tight text-left pr-1">
                <span className="font-bold text-purple-900 block truncate max-w-[100px]">
                  {studentProfile.name}
                </span>
                <span className="text-[10px] text-purple-700 block truncate max-w-[100px]">
                  {studentProfile.section}
                </span>
              </div>
              {onSwitchStudent && (
                <button
                  onClick={onSwitchStudent}
                  title="Switch student profile"
                  className="p-1.5 rounded-xl bg-white hover:bg-purple-100 text-purple-700 border border-purple-100 transition-colors cursor-pointer"
                >
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}

          {/* Stars Counter */}
          <div
            onClick={() => handleNavClick('rewards')}
            role="button"
            tabIndex={0}
            title="Total Stars Earned. Click to open Rewards Room!"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-xl cursor-pointer text-amber-900 transition-colors shadow-xs"
          >
            <span className="text-lg">⭐</span>
            <span className="font-fun font-bold text-sm md:text-base tabular-nums">
              {starsCount}
            </span>
          </div>

          {/* Sound FX Toggle */}
          <button
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
            title={soundEnabled ? 'Sound FX: ON' : 'Sound FX: OFF'}
            className="p-2 rounded-xl text-slate-600 hover:text-purple-700 hover:bg-purple-50 transition-colors cursor-pointer border border-slate-200"
          >
            {soundEnabled ? (
              <Volume2 className="w-5 h-5 text-purple-600" />
            ) : (
              <VolumeX className="w-5 h-5 text-slate-400" />
            )}
          </button>

          {/* Ambient BGM Music Toggle */}
          <button
            onClick={onToggleBgm}
            aria-label={bgmEnabled ? 'Pause background music' : 'Play peaceful background music'}
            title={bgmEnabled ? 'Music: Playing 🎵' : 'Music: Paused 🎵'}
            className={`p-2 rounded-xl transition-all cursor-pointer border ${
              bgmEnabled
                ? 'bg-amber-100 text-amber-800 border-amber-300 shadow-xs'
                : 'text-slate-500 hover:text-purple-700 hover:bg-purple-50 border-slate-200'
            }`}
          >
            <Music className={`w-5 h-5 ${bgmEnabled ? 'animate-bounce text-amber-600' : ''}`} />
          </button>

          {/* Settings button */}
          <button
            onClick={onOpenSettings}
            aria-label="Settings and audio controls"
            className="p-2 rounded-xl text-slate-600 hover:text-purple-700 hover:bg-purple-50 transition-colors cursor-pointer border border-slate-200"
          >
            <SettingsIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="lg:hidden flex items-center justify-around px-2 py-2 border-t border-purple-50 bg-white/95 text-xs font-fun overflow-x-auto">
        <button
          onClick={() => handleNavClick('home')}
          className={`px-2 py-1 rounded-lg ${currentTab === 'home' ? 'bg-purple-100 text-purple-800 font-bold' : 'text-slate-600'}`}
        >
          Map & Quizzes
        </button>
        <button
          onClick={() => handleNavClick('subjects')}
          className={`px-2 py-1 rounded-lg ${currentTab === 'subjects' ? 'bg-purple-100 text-purple-800 font-bold' : 'text-slate-600'}`}
        >
          Explore Subjects
        </button>
        <button
          onClick={() => handleNavClick('progress')}
          className={`px-2 py-1 rounded-lg ${currentTab === 'progress' ? 'bg-purple-100 text-purple-800 font-bold' : 'text-slate-600'}`}
        >
          Scores
        </button>
        <button
          onClick={() => handleNavClick('rewards')}
          className={`px-2 py-1 rounded-lg ${currentTab === 'rewards' ? 'bg-purple-100 text-purple-800 font-bold' : 'text-slate-600'}`}
        >
          Rewards
        </button>
        {onSwitchStudent && (
          <button
            onClick={onSwitchStudent}
            className="px-2 py-1 rounded-lg text-purple-700 font-bold flex items-center gap-1 bg-purple-50"
          >
            <span>{studentProfile?.avatar || '👤'}</span>
            <span>Switch</span>
          </button>
        )}
      </div>
    </header>
  );
};
