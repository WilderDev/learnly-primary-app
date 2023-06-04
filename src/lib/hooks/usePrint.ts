import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export function usePrint(title?: string) {
  // Grab Component Ref
  const componentRef = useRef(null);

  // Assignment Document Content
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    // Optional Document Title (Save As PDF)
    documentTitle: title,
  });

  // Return Hook
  return { componentRef, handlePrint };
}
