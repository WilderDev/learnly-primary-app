'use client';

import { Toaster } from 'sonner';

export default function Toast() {
  return (
    <Toaster className="print:hidden" richColors position="bottom-right" />
  );
}
