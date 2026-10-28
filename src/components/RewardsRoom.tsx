import React from 'react';
import { UserProgress, Accessory } from '../types';
import { BADGES, ACCESSORIES, DAILY_CHALLENGES } from '../data/learningContent';
import { PixieMascot } from './PixieMascot';
import { soundFx } from '../utils/sound';
import { Award, Sparkles, Check, Lock, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RewardsRoomProps {
  userProgress: UserProgress;
  onEquipAccessory: (accessoryId: string | null) => void;
  onClaimDailyQuest: (questId: string, stars: number) => void;
}

export const RewardsRoom: React.FC<RewardsRoomProps> = ({
  userProgress,
  onEquipAccessory,
  onClaimDailyQuest
}) => {
  const handleEquip = (acc: Accessory) => {
    if (userProgress.stars < acc.requiredStars) {
      soundFx.playGentleRetry();
      soundFx.speak(`You need ${acc.requiredStars} stars to unlock the ${acc.name}! Keep exploring!`);
      return;
    }

    soundFx.playSparkle();
    const isCurrentlyEquipped = userProgress.equippedAccessoryId === acc.id;
    const nextEquipped = isCurrentlyEquipped ? null : acc.id;
    onEquipAccessory(nextEquipped);

    if (!isCurrentlyEquipped) {
      soundFx.speak(`Yay! Pixie is now wearing the ${acc.name}! Look how magical!`);
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.5 }
        });
      } catch {
        // ignore
      }
    }
  };

  const handleClaimDaily = (quest: typeof DAILY_CHALLENGES[0]) => {
    soundFx.playCorrect();
    soundFx.playFanfare();
    soundFx.speak(`Quest completed! You earned ${quest.rewardStars} bonus stars!`);
    onClaimDailyQuest(quest.id, quest.rewardStars);
    try {
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 rounded-3xl p-6 sm:p-10 text-white shadow-lg mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-fun font-bold text-amber-200 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Magical Trophy Vault</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-fun font-bold">
            Pixie's Rewards Room
          </h1>
          <p className="text-purple-100 text-xs sm:text-sm mt-1 max-w-xl">
            Collect stars by playing educational games to unlock dazzling achievement badges and
            magical accessories for Pixie to wear!
          </p>
        </div>

        {/* Big Star Vault Badge */}
        <div className="flex items-center gap-4 bg-white/20 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/30 shadow-md">
          <span className="text-5xl animate-bounce">⭐</span>
          <div>
            <span className="text-xs font-fun font-semibold text-amber-200 uppercase">
              Total Stars Vault
            </span>
            <p className="text-3xl font-fun font-bold tabular-nums">
              {userProgress.stars} Stars
            </p>
          </div>
        </div>
      </div>

      {/* Dressing Room & Accessory Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Left: Pixie Wardrobe Showcase */}
        <div className="lg:col-span-5 bg-white rounded-3xl border-2 border-purple-100 p-6 sm:p-8 shadow-sm flex flex-col items-center justify-center text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
            Mascot Fitting Room
          </span>
          <h3 className="text-xl font-fun font-bold text-slate-900 mb-6">
            Pixie's Outfit
          </h3>

          <div className="py-4">
            <PixieMascot
              size="lg"
              equippedAccessoryId={userProgress.equippedAccessoryId}
              speechText="Do you like my outfit? Try unlocking more accessories below!"
              mood="happy"
            />
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 w-full text-xs text-slate-500 font-fun">
            {userProgress.equippedAccessoryId ? (
              <button
                onClick={() => onEquipAccessory(null)}
                className="text-rose-600 hover:underline font-bold cursor-pointer"
              >
                Take off current accessory
              </button>
            ) : (
              <span>Tap any unlocked accessory on the right to dress up Pixie!</span>
            )}
          </div>
        </div>

        {/* Right: Unlockable Accessories Grid */}
        <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-purple-100 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-fun font-bold text-slate-900">
                Unlockable Accessories
              </h3>
              <p className="text-xs text-slate-500">
                Spend stars to customize Pixie across the whole website!
              </p>
            </div>
            <Gift className="w-6 h-6 text-pink-500" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACCESSORIES.map((acc) => {
              const isUnlocked = userProgress.stars >= acc.requiredStars;
              const isEquipped = userProgress.equippedAccessoryId === acc.id;

              return (
                <div
                  key={acc.id}
                  onClick={() => handleEquip(acc)}
                  role="button"
                  tabIndex={0}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                    isEquipped
                      ? 'border-purple-600 bg-purple-50 ring-2 ring-purple-300'
                      : isUnlocked
                      ? 'border-slate-200 hover:border-purple-300 bg-white hover:bg-purple-50/40'
                      : 'border-slate-100 bg-slate-50 opacity-70'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{acc.icon}</span>
                    <div>
                      <h4 className="font-fun font-bold text-sm text-slate-900">
                        {acc.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1">
                        {acc.description}
                      </p>
                      <span className="text-[11px] font-semibold text-amber-600">
                        ⭐ {acc.requiredStars} Stars required
                      </span>
                    </div>
                  </div>

                  <div>
                    {isEquipped ? (
                      <span className="px-2.5 py-1 bg-purple-600 text-white rounded-xl text-xs font-fun font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        Equipped
                      </span>
                    ) : isUnlocked ? (
                      <button className="px-2.5 py-1 bg-white border border-purple-300 text-purple-700 rounded-xl text-xs font-fun font-bold hover:bg-purple-100">
                        Wear
                      </button>
                    ) : (
                      <span className="p-2 rounded-xl bg-slate-200 text-slate-500 flex items-center justify-center">
                        <Lock className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Achievement Badges Showcase */}
      <div className="bg-white rounded-3xl border-2 border-purple-100 p-6 sm:p-8 shadow-sm mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-fun font-bold text-slate-900">
              Achievement Badges
            </h3>
            <p className="text-xs text-slate-500">
              Special medals awarded for curiosity, practice, and mastery.
            </p>
          </div>
          <Award className="w-6 h-6 text-amber-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BADGES.map((b) => {
            const isUnlocked =
              userProgress.unlockedBadgeIds.includes(b.id) ||
              userProgress.stars >= b.requiredStars;

            return (
              <div
                key={b.id}
                className={`p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ${
                  isUnlocked
                    ? 'border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xs'
                    : 'border-slate-100 bg-slate-50 opacity-60'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-xs ${
                    isUnlocked
                      ? 'bg-gradient-to-tr from-amber-400 to-yellow-300'
                      : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  {isUnlocked ? b.icon : '🔒'}
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-fun font-bold text-sm text-slate-900">
                      {b.title}
                    </h4>
                    {isUnlocked && (
                      <span className="text-[10px] font-fun font-bold px-2 py-0.5 bg-amber-200 text-amber-900 rounded-full">
                        Unlocked!
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">
                    {b.description}
                  </p>
                  <span className="text-[11px] font-medium text-slate-500 mt-1 block">
                    Requires {b.requiredStars} stars
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Daily Challenges Section */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 rounded-3xl border-2 border-emerald-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Daily Missions
            </span>
            <h3 className="text-xl font-fun font-bold text-slate-900">
              Today's Star Quests
            </h3>
          </div>
          <span className="text-2xl">🌱</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DAILY_CHALLENGES.map((quest) => (
            <div
              key={quest.id}
              className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{quest.emoji}</span>
                  <span className="text-xs font-fun font-bold text-emerald-800">
                    {quest.subject}
                  </span>
                </div>
                <h4 className="font-fun font-bold text-sm text-slate-900 mb-1">
                  {quest.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {quest.task}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-fun font-bold text-amber-600">
                  +{quest.rewardStars} Stars
                </span>
                <button
                  onClick={() => handleClaimDaily(quest)}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-fun font-bold transition-all active:scale-95 cursor-pointer shadow-xs"
                >
                  Mark Complete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
