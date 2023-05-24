'use client';

import OnboardingProgressBar from './OnboardingProgressBar';
import Container from '@/lib/components/layout/Container';
import VerticleScrollingGrid from '@/lib/components/containers/verticleScrollingGrid';

import dynamic from 'next/dynamic';
import OnboardingContent from './OnboardingContent';
import { testimonials } from '@/assets/reviews/testimonials';

const OnboardingTestimonialBox = dynamic(
  () => import('./OnboardingTestimonialBox'),
  { ssr: false },
);

export default function OnboardingContainer() {
  // * Render
  return (
    <>
      {/* Testimonials Left */}
      <VerticleScrollingGrid
        className="h-full max-h-screen w-full left-0 xl:w-4/12 2xl:w-3/12 absolute 2xl:relative opacity-20"
        colsAndColItems={[{ list: testimonials, msPerPixel: 15 }]}
        component={OnboardingTestimonialBox}
      />

      {/* Content */}
      <Container className="space-y-6 z-30 flex w-full h-full max-w-3xl items-center flex-col justify-center mb-8 sm:mb-0">
        {/* Progress */}
        <OnboardingProgressBar />

        {/* Content */}
        <OnboardingContent />
      </Container>

      {/* Testimonials Right */}
      <VerticleScrollingGrid
        className="h-full max-h-screen absolute right-0 hidden xl:block xl:w-4/12 2xl:w-3/12 2xl:relative opacity-20"
        colsAndColItems={[{ list: testimonials.reverse(), msPerPixel: 15 }]}
        component={OnboardingTestimonialBox}
      />
    </>
  );
}
