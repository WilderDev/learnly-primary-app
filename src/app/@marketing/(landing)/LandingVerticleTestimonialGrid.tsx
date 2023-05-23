'use client';

import Container from '@/lib/components/layout/Container';
import LandingSectionHeader from './LandingSectionHeader';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { splitArray } from '@/lib/common/array.helpers';
import { reviews } from '@/assets/reviews/reviews';
import { IReview } from '@/assets/typescript/misc';
import cn from '@/lib/common/cn';

// * Component
export default function LandingVerticleTestimonialGrid() {
  // * Refs
  const containerRef = useRef(null); // Ref for the container element
  const isInView = useInView(containerRef, { once: true, amount: 0.4 }); // Check if the container is in view

  let columns = splitArray(reviews, 3); // Split the reviews into 3 columns
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]; // Split the 3rd column into 2 columns to make the layout more balanced

  // * Render
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="py-24 sm:py-32 bg-slate-50 dark:bg-navy-800"
    >
      <LandingSectionHeader
        title="Homeschool Mom Stamp of Approval"
        subtitle="You're in good company"
        description="Hear from other homeschool moms who have used our software to create a personalized learning experience for their children."
      />

      <Container className="max-w-7xl">
        <div
          className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
          ref={containerRef}
        >
          {/*  Render the columns only when the container is in view */}
          {isInView && (
            <>
              {/* First column */}
              <LandingVerticleTestimonialColumn
                reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
                reviewClassName={(reviewIndex) =>
                  cn(
                    reviewIndex >= columns[0].length + columns[2][0].length &&
                      'md:hidden',
                    reviewIndex >= columns[0].length && 'lg:hidden',
                  )
                }
                msPerPixel={10}
              />

              {/* Second column */}
              <LandingVerticleTestimonialColumn
                reviews={[...columns[1], ...columns[2][1]]}
                className="hidden md:block"
                reviewClassName={(reviewIndex) =>
                  reviewIndex >= columns[1].length && 'lg:hidden'
                }
                msPerPixel={15}
              />

              {/* Third column */}
              <LandingVerticleTestimonialColumn
                reviews={columns[2].flat()}
                className="hidden lg:block"
                msPerPixel={10}
                reviewClassName={() => ''}
              />
            </>
          )}

          {/*  Gradient overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-50 dark:from-navy-800" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 dark:from-navy-800" />
        </div>
      </Container>
    </section>
  );
}

interface ILandingVerticleTestimonialColumnProps {
  reviews: IReview[];
  reviewClassName: (reviewIndex: number) => string | boolean;
  msPerPixel?: number;
  className?: string;
  [key: string]: any;
}

function LandingVerticleTestimonialColumn({
  reviews,
  reviewClassName,
  msPerPixel = 0,
  className,
}: ILandingVerticleTestimonialColumnProps) {
  // * Refs
  const columnRef = useRef<HTMLDivElement>(null); // Ref for the column element

  // * State
  const [columnHeight, setColumnHeight] = useState(0); // Height of the column
  const duration = `${columnHeight * msPerPixel}ms`; // Duration of the marquee animation

  // * Effects
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

  // * Render
  return (
    <div
      className={cn('animate-marquee space-y-8 py-4', className)}
      ref={columnRef}
      // @ts-ignore
      style={{ '--marquee-duration': duration }} // Set the duration of the marquee animation... For some reason, TypeScript doesn't like this
    >
      {/* Render the reviews twice to create the marquee effect */}
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <LandingVerticleTestimonialReview
          className={reviewClassName(reviewIndex % reviews.length)}
          aria-hidden={reviewIndex >= reviews.length}
          key={reviewIndex}
          {...review}
        />
      ))}
    </div>
  );
}

interface ILandingVerticleTestimonialReviewProps {
  title: string;
  body: string;
  author: string;
  rating: number;
  className: string | boolean;
  [key: string]: any;
}

function LandingVerticleTestimonialReview({
  title,
  body,
  author,
  rating,
  className,
  ...props
}: ILandingVerticleTestimonialReviewProps) {
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
        <LandingVerticleTestimonialStarRating rating={rating} />

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

// Star rating component
function LandingVerticleTestimonialStarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {/* Render 5 stars */}
      {[...Array(5).keys()].map((index) => (
        <LandingVerticleTestimonialStarIcon
          className={cn(
            'h-5 w-5',
            rating > index
              ? 'fill-emerald-500 dark:fill-emerald-400' // Filled star
              : 'fill-slate-200', // Empty star
          )}
          key={index}
        />
      ))}
    </div>
  );
}

// Single Star icon
function LandingVerticleTestimonialStarIcon(props: any) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
