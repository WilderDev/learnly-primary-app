'use client';

import { Squares2X2Icon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useRightSidebar } from './RightSidebarCtx';

export default function RightSidebarToggler() {
  // * Hooks / Context
  const { open } = useRightSidebar();

  // * Render
  return (
    <motion.button
      className="group flex h-8 w-8 items-center justify-center rounded-full p-0 transition-colors hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:bg-navy-400/20 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/20"
      whileTap={{ scale: 0.8 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      onClick={open}
    >
      <Squares2X2Icon className="icon-spin h-5 w-5 text-slate-600/90 dark:text-navy-200/90" />
    </motion.button>
  );
}
