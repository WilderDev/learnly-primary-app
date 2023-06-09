import { useCallback, useEffect, useRef, useState } from 'react';

// * Props
interface IProps {
  duration?: number;
}

// * Hook
export default function useClipboard({ duration = 3000 }: IProps = {}) {
  // * Refs
  const ref = useRef<HTMLDivElement | null>(null);
  const resetCopy = useRef<NodeJS.Timeout | null>(null);

  // * State
  const [copied, setCopied] = useState(false);

  // * Handlers
  const onCopy = useCallback(() => {
    if (!ref.current) return;

    navigator.clipboard
      .writeText(ref.current?.innerText)
      .then(() => setCopied(true));
  }, [ref]);

  // * Effects
  useEffect(() => {
    // If copied, reset after duration
    if (copied) {
      resetCopy.current = setTimeout(() => setCopied(false), duration);
    }

    // Clear timeout on unmount
    return () => {
      resetCopy.current && clearTimeout(resetCopy.current);
    };
  }, [copied, duration]);

  return { copied, ref, onCopy }; // return copied, ref, onCopy
}
