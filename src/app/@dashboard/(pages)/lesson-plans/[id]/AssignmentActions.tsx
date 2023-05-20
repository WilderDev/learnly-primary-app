import Button from '@/lib/components/ui/Button';
import { BoltIcon, PrinterIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function AssignmentActions() {
  return (
    <div className="flex justify-between gap-4">
      <Button className="w-full">
        Regenerate <BoltIcon className="w-5 h-5 ml-2" />
      </Button>
      <Button className="w-full">
        Print <PrinterIcon className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
}
