import { twMerge } from 'tailwind-merge';

// * Merge class names (tailwindcss)
export default function cn(...args: any[]) {
  return twMerge(args.filter(Boolean).join(' '));
}
