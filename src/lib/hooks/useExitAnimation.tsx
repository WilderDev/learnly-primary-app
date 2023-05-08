import { useState } from 'react';

// * Types
interface IReturn {
  isExiting: boolean;
  handleExit: (callback: () => void) => void;
}

// * Hook
export const useExitAnimation = (duration: number = 300): IReturn => {
  // * State
  const [isExiting, setIsExiting] = useState(false); // Exit Animation

  // * Functions
  const handleExit = (callback: () => void) => {
    if (!isExiting) {
      setIsExiting(true);
      setTimeout(() => {
        callback();
      }, duration);
    }
  };

  // * Return
  return {
    isExiting,
    handleExit,
  };
};
