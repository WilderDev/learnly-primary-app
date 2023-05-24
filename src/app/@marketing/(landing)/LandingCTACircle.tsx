import Container from '@/lib/components/layout/Container';
import CircleBackground from '@/lib/components/ux/CircleBackgroundAnimation';
import Link from 'next/link';

export default function LandingCTACircle() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-white dark:bg-navy-800 py-40"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <CircleBackground color="#22c55e" className="animate-spinSlow" />
      </div>
      <Container className="relative max-w-7xl">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-navy-50 sm:text-4xl">
            Achieve Homeschool Success with Less Stress
          </h2>
          <p className="mt-4 text-lg text-slate-700 dark:text-navy-100">
            Register now to enjoy a risk-free trial, followed by a 100% refund
            assurance if you are not content for any reason—no questions asked.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              className="inline-flex items-center rounded-md border border-transparent bg-emerald-600 dark:bg-emerald-500 px-6 py-3 text-base font-medium text-white dark:text-navy-50 transition-colors duration-300 hocus:bg-emerald-700 dark:hocus:bg-emerald-600"
              href="/onboarding"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
