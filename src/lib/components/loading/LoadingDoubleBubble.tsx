'use client';

import cn from '@/lib/common/cn';
import { motion } from 'framer-motion';

// * Props
interface IProps {
  className?: string;
}

// * Component
export default function LoadingDoubleBubble({ className }: IProps) {
  return (
    <div className={cn('relative h-16 w-16 opacity-75', className)}>
      <motion.span
        className="absolute inline-block h-full w-full rounded-full bg-green-600 opacity-75 dark:bg-green-700"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 0,
        }}
      ></motion.span>
      <motion.span
        className="duration-400 absolute inline-block h-full w-full rounded-full bg-green-500 opacity-75 dark:bg-green-400"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 0.75,
        }}
      ></motion.span>
    </div>
  );
}
