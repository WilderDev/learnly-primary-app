import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function NumberTicker({ targetValue }: { targetValue: number }) {
  const [value, setValue] = useState(0);

  const duration = 700; // Total duration in milliseconds
  let timeElapsed = 0; // Time passed since the animation started

  useEffect(() => {
    const animationStart = Date.now();

    const interval = setInterval(() => {
      timeElapsed = Date.now() - animationStart; // update time elapsed
      const progress = timeElapsed / duration; // compute progress ratio
      const easeOutProgress = 1 - (1 - progress) ** 3; // cubic ease out

      if (timeElapsed < duration) {
        setValue(Math.floor(easeOutProgress * targetValue));
      } else {
        setValue(targetValue);
        clearInterval(interval);
      }
    }, 20); // check every 20ms, can be adjusted

    return () => clearInterval(interval);
  }, [targetValue, duration]);

  return (
    <motion.div key={value} animate={{ opacity: 1, y: 0 }}>
      {value}
    </motion.div>
  );
}
