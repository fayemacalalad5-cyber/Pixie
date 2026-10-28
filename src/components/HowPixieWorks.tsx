import React, { useState } from 'react';
import { soundFx } from '../utils/sound';
import {
  Globe,
  GraduationCap,
  Sparkles,
  Volume2,
  Gamepad2,
  Smile,
  Award,
  ClipboardCheck,
  Play,
  Check
} from 'lucide-react';

interface HowPixieWorksProps {
  onTrySample: () => void;
}

export const HowPixieWorks: React.FC<HowPixieWorksProps> = ({ onTrySample }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: 'Open the Website',
      icon: Globe,
      color: 'from-sky-400 to-blue-500',
      tag: 'Step 1: Access',
      explanation:
        'The teacher, parent, or guardian opens PIXIE using any modern web browser. The friendly mascot Pixie greets learners with cheerful animations and a clear Start Learning button.',
      feature: 'Homepage welcome banner, Pixie greeting, and sound controls.'
    },
    {
      num: 2,
      title: 'Choose a Grade Level',
      icon: GraduationCap,
      color: 'from-purple-400 to-indigo-500',
      tag: 'Step 2: Readiness',
      explanation:
        'The adult helps the learner pick Kindergarten (Little Learners), Grade 1 (Growing Explorers), or Grade 2 (Super Discoverers) matching their developmental stage.',
      feature: 'Age-appropriate difficulty scaling with big, touch-friendly level cards.'
    },
    {
      num: 3,
      title: 'Select a Learning Area',
      icon: Sparkles,
      color: 'from-amber-400 to-orange-500',
      tag: 'Step 3: Exploration',
      explanation:
        'Together, choose one of the four magical worlds: English, Mathematics, Science, or Good Habits, each with its own island theme and learning targets.',
      feature: 'Illustrated island world cards highlighting specific skills.'
    },
    {
      num: 4,
      title: 'Explain the Instructions',
      icon: Volume2,
      color: 'from-emerald-400 to-teal-500',
      tag: 'Step 4: Orientation',
      explanation:
        'The supporting adult reads the directions or taps the Listen button for child-friendly spoken narration. Pixie offers helpful hints whenever needed.',
      feature: 'Spoken audio narration, visual examples, and Pixie hint button.'
    },
    {
      num: 5,
      title: 'Complete the Game',
      icon: Gamepad2,
      color: 'from-pink-400 to-rose-500',
      tag: 'Step 5: Interaction',
      explanation:
        'Learners match, drag-and-drop, tap, or sort objects on the screen. Touch devices and mouse inputs are both supported with keyboard accessible fallbacks.',
      feature: 'Interactive drag-and-drop word builder, counters, and sorting buckets.'
    },
    {
      num: 6,
      title: 'Receive Feedback',
      icon: Smile,
      color: 'from-cyan-400 to-sky-500',
      tag: 'Step 6: Encouragement',
      explanation:
        'Immediate, cheerful responses praise correct answers ("Amazing! You got it!"). Mistakes are met with gentle hints and zero penalty, encouraging persistence.',
      feature: 'Positive reinforcement, sound chimes, and supportive cues.'
    },
    {
      num: 7,
      title: 'Earn Points & Rewards',
      icon: Award,
      color: 'from-yellow-400 to-amber-500',
      tag: 'Step 7: Motivation',
      explanation:
        'Every completed activity awards stars, updates progress bars, and unlocks shiny achievement badges and mascot accessories in the Rewards Room.',
      feature: 'Star counter, badge unlocks, and customizable Pixie dress-up wardrobe.'
    },
    {
      num: 8,
      title: 'Review the Results',
      icon: ClipboardCheck,
      color: 'from-violet-400 to-purple-500',
      tag: 'Step 8: Guided Reflection',
      explanation:
        'Teachers and parents review completed activities with the pupil, discussing what was learned and celebrating effort and curiosity together.',
      feature: 'Learning Journey progress tracker and review recommendations.'
    }
  ];

  const handleStepClick = (num: number) => {
    soundFx.playClick();
    setActiveStep(num);
  };

  return (
    <section className="my-12 sm:my-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-fun font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>Complete 8-Step Learning Process</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-fun font-bold text-slate-900 tracking-tight">
          How PIXIE Works
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          From opening the site to celebrating earned star badges, discover the guided journey
          designed to empower children, teachers, and parents.
        </p>
      </div>

      {/* Interactive Process Pipeline visualization */}
      <div className="mb-10 p-4 bg-white rounded-3xl border-2 border-purple-100 shadow-sm overflow-x-auto">
        <div className="flex items-center justify-between min-w-[760px] gap-2">
          {steps.map((st, i) => {
            const isSelected = activeStep === st.num;
            return (
              <React.Fragment key={st.num}>
                <button
                  onClick={() => handleStepClick(st.num)}
                  className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-purple-600 text-white shadow-md scale-105'
                      : 'hover:bg-purple-50 text-slate-600'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-fun font-bold text-sm ${
                      isSelected ? 'bg-white text-purple-700' : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {st.num}
                  </div>
                  <span className="text-[11px] font-fun whitespace-nowrap font-medium">
                    {st.title.split(' ')[0]}
                  </span>
                </button>

                {i < steps.length - 1 && (
                  <div className="w-4 h-0.5 bg-purple-200 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Active Step Spotlight Card */}
      {(() => {
        const current = steps.find((s) => s.num === activeStep) || steps[0];
        const IconComponent = current.icon;
        return (
          <div className="p-6 sm:p-8 bg-gradient-to-r from-purple-50 via-white to-pink-50 rounded-3xl border-2 border-purple-200 shadow-md mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${current.color} text-white flex items-center justify-center shrink-0 shadow-md`}
              >
                <IconComponent className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">
                  {current.tag}
                </span>
                <h3 className="text-2xl font-fun font-bold text-slate-900 mt-0.5">
                  Step {current.num}: {current.title}
                </h3>
                <p className="text-slate-700 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                  {current.explanation}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-fun text-purple-900 bg-purple-100/70 px-3 py-1.5 rounded-xl w-fit">
                  <Check className="w-4 h-4 text-purple-700" />
                  <span>Key Feature: {current.feature}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  soundFx.playClick();
                  onTrySample();
                }}
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-fun font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Try a Sample Activity</span>
              </button>
            </div>
          </div>
        );
      })()}

      {/* 8-Step Grid for Complete Viewing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((st) => {
          const IconComp = st.icon;
          const isSelected = activeStep === st.num;
          return (
            <div
              key={st.num}
              onClick={() => handleStepClick(st.num)}
              role="button"
              tabIndex={0}
              className={`p-5 rounded-3xl bg-white border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
                isSelected
                  ? 'border-purple-500 shadow-md ring-2 ring-purple-200'
                  : 'border-slate-100 hover:border-purple-200 hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 font-fun font-bold text-xs flex items-center justify-center">
                    0{st.num}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${st.color} text-white flex items-center justify-center`}
                  >
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="font-fun font-bold text-base text-slate-900 mb-1">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {st.explanation}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-purple-700 font-medium">
                {st.feature}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
