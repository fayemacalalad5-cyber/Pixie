import { UserProgress, AppSettings, GradeLevel, StudentProfile } from '../types';

const PROFILE_KEY = 'pixie_student_profile_v2';
const PROGRESS_KEY = 'pixie_user_progress_v2';
const SETTINGS_KEY = 'pixie_app_settings_v2';

export const DEFAULT_PROFILE: StudentProfile = {
  name: '',
  section: '',
  grade: 'kindergarten',
  avatar: '⭐',
  isRegistered: false
};

export const DEFAULT_PROGRESS: UserProgress = {
  stars: 5,
  completedQuizIds: [],
  quizScores: {},
  subjectProgress: {
    english: 0,
    math: 0,
    science: 0,
    habits: 0
  },
  unlockedBadgeIds: ['first-adventure'],
  equippedAccessoryId: 'wand-star',
  dailyGoal: 2,
  todayCompletedCount: 0,
  lastActiveDate: new Date().toISOString().split('T')[0]
};

export const DEFAULT_SETTINGS: AppSettings = {
  soundEnabled: true,
  bgmEnabled: false,
  speechEnabled: true,
  sparklesEnabled: true,
  reducedMotion: false,
  theme: 'pastel-sky'
};

export function loadStudentProfile(): StudentProfile {
  if (typeof window === 'undefined') return DEFAULT_PROFILE;
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    return { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PROFILE;
  }
}

export function saveStudentProfile(profile: StudentProfile): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch {
    // ignore
  }
}

export function loadUserProgress(): UserProgress {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    // ignore
  }
}

export function loadAppSettings(): AppSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveAppSettings(settings: AppSettings): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // ignore
  }
}

export function clearStudentProfile(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(PROFILE_KEY);
}

export function resetAllData(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(PROFILE_KEY);
  localStorage.removeItem(PROGRESS_KEY);
  localStorage.removeItem(SETTINGS_KEY);
}
