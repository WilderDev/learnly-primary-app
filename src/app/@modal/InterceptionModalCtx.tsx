'use client';

import { useRouter } from 'next/navigation';
// * Imports
import {
  PropsWithChildren,
  useContext,
  createContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { useLessonCreator } from '../@dashboard/(pages)/lesson-creator/LessonCreatorCtx';

// * Context
// Interface
interface IInterceptionModalCtx {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  returnPath?: string;
}

// Initial Value
const initialCtxValue: IInterceptionModalCtx = {
  isOpen: true,
  open: () => {},
  close: () => {},
  returnPath: undefined,
};

// Context
const InterceptionModalCtx =
  createContext<IInterceptionModalCtx>(initialCtxValue);

// * Provider
export function InterceptionModalProvider({ children }: PropsWithChildren) {
  // * Hooks
  const router = useRouter();
  const { setComplete } = useLessonCreator();

  // * State
  const [isOpen, setIsOpen] = useState(false);
  const [returnPath, setReturnPath] = useState<string>();

  // * Handlers
  // Open Modal
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  // Close Modal
  const close = useCallback(() => {
    setIsOpen(false);
    setComplete(false);

    if (returnPath) {
      router.back();
    } else {
      router.refresh();
    }
  }, [returnPath, router, setComplete]);

  // * Value
  const value: IInterceptionModalCtx = useMemo(
    () => ({
      isOpen,
      open,
      close,
    }),
    [isOpen, open, close],
  );

  // * Render
  return (
    <InterceptionModalCtx.Provider value={value}>
      {children}
    </InterceptionModalCtx.Provider>
  );
}

// * Hooks
export function useInterceptionModal() {
  const ctx = useContext(InterceptionModalCtx); // Context

  // Throw Error if Context is not found
  if (!ctx) {
    throw new Error(
      'useInterceptionModal must be used within a InterceptionModalProvider',
    );
  }

  return ctx; // Return Context
}
