import Image from 'next/image';
import dashboardImage from '@/assets/images/brand/dashboard.png';
import {
  AcademicCapIcon,
  BeakerIcon,
  BoltIcon,
  BookmarkSquareIcon,
  ShieldCheckIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import LandingSectionHeader from './LandingSectionHeader';

// * Data
const benefits = [
  {
    name: 'Personalized Learning Experience & Lessons',
    description:
      'Provide a flexible & high-quality education tailored to your child’s unique needs and goals, all in just 30 seconds, anytime, anywhere.',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Simple & Streamlined Homeschool Process',
    description:
      'Foster a love of learning by nurturing your childrens intellectual curiousity and creativity in the easiest way imaginable.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Safe & Wholistic Learning Environment',
    description:
      'Take a breath of relief knowing that your children are learning in a safe, supportive environment that encourages them to be their best selves.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Research-Backed & Scienctifically Crafted Curriculums',
    description:
      'Feel confident knowing that your children are learning from the best curriculums available, without the hassle of researching and planning.',
    icon: BeakerIcon,
  },
  {
    name: 'Instant Access to Expert Guidance & Support',
    description:
      'Get real-time feedback and support on all of your homeschooling questions from our team of experts.',
    icon: BoltIcon,
  },
  {
    name: 'Supportive Community of Like-Minded Parents',
    description:
      'Join a community of like-minded parents who are on the same journey as you, and share your experiences, tips, and tricks.',
    icon: StarIcon,
  },
];

export default function LandingBenefits() {
  // * Render
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-24 sm:py-32 bg-white dark:bg-navy-800"
    >
      <LandingSectionHeader
        title="Empower Your Inner Teacher"
        subtitle="Everything you need to"
        description="Feel confident in your ability to teach your children by having all the tools you need to create personalized lesson plans and curriculums, all in one place."
      />

      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src={dashboardImage}
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-slate-900/10 dark:ring-navy-50/10"
            width={1918}
            height={1002}
          />

          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white dark:from-navy-800 pt-[7%]" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-slate-600 dark:text-navy-200 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {benefits.map((benefit) => (
            <div key={benefit.name} className="relative pl-9">
              <dt className="inline font-semibold text-slate-900 dark:text-navy-50">
                <benefit.icon
                  className="absolute left-1 top-1 h-5 w-5 text-green-600 dark:text-green-500"
                  aria-hidden="true"
                />
                {benefit.name}
              </dt>{' '}
              <dd className="inline">{benefit.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
