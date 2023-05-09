'use client';

import cn from '@/lib/common/cn';
import VerticleScrollingColumn from './VerticleScrollingColumn';

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
  // * Render
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
