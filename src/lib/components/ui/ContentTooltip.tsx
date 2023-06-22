'use client';

import { useEffect, useState, useRef } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import cn from '@/lib/common/cn';
import Button from './Button';

interface IProps {
  infoBubbleText: string;
  infoBubbleUrl?: string;
}

export default function ContentTooltip({
  infoBubbleText,
  infoBubbleUrl,
}: IProps) {
  // State
  const [showTooltip, setShowTooltip] = useState(false);

  // Ref
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  // Effects
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Check if click is outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      tooltipRef.current &&
      !tooltipRef.current.contains(event.target as Node)
    ) {
      setShowTooltip(false);
    }
  };

  return (
    <div
      ref={tooltipRef}
      className="group rounded-full w-fit justify-center ml-2 transition-all ease-in-out duration-150"
      onClick={() => setShowTooltip(!showTooltip)}
    >
      {showTooltip && (
        <div
          className={cn(
            infoBubbleText &&
              'md:w-96 w-56 whitespace-normal ring-1 ring-black ring-opacity-5',
            'absolute flex flex-col text-sm font-medium px-4 py-2 rounded-xl shadow-md hocus:shadow-lg border-0.5',
            'z-[1000] bg-white dark:bg-navy-900 text-slate-900 dark:text-navy-100 border-slate-100 dark:border-navy-700',
            '-top-0.5 left-1/2 transform -translate-x-1/2 -translate-y-full ',
          )}
        >
          {/* Content */}
          {infoBubbleText}

          {/* Additional Content URL */}
          {infoBubbleUrl && (
            <div className="flex justify-end">
              <Button className="!text-xs my-1">
                <a href={infoBubbleUrl} target="_blank">
                  Learn More
                </a>
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Icon */}
      <InformationCircleIcon className="h-6 w-6 text-blue-500/80 dark:text-blue-300/90 cursor-pointer hover:scale-105" />
    </div>
  );
}
