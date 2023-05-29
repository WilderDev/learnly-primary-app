'use client';

import { IReview } from '@/assets/typescript/misc';
import { splitArray } from '@/lib/common/array.helpers';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import VerticleMarqueeColumn from './VerticleMarqueeColumn';
import cn from '@/lib/common/cn';
import VerticleMarqueeOverlays from './VerticleMarqueeOverlays';

// * Props
interface IProps {
  items: IReview[];
  speed?: 5 | 10 | 15 | 20;
  className?: string;
  overlayColors?: string;
}

export default function VerticleMarqueeGrid({
  items,
  speed = 10,
  className,
  overlayColors,
}: IProps) {
  // * Refs
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the container element
  const isInView = useInView(containerRef, { once: true, amount: 0.4 }); // Check if the container is in view

  // * State
  let columns = splitArray(items, 3); // Split the items into 3 columns
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]; // Split the 3rd column into 2 columns to make the layout more balanced

  // * Render
  return (
    <div
      className={cn(
        'relative grid grid-cols-1 items-start gap-8 overflow-hidden px-4 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
      ref={containerRef}
    >
      {/*  Render the columns only when the container is in view */}
      {isInView && (
        <>
          {/* First column */}
          <VerticleMarqueeColumn
            items={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            msPerPixel={speed}
            reviewClassName={(reviewIndex) =>
              cn(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden',
              )
            }
          />

          {/* Second column */}
          <VerticleMarqueeColumn
            className="hidden md:block"
            items={[...columns[1], ...columns[2][1]]}
            msPerPixel={speed + 5}
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length ? 'lg:hidden' : undefined
            }
          />

          {/* Third column */}
          <VerticleMarqueeColumn
            className="hidden lg:block"
            items={columns[2].flat()}
            msPerPixel={speed}
          />
        </>
      )}

      {/*  Gradient overlays */}
      <VerticleMarqueeOverlays className={overlayColors} />
    </div>
  );
}
