/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, NavigationTab } from './components/Navbar';
import { InteractiveBackground } from './components/InteractiveBackground';
import { StudentProfilePage } from './components/StudentProfilePage';
import { HeroSection } from './components/HeroSection';
import { WorldMap } from './components/WorldMap';
import { FeaturedMiniGame } from './components/FeaturedMiniGame';
import { HowPixieWorks } from './components/HowPixieWorks';
import { ModeOfUse } from './components/ModeOfUse';
import { ProgressPreview } from './components/ProgressPreview';
import { ParentTeacherGuide } from './components/ParentTeacherGuide';
import { AboutPixie } from './components/AboutPixie';
import { ExploreSubjects } from './components/ExploreSubjects';
import { ProgressPage } from './components/ProgressPage';
import { RewardsRoom } from './components/RewardsRoom';
import { IslandQuizModal } from './components/IslandQuizModal';
import { GameModal } from './components/GameModal';
import { SettingsModal } from './components/SettingsModal';
import { Footer } from './components/Footer';

import {
  GradeLevel,
  SubjectId,
  ActivityQuestion,
  UserProgress,
  AppSettings,
  StudentProfile
} from './types';
import { SUBJECTS, ACTIVITIES, getIslandQuiz } from './data/learningContent';
import {
  loadUserProgress,
  saveUserProgress,
  loadAppSettings,
  saveAppSettings,
  loadStudentProfile,
  saveStudentProfile,
  resetAllData,
  DEFAULT_PROGRESS
} from './utils/storage';
import { soundFx } from './utils/sound';
import { Sparkles } from 'lucide-react';

export default function App() {
  // Student Profile State (First Page)
  const [studentProfile, setStudentProfile] = useState<StudentProfile>(loadStudentProfile);
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(!studentProfile.isRegistered);

  // Navigation Tab State (Second Page)
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');

  // User Progress & Settings State
  const [userProgress, setUserProgress] = useState<UserProgress>(loadUserProgress);
  const [appSettings, setAppSettings] = useState<AppSettings>(loadAppSettings);

  // Active 10-Question Island Quiz State
  const [activeQuizSubject, setActiveQuizSubject] = useState<SubjectId | null>(null);

  // Active Quick Mini-Game Modal State
  const [activeActivity, setActiveActivity] = useState<ActivityQuestion | null>(null);

  // Settings Modal State
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Floating Mascot Help Bubble State
  const [showFloatingHint, setShowFloatingHint] = useState(false);

  // Sync sound manager settings on initial mount
  useEffect(() => {
    soundFx.setSoundEnabled(appSettings.soundEnabled);
    soundFx.setSpeechEnabled(appSettings.speechEnabled);
    if (appSettings.bgmEnabled) {
      soundFx.startBgm();
    }
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    saveUserProgress(userProgress);
  }, [userProgress]);

  useEffect(() => {
    saveAppSettings(appSettings);
  }, [appSettings]);

  useEffect(() => {
    saveStudentProfile(studentProfile);
  }, [studentProfile]);

  const handleGradeChange = (grade: GradeLevel) => {
    setStudentProfile((prev) => ({
      ...prev,
      grade
    }));
  };

  const handleToggleSound = () => {
    const next = !appSettings.soundEnabled;
    soundFx.setSoundEnabled(next);
    if (next) soundFx.playPop();
    setAppSettings((prev) => ({ ...prev, soundEnabled: next }));
  };

  const handleToggleBgm = () => {
    const next = !appSettings.bgmEnabled;
    if (next) {
      soundFx.startBgm();
    } else {
      soundFx.stopBgm();
    }
    setAppSettings((prev) => ({ ...prev, bgmEnabled: next }));
  };

  // Student Profile Submission (Transition from Page 1 to Page 2)
  const handleRegisterProfile = (newProfile: StudentProfile) => {
    setStudentProfile(newProfile);
    setIsEditingProfile(false);
    saveStudentProfile(newProfile);
    setCurrentTab('home');
  };

  // Start 10-Question Island Quiz
  const handleStartIslandQuiz = (subjectId: SubjectId) => {
    soundFx.playSparkle();
    setActiveQuizSubject(subjectId);
  };

  // Completed 10-Question Island Quiz
  const handleFinishIslandQuiz = (
    subjectId: SubjectId,
    score: number,
    total: number,
    starsEarned: number
  ) => {
    const quizKey = `${studentProfile.grade}-${subjectId}`;
    const percentage = Math.round((score / total) * 100);
    const completedAt = new Date().toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    setUserProgress((prev) => {
      const nextStars = prev.stars + starsEarned;
      const nextCompletedQuizzes = prev.completedQuizIds.includes(quizKey)
        ? prev.completedQuizIds
        : [...prev.completedQuizIds, quizKey];

      const nextScores = {
        ...prev.quizScores,
        [quizKey]: { score, total, percentage, completedAt }
      };

      const nextSubjectProgress = {
        ...prev.subjectProgress,
        [subjectId]: 100
      };

      // Check badge milestones
      const nextBadges = [...prev.unlockedBadgeIds];
      if (nextStars >= 1 && !nextBadges.includes('first-adventure')) {
        nextBadges.push('first-adventure');
      }
      if (nextStars >= 5 && !nextBadges.includes('letter-explorer')) {
        nextBadges.push('letter-explorer');
      }
      if (nextStars >= 10 && !nextBadges.includes('number-champion')) {
        nextBadges.push('number-champion');
      }
      if (nextStars >= 15 && !nextBadges.includes('little-scientist')) {
        nextBadges.push('little-scientist');
      }
      if (nextStars >= 20 && !nextBadges.includes('good-habits-hero')) {
        nextBadges.push('good-habits-hero');
      }
      if (nextStars >= 25 && !nextBadges.includes('super-learner')) {
        nextBadges.push('super-learner');
      }

      return {
        ...prev,
        stars: nextStars,
        completedQuizIds: nextCompletedQuizzes,
        quizScores: nextScores,
        subjectProgress: nextSubjectProgress,
        unlockedBadgeIds: nextBadges,
        todayCompletedCount: prev.todayCompletedCount + 1
      };
    });

    setActiveQuizSubject(null);
  };

  // Launch quick mini activity modal
  const handleLaunchActivity = (activity: ActivityQuestion) => {
    soundFx.playClick();
    setActiveActivity(activity);
  };

  const handleCompleteActivity = (starsEarned: number) => {
    if (!activeActivity) return;
    setUserProgress((prev) => ({
      ...prev,
      stars: prev.stars + starsEarned,
      todayCompletedCount: prev.todayCompletedCount + 1
    }));
    setActiveActivity(null);
  };

  // Earn instant bonus star from mini-game
  const handleEarnBonusStar = () => {
    setUserProgress((prev) => ({
      ...prev,
      stars: prev.stars + 1,
      todayCompletedCount: prev.todayCompletedCount + 1
    }));
  };

  // Claim daily quest
  const handleClaimDailyQuest = (questId: string, stars: number) => {
    setUserProgress((prev) => ({
      ...prev,
      stars: prev.stars + stars
    }));
  };

  // Equip accessory
  const handleEquipAccessory = (accessoryId: string | null) => {
    setUserProgress((prev) => ({
      ...prev,
      equippedAccessoryId: accessoryId
    }));
  };

  // Update daily goal
  const handleUpdateDailyGoal = (goal: number) => {
    setUserProgress((prev) => ({
      ...prev,
      dailyGoal: goal
    }));
  };

  // Reset all progress safely
  const handleResetProgress = () => {
    resetAllData();
    setUserProgress(DEFAULT_PROGRESS);
    soundFx.stopBgm();
    soundFx.playSparkle();
  };

  // If first visit or switching student, render FIRST PAGE (Student Profile Registration)
  if (!studentProfile.isRegistered || isEditingProfile) {
    return (
      <div className="min-h-screen flex flex-col relative text-slate-800 font-sans selection:bg-purple-200">
        <InteractiveBackground
          sparklesEnabled={appSettings.sparklesEnabled}
          reducedMotion={appSettings.reducedMotion}
          theme={appSettings.theme}
        />
        <main className="flex-1">
          <StudentProfilePage
            initialProfile={studentProfile}
            onRegister={handleRegisterProfile}
            bgmEnabled={appSettings.bgmEnabled}
            onToggleBgm={handleToggleBgm}
            soundEnabled={appSettings.soundEnabled}
            onToggleSound={handleToggleSound}
          />
        </main>
      </div>
    );
  }

  // SECOND PAGE: World Map with Quizzes per Island, Explore Subjects (Expected quiz topics), Rewards Room, Progress
  const activeQuizSubjectData = activeQuizSubject
    ? SUBJECTS.find((s) => s.id === activeQuizSubject) || SUBJECTS[0]
    : null;
  const activeQuizQuestions = activeQuizSubject
    ? getIslandQuiz(studentProfile.grade, activeQuizSubject)
    : [];

  return (
    <div className="min-h-screen flex flex-col relative text-slate-800 font-sans selection:bg-purple-200">
      {/* Background with floating bubbles and clouds */}
      <InteractiveBackground
        sparklesEnabled={appSettings.sparklesEnabled}
        reducedMotion={appSettings.reducedMotion}
        theme={appSettings.theme}
      />

      {/* Top Bar Navigation with Student Profile and Switch Student button */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        starsCount={userProgress.stars}
        soundEnabled={appSettings.soundEnabled}
        bgmEnabled={appSettings.bgmEnabled}
        onToggleSound={handleToggleSound}
        onToggleBgm={handleToggleBgm}
        onOpenSettings={() => setIsSettingsOpen(true)}
        studentProfile={studentProfile}
        onSwitchStudent={() => setIsEditingProfile(true)}
      />

      {/* Main Content Area based on currentTab */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            {/* 1. Hero Section */}
            <HeroSection
              currentGrade={studentProfile.grade}
              onSelectGrade={handleGradeChange}
              onStartLearning={() => {
                // Directly launch Island 1 Quiz
                handleStartIslandQuiz('english');
              }}
              onExploreSubjects={() => setCurrentTab('subjects')}
              equippedAccessoryId={userProgress.equippedAccessoryId}
            />

            {/* 2. Interactive World Map: 10-Question Island Quizzes per Island 1-4 */}
            <WorldMap
              studentProfile={studentProfile}
              userProgress={userProgress}
              onStartQuiz={handleStartIslandQuiz}
              onExploreSubject={(subId) => {
                setCurrentTab('subjects');
              }}
            />

            {/* 3. Featured Immediate Playable Mini-Game */}
            <FeaturedMiniGame onEarnStar={handleEarnBonusStar} />

            {/* 4. How PIXIE Works (8-Step Learning Process) */}
            <div id="how-pixie-works">
              <HowPixieWorks
                onTrySample={() => {
                  const sample = ACTIVITIES[0];
                  if (sample) handleLaunchActivity(sample);
                }}
              />
            </div>

            {/* 5. Mode of Use (9 Cards) */}
            <div id="mode-of-use">
              <ModeOfUse />
            </div>

            {/* 6. Learning Progress & Rewards Preview */}
            <ProgressPreview
              userProgress={userProgress}
              onViewAllProgress={() => setCurrentTab('progress')}
              onOpenRewards={() => setCurrentTab('rewards')}
            />

            {/* 7. Parent & Teacher Guide Preview */}
            <ParentTeacherGuide />

            {/* 8. About PIXIE Section */}
            <AboutPixie />
          </>
        )}

        {currentTab === 'subjects' && (
          <ExploreSubjects
            studentProfile={studentProfile}
            currentGrade={studentProfile.grade}
            onSelectGrade={handleGradeChange}
            onStartQuiz={handleStartIslandQuiz}
            userProgress={userProgress}
          />
        )}

        {currentTab === 'progress' && (
          <ProgressPage
            studentProfile={studentProfile}
            userProgress={userProgress}
            onUpdateDailyGoal={handleUpdateDailyGoal}
            onOpenRewards={() => setCurrentTab('rewards')}
            onStartQuiz={handleStartIslandQuiz}
          />
        )}

        {currentTab === 'rewards' && (
          <RewardsRoom
            userProgress={userProgress}
            onEquipAccessory={handleEquipAccessory}
            onClaimDailyQuest={handleClaimDailyQuest}
          />
        )}

        {currentTab === 'guide' && <ParentTeacherGuide />}
      </main>

      {/* Floating Pixie Mascot Help Button on Bottom Right */}
      <aside aria-label="Pixie mascot helper" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {showFloatingHint && (
          <div className="mb-3 max-w-xs p-3.5 bg-white/95 backdrop-blur-md border-2 border-amber-300 rounded-2xl shadow-xl text-xs font-fun text-slate-800 animate-float-slow">
            <p className="font-bold text-purple-700 mb-1 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Pixie’s Quick Tip for {studentProfile.name}:</span>
            </p>
            <p>
              Tap any island on the World Map to start its 10-Question Quiz! You can listen to calming music with the 🎵 button on top.
            </p>
          </div>
        )}

        <button
          onClick={() => {
            soundFx.playPop();
            setShowFloatingHint(!showFloatingHint);
          }}
          aria-label="Ask Teacher Pixie for a tip"
          className="w-14 h-14 rounded-full border-2 border-white shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer overflow-hidden bg-purple-100 ring-4 ring-purple-300/50"
        >
          <img
            src="/assets/pixie_teacher_avatar.png"
            alt="Teacher Pixie"
            className="w-full h-full object-cover"
          />
        </button>
      </aside>

      {/* 10-Question Island Quiz Modal */}
      {activeQuizSubjectData && (
        <IslandQuizModal
          subject={activeQuizSubjectData}
          studentProfile={studentProfile}
          questions={activeQuizQuestions}
          onClose={() => setActiveQuizSubject(null)}
          onFinishQuiz={handleFinishIslandQuiz}
          equippedAccessoryId={userProgress.equippedAccessoryId}
        />
      )}

      {/* Single Activity Game Modal (for quick mini challenges) */}
      {activeActivity && (
        <GameModal
          activity={activeActivity}
          onClose={() => setActiveActivity(null)}
          onComplete={handleCompleteActivity}
          equippedAccessoryId={userProgress.equippedAccessoryId}
        />
      )}

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={appSettings}
        onUpdateSettings={setAppSettings}
        onResetProgress={handleResetProgress}
      />

      {/* Footer */}
      <Footer
        onSelectTab={setCurrentTab}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />
    </div>
  );
}
