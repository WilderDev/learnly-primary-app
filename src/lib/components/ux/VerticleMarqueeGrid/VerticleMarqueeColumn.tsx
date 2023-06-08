'use client';

import { IReview } from '@/assets/typescript/misc';
import VerticleMarqueeItem from './VerticleMarqueeItem';
import cn from '@/lib/common/cn';
import { useEffect, useRef, useState } from 'react';

// * Props
interface IProps {
  items: IReview[];
  msPerPixel?: number;
  className?: string;
  reviewClassName?: (reviewIndex: number) => string | undefined;
}

// * Component
export default function VerticleMarqueeColumn({
  items,
  msPerPixel = 15,
  className,
  reviewClassName = () => '',
}: IProps) {
  // * Refs
  const columnRef = useRef<HTMLDivElement>(null); // Ref for the column element

  // * State
  const [columnHeight, setColumnHeight] = useState(0); // Height of the column
  const duration = `${columnHeight * msPerPixel}ms`; // Duration of the marquee animation

  // * Effects
  // Update the column height when the window is resized
  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      columnRef.current && setColumnHeight(columnRef.current.offsetHeight); // Update the column height
    });

    columnRef.current && resizeObserver.observe(columnRef.current); // Observe the column element

    return () => {
      resizeObserver.disconnect(); // Disconnect the observer when the component unmounts
    };
  }, []);

  // * Render
  return (
    <div
      className={cn('animate-marquee space-y-8 py-4 transform-gpu', className)}
      ref={columnRef}
      // @ts-ignore
      style={{ '--marquee-duration': duration }} // Set the duration of the marquee animation... For some reason, TypeScript doesn't like this
    >
      {/* Render the reviews twice to create the marquee effect */}
      {items.concat(items).map((item, itemIdx) => (
        <VerticleMarqueeItem
          className={reviewClassName(itemIdx % items.length)}
          aria-hidden={itemIdx >= items.length}
          key={itemIdx}
          {...item}
        />
      ))}
    </div>
  );
}
