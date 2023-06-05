'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useCommandPalette } from './CommandPaletteCtx';

// * Component
export default function TopHeaderSearch() {
  // * Hooks / Context
  const { open, setOpen } = useCommandPalette();

  // * Render
  return (
    <motion.div
      className="relative flex h-8"
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer h-full w-60 rounded-full bg-slate-100 px-4 pl-9 text-sm text-slate-800 outline-none ring-navy-500/50 transition-all duration-100 ease-out placeholder:text-slate-400 focus:w-80 focus:ring hocus:bg-slate-200 dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-blue-500/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
        placeholder="Search for anything"
        onFocus={() => setOpen(true)}
      />

      {/* Magnifying Glass */}
      <div className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-navy-700 dark:text-navy-300 dark:peer-focus:text-blue-500">
        <MagnifyingGlassIcon className="h-5 w-5" />
      </div>
    </motion.div>
  );
}
