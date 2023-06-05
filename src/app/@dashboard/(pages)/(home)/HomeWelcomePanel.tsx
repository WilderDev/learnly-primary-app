'use client';

// * Imports
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// * Images
import TeacherIllustration from '@/assets/images/illustrations/learning.svg';
import { useUser } from '@/lib/components/providers/UserProvider';
import { useState } from 'react';
import { DashPanel } from '../../(layout)/DashPanel';

// * Component
export default function HomeWelcomePanel() {
  // * Context / Hooks
  const { user } = useUser();

  // * State
  const [showing, setShowing] = useState(true);

  // * Render
  return showing ? (
    <DashPanel
      className="relative mt-4 sm:mt-0 items-center bg-gradient-to-l from-emerald-400 via-teal-300 to-sky-500 p-5 sm:flex-row"
      colNum={1}
    >
      {/* Image */}
      <div className="flex justify-center sm:order-last">
        <Image
          className="-mt-12 h-20 w-auto sm:mt-0 sm:h-40"
          src={TeacherIllustration}
          alt="Teacher Illustration"
          priority
        />
      </div>

      {/* Content */}
      <div className="my-2 flex-1 pt-2 text-center text-white dark:text-navy-50 sm:mt-0 sm:text-left">
        {/* Title */}
        <h3 className="text-xl">
          Welcome Back, <span className="font-semibold">{user?.firstName}</span>
        </h3>

        {/* Message */}
        <p className="mt-2 leading-relaxed">
          Ready for another day of
          <span className="font-semibold"> Learnly</span>? Let&apos;s see what
          we can discover...
        </p>
        {/* {streak?.days! < 2 ? (
          <p className="mt-2 leading-relaxed">
            You must be new here. Let&apos;s get started! Try to do atleast one
            lesson a day. You&apos;ll be on a roll in no time.
          </p>
        ) : (
          <p className="mt-2 leading-relaxed">
            You have been on a role! That&apos;s{' '}
            <span className="font-semibold text-slate-100 dark:text-navy-100 underline">
              {streak?.days}
            </span>{' '}
            days in a row.
          </p>
        )} */}

        {/* Encouragement */}
        <p>
          You&apos;re doing{' '}
          <span className="font-semibold">excellent by the way! ❤️</span>
        </p>

        {/* Action */}
        <Link
          className="mt-6 inline-block rounded-lg bg-slate-50 px-4 py-2 text-center font-medium text-slate-800 outline-2 outline-offset-2 transition-all duration-200 ease-in-out active:bg-slate-200/80 hocus:bg-slate-200"
          href="/lesson-creator"
        >
          Create New Lesson
        </Link>
      </div>

      {/* Small Close X */}
      <button
        className="absolute right-0 top-0 p-2 text-slate-50/50 transition-all duration-300 hocus:text-slate-100"
        onClick={() => setShowing(false)}
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </DashPanel>
  ) : null;
}
