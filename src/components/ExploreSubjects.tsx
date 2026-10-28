import React, { useState } from 'react';
import { SubjectId, GradeLevel, StudentProfile, UserProgress } from '../types';
import { SUBJECTS, getIslandQuiz } from '../data/learningContent';
import { soundFx } from '../utils/sound';
import {
  Play,
  Sparkles,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Puzzle,
  CheckCircle2,
  HelpCircle,
  Award
} from 'lucide-react';

interface ExploreSubjectsProps {
  studentProfile: StudentProfile;
  currentGrade: GradeLevel;
  onSelectGrade: (grade: GradeLevel) => void;
  onStartQuiz: (subjectId: SubjectId) => void;
  userProgress: UserProgress;
}

export const ExploreSubjects: React.FC<ExploreSubjectsProps> = ({
  studentProfile,
  currentGrade,
  onSelectGrade,
  onStartQuiz,
  userProgress
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('english');

  const grades: { id: GradeLevel; label: string; age: string }[] = [
    { id: 'kindergarten', label: 'Kindergarten', age: 'Ages 4–5' },
    { id: 'grade1', label: 'Grade 1', age: 'Ages 6–7' },
    { id: 'grade2', label: 'Grade 2', age: 'Ages 7–8' }
  ];

  const handleGradeChange = (g: GradeLevel) => {
    soundFx.playClick();
    onSelectGrade(g);
    soundFx.speak(`Switched to ${g} curriculum`);
  };

  const currentSubject = SUBJECTS.find((s) => s.id === selectedSubjectId) || SUBJECTS[0];
  const quizPrep = currentSubject.quizPrep[currentGrade];
  const islandQuizQuestions = getIslandQuiz(currentGrade, currentSubject.id);

  const quizKey = `${currentGrade}-${currentSubject.id}`;
  const pastScore = userProgress.quizScores?.[quizKey];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header & Grade Level Selector */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-purple-100">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-purple-700 mb-1">
            <BookOpen className="w-4 h-4 text-purple-600" />
            <span>Expected Curriculum & Quiz Preparation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-fun font-bold text-slate-900 tracking-tight">
            Explore Subjects & What You Will Learn
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
            Read what each 10-question island quiz tests before starting, practice key vocabulary, and build confidence for <strong className="text-purple-900">{studentProfile.name}</strong> ({studentProfile.section})!
          </p>
        </div>

        {/* Grade tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
          {grades.map((g) => {
            const isSelected = currentGrade === g.id;
            return (
              <button
                key={g.id}
                onClick={() => handleGradeChange(g.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-fun font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-purple-700 hover:bg-white/60'
                }`}
              >
                <span>{g.label}</span>
                <span className="hidden sm:inline text-[11px] opacity-80 ml-1">({g.age})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4 Subject Selection Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {SUBJECTS.map((sub) => {
          const isSelected = selectedSubjectId === sub.id;
          const score = userProgress.quizScores?.[`${currentGrade}-${sub.id}`];

          return (
            <button
              key={sub.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedSubjectId(sub.id);
                soundFx.speak(`Viewing ${sub.subtitle}`);
              }}
              className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'border-purple-600 bg-purple-50/80 shadow-md scale-102 ring-2 ring-purple-200'
                  : 'border-slate-200 bg-white hover:border-purple-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">
                  Island {sub.islandNumber}: {sub.title}
                </span>
                {isSelected && <Sparkles className="w-4 h-4 text-purple-600" />}
              </div>
              <h3 className="font-fun font-bold text-sm sm:text-base text-slate-900 leading-snug">
                {sub.subtitle}
              </h3>
              <div className="mt-2 text-[11px] font-semibold text-slate-500">
                {score ? `Score: ${score.score}/10 ⭐` : '10-Q Quiz'}
              </div>
            </button>
          );
        })}
      </div>

      {/* Subject Spotlight Details */}
      <div className="bg-white rounded-3xl border-2 border-purple-100 p-6 sm:p-10 shadow-sm mb-12">
        {/* Banner with Illustrated Island */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8 pb-8 border-b border-purple-100">
          <div className="lg:col-span-5 relative aspect-4/3 rounded-2xl overflow-hidden shadow-inner border border-slate-200">
            <img
              src={currentSubject.imagePath}
              alt={currentSubject.subtitle}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md rounded-xl text-xs font-fun font-bold text-purple-800 shadow-sm">
              {currentSubject.themeWorld}
            </div>
            {pastScore && (
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-emerald-600/95 backdrop-blur-md text-white rounded-xl text-xs font-fun font-bold shadow-sm">
                Completed: {pastScore.score}/10 ({pastScore.percentage}%)
              </div>
            )}
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase font-semibold tracking-wider text-purple-700">
                Island {currentSubject.islandNumber} · {currentSubject.title} Exploration
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-xs font-bold text-amber-600 font-fun uppercase">
                {currentGrade} Edition
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-fun font-bold text-slate-900 mb-2">
              {currentSubject.subtitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {currentSubject.description}
            </p>

            {/* Launch 10-Question Island Quiz Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => {
                  soundFx.playSparkle();
                  onStartQuiz(currentSubject.id);
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-fun font-bold text-base shadow-lg shadow-purple-300/40 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2.5"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>Start Island {currentSubject.islandNumber} (10 Questions Quiz)</span>
              </button>

              {pastScore && (
                <div className="text-xs font-fun font-semibold text-slate-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Previous Score: {pastScore.score}/10</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================= WHAT WILL YOU LEARN FOR THIS QUIZ ================= */}
        <div className="mb-10 bg-gradient-to-b from-purple-50/60 to-white rounded-3xl p-6 sm:p-8 border-2 border-purple-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-600 text-white flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                10-Question Quiz Blueprint
              </span>
              <h3 className="text-xl sm:text-2xl font-fun font-bold text-slate-900">
                What You Will Learn & Practice in the Quiz
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Box 1: Expected Topics */}
            <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-sky-600" />
                  <h4 className="font-fun font-bold text-base text-slate-900">
                    Expected Topics
                  </h4>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {quizPrep.expectedTopics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Box 2: Core Vocabulary */}
            <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  <h4 className="font-fun font-bold text-base text-slate-900">
                    Core Vocabulary
                  </h4>
                </div>
                <p className="text-xs text-slate-500 mb-3">
                  Essential words you will encounter during the 10 questions:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {quizPrep.coreVocabulary.map((word, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs font-fun font-bold"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Box 3: Skills to Practice */}
            <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Puzzle className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-fun font-bold text-base text-slate-900">
                    Skills to Practice
                  </h4>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {quizPrep.skillsToPractice.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Pixie's Island Quiz Secret Tip */}
          <div className="mt-6 p-4 rounded-2xl bg-amber-100/70 border border-amber-300 flex items-center gap-3 text-xs sm:text-sm text-amber-950 font-fun">
            <span className="text-2xl">🧚‍♀️</span>
            <div>
              <strong className="font-bold text-amber-900">Pixie’s Quiz Tip: </strong>
              <span>{quizPrep.quizTip}</span>
            </div>
          </div>
        </div>

        {/* ================= TAXONOMY TRIO: KNOW, UNDERSTAND, APPLY ================= */}
        <div className="mb-10">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">
              Curriculum Sequence Pillars
            </span>
            <h3 className="text-xl sm:text-2xl font-fun font-bold text-slate-900">
              Clear Sequence: What to Know → Understand → Apply
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. What to Know */}
            <div className="p-6 rounded-3xl bg-sky-50/80 border-2 border-sky-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-800">
                      Pillar 1
                    </span>
                    <h4 className="font-fun font-bold text-base text-slate-900">
                      What to Know
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-sky-900 mb-3 font-medium">
                  Facts, letters, numerals, symbols, and core definitions:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                  {currentSubject.skills.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-sky-600 font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. What to Understand */}
            <div className="p-6 rounded-3xl bg-amber-50/80 border-2 border-amber-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-800">
                      Pillar 2
                    </span>
                    <h4 className="font-fun font-bold text-base text-slate-900">
                      What to Understand
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-amber-900 mb-3 font-medium">
                  Underlying patterns, logic, why rules exist, and relations:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                  {quizPrep.expectedTopics.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. What to Apply */}
            <div className="p-6 rounded-3xl bg-emerald-50/80 border-2 border-emerald-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                    <Puzzle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                      Pillar 3
                    </span>
                    <h4 className="font-fun font-bold text-base text-slate-900">
                      What to Apply
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-emerald-900 mb-3 font-medium">
                  Solving challenges, dragging pieces, spelling, and daily positive actions:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                  {quizPrep.skillsToPractice.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 10 Questions Preview Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                10 Questions Curriculum Lineup
              </span>
              <h3 className="text-xl font-fun font-bold text-slate-900">
                Questions in Island {currentSubject.islandNumber} Quiz
              </h3>
            </div>
            <button
              onClick={() => onStartQuiz(currentSubject.id)}
              className="text-xs font-fun font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1 cursor-pointer"
            >
              <span>Take Quiz Now</span>
              <Play className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {islandQuizQuestions.map((q, idx) => (
              <div
                key={q.id}
                className="p-3.5 rounded-2xl border border-slate-100 bg-slate-50/70 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-purple-100 text-purple-700 font-fun font-bold text-xs flex items-center justify-center shrink-0">
                    Q{idx + 1}
                  </span>
                  <div>
                    <h5 className="font-fun font-bold text-xs sm:text-sm text-slate-900">
                      {q.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {q.instruction}
                    </p>
                  </div>
                </div>
                <span className="text-lg shrink-0 ml-2">{q.imageUrl || '⭐'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
