'use client';

import LoadingShapes from '@/lib/components/loading/LoadingShapes';
import { motion } from 'framer-motion';

export default function RightSidebarQuickReportLoading() {
  return (
    <motion.div
      key="loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Loading Shapes */}
      <div className="py-32">
        <LoadingShapes />
      </div>

      {/* Loading Skeleton */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center p-1 gap-2 shadow hover:scale-110 transition-all duration-150 ease-in-out bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse h-12"></div>
        <div className="flex items-center p-1 gap-2 shadow hover:scale-110 transition-all duration-150 ease-in-out bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse h-12"></div>
        <div className="flex items-center p-1 gap-2 shadow hover:scale-110 transition-all duration-150 ease-in-out bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse h-12"></div>
        <div className="flex items-center p-1 gap-2 shadow hover:scale-110 transition-all duration-150 ease-in-out bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse h-16"></div>
      </div>
    </motion.div>
  );
}
