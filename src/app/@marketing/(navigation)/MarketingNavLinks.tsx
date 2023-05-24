'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import cn from '@/lib/common/cn';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'FAQs', href: '/#faqs' },
  { label: 'Get Started', href: '/#get-started' },
];

export default function MarketingNavLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Hovered index

  return (
    <AnimatePresence>
      {/* Nav Links */}
      {navLinks?.map((link, idx) => (
        <a
          key={link.label}
          href={link.href}
          className={cn(
            'relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors delay-150 hover:text-slate-900 hover:delay-[0ms] dark:text-navy-200 dark:hover:text-navy-50',
            idx === navLinks.length - 1 && 'hidden sm:inline-block',
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === idx && (
            <motion.span
              className="absolute inset-0 rounded-lg bg-green-100 dark:bg-green-800"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
          <span className="relative z-10">{link.label}</span>
        </a>
      ))}
    </AnimatePresence>
  );
}
