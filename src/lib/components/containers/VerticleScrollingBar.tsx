'use client';

import cn from '@/lib/common/cn';
import { useEffect, useMemo, useRef, useState } from 'react';
import OnboardingTestimonialBox from '../../../app/@marketing/onboarding/OnboardingTestimonialBox';

// * Props
interface IProps {
  list: any[];
  msPerPixel?: number;
  className?: string;
}

export default function VerticleScrollingBar({
  list,
  msPerPixel = 15,
  className,
}: IProps) {
  const columnRef = useRef<HTMLDivElement>(null); // Ref for the column element
  const [columnHeight, setColumnHeight] = useState(0); // Height of the column

  const duration = `${window.innerHeight * msPerPixel}ms`; // Duration of the marquee animation

  // Update the column height when the window is resized
  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current!.offsetHeight); // Update the column height
    });

    console.log('columnHeight:', columnHeight);

    resizeObserver.observe(columnRef.current!); // Observe the column element

    return () => {
      resizeObserver.disconnect(); // Disconnect the observer when the component unmounts
    };
  }, []);

  // * Render
  return (
    <div
      className={cn('animate-marquee', className)}
      ref={columnRef}
      //   @ts-ignore
      style={{ '--marquee-duration': duration }} // Set the duration of the marquee animation... For some reason, TypeScript doesn't like this
    >
      {/* Render the list twice to create the marquee effect */}
      {list
        .concat(list)
        .concat(list)
        .concat(list)
        .map((item, i) => (
          <VerticleScrollingBarItem item={item} key={i} />
        ))}
    </div>
  );
}

export function VerticleScrollingBarItem({ item, className, ...props }: any) {
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
      Test
    </figure>
  );
}

// <OnboardingTestimonialBox
//   className={cn('animate-fadeIn opacity-0')}
//   style={{ animationDelay }}
//   testimonial={item}
//   key={item.name}
// />
//   {/* Review */}
//   <blockquote className="text-slate-900 dark:text-navy-50">
//     {/* Rating */}
//     {/* <StarRating rating={rating} /> */}

//     {/* Title */}
//     <h4 className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
//       {/* {title} */}TEST
//     </h4>

//     {/* Body */}
//     <p className="mt-3 text-base leading-7">
//       {/* {body} */}
//       Body
//     </p>
//   </blockquote>

//   {/* Author */}
//   <figcaption className="mt-3 text-sm text-slate-600 before:content-['–_'] dark:text-navy-300">
//     {/* {author} */}
//     Author
//   </figcaption>
