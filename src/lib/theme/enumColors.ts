// * Subject Colors
// Subject Helper Function
export function getSubjectColor(subject: string) {
  const subj = subject
    .toUpperCase()
    .split(' ')
    .join('_') as keyof typeof subjectColors;

  return subjectColors[subj] || subjectColors.DEFAULT;
}

// Subject Enum Colors
const subjectColors = {
  // TSK: Do dark mode and active states for each
  MATHEMATICS: {
    BG: {
      DEFAULT: 'bg-blue-500',
      LIGHT: 'bg-blue-300',
      DARK: 'bg-blue-700',
      GRADIENT: 'from-blue-500 via-sky-600 to-blue-700',
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
  ENGLISH: {
    BG: {
      DEFAULT: 'bg-purple-500',
      LIGHT: 'bg-purple-300',
      DARK: 'bg-purple-700',
      GRADIENT: 'from-purple-500 via-violet-600 to-purple-700',
    },
    TEXT: {
      DEFAULT: 'text-purple-500',
      LIGHT: 'text-purple-300',
      DARK: 'text-purple-700',
    },
    BLEND: {
      DEFAULT: 'bg-purple-700 text-purple-100',
      LIGHT: 'bg-purple-500 text-purple-100',
      DARK: 'bg-purple-900 text-purple-100',
      SUBDUED: 'bg-purple-600/70 text-purple-50',
    },
  },
  SCIENCE: {
    BG: {
      DEFAULT: 'bg-green-500',
      LIGHT: 'bg-green-300',
      DARK: 'bg-green-700',
      GRADIENT: 'from-green-500 via-sky-600 to-green-700',
    },
    TEXT: {
      DEFAULT: 'text-green-500',
      LIGHT: 'text-green-300',
      DARK: 'text-green-700',
    },
    BLEND: {
      DEFAULT: 'bg-green-700 text-green-100',
      LIGHT: 'bg-green-500 text-green-100',
      DARK: 'bg-green-900 text-green-100',
      SUBDUED: 'bg-green-600/70 text-green-50',
    },
  },
  SOCIAL_STUDIES: {
    BG: {
      DEFAULT: 'bg-yellow-500',
      LIGHT: 'bg-yellow-300',
      DARK: 'bg-yellow-700',
      GRADIENT: 'from-yellow-500 via-orange-600 to-yellow-700',
    },
    TEXT: {
      DEFAULT: 'text-yellow-500',
      LIGHT: 'text-yellow-300',
      DARK: 'text-yellow-700',
    },
    BLEND: {
      DEFAULT: 'bg-yellow-700 text-yellow-100',
      LIGHT: 'bg-yellow-500 text-yellow-100',
      DARK: 'bg-yellow-900 text-yellow-100',
      SUBDUED: 'bg-yellow-600/70 text-yellow-50',
    },
  },
  COMPUTER_SCIENCE: {
    BG: {
      DEFAULT: 'bg-orange-500',
      LIGHT: 'bg-orange-300',
      DARK: 'bg-orange-700',
      GRADIENT: 'from-orange-500 via-amber-600 to-orange-700',
    },
    TEXT: {
      DEFAULT: 'text-orange-500',
      LIGHT: 'text-orange-300',
      DARK: 'text-orange-700',
    },
    BLEND: {
      DEFAULT: 'bg-orange-700 text-orange-100',
      LIGHT: 'bg-orange-500 text-orange-100',
      DARK: 'bg-orange-900 text-orange-100',
      SUBDUED: 'bg-orange-600/70 text-orange-50',
    },
  },
  PHYSICAL_EDUCATION: {
    BG: {
      DEFAULT: 'bg-red-500',
      LIGHT: 'bg-red-300',
      DARK: 'bg-red-700',
      GRADIENT: 'from-red-500 via-rose-600 to-red-700',
    },
    TEXT: {
      DEFAULT: 'text-red-500',
      LIGHT: 'text-red-300',
      DARK: 'text-red-700',
    },
    BLEND: {
      DEFAULT: 'bg-red-700 text-red-100',
      LIGHT: 'bg-red-500 text-red-100',
      DARK: 'bg-red-900 text-red-100',
      SUBDUED: 'bg-red-600/70 text-red-50',
    },
  },
  ART: {
    BG: {
      DEFAULT: 'bg-teal-500',
      LIGHT: 'bg-teal-300',
      DARK: 'bg-teal-700',
      GRADIENT: 'from-teal-500 via-blue-600 to-teal-700',
    },
    TEXT: {
      DEFAULT: 'text-teal-500',
      LIGHT: 'text-teal-300',
      DARK: 'text-teal-700',
    },
    BLEND: {
      DEFAULT: 'bg-teal-700 text-teal-100',
      LIGHT: 'bg-teal-500 text-teal-100',
      DARK: 'bg-teal-900 text-teal-100',
      SUBDUED: 'bg-teal-600/70 text-teal-50',
    },
  },
  MUSIC: {
    BG: {
      DEFAULT: 'bg-indigo-500',
      LIGHT: 'bg-indigo-300',
      DARK: 'bg-indigo-700',
      GRADIENT: 'from-indigo-500 via-blue-600 to-indigo-700',
    },
    TEXT: {
      DEFAULT: 'text-indigo-500',
      LIGHT: 'text-indigo-300',
      DARK: 'text-indigo-700',
    },
    BLEND: {
      DEFAULT: 'bg-indigo-700 text-indigo-100',
      LIGHT: 'bg-indigo-500 text-indigo-100',
      DARK: 'bg-indigo-900 text-indigo-100',
      SUBDUED: 'bg-indigo-600/70 text-indigo-50',
    },
  },
  SOCIAL_EMOTIONAL_LEARNING: {
    BG: {
      DEFAULT: 'bg-fuchsia-500',
      LIGHT: 'bg-fuchsia-300',
      DARK: 'bg-fuchsia-700',
      GRADIENT: 'from-fuchsia-500 via-pink-600 to-fuchsia-700',
    },
    TEXT: {
      DEFAULT: 'text-fuchsia-500',
      LIGHT: 'text-fuchsia-300',
      DARK: 'text-fuchsia-700',
    },
    BLEND: {
      DEFAULT: 'bg-fuchsia-700 text-fuchsia-100',
      LIGHT: 'bg-fuchsia-500 text-fuchsia-100',
      DARK: 'bg-fuchsia-900 text-fuchsia-100',
      SUBDUED: 'bg-fuchsia-600/70 text-fuchsia-50',
    },
  },
  HEALTH: {
    BG: {
      DEFAULT: 'bg-cyan-500',
      LIGHT: 'bg-cyan-300',
      DARK: 'bg-cyan-700',
      GRADIENT: 'from-cyan-500 via-emerald-600 to-cyan-700',
    },
    TEXT: {
      DEFAULT: 'text-cyan-500',
      LIGHT: 'text-cyan-300',
      DARK: 'text-cyan-700',
    },
    BLEND: {
      DEFAULT: 'bg-cyan-700 text-cyan-100',
      LIGHT: 'bg-cyan-500 text-cyan-100',
      DARK: 'bg-cyan-900 text-cyan-100',
      SUBDUED: 'bg-cyan-600/70 text-cyan-50',
    },
  },
  DEFAULT: {
    BG: {
      DEFAULT: 'bg-slate-500',
      LIGHT: 'bg-slate-300',
      DARK: 'bg-slate-700',
      GRADIENT: 'from-slate-500 via-sky-600 to-slate-700',
    },
    TEXT: {
      DEFAULT: 'text-slate-500',
      LIGHT: 'text-slate-300',
      DARK: 'text-slate-700',
    },
    BLEND: {
      DEFAULT: 'bg-slate-700 text-slate-100',
      LIGHT: 'bg-slate-500 text-slate-100',
      DARK: 'bg-slate-900 text-slate-100',
      SUBDUED: 'bg-slate-600/70 text-slate-50',
    },
  },
  // . . .
};

// * Status Colors
// Status Helper Function

// Status Enum Colors

// * Event Colors
// Event Helper Function
export function getEventColor(eventType: string) {
  const evnt = eventType
    .toUpperCase()
    .split(' ')
    .join('_') as keyof typeof eventColors;

  return eventColors[evnt] || eventColors.DEFAULT;
}

// Event Enum Colors
const eventColors = {
  // TSK: Do dark mode and active states for each
  LESSON: {
    BG: {
      DEFAULT: 'bg-blue-500',
      LIGHT: 'bg-blue-300',
      DARK: 'bg-blue-700',
      GRADIENT: 'from-blue-500 via-sky-600 to-blue-700 text-blue-100',
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
  COMMUNITY: {
    BG: {
      DEFAULT: 'bg-purple-500',
      LIGHT: 'bg-purple-300',
      DARK: 'bg-purple-700',
      GRADIENT: 'from-purple-500 via-violet-600 to-purple-700 text-purple-100',
    },
    TEXT: {
      DEFAULT: 'text-purple-500',
      LIGHT: 'text-purple-300',
      DARK: 'text-purple-700',
    },
    BLEND: {
      DEFAULT: 'bg-purple-700 text-purple-100',
      LIGHT: 'bg-purple-500 text-purple-100',
      DARK: 'bg-purple-900 text-purple-100',
      SUBDUED: 'bg-purple-600/70 text-purple-50',
    },
  },
  ASSIGNMENT: {
    BG: {
      DEFAULT: 'bg-green-500',
      LIGHT: 'bg-green-300',
      DARK: 'bg-green-700',
      GRADIENT: 'from-green-500 via-sky-600 to-green-700 text-green-100',
    },
    TEXT: {
      DEFAULT: 'text-green-500',
      LIGHT: 'text-green-300',
      DARK: 'text-green-700',
    },
    BLEND: {
      DEFAULT: 'bg-green-700 text-green-100',
      LIGHT: 'bg-green-500 text-green-100',
      DARK: 'bg-green-900 text-green-100',
      SUBDUED: 'bg-green-600/70 text-green-50',
    },
  },
  OTHER: {
    BG: {
      DEFAULT: 'bg-yellow-500',
      LIGHT: 'bg-yellow-300',
      DARK: 'bg-yellow-700',
      GRADIENT: 'from-yellow-500 via-orange-600 to-yellow-700 text-yellow-100',
    },
    TEXT: {
      DEFAULT: 'text-yellow-500',
      LIGHT: 'text-yellow-300',
      DARK: 'text-yellow-700',
    },
    BLEND: {
      DEFAULT: 'bg-yellow-700 text-yellow-100',
      LIGHT: 'bg-yellow-500 text-yellow-100',
      DARK: 'bg-yellow-900 text-yellow-100',
      SUBDUED: 'bg-yellow-600/70 text-yellow-50',
    },
  },
  DEFAULT: {
    BG: {
      DEFAULT: 'bg-slate-500',
      LIGHT: 'bg-slate-300',
      DARK: 'bg-slate-700',
      GRADIENT: 'from-slate-500 via-sky-600 to-slate-700 text-slate-100',
    },
    TEXT: {
      DEFAULT: 'text-slate-500',
      LIGHT: 'text-slate-300',
      DARK: 'text-slate-700',
    },
    BLEND: {
      DEFAULT: 'bg-slate-700 text-slate-100',
      LIGHT: 'bg-slate-500 text-slate-100',
      DARK: 'bg-slate-900 text-slate-100',
      SUBDUED: 'bg-slate-600/70 text-slate-50',
    },
  },
  // . . .
};

// * Priority Colors
// Priority Helper Function

// Priority Enum Colors

// * Notification Colors
// Notification Helper Function
export function getNotificationColor(notificationType: string) {
  const notif = notificationType
    .toUpperCase()
    .split(' ')
    .join('_') as keyof typeof notificationColors;

  return notificationColors[notif] || notificationColors.DEFAULT;
}

// Notification Enum Colors
const notificationColors = {
  ACCOUNT: {
    BG: {
      DEFAULT: 'bg-blue-500',
      LIGHT: 'bg-blue-300',
      DARK: 'bg-blue-700',
      GRADIENT: 'from-blue-500 via-sky-600 to-blue-700',
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
  COMMUNITY: {
    BG: {
      DEFAULT: 'bg-purple-500',
      LIGHT: 'bg-purple-300',
      DARK: 'bg-purple-700',
      GRADIENT: 'from-purple-500 via-violet-600 to-purple-700',
    },
    TEXT: {
      DEFAULT: 'text-purple-500',
      LIGHT: 'text-purple-300',
      DARK: 'text-purple-700',
    },
    BLEND: {
      DEFAULT: 'bg-purple-700 text-purple-100',
      LIGHT: 'bg-purple-500 text-purple-100',
      DARK: 'bg-purple-900 text-purple-100',
      SUBDUED: 'bg-purple-600/70 text-purple-50',
    },
  },
  SUCCESS: {
    BG: {
      DEFAULT: 'bg-green-500',
      LIGHT: 'bg-green-300',
      DARK: 'bg-green-700',
      GRADIENT: 'from-green-500 via-sky-600 to-green-700',
    },
    TEXT: {
      DEFAULT: 'text-green-500',
      LIGHT: 'text-green-300',
      DARK: 'text-green-700',
    },
    BLEND: {
      DEFAULT: 'bg-green-700 text-green-100',
      LIGHT: 'bg-green-500 text-green-100',
      DARK: 'bg-green-900 text-green-100',
      SUBDUED: 'bg-green-600/70 text-green-50',
    },
  },
  LESSON: {
    BG: {
      DEFAULT: 'bg-yellow-500',
      LIGHT: 'bg-yellow-300',
      DARK: 'bg-yellow-700',
      GRADIENT: 'from-yellow-500 via-orange-600 to-yellow-700',
    },
    TEXT: {
      DEFAULT: 'text-yellow-500',
      LIGHT: 'text-yellow-300',
      DARK: 'text-yellow-700',
    },
    BLEND: {
      DEFAULT: 'bg-yellow-700 text-yellow-100',
      LIGHT: 'bg-yellow-500 text-yellow-100',
      DARK: 'bg-yellow-900 text-yellow-100',
      SUBDUED: 'bg-yellow-600/70 text-yellow-50',
    },
  },
  WARNING: {
    BG: {
      DEFAULT: 'bg-orange-500',
      LIGHT: 'bg-orange-300',
      DARK: 'bg-orange-700',
      GRADIENT: 'from-orange-500 via-amber-600 to-orange-700',
    },
    TEXT: {
      DEFAULT: 'text-orange-500',
      LIGHT: 'text-orange-300',
      DARK: 'text-orange-700',
    },
    BLEND: {
      DEFAULT: 'bg-orange-700 text-orange-100',
      LIGHT: 'bg-orange-500 text-orange-100',
      DARK: 'bg-orange-900 text-orange-100',
      SUBDUED: 'bg-orange-600/70 text-orange-50',
    },
  },
  ERROR: {
    BG: {
      DEFAULT: 'bg-red-500',
      LIGHT: 'bg-red-300',
      DARK: 'bg-red-700',
      GRADIENT: 'from-red-500 via-rose-600 to-red-700',
    },
    TEXT: {
      DEFAULT: 'text-red-500',
      LIGHT: 'text-red-300',
      DARK: 'text-red-700',
    },
    BLEND: {
      DEFAULT: 'bg-red-700 text-red-100',
      LIGHT: 'bg-red-500 text-red-100',
      DARK: 'bg-red-900 text-red-100',
      SUBDUED: 'bg-red-600/70 text-red-50',
    },
  },
  CHAT: {
    BG: {
      DEFAULT: 'bg-teal-500',
      LIGHT: 'bg-teal-300',
      DARK: 'bg-teal-700',
      GRADIENT: 'from-teal-500 via-blue-600 to-teal-700',
    },
    TEXT: {
      DEFAULT: 'text-teal-500',
      LIGHT: 'text-teal-300',
      DARK: 'text-teal-700',
    },
    BLEND: {
      DEFAULT: 'bg-teal-700 text-teal-100',
      LIGHT: 'bg-teal-500 text-teal-100',
      DARK: 'bg-teal-900 text-teal-100',
      SUBDUED: 'bg-teal-600/70 text-teal-50',
    },
  },
  BILLING: {
    BG: {
      DEFAULT: 'bg-indigo-500',
      LIGHT: 'bg-indigo-300',
      DARK: 'bg-indigo-700',
      GRADIENT: 'from-indigo-500 via-blue-600 to-indigo-700',
    },
    TEXT: {
      DEFAULT: 'text-indigo-500',
      LIGHT: 'text-indigo-300',
      DARK: 'text-indigo-700',
    },
    BLEND: {
      DEFAULT: 'bg-indigo-700 text-indigo-100',
      LIGHT: 'bg-indigo-500 text-indigo-100',
      DARK: 'bg-indigo-900 text-indigo-100',
      SUBDUED: 'bg-indigo-600/70 text-indigo-50',
    },
  },
  EVENT: {
    BG: {
      DEFAULT: 'bg-fuchsia-500',
      LIGHT: 'bg-fuchsia-300',
      DARK: 'bg-fuchsia-700',
      GRADIENT: 'from-fuchsia-500 via-pink-600 to-fuchsia-700',
    },
    TEXT: {
      DEFAULT: 'text-fuchsia-500',
      LIGHT: 'text-fuchsia-300',
      DARK: 'text-fuchsia-700',
    },
    BLEND: {
      DEFAULT: 'bg-fuchsia-700 text-fuchsia-100',
      LIGHT: 'bg-fuchsia-500 text-fuchsia-100',
      DARK: 'bg-fuchsia-900 text-fuchsia-100',
      SUBDUED: 'bg-fuchsia-600/70 text-fuchsia-50',
    },
  },
  INFO: {
    BG: {
      DEFAULT: 'bg-cyan-500',
      LIGHT: 'bg-cyan-300',
      DARK: 'bg-cyan-700',
      GRADIENT: 'from-cyan-500 via-emerald-600 to-cyan-700',
    },
    TEXT: {
      DEFAULT: 'text-cyan-500',
      LIGHT: 'text-cyan-300',
      DARK: 'text-cyan-700',
    },
    BLEND: {
      DEFAULT: 'bg-cyan-700 text-cyan-100',
      LIGHT: 'bg-cyan-500 text-cyan-100',
      DARK: 'bg-cyan-900 text-cyan-100',
      SUBDUED: 'bg-cyan-600/70 text-cyan-50',
    },
  },
  DEFAULT: {
    BG: {
      DEFAULT: 'bg-slate-500',
      LIGHT: 'bg-slate-300',
      DARK: 'bg-slate-700',
      GRADIENT: 'from-slate-500 via-sky-600 to-slate-700',
    },
    TEXT: {
      DEFAULT: 'text-slate-500',
      LIGHT: 'text-slate-300',
      DARK: 'text-slate-700',
    },
    BLEND: {
      DEFAULT: 'bg-slate-700 text-slate-100',
      LIGHT: 'bg-slate-500 text-slate-100',
      DARK: 'bg-slate-900 text-slate-100',
      SUBDUED: 'bg-slate-600/70 text-slate-50',
    },
  },
};

// * Index Colors
// Index Helper Function

// Index Enum Colors
