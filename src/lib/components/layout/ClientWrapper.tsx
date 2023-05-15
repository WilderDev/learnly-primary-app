'use client';

import { Fragment, PropsWithChildren, useEffect, useState } from 'react';

// * Component
export default function ClientWrapper({ children }: PropsWithChildren) {
  // * State
  const [isMounted, setIsMounted] = useState(false);

  // * Effects
  // Mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // * Render
  return isMounted ? <Fragment>{children}</Fragment> : null;
}
