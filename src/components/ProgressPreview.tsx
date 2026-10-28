import React from 'react';
import { UserProgress } from '../types';
import { BADGES, SUBJECTS } from '../data/learningContent';
import { Award, ArrowRight, Target } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface ProgressPreviewProps {
  userProgress: UserProgress;
  onViewAllProgress: () => void;
  onOpenRewards: () => void;
}

export const ProgressPreview: React.FC<ProgressPreviewProps> = ({
  userProgress,
  onViewAllProgress,
  onOpenRewards
}) => {
  return (
    <section className="my-12 sm:my-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl border-2 border-purple-100 p-6 sm:p-10 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-purple-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-purple-700 mb-1">
              <Target className="w-4 h-4 text-purple-600" />
              <span>Learning Passport & Milestones</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-fun font-bold text-slate-900">
              Your Learning Journey
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Track activities completed, stars collected, and exciting badges unlocked.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundFx.playClick();
                onViewAllProgress();
              }}
              className="px-4 py-2 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-2xl text-xs font-fun font-bold text-purple-800 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Full Passport</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Overview Metric Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-4">
            <span className="text-4xl">⭐</span>
            <div>
              <p className="text-xs font-fun font-semibold text-amber-900 uppercase">
                Stars Collected
              </p>
              <p className="text-2xl font-fun font-bold text-amber-950 tabular-nums">
                {userProgress.stars} Stars
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200 flex items-center gap-4">
            <span className="text-4xl">🏆</span>
            <div>
              <p className="text-xs font-fun font-semibold text-purple-900 uppercase">
                Badges Earned
              </p>
              <p className="text-2xl font-fun font-bold text-purple-950 tabular-nums">
                {userProgress.unlockedBadgeIds.length} / {BADGES.length}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-4">
            <span className="text-4xl">🎯</span>
            <div>
              <p className="text-xs font-fun font-semibold text-emerald-900 uppercase">
                Daily Goal
              </p>
              <p className="text-2xl font-fun font-bold text-emerald-950 tabular-nums">
                {userProgress.todayCompletedCount} / {userProgress.dailyGoal} Done
              </p>
            </div>
          </div>
        </div>

        {/* Subject Progress Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {SUBJECTS.map((sub) => {
            const percent = userProgress.subjectProgress[sub.id] || 0;
            return (
              <div key={sub.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-fun font-bold text-slate-800 mb-1.5">
                  <span>{sub.title}</span>
                  <span className="text-purple-700">{percent}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Badges preview row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 overflow-x-auto max-w-xl py-1">
            {BADGES.map((badge) => {
              const isUnlocked = userProgress.unlockedBadgeIds.includes(badge.id);
              return (
                <div
                  key={badge.id}
                  title={`${badge.title}: ${badge.description}`}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-fun transition-transform hover:scale-105 ${
                    isUnlocked
                      ? 'bg-amber-100 border-amber-300 text-amber-950 font-bold'
                      : 'bg-slate-100 border-slate-200 text-slate-400 opacity-60'
                  }`}
                >
                  <span className="text-base">{badge.icon}</span>
                  <span className="whitespace-nowrap">{badge.title}</span>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onOpenRewards();
            }}
            className="shrink-0 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl text-xs font-fun font-bold shadow-sm hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Award className="w-4 h-4" />
            <span>Open Rewards Room</span>
          </button>
        </div>
      </div>
    </section>
  );
};
