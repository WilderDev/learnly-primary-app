'use client';

import cn from '@/lib/common/cn';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

// * Props
interface IProps {
  children: React.ReactNode;
  title: string;
  description: string;
  colNum: number;
  isShowingAdvancedOptions?: boolean;
  toggleAdvancedOptions?: () => void;
  showAdvancedOptions?: boolean;
  small?: boolean;
}

export default function LessonCreatorFormSection({
  children,
  title,
  description,
  colNum,
  isShowingAdvancedOptions,
  toggleAdvancedOptions,
  showAdvancedOptions = true,
  small = false,
}: IProps) {
  // * State

  // * Render
  return (
    <motion.section
      className={cn(
        'shadow col-span-4 md:grid md:grid-cols-4 md:gap-6 py-4 px-5 rounded-lg bg-white dark:bg-navy-700',
        small ? 'md:grid-cols-3' : 'md:grid-cols-4',
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: colNum * 0.2 }}
    >
      {/* Section Header */}
      <div className={cn(small ? 'md:col-span-2' : 'md:col-span-1')}>
        {/* Title */}
        <h3 className="font-semibold text-sm sm:text-base leading-6">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-1 text-slate-500 dark:text-navy-200 text-xs sm:text-sm">
          {description}
        </p>

        {/* Hide/Show Advanced Options */}
        {showAdvancedOptions && (
          <div className="mt-3 flex items-center">
            <AdjustmentsHorizontalIcon className="mr-1 h-4 w-4 text-blue-400/80 dark:text-navy-300/90" />

            <button
              className="text-xs text-blue-500/80 dark:text-blue-300/90"
              type="button"
              onClick={toggleAdvancedOptions}
            >
              {isShowingAdvancedOptions ? 'Less Options' : 'More Options'}
            </button>
          </div>
        )}
      </div>

      {/* Section Body */}
      <div
        className={cn(
          'mt-5 md:mt-0 col-span-3',
          // small ? 'md:col-span-2' : 'md:col-span-3',
        )}
      >
        {/* Section Form Items */}
        <div
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 gap-6',
            small ? 'lg:grid-cols-3' : 'lg:grid-cols-4',
          )}
        >
          {children}
        </div>
      </div>
    </motion.section>
  );
}
