import OnboardingProgressBar from './OnboardingProgressBar';
import Container from '@/lib/components/layout/Container';

import OnboardingContent from './OnboardingContent';
import { reviews } from '@/assets/reviews/reviews';
import VerticleMarqueeGrid from '@/lib/components/ux/VerticleMarqueeGrid';

export default function OnboardingContainer() {
  // * Render
  return (
    <>
      {/* Content */}
      <Container className="space-y-6 z-30 flex w-full h-full max-w-3xl items-center flex-col justify-center mb-8 sm:mb-0">
        {/* Progress */}
        <OnboardingProgressBar />

        {/* Content */}
        <OnboardingContent />
      </Container>

      {/* Testimonials */}
      <VerticleMarqueeGrid
        className="absolute opacity-20 brightness-75 w-screen h-screen max-h-[200vh]"
        overlayColors="from-green-600 dark:from-green-700"
        items={reviews}
        speed={15}
      />
    </>
  );
}
