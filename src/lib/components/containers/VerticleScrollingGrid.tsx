'use client';

import OnboardingTestimonialBox from '@/app/@marketing/onboarding/OnboardingTestimonialBox';
import cn from '@/lib/common/cn';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function VerticleScrollingGrid({
  colsAndColItems,
  gradientOverlays = false,
  component,
  className,
}: {
  colsAndColItems: { list: any[]; msPerPixel: number }[];
  gradientOverlays?: boolean;
  component: any;
  className?: string;
}) {
  return (
    <div className={cn('relative overflow-hidden ', className)}>
      {/* Columns */}
      {colsAndColItems.map((col, cIdx) => (
        <VerticleScrollingColumn
          items={col.list.concat(col.list)}
          msPerPixel={col.msPerPixel}
          component={component}
          key={cIdx}
        />
      ))}

      {/*  Gradient overlays */}
      {gradientOverlays && (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-green-700 dark:from-navy-900" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-green-700 dark:from-navy-900" />
        </>
      )}
    </div>
  );
}

function VerticleScrollingColumn({
  items,
  msPerPixel,
  component,
}: {
  items: any[];
  msPerPixel: number;
  component: any;
}) {
  const columnRef = useRef<HTMLDivElement>(null); // Ref for the column element
  const [columnHeight, setColumnHeight] = useState(0); // Height of the column

  const duration = `${columnHeight * msPerPixel}ms`; // Duration of the marquee animation

  // Update the column height when the window is resized
  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      columnRef.current && setColumnHeight(columnRef.current.offsetHeight); // Update the column height
    });

    resizeObserver.observe(columnRef.current!); // Observe the column element

    return () => {
      resizeObserver.disconnect(); // Disconnect the observer when the component unmounts
    };
  }, []);

  return (
    <div
      className={cn('animate-marquee space-y-8 py-4')}
      ref={columnRef}
      // @ts-ignore
      style={{ '--marquee-duration': duration }} // Set the duration of the marquee animation... For some reason, TypeScript doesn't like this
    >
      {/* Render the testimonials twice to create the marquee effect */}
      {items.map((item, itemIdx) => (
        <VerticleScrollingItem
          item={item}
          aria-hidden={itemIdx >= items.length}
          component={component}
          key={itemIdx}
        />
      ))}
    </div>
  );
}

function VerticleScrollingItem({ item, component: Component, ...props }: any) {
  // Randomize animation delay
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      '0s',
      '0.1s',
      '0.2s',
      '0.3s',
      '0.4s',
      '0.5s',
    ]; // Possible animation delays

    // Return a random animation delay
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  // * Render
  return (
    <figure
      className="animate-fadeIn opacity-0"
      style={{ animationDelay }}
      {...props}
    >
      <Component testimonial={item} />
    </figure>
  );
}
