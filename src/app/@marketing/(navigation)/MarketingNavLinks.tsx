'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'FAQs', href: '/#faqs' },
];

export default function MarketingNavLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Hovered index

  return (
    <AnimatePresence>
      {/* Nav Links */}
      {navLinks?.map((link, idx) => (
        <Link
          key={link.label}
          href={link.href}
          className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors delay-150 hover:text-slate-900 hover:delay-[0ms] dark:text-navy-200 dark:hover:text-navy-50"
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
        </Link>
      ))}
    </AnimatePresence>
  );
}
