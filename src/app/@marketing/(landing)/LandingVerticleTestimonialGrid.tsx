'use client';

import Container from '@/lib/components/layout/Container';
import LandingSectionHeader from './LandingSectionHeader';
import { reviews } from '@/assets/reviews/reviews';
import VerticleMarqueeGrid from '@/lib/components/containers/VerticleMarqueeGrid';

// * Component
export default function LandingVerticleTestimonialGrid() {
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
        <VerticleMarqueeGrid
          className="-mx-4 mt-16 sm:mt-20 h-[49rem] max-h-[150vh]"
          items={reviews}
        />
      </Container>
    </section>
  );
}
