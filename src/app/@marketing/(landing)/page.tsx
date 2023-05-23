import Main from '@/lib/components/layout/Main';
import MarqueeTestimonials from './MarqueeTestimonials';
import { testimonials } from '@/assets/reviews/testimonials';
import LandingFeatures from './LandingFeatures';
import LandingHero from './LandingHero';

export default function MarketingLandingPage() {
  return (
    <Main>
      <LandingHero />

      <MarqueeTestimonials testimonials={testimonials} />

      <LandingFeatures />
    </Main>
  );
}

export const metadata = {
  title: 'Personalized Homeschool | #1 Curriculum & Lesson Software',
};
