import Logo from '@/lib/components/brand/Logo';
import Container from '@/lib/components/layout/Container';
import MarketingNavCTA from './MarketingNavCTA';

export default function MarketingNavigation() {
  return (
    <header className="w-full bg-white dark:bg-navy-800 print:hidden">
      <nav
        id="marketing-navigation"
        role="navigation"
        aria-label="Main Navigation"
      >
        <Container className="z-30 flex justify-between py-8">
          <div className="hidden relative z-10 lg:flex items-center gap-16">
            {/* Logo */}
            <Logo withText={true} />

            {/* Main Nav Links (Desktop) */}
            <div className="flex lg:gap-10">{/* <MarketingNavLinks /> */}</div>
          </div>

          <div className="flex items-center gap-6">
            {/* Mobile Menu */}
            {/* <MarketingMobileMenu /> */}

            {/* Right Buttons (Desktop) */}
            <MarketingNavCTA />
          </div>
        </Container>

        {/* Theme Toggler */}
        {/* <ThemeToggler /> */}
      </nav>
    </header>
  );
}
