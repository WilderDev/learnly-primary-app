import Main from '@/lib/components/layout/Main';
import LandingHeroAlt from './LandingHeroAlt';

export default function MarketingLandingPage() {
  return (
    <Main>
      {/* <LandingHero /> */}
      <LandingHeroAlt />
    </Main>
  );
}

export const metadata = {
  title: 'Homeschool Your Way',
};
