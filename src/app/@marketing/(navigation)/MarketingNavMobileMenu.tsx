'use client';

import { Popover } from '@headlessui/react';
import { Bars3Icon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import MarketingNavLinkMobile from './MarketingNavLinkMobile';
import MarketingNavCTA from './MarketingNavCTA';

export default function MarketingNavMobileMenu() {
  return (
    <Popover className="lg:hidden">
      {({ open }) => (
        <>
          <Popover.Button
            className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-slate-900 p-2 hover:bg-slate-200/50 hover:stroke-slate-600 active:stroke-slate-900 dark:stroke-navy-50 dark:hover:bg-navy-800/50 dark:hover:stroke-navy-200 dark:active:stroke-navy-50 [&:not(:focus-visible)]:focus:outline-none"
            aria-label="Toggle site navigation"
          >
            {({ open }) =>
              open ? (
                <ChevronUpIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )
            }
          </Popover.Button>
          <AnimatePresence initial={false}>
            {open && (
              <>
                <Popover.Overlay
                  static
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-0 bg-slate-300/60 backdrop-blur dark:bg-navy-800/60"
                />
                <Popover.Panel
                  static
                  as={motion.div}
                  initial={{ opacity: 0, y: -32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: -32,
                    transition: { duration: 0.2 },
                  }}
                  className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-slate-50 px-6 pb-6 pt-32 shadow-2xl shadow-slate-900/20 dark:bg-navy-900 dark:shadow-navy-700/20"
                >
                  <div className="space-y-4">
                    <MarketingNavLinkMobile href="/#features">
                      Features
                    </MarketingNavLinkMobile>
                    <MarketingNavLinkMobile href="/#reviews">
                      Reviews
                    </MarketingNavLinkMobile>
                    <MarketingNavLinkMobile href="/#faqs">
                      FAQs
                    </MarketingNavLinkMobile>
                    <MarketingNavLinkMobile href="/#get-started">
                      Get Started
                    </MarketingNavLinkMobile>
                  </div>
                  <div className="mt-8 flex flex-col gap-4">
                    <MarketingNavCTA />
                  </div>
                </Popover.Panel>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
}
