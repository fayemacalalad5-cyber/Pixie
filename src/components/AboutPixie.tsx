import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, BookOpen } from 'lucide-react';

export const AboutPixie: React.FC = () => {
  return (
    <section className="my-12 sm:my-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs font-fun font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>About PIXIE Educational Platform</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-fun font-bold tracking-tight text-white mb-6">
            Empowering Little Minds with Joyful Learning
          </h2>

          {/* Specified Exact Copy */}
          <blockquote className="p-6 sm:p-8 bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl text-sm sm:text-base md:text-lg leading-relaxed text-purple-100 font-sans italic text-left max-w-3xl mb-8 shadow-inner">
            "PIXIE is a proposed web-based educational tool designed to support Kindergarten, Grade
            1, and Grade 2 pupils through interactive educational games. It combines colorful
            illustrations, simple instructions, drag-and-drop activities, sound effects, and reward
            systems to make learning engaging and enjoyable. Its learning areas include English,
            Mathematics, Science, and Good Habits. PIXIE is intended to supplement classroom
            instruction and encourage guided learning with the support of teachers, parents, and
            guardians."
          </blockquote>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left w-full max-w-3xl">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/30 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h4 className="font-fun font-bold text-sm text-white">4 Core Subjects</h4>
                <p className="text-xs text-purple-200 mt-1 leading-snug">
                  English, Mathematics, Science, and Good Habits aligned to early primary needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/30 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5 text-pink-300" />
              </div>
              <div>
                <h4 className="font-fun font-bold text-sm text-white">Guided Learning</h4>
                <p className="text-xs text-purple-200 mt-1 leading-snug">
                  Strengthens bonding through collaborative adult guidance and positive coaching.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <h4 className="font-fun font-bold text-sm text-white">Child-Safe & Private</h4>
                <p className="text-xs text-purple-200 mt-1 leading-snug">
                  Zero ads, zero tracking, and no child accounts or personal data required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
