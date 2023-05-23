import Button from '@/lib/components/ui/Button';

import altHero4 from '@/assets/images/bg/alt-hero-4.jpg';
import altHero5 from '@/assets/images/bg/alt-hero-5.jpg';
import altHero6 from '@/assets/images/bg/alt-hero-6.jpg';
import altHero7 from '@/assets/images/bg/alt-hero-7.jpg';
import altHero8 from '@/assets/images/bg/alt-hero-8.jpg';
import Image from 'next/image';

// * Component
export default function LandingHeroAlt() {
  // * Render
  return (
    <>
      <div className="relative isolate">
        {/* Background Boxes */}
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-slate-200 dark:stroke-navy-700 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)] dark:[mask-image:radial-gradient(32rem_32rem_at_center,black,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg
            x="50%"
            y={-1}
            className="overflow-visible fill-slate-50 dark:fill-slate-900"
          >
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>

        {/* Background Colors */}
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] dark:from-[#6af643] dark:to-[#3975f6] opacity-30"
            style={{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }}
          />
        </div>

        {/*  */}
        <div className="overflow-hidden">
          {/* Container */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:pb-48 pb-24 pt-4 sm:pt-12 lg:pt-8 lg:pb-24">
            {/* Content */}
            <div className="mx-auto max-w-2xl gap-x-14 xl:gap-x-16 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              {/* Text */}
              <div className="w-full max-w-xl md:max-w-2xl lg:shrink-0 lg:pt-4">
                {/* Title */}
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-navy-50 sm:text-6xl sm:leading-[1.10]">
                  Personalized
                  <span className="text-3xl sm:text-5xl">,</span> Easy
                  <span className="text-3xl sm:text-5xl">,</span> & Flexible
                  Homeschool...{' '}
                  <span className="text-green-800 dark:text-green-600">
                    Loved by Thousands
                  </span>{' '}
                  🤗
                </h1>

                {/* Description */}
                <p className="relative mt-6 text-lg leading-8 text-slate-600 dark:text-navy-200 sm:max-w-md lg:max-w-none">
                  Join 1,000s of Pre-K through 5 Families Providing
                  High-Quality, Flexible Education Using The #1 Personalized
                  Lesson & Curriculum Software!{' '}
                  <span className="hidden sm:block mt-1 text-slate-500 dark:text-navy-300">
                    *PLUS, receive an exclusive &lsquo;VIP Pass&rsquo; to the
                    Homeschool Made Easy Network and gain instant access to the
                    BEST homeschooling resources, tools, and support through our
                    premier partnerships! (
                    <span className="text-sm italics font-medium md:text-lg">
                      Special{' '}
                      <span className="">
                        {new Date().toLocaleDateString('en-US', {
                          month: 'long',
                        })}
                      </span>{' '}
                      Offer
                    </span>
                    )
                  </span>
                </p>

                {/* Action */}
                <div className="mt-8 flex flex-col max-w-sm">
                  {/* Link */}
                  <Button
                    size="xl"
                    fill="gradient"
                    effect="scale"
                    shadow="xl"
                    url="/onboarding"
                    className="px-4 text-sm uppercase sm:px-8"
                  >
                    Start My Free 14-Day Trial
                  </Button>

                  {/* Disclaimer */}
                  <p className="mt-3 ml-4 text-xs italic text-slate-700 dark:text-navy-200 md:text-sm">
                    No credit card required.{' '}
                    <span className="hidden sm:inline-block">
                      Cancel anytime.
                    </span>
                  </p>
                </div>
              </div>

              {/* Grid Images */}
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      src={altHero6}
                      alt=""
                      priority={true}
                      width={300}
                      height={300}
                      className="aspect-[2/3] w-full rounded-xl bg-slate-900/5 dark:bg-navy-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 dark:ring-navy-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      src={altHero7}
                      alt=""
                      priority={true}
                      width={300}
                      height={300}
                      className="aspect-[2/3] w-full rounded-xl bg-slate-900/5 dark:bg-navy-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 dark:ring-navy-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src={altHero8}
                      alt=""
                      priority={true}
                      width={300}
                      height={300}
                      className="aspect-[2/3] w-full rounded-xl bg-slate-900/5 dark:bg-navy-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 dark:ring-navy-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      src={altHero4}
                      alt=""
                      priority={true}
                      width={300}
                      height={300}
                      className="aspect-[2/3] w-full rounded-xl bg-slate-900/5 dark:bg-navy-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 dark:ring-navy-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src={altHero5}
                      alt=""
                      priority={true}
                      width={300}
                      height={300}
                      className="aspect-[2/3] w-full rounded-xl bg-slate-900/5 dark:bg-navy-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10 dark:ring-navy-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
