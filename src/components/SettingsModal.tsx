import React, { useState } from 'react';
import { AppSettings } from '../types';
import { soundFx } from '../utils/sound';
import {
  X,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Sparkles,
  Eye,
  RotateCcw,
  Palette,
  AlertTriangle,
  Check
} from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
  onUpdateSettings: (newSettings: AppSettings) => void;
  onResetProgress: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onResetProgress
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  if (!isOpen) return null;

  const toggleSound = () => {
    const next = !settings.soundEnabled;
    soundFx.setSoundEnabled(next);
    if (next) soundFx.playPop();
    onUpdateSettings({ ...settings, soundEnabled: next });
  };

  const toggleBgm = () => {
    const next = !settings.bgmEnabled;
    if (next) {
      soundFx.startBgm();
    } else {
      soundFx.stopBgm();
    }
    onUpdateSettings({ ...settings, bgmEnabled: next });
  };

  const toggleSpeech = () => {
    const next = !settings.speechEnabled;
    soundFx.setSpeechEnabled(next);
    if (next) soundFx.speak('Voice assistance enabled!');
    onUpdateSettings({ ...settings, speechEnabled: next });
  };

  const toggleSparkles = () => {
    soundFx.playClick();
    onUpdateSettings({ ...settings, sparklesEnabled: !settings.sparklesEnabled });
  };

  const toggleReducedMotion = () => {
    soundFx.playClick();
    onUpdateSettings({ ...settings, reducedMotion: !settings.reducedMotion });
  };

  const changeTheme = (theme: AppSettings['theme']) => {
    soundFx.playPop();
    onUpdateSettings({ ...settings, theme });
  };

  const handleConfirmReset = () => {
    soundFx.playGentleRetry();
    onResetProgress();
    setShowResetConfirm(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-purple-200 overflow-hidden my-auto animate-float-slow">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-purple-50 border-b border-purple-100">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <h2 id="settings-title" className="text-xl font-fun font-bold text-slate-900">
              Settings & Preferences
            </h2>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Settings Body */}
        <div className="p-6 space-y-6">
          {/* Audio Controls */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
              Sound, Narration & Ambient Music
            </span>
            <div className="space-y-3">
              {/* Sound FX */}
              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-3">
                  {settings.soundEnabled ? (
                    <Volume2 className="w-5 h-5 text-purple-600" />
                  ) : (
                    <VolumeX className="w-5 h-5 text-slate-400" />
                  )}
                  <div>
                    <p className="text-sm font-fun font-bold text-slate-900">
                      Sound Effects & Chimes
                    </p>
                    <p className="text-xs text-slate-500">
                      Celebration fanfares, pops, and gentle feedback tones
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleSound}
                  className={`w-12 h-7 rounded-full transition-colors cursor-pointer p-1 flex items-center ${
                    settings.soundEnabled ? 'bg-purple-600 justify-end' : 'bg-slate-300 justify-start'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-white shadow-sm" />
                </button>
              </div>

              {/* Ambient BGM Music */}
              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎵</span>
                  <div>
                    <p className="text-sm font-fun font-bold text-slate-900">
                      Peaceful Background Music
                    </p>
                    <p className="text-xs text-slate-500">
                      Gentle fairytale kalimba melodies for focus and calm
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleBgm}
                  className={`w-12 h-7 rounded-full transition-colors cursor-pointer p-1 flex items-center ${
                    settings.bgmEnabled ? 'bg-purple-600 justify-end' : 'bg-slate-300 justify-start'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-white shadow-sm" />
                </button>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-3">
                  {settings.speechEnabled ? (
                    <Mic className="w-5 h-5 text-purple-600" />
                  ) : (
                    <MicOff className="w-5 h-5 text-slate-400" />
                  )}
                  <div>
                    <p className="text-sm font-fun font-bold text-slate-900">
                      Spoken Instructions (Voiceover)
                    </p>
                    <p className="text-xs text-slate-500">
                      Reads directions and hints out loud for young learners
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleSpeech}
                  className={`w-12 h-7 rounded-full transition-colors cursor-pointer p-1 flex items-center ${
                    settings.speechEnabled ? 'bg-purple-600 justify-end' : 'bg-slate-300 justify-start'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-white shadow-sm" />
                </button>
              </div>
            </div>
          </div>

          {/* Visual & Motion Accessibility */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
              Visual & Motion Comfort
            </span>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <div>
                    <p className="text-sm font-fun font-bold text-slate-900">
                      Sparkles & Floating Bubbles
                    </p>
                    <p className="text-xs text-slate-500">
                      Pop-able background bubbles and playful stars
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleSparkles}
                  className={`w-12 h-7 rounded-full transition-colors cursor-pointer p-1 flex items-center ${
                    settings.sparklesEnabled ? 'bg-purple-600 justify-end' : 'bg-slate-300 justify-start'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-white shadow-sm" />
                </button>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-sm font-fun font-bold text-slate-900">
                      Reduced Motion
                    </p>
                    <p className="text-xs text-slate-500">
                      Calms floating animations for sensitive pupils
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleReducedMotion}
                  className={`w-12 h-7 rounded-full transition-colors cursor-pointer p-1 flex items-center ${
                    settings.reducedMotion ? 'bg-purple-600 justify-end' : 'bg-slate-300 justify-start'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-white shadow-sm" />
                </button>
              </div>
            </div>
          </div>

          {/* Theme Environment Switcher */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-purple-600" />
              <span>World Atmosphere Theme</span>
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'pastel-sky', label: 'Pastel Sky', color: 'from-sky-200 to-indigo-200' },
                { id: 'rainbow-garden', label: 'Garden', color: 'from-emerald-200 to-amber-200' },
                { id: 'candy-cloud', label: 'Candy Cloud', color: 'from-pink-200 to-purple-200' }
              ].map((th) => (
                <button
                  key={th.id}
                  onClick={() => changeTheme(th.id as AppSettings['theme'])}
                  className={`p-2.5 rounded-xl border-2 text-xs font-fun font-bold text-slate-800 transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                    settings.theme === th.id
                      ? 'border-purple-600 bg-purple-50 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-purple-300'
                  }`}
                >
                  <div className={`w-full h-4 rounded-md bg-gradient-to-r ${th.color}`} />
                  <span>{th.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Reset Progress Section */}
          <div className="pt-4 border-t border-slate-100">
            {!showResetConfirm ? (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="w-full py-2.5 px-4 bg-rose-50 hover:bg-rose-100 text-rose-700 font-fun font-bold text-xs rounded-2xl border border-rose-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset Learner Progress (Safe Reset)</span>
              </button>
            ) : (
              <div className="p-4 bg-rose-50 border-2 border-rose-300 rounded-2xl text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-rose-800 font-fun font-bold text-sm">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  <span>Reset All Progress & Stars?</span>
                </div>
                <p className="text-xs text-rose-700">
                  This will return stars to initial state and clear completed badges on this
                  browser.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={handleConfirmReset}
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-fun font-bold text-xs rounded-xl cursor-pointer"
                  >
                    Yes, Reset Everything
                  </button>
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="px-4 py-2 bg-white border border-slate-300 text-slate-700 font-fun font-bold text-xs rounded-xl hover:bg-slate-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-fun font-bold text-xs transition-colors cursor-pointer shadow-xs"
          >
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
};
