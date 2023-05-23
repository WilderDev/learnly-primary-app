import Main from '@/lib/components/layout/Main';
import LandingMarqueeTestimonials from './LandingMarqueeTestimonials';
import { testimonials } from '@/assets/reviews/testimonials';
import LandingBenefits from './LandingBenefits';
import LandingHero from './LandingHero';
import LandingBigTestimonial from './LandingBigTestimonial';
import LandingFeatures from './LandingFeatures';
import LandingVerticleTestimonialGrid from './LandingVerticleTestimonialGrid';

export default function MarketingLandingPage() {
  return (
    <Main>
      <LandingHero />

      <LandingMarqueeTestimonials testimonials={testimonials} />

      <LandingBenefits />

      <LandingBigTestimonial />

      <LandingFeatures />

      <LandingVerticleTestimonialGrid />
    </Main>
  );
}

export const metadata = {
  title: 'Personalized Homeschool | #1 Curriculum & Lesson Software',
};
