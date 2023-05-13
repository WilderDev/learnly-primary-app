'use client';

import { useRouter } from 'next/navigation';
// * Imports
import { PropsWithChildren, useContext, createContext, useState } from 'react';

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

  // * State
  const [isOpen, setIsOpen] = useState(false);
  const [returnPath, setReturnPath] = useState<string>();

  // * Handlers
  // Open Modal
  const open = () => {
    setIsOpen(true);
  };

  // Close Modal
  const close = () => {
    setIsOpen(false);

    if (returnPath) {
      router.back();
    } else {
      router.refresh();
    }
  };

  // * Value
  const value: IInterceptionModalCtx = {
    isOpen,
    open,
    close,
  };

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
