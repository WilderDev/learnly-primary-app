'use client';

import { SwatchIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useGrayscale } from './GrayscaleCtx';

export default function MonochromeTogglerBtn() {
  const { toggle } = useGrayscale();

  return (
    <motion.button
      className="flex h-8 w-8 items-center justify-center rounded-full p-0 transition-colors hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:bg-navy-400/20 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/20"
      onClick={toggle}
      whileTap={{ scale: 0.8 }}
      initial={{ scale: 0.6 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <SwatchIcon className="h-5 w-5 text-slate-500" />
    </motion.button>
  );
}
