'use client';

import { ISocialProof } from '@/assets/typescript/misc';
import baseUrl from '@/lib/common/baseUrl';
import cn from '@/lib/common/cn';
import { getTimeAgo } from '@/lib/common/date.helpers';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// * Component
export default function MarketingSocialProof() {
  // * State
  const [socialProofs, setSocialProofs] = useState<ISocialProof[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // * Effects
  // Fetch social proofs
  useEffect(() => {
    async function getSocialProofs() {
      const res = await fetch(baseUrl + '/api/social-proof', {
        cache: 'no-store',
        next: { revalidate: 1800 },
      });

      if (res.status === 200) {
        const data = (await res.json()) as ISocialProof[];
        setSocialProofs(data);
        setTimeout(() => setFade(false), 3000); // initial delay before first message
      }
    }

    getSocialProofs();
  }, []);

  // Rotate through social proofs
  useEffect(() => {
    if (socialProofs.length > 0) {
      let timerId: NodeJS.Timeout;

      // If it's currently visible, hide it after 8 seconds
      if (!fade) {
        timerId = setTimeout(() => {
          setFade(true); // fade out after 8 seconds
        }, 8000);
      }
      // If it's currently hidden, show the next one after a random delay
      else {
        timerId = setTimeout(() => {
          setCurrentIndex(
            (currentIndex) => (currentIndex + 1) % socialProofs.length,
          );
          setFade(false); // fade in next message after random delay
        }, 5000 + Math.floor(Math.random() * 7000)); // 5-12 seconds delay
      }

      return () => clearTimeout(timerId);
    }
  }, [fade, socialProofs]);

  // * Render
  const currentProof = socialProofs[currentIndex];
  return currentProof ? (
    <Link
      className={cn(
        'rounded-md bg-white dark:bg-navy-900 shadow-xl fixed bottom-0 left-0 m-4 lg:m-6 px-4 py-2 flex items-center hover:shadow-2xl hover:scale-105 transform-gpu transition-all duration-1000',
        fade ? 'opacity-0 cursor-none pointer-events-none' : 'opacity-100',
      )}
      href="/onboarding"
    >
      {/* Image */}
      <Image
        src={currentProof.avatar_url}
        alt={`${currentProof.first_name} ${currentProof.last_name}`}
        width={44}
        height={44}
        className="rounded-md w-11 h-11"
      />

      {/* Text */}
      <div className="ml-4 flex flex-col space-y-1 max-w-[250px]">
        <p className="text-sm font-medium text-slate-800 dark:text-navy-50">
          {currentProof.first_name} {currentProof.last_name}
          {/* from <span className="font-semibold">Carmel, Indiana</span> */}
        </p>

        <p className="text-xs text-slate-600 dark:text-navy-200 font-medium">
          Recently signed up for a 14-day free trial of Learnly.
        </p>

        <div className="flex justify-between items-center">
          <p className="text-xs text-slate-500 italic dark:text-navy-200/75">
            {getTimeAgo(currentProof.created_at)}
          </p>

          <p className="text-xs text-green-700 dark:text-green-600 flex items-center">
            <CheckBadgeIcon className="w-4 h-4" />
            <span className="ml-1 mr-0.5">Verified by</span>
            <span className="font-semibold">Learnly</span>
          </p>
        </div>
      </div>
    </Link>
  ) : null;
}
