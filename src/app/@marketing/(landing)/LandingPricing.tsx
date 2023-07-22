import { CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const includedFeatures = [
  'Unlimited access to all curriculums',
  'Unlimited access to all lessons (6000+)',
  'Homeschool Lesson Scheduler',
  'Community of Like-Minded Parents',
];

export default function LandingPricing() {
  return (
    <div className="bg-green-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple no-tricks pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We want homeschooling to be accessible to every family. That’s why
            we are offering a deal that seems too good to be true... but it’s
            not!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-slate-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              Monthly Membership
            </h3>
            <p className="mt-6 text-base leading-7 text-slate-600">
              Get access to all features of Learnly for a low monthly price.
              Cancel anytime. No hidden fees. No contracts. Forever.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-green-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-slate-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-slate-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-green-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-slate-50 py-10 text-center ring-1 ring-inset ring-slate-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-slate-600">
                  Try it free for 14 days, then pay monthly.
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-slate-900">
                    $5
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-slate-600">
                    USD
                  </span>
                </p>
                <Link
                  className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  href="/onboarding"
                >
                  Get access
                </Link>
                <p className="mt-6 text-xs leading-5 text-slate-600">
                  No credit card required to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
