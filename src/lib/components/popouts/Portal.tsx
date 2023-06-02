'use client';

import { ReactPortal, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  children: React.ReactNode;
  portalName?: string;
}

export default function Portal({
  children,
  portalName = 'portal',
}: IProps): ReactPortal | null {
  // * State
  const [ready, setReady] = useState(false);

  // * Effects
  useEffect(() => {
    setReady(true);
  }, []);

  // * Render
  return ready
    ? // @ts-ignore
      createPortal(children, document.getElementById(portalName) as HTMLElement)
    : null;
}
