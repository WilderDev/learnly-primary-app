'use client';

import { useEffect, useRef, useState } from 'react';
import VerticleScrollingItem from './VerticleScrollingItem';
import cn from '@/lib/common/cn';

export default function VerticleScrollingColumn({
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
