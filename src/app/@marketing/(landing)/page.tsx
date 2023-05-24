import Main from '@/lib/components/layout/Main';
import LandingMarqueeTestimonials from './LandingMarqueeTestimonials';
import { testimonials } from '@/assets/reviews/testimonials';
import LandingBenefits from './LandingBenefits';
import LandingHero from './LandingHero';
import LandingBigTestimonial from './LandingBigTestimonial';
import LandingFeatures from './LandingFeatures';
import LandingVerticleTestimonialGrid from './LandingVerticleTestimonialGrid';
import LandingCTAImages from './LandingCTAImages';
import LandingFAQ from './LandingFAQ';
import LandingCTACircle from './LandingCTACircle';

export default function MarketingLandingPage() {
  return (
    <Main className="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
      <LandingHero />

      <LandingMarqueeTestimonials testimonials={testimonials} />

      <LandingBenefits />

      <LandingBigTestimonial />

      <LandingFeatures />

      <LandingVerticleTestimonialGrid />

      <LandingCTAImages />

      <LandingFAQ />

      <LandingCTACircle />
    </Main>
  );
}

export const metadata = {
  title: 'Personalized Homeschool | #1 Curriculum & Lesson Software',
};
