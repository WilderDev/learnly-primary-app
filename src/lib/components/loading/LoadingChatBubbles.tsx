'use client';

import { motion } from 'framer-motion';

export default function LoadingChatBubbles() {
  return (
    <div className="mr-auto flex flex-col items-start shadow-sm">
      <motion.div
        className="rounded-lg bg-slate-200 p-3 text-lg dark:bg-navy-600"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Loading Bubbles delayed */}
        <div className="flex space-x-1">
          <motion.div
            className="h-3 w-3 rounded-full bg-slate-400 dark:bg-navy-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: 'reverse',
            }}
          ></motion.div>
          <motion.div
            className="h-3 w-3 rounded-full bg-slate-400 dark:bg-navy-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: 'reverse',
              delay: 0.25,
            }}
          ></motion.div>
          <motion.div
            className="h-3 w-3 rounded-full bg-slate-400 dark:bg-navy-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: 'reverse',
              delay: 0.5,
            }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
}
