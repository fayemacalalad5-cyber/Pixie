import React, { useState, useEffect } from 'react';
import { SubjectInfo, StudentProfile, ActivityQuestion } from '../types';
import { soundFx } from '../utils/sound';
import { PixieMascot } from './PixieMascot';
import {
  X,
  Volume2,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Trophy,
  Award,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface IslandQuizModalProps {
  subject: SubjectInfo;
  studentProfile: StudentProfile;
  questions: ActivityQuestion[];
  onClose: () => void;
  onFinishQuiz: (subjectId: SubjectInfo['id'], score: number, total: number, starsEarned: number) => void;
  equippedAccessoryId?: string | null;
}

export const IslandQuizModal: React.FC<IslandQuizModalProps> = ({
  subject,
  studentProfile,
  questions,
  onClose,
  onFinishQuiz,
  equippedAccessoryId
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<{
    status: 'idle' | 'correct' | 'incorrect';
    message: string;
  }>({ status: 'idle', message: '' });

  // Current question
  const currentQ = questions[currentIndex] || questions[0];

  // Drag Word State
  const [slots, setSlots] = useState<(string | null)[]>([]);
  const [availableLetters, setAvailableLetters] = useState<{ id: string; char: string }[]>([]);

  // Category Sort State
  const [sortedItems, setSortedItems] = useState<Record<string, string[]>>({});
  const [unassignedItems, setUnassignedItems] = useState(currentQ?.itemsToSort || []);

  // Sequence State
  const [sequenceSteps, setSequenceSteps] = useState(
    currentQ?.sequenceSteps ? [...currentQ.sequenceSteps].sort(() => Math.random() - 0.5) : []
  );

  // Math Counter Answer
  const [counterAnswer, setCounterAnswer] = useState<string | null>(null);

  // Choice Selection
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);

  // Initialize question state whenever index changes
  useEffect(() => {
    if (!currentQ) return;
    soundFx.speak(currentQ.instruction);

    if (currentQ.type === 'drag-word' && currentQ.targetWord) {
      setSlots(new Array(currentQ.targetWord.length).fill(null));
      const pool = currentQ.letterPool || currentQ.targetWord.split('');
      setAvailableLetters(
        pool.map((char, idx) => ({ id: `${char}-${idx}-${Math.random()}`, char }))
      );
    }

    if (currentQ.type === 'category-sort' && currentQ.categories) {
      const initialMap: Record<string, string[]> = {};
      currentQ.categories.forEach((c) => {
        initialMap[c.id] = [];
      });
      setSortedItems(initialMap);
      setUnassignedItems(currentQ.itemsToSort || []);
    }

    if (currentQ.type === 'sequence-sort' && currentQ.sequenceSteps) {
      setSequenceSteps([...currentQ.sequenceSteps].sort(() => Math.random() - 0.5));
    }

    setCounterAnswer(null);
    setSelectedChoiceId(null);
    setShowHint(false);
    setFeedback({ status: 'idle', message: '' });
  }, [currentIndex, currentQ]);

  const handleReadOutLoud = () => {
    soundFx.playClick();
    if (currentQ) {
      soundFx.speak(currentQ.instruction);
    }
  };

  // Progression to next question
  const handleAnswerResult = (isCorrect: boolean, feedbackMsg: string) => {
    if (feedback.status !== 'idle') return; // prevent duplicate clicks

    if (isCorrect) {
      soundFx.playCorrect();
      setScore((prev) => prev + 1);
      setUserAnswers((prev) => ({ ...prev, [currentIndex]: true }));
      setFeedback({ status: 'correct', message: feedbackMsg });
    } else {
      soundFx.playGentleRetry();
      setUserAnswers((prev) => ({ ...prev, [currentIndex]: false }));
      setFeedback({ status: 'incorrect', message: feedbackMsg });
    }

    // Auto advance after 1.2s or wait for next button
    setTimeout(() => {
      advanceNextQuestion(isCorrect);
    }, 1200);
  };

  const advanceNextQuestion = (lastWasCorrect: boolean) => {
    if (currentIndex + 1 >= questions.length) {
      // Completed all 10 questions!
      const finalScore = score + (lastWasCorrect ? 1 : 0);
      setIsFinished(true);
      soundFx.playFanfare();
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch {
        // ignore
      }
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // --- QUESTION HANDLERS ---
  const handleLetterSlotClick = (slotIndex: number) => {
    const existing = slots[slotIndex];
    if (existing) {
      soundFx.playPop();
      setAvailableLetters((prev) => [...prev, { id: `${existing}-${Date.now()}`, char: existing }]);
      const next = [...slots];
      next[slotIndex] = null;
      setSlots(next);
    }
  };

  const handlePickAvailableLetter = (letterObj: { id: string; char: string }) => {
    soundFx.playPop();
    const firstEmptyIndex = slots.findIndex((s) => s === null);
    if (firstEmptyIndex !== -1) {
      const nextSlots = [...slots];
      nextSlots[firstEmptyIndex] = letterObj.char;
      setSlots(nextSlots);
      setAvailableLetters((prev) => prev.filter((l) => l.id !== letterObj.id));

      if (nextSlots.every((s) => s !== null)) {
        const formed = nextSlots.join('');
        if (formed.toUpperCase() === (currentQ.targetWord || '').toUpperCase()) {
          handleAnswerResult(true, 'Amazing! You spelled the word perfectly!');
        } else {
          handleAnswerResult(false, 'Almost there! Keep practicing!');
        }
      }
    }
  };

  const handleSelectCountAnswer = (numStr: string) => {
    soundFx.playPop();
    setCounterAnswer(numStr);
    if (parseInt(numStr, 10) === currentQ.countTarget) {
      handleAnswerResult(true, `Super! Exactly ${currentQ.countTarget}!`);
    } else {
      handleAnswerResult(false, `Nice try! The correct count was ${currentQ.countTarget}.`);
    }
  };

  const handleSelectChoice = (opt: { id: string; label: string; isCorrect: boolean }) => {
    soundFx.playClick();
    setSelectedChoiceId(opt.id);
    if (opt.isCorrect) {
      handleAnswerResult(true, `Correct! ${opt.label}!`);
    } else {
      handleAnswerResult(false, `Good attempt! The correct answer is highlighted.`);
    }
  };

  // Final submit to parent
  const handleClaimQuizStars = () => {
    const starsEarned = score + (score === 10 ? 5 : 2); // bonus for high scores
    onFinishQuiz(subject.id, score, questions.length, starsEarned);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border-4 border-purple-200 overflow-hidden my-auto animate-float-slow">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-purple-50 via-pink-50 to-amber-50 border-b border-purple-100">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{studentProfile.avatar}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-purple-700 font-fun">
                  Island {subject.islandNumber}: {subject.title} Quiz
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-xs text-slate-500 font-medium">
                  {studentProfile.name} ({studentProfile.section})
                </span>
              </div>
              <h2 id="quiz-modal-title" className="text-base sm:text-lg font-fun font-bold text-slate-900">
                Question {currentIndex + 1} of {questions.length}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Live Score */}
            <div className="px-3 py-1.5 rounded-xl bg-amber-100 text-amber-900 font-fun font-bold text-xs flex items-center gap-1 shadow-xs">
              <span>⭐</span>
              <span>Score: {score} / {questions.length}</span>
            </div>

            {/* Read instruction */}
            <button
              onClick={handleReadOutLoud}
              title="Read instruction out loud"
              className="p-2.5 rounded-xl bg-white text-purple-700 border border-purple-200 hover:bg-purple-100 transition-colors shadow-xs cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
            </button>

            {/* Exit Quiz */}
            <button
              onClick={onClose}
              title="Close and return to map"
              className="p-2.5 rounded-xl bg-white text-slate-400 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition-colors shadow-xs cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar through 10 questions */}
        <div className="w-full bg-slate-100 h-2.5 border-b border-purple-100 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* ================= RESULTS CERTIFICATE SCREEN (AFTER Q10) ================= */}
        {isFinished ? (
          <div className="p-6 sm:p-10 text-center flex flex-col items-center bg-gradient-to-b from-purple-50 via-white to-amber-50">
            <div className="w-20 h-20 rounded-3xl bg-amber-400 text-white flex items-center justify-center text-4xl shadow-lg mb-4 animate-bounce">
              🏆
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-1">
              Official Quiz Completion Certificate
            </span>
            <h3 className="text-2xl sm:text-3xl font-fun font-bold text-slate-900 mb-2">
              Outstanding Work, {studentProfile.name}!
            </h3>

            {/* Student & Score Certificate Card */}
            <div className="w-full max-w-md bg-white border-2 border-amber-300 rounded-3xl p-6 shadow-md my-4 text-left">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <span className="text-xs font-fun font-bold text-slate-400 uppercase">
                  Island {subject.islandNumber} Quiz
                </span>
                <span className="text-xs font-fun font-bold text-purple-700 uppercase">
                  {studentProfile.grade.toUpperCase()}
                </span>
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-fun">
                <p>
                  <strong className="text-slate-900">Student Name:</strong> {studentProfile.name}
                </p>
                <p>
                  <strong className="text-slate-900">Class Section:</strong> {studentProfile.section}
                </p>
                <p>
                  <strong className="text-slate-900">Island World:</strong> {subject.subtitle}
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
                  <span className="text-base font-bold text-purple-900">Final Quiz Score:</span>
                  <span className="text-2xl font-bold text-amber-600 font-mono">
                    {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
                  </span>
                </div>
              </div>
            </div>

            {/* Stars Awarded Banner */}
            <div className="p-4 bg-amber-100 border border-amber-300 rounded-2xl flex items-center gap-3 text-amber-950 font-fun font-bold text-sm sm:text-base mb-6">
              <span className="text-3xl">⭐</span>
              <div>
                <p>You earned +{score + (score === 10 ? 5 : 2)} Stars for your Passport!</p>
                {score === 10 && <p className="text-xs text-amber-800">Perfect 10/10 Score Bonus Awarded!</p>}
              </div>
            </div>

            <button
              onClick={handleClaimQuizStars}
              className="px-8 py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-fun font-bold text-base rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Collect Stars & Return to World Map</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* ================= ACTIVE QUESTION VIEW (Q1 TO Q10) ================= */
          <div className="p-5 sm:p-8 flex flex-col justify-between min-h-[360px] bg-slate-50/50">
            {/* Question Prompt */}
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-100/70 px-3 py-1 rounded-full mb-2">
                <span>Question #{currentQ.questionNumber} of 10</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-fun font-bold text-slate-900">
                {currentQ.instruction}
              </h3>
            </div>

            {/* Arena Content based on type */}
            <div className="flex-1 flex flex-col items-center justify-center">
              {/* Type 1: Drag Word / Spelling */}
              {currentQ.type === 'drag-word' && (
                <div className="w-full flex flex-col items-center gap-5">
                  {currentQ.imageUrl && (
                    <div className="w-24 h-24 rounded-3xl bg-white border-2 border-purple-200 shadow-sm flex items-center justify-center text-5xl">
                      {currentQ.imageUrl}
                    </div>
                  )}

                  {/* Letter slots */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    {slots.map((char, index) => (
                      <div
                        key={index}
                        onClick={() => handleLetterSlotClick(index)}
                        role="button"
                        tabIndex={0}
                        title={char ? 'Tap to remove letter' : 'Letter slot'}
                        className={`w-14 h-16 sm:w-16 sm:h-20 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-fun font-bold transition-all cursor-pointer ${
                          char
                            ? 'bg-purple-600 text-white shadow-md border-2 border-purple-700 scale-105'
                            : 'bg-white border-2 border-dashed border-purple-300 text-purple-300'
                        }`}
                      >
                        {char || '_'}
                      </div>
                    ))}
                  </div>

                  {/* Available letter buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                    {availableLetters.map((l) => (
                      <button
                        key={l.id}
                        onClick={() => handlePickAvailableLetter(l)}
                        className="w-12 h-14 sm:w-14 sm:h-16 rounded-2xl bg-white border-2 border-amber-300 text-slate-800 font-fun font-bold text-2xl shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
                      >
                        {l.char}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Type 2: Count Drag */}
              {currentQ.type === 'count-drag' && (
                <div className="w-full flex flex-col items-center gap-6">
                  <div className="p-6 bg-white rounded-3xl border-2 border-amber-200 shadow-inner flex flex-wrap items-center justify-center gap-4 max-w-md">
                    {currentQ.countItems?.map((it) => (
                      <span key={it.id} className="text-4xl animate-bounce">
                        {it.emoji}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-fun font-semibold text-slate-700">
                      Tap the matching number:
                    </span>
                    <div className="flex items-center gap-2">
                      {currentQ.letterPool?.map((numStr) => (
                        <button
                          key={numStr}
                          onClick={() => handleSelectCountAnswer(numStr)}
                          className="w-14 h-14 rounded-2xl bg-white border-2 border-amber-400 hover:border-amber-500 text-slate-900 font-fun font-bold text-2xl shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
                        >
                          {numStr}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Type 3: Multiple Choice */}
              {(currentQ.type === 'choice' || !currentQ.type) && currentQ.options && (
                <div className="w-full max-w-md flex flex-col items-center gap-4">
                  {currentQ.imageUrl && (
                    <span className="text-5xl p-3 bg-white rounded-2xl shadow-xs border border-purple-100">
                      {currentQ.imageUrl}
                    </span>
                  )}

                  <div className="w-full flex flex-col gap-2.5">
                    {currentQ.options.map((opt) => {
                      const isSelected = selectedChoiceId === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectChoice(opt)}
                          className={`p-4 rounded-2xl border-2 font-fun text-sm sm:text-base font-semibold text-left transition-all cursor-pointer shadow-xs ${
                            isSelected
                              ? opt.isCorrect
                                ? 'bg-emerald-500 text-white border-emerald-600'
                                : 'bg-rose-100 text-rose-900 border-rose-300'
                              : 'bg-white hover:bg-purple-50 text-slate-800 border-purple-200 hover:scale-101'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Dynamic feedback banner */}
            {feedback.status !== 'idle' && (
              <div
                className={`mt-4 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-fun font-bold flex items-center justify-center gap-2 shadow-xs ${
                  feedback.status === 'correct'
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'bg-amber-100 text-amber-900 border border-amber-300'
                }`}
              >
                {feedback.status === 'correct' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                ) : (
                  <HelpCircle className="w-5 h-5 text-amber-600" />
                )}
                <span>{feedback.message}</span>
              </div>
            )}

            {/* Hint Box (if toggled) */}
            {showHint && (
              <div className="mt-4 px-4 py-2 bg-amber-50 border border-amber-200 rounded-2xl text-xs font-fun text-amber-900 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Pixie’s Clue: {currentQ.hint}</span>
              </div>
            )}

            {/* Footer Bottom Controls */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-fun">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setShowHint(!showHint);
                  if (!showHint) soundFx.speak(currentQ.hint);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-950 rounded-xl font-bold transition-colors cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{showHint ? 'Hide Clue' : 'Need a Clue?'}</span>
              </button>

              <span className="text-slate-400">
                Question {currentIndex + 1} of 10
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
