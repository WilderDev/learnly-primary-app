import Container from '@/lib/components/layout/Container';
import Section from '@/lib/components/layout/Section';
import Button from '@/lib/components/ui/Button';

export default function LandingHero() {
  return (
    <Section id="hero" className="">
      {/* Main Content */}
      <Container>
        {/* Headline */}
        <h1 className="mx-auto max-w-xl text-center md:max-w-4xl">
          {/* Callout */}
          <span className="block text-sm font-semibold uppercase tracking-wide text-green-700 md:text-lg lg:text-xl">
            CALLING ALL HOMESCHOOL PARENTS, EDUCATORS & TEACHERS. . .
          </span>
          {/* Desire */}
          <span className="snug block text-2xl font-bold text-navy-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Join 1,000s of Families Providing High-Quality, Flexible Education
            Using The #1 Personalized Lesson & Curriculum Software 🤯
          </span>
        </h1>

        {/* Details */}
        <div className="mx-auto mt-4 flex max-w-md flex-col items-center justify-center md:max-w-2xl">
          {/* Special Offer / Description */}
          <p className="text-center text-slate-700">
            <span className="block text-sm font-bold md:text-lg">
              Special{' '}
              <span className="underline">
                {new Date().toLocaleDateString('en-US', {
                  month: 'long',
                })}
              </span>{' '}
              Offer:
            </span>

            {/* Description */}
            <span className="block text-xs md:text-base">
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
              shadow="xl"
              rounded="full"
              url="/onboarding"
              className="px-4 text-sm uppercase sm:px-8"
            >
              Start My Free 14-Day Trial
            </Button>

            {/* Disclaimer */}
            <p className="mt-3 text-center text-xs italic text-slate-700 md:text-sm">
              No credit card required.{' '}
              <span className="hidden sm:inline-block">Cancel anytime.</span>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
