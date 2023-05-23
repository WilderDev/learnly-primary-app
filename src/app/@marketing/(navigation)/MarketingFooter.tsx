import Link from 'next/link';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import Container from '@/lib/components/layout/Container';
import Logo from '@/lib/components/brand/Logo';
import MarketingFooterNewsletter from './MarketingFooterNewsletter';

export default function MarketingFooter() {
  return (
    <footer className="border-t border-slate-200 dark:border-navy-700">
      {/* Container */}
      <Container>
        {/* Website Info */}
        <div className="flex flex-col items-start justify-between gap-y-12 pt-8 lg:flex-row lg:items-center lg:pt-8 lg:pb-">
          {/* Company */}
          <div>
            <div className="flex flex-col space-y-6 max-w-sm">
              <div className="flex flex-col text-slate-900 dark:text-navy-50 sm:flex-row sm:items-center">
                <Logo className="flex-shrink-0" />

                <div className="mt-3 sm:ml-4">
                  <p className="text-base font-semibold">Learnly</p>
                  <p className="mt-1 text-sm">
                    The safe choice for an easy, fun, and flexible homeschool
                    experience.
                  </p>
                </div>
              </div>

              {/* Newsletter CTA */}

              <MarketingFooterNewsletter />
            </div>

            <nav className="mt-11 flex gap-8">
              {/* <LandingHeaderNavLinks /> */}
            </nav>
          </div>

          {/* CTA */}
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-slate-100 dark:hover:bg-navy-800 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            {/* Icon */}
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <AcademicCapIcon className="h-10 w-10 flex-none fill-emerald-500" />
            </div>

            {/* CTA Info */}
            <div className="ml-8 lg:w-64">
              {/* Link */}
              <p className="text-base font-semibold text-slate-900 dark:text-navy-50">
                <Link href="/onboarding">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Choose Your Plan
                </Link>
              </p>

              {/* Description */}
              <p className="mt-1 text-sm text-slate-700 dark:text-navy-200">
                Find the solution that fits you and your families unique needs.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col relative items-center md:items-start border-t border-slate-200 pb-12 pt-8 dark:border-navy-700 md:pt-6">
          <p className="mt-6 text-sm text-slate-500 dark:text-navy-300 md:mt-0">
            &copy; Copyright Learnly LLC, {new Date().getFullYear()}. All rights
            reserved.
          </p>

          <p className="sr-only">
            We improve our products and advertising by using Microsoft Clarity
            to see how you use our website. By using our site, you agree that we
            and Microsoft can collect and use this data. Our privacy statement{' '}
            <a href="https://www.learnly.ai/privacy-policy">
              Our Privacy Policy
            </a>{' '}
            has more details.
          </p>
        </div>
      </Container>
    </footer>
  );
}
