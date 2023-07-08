'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useRightSidebar } from './RightSidebarCtx';

export default function RightSidebar({ children }: PropsWithChildren) {
  // * Hooks / Context
  const { isOpen, close } = useRightSidebar();

  // * Render
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <aside
          className="fixed inset-0 z-40"
          aria-hidden={isOpen ? 'false' : 'true'}
          aria-label="Quick Report Menu"
        >
          {/* Sidebar Wrapper */}
          <div className="fixed right-0 top-0 z-[42] h-full w-full sm:w-80 lg:w-96">
            {/* Sidebar Tabs */}
            <motion.div
              className="relative flex h-full w-full flex-col border-l-2 border-slate-900/20 bg-white shadow-lg dark:border-navy-400/20 dark:bg-navy-800"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                duration: 0.2,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-300/90 px-4 py-3 dark:border-navy-300/90">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-navy-100">
                  {new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                </h3>

                <button
                  className="rounded-full p-1 text-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white hocus:bg-slate-100 hocus:text-slate-800 dark:text-navy-300 dark:focus:ring-offset-navy-900 dark:hocus:bg-navy-600/90 dark:hocus:text-white"
                  aria-label="Close Quick Report Menu"
                  onClick={close}
                  autoFocus
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Sidebar Content */}
              <section className="mt-4 flex flex-1 flex-col space-y-6 px-4 overyflow-y-scroll custom-scrollbar">
                {children}
              </section>
            </motion.div>
          </div>

          {/* Sidebar Background */}
          {/* <ScreenOverlay close={close} /> */}
        </aside>
      )}
    </AnimatePresence>
  );
}
