import Main from '@/lib/components/layout/Main';
import LandingHeroAlt from './LandingHeroAlt';
import MarqueeTestimonials from './MarqueeTestimonials';
import { testimonials } from '@/assets/reviews/testimonials';

export default function MarketingLandingPage() {
  return (
    <Main>
      {/* <LandingHero /> */}
      <LandingHeroAlt />

      <MarqueeTestimonials testimonials={testimonials} />
    </Main>
  );
}

export const metadata = {
  title: 'Personalized Homeschool | #1 Curriculum & Lesson Software',
};
