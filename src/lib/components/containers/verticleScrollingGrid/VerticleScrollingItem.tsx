'use client';

import { useMemo } from 'react';

export default function VerticleScrollingItem({
  item,
  component: Component,
  ...props
}: any) {
  // * Helpers
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
