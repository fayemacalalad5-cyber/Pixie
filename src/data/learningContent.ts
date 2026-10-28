import { SubjectInfo, ActivityQuestion, Badge, Accessory, GradeLevel, SubjectId } from '../types';

export const SUBJECTS: SubjectInfo[] = [
  {
    id: 'english',
    islandNumber: 1,
    title: 'English',
    subtitle: 'Island 1: Word Wonder World',
    themeWorld: 'Cozy Library Island & Alphabet Trees',
    description: 'Explore letters, sound out beginning phonemes, spell sight words, and match pictures to storybook terms!',
    colorBg: 'bg-sky-50 dark:bg-sky-950/40',
    colorBorder: 'border-sky-300',
    colorAccent: '#38bdf8',
    colorText: 'text-sky-700',
    imagePath: '/src/assets/images/world_english_island_1793172160534.jpg',
    skills: ['Letter Matching', 'First Words', 'Phonics & Sounds', 'Spelling Adventure'],
    quizPrep: {
      kindergarten: {
        expectedTopics: [
          'Uppercase and lowercase alphabet matching (A-a, B-b, C-c)',
          'Identifying initial consonant sounds (Cat, Sun, Dog, Bear)',
          'Spelling simple 3-letter CVC sight words (C-A-T, S-U-N, P-E-N)',
          'Recognizing picture clues and rhyming sounds'
        ],
        coreVocabulary: ['Letter', 'Sound', 'Alphabet', 'Word', 'Picture', 'Cat', 'Sun', 'Book'],
        skillsToPractice: [
          'Tap each letter to hear its sound aloud',
          'Drag letters into empty spelling slots in correct order',
          'Look closely at the image clue before answering'
        ],
        quizTip: 'Island 1 Quiz has 10 fun questions. Take your time and sound out each letter slowly!'
      },
      grade1: {
        expectedTopics: [
          '4 and 5-letter word spelling (A-P-P-L-E, B-I-R-D, B-O-O-K)',
          'Beginning blend sounds (Bl, Br, Cl, St, Fl)',
          'Simple action verbs and naming nouns (Jump, Run, Tree)',
          'Reading short descriptive captions and sentence completion'
        ],
        coreVocabulary: ['Vowel', 'Consonant', 'Sentence', 'Action Verb', 'Noun', 'Spelling', 'Meaning'],
        skillsToPractice: [
          'Arrange scrambled letters to complete common fruits and animals',
          'Identify words that describe what someone is doing',
          'Match opposite words (Big vs Small, Up vs Down)'
        ],
        quizTip: 'Read the full sentence clue carefully to find the best word that fits!'
      },
      grade2: {
        expectedTopics: [
          'Multi-syllable vocabulary spelling (F-R-I-E-N-D, S-C-H-O-O-L, T-E-A-C-H)',
          'Synonyms and antonyms (Happy = Glad, Kind = Caring)',
          'Punctuation marks: Question mark (?), Period (.), Exclamation (!)',
          'Context clues for reading comprehension'
        ],
        coreVocabulary: ['Vocabulary', 'Punctuation', 'Synonym', 'Antonym', 'Adjective', 'Paragraph'],
        skillsToPractice: [
          'Distinguish nouns, verbs, and descriptive adjectives',
          'Choose the right punctuation mark for exciting vs asking sentences',
          'Spell compound and silent-letter words correctly'
        ],
        quizTip: 'Notice the spelling patterns like -oo-, -ie-, and silent letters!'
      }
    }
  },
  {
    id: 'math',
    islandNumber: 2,
    title: 'Mathematics',
    subtitle: 'Island 2: Number Adventure Land',
    themeWorld: 'Toy Block Towers & Shape Castle',
    description: 'Count colorful fruits and animals, solve stepping-stone additions, find missing number patterns, and identify 2D shapes!',
    colorBg: 'bg-amber-50 dark:bg-amber-950/40',
    colorBorder: 'border-amber-300',
    colorAccent: '#f59e0b',
    colorText: 'text-amber-700',
    imagePath: '/src/assets/images/world_math_island_1793172161163.jpg',
    skills: ['Counting 1-20', 'Number Matching', 'Shape Sorting', 'Fun Addition & Subtraction'],
    quizPrep: {
      kindergarten: {
        expectedTopics: [
          'Counting items from 1 up to 10 with 1-to-1 correspondence',
          'Matching quantities with numeral symbols (3, 4, 5, 7, 10)',
          'Identifying basic geometric shapes: Circle, Square, Triangle, Star',
          'Comparing sets using more, fewer, and equal'
        ],
        coreVocabulary: ['Number', 'Count', 'More', 'Fewer', 'Equal', 'Circle', 'Triangle', 'Star'],
        skillsToPractice: [
          'Touch each object on screen once as you count',
          'Notice how circles are round and squares have 4 straight sides',
          'Compare which group has the bigger pile of treats'
        ],
        quizTip: 'Point to each counter with your finger on the screen so you never miss one!'
      },
      grade1: {
        expectedTopics: [
          'Single-digit addition facts up to 10 (3 + 2, 4 + 4, 5 + 3)',
          'Basic subtraction as taking away (6 - 2, 7 - 3, 5 - 1)',
          'Identifying 2D shapes and counting corners and sides',
          'Simple patterns and sequences (2, 4, 6...)'
        ],
        coreVocabulary: ['Addition (+)', 'Subtraction (-)', 'Equals (=)', 'Sum', 'Difference', 'Corner', 'Side'],
        skillsToPractice: [
          'Use fingers or mental counters to join two groups together',
          'Count backward to solve subtraction problems quickly',
          'Count the straight edges and pointy corners of geometric shapes'
        ],
        quizTip: 'Remember: "+" means put together, and "-" means take away!'
      },
      grade2: {
        expectedTopics: [
          'Double-digit basic additions (10 + 5, 12 + 6, 15 + 5)',
          'Skip counting by 2s, 5s, and 10s',
          'Word problem stories with real-life sharing and shopping',
          'Comparing larger numbers using greater than (>) and less than (<)'
        ],
        coreVocabulary: ['Tens and Ones', 'Skip Counting', 'Pattern', 'Equation', 'Total', 'Greater Than'],
        skillsToPractice: [
          'Group objects into bundles of 10s and leftover 1s',
          'Practice skip counting rhythms: 5, 10, 15, 20, 25!',
          'Read math story problems and identify the operation required'
        ],
        quizTip: 'Check your answer by counting backwards or checking the ones place first!'
      }
    }
  },
  {
    id: 'science',
    islandNumber: 3,
    title: 'Science',
    subtitle: 'Island 3: Little Explorers’ World',
    themeWorld: 'Sparkling River, Lush Meadow & Animal Glade',
    description: 'Explore the 5 human senses, discover where animals live, sort living vs non-living things, and understand plant parts and weather!',
    colorBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    colorBorder: 'border-emerald-300',
    colorAccent: '#10b981',
    colorText: 'text-emerald-700',
    imagePath: '/src/assets/images/world_science_island_1793172162147.jpg',
    skills: ['Animal Habitats', 'Living Things', 'Plant Parts', 'Weather Wonders'],
    quizPrep: {
      kindergarten: {
        expectedTopics: [
          'The 5 human senses: Sight (eyes), Hearing (ears), Taste (tongue), Smell (nose), Touch (hands)',
          'Three primary habitats: Ocean/Water (fish), Sky/Trees (birds), Land (rabbits)',
          'Observing daily weather: Sunny, Rainy, Cloudy, and Windy',
          'Basic animal diets and baby animals (puppy, kitten, duckling)'
        ],
        coreVocabulary: ['Sense', 'Eyes', 'Ears', 'Water', 'Sky', 'Land', 'Habitat', 'Weather'],
        skillsToPractice: [
          'Match body parts to what they help us perceive in nature',
          'Sort animals into where they can swim, fly, or run safely',
          'Describe what clothes we wear during rainy or sunny weather'
        ],
        quizTip: 'Think about where you see each animal in real life: swimming, hopping, or flying!'
      },
      grade1: {
        expectedTopics: [
          'Classifying Living Things (trees, puppies) vs Non-Living Objects (rocks, balls)',
          'Essential plant anatomy: Roots (drink water), Stem (stands tall), Leaves (soak sun)',
          'Animal coverings: Feathers, Fur, Scales, and Shells',
          'Day vs Night sky: Sun, Moon, Stars, and Clouds'
        ],
        coreVocabulary: ['Living', 'Non-Living', 'Roots', 'Stem', 'Leaves', 'Fur', 'Feathers', 'Sunlight'],
        skillsToPractice: [
          'Ask: Does it breathe, eat, and grow? If yes, it is a living thing!',
          'Trace water flow from the roots up to the flower petals',
          'Identify animal adaptations that keep them warm and protected'
        ],
        quizTip: 'Living things need food, air, and water to grow; non-living objects do not!'
      },
      grade2: {
        expectedTopics: [
          'Plant lifecycle and photosynthesis: how green leaves use sunlight to make food',
          'The water cycle: evaporation, clouds, and falling rain precipitation',
          'Carnivores, herbivores, and omnivores in food chains',
          'Environmental stewardship: protecting forests, saving water, and clean air'
        ],
        coreVocabulary: ['Photosynthesis', 'Precipitation', 'Water Cycle', 'Herbivore', 'Carnivore', 'Environment'],
        skillsToPractice: [
          'Explain why plants need green leaves facing towards sunlight',
          'Follow how rain falls, flows into streams, and forms clouds',
          'Identify practical ways to save clean water at home and school'
        ],
        quizTip: 'Focus on how plants, animals, and weather all work together in nature!'
      }
    }
  },
  {
    id: 'habits',
    islandNumber: 4,
    title: 'Good Habits',
    subtitle: 'Island 4: Happy Habits Garden',
    themeWorld: 'Sunbeam Cottage, Rainbow Waterfall & Fruit Orchard',
    description: 'Learn healthy daily routines, proper 4-step handwashing, sparkling toothbrushing habits, sharing, kind magic words, and safety!',
    colorBg: 'bg-rose-50 dark:bg-rose-950/40',
    colorBorder: 'border-rose-300',
    colorAccent: '#f43f5e',
    colorText: 'text-rose-700',
    imagePath: '/src/assets/images/world_habits_island_1793172161687.jpg',
    skills: ['Healthy Habits', 'Handwashing Steps', 'Sharing & Kindness', 'Clean & Safe Home'],
    quizPrep: {
      kindergarten: {
        expectedTopics: [
          'Daily hygiene: Brushing teeth in the morning and night, washing dirty hands',
          'Magic courtesy words: "Please", "Thank you", and "I am sorry"',
          'Taking turns on the playground swings and sharing toys',
          'Putting trash into the waste bin to keep classrooms tidy'
        ],
        coreVocabulary: ['Hygiene', 'Soap', 'Clean', 'Share', 'Please', 'Thank you', 'Trash Bin', 'Smile'],
        skillsToPractice: [
          'Sort actions into Healthy Habits vs Things to Avoid',
          'Practice saying polite words when asking for help or receiving a gift',
          'Remember to put toys back in their cubbies after playtime'
        ],
        quizTip: 'Good habits make your body healthy and make your friends feel loved!'
      },
      grade1: {
        expectedTopics: [
          'Sequencing the 4 proper handwashing steps (Water → Soap → Rinse → Dry)',
          'Healthy eating choices: Fruits & veggies vs excessive sweets and sodas',
          'School safety: Walking in hallways, not running with pencils, buckling seatbelts',
          'Helping classmates who fall or need a study buddy'
        ],
        coreVocabulary: ['Handwashing', 'Nutrition', 'Safety', 'Respect', 'Healthy', 'Kindness', 'Cooperation'],
        skillsToPractice: [
          'Put the 4 handwashing steps in exact chronological order',
          'Pick nutritious lunch and snack foods that give long-lasting energy',
          'Recognize safe everyday behaviors at home, on the road, and in school'
        ],
        quizTip: 'Wash hands for 20 seconds with bubbles to wash all invisible germs away!'
      },
      grade2: {
        expectedTopics: [
          'Caring for the planet: Recycling plastics, conserving electricity, planting trees',
          'Resolving conflicts peacefully with empathy and active listening',
          'Personal responsibility: Completing homework on time, packing your own schoolbag',
          'Digital safety and screen time balance with outdoor active play'
        ],
        coreVocabulary: ['Responsibility', 'Recycle', 'Empathy', 'Conflict Resolution', 'Balance', 'Teamwork'],
        skillsToPractice: [
          'Identify which items go into the blue recycling bin vs compost',
          'Choose the most peaceful and empathetic response to peer disagreements',
          'Plan a balanced daily schedule with reading, active play, and rest'
        ],
        quizTip: 'Think about how your choices help yourself, your friends, and the earth!'
      }
    }
  }
];

export const BADGES: Badge[] = [
  {
    id: 'first-adventure',
    title: 'First Adventure',
    description: 'Completed your very first 10-question quiz in PIXIE!',
    icon: '🌟',
    color: 'from-amber-400 to-yellow-300',
    requiredStars: 1
  },
  {
    id: 'island-1-master',
    title: 'Island 1: English Scholar',
    description: 'Scored 10/10 on the Island 1 Word Wonder World Quiz!',
    icon: '📚',
    color: 'from-sky-400 to-blue-400',
    requiredStars: 5
  },
  {
    id: 'island-2-master',
    title: 'Island 2: Math Genius',
    description: 'Scored 10/10 on the Island 2 Number Adventure Quiz!',
    icon: '🔢',
    color: 'from-amber-400 to-orange-400',
    requiredStars: 10
  },
  {
    id: 'island-3-master',
    title: 'Island 3: Nature Explorer',
    description: 'Scored 10/10 on the Island 3 Little Explorers Quiz!',
    icon: '🌿',
    color: 'from-emerald-400 to-teal-400',
    requiredStars: 15
  },
  {
    id: 'island-4-master',
    title: 'Island 4: Habits Champion',
    description: 'Scored 10/10 on the Island 4 Happy Habits Quiz!',
    icon: '💖',
    color: 'from-rose-400 to-pink-400',
    requiredStars: 20
  },
  {
    id: 'grand-valedictorian',
    title: 'Grand PIXIE Valedictorian',
    description: 'Mastered all 4 Islands across your grade curriculum!',
    icon: '👑',
    color: 'from-purple-400 to-pink-400',
    requiredStars: 25
  }
];

export const ACCESSORIES: Accessory[] = [
  {
    id: 'wand-star',
    name: 'Sparkle Wand',
    type: 'wand',
    icon: '🪄',
    requiredStars: 2,
    description: 'Cast rainbow sparkles whenever Pixie celebrates!'
  },
  {
    id: 'hat-wizard',
    name: 'Star Wizard Hat',
    type: 'hat',
    icon: '🧙‍♂️',
    requiredStars: 5,
    description: 'A cozy blue hat sprinkled with glowing night stars.'
  },
  {
    id: 'glasses-rainbow',
    name: 'Rainbow Specs',
    type: 'glasses',
    icon: '👓',
    requiredStars: 8,
    description: 'Magical glasses that make every word extra clear!'
  },
  {
    id: 'crown-flower',
    name: 'Blossom Wreath',
    type: 'hat',
    icon: '🌸',
    requiredStars: 12,
    description: 'A fragrant crown of fresh daisies and buttercups.'
  },
  {
    id: 'cape-hero',
    name: 'Super Cape',
    type: 'cape',
    icon: '🦸',
    requiredStars: 16,
    description: 'Flutter proudly while conquering tricky questions!'
  },
  {
    id: 'crown-golden',
    name: 'Royal Sun Crown',
    type: 'hat',
    icon: '👑',
    requiredStars: 20,
    description: 'The golden crown for honorary masters of PIXIE!'
  }
];

// =========================================================================================
// EXACT 10 QUESTIONS PER ISLAND FOR KINDERGARTEN, GRADE 1, AND GRADE 2 (120 TOTAL QUESTIONS)
// =========================================================================================

export const FULL_QUIZ_QUESTIONS: Record<GradeLevel, Record<SubjectId, ActivityQuestion[]>> = {
  // ----------------------------------------------------
  // KINDERGARTEN (10 Questions for Island 1, 2, 3, 4)
  // ----------------------------------------------------
  kindergarten: {
    english: [
      {
        id: 'k-eng-1',
        subjectId: 'english',
        grade: 'kindergarten',
        questionNumber: 1,
        title: 'Spelling Word: C-A-T',
        instruction: 'Drag or tap the letters into the boxes to spell the furry cat!',
        type: 'drag-word',
        targetWord: 'CAT',
        letterPool: ['C', 'A', 'T', 'O', 'P'],
        hint: 'Listen closely: /k/ /æ/ /t/ — C-A-T!',
        imageUrl: '🐱'
      },
      {
        id: 'k-eng-2',
        subjectId: 'english',
        grade: 'kindergarten',
        questionNumber: 2,
        title: 'Spelling Word: S-U-N',
        instruction: 'Complete the word that shines bright in the daytime sky!',
        type: 'drag-word',
        targetWord: 'SUN',
        letterPool: ['S', 'U', 'N', 'B', 'M'],
        hint: 'The warm yellow sun: S-U-N!',
        imageUrl: '☀️'
      },
      {
        id: 'k-eng-3',
        subjectId: 'english',
        grade: 'kindergarten',
        questionNumber: 3,
        title: 'Beginning Sound: Dog',
        instruction: 'Which letter does "Dog" begin with?',
        type: 'choice',
        hint: 'Ddd-og! Look for the letter D!',
        imageUrl: '🐶',
        options: [
          { id: 'opt-d', label: 'D (as in Dog)', isCorrect: true },
          { id: 'opt-b', label: 'B (as in Bear)', isCorrect: false },
          { id: 'opt-p', label: 'P (as in Pig)', isCorrect: false }
        ]
      },
      {
        id: 'k-eng-4',
        subjectId: 'english',
        grade: 'kindergarten',
        questionNumber: 4,
        title: 'Uppercase & Lowercase Match: Letter A',
        instruction: 'Which lowercase letter matches uppercase "A"?',
        type: 'choice',
        hint: 'Uppercase A matches lowercase a!',
        imageUrl: '🅰️',
        options: [
          { id: 'k4-a', label: 'a (lowercase a)', isCorrect: true },
          { id: 'k4-b', label: 'b', isCorrect: false },
          { id: 'k4-d', label: 'd', isCorrect: false }
        ]
      },
      {
        id: 'k-eng-5',
        subjectId: 'english',
        grade: 'kindergarten',
        questionNumber: 5,
        title: 'Spelling Word: P-E-N',
        instruction: 'Drag letters to spell the pen we use to draw lines!',
        type: 'drag-word',
        targetWord: 'PEN',
        letterPool: ['P', 'E', 'N', 'T', 'L'],
        hint: 'P - E - N spells Pen!',
        imageUrl: '🖊️'
      },
      {
        id: 'k-eng-6',
        subjectId: 'english',
        grade: 'kindergarten',
        questionNumber: 6,
        title: 'Beginning Sound: Apple',
        instruction: 'What letter does juicy "Apple" start with?',
        type: 'choice',
        hint: 'Ah-ah-apple! The very first letter in the alphabet!',
        imageUrl: '🍎',
        options: [
          { id: 'k6-a', label: 'A (Apple)', isCorrect: true },
          { id: 'k6-e', label: 'E (Elephant)', isCorrect: false },
          { id: 'k6-o', label: 'O (Orange)', isCorrect: false }
        ]
      },
      {
        id: 'k-eng-7',
        subjectId: 'english',
        grade: 'kindergarten',
        questionNumber: 7,
        title: 'Spelling Word: B-E-D',
        instruction: 'Spell the cozy bed where we sleep and dream!',
        type: 'drag-word',
        targetWord: 'BED',
        letterPool: ['B', 'E', 'D', 'P', 'R'],
        hint: 'B - E - D!',
        imageUrl: '🛏️'
      },
      {
        id: 'k-eng-8',
        subjectId: 'english',
        grade: 'kindergarten',
        questionNumber: 8,
        title: 'Rhyming Word Match: Bat',
        instruction: 'Which word rhymes with "Bat"?',
        type: 'choice',
        hint: 'Bat and Cat share the same ending sound!',
        imageUrl: '🦇',
        options: [
          { id: 'k8-cat', label: 'Cat', isCorrect: true },
          { id: 'k8-dog', label: 'Dog', isCorrect: false },
          { id: 'k8-sun', label: 'Sun', isCorrect: false }
        ]
      },
      {
        id: 'k-eng-9',
        subjectId: 'english',
        grade: 'kindergarten',
        questionNumber: 9,
        title: 'Spelling Word: H-A-T',
        instruction: 'Spell the hat we wear on our heads when it is sunny!',
        type: 'drag-word',
        targetWord: 'HAT',
        letterPool: ['H', 'A', 'T', 'S', 'N'],
        hint: 'H - A - T!',
        imageUrl: '👒'
      },
      {
        id: 'k-eng-10',
        subjectId: 'english',
        grade: 'kindergarten',
        questionNumber: 10,
        title: 'Sight Word Recognition: "SEE"',
        instruction: 'Which word spells "SEE" (with our eyes)?',
        type: 'choice',
        hint: 'S - E - E!',
        imageUrl: '👀',
        options: [
          { id: 'k10-see', label: 'SEE', isCorrect: true },
          { id: 'k10-she', label: 'SHE', isCorrect: false },
          { id: 'k10-say', label: 'SAY', isCorrect: false }
        ]
      }
    ],
    math: [
      {
        id: 'k-mat-1',
        subjectId: 'math',
        grade: 'kindergarten',
        questionNumber: 1,
        title: 'Count the Red Apples',
        instruction: 'Count how many red apples are on the tree, then tap the number!',
        type: 'count-drag',
        countTarget: 5,
        countItems: [
          { id: 'a1', emoji: '🍎', name: 'Apple 1' },
          { id: 'a2', emoji: '🍎', name: 'Apple 2' },
          { id: 'a3', emoji: '🍎', name: 'Apple 3' },
          { id: 'a4', emoji: '🍎', name: 'Apple 4' },
          { id: 'a5', emoji: '🍎', name: 'Apple 5' }
        ],
        hint: '1, 2, 3, 4, 5 apples!',
        letterPool: ['3', '4', '5', '6']
      },
      {
        id: 'k-mat-2',
        subjectId: 'math',
        grade: 'kindergarten',
        questionNumber: 2,
        title: 'Shape Spotter: The Star',
        instruction: 'Which shape has 5 points and shines in the night sky?',
        type: 'choice',
        hint: 'Look for the twinkling star with five friendly points!',
        imageUrl: '✨',
        options: [
          { id: 'opt-star', label: '⭐ Star (5 points)', isCorrect: true },
          { id: 'opt-circle', label: '🔵 Circle (round)', isCorrect: false },
          { id: 'opt-square', label: '🟩 Square (4 straight sides)', isCorrect: false }
        ]
      },
      {
        id: 'k-mat-3',
        subjectId: 'math',
        grade: 'kindergarten',
        questionNumber: 3,
        title: 'Count the Swimming Ducks',
        instruction: 'Count all 4 ducklings splashing in the pond!',
        type: 'count-drag',
        countTarget: 4,
        countItems: [
          { id: 'kd1', emoji: '🦆', name: 'Duck 1' },
          { id: 'kd2', emoji: '🦆', name: 'Duck 2' },
          { id: 'kd3', emoji: '🦆', name: 'Duck 3' },
          { id: 'kd4', emoji: '🦆', name: 'Duck 4' }
        ],
        hint: 'Four quacking ducklings: 1, 2, 3, 4!',
        letterPool: ['2', '3', '4', '5']
      },
      {
        id: 'k-mat-4',
        subjectId: 'math',
        grade: 'kindergarten',
        questionNumber: 4,
        title: 'Shape Spotter: Circle',
        instruction: 'Which shape is perfectly round with zero straight sides?',
        type: 'choice',
        hint: 'A round coin or a basketball is a circle!',
        imageUrl: '⚽',
        options: [
          { id: 'k4-circ', label: 'Circle (round)', isCorrect: true },
          { id: 'k4-tri', label: 'Triangle (3 corners)', isCorrect: false },
          { id: 'k4-rect', label: 'Rectangle (long sides)', isCorrect: false }
        ]
      },
      {
        id: 'k-mat-5',
        subjectId: 'math',
        grade: 'kindergarten',
        questionNumber: 5,
        title: 'Count the Bananas',
        instruction: 'Count the 3 sweet yellow bananas for monkey snack time!',
        type: 'count-drag',
        countTarget: 3,
        countItems: [
          { id: 'b1', emoji: '🍌', name: 'Banana 1' },
          { id: 'b2', emoji: '🍌', name: 'Banana 2' },
          { id: 'b3', emoji: '🍌', name: 'Banana 3' }
        ],
        hint: '1, 2, 3 bananas!',
        letterPool: ['2', '3', '4', '5']
      },
      {
        id: 'k-mat-6',
        subjectId: 'math',
        grade: 'kindergarten',
        questionNumber: 6,
        title: 'Comparing Sets: More or Fewer',
        instruction: 'Which group has MORE: 6 cookies or 2 cookies?',
        type: 'choice',
        hint: '6 is a much bigger number than 2!',
        imageUrl: '🍪',
        options: [
          { id: 'k6-more', label: '6 Cookies (More)', isCorrect: true },
          { id: 'k6-fewer', label: '2 Cookies', isCorrect: false }
        ]
      },
      {
        id: 'k-mat-7',
        subjectId: 'math',
        grade: 'kindergarten',
        questionNumber: 7,
        title: 'Count the Twinkling Stars',
        instruction: 'Count all 6 glowing stars in the sky!',
        type: 'count-drag',
        countTarget: 6,
        countItems: [
          { id: 's1', emoji: '⭐', name: 'Star 1' },
          { id: 's2', emoji: '⭐', name: 'Star 2' },
          { id: 's3', emoji: '⭐', name: 'Star 3' },
          { id: 's4', emoji: '⭐', name: 'Star 4' },
          { id: 's5', emoji: '⭐', name: 'Star 5' },
          { id: 's6', emoji: '⭐', name: 'Star 6' }
        ],
        hint: 'Count: 1, 2, 3, 4, 5, 6 stars!',
        letterPool: ['4', '5', '6', '7']
      },
      {
        id: 'k-mat-8',
        subjectId: 'math',
        grade: 'kindergarten',
        questionNumber: 8,
        title: 'Shape Spotter: Triangle',
        instruction: 'How many corners does a Triangle have?',
        type: 'choice',
        hint: 'Tri means three! A slice of pizza has 3 corners!',
        imageUrl: '📐',
        options: [
          { id: 'k8-3', label: '3 Corners', isCorrect: true },
          { id: 'k8-4', label: '4 Corners', isCorrect: false },
          { id: 'k8-5', label: '5 Corners', isCorrect: false }
        ]
      },
      {
        id: 'k-mat-9',
        subjectId: 'math',
        grade: 'kindergarten',
        questionNumber: 9,
        title: 'Count the Puppies',
        instruction: 'Count the 2 playful puppies running on the lawn!',
        type: 'count-drag',
        countTarget: 2,
        countItems: [
          { id: 'p1', emoji: '🐶', name: 'Puppy 1' },
          { id: 'p2', emoji: '🐶', name: 'Puppy 2' }
        ],
        hint: '1, 2 puppies!',
        letterPool: ['1', '2', '3', '4']
      },
      {
        id: 'k-mat-10',
        subjectId: 'math',
        grade: 'kindergarten',
        questionNumber: 10,
        title: 'Number Order: What comes after 4?',
        instruction: 'Count: 1, 2, 3, 4... what number comes next?',
        type: 'choice',
        hint: '1, 2, 3, 4, and then comes 5!',
        imageUrl: '🖐️',
        options: [
          { id: 'k10-5', label: '5', isCorrect: true },
          { id: 'k10-6', label: '6', isCorrect: false },
          { id: 'k10-3', label: '3', isCorrect: false }
        ]
      }
    ],
    science: [
      {
        id: 'k-sci-1',
        subjectId: 'science',
        grade: 'kindergarten',
        questionNumber: 1,
        title: 'Animal Habitat Match: Fish',
        instruction: 'Where does a fish naturally live and swim?',
        type: 'choice',
        hint: 'Fish have gills to breathe underwater!',
        imageUrl: '🐟',
        options: [
          { id: 'k1-water', label: 'Water (Ocean / River)', isCorrect: true },
          { id: 'k1-trees', label: 'High tree branches', isCorrect: false },
          { id: 'k1-cloud', label: 'In the clouds', isCorrect: false }
        ]
      },
      {
        id: 'k-sci-2',
        subjectId: 'science',
        grade: 'kindergarten',
        questionNumber: 2,
        title: 'The Five Senses: Sight',
        instruction: 'Which body part do we use to see colors and rainbows?',
        type: 'choice',
        hint: 'We blink and look with our eyes!',
        imageUrl: '👀',
        options: [
          { id: 'k2-eyes', label: 'Eyes', isCorrect: true },
          { id: 'k2-ears', label: 'Ears', isCorrect: false },
          { id: 'k2-nose', label: 'Nose', isCorrect: false }
        ]
      },
      {
        id: 'k-sci-3',
        subjectId: 'science',
        grade: 'kindergarten',
        questionNumber: 3,
        title: 'The Five Senses: Hearing',
        instruction: 'Which body part do we use to listen to birds singing?',
        type: 'choice',
        hint: 'We hear sounds with our ears!',
        imageUrl: '👂',
        options: [
          { id: 'k3-ears', label: 'Ears', isCorrect: true },
          { id: 'k3-tongue', label: 'Tongue', isCorrect: false },
          { id: 'k3-hands', label: 'Hands', isCorrect: false }
        ]
      },
      {
        id: 'k-sci-4',
        subjectId: 'science',
        grade: 'kindergarten',
        questionNumber: 4,
        title: 'Weather Spotter: Sunny Day',
        instruction: 'What shines bright and warm in the sky on a sunny day?',
        type: 'choice',
        hint: 'The big yellow sun warms the whole earth!',
        imageUrl: '☀️',
        options: [
          { id: 'k4-sun', label: 'The Sun', isCorrect: true },
          { id: 'k4-snow', label: 'Snowflakes', isCorrect: false },
          { id: 'k4-moon', label: 'The Moon', isCorrect: false }
        ]
      },
      {
        id: 'k-sci-5',
        subjectId: 'science',
        grade: 'kindergarten',
        questionNumber: 5,
        title: 'Animal Habitat Match: Bird',
        instruction: 'Where do birds build their cozy nests and fly?',
        type: 'choice',
        hint: 'Birds have wings to fly in the sky and rest in trees!',
        imageUrl: '🐦',
        options: [
          { id: 'k5-trees', label: 'Trees and Sky', isCorrect: true },
          { id: 'k5-underwater', label: 'Deep underwater', isCorrect: false },
          { id: 'k5-volcano', label: 'Inside a volcano', isCorrect: false }
        ]
      },
      {
        id: 'k-sci-6',
        subjectId: 'science',
        grade: 'kindergarten',
        questionNumber: 6,
        title: 'The Five Senses: Smell',
        instruction: 'Which organ smells the sweet perfume of a rose flower?',
        type: 'choice',
        hint: 'Take a sniff with your nose!',
        imageUrl: '👃',
        options: [
          { id: 'k6-nose', label: 'Nose', isCorrect: true },
          { id: 'k6-eyes', label: 'Eyes', isCorrect: false },
          { id: 'k6-feet', label: 'Feet', isCorrect: false }
        ]
      },
      {
        id: 'k-sci-7',
        subjectId: 'science',
        grade: 'kindergarten',
        questionNumber: 7,
        title: 'Baby Animals: Mother Hen',
        instruction: 'What is a baby chicken called?',
        type: 'choice',
        hint: 'A tiny fluffy chick says peep-peep!',
        imageUrl: '🐥',
        options: [
          { id: 'k7-chick', label: 'Chick', isCorrect: true },
          { id: 'k7-puppy', label: 'Puppy', isCorrect: false },
          { id: 'k7-kitten', label: 'Kitten', isCorrect: false }
        ]
      },
      {
        id: 'k-sci-8',
        subjectId: 'science',
        grade: 'kindergarten',
        questionNumber: 8,
        title: 'Weather Gear: Rainy Day',
        instruction: 'What do we open to stay dry when raindrops fall from the sky?',
        type: 'choice',
        hint: 'An umbrella keeps the rain off our heads!',
        imageUrl: '☔',
        options: [
          { id: 'k8-umb', label: 'Umbrella', isCorrect: true },
          { id: 'k8-sunglasses', label: 'Sunglasses', isCorrect: false },
          { id: 'k8-fan', label: 'Hand fan', isCorrect: false }
        ]
      },
      {
        id: 'k-sci-9',
        subjectId: 'science',
        grade: 'kindergarten',
        questionNumber: 9,
        title: 'Animal Habitat Match: Fluffy Bunny',
        instruction: 'Where does a bunny rabbit hop and dig cozy burrows?',
        type: 'choice',
        hint: 'Rabbits hop in green grassy land and meadows!',
        imageUrl: '🐰',
        options: [
          { id: 'k9-land', label: 'Green Land & Burrows', isCorrect: true },
          { id: 'k9-ocean', label: 'Deep in the ocean', isCorrect: false }
        ]
      },
      {
        id: 'k-sci-10',
        subjectId: 'science',
        grade: 'kindergarten',
        questionNumber: 10,
        title: 'What Plants Need to Grow',
        instruction: 'What do plants drink from the soil to stay fresh and green?',
        type: 'choice',
        hint: 'Water! Plants love clean refreshing water!',
        imageUrl: '💧',
        options: [
          { id: 'k10-water', label: 'Water', isCorrect: true },
          { id: 'k10-soda', label: 'Soda juice', isCorrect: false },
          { id: 'k10-candy', label: 'Candy syrup', isCorrect: false }
        ]
      }
    ],
    habits: [
      {
        id: 'k-hab-1',
        subjectId: 'habits',
        grade: 'kindergarten',
        questionNumber: 1,
        title: 'Healthy Habits: Washing Hands',
        instruction: 'When should we wash our hands with soap and water?',
        type: 'choice',
        hint: 'Always wash before eating snacks or meals!',
        imageUrl: '🧼',
        options: [
          { id: 'h1-eat', label: 'Before eating meals', isCorrect: true },
          { id: 'h1-never', label: 'Never wash hands', isCorrect: false },
          { id: 'h1-nap', label: 'Only while sleeping', isCorrect: false }
        ]
      },
      {
        id: 'k-hab-2',
        subjectId: 'habits',
        grade: 'kindergarten',
        questionNumber: 2,
        title: 'Magic Manners: Receiving a Gift',
        instruction: 'What is the kind phrase to say when someone gives you a gift?',
        type: 'choice',
        hint: 'Say "Thank you!" with a bright smile!',
        imageUrl: '🎁',
        options: [
          { id: 'h2-ty', label: '"Thank you!"', isCorrect: true },
          { id: 'h2-shout', label: 'Yell and snatch it', isCorrect: false },
          { id: 'h2-silent', label: 'Run away silently', isCorrect: false }
        ]
      },
      {
        id: 'k-hab-3',
        subjectId: 'habits',
        grade: 'kindergarten',
        questionNumber: 3,
        title: 'Clean Teeth Routine',
        instruction: 'How many times each day should we brush our teeth?',
        type: 'choice',
        hint: 'Twice a day: in the morning and before bedtime!',
        imageUrl: '🪥',
        options: [
          { id: 'h3-twice', label: 'Twice a day (morning & night)', isCorrect: true },
          { id: 'h3-onceyr', label: 'Once a year', isCorrect: false },
          { id: 'h3-never', label: 'Never', isCorrect: false }
        ]
      },
      {
        id: 'k-hab-4',
        subjectId: 'habits',
        grade: 'kindergarten',
        questionNumber: 4,
        title: 'Where Does Trash Belong?',
        instruction: 'Where should we put candy wrappers and scrap paper?',
        type: 'choice',
        hint: 'Throw trash inside the waste bin!',
        imageUrl: '🗑️',
        options: [
          { id: 'h4-bin', label: 'In the Trash Bin', isCorrect: true },
          { id: 'h4-floor', label: 'Drop it on the floor', isCorrect: false },
          { id: 'h4-grass', label: 'Throw it on the street', isCorrect: false }
        ]
      },
      {
        id: 'k-hab-5',
        subjectId: 'habits',
        grade: 'kindergarten',
        questionNumber: 5,
        title: 'Playground Sharing',
        instruction: 'When two friends want to ride the same swing, what is the best choice?',
        type: 'choice',
        hint: 'Taking turns is fair and friendly!',
        imageUrl: '🛝',
        options: [
          { id: 'h5-turns', label: 'Take turns nicely', isCorrect: true },
          { id: 'h5-push', label: 'Push your friend away', isCorrect: false },
          { id: 'h5-cry', label: 'Scream and cry', isCorrect: false }
        ]
      },
      {
        id: 'k-hab-6',
        subjectId: 'habits',
        grade: 'kindergarten',
        questionNumber: 6,
        title: 'Magic Manners: Asking for Help',
        instruction: 'What magic word should we use when asking someone for help?',
        type: 'choice',
        hint: '"Please can you help me?"',
        imageUrl: '🤝',
        options: [
          { id: 'h6-please', label: '"Please"', isCorrect: true },
          { id: 'h6-now', label: '"Do it now!"', isCorrect: false },
          { id: 'h6-hey', label: '"Hey you!"', isCorrect: false }
        ]
      },
      {
        id: 'k-hab-7',
        subjectId: 'habits',
        grade: 'kindergarten',
        questionNumber: 7,
        title: 'Healthy Food Fuel',
        instruction: 'Which snack gives your body healthy vitamins to run and jump?',
        type: 'choice',
        hint: 'A fresh, crisp apple!',
        imageUrl: '🍎',
        options: [
          { id: 'h7-apple', label: 'Fresh Apple', isCorrect: true },
          { id: 'h7-lollipop', label: 'Sugary Lollipop', isCorrect: false },
          { id: 'h7-chips', label: 'Greasy chips', isCorrect: false }
        ]
      },
      {
        id: 'k-hab-8',
        subjectId: 'habits',
        grade: 'kindergarten',
        questionNumber: 8,
        title: 'Covering Coughs & Sneezes',
        instruction: 'How should we cover our mouth when we sneeze or cough?',
        type: 'choice',
        hint: 'Cough into your elbow or tissue so germs do not fly!',
        imageUrl: '🤧',
        options: [
          { id: 'h8-elbow', label: 'Into our elbow or a tissue', isCorrect: true },
          { id: 'h8-friends', label: 'Towards friends’ faces', isCorrect: false }
        ]
      },
      {
        id: 'k-hab-9',
        subjectId: 'habits',
        grade: 'kindergarten',
        questionNumber: 9,
        title: 'Tidying Up Toys',
        instruction: 'What should we do after playing with blocks and toys?',
        type: 'choice',
        hint: 'Put toys back into the bin so nobody trips!',
        imageUrl: '🧸',
        options: [
          { id: 'h9-tidy', label: 'Put them away neatly in the toy box', isCorrect: true },
          { id: 'h9-leave', label: 'Leave them scattered on the floor', isCorrect: false }
        ]
      },
      {
        id: 'k-hab-10',
        subjectId: 'habits',
        grade: 'kindergarten',
        questionNumber: 10,
        title: 'Bedtime Rest',
        instruction: 'Why do we need a good night’s sleep?',
        type: 'choice',
        hint: 'Sleep helps our brains and bodies rest, grow, and wake up happy!',
        imageUrl: '😴',
        options: [
          { id: 'h10-sleep', label: 'To rest our body and wake up full of energy', isCorrect: true },
          { id: 'h10-tired', label: 'To feel grumpy and sleepy', isCorrect: false }
        ]
      }
    ]
  },

  // ----------------------------------------------------
  // GRADE 1 (10 Questions for Island 1, 2, 3, 4)
  // ----------------------------------------------------
  grade1: {
    english: [
      {
        id: 'g1-eng-1',
        subjectId: 'english',
        grade: 'grade1',
        questionNumber: 1,
        title: 'Spelling Word: A-P-P-L-E',
        instruction: 'Put the letters in order to spell this sweet and crunchy fruit!',
        type: 'drag-word',
        targetWord: 'APPLE',
        letterPool: ['A', 'P', 'P', 'L', 'E', 'B', 'R'],
        hint: 'A - P - P - L - E spells Apple!',
        imageUrl: '🍎'
      },
      {
        id: 'g1-eng-2',
        subjectId: 'english',
        grade: 'grade1',
        questionNumber: 2,
        title: 'Beginning Sound: Butterfly',
        instruction: 'Which letter does "Butterfly" start with?',
        type: 'choice',
        hint: 'Bbb-utterfly! The letter B!',
        imageUrl: '🦋',
        options: [
          { id: 'g1-b', label: 'B (as in Butterfly)', isCorrect: true },
          { id: 'g1-d', label: 'D (as in Dinosaur)', isCorrect: false },
          { id: 'g1-p', label: 'P (as in Penguin)', isCorrect: false }
        ]
      },
      {
        id: 'g1-eng-3',
        subjectId: 'english',
        grade: 'grade1',
        questionNumber: 3,
        title: 'Spelling Word: B-I-R-D',
        instruction: 'Drag letters to spell the winged animal that flies high!',
        type: 'drag-word',
        targetWord: 'BIRD',
        letterPool: ['B', 'I', 'R', 'D', 'K', 'T'],
        hint: 'B - I - R - D!',
        imageUrl: '🐦'
      },
      {
        id: 'g1-eng-4',
        subjectId: 'english',
        grade: 'grade1',
        questionNumber: 4,
        title: 'Action Verb Identification',
        instruction: 'Which word tells what someone is DOING?',
        type: 'choice',
        hint: 'Running is an active movement!',
        imageUrl: '🏃',
        options: [
          { id: 'g1-run', label: 'Running (action verb)', isCorrect: true },
          { id: 'g1-table', label: 'Table (object)', isCorrect: false },
          { id: 'g1-blue', label: 'Blue (color)', isCorrect: false }
        ]
      },
      {
        id: 'g1-eng-5',
        subjectId: 'english',
        grade: 'grade1',
        questionNumber: 5,
        title: 'Spelling Word: B-O-O-K',
        instruction: 'Spell the storybook we read with our teacher and parents!',
        type: 'drag-word',
        targetWord: 'BOOK',
        letterPool: ['B', 'O', 'O', 'K', 'P', 'T'],
        hint: 'B - O - O - K!',
        imageUrl: '📖'
      },
      {
        id: 'g1-eng-6',
        subjectId: 'english',
        grade: 'grade1',
        questionNumber: 6,
        title: 'Opposites Match: HOT',
        instruction: 'What is the opposite of HOT?',
        type: 'choice',
        hint: 'Ice cream and snow are COLD!',
        imageUrl: '🔥',
        options: [
          { id: 'g1-cold', label: 'Cold', isCorrect: true },
          { id: 'g1-warm', label: 'Warm', isCorrect: false },
          { id: 'g1-big', label: 'Big', isCorrect: false }
        ]
      },
      {
        id: 'g1-eng-7',
        subjectId: 'english',
        grade: 'grade1',
        questionNumber: 7,
        title: 'Spelling Word: F-I-S-H',
        instruction: 'Spell the creature with gills that swims in the ocean!',
        type: 'drag-word',
        targetWord: 'FISH',
        letterPool: ['F', 'I', 'S', 'H', 'M', 'N'],
        hint: 'F - I - S - H!',
        imageUrl: '🐠'
      },
      {
        id: 'g1-eng-8',
        subjectId: 'english',
        grade: 'grade1',
        questionNumber: 8,
        title: 'Sentence Capitalization',
        instruction: 'How should the first letter of a sentence always be written?',
        type: 'choice',
        hint: 'Sentences always begin with a Capital (Uppercase) letter!',
        imageUrl: '✍️',
        options: [
          { id: 'g1-cap', label: 'With a Capital (Uppercase) letter', isCorrect: true },
          { id: 'g1-low', label: 'With a tiny lowercase letter', isCorrect: false }
        ]
      },
      {
        id: 'g1-eng-9',
        subjectId: 'english',
        grade: 'grade1',
        questionNumber: 9,
        title: 'Spelling Word: S-T-A-R',
        instruction: 'Spell the shiny object that sparkles in the night sky!',
        type: 'drag-word',
        targetWord: 'STAR',
        letterPool: ['S', 'T', 'A', 'R', 'P', 'E'],
        hint: 'S - T - A - R!',
        imageUrl: '⭐'
      },
      {
        id: 'g1-eng-10',
        subjectId: 'english',
        grade: 'grade1',
        questionNumber: 10,
        title: 'Ending Punctuation Mark',
        instruction: 'What punctuation mark goes at the end of a telling sentence: "The cat is asleep"',
        type: 'choice',
        hint: 'A period (.) ends a telling sentence!',
        imageUrl: '🛑',
        options: [
          { id: 'g1-period', label: 'Period (.)', isCorrect: true },
          { id: 'g1-comma', label: 'Comma (,)', isCorrect: false }
        ]
      }
    ],
    math: [
      {
        id: 'g1-mat-1',
        subjectId: 'math',
        grade: 'grade1',
        questionNumber: 1,
        title: 'Addition: 3 + 2',
        instruction: 'If you have 3 blue stars and get 2 more, how many do you have in total?',
        type: 'choice',
        hint: 'Count on: 3... 4, 5!',
        imageUrl: '⭐⭐⭐ + ⭐⭐',
        options: [
          { id: 'm1-5', label: '5 Stars', isCorrect: true },
          { id: 'm1-4', label: '4 Stars', isCorrect: false },
          { id: 'm1-6', label: '6 Stars', isCorrect: false }
        ]
      },
      {
        id: 'g1-mat-2',
        subjectId: 'math',
        grade: 'grade1',
        questionNumber: 2,
        title: 'Subtraction: 6 - 2',
        instruction: 'You have 6 juicy strawberries and eat 2. How many are left?',
        type: 'choice',
        hint: '6 minus 2 equals 4!',
        imageUrl: '🍓🍓🍓🍓🍓🍓',
        options: [
          { id: 'm2-4', label: '4 Strawberries', isCorrect: true },
          { id: 'm2-5', label: '5 Strawberries', isCorrect: false },
          { id: 'm2-3', label: '3 Strawberries', isCorrect: false }
        ]
      },
      {
        id: 'g1-mat-3',
        subjectId: 'math',
        grade: 'grade1',
        questionNumber: 3,
        title: 'Count 7 Shiny Star Badges',
        instruction: 'Count all 7 twinkling star badges below!',
        type: 'count-drag',
        countTarget: 7,
        countItems: [
          { id: 'st1', emoji: '⭐', name: 'Star 1' },
          { id: 'st2', emoji: '⭐', name: 'Star 2' },
          { id: 'st3', emoji: '⭐', name: 'Star 3' },
          { id: 'st4', emoji: '⭐', name: 'Star 4' },
          { id: 'st5', emoji: '⭐', name: 'Star 5' },
          { id: 'st6', emoji: '⭐', name: 'Star 6' },
          { id: 'st7', emoji: '⭐', name: 'Star 7' }
        ],
        hint: '1, 2, 3, 4, 5, 6, 7!',
        letterPool: ['5', '6', '7', '8']
      },
      {
        id: 'g1-mat-4',
        subjectId: 'math',
        grade: 'grade1',
        questionNumber: 4,
        title: 'Addition Doubles: 4 + 4',
        instruction: 'What is 4 plus 4?',
        type: 'choice',
        hint: '4 plus 4 equals 8!',
        imageUrl: '🔢',
        options: [
          { id: 'm4-8', label: '8', isCorrect: true },
          { id: 'm4-7', label: '7', isCorrect: false },
          { id: 'm4-9', label: '9', isCorrect: false }
        ]
      },
      {
        id: 'g1-mat-5',
        subjectId: 'math',
        grade: 'grade1',
        questionNumber: 5,
        title: 'Shape Sides: Square',
        instruction: 'How many equal straight sides does a Square have?',
        type: 'choice',
        hint: 'A square has 4 equal straight sides!',
        imageUrl: '🟩',
        options: [
          { id: 'm5-4', label: '4 equal sides', isCorrect: true },
          { id: 'm5-3', label: '3 sides', isCorrect: false },
          { id: 'm5-5', label: '5 sides', isCorrect: false }
        ]
      },
      {
        id: 'g1-mat-6',
        subjectId: 'math',
        grade: 'grade1',
        questionNumber: 6,
        title: 'Subtraction: 8 - 3',
        instruction: 'If you have 8 toy blocks and put away 3, how many remain?',
        type: 'choice',
        hint: '8 take away 3 leaves 5!',
        imageUrl: '🧱',
        options: [
          { id: 'm6-5', label: '5 Blocks', isCorrect: true },
          { id: 'm6-6', label: '6 Blocks', isCorrect: false },
          { id: 'm6-4', label: '4 Blocks', isCorrect: false }
        ]
      },
      {
        id: 'g1-mat-7',
        subjectId: 'math',
        grade: 'grade1',
        questionNumber: 7,
        title: 'Missing Number Pattern: 2, 4, 6, [?]',
        instruction: 'What number completes the pattern: 2, 4, 6, ___',
        type: 'choice',
        hint: 'Skip counting by 2s: 2, 4, 6, 8!',
        imageUrl: '👣',
        options: [
          { id: 'm7-8', label: '8', isCorrect: true },
          { id: 'm7-7', label: '7', isCorrect: false },
          { id: 'm7-9', label: '9', isCorrect: false }
        ]
      },
      {
        id: 'g1-mat-8',
        subjectId: 'math',
        grade: 'grade1',
        questionNumber: 8,
        title: 'Count 8 Swimming Fishes',
        instruction: 'Count the 8 tropical fish in the coral reef!',
        type: 'count-drag',
        countTarget: 8,
        countItems: [
          { id: 'f1', emoji: '🐠', name: 'Fish 1' },
          { id: 'f2', emoji: '🐠', name: 'Fish 2' },
          { id: 'f3', emoji: '🐠', name: 'Fish 3' },
          { id: 'f4', emoji: '🐠', name: 'Fish 4' },
          { id: 'f5', emoji: '🐠', name: 'Fish 5' },
          { id: 'f6', emoji: '🐠', name: 'Fish 6' },
          { id: 'f7', emoji: '🐠', name: 'Fish 7' },
          { id: 'f8', emoji: '🐠', name: 'Fish 8' }
        ],
        hint: '8 fish swimming together!',
        letterPool: ['6', '7', '8', '9']
      },
      {
        id: 'g1-mat-9',
        subjectId: 'math',
        grade: 'grade1',
        questionNumber: 9,
        title: 'Making 10: 7 + [?]',
        instruction: 'What number added to 7 makes 10?',
        type: 'choice',
        hint: '7 + 3 = 10!',
        imageUrl: '🔟',
        options: [
          { id: 'm9-3', label: '3', isCorrect: true },
          { id: 'm9-2', label: '2', isCorrect: false },
          { id: 'm9-4', label: '4', isCorrect: false }
        ]
      },
      {
        id: 'g1-mat-10',
        subjectId: 'math',
        grade: 'grade1',
        questionNumber: 10,
        title: 'Comparing: Greater Than',
        instruction: 'Which is greater: 10 or 7?',
        type: 'choice',
        hint: '10 is greater than 7!',
        imageUrl: '⚖️',
        options: [
          { id: 'm10-10', label: '10 is greater', isCorrect: true },
          { id: 'm10-7', label: '7 is greater', isCorrect: false }
        ]
      }
    ],
    science: [
      {
        id: 'g1-sci-1',
        subjectId: 'science',
        grade: 'grade1',
        questionNumber: 1,
        title: 'Living vs Non-Living: Puppy',
        instruction: 'Is a playful puppy a living thing or non-living object?',
        type: 'choice',
        hint: 'Puppies breathe, eat food, run, and grow!',
        imageUrl: '🐶',
        options: [
          { id: 's1-living', label: 'Living Thing (breathes & grows)', isCorrect: true },
          { id: 's1-non', label: 'Non-Living Object', isCorrect: false }
        ]
      },
      {
        id: 'g1-sci-2',
        subjectId: 'science',
        grade: 'grade1',
        questionNumber: 2,
        title: 'Living vs Non-Living: Toy Ball',
        instruction: 'Is a rubber soccer ball living or non-living?',
        type: 'choice',
        hint: 'A ball cannot eat or grow; it is a toy object!',
        imageUrl: '⚽',
        options: [
          { id: 's2-non', label: 'Non-Living Object', isCorrect: true },
          { id: 's2-living', label: 'Living Thing', isCorrect: false }
        ]
      },
      {
        id: 'g1-sci-3',
        subjectId: 'science',
        grade: 'grade1',
        questionNumber: 3,
        title: 'Plant Parts: Roots in Soil',
        instruction: 'Which part of the plant drinks water from the soil?',
        type: 'choice',
        hint: 'Roots grow underground like drinking straws!',
        imageUrl: '🌱',
        options: [
          { id: 's3-roots', label: 'Roots (in the ground)', isCorrect: true },
          { id: 's3-petals', label: 'Flower Petals', isCorrect: false },
          { id: 's3-bark', label: 'Tree Bark', isCorrect: false }
        ]
      },
      {
        id: 'g1-sci-4',
        subjectId: 'science',
        grade: 'grade1',
        questionNumber: 4,
        title: 'Animal Body Coverings: Birds',
        instruction: 'What soft covering keeps birds warm and helps them fly?',
        type: 'choice',
        hint: 'Feathers!',
        imageUrl: '🪶',
        options: [
          { id: 's4-feathers', label: 'Feathers', isCorrect: true },
          { id: 's4-scales', label: 'Fish scales', isCorrect: false },
          { id: 's4-wool', label: 'Sheep wool', isCorrect: false }
        ]
      },
      {
        id: 'g1-sci-5',
        subjectId: 'science',
        grade: 'grade1',
        questionNumber: 5,
        title: 'Day and Night Sky: The Sun',
        instruction: 'When does the Sun illuminate the sky with daylight?',
        type: 'choice',
        hint: 'During the daytime!',
        imageUrl: '🌞',
        options: [
          { id: 's5-day', label: 'Daytime', isCorrect: true },
          { id: 's5-night', label: 'Midnight', isCorrect: false }
        ]
      },
      {
        id: 'g1-sci-6',
        subjectId: 'science',
        grade: 'grade1',
        questionNumber: 6,
        title: 'Plant Stem Role',
        instruction: 'What is the job of a plant’s stem?',
        type: 'choice',
        hint: 'The stem holds the plant tall and carries water to the leaves!',
        imageUrl: '🌻',
        options: [
          { id: 's6-stem', label: 'Holds the plant up and carries water', isCorrect: true },
          { id: 's6-breathe', label: 'Flies into the sky', isCorrect: false }
        ]
      },
      {
        id: 'g1-sci-7',
        subjectId: 'science',
        grade: 'grade1',
        questionNumber: 7,
        title: 'Animal Body Coverings: Fish',
        instruction: 'What shiny waterproof layer covers the body of a fish?',
        type: 'choice',
        hint: 'Scales!',
        imageUrl: '🐠',
        options: [
          { id: 's7-scales', label: 'Scales', isCorrect: true },
          { id: 's7-fur', label: 'Fluffy fur', isCorrect: false },
          { id: 's7-feathers', label: 'Feathers', isCorrect: false }
        ]
      },
      {
        id: 'g1-sci-8',
        subjectId: 'science',
        grade: 'grade1',
        questionNumber: 8,
        title: 'Living Things Need Air',
        instruction: 'What invisible gas in the air do animals and humans breathe to live?',
        type: 'choice',
        hint: 'Oxygen in clean air!',
        imageUrl: '💨',
        options: [
          { id: 's8-air', label: 'Air (Oxygen)', isCorrect: true },
          { id: 's8-dirt', label: 'Dirt', isCorrect: false }
        ]
      },
      {
        id: 'g1-sci-9',
        subjectId: 'science',
        grade: 'grade1',
        questionNumber: 9,
        title: 'Animal Homes: Honeybee',
        instruction: 'Where do honeybees store honey and raise their young?',
        type: 'choice',
        hint: 'In a beehive!',
        imageUrl: '🐝',
        options: [
          { id: 's9-hive', label: 'A Beehive', isCorrect: true },
          { id: 's9-cave', label: 'Under the ocean floor', isCorrect: false }
        ]
      },
      {
        id: 'g1-sci-10',
        subjectId: 'science',
        grade: 'grade1',
        questionNumber: 10,
        title: 'Plant Leaves and Sunlight',
        instruction: 'What color are healthy plant leaves that catch warm sunlight?',
        type: 'choice',
        hint: 'Green leaves!',
        imageUrl: '🍃',
        options: [
          { id: 's10-green', label: 'Green', isCorrect: true },
          { id: 's10-purple', label: 'Bright purple', isCorrect: false }
        ]
      }
    ],
    habits: [
      {
        id: 'g1-hab-1',
        subjectId: 'habits',
        grade: 'grade1',
        questionNumber: 1,
        title: 'Proper Handwashing Order: Step 1',
        instruction: 'What is the very first step when washing dirty hands?',
        type: 'choice',
        hint: 'First wet hands with clean running water!',
        imageUrl: '💧',
        options: [
          { id: 'h1-wet', label: 'Wet hands with clean running water', isCorrect: true },
          { id: 'h1-towel', label: 'Dry with towel first', isCorrect: false }
        ]
      },
      {
        id: 'g1-hab-2',
        subjectId: 'habits',
        grade: 'grade1',
        questionNumber: 2,
        title: 'Handwashing Order: Step 2',
        instruction: 'What do we apply and rub to make rich bubbly lather?',
        type: 'choice',
        hint: 'Apply soap and scrub for 20 seconds!',
        imageUrl: '🧼',
        options: [
          { id: 'h2-soap', label: 'Apply soap and rub bubbles all over', isCorrect: true },
          { id: 'h2-mud', label: 'Rub dirt', isCorrect: false }
        ]
      },
      {
        id: 'g1-hab-3',
        subjectId: 'habits',
        grade: 'grade1',
        questionNumber: 3,
        title: 'Healthy Snack Detective',
        instruction: 'Which snack gives long-lasting energy for schoolwork?',
        type: 'choice',
        hint: 'A fresh ripe banana full of potassium and vitamins!',
        imageUrl: '🍌',
        options: [
          { id: 'h3-banana', label: 'A fresh ripe banana', isCorrect: true },
          { id: 'h3-candy', label: 'A bowl of sugar candy', isCorrect: false }
        ]
      },
      {
        id: 'g1-hab-4',
        subjectId: 'habits',
        grade: 'grade1',
        questionNumber: 4,
        title: 'Road Safety: Crossing the Street',
        instruction: 'What must you do before crossing the street with a parent?',
        type: 'choice',
        hint: 'Look left, look right, and hold an adult’s hand!',
        imageUrl: '🚶',
        options: [
          { id: 'h4-look', label: 'Look both ways and hold an adult’s hand', isCorrect: true },
          { id: 'h4-run', label: 'Run into the street with eyes closed', isCorrect: false }
        ]
      },
      {
        id: 'g1-hab-5',
        subjectId: 'habits',
        grade: 'grade1',
        questionNumber: 5,
        title: 'Classroom Kindness',
        instruction: 'If a classmate drops their colored pencils, what is the kindest action?',
        type: 'choice',
        hint: 'Bend down and help them pick up their pencils!',
        imageUrl: '✏️',
        options: [
          { id: 'h5-help', label: 'Help them pick up the pencils nicely', isCorrect: true },
          { id: 'h5-laugh', label: 'Laugh and step on them', isCorrect: false }
        ]
      },
      {
        id: 'g1-hab-6',
        subjectId: 'habits',
        grade: 'grade1',
        questionNumber: 6,
        title: 'Proper Hydration',
        instruction: 'What is the healthiest drink to quench your thirst after PE class?',
        type: 'choice',
        hint: 'Clean, refreshing water!',
        imageUrl: '🥛',
        options: [
          { id: 'h6-water', label: 'Clean water', isCorrect: true },
          { id: 'h6-soda', label: 'Fizzy sugary soda', isCorrect: false }
        ]
      },
      {
        id: 'g1-hab-7',
        subjectId: 'habits',
        grade: 'grade1',
        questionNumber: 7,
        title: 'Saying "I am Sorry"',
        instruction: 'When should we say "I am sorry"?',
        type: 'choice',
        hint: 'When we make an accidental mistake or hurt someone’s feelings.',
        imageUrl: '💛',
        options: [
          { id: 'h7-sorry', label: 'When we accidentally bump or upset someone', isCorrect: true },
          { id: 'h7-never', label: 'Never apologize', isCorrect: false }
        ]
      },
      {
        id: 'g1-hab-8',
        subjectId: 'habits',
        grade: 'grade1',
        questionNumber: 8,
        title: 'Handwashing Step 3: Rinsing',
        instruction: 'What do we do after scrubbing soap bubbles on our fingers?',
        type: 'choice',
        hint: 'Rinse thoroughly under running water!',
        imageUrl: '🚿',
        options: [
          { id: 'h8-rinse', label: 'Rinse all bubbles off with clean water', isCorrect: true },
          { id: 'h8-shirt', label: 'Wipe wet soap on our shirt', isCorrect: false }
        ]
      },
      {
        id: 'g1-hab-9',
        subjectId: 'habits',
        grade: 'grade1',
        questionNumber: 9,
        title: 'Handwashing Step 4: Drying',
        instruction: 'How should we finish handwashing?',
        type: 'choice',
        hint: 'Dry hands with a clean dry towel!',
        imageUrl: '🧺',
        options: [
          { id: 'h9-dry', label: 'Dry thoroughly with a clean towel', isCorrect: true },
          { id: 'h9-floor', label: 'Wipe hands on the floor', isCorrect: false }
        ]
      },
      {
        id: 'g1-hab-10',
        subjectId: 'habits',
        grade: 'grade1',
        questionNumber: 10,
        title: 'Morning Readiness',
        instruction: 'Why should we eat a healthy breakfast before going to school?',
        type: 'choice',
        hint: 'Breakfast fuels your brain so you can listen, learn, and play happily!',
        imageUrl: '🥣',
        options: [
          { id: 'h10-bfast', label: 'Gives our brain energy to learn and participate', isCorrect: true },
          { id: 'h10-skip', label: 'It does not matter', isCorrect: false }
        ]
      }
    ]
  },

  // ----------------------------------------------------
  // GRADE 2 (10 Questions for Island 1, 2, 3, 4)
  // ----------------------------------------------------
  grade2: {
    english: [
      {
        id: 'g2-eng-1',
        subjectId: 'english',
        grade: 'grade2',
        questionNumber: 1,
        title: 'Spelling Word: F-R-I-E-N-D',
        instruction: 'Drag the letters to complete the word for someone special you play with!',
        type: 'drag-word',
        targetWord: 'FRIEND',
        letterPool: ['F', 'R', 'I', 'E', 'N', 'D', 'T', 'S'],
        hint: 'Remember: i before e in Friend! F-R-I-E-N-D.',
        imageUrl: '🤝'
      },
      {
        id: 'g2-eng-2',
        subjectId: 'english',
        grade: 'grade2',
        questionNumber: 2,
        title: 'Spelling Word: S-C-H-O-O-L',
        instruction: 'Spell the magical place where we learn with teachers and friends!',
        type: 'drag-word',
        targetWord: 'SCHOOL',
        letterPool: ['S', 'C', 'H', 'O', 'O', 'L', 'T', 'P'],
        hint: 'S - C - H - O - O - L!',
        imageUrl: '🏫'
      },
      {
        id: 'g2-eng-3',
        subjectId: 'english',
        grade: 'grade2',
        questionNumber: 3,
        title: 'Synonym Detective: GLAD',
        instruction: 'Which word has the same meaning as GLAD?',
        type: 'choice',
        hint: 'Glad means happy and cheerful!',
        imageUrl: '😊',
        options: [
          { id: 'g2-happy', label: 'Happy', isCorrect: true },
          { id: 'g2-sad', label: 'Sad', isCorrect: false },
          { id: 'g2-angry', label: 'Angry', isCorrect: false }
        ]
      },
      {
        id: 'g2-eng-4',
        subjectId: 'english',
        grade: 'grade2',
        questionNumber: 4,
        title: 'Question Punctuation',
        instruction: 'Which sentence asks an inquiry question and needs a question mark (?)?',
        type: 'choice',
        hint: 'Look for the sentence asking "Where are you going?"',
        imageUrl: '❓',
        options: [
          { id: 'g2-q', label: '"Where is my library book?"', isCorrect: true },
          { id: 'g2-t', label: '"The grass is green."', isCorrect: false }
        ]
      },
      {
        id: 'g2-eng-5',
        subjectId: 'english',
        grade: 'grade2',
        questionNumber: 5,
        title: 'Spelling Word: T-E-A-C-H',
        instruction: 'Spell the word that describes how educators guide us in class!',
        type: 'drag-word',
        targetWord: 'TEACH',
        letterPool: ['T', 'E', 'A', 'C', 'H', 'R', 'P'],
        hint: 'T - E - A - C - H!',
        imageUrl: '👩‍🏫'
      },
      {
        id: 'g2-eng-6',
        subjectId: 'english',
        grade: 'grade2',
        questionNumber: 6,
        title: 'Identifying Adjectives (Describing Words)',
        instruction: 'Which word in "The fluffy kitten purred" is an Adjective?',
        type: 'choice',
        hint: '"Fluffy" describes how the kitten feels!',
        imageUrl: '🐱',
        options: [
          { id: 'g2-fluffy', label: 'Fluffy (describing word)', isCorrect: true },
          { id: 'g2-kitten', label: 'Kitten (naming noun)', isCorrect: false },
          { id: 'g2-purred', label: 'Purred (action verb)', isCorrect: false }
        ]
      },
      {
        id: 'g2-eng-7',
        subjectId: 'english',
        grade: 'grade2',
        questionNumber: 7,
        title: 'Spelling Word: G-A-R-D-E-N',
        instruction: 'Spell the outdoor place filled with blooming flowers and butterflies!',
        type: 'drag-word',
        targetWord: 'GARDEN',
        letterPool: ['G', 'A', 'R', 'D', 'E', 'N', 'T', 'S'],
        hint: 'G - A - R - D - E - N!',
        imageUrl: '🏡'
      },
      {
        id: 'g2-eng-8',
        subjectId: 'english',
        grade: 'grade2',
        questionNumber: 8,
        title: 'Antonym: FAST',
        instruction: 'What is the opposite of FAST?',
        type: 'choice',
        hint: 'A turtle crawls SLOW!',
        imageUrl: '🐢',
        options: [
          { id: 'g2-slow', label: 'Slow', isCorrect: true },
          { id: 'g2-quick', label: 'Quick', isCorrect: false },
          { id: 'g2-speedy', label: 'Speedy', isCorrect: false }
        ]
      },
      {
        id: 'g2-eng-9',
        subjectId: 'english',
        grade: 'grade2',
        questionNumber: 9,
        title: 'Spelling Word: P-L-A-N-E-T',
        instruction: 'Spell our world Earth, orbiting in the cosmic solar system!',
        type: 'drag-word',
        targetWord: 'PLANET',
        letterPool: ['P', 'L', 'A', 'N', 'E', 'T', 'S', 'M'],
        hint: 'P - L - A - N - E - T!',
        imageUrl: '🌍'
      },
      {
        id: 'g2-eng-10',
        subjectId: 'english',
        grade: 'grade2',
        questionNumber: 10,
        title: 'Exclamation Punctuation (!)',
        instruction: 'What mark expresses excitement in: "We won the learning game!"',
        type: 'choice',
        hint: 'An Exclamation Mark (!) expresses excitement!',
        imageUrl: '🎉',
        options: [
          { id: 'g2-excl', label: 'Exclamation Point (!)', isCorrect: true },
          { id: 'g2-period2', label: 'Period (.)', isCorrect: false }
        ]
      }
    ],
    math: [
      {
        id: 'g2-mat-1',
        subjectId: 'math',
        grade: 'grade2',
        questionNumber: 1,
        title: 'Missing Number Pattern: Counting by 2s',
        instruction: 'Complete the pattern: 2, 4, 6, [ ? ], 10',
        type: 'choice',
        hint: '2, 4, 6, 8, 10!',
        imageUrl: '🔢',
        options: [
          { id: 'm1-8', label: '8', isCorrect: true },
          { id: 'm1-7', label: '7', isCorrect: false },
          { id: 'm1-9', label: '9', isCorrect: false }
        ]
      },
      {
        id: 'g2-mat-2',
        subjectId: 'math',
        grade: 'grade2',
        questionNumber: 2,
        title: 'Double Digit Addition: 10 + 5',
        instruction: 'What is 10 plus 5?',
        type: 'choice',
        hint: '10 + 5 = 15!',
        imageUrl: '🔟 + 5️⃣',
        options: [
          { id: 'm2-15', label: '15', isCorrect: true },
          { id: 'm2-14', label: '14', isCorrect: false },
          { id: 'm2-16', label: '16', isCorrect: false }
        ]
      },
      {
        id: 'g2-mat-3',
        subjectId: 'math',
        grade: 'grade2',
        questionNumber: 3,
        title: 'Skip Counting by 5s: 5, 10, 15, [?], 25',
        instruction: 'What number is missing: 5, 10, 15, ___, 25',
        type: 'choice',
        hint: '15 plus 5 equals 20!',
        imageUrl: '🖐️',
        options: [
          { id: 'm3-20', label: '20', isCorrect: true },
          { id: 'm3-18', label: '18', isCorrect: false },
          { id: 'm3-22', label: '22', isCorrect: false }
        ]
      },
      {
        id: 'g2-mat-4',
        subjectId: 'math',
        grade: 'grade2',
        questionNumber: 4,
        title: 'Word Story: Sharing Apples',
        instruction: 'Maya has 12 apples and shares 4 with Lucas. How many apples does Maya have left?',
        type: 'choice',
        hint: '12 minus 4 = 8!',
        imageUrl: '🍎',
        options: [
          { id: 'm4-8', label: '8 Apples', isCorrect: true },
          { id: 'm4-9', label: '9 Apples', isCorrect: false },
          { id: 'm4-7', label: '7 Apples', isCorrect: false }
        ]
      },
      {
        id: 'g2-mat-5',
        subjectId: 'math',
        grade: 'grade2',
        questionNumber: 5,
        title: 'Addition with Tens: 20 + 30',
        instruction: 'What is 20 + 30?',
        type: 'choice',
        hint: '2 tens + 3 tens = 5 tens (50)!',
        imageUrl: '🧮',
        options: [
          { id: 'm5-50', label: '50', isCorrect: true },
          { id: 'm5-40', label: '40', isCorrect: false },
          { id: 'm5-60', label: '60', isCorrect: false }
        ]
      },
      {
        id: 'g2-mat-6',
        subjectId: 'math',
        grade: 'grade2',
        questionNumber: 6,
        title: 'Count 10 Golden Stars',
        instruction: 'Count all 10 golden stars in the constellation!',
        type: 'count-drag',
        countTarget: 10,
        countItems: [
          { id: 'gs1', emoji: '⭐', name: 'Star 1' },
          { id: 'gs2', emoji: '⭐', name: 'Star 2' },
          { id: 'gs3', emoji: '⭐', name: 'Star 3' },
          { id: 'gs4', emoji: '⭐', name: 'Star 4' },
          { id: 'gs5', emoji: '⭐', name: 'Star 5' },
          { id: 'gs6', emoji: '⭐', name: 'Star 6' },
          { id: 'gs7', emoji: '⭐', name: 'Star 7' },
          { id: 'gs8', emoji: '⭐', name: 'Star 8' },
          { id: 'gs9', emoji: '⭐', name: 'Star 9' },
          { id: 'gs10', emoji: '⭐', name: 'Star 10' }
        ],
        hint: 'A full bundle of 10 stars!',
        letterPool: ['8', '9', '10', '11']
      },
      {
        id: 'g2-mat-7',
        subjectId: 'math',
        grade: 'grade2',
        questionNumber: 7,
        title: 'Skip Counting by 10s: 10, 20, 30, [?]',
        instruction: 'What comes next: 10, 20, 30, ___',
        type: 'choice',
        hint: '40!',
        imageUrl: '🔢',
        options: [
          { id: 'm7-40', label: '40', isCorrect: true },
          { id: 'm7-35', label: '35', isCorrect: false },
          { id: 'm7-50', label: '50', isCorrect: false }
        ]
      },
      {
        id: 'g2-mat-8',
        subjectId: 'math',
        grade: 'grade2',
        questionNumber: 8,
        title: 'Even or Odd Number',
        instruction: 'Is the number 6 an Even number or an Odd number?',
        type: 'choice',
        hint: '6 can be split evenly into 3 and 3 without any leftovers!',
        imageUrl: '✌️',
        options: [
          { id: 'm8-even', label: 'Even Number', isCorrect: true },
          { id: 'm8-odd', label: 'Odd Number', isCorrect: false }
        ]
      },
      {
        id: 'g2-mat-9',
        subjectId: 'math',
        grade: 'grade2',
        questionNumber: 9,
        title: 'Place Value: The Number 25',
        instruction: 'In the number 25, how many tens and how many ones are there?',
        type: 'choice',
        hint: '2 Tens and 5 Ones!',
        imageUrl: '🧩',
        options: [
          { id: 'm9-tens', label: '2 Tens and 5 Ones', isCorrect: true },
          { id: 'm9-other', label: '5 Tens and 2 Ones', isCorrect: false }
        ]
      },
      {
        id: 'g2-mat-10',
        subjectId: 'math',
        grade: 'grade2',
        questionNumber: 10,
        title: 'Subtraction Facts: 15 - 5',
        instruction: 'What is 15 minus 5?',
        type: 'choice',
        hint: '15 take away 5 equals 10!',
        imageUrl: '🔟',
        options: [
          { id: 'm10-10', label: '10', isCorrect: true },
          { id: 'm10-8', label: '8', isCorrect: false },
          { id: 'm10-12', label: '12', isCorrect: false }
        ]
      }
    ],
    science: [
      {
        id: 'g2-sci-1',
        subjectId: 'science',
        grade: 'grade2',
        questionNumber: 1,
        title: 'Plant Photosynthesis & Sunlight',
        instruction: 'Which part of a plant catches warm sunlight to make food energy?',
        type: 'choice',
        hint: 'Green leaves soak in warm sunlight!',
        imageUrl: '🍃',
        options: [
          { id: 's1-leaves', label: 'Green Leaves', isCorrect: true },
          { id: 's1-roots', label: 'Roots in dirt', isCorrect: false },
          { id: 's1-bark', label: 'Bark', isCorrect: false }
        ]
      },
      {
        id: 'g2-sci-2',
        subjectId: 'science',
        grade: 'grade2',
        questionNumber: 2,
        title: 'The Water Cycle: Rain Clouds',
        instruction: 'What falls from heavy sky clouds when tiny water drops cluster together?',
        type: 'choice',
        hint: 'Rain precipitation!',
        imageUrl: '🌧️',
        options: [
          { id: 's2-rain', label: 'Rain (liquid precipitation)', isCorrect: true },
          { id: 's2-rocks', label: 'Falling rocks', isCorrect: false },
          { id: 's2-candy', label: 'Candy drops', isCorrect: false }
        ]
      },
      {
        id: 'g2-sci-3',
        subjectId: 'science',
        grade: 'grade2',
        questionNumber: 3,
        title: 'Plant Lifecycle: The Beginning',
        instruction: 'What small thing do we plant in the soil to grow a new sunflower?',
        type: 'choice',
        hint: 'A seed!',
        imageUrl: '🌻',
        options: [
          { id: 's3-seed', label: 'A Seed', isCorrect: true },
          { id: 's3-stone', label: 'A Stone', isCorrect: false }
        ]
      },
      {
        id: 'g2-sci-4',
        subjectId: 'science',
        grade: 'grade2',
        questionNumber: 4,
        title: 'Animal Diets: Herbivores',
        instruction: 'What does a gentle rabbit or deer eat?',
        type: 'choice',
        hint: 'Plants, grass, and leafy greens!',
        imageUrl: '🥕',
        options: [
          { id: 's4-plants', label: 'Plants and vegetables (Herbivore)', isCorrect: true },
          { id: 's4-meat', label: 'Other animals', isCorrect: false }
        ]
      },
      {
        id: 'g2-sci-5',
        subjectId: 'science',
        grade: 'grade2',
        questionNumber: 5,
        title: 'Conserving Water',
        instruction: 'Why should we turn off the water faucet while brushing our teeth?',
        type: 'choice',
        hint: 'To save fresh clean water from being wasted!',
        imageUrl: '🚰',
        options: [
          { id: 's5-save', label: 'To conserve clean water', isCorrect: true },
          { id: 's5-waste', label: 'To make the sink overflow', isCorrect: false }
        ]
      },
      {
        id: 'g2-sci-6',
        subjectId: 'science',
        grade: 'grade2',
        questionNumber: 6,
        title: 'Seasons of the Year',
        instruction: 'In which season do colorful leaves turn golden and fall from trees?',
        type: 'choice',
        hint: 'Autumn / Fall!',
        imageUrl: '🍂',
        options: [
          { id: 's6-fall', label: 'Autumn (Fall)', isCorrect: true },
          { id: 's6-summer', label: 'Hot Summer', isCorrect: false }
        ]
      },
      {
        id: 'g2-sci-7',
        subjectId: 'science',
        grade: 'grade2',
        questionNumber: 7,
        title: 'Earth’s Solar System',
        instruction: 'What is at the very center of our solar system that planets orbit around?',
        type: 'choice',
        hint: 'The Sun!',
        imageUrl: '☀️',
        options: [
          { id: 's7-sun', label: 'The Sun', isCorrect: true },
          { id: 's7-moon', label: 'The Moon', isCorrect: false }
        ]
      },
      {
        id: 'g2-sci-8',
        subjectId: 'science',
        grade: 'grade2',
        questionNumber: 8,
        title: 'States of Matter: Ice',
        instruction: 'What happens when liquid water becomes freezing cold?',
        type: 'choice',
        hint: 'It freezes into solid ice cubes!',
        imageUrl: '🧊',
        options: [
          { id: 's8-ice', label: 'It freezes into solid ice', isCorrect: true },
          { id: 's8-steam', label: 'It turns into hot steam', isCorrect: false }
        ]
      },
      {
        id: 'g2-sci-9',
        subjectId: 'science',
        grade: 'grade2',
        questionNumber: 9,
        title: 'Nocturnal Animals',
        instruction: 'Which animal stays awake and hunts under the night stars?',
        type: 'choice',
        hint: 'An Owl with big eyes that see in the dark!',
        imageUrl: '🦉',
        options: [
          { id: 's9-owl', label: 'An Owl (nocturnal)', isCorrect: true },
          { id: 's9-duck', label: 'A duckling', isCorrect: false }
        ]
      },
      {
        id: 'g2-sci-10',
        subjectId: 'science',
        grade: 'grade2',
        questionNumber: 10,
        title: 'Protecting Animal Habitats',
        instruction: 'How can humans help protect wildlife in forests and oceans?',
        type: 'choice',
        hint: 'By planting trees and keeping plastics out of rivers!',
        imageUrl: '🌲',
        options: [
          { id: 's10-protect', label: 'Keep waters clean and plant trees', isCorrect: true },
          { id: 's10-litter', label: 'Drop trash in forests', isCorrect: false }
        ]
      }
    ],
    habits: [
      {
        id: 'g2-hab-1',
        subjectId: 'habits',
        grade: 'grade2',
        questionNumber: 1,
        title: 'Recycling Champions',
        instruction: 'Where should an empty plastic water bottle be deposited?',
        type: 'choice',
        hint: 'In the blue recycling bin so it can be remade!',
        imageUrl: '♻️',
        options: [
          { id: 'h1-bin', label: 'In the Recycling Bin', isCorrect: true },
          { id: 'h1-grass', label: 'Thrown on the grass', isCorrect: false }
        ]
      },
      {
        id: 'g2-hab-2',
        subjectId: 'habits',
        grade: 'grade2',
        questionNumber: 2,
        title: 'Resolving Disagreements Peacefully',
        instruction: 'When two friends disagree about which game to play, what should they do?',
        type: 'choice',
        hint: 'Talk calmly, listen to each other, and find a compromise!',
        imageUrl: '🗣️',
        options: [
          { id: 'h2-talk', label: 'Talk calmly and compromise together', isCorrect: true },
          { id: 'h2-fight', label: 'Yell and never speak again', isCorrect: false }
        ]
      },
      {
        id: 'g2-hab-3',
        subjectId: 'habits',
        grade: 'grade2',
        questionNumber: 3,
        title: 'Personal Responsibility: Schoolbag',
        instruction: 'Who is responsible for packing your schoolbag with books and pencils before bedtime?',
        type: 'choice',
        hint: 'You are! Taking ownership shows maturity and pride.',
        imageUrl: '🎒',
        options: [
          { id: 'h3-self', label: 'Myself (with guidance from parents)', isCorrect: true },
          { id: 'h3-nobody', label: 'Nobody, leave books everywhere', isCorrect: false }
        ]
      },
      {
        id: 'g2-hab-4',
        subjectId: 'habits',
        grade: 'grade2',
        questionNumber: 4,
        title: 'Digital Balance: Screen Time',
        instruction: 'After playing learning games or watching a show, what is a healthy habit?',
        type: 'choice',
        hint: 'Go outside to play, stretch, and give your eyes a break!',
        imageUrl: '⚽',
        options: [
          { id: 'h4-play', label: 'Go play outdoors or read a physical book', isCorrect: true },
          { id: 'h4-screen', label: 'Stare at screens all night', isCorrect: false }
        ]
      },
      {
        id: 'g2-hab-5',
        subjectId: 'habits',
        grade: 'grade2',
        questionNumber: 5,
        title: 'Empathy: Welcoming a New Student',
        instruction: 'A new pupil joins your class and looks shy. How can you be welcoming?',
        type: 'choice',
        hint: 'Invite them to sit with you and introduce them to friends!',
        imageUrl: '👋',
        options: [
          { id: 'h5-welcome', label: 'Invite them to join your game at recess', isCorrect: true },
          { id: 'h5-ignore', label: 'Ignore them completely', isCorrect: false }
        ]
      },
      {
        id: 'g2-hab-6',
        subjectId: 'habits',
        grade: 'grade2',
        questionNumber: 6,
        title: 'Energy Conservation: Room Lights',
        instruction: 'What should we do when leaving a room that no one is using?',
        type: 'choice',
        hint: 'Switch off the light switch to conserve energy!',
        imageUrl: '💡',
        options: [
          { id: 'h6-light', label: 'Turn off the lights to save electricity', isCorrect: true },
          { id: 'h6-leave', label: 'Leave every light shining', isCorrect: false }
        ]
      },
      {
        id: 'g2-hab-7',
        subjectId: 'habits',
        grade: 'grade2',
        questionNumber: 7,
        title: 'Active Listening in Class',
        instruction: 'What does active listening look like when your teacher or friend is speaking?',
        type: 'choice',
        hint: 'Looking with your eyes and listening quietly without interrupting!',
        imageUrl: '👂',
        options: [
          { id: 'h7-listen', label: 'Look respectfully and listen without interrupting', isCorrect: true },
          { id: 'h7-talk', label: 'Shout loudly over their voice', isCorrect: false }
        ]
      },
      {
        id: 'g2-hab-8',
        subjectId: 'habits',
        grade: 'grade2',
        questionNumber: 8,
        title: 'Healthy Posture',
        instruction: 'How should you sit in your school desk while writing and reading?',
        type: 'choice',
        hint: 'Sit up straight with feet flat to protect your back and spine!',
        imageUrl: '🪑',
        options: [
          { id: 'h8-posture', label: 'Sit upright with good posture', isCorrect: true },
          { id: 'h8-slouch', label: 'Slouch down onto the floor', isCorrect: false }
        ]
      },
      {
        id: 'g2-hab-9',
        subjectId: 'habits',
        grade: 'grade2',
        questionNumber: 9,
        title: 'Honesty and Integrity',
        instruction: 'If you accidentally knock over a vase or book, what is the best thing to do?',
        type: 'choice',
        hint: 'Tell the truth honestly and help clean it up!',
        imageUrl: '🤝',
        options: [
          { id: 'h9-truth', label: 'Tell the truth honestly and help clean it up', isCorrect: true },
          { id: 'h9-blame', label: 'Blame the pet cat', isCorrect: false }
        ]
      },
      {
        id: 'g2-hab-10',
        subjectId: 'habits',
        grade: 'grade2',
        questionNumber: 10,
        title: 'Celebrating Others’ Success',
        instruction: 'When a classmate wins an award or scores well on a quiz, what should you do?',
        type: 'choice',
        hint: 'Cheer and congratulate them warmly!',
        imageUrl: '👏',
        options: [
          { id: 'h10-clap', label: 'Clap and say "Congratulations! Great job!"', isCorrect: true },
          { id: 'h10-grumble', label: 'Scowl and be jealous', isCorrect: false }
        ]
      }
    ]
  }
};

/**
 * Returns the exact 10 questions for an Island and Grade level
 */
export function getIslandQuiz(grade: GradeLevel, subjectId: SubjectId): ActivityQuestion[] {
  return FULL_QUIZ_QUESTIONS[grade]?.[subjectId] || [];
}

/**
 * All curated activity questions across all islands and grades
 */
export const ACTIVITIES: ActivityQuestion[] = [
  ...FULL_QUIZ_QUESTIONS.kindergarten.english,
  ...FULL_QUIZ_QUESTIONS.kindergarten.math,
  ...FULL_QUIZ_QUESTIONS.kindergarten.science,
  ...FULL_QUIZ_QUESTIONS.kindergarten.habits,
  ...FULL_QUIZ_QUESTIONS.grade1.english,
  ...FULL_QUIZ_QUESTIONS.grade1.math,
  ...FULL_QUIZ_QUESTIONS.grade1.science,
  ...FULL_QUIZ_QUESTIONS.grade1.habits,
  ...FULL_QUIZ_QUESTIONS.grade2.english,
  ...FULL_QUIZ_QUESTIONS.grade2.math,
  ...FULL_QUIZ_QUESTIONS.grade2.science,
  ...FULL_QUIZ_QUESTIONS.grade2.habits
];

/**
 * Daily Star Quests in the Rewards Room
 */
export const DAILY_CHALLENGES = [
  {
    id: 'daily-read',
    emoji: '📖',
    subject: 'English Island',
    title: 'Word Wizard Reading',
    task: 'Sound out 3 new sight words and match them to pictures today.',
    rewardStars: 2
  },
  {
    id: 'daily-count',
    emoji: '🔢',
    subject: 'Math Mountain',
    title: 'Counting Champion',
    task: 'Solve 5 math addition or counting questions on Island 2.',
    rewardStars: 2
  },
  {
    id: 'daily-smile',
    emoji: '🌱',
    subject: 'Good Habits Garden',
    title: 'Kindness Spreader',
    task: 'Practice polite magic words ("Please" & "Thank You") with family and friends.',
    rewardStars: 3
  }
];

