'use client';

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

// * Initialization
// Props
interface IHelpCenterCtxProps {
  templateMessage: string;
  setTemplateMessage: (message: string) => void;
} // Create an interface for the context props

// Initial State
const initialState: IHelpCenterCtxProps = {
  templateMessage: '',
  setTemplateMessage: () => {},
}; // Create a context object with default value

// Context
const HelpCenterCtx = createContext(initialState); // Create Context Object

// * Provider
export function HelpCenterProvider({ children }: PropsWithChildren) {
  // * Context / Hooks

  // * State
  const [templateMessage, setTemplateMessage] = useState(''); // Template message

  // * Handlers

  // * Effects

  // * Value
  const value: IHelpCenterCtxProps = useMemo(
    () => ({
      templateMessage,
      setTemplateMessage,
    }),
    [templateMessage, setTemplateMessage],
  ); // Create memoized value object

  // * Render
  return (
    <HelpCenterCtx.Provider value={value}>
      {/* Children */}
      {children}
    </HelpCenterCtx.Provider>
  );
}

// * Hook
export function useHelpCenter() {
  const ctx = useContext(HelpCenterCtx); // Get the context object

  // Throw an error if the context object is undefined
  if (!ctx) {
    throw new Error('useHelpCenter must be used within a HelpCenterProvider');
  }

  return ctx; // Return the context object to be used in the component
}
