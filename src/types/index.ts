export type SubjectId = 'english' | 'math' | 'science' | 'habits';

export type GradeLevel = 'kindergarten' | 'grade1' | 'grade2';

export interface StudentProfile {
  name: string;
  section: string;
  grade: GradeLevel;
  avatar: string;
  isRegistered: boolean;
}

export interface SubjectQuizPrep {
  expectedTopics: string[];
  coreVocabulary: string[];
  skillsToPractice: string[];
  quizTip: string;
}

export interface SubjectInfo {
  id: SubjectId;
  islandNumber: number;
  title: string;
  subtitle: string;
  themeWorld: string;
  description: string;
  colorBg: string;
  colorBorder: string;
  colorAccent: string;
  colorText: string;
  imagePath: string;
  skills: string[];
  quizPrep: Record<GradeLevel, SubjectQuizPrep>;
}

export interface ActivityQuestion {
  id: string;
  subjectId: SubjectId;
  grade: GradeLevel;
  questionNumber: number; // 1 to 10
  title: string;
  instruction: string;
  type: 'drag-word' | 'count-drag' | 'category-sort' | 'sequence-sort' | 'choice';
  hint: string;
  targetWord?: string;
  letterPool?: string[];
  imageUrl?: string;
  imageAlt?: string;
  countTarget?: number;
  countItems?: { id: string; emoji: string; name: string }[];
  options?: { id: string; label: string; isCorrect: boolean }[];
  categories?: { id: string; title: string; icon: string; accepts: string[] }[];
  itemsToSort?: { id: string; name: string; emoji: string; categoryId: string }[];
  sequenceSteps?: { id: string; order: number; text: string; emoji: string }[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  requiredStars: number;
}

export interface Accessory {
  id: string;
  name: string;
  type: 'hat' | 'glasses' | 'cape' | 'wand';
  icon: string;
  requiredStars: number;
  description: string;
}

export interface UserProgress {
  stars: number;
  completedQuizIds: string[];
  quizScores: Record<string, { score: number; total: number; percentage: number; completedAt: string }>;
  subjectProgress: Record<SubjectId, number>; // percent 0-100
  unlockedBadgeIds: string[];
  equippedAccessoryId: string | null;
  dailyGoal: number;
  todayCompletedCount: number;
  lastActiveDate: string;
}

export interface AppSettings {
  soundEnabled: boolean;
  bgmEnabled: boolean;
  speechEnabled: boolean;
  sparklesEnabled: boolean;
  reducedMotion: boolean;
  theme: 'pastel-sky' | 'rainbow-garden' | 'candy-cloud';
}
