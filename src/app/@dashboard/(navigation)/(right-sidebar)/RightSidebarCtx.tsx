'use client';

import { PropsWithChildren, createContext, useContext, useState } from 'react';

// * Initialization
// Props
interface ICtxProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

// Initial State
const initialState: ICtxProps = {
  isOpen: false,
  open: () => {},
  close: () => {},
};

// Context
const RightSidebarCtx = createContext<ICtxProps>(initialState);

// * Provider
export const RightSidebarProvider = ({ children }: PropsWithChildren) => {
  // * State
  const [isOpen, setOpen] = useState(false);

  // * Value
  const providerValue = {
    isOpen,
    open: () => setOpen(true),
    close: () => setOpen(false),
  };

  // * Render
  return (
    <RightSidebarCtx.Provider value={providerValue}>
      {children}
    </RightSidebarCtx.Provider>
  );
};

export const useRightSidebar = () => useContext(RightSidebarCtx);
