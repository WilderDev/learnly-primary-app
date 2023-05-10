'use client';

import { useEffect, useState } from 'react';

export default function VerticleScrollingItem({
  item,
  component: Component,
  ...props
}: any) {
  // * State
  const [animationDelay, setAnimationDelay] = useState('0s');

  // * Effects
  useEffect(() => {
    let possibleAnimationDelays = [
      '0s',
      '0.1s',
      '0.2s',
      '0.3s',
      '0.4s',
      '0.5s',
    ]; // Possible animation delays

    // Set a random animation delay on client-side
    setAnimationDelay(
      possibleAnimationDelays[
        Math.floor(Math.random() * possibleAnimationDelays.length)
      ],
    );
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
