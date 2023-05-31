import cn from '@/lib/common/cn';
import { useMemo } from 'react';
import StarRating from './StarRating';

// * Props
interface IProps {
  title: string;
  body: string;
  author: string;
  rating: number;
  className?: string;
  [key: string]: any;
}

// * Component
export default function VerticleMarqueeItem({
  title,
  body,
  author,
  rating,
  className,
  ...props
}: IProps) {
  // * Hooks
  // Randomize animation delay
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      '0s',
      '0.1s',
      '0.2s',
      '0.3s',
      '0.4s',
      '0.5s',
    ]; // Possible animation delays

    // Return a random animation delay
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  // * Render
  return (
    <figure
      className={cn(
        'animate-fadeIn rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-slate-900/5 dark:bg-navy-700 dark:shadow-navy-50/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      {/* Review */}
      <blockquote className="text-slate-900 dark:text-navy-50">
        {/* Rating */}
        <StarRating rating={rating} />

        {/* Title */}
        <h4 className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </h4>

        {/* Body */}
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>

      {/* Author */}
      <figcaption className="mt-3 text-sm text-slate-600 before:content-['–_'] dark:text-navy-300">
        {author}
      </figcaption>
    </figure>
  );
}
