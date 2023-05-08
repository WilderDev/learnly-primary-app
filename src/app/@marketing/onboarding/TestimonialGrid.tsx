'use client';

import { ITestimonial } from '@/assets/typescript/misc';
import cn from '@/lib/common/cn';
import { useEffect, useMemo, useRef, useState } from 'react';
import OnboardingTestimonialBox from './OnboardingTestimonialBox';

export default function TestimonialGrid({
  testimonials,
  className,
}: {
  testimonials: ITestimonial[];
  className?: string;
}) {
  return (
    <div className={cn('relative overflow-hidden ', className)}>
      {/* First column */}
      <TestimonialColumn testimonials={testimonials} msPerPixel={15} />

      {/*  Gradient overlays */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-green-700 dark:from-navy-900" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-green-700 dark:from-navy-900" /> */}
    </div>
  );
}

function TestimonialColumn({
  testimonials,
  msPerPixel,
}: {
  testimonials: ITestimonial[];
  msPerPixel: number;
}) {
  const columnRef = useRef<HTMLDivElement>(null); // Ref for the column element
  const [columnHeight, setColumnHeight] = useState(0); // Height of the column

  const duration = `${columnHeight * msPerPixel}ms`; // Duration of the marquee animation

  // Update the column height when the window is resized
  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current!.offsetHeight); // Update the column height
    });

    resizeObserver.observe(columnRef.current!); // Observe the column element

    return () => {
      resizeObserver.disconnect(); // Disconnect the observer when the component unmounts
    };
  }, []);

  return (
    <div
      className={cn('animate-marquee space-y-8 py-4')}
      ref={columnRef}
      // @ts-ignore
      style={{ '--marquee-duration': duration }} // Set the duration of the marquee animation... For some reason, TypeScript doesn't like this
    >
      {/* Render the testimonials twice to create the marquee effect */}
      {testimonials.concat(testimonials).map((testimonial, tIdx) => (
        <Testimonial
          aria-hidden={tIdx >= testimonials.length}
          key={tIdx}
          {...testimonial}
        />
      ))}
    </div>
  );
}

function Testimonial({ name, quote, role, image, ...props }: ITestimonial) {
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
    <OnboardingTestimonialBox
      className="animate-fadeIn"
      testimonial={{ name, quote, role, image }}
    />
    // <figure
    //   className={cn(
    //     'animate-fadeIn rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-slate-900/5 dark:bg-navy-700 dark:shadow-navy-50/5',
    //   )}
    //   style={{ animationDelay }}
    //   {...props}
    // >
    //   {/* Review */}
    //   <blockquote className="text-slate-900 dark:text-navy-50">
    //     {/* Rating */}
    //     {/* <StarRating rating={rating} /> */}

    //     {/* Title */}
    //     <h4 className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
    //       {name}
    //     </h4>

    //     {/* Body */}
    //     <p className="mt-3 text-base leading-7">{quote}</p>
    //   </blockquote>

    //   {/* Author */}
    //   <figcaption className="mt-3 text-sm text-slate-600 before:content-['–_'] dark:text-navy-300">
    //     {role}
    //   </figcaption>
    // </figure>
  );
}
