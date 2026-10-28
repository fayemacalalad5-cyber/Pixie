import React from 'react';
import { UserProgress, StudentProfile, SubjectId } from '../types';
import { BADGES, SUBJECTS } from '../data/learningContent';
import { PixieMascot } from './PixieMascot';
import { soundFx } from '../utils/sound';
import { Award, Compass, Sparkles, CheckCircle2, RotateCcw, Target, User, Users, GraduationCap, Play } from 'lucide-react';

interface ProgressPageProps {
  studentProfile: StudentProfile;
  userProgress: UserProgress;
  onUpdateDailyGoal: (goal: number) => void;
  onOpenRewards: () => void;
  onStartQuiz: (subjectId: SubjectId) => void;
}

export const ProgressPage: React.FC<ProgressPageProps> = ({
  studentProfile,
  userProgress,
  onUpdateDailyGoal,
  onOpenRewards,
  onStartQuiz
}) => {
  // Calculate total quizzes completed
  const quizEntries = Object.entries(userProgress.quizScores || {});
  const totalCompletedQuizzes = quizEntries.length;

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Student Passport Header */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-fun font-bold text-amber-200 mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Official Learner Passport & Report Card</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-fun font-bold">
            {studentProfile.name}’s Learning Journey
          </h1>
          <p className="text-purple-100 text-xs sm:text-sm mt-1 max-w-xl">
            Class Section: <strong className="text-amber-200">{studentProfile.section}</strong> · Grade: <strong className="text-amber-200">{studentProfile.grade.toUpperCase()}</strong>. Keep collecting stars and mastering all 4 Island Quizzes!
          </p>
        </div>

        {/* Mascot cheer */}
        <PixieMascot
          size="md"
          speechText={`Terrific progress, ${studentProfile.name}! Look at your island scores!`}
          equippedAccessoryId={userProgress.equippedAccessoryId}
        />
      </div>

      {/* 3 Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="p-6 rounded-3xl bg-white border-2 border-amber-200 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-3xl shrink-0">
            ⭐
          </div>
          <div>
            <p className="text-xs font-fun font-semibold text-slate-500 uppercase tracking-wider">
              Total Stars Earned
            </p>
            <p className="text-3xl font-fun font-bold text-slate-900 tabular-nums">
              {userProgress.stars} Stars
            </p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border-2 border-purple-200 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-3xl shrink-0">
            🏆
          </div>
          <div>
            <p className="text-xs font-fun font-semibold text-slate-500 uppercase tracking-wider">
              Badges Collected
            </p>
            <p className="text-3xl font-fun font-bold text-slate-900 tabular-nums">
              {userProgress.unlockedBadgeIds.length} / {BADGES.length}
            </p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border-2 border-emerald-200 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl shrink-0">
              🎯
            </div>
            <div>
              <p className="text-xs font-fun font-semibold text-slate-500 uppercase tracking-wider">
                Daily Goal
              </p>
              <p className="text-2xl font-fun font-bold text-slate-900 tabular-nums">
                {userProgress.todayCompletedCount} / {userProgress.dailyGoal} Quizzes
              </p>
            </div>
          </div>

          {/* Goal Selector */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            {[2, 3, 5].map((num) => (
              <button
                key={num}
                onClick={() => {
                  soundFx.playClick();
                  onUpdateDailyGoal(num);
                }}
                className={`px-2 py-1 rounded-lg text-xs font-fun font-bold ${
                  userProgress.dailyGoal === num
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-600 hover:text-purple-700'
                }`}
                title={`Set daily goal to ${num}`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= 4 ISLANDS 10-QUESTION QUIZZES REPORT CARD ================= */}
      <div className="bg-white rounded-3xl border-2 border-purple-200 p-6 sm:p-8 shadow-sm mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-purple-100 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
              Academic Report Card · 10-Question Island Quizzes
            </span>
            <h3 className="text-2xl font-fun font-bold text-slate-900">
              Student Quiz Performance by Island
            </h3>
          </div>

          <div className="text-xs font-fun text-slate-500 flex items-center gap-2">
            <span>Student: <strong>{studentProfile.name}</strong></span>
            <span>·</span>
            <span>Section: <strong>{studentProfile.section}</strong></span>
          </div>
        </div>

        {/* 4 Island Quiz Rows */}
        <div className="space-y-4">
          {SUBJECTS.map((sub) => {
            const quizKey = `${studentProfile.grade}-${sub.id}`;
            const result = userProgress.quizScores?.[quizKey];
            const hasTaken = Boolean(result);

            return (
              <div
                key={sub.id}
                className="p-4 sm:p-5 rounded-2xl border-2 border-slate-100 hover:border-purple-200 bg-slate-50/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-200">
                    <img
                      src={sub.imagePath}
                      alt={sub.subtitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-purple-700 font-fun uppercase">
                        Island {sub.islandNumber}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs font-semibold text-slate-500">
                        10 Questions Quiz
                      </span>
                    </div>
                    <h4 className="font-fun font-bold text-base sm:text-lg text-slate-900">
                      {sub.subtitle}
                    </h4>
                    <p className="text-xs text-slate-500">
                      Curriculum: {sub.skills.join(', ')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4">
                  {hasTaken && result ? (
                    <div className="text-left md:text-right">
                      <div className="flex items-center gap-1.5 text-emerald-700 font-fun font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Completed</span>
                      </div>
                      <div className="text-lg font-mono font-bold text-slate-900">
                        {result.score} / {result.total} ({result.percentage}%)
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {result.completedAt}
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs font-fun font-medium text-slate-400">
                      Not attempted yet
                    </div>
                  )}

                  <button
                    onClick={() => {
                      soundFx.playSparkle();
                      onStartQuiz(sub.id);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-fun font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
                      hasTaken
                        ? 'bg-purple-100 hover:bg-purple-200 text-purple-800'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 text-white'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{hasTaken ? 'Retake Quiz' : 'Take 10-Q Quiz'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rewards Navigation Shortcut */}
      <div className="p-6 bg-gradient-to-r from-amber-100/90 via-pink-100/70 to-purple-100/90 rounded-3xl border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🎁</span>
          <div>
            <h4 className="font-fun font-bold text-lg text-amber-950">
              Visit Pixie’s Rewards Room!
            </h4>
            <p className="text-xs text-amber-900">
              Spend your stars to unlock wizard hats, superhero capes, star glasses, and magic wands!
            </p>
          </div>
        </div>

        <button
          onClick={onOpenRewards}
          className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-fun font-bold text-sm shadow-md transition-all cursor-pointer"
        >
          Open Rewards Room
        </button>
      </div>
    </section>
  );
};
