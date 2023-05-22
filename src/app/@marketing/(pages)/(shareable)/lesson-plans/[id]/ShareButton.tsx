'use client';

import { handleShare } from '@/app/@dashboard/(pages)/lesson-creator/helpers';
import Button from '@/lib/components/ui/Button';

// * Props
interface IProps {
  id: string;
}

// * Component
export default function ShareButton({ id }: IProps) {
  // * Render
  return (
    <Button
      className=" mt-6 print:hidden w-full"
      onClick={() => handleShare(`/lesson-plans/${id}`)}
    >
      Share ❤️{' '}
    </Button>
  );
}
