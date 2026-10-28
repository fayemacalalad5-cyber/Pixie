import React from 'react';
import { NavigationTab } from './Navbar';
import { Sparkles, ShieldCheck, Heart, Volume2 } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface FooterProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenSettings }) => {
  const handleNav = (tab: NavigationTab) => {
    soundFx.playClick();
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-purple-100 bg-white/90 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Purpose */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xl font-fun font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                PIXIE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed mb-4">
              A colorful interactive educational website designed to support Kindergarten, Grade 1,
              and Grade 2 pupils through magical drag-and-drop challenges across English,
              Mathematics, Science, and Good Habits.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl w-fit border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="font-medium">100% Kid Safe · No Ads · No Data Collection</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-fun font-bold text-slate-900 text-sm mb-3">
              Learning Worlds
            </h4>
            <ul className="space-y-2 text-xs font-fun text-slate-600">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-purple-700 transition-colors cursor-pointer"
                >
                  World Map & Islands
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('subjects')}
                  className="hover:text-purple-700 transition-colors cursor-pointer"
                >
                  Explore All 4 Subjects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('progress')}
                  className="hover:text-purple-700 transition-colors cursor-pointer"
                >
                  My Learning Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rewards')}
                  className="hover:text-purple-700 transition-colors cursor-pointer"
                >
                  Rewards Room & Wardrobe
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Adult Guides & Settings */}
          <div>
            <h4 className="font-fun font-bold text-slate-900 text-sm mb-3">
              Educators & Parents
            </h4>
            <ul className="space-y-2 text-xs font-fun text-slate-600">
              <li>
                <button
                  onClick={() => handleNav('guide')}
                  className="hover:text-purple-700 transition-colors cursor-pointer"
                >
                  Parent & Teacher Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleNav('home');
                    setTimeout(() => {
                      document.getElementById('how-pixie-works')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-purple-700 transition-colors cursor-pointer"
                >
                  How PIXIE Works (8 Steps)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleNav('home');
                    setTimeout(() => {
                      document.getElementById('mode-of-use')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-purple-700 transition-colors cursor-pointer"
                >
                  Mode of Use (9 Cards)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSettings}
                  className="text-purple-700 font-bold hover:underline cursor-pointer flex items-center gap-1"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Audio & Display Settings</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-fun">
          <p>
            © {new Date().getFullYear()} PIXIE – A Colorful Interactive Educational Website. Built
            for joyful guided learning.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for curious young minds</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
