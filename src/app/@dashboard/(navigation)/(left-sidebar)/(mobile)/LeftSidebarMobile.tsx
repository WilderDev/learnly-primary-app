'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/lib/components/brand/Logo';
import LeftSidebarUserLinks from '../LeftSidebarUserLinks';
import LeftSidebarMobileLinks from './LeftSidebarMobileLinks';

// * Component
export default function LeftSidebarMobile() {
  // * State
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // * Render
  return (
    <nav className="sm:hidden bg-transparent w-full fixed h-12 top-0 left-0 z-40 print:hidden">
      {/* Navbar */}
      <div className="flex items-center justify-between h-full px-4">
        {/* Hamburger Icon */}
        <button
          className="pr-2 rounded-md text-navy-500 hocus:text-navy-600 dark:text-navy-200 dark:hocus:text-navy-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy-500"
          aria-expanded={isMobileSidebarOpen}
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Icons */}
        {/* <TopHeaderItems /> */}
      </div>

      {/* Hamburger side menu */}
      <AnimatePresence initial={false}>
        {isMobileSidebarOpen && (
          <aside
            className="fixed inset-0 z-40"
            aria-hidden={isMobileSidebarOpen ? 'false' : 'true'}
            aria-label="Quick Report Menu"
          >
            {/* Sidebar Wrapper */}
            <div className="fixed left-0 top-0 z-[42] h-full w-10/12 sm:w-80 lg:w-96">
              {/* Sidebar Tabs */}
              <motion.div
                className="relative flex h-full w-full flex-col border-l-2 border-slate-900/20 bg-white shadow-lg dark:border-navy-400/20 dark:bg-navy-800"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 0.2,
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-300/90 px-4 py-3 dark:border-navy-300/90">
                  {/* Logo */}
                  <Logo />

                  <button
                    className="rounded-full p-1 text-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white hocus:bg-slate-100 hocus:text-slate-800 dark:text-navy-300 dark:focus:ring-offset-navy-900 dark:hocus:bg-navy-600/90 dark:hocus:text-white"
                    aria-label="Close Quick Report Menu"
                    onClick={() => setIsMobileSidebarOpen(false)}
                    autoFocus
                  >
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Sidebar Content */}
                <section className="-mt-2 flex flex-1 flex-col space-y-6 px-4 mb-4">
                  {/* Main Mobile Links */}
                  <LeftSidebarMobileLinks
                    close={() => setIsMobileSidebarOpen(false)}
                  />

                  {/* Bottom Links */}
                  <div className="w-12">
                    <LeftSidebarUserLinks />
                  </div>
                </section>
              </motion.div>
            </div>
          </aside>
        )}
      </AnimatePresence>
    </nav>
  );
}
