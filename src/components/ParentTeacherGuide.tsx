import React, { useState } from 'react';
import {
  BookOpen,
  Heart,
  CheckCircle,
  Users,
  Home,
  Sparkles,
  HelpCircle,
  Lightbulb,
  Printer
} from 'lucide-react';
import { soundFx } from '../utils/sound';

export const ParentTeacherGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'classroom' | 'home' | 'tips'>('overview');

  const printGuide = () => {
    soundFx.playClick();
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <section className="my-12 sm:my-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl border-2 border-purple-100 p-6 sm:p-10 shadow-sm">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-purple-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-purple-700 mb-1">
              <BookOpen className="w-4 h-4 text-purple-600" />
              <span>Pedagogical Companion</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-fun font-bold text-slate-900">
              Parent & Teacher Guide
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              How educators and guardians can effectively facilitate guided educational sessions,
              scaffold drag-and-drop interactions, and inspire joyful early childhood learning.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={printGuide}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl text-xs font-fun font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print Guide</span>
            </button>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: '1. Educational Philosophy' },
            { id: 'classroom', label: '2. Classroom Integration' },
            { id: 'home', label: '3. Home Learning' },
            { id: 'tips', label: '4. Positive Coaching Tips' }
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => {
                soundFx.playClick();
                setActiveTab(t.id as unknown as 'overview');
              }}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-fun font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === t.id
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-purple-50 text-purple-800 hover:bg-purple-100'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content Tab 1: Educational Philosophy */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
              <h3 className="text-lg font-fun font-bold text-purple-950 mb-2 flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-600" />
                <span>Supplementary Tool, Not a Replacement</span>
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                PIXIE is designed intentionally as a <strong>supplementary educational resource</strong>{' '}
                to strengthen concepts introduced in the classroom. It is not intended to replace
                teachers, physical textbooks, manipulatives, or storytelling. Children achieve the
                highest developmental gains when an adult sits alongside them to read instructions,
                ask clarifying questions, and celebrate their curiosity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <h4 className="font-fun font-bold text-slate-900 text-sm mb-1.5">
                  Developmental Scaffolding
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Start each game with an adult demonstration. Model how to touch or click a letter,
                  drag it into position, and observe what happens before handing the controls to the
                  child.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <h4 className="font-fun font-bold text-slate-900 text-sm mb-1.5">
                  Multi-Sensory Phonics & Math
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Combine the on-screen audio pronunciation with tactile finger tracing. Encourage
                  the child to repeat phoneme sounds (/k/ - /æ/ - /t/) or count aloud on their
                  fingers.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <h4 className="font-fun font-bold text-slate-900 text-sm mb-1.5">
                  Non-Punitive Mistake Culture
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  In PIXIE, incorrect attempts never reduce stars, trigger loud alarms, or end the game.
                  Mistakes are reframed as natural opportunities to test new hypotheses and try again.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Content Tab 2: Classroom Integration */}
        {activeTab === 'classroom' && (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-4">
              <Users className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-fun font-bold text-amber-950 text-base mb-1">
                  Learning Station Rotation Model
                </h4>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  Set up a 10-15 minute interactive station during English or Math rotations. Assign
                  pupils in pairs (a "Navigator" and a "Touch Pilot") to discuss questions and sort
                  items collaboratively.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-slate-200 bg-white">
                <h4 className="font-fun font-bold text-slate-900 text-sm mb-2">
                  Whole-Class Smartboard Warm-Up
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Project the Science habitat sorting or Good Habits handwashing game onto an
                  interactive whiteboard. Call volunteers up to drag animals or steps while classmates
                  give thumbs-up confirmation.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-white">
                <h4 className="font-fun font-bold text-slate-900 text-sm mb-2">
                  Review & Differentiated Practice
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Use the grade selector to match student readiness: kindergarteners practice letter
                  recognition, while Grade 1 and 2 pupils solve missing number patterns and word
                  synthesis.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Content Tab 3: Home Learning */}
        {activeTab === 'home' && (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-pink-50 border border-pink-200 flex items-start gap-4">
              <Home className="w-6 h-6 text-pink-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-fun font-bold text-pink-950 text-base mb-1">
                  15-Minute Daily Guided Adventure
                </h4>
                <p className="text-xs sm:text-sm text-pink-900 leading-relaxed">
                  We recommend short, purposeful sessions of 10 to 15 minutes. Complete 1 or 2
                  activities per evening, celebrate the stars earned in the Rewards Room, and discuss
                  how the lesson applies to real life (e.g. practicing proper handwashing at dinner).
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-700 space-y-2">
              <p className="font-semibold text-slate-900">Guiding Questions for Parents:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                <li>"What letter does this animal start with? Can you make the sound?"</li>
                <li>"Why do you think the goldfish lives in the water instead of the trees?"</li>
                <li>"Which step comes next when washing our hands with soap?"</li>
                <li>"How many apples did we count together on the screen?"</li>
              </ul>
            </div>
          </div>
        )}

        {/* Content Tab 4: Positive Coaching Tips */}
        {activeTab === 'tips' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="text-2xl mb-1 block">🌟</span>
              <h4 className="font-fun font-bold text-emerald-950 text-sm mb-1">
                Praise Effort and Strategy
              </h4>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Say: "I love how patiently you counted all five apples!" rather than just "You're so
                smart." This builds a growth mindset.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
              <span className="text-2xl mb-1 block">💡</span>
              <h4 className="font-fun font-bold text-amber-950 text-sm mb-1">
                Use Pixie’s Clues Together
              </h4>
              <p className="text-xs text-amber-900 leading-relaxed">
                When an answer needs adjustment, invite the child to tap Pixie or the Hint button
                together. Ask: "What clue did Pixie whisper to us?"
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200">
              <span className="text-2xl mb-1 block">🎧</span>
              <h4 className="font-fun font-bold text-sky-950 text-sm mb-1">
                Audio Sensitivity Adjustment
              </h4>
              <p className="text-xs text-sky-900 leading-relaxed">
                If the child prefers a quiet environment or wears headphones, use the top audio toggle
                or the Settings modal to adjust speech volume and chimes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200">
              <span className="text-2xl mb-1 block">🎨</span>
              <h4 className="font-fun font-bold text-purple-950 text-sm mb-1">
                Connect Digital to Tactile
              </h4>
              <p className="text-xs text-purple-900 leading-relaxed">
                Follow up the online game by having the pupil draw the spelled word on paper or sort real
                toy animals into water, land, or sky areas on the carpet.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
