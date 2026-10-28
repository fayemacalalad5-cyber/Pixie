import React from 'react';
import {
  Globe2,
  Wifi,
  Laptop,
  Users2,
  CalendarCheck,
  MousePointerClick,
  Sparkles,
  Clock,
  Accessibility
} from 'lucide-react';

export const ModeOfUse: React.FC = () => {
  const cards = [
    {
      title: 'Platform',
      icon: Globe2,
      color: 'from-sky-400 to-blue-500',
      description:
        'PIXIE is a modern web-based educational website that provides interactive learning activities directly through any web browser without required app installations.'
    },
    {
      title: 'Internet Connection',
      icon: Wifi,
      color: 'from-indigo-400 to-purple-500',
      description:
        'An active internet connection is required to access the hosted website, cloud learning media, and dynamic game modules. Local progress persists in browser storage.'
    },
    {
      title: 'Supported Devices',
      icon: Laptop,
      color: 'from-pink-400 to-rose-500',
      description:
        'Accessible smoothly across desktop computers, laptops, school Chromebooks, iPads, Android tablets, and compatible smartphones with responsive touch-first scaling.'
    },
    {
      title: 'Learning Arrangement',
      icon: Users2,
      color: 'from-amber-400 to-orange-500',
      description:
        'Designed primarily for teacher-guided learning and parent-supported practice. Learners participate individually, in collaborative pairs, or in small kindergarten groups.'
    },
    {
      title: 'Learning Schedule',
      icon: CalendarCheck,
      color: 'from-emerald-400 to-teal-500',
      description:
        'Easily embedded into daily classroom lesson warmups, small-group learning stations, review sessions, or supervised 15-minute home learning routines.'
    },
    {
      title: 'Interaction Methods',
      icon: MousePointerClick,
      color: 'from-cyan-400 to-blue-500',
      description:
        'Combines natural drag-and-drop mechanics with single-tap click selection, matching cards, and accessible keyboard fallbacks for fine motor development.'
    },
    {
      title: 'Educational Feedback',
      icon: Sparkles,
      color: 'from-purple-400 to-pink-500',
      description:
        'Immediate visual stars, encouraging chime audio, and supportive hints. Supporting adults can explain misconceptions and reinforce fundamental concepts.'
    },
    {
      title: 'Unhurried Learning Pace',
      icon: Clock,
      color: 'from-yellow-400 to-amber-500',
      description:
        'No timers or stressful countdown clocks. Children learn through cheerful trial and error, unlimited retries, and positive reinforcement with zero mistake penalty.'
    },
    {
      title: 'Accessibility & Safety',
      icon: Accessibility,
      color: 'from-teal-400 to-emerald-600',
      description:
        'Large touch targets (≥44px), readable child fonts, high color contrast, speech audio narration, reduced-motion controls, and zero personal data collection.'
    }
  ];

  return (
    <section className="my-12 sm:my-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-fun font-semibold mb-3">
          <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Operational Guidelines for Educators & Parents</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-fun font-bold text-slate-900 tracking-tight">
          Mode of Use
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Clear recommendations on platform access, classroom integration, device compatibility,
          and teacher-guided interaction principles.
        </p>
      </div>

      {/* 9 Dedicated Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, i) => {
          const IconComp = card.icon;
          return (
            <div
              key={card.title}
              className="p-6 rounded-3xl bg-white border-2 border-slate-100 hover:border-purple-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center shadow-sm`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-fun font-bold text-slate-400">
                    #{i + 1}
                  </span>
                </div>

                <h3 className="font-fun font-bold text-lg text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
