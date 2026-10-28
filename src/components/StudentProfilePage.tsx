import React, { useState } from 'react';
import { GradeLevel, StudentProfile } from '../types';
import { PixieMascot } from './PixieMascot';
import { soundFx } from '../utils/sound';
import {
  Sparkles,
  GraduationCap,
  ArrowRight,
  User,
  Users,
  Compass,
  CheckCircle2,
  Volume2,
  Music
} from 'lucide-react';

interface StudentProfilePageProps {
  initialProfile: StudentProfile;
  onRegister: (profile: StudentProfile) => void;
  bgmEnabled: boolean;
  onToggleBgm: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const StudentProfilePage: React.FC<StudentProfilePageProps> = ({
  initialProfile,
  onRegister,
  bgmEnabled,
  onToggleBgm,
  soundEnabled,
  onToggleSound
}) => {
  const [name, setName] = useState(initialProfile.name || '');
  const [section, setSection] = useState(initialProfile.section || '');
  const [grade, setGrade] = useState<GradeLevel>(initialProfile.grade || 'kindergarten');
  const [avatar, setAvatar] = useState(initialProfile.avatar || '⭐');
  const [error, setError] = useState<string | null>(null);

  const avatars = ['👩‍🏫', '⭐', '🚀', '🦄', '🦁', '🐼', '🦋', '🌸'];

  const gradeOptions: { id: GradeLevel; label: string; age: string; icon: string; desc: string }[] = [
    {
      id: 'kindergarten',
      label: 'Kindergarten',
      age: 'Ages 4–5',
      icon: '🐣',
      desc: 'Letter sounds, counting 1-10, animal habitats, and healthy smiles.'
    },
    {
      id: 'grade1',
      label: 'Grade 1',
      age: 'Ages 6–7',
      icon: '🚀',
      desc: 'Word spelling, addition & subtraction, living things, and handwashing.'
    },
    {
      id: 'grade2',
      label: 'Grade 2',
      age: 'Ages 7–8',
      icon: '⭐',
      desc: 'Advanced vocabulary, double-digit math, photosynthesis, and manners.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please type your name to start your adventure!');
      soundFx.playGentleRetry();
      return;
    }
    if (!section.trim()) {
      setError('Please type your class section (e.g. Section Rose or Section 1-A)!');
      soundFx.playGentleRetry();
      return;
    }

    soundFx.playCorrect();
    soundFx.speak(`Welcome ${name} of ${section}! Flying to the magical islands!`);
    onRegister({
      name: name.trim(),
      section: section.trim(),
      grade,
      avatar,
      isRegistered: true
    });
  };

  const handlePreFill = (demoName: string, demoSection: string, demoGrade: GradeLevel, demoAvatar: string) => {
    soundFx.playPop();
    setName(demoName);
    setSection(demoSection);
    setGrade(demoGrade);
    setAvatar(demoAvatar);
    setError(null);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col justify-between">
      {/* Top Header bar with sound toggles */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-purple-100">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-purple-300 shadow-sm bg-purple-50 flex items-center justify-center">
            <img
              src="/assets/pixie_teacher_avatar.png"
              alt="Teacher Pixie"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl font-fun font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-amber-600 bg-clip-text text-transparent">
            PIXIE
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Background Music toggle */}
          <button
            onClick={onToggleBgm}
            title={bgmEnabled ? 'Music: Playing' : 'Play Background Music'}
            className={`px-3 py-1.5 rounded-xl border text-xs font-fun font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              bgmEnabled
                ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-xs'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-purple-50'
            }`}
          >
            <Music className={`w-4 h-4 ${bgmEnabled ? 'animate-bounce text-amber-600' : ''}`} />
            <span>{bgmEnabled ? 'Music ON 🎵' : 'Play Music'}</span>
          </button>

          {/* Sound FX toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Sound FX: ON' : 'Sound FX: OFF'}
            className="p-2 bg-white rounded-xl border border-slate-200 text-slate-600 hover:text-purple-700 transition-colors cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Title Section (First Page) */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-900 text-xs sm:text-sm font-fun font-bold mb-3 shadow-xs">
          <GraduationCap className="w-4 h-4 text-purple-600" />
          <span>Interactive Educational Website for K to Grade 2</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-fun font-bold tracking-tight text-slate-900 leading-tight">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
            PIXIE!
          </span>
        </h1>
        <p className="text-xl sm:text-2xl font-fun font-medium text-purple-700 mt-2">
          Where Little Minds Go on Big Adventures!
        </p>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-2 leading-relaxed">
          Step 1: Set up your student profile below with your name, section, and grade level to enter
          the 4 Magical Islands with 10-Question Quizzes!
        </p>
      </div>

      {/* Registration Form & Mascot Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/90 backdrop-blur-md rounded-3xl border-2 border-purple-200 p-6 sm:p-10 shadow-xl mb-10">
        {/* Left: Mascot & Greeting */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-4 border-b lg:border-b-0 lg:border-r border-purple-100">
          <PixieMascot
            size="lg"
            speechText="Hello, friend! What is your name and class section?"
            mood="waving"
          />
          <h3 className="font-fun font-bold text-lg text-slate-900 mt-3">
            Meet Teacher Pixie, Your Guide!
          </h3>
          <p className="text-xs text-slate-500 max-w-xs mt-1 leading-relaxed">
            I will accompany you across Island 1 (English), Island 2 (Math), Island 3 (Science), and
            Island 4 (Good Habits).
          </p>
        </div>

        {/* Right: Student Profile Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 flex flex-col gap-5">
          <div>
            <h2 className="text-2xl font-fun font-bold text-slate-900 mb-1">
              Student Profile Registration
            </h2>
            <p className="text-xs text-slate-500">
              Your name and section will be displayed on your quiz results, star passport, and badges!
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-2xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-fun font-bold flex items-center gap-2">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Student Name */}
          <div>
            <label className="block text-xs font-fun font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-purple-600" />
              <span>Student Full Name:</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError(null);
              }}
              placeholder="e.g. Maya Santos or Lucas Cruz"
              className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 font-fun text-slate-900 placeholder:text-slate-400 outline-none text-base transition-all bg-white shadow-xs"
            />
          </div>

          {/* Class Section */}
          <div>
            <label className="block text-xs font-fun font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-purple-600" />
              <span>Class Section:</span>
            </label>
            <input
              type="text"
              value={section}
              onChange={(e) => {
                setSection(e.target.value);
                setError(null);
              }}
              placeholder="e.g. Section Rose / Section Sunshine / Grade 1-A"
              className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 font-fun text-slate-900 placeholder:text-slate-400 outline-none text-base transition-all bg-white shadow-xs"
            />
          </div>

          {/* Grade Level Selector */}
          <div>
            <label className="block text-xs font-fun font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
              <span>Select Your Grade Level:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {gradeOptions.map((opt) => {
                const isSelected = grade === opt.id;
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => {
                      soundFx.playClick();
                      setGrade(opt.id);
                    }}
                    className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-purple-600 bg-purple-50 shadow-md ring-2 ring-purple-200'
                        : 'border-slate-200 bg-white hover:border-purple-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xl">{opt.icon}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-purple-600" />}
                      </div>
                      <h4 className="font-fun font-bold text-sm text-slate-900 leading-tight">
                        {opt.label}
                      </h4>
                      <span className="text-[11px] text-purple-700 font-semibold">{opt.age}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Learner Buddy Avatar */}
          <div>
            <label className="block text-xs font-fun font-bold text-slate-700 uppercase tracking-wider mb-2">
              Choose Your Learner Avatar Buddy:
            </label>
            <div className="flex flex-wrap items-center gap-2">
              {avatars.map((av) => (
                <button
                  type="button"
                  key={av}
                  onClick={() => {
                    soundFx.playPop();
                    setAvatar(av);
                  }}
                  className={`w-11 h-11 rounded-2xl text-2xl flex items-center justify-center transition-all cursor-pointer border-2 ${
                    avatar === av
                      ? 'border-purple-600 bg-purple-100 scale-110 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-purple-300'
                  }`}
                >
                  {av}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button to Enter Page 2 */}
          <button
            type="submit"
            className="mt-2 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-fun font-bold text-lg shadow-lg shadow-purple-300/50 hover:shadow-xl hover:scale-102 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Enter Learning Islands & Start Quizzes!</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Quick 1-Click Demo Profile Switcher */}
      <div className="p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-100 text-center">
        <span className="text-xs font-fun font-bold text-slate-500 uppercase tracking-wider block mb-2">
          Or Quick Test with a Sample Student Profile:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={() => handlePreFill('Maya Santos', 'Section Sunshine', 'kindergarten', '⭐')}
            className="px-3.5 py-1.5 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xl text-xs font-fun font-bold text-sky-800 transition-colors cursor-pointer"
          >
            ⭐ Maya (Kinder - Sunshine)
          </button>
          <button
            type="button"
            onClick={() => handlePreFill('Lucas Cruz', 'Section Diamond', 'grade1', '🚀')}
            className="px-3.5 py-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-xl text-xs font-fun font-bold text-amber-800 transition-colors cursor-pointer"
          >
            🚀 Lucas (Grade 1 - Diamond)
          </button>
          <button
            type="button"
            onClick={() => handlePreFill('Sofia Reyes', 'Section Starlight', 'grade2', '🦄')}
            className="px-3.5 py-1.5 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl text-xs font-fun font-bold text-purple-800 transition-colors cursor-pointer"
          >
            🦄 Sofia (Grade 2 - Starlight)
          </button>
        </div>
      </div>
    </div>
  );
};
