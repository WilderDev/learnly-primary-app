import Main from '@/lib/components/layout/Main';
import LandingHero from './LandingHero';
import Temp from '@/app/@dashboard/(pages)/Temp';

export default function MarketingLandingPage() {
  return (
    <Main>
      <LandingHero />

      <Temp />
    </Main>
  );
}

export const metadata = {
  title: '#1 Homeschool Solution',
};
