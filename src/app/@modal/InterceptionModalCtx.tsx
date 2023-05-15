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

// * Context
// Interface
interface IInterceptionModalCtx {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  refresh: () => void;
}

// Initial Value
const initialCtxValue: IInterceptionModalCtx = {
  isOpen: true,
  open: () => {},
  close: () => {},
  refresh: () => {},
};

// Context
const InterceptionModalCtx =
  createContext<IInterceptionModalCtx>(initialCtxValue);

// * Provider
export function InterceptionModalProvider({ children }: PropsWithChildren) {
  // * Hooks
  const router = useRouter();

  // * State
  const [isOpen, setIsOpen] = useState(false);

  // * Handlers
  // Open Modal
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  // Close Modal and go back
  const close = useCallback(() => {
    setIsOpen(false);
    router.back();
  }, [router]);

  // Close Modal and refresh
  const refresh = useCallback(() => {
    // router.refresh();
    setIsOpen(false);
    window.location.reload();
  }, []);

  // * Value
  const value: IInterceptionModalCtx = useMemo(
    () => ({
      isOpen,
      open,
      close,
      refresh,
    }),
    [isOpen, open, close, refresh],
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
