// * Subject Colors
// TSK: Create a view to get all subjects
// Subject Helper Function
export function getSubjectColor(subject: string) {
  const subj = subject
    .toUpperCase()
    .split(' ')
    .join('_') as keyof typeof subjectColors;

  return subjectColors[subj];
}

// Subject Enum Colors
const subjectColors = {
  // TSK: Do dark mode and active states for each
  MATHEMATICS: {
    BG: {
      DEFAULT: 'bg-blue-500',
      LIGHT: 'bg-blue-300',
      DARK: 'bg-blue-700',
      GRADIENT: 'bg-gradient-to-r from-blue-500 via-sky-600 to-blue-700',
    },
    TEXT: {
      DEFAULT: 'text-blue-500',
      LIGHT: 'text-blue-300',
      DARK: 'text-blue-700',
    },
    BLEND: {
      DEFAULT: 'bg-blue-700 text-blue-100',
      LIGHT: 'bg-blue-500 text-blue-100',
      DARK: 'bg-blue-900 text-blue-100',
      SUBDUED: 'bg-blue-600/70 text-blue-50',
    },
  },
  ENGLISH: {},
  SCIENCE: {},
  SOCIAL_STUDIES: {},
  COMPUTER_SCIENCE: {},
  PHYSICAL_EDUCATION: {},
  ART: {},
  MUSIC: {},
  SOCIAL_EMOTIONAL_LEARNING: {},
  HEALTH: {},
  DEFAULT: {},
  // . . .
};

// * Status Colors
// Status Helper Function

// Status Enum Colors

// * Event Colors
// Event Helper Function

// Event Enum Colors

// * Index Colors
// Index Helper Function

// Index Enum Colors
