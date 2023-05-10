import Image from 'next/image';
import learnlyOcto from '@/assets/images/learnly-octopus.png';
import cn from '@/lib/common/cn';

interface IProps {
  className?: string;
}

export default function LearnlyOcto({ className }: IProps) {
  return (
    <Image
      className={cn('w-40 h-40', className)}
      src={learnlyOcto}
      alt="Learnly Octopus"
    />
  );
}
