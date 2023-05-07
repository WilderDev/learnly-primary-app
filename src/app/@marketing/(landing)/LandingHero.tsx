import Container from '@/lib/components/layout/Container';
import Section from '@/lib/components/layout/Section';
import Button from '@/lib/components/ui/Button';
import Link from 'next/link';

export default function LandingHero() {
  return (
    <Section id="hero" className="">
      {/* Main Content */}
      <Container>
        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-center">
          {/* Callout */}
          <span className="block text-xl font-semibold uppercase tracking-wide text-green-700">
            CALLING ALL HOMESCHOOL PARENTS, EDUCATORS & TEACHERS. . .
          </span>
          {/* Desire */}
          <span className="block text-5xl font-bold leading-snug text-navy-900">
            Join 1,000&apos;s of Families Providing High-Quality, Flexible
            Education Using The #1 Personalized Lesson & Curriculum Software 🤯
          </span>
        </h1>

        {/* Details */}
        <div className="mx-auto mt-4 flex max-w-2xl flex-col items-center justify-center">
          {/* Special Offer / Description */}
          <p className="text-center text-slate-700">
            <span className="block text-lg font-bold">
              Special{' '}
              <span className="underline">
                {new Date().toLocaleDateString('en-US', {
                  month: 'long',
                })}
              </span>{' '}
              Offer:
            </span>

            {/* Description */}
            <span className="block">
              Claim your 14-day FREE trial of the #1 personalized lesson &
              curriculum software for homeschooling families. PLUS, receive an
              exclusive &lsquo;VIP Pass&rsquo; to the Homeschool Made Easy
              Network and gain instant access to the BEST homeschooling
              resources, tools, and support through our premier partnerships!
            </span>
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col">
            {/* Link */}
            <Button
              size="xl"
              fill="gradient"
              effect="scale"
              url="/onboarding"
              className="rounded-full uppercase shadow-lg hocus:shadow-xl"
            >
              Start My Free 14-Day Trial
            </Button>
            {/* className="text-center font-medium active:brightness-90 hocus:shadow-xl hocus:brightness-110" */}

            {/* Disclaimer */}
            <p className="mt-4 text-center text-sm text-slate-700">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
