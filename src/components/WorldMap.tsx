import React from 'react';
import { SUBJECTS } from '../data/learningContent';
import { SubjectId, UserProgress, StudentProfile } from '../types';
import { soundFx } from '../utils/sound';
import { Compass, Sparkles, Play, BookOpen, CheckCircle2, Award } from 'lucide-react';

interface WorldMapProps {
  studentProfile: StudentProfile;
  userProgress: UserProgress;
  onStartQuiz: (subjectId: SubjectId) => void;
  onExploreSubject: (subjectId: SubjectId) => void;
}

export const WorldMap: React.FC<WorldMapProps> = ({
  studentProfile,
  userProgress,
  onStartQuiz,
  onExploreSubject
}) => {
  const handleStartQuiz = (subjectId: SubjectId, title: string) => {
    soundFx.playSparkle();
    soundFx.speak(`Starting 10-Question Quiz for ${title}! Good luck, ${studentProfile.name}!`);
    onStartQuiz(subjectId);
  };

  const handleLearnFirst = (subjectId: SubjectId) => {
    soundFx.playClick();
    onExploreSubject(subjectId);
  };

  return (
    <section className="relative my-8 sm:my-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Map Header with Student Context */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-purple-100 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-700 uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4 animate-spin text-purple-500" style={{ animationDuration: '14s' }} />
            <span>Interactive Island Quizzes & World Map</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-fun font-bold text-slate-900 tracking-tight">
            Magical Islands: 10-Question Quizzes
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl">
            Welcome to the 4 learning islands, <strong className="text-purple-900">{studentProfile.name}</strong> ({studentProfile.section}). Each island holds a special 10-question quiz tailored for your {studentProfile.grade.toUpperCase()} adventure!
          </p>
        </div>

        {/* Student Active Grade Pill & Open Islands */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs">
          <div className="px-3.5 py-1.5 rounded-2xl bg-purple-100 border border-purple-200 text-purple-900 font-fun font-bold flex items-center gap-1.5 shadow-xs">
            <span className="text-base">{studentProfile.avatar}</span>
            <span>{studentProfile.name} · {studentProfile.grade.toUpperCase()}</span>
          </div>
          <div className="px-3 py-1.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-fun font-bold flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>4 Quizzes Ready</span>
          </div>
        </div>
      </div>

      {/* 4 Magical Islands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {SUBJECTS.map((subject, idx) => {
          const quizKey = `${studentProfile.grade}-${subject.id}`;
          const pastScore = userProgress.quizScores?.[quizKey];
          const hasCompleted = Boolean(pastScore);
          const progressPercent = userProgress.subjectProgress?.[subject.id] || (hasCompleted ? 100 : 0);

          const borderColors = [
            'hover:border-sky-400 hover:shadow-sky-100',
            'hover:border-amber-400 hover:shadow-amber-100',
            'hover:border-emerald-400 hover:shadow-emerald-100',
            'hover:border-rose-400 hover:shadow-rose-100'
          ][idx];

          return (
            <div
              key={subject.id}
              className={`group relative overflow-hidden rounded-3xl bg-white border-2 border-slate-200 p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${borderColors}`}
            >
              {/* Island Illustration Container */}
              <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner mb-5">
                <img
                  src={subject.imagePath}
                  alt={subject.subtitle}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Floating Island Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md rounded-xl text-xs font-fun font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Island {subject.islandNumber}</span>
                </div>

                {/* 10-Question Indicator */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-purple-700/90 backdrop-blur-md text-white rounded-xl text-xs font-fun font-bold shadow-sm flex items-center gap-1">
                  <span>📝 10 Questions</span>
                </div>

                {/* Completion Status Overlay Ribbon */}
                {hasCompleted && (
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-emerald-600/95 backdrop-blur-md text-white rounded-xl text-xs font-fun font-bold shadow-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Best: {pastScore.score}/10 ({pastScore.percentage}%)</span>
                  </div>
                )}
              </div>

              {/* Island Title & Meta */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                    {subject.title} Curriculum
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {hasCompleted ? 'Quiz Completed ✅' : 'Quiz Unattempted'}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-fun font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                  {subject.subtitle}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {subject.description}
                </p>

                {/* Progress bar */}
                <div className="mt-2 w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200/60">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                    style={{ width: `${Math.max(progressPercent, 10)}%` }}
                  />
                </div>

                {/* Skills tags */}
                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 font-medium">
                  {subject.skills.map((skill, sIdx) => (
                    <React.Fragment key={skill}>
                      <span>{skill}</span>
                      {sIdx < subject.skills.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Action Buttons for Island: Start 10-Question Quiz + Learn First */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => handleStartQuiz(subject.id, subject.subtitle)}
                    className="w-full sm:flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-fun font-bold text-sm shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Start 10-Question Quiz</span>
                  </button>

                  <button
                    onClick={() => handleLearnFirst(subject.id)}
                    className="w-full sm:w-auto py-3 px-4 rounded-2xl bg-purple-50 hover:bg-purple-100 text-purple-800 font-fun font-bold text-xs border border-purple-200 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>What to Learn</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
