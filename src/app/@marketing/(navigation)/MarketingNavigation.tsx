import Logo from '@/lib/components/brand/Logo';
import Container from '@/lib/components/layout/Container';
import MarketingNavCTA from './MarketingNavCTA';
import MarketingNavMobileMenu from './MarketingNavMobileMenu';
import MarketingNavLinks from './MarketingNavLinks';

export default function MarketingNavigation() {
  return (
    <header className="w-full bg-white shadow dark:bg-navy-800 print:hidden">
      <nav
        id="marketing-navigation"
        role="navigation"
        aria-label="Main Navigation"
      >
        <Container className="z-30 flex justify-between py-6">
          <div className="hidden relative z-10 lg:flex items-center gap-16">
            {/* Logo */}
            <Logo withText={true} />

            {/* Main Nav Links (Desktop) */}
            <div className="flex lg:gap-10 relative">
              <MarketingNavLinks />
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Mobile Menu */}
            <MarketingNavMobileMenu />

            {/* Right Buttons (Desktop) */}
            <MarketingNavCTA />
          </div>
        </Container>
      </nav>
    </header>
  );
}
