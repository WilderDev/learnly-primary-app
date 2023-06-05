'use client';

import CommandPalette, { IItem } from '@/lib/components/ui/CommandPalette';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

// * Initialization
// Props
interface ICommandPaletteCtxProps {
  items: IItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
} // Create an interface for the context props

// Initial State
const initialState: ICommandPaletteCtxProps = {
  items: [],
  open: false,
  setOpen: () => {},
}; // Create a context object with default value

// Context
const CommandPaletteCtx = createContext(initialState); // Create Context Object

// * Provider
export function CommandPaletteProvider({ children }: PropsWithChildren) {
  // * Context / Hooks

  // * State
  const [open, setOpen] = useState(false); // Create state for the open state of the Command Palette
  const [items, setItems] = useState<IItem[]>([]); // Create state for the items in the Command Palette

  // * Handlers
  // Get Command Palette Items
  //   TSK

  // * Effects
  // Fetch Data
  //   TSK

  // * Value
  const value: ICommandPaletteCtxProps = useMemo(
    () => ({
      items,
      open,
      setOpen,
    }),
    [items, open, setOpen],
  ); // Create memoized value object

  // * Render
  return (
    <CommandPaletteCtx.Provider value={value}>
      {/* Command Palette */}
      {open && (
        <CommandPalette
          items={[
            {
              id: 'bdec4032-c48c-453c-aca4-f947290ca098',
              name: 'Art in History (Pre-K Creative Arts)',
              category: 'lesson_plan',
              url: '/lesson-creator',
            },
            {
              id: '7dcd3676-2f10-4de8-8d62-37d984452495',
              name: 'Mathematics for Computers (Grade 1 Math)',
              category: 'lesson_plan',
              url: '/schedule-builder',
            },
          ]}
        />
      )}

      {/* Children */}
      {children}
    </CommandPaletteCtx.Provider>
  );
}

// * Hook
export function useCommandPalette() {
  const ctx = useContext(CommandPaletteCtx); // Get the context object

  // Throw an error if the context object is undefined
  if (!ctx) {
    throw new Error(
      'useCommandPalette must be used within a CommandPaletteProvider',
    );
  }

  return ctx; // Return the context object to be used in the component
}
