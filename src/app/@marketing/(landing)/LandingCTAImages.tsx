import altHero1 from '@/assets/images/bg/alt-hero-1.jpg';
import altHero2 from '@/assets/images/bg/alt-hero-2.jpg';
import altHero3 from '@/assets/images/bg/alt-hero-3.jpg';
import altHero9 from '@/assets/images/bg/alt-hero-9.jpg';
import altHero10 from '@/assets/images/bg/alt-hero-10.jpg';
import Image from 'next/image';
import Button from '@/lib/components/ui/Button';

// * Component
export default function LandingCTAImages() {
  // * Render
  return (
    <section
      id="get-started"
      aria-labelledby="get-started-title"
      className="overflow-hidden bg-white dark:bg-navy-900 py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        {/* Text */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-xl lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-navy-50 sm:text-4xl">
              Finally. A homeschool curriculum that works for{' '}
              <span className="uppercase pb-0.5 border-b border-b-slate-700 dark:border-b-navy-200">
                you!
              </span>
            </h2>

            <p className="mt-6 text-xl leading-8 text-slate-600 dark:text-navy-100">
              As homeschool parents, we all share a common goal of providing our
              children with a high-quality and personalized education. But with
              the challenges and barriers that come with homeschooling, it can
              be easy to feel overwhelmed....
            </p>

            <p className="mt-6 text-base leading-7 text-slate-600 dark:text-navy-100">
              But with Learnly, you will you achieve your goal of providing a
              personalized education for your child, AND you will spark a
              lifelong love of learning in your children because enthusiasm
              spreads. And that&apos;s the most valuable gift we can give our
              little Einsteins.
            </p>

            {/* Link */}
            <Button
              fill="gradient"
              effect="scale"
              shadow="lg"
              url="/onboarding"
              className="mt-8 text-sm"
            >
              👉 Start My Risk-Free Trial
            </Button>
          </div>

          {/* Image Grid */}
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src={altHero1}
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-slate-50 dark:bg-navy-900 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src={altHero2}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-slate-50 dark:bg-navy-900 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src={altHero3}
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-slate-50 dark:bg-navy-900 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src={altHero9}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-slate-50 dark:bg-navy-900 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
