'use client';

import cn from '@/lib/common/cn';
import { motion } from 'framer-motion';

// * Dashboard Panel Component
// Props
interface IProps {
  children: React.ReactNode;
  className?: string;
  colNum?: number;
}

// Component
export default function DashboardPanel({
  children,
  className,
  colNum = 1,
}: IProps) {
  // * Render
  return (
    <motion.article
      className={cn(
        'relative flex flex-col rounded-md bg-white shadow-md dark:shadow-navy-700 dark:bg-navy-800 print:hidden print:shadow-none',
        className,
      )}
      initial={{ opacity: 0, y: 20 * colNum }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 * colNum }}
    >
      {children}
    </motion.article>
  );
}

// * Dashboard Panel Header
// Props
interface IDashPanelProps {
  title: string;
}

// Component
DashboardPanel.Header = function DashboardPanelHeader({
  title,
}: IDashPanelProps) {
  return (
    <>
      <div className="mb-3 flex h-8 w-full items-center justify-between">
        {/* Title */}
        <h2 className="text-sm font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-base xl:text-lg">
          {title}
        </h2>
      </div>
    </>
  );
};
