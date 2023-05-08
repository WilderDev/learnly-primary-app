'use client';

import { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function getAnimationSettings(originXA: number, originXB: number) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 100,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  };
}

export default function CelebrationConfetti() {
  const refAnimationInstance = useRef<any>(null);

  const getInstance = useCallback((instance: confetti.CreateTypes | null) => {
    refAnimationInstance.current = instance;
  }, []);

  useEffect(() => {
    const intId = setInterval(() => {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
      refAnimationInstance.current(getAnimationSettings(0.5, 0.7));
    }, 750);

    setTimeout(() => {
      clearInterval(intId);
      refAnimationInstance.current?.reset();
    }, 3000);

    return () => {
      clearInterval(intId);
      refAnimationInstance.current?.reset();
    };
  }, []);

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
      disableForReducedMotion={true}
      colors={[
        '#facc15',
        '#22c55e',
        '#2dd4bf',
        '#0ea5e9',
        '#9333ea',
        '#e11d48',
      ]}
    />
  );
}
