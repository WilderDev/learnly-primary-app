import { UserStudent } from '@/assets/typescript/user';

// * Status Enums
export type StatusT = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELED';

export function getStatusColor(status: StatusT | string) {
  const s = status.toUpperCase() as keyof typeof statusColors;
  return statusColors[s] || statusColors.PENDING;
}

const statusColors = {
  PENDING: {
    base: 'bg-yellow-500 text-yellow-100',
    bg: 'bg-yellow-500',
    text: 'text-yellow-300',
    gradient:
      'from-yellow-500 via-amber-600 to-yellow-700 text-yellow-100 dark:text-yellow-100',
  },
  IN_PROGRESS: {
    base: 'bg-blue-500 text-blue-100',
    bg: 'bg-blue-500',
    text: 'text-blue-400',
    gradient:
      'from-blue-500 via-sky-600 to-blue-700 text-blue-100 dark:text-blue-100',
  },
  COMPLETED: {
    base: 'bg-green-500 text-green-100',
    bg: 'bg-green-500',
    text: 'text-green-400',
    gradient:
      'from-green-500 via-emerald-600 to-green-700 text-green-100 dark:text-green-100',
  },
  CANCELED: {
    base: 'bg-red-500 text-red-100',
    bg: 'bg-red-500',
    text: 'text-red-400',
    gradient:
      'from-red-500 via-rose-600 to-red-700 text-red-100 dark:text-red-100',
  },
};

export function getStudentCreds(ids: string[], students: UserStudent[]) {
  return ids
    .map((id) => students.find((student) => student.id === id))
    .filter(Boolean) as UserStudent[];
}
