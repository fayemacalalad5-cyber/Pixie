import React, { useState, useEffect } from 'react';
import { ActivityQuestion, SubjectId, GradeLevel } from '../types';
import { soundFx } from '../utils/sound';
import { PixieMascot } from './PixieMascot';
import {
  X,
  Volume2,
  Sparkles,
  RotateCcw,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface GameModalProps {
  activity: ActivityQuestion;
  onClose: () => void;
  onComplete: (starsEarned: number) => void;
  equippedAccessoryId?: string | null;
}

export const GameModal: React.FC<GameModalProps> = ({
  activity,
  onClose,
  onComplete,
  equippedAccessoryId
}) => {
  // Game states
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<{
    status: 'idle' | 'correct' | 'incorrect' | 'completed';
    message: string;
  }>({ status: 'idle', message: '' });

  // Drag word state (e.g. English Spelling)
  const targetWord = activity.targetWord || '';
  const [slots, setSlots] = useState<(string | null)[]>([]);
  const [availableLetters, setAvailableLetters] = useState<{ id: string; char: string }[]>([]);
  const [draggedLetter, setDraggedLetter] = useState<{ id: string; char: string } | null>(null);

  // Category sort state (e.g. Science Habitats, Good Habits)
  const [sortedItems, setSortedItems] = useState<Record<string, string[]>>({});
  const [unassignedItems, setUnassignedItems] = useState(activity.itemsToSort || []);
  const [draggedSortItem, setDraggedSortItem] = useState<{ id: string; name: string; emoji: string } | null>(null);

  // Sequence state (e.g. Handwashing steps)
  const [sequenceSteps, setSequenceSteps] = useState(
    activity.sequenceSteps ? [...activity.sequenceSteps].sort(() => Math.random() - 0.5) : []
  );

  // Math Drag & Counter state
  const [counterAnswer, setCounterAnswer] = useState<string | null>(null);

  // Multiple choice state
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);

  // Initialize activity states
  useEffect(() => {
    soundFx.speak(activity.instruction);

    if (activity.type === 'drag-word' && targetWord) {
      setSlots(new Array(targetWord.length).fill(null));
      const pool = activity.letterPool || targetWord.split('');
      setAvailableLetters(
        pool.map((char, idx) => ({ id: `${char}-${idx}-${Math.random()}`, char }))
      );
    }

    if (activity.type === 'category-sort' && activity.categories) {
      const initialMap: Record<string, string[]> = {};
      activity.categories.forEach((c) => {
        initialMap[c.id] = [];
      });
      setSortedItems(initialMap);
      setUnassignedItems(activity.itemsToSort || []);
    }

    if (activity.type === 'sequence-sort' && activity.sequenceSteps) {
      setSequenceSteps([...activity.sequenceSteps].sort(() => Math.random() - 0.5));
    }

    setFeedback({ status: 'idle', message: '' });
    setShowHint(false);
  }, [activity]);

  // Audio narration handler
  const handleReadInstruction = () => {
    soundFx.playClick();
    soundFx.speak(activity.instruction);
  };

  // ------------------ WORD SPELLING LOGIC ------------------
  const handleLetterSlotClick = (slotIndex: number) => {
    const existing = slots[slotIndex];
    if (existing) {
      soundFx.playPop();
      setAvailableLetters((prev) => [...prev, { id: `${existing}-${Date.now()}`, char: existing }]);
      const nextSlots = [...slots];
      nextSlots[slotIndex] = null;
      setSlots(nextSlots);
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

      // Check if full
      if (nextSlots.every((s) => s !== null)) {
        verifyWord(nextSlots.join(''));
      }
    }
  };

  const verifyWord = (formed: string) => {
    if (formed.toUpperCase() === targetWord.toUpperCase()) {
      handleSuccess('Amazing! You spelled the word perfectly!');
    } else {
      handleMistake('Almost there! Look at the letters and try again.');
    }
  };

  // ------------------ CATEGORY SORT LOGIC ------------------
  const handleSortItemIntoCategory = (categoryId: string, item: { id: string; name: string; emoji: string }) => {
    soundFx.playPop();
    const catConfig = activity.categories?.find((c) => c.id === categoryId);
    if (!catConfig) return;

    const isMatch = catConfig.accepts.includes(item.id);
    if (isMatch) {
      setSortedItems((prev) => ({
        ...prev,
        [categoryId]: [...prev[categoryId], item.id]
      }));
      const remaining = unassignedItems.filter((i) => i.id !== item.id);
      setUnassignedItems(remaining);

      if (remaining.length === 0) {
        handleSuccess('Brilliant work! You sorted every single item into its right home!');
      } else {
        soundFx.playCorrect();
        setFeedback({ status: 'correct', message: `Great match for ${item.name}!` });
      }
    } else {
      handleMistake(`Hmm, ${item.name} belongs in a different place. Let's try another!`);
    }
  };

  // ------------------ SEQUENCE STEP LOGIC ------------------
  const handleMoveStep = (currentIndex: number, direction: 'up' | 'down') => {
    soundFx.playClick();
    const newIdx = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (newIdx < 0 || newIdx >= sequenceSteps.length) return;

    const updated = [...sequenceSteps];
    const temp = updated[currentIndex];
    updated[currentIndex] = updated[newIdx];
    updated[newIdx] = temp;
    setSequenceSteps(updated);

    // Verify order
    const isOrdered = updated.every((step, idx) => step.order === idx + 1);
    if (isOrdered) {
      handleSuccess('Outstanding! The steps are in the perfect order!');
    }
  };

  // ------------------ COUNT DRAG LOGIC ------------------
  const handleSelectCountAnswer = (numStr: string) => {
    soundFx.playPop();
    setCounterAnswer(numStr);
    if (parseInt(numStr, 10) === activity.countTarget) {
      handleSuccess(`Woohoo! Exactly ${activity.countTarget}! You counted so carefully!`);
    } else {
      handleMistake(`Count one more time! Point with your finger and count slowly.`);
    }
  };

  // ------------------ MULTIPLE CHOICE LOGIC ------------------
  const handleSelectChoice = (choice: { id: string; label: string; isCorrect: boolean }) => {
    soundFx.playClick();
    setSelectedChoiceId(choice.id);
    if (choice.isCorrect) {
      handleSuccess(`Spot on! "${choice.label}" is the correct answer!`);
    } else {
      handleMistake('Good try! Take a look at the clue and give it another shot.');
    }
  };

  // Common feedback triggers
  const handleSuccess = (msg: string) => {
    soundFx.playCorrect();
    soundFx.playFanfare();
    soundFx.speak(msg);
    setFeedback({ status: 'completed', message: msg });

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleMistake = (msg: string) => {
    soundFx.playGentleRetry();
    soundFx.speak(msg);
    setFeedback({ status: 'incorrect', message: msg });
  };

  const handleResetActivity = () => {
    soundFx.playClick();
    if (activity.type === 'drag-word' && targetWord) {
      setSlots(new Array(targetWord.length).fill(null));
      const pool = activity.letterPool || targetWord.split('');
      setAvailableLetters(
        pool.map((char, idx) => ({ id: `${char}-${idx}-${Math.random()}`, char }))
      );
    }
    if (activity.type === 'category-sort' && activity.categories) {
      const initialMap: Record<string, string[]> = {};
      activity.categories.forEach((c) => {
        initialMap[c.id] = [];
      });
      setSortedItems(initialMap);
      setUnassignedItems(activity.itemsToSort || []);
    }
    if (activity.type === 'sequence-sort' && activity.sequenceSteps) {
      setSequenceSteps([...activity.sequenceSteps].sort(() => Math.random() - 0.5));
    }
    setCounterAnswer(null);
    setSelectedChoiceId(null);
    setFeedback({ status: 'idle', message: '' });
    setShowHint(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="game-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border-4 border-purple-200 overflow-hidden my-auto animate-float-slow">
        {/* Top Game Bar */}
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-purple-50 via-pink-50 to-amber-50 border-b border-purple-100">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{activity.imageUrl || '✨'}</span>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-purple-700">
                {activity.grade.toUpperCase()} · {activity.subjectId.toUpperCase()}
              </span>
              <h2 id="game-modal-title" className="text-lg sm:text-xl font-fun font-bold text-slate-900">
                {activity.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Listen button */}
            <button
              onClick={handleReadInstruction}
              title="Hear instructions out loud"
              className="p-2.5 rounded-2xl bg-white text-purple-700 border border-purple-200 hover:bg-purple-100 transition-colors shadow-xs cursor-pointer flex items-center gap-1.5 text-xs font-fun font-semibold"
            >
              <Volume2 className="w-4 h-4" />
              <span className="hidden sm:inline">Listen</span>
            </button>

            {/* Reset button */}
            <button
              onClick={handleResetActivity}
              title="Start over"
              className="p-2.5 rounded-2xl bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 transition-colors shadow-xs cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              title="Return to world map"
              className="p-2.5 rounded-2xl bg-white text-slate-500 border border-slate-200 hover:bg-rose-50 hover:text-rose-600 transition-colors shadow-xs cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Instructions banner */}
        <div className="px-5 py-3.5 bg-purple-100/60 border-b border-purple-100 flex items-center justify-between gap-3 text-slate-800 text-sm font-medium">
          <p className="leading-snug">{activity.instruction}</p>
          <button
            onClick={() => {
              soundFx.playClick();
              setShowHint(!showHint);
              if (!showHint) soundFx.speak(activity.hint);
            }}
            className="shrink-0 flex items-center gap-1 px-3 py-1.5 bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-xl text-xs font-fun font-bold transition-transform active:scale-95 cursor-pointer shadow-xs"
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>{showHint ? 'Hide Hint' : 'Hint'}</span>
          </button>
        </div>

        {/* Hint Box (if toggled) */}
        {showHint && (
          <div className="px-5 py-2.5 bg-amber-50 border-b border-amber-200 text-amber-900 text-xs sm:text-sm font-fun flex items-center gap-2">
            <span>💡 Pixie’s Hint:</span>
            <span>{activity.hint}</span>
          </div>
        )}

        {/* Game Arena Body */}
        <div className="p-5 sm:p-8 min-h-[280px] flex flex-col justify-center items-center bg-slate-50/50">
          {/* ================= TYPE 1: DRAG WORD / SPELLING ================= */}
          {activity.type === 'drag-word' && (
            <div className="w-full flex flex-col items-center gap-6">
              {/* Word Visual Cue */}
              <div className="w-24 h-24 rounded-3xl bg-white border-2 border-purple-200 shadow-md flex items-center justify-center text-5xl">
                {activity.imageUrl}
              </div>

              {/* Word Slots */}
              <div className="flex items-center gap-2 sm:gap-3">
                {slots.map((char, index) => (
                  <div
                    key={index}
                    onClick={() => handleLetterSlotClick(index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      if (draggedLetter) {
                        const nextSlots = [...slots];
                        nextSlots[index] = draggedLetter.char;
                        setSlots(nextSlots);
                        setAvailableLetters((prev) => prev.filter((l) => l.id !== draggedLetter.id));
                        setDraggedLetter(null);
                        soundFx.playPop();
                        if (nextSlots.every((s) => s !== null)) {
                          verifyWord(nextSlots.join(''));
                        }
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    title={char ? 'Tap to remove letter' : 'Drop letter here'}
                    className={`w-14 h-16 sm:w-16 sm:h-20 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-fun font-bold transition-all cursor-pointer ${
                      char
                        ? 'bg-purple-600 text-white shadow-md border-2 border-purple-700 scale-105'
                        : 'bg-white border-2 border-dashed border-purple-300 text-purple-300 hover:border-purple-400'
                    }`}
                  >
                    {char || '_'}
                  </div>
                ))}
              </div>

              {/* Available Letters Pool */}
              <div className="w-full pt-4 border-t border-slate-200 flex flex-col items-center">
                <span className="text-xs font-semibold text-slate-500 mb-2">
                  Drag or Tap Letters Below:
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  {availableLetters.map((l) => (
                    <button
                      key={l.id}
                      draggable
                      onDragStart={() => setDraggedLetter(l)}
                      onClick={() => handlePickAvailableLetter(l)}
                      className="w-12 h-14 sm:w-14 sm:h-16 rounded-2xl bg-white border-2 border-amber-300 text-slate-800 font-fun font-bold text-2xl shadow-sm hover:scale-110 active:scale-95 hover:border-amber-400 hover:bg-amber-50 transition-all cursor-pointer flex items-center justify-center"
                    >
                      {l.char}
                    </button>
                  ))}
                  {availableLetters.length === 0 && slots.every((s) => s !== null) && (
                    <span className="text-xs text-emerald-600 font-fun font-bold">
                      All slots filled!
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ================= TYPE 2: COUNT & DRAG / MATH ================= */}
          {activity.type === 'count-drag' && (
            <div className="w-full flex flex-col items-center gap-6">
              {/* Counter Items Container */}
              <div className="p-6 bg-white rounded-3xl border-2 border-amber-200 shadow-inner flex flex-wrap items-center justify-center gap-4 max-w-md">
                {activity.countItems?.map((item) => (
                  <span
                    key={item.id}
                    className="text-4xl sm:text-5xl animate-bounce hover:scale-125 transition-transform cursor-pointer"
                    title={item.name}
                  >
                    {item.emoji}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-fun font-semibold text-slate-700">
                  Target Answer Box:
                </span>
                <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white font-fun font-bold text-3xl flex items-center justify-center shadow-md">
                  {counterAnswer || '?'}
                </div>
              </div>

              {/* Number choices to tap/drag */}
              <div className="flex items-center gap-3">
                {activity.letterPool?.map((numStr) => (
                  <button
                    key={numStr}
                    onClick={() => handleSelectCountAnswer(numStr)}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-amber-300 hover:border-amber-500 text-slate-900 font-fun font-bold text-2xl shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  >
                    {numStr}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ================= TYPE 3: CATEGORY SORT (HABITATS / GOOD HABITS) ================= */}
          {activity.type === 'category-sort' && activity.categories && (
            <div className="w-full flex flex-col gap-6">
              {/* Category Drop Buckets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {activity.categories.map((cat) => {
                  const itemsInCat = activity.itemsToSort?.filter((item) =>
                    sortedItems[cat.id]?.includes(item.id)
                  ) || [];

                  return (
                    <div
                      key={cat.id}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        e.preventDefault();
                        if (draggedSortItem) {
                          handleSortItemIntoCategory(cat.id, draggedSortItem);
                          setDraggedSortItem(null);
                        }
                      }}
                      className="p-4 rounded-2xl bg-white border-2 border-purple-200 shadow-sm flex flex-col items-center min-h-[140px]"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-fun font-bold text-purple-800 mb-2">
                        <span>{cat.icon}</span>
                        <span>{cat.title}</span>
                      </div>

                      {/* Placed items */}
                      <div className="flex flex-wrap gap-2 justify-center w-full min-h-[60px] p-2 bg-purple-50/50 rounded-xl border border-dashed border-purple-200">
                        {itemsInCat.map((it) => (
                          <div
                            key={it.id}
                            className="flex items-center gap-1 px-2.5 py-1 bg-white rounded-lg shadow-xs border border-purple-100 text-xs font-fun"
                          >
                            <span>{it.emoji}</span>
                            <span className="font-medium text-slate-700">{it.name}</span>
                          </div>
                        ))}
                        {itemsInCat.length === 0 && (
                          <span className="text-[11px] text-slate-400 self-center font-fun">
                            Drop items here
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Items Remaining to Sort */}
              <div className="pt-4 border-t border-slate-200 flex flex-col items-center">
                <span className="text-xs font-semibold text-slate-500 mb-2">
                  Drag an item into a bucket, or tap an item then tap its bucket:
                </span>
                <div className="flex flex-wrap justify-center gap-3">
                  {unassignedItems.map((item) => (
                    <div
                      key={item.id}
                      draggable
                      onDragStart={() => setDraggedSortItem(item)}
                      className="px-4 py-2.5 bg-white border-2 border-emerald-300 rounded-2xl shadow-sm hover:scale-105 active:scale-95 transition-all cursor-grab flex items-center gap-2 text-sm font-fun font-semibold text-slate-800"
                    >
                      <span className="text-2xl">{item.emoji}</span>
                      <span>{item.name}</span>
                      {/* Touch friendly Quick Sort buttons for small screens */}
                      <div className="flex items-center gap-1 ml-2">
                        {activity.categories?.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => handleSortItemIntoCategory(cat.id, item)}
                            title={`Place into ${cat.title}`}
                            className="px-1.5 py-0.5 rounded bg-purple-100 hover:bg-purple-200 text-xs text-purple-700 cursor-pointer"
                          >
                            {cat.icon}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  {unassignedItems.length === 0 && (
                    <span className="text-sm font-fun font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-5 h-5" />
                      All items placed!
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ================= TYPE 4: SEQUENCE SORT (HANDWASHING STEPS) ================= */}
          {activity.type === 'sequence-sort' && (
            <div className="w-full flex flex-col gap-3 max-w-lg">
              <span className="text-xs text-center text-slate-500 font-semibold mb-1">
                Use arrows to arrange steps in order from Step 1 to Step 4:
              </span>
              {sequenceSteps.map((step, idx) => (
                <div
                  key={step.id}
                  className="flex items-center justify-between p-3.5 bg-white border-2 border-pink-200 rounded-2xl shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-pink-100 text-pink-700 font-fun font-bold flex items-center justify-center text-sm">
                      {idx + 1}
                    </span>
                    <span className="text-2xl">{step.emoji}</span>
                    <span className="text-xs sm:text-sm font-fun text-slate-800">
                      {step.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      disabled={idx === 0}
                      onClick={() => handleMoveStep(idx, 'up')}
                      className="p-1.5 rounded-lg bg-slate-100 disabled:opacity-30 hover:bg-purple-100 text-slate-700 cursor-pointer"
                    >
                      ▲
                    </button>
                    <button
                      disabled={idx === sequenceSteps.length - 1}
                      onClick={() => handleMoveStep(idx, 'down')}
                      className="p-1.5 rounded-lg bg-slate-100 disabled:opacity-30 hover:bg-purple-100 text-slate-700 cursor-pointer"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================= TYPE 5: MULTIPLE CHOICE ================= */}
          {activity.type === 'choice' && activity.options && (
            <div className="w-full flex flex-col items-center gap-6 max-w-md">
              {activity.imageUrl && (
                <div className="text-5xl p-4 bg-white rounded-2xl border border-purple-100 shadow-sm">
                  {activity.imageUrl}
                </div>
              )}

              <div className="w-full flex flex-col gap-2.5">
                {activity.options.map((opt) => {
                  const isSelected = selectedChoiceId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectChoice(opt)}
                      className={`p-3.5 sm:p-4 rounded-2xl border-2 font-fun text-sm sm:text-base font-semibold text-left transition-all cursor-pointer shadow-xs ${
                        isSelected
                          ? opt.isCorrect
                            ? 'bg-emerald-500 text-white border-emerald-600 scale-102'
                            : 'bg-rose-100 text-rose-900 border-rose-300'
                          : 'bg-white hover:bg-purple-50 text-slate-800 border-purple-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Feedback message banner */}
          {feedback.status !== 'idle' && (
            <div
              className={`mt-6 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-fun font-bold flex items-center gap-2 shadow-xs ${
                feedback.status === 'completed'
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : feedback.status === 'correct'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-amber-50 text-amber-900 border border-amber-200'
              }`}
            >
              {feedback.status === 'completed' || feedback.status === 'correct' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              ) : (
                <HelpCircle className="w-5 h-5 text-amber-600" />
              )}
              <span>{feedback.message}</span>
            </div>
          )}
        </div>

        {/* Completion Action Footer */}
        {feedback.status === 'completed' ? (
          <div className="p-4 sm:p-6 bg-emerald-50 border-t border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl animate-bounce">🌟</span>
              <div>
                <p className="font-fun font-bold text-emerald-950 text-base">
                  Activity Complete! +3 Stars Earned!
                </p>
                <p className="text-xs text-emerald-800">
                  Great job practicing your skills with Pixie!
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                soundFx.playClick();
                onComplete(3);
              }}
              className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-fun font-bold text-base shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Collect Stars & Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="px-5 py-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-fun">
            <span>Take your time! Learning is an adventure.</span>
            <span>PIXIE Guided Practice</span>
          </div>
        )}
      </div>
    </div>
  );
};
