import { ITestimonial } from '@/assets/typescript/misc';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface IProps {
  testimonials: ITestimonial[];
}

export default function LandingMarqueeTestimonials({ testimonials }: IProps) {
  return (
    <div className="relative select-none py-12 md:py-16">
      <div className="space-x-16 sm:space-x-16 md:space-x-16 flex overflow-hidden">
        <MarqueeTestimonialItems testimonials={testimonials} />
        <MarqueeTestimonialItems testimonials={testimonials} />
      </div>

      {/* Side Fade Overlays */}
      <div className="hidden sm:block absolute inset-y-0 left-0 w-16 pointer-events-none bg-gradient-to-r from-white dark:from-navy-900" />
      <div className="hidden sm:block absolute inset-y-0 right-0 w-16 pointer-events-none bg-gradient-to-l from-white dark:from-navy-900" />
    </div>
  );
}

function MarqueeTestimonialItems({ testimonials }: IProps) {
  return (
    <ul className="flex-shrink-0 flex space-around min-w-full gap-4 motion-safe:animate-scroll space-x-16 sm:space-x-16 md:space-x-16 transform-gpu">
      {testimonials.map((t) => (
        <MarqueeTestimonialItem testimonial={t} key={t.id} />
      ))}
    </ul>
  );
}

function MarqueeTestimonialItem({
  testimonial,
}: {
  testimonial: ITestimonial;
}) {
  // * Data
  const { quote, name, role, image } = testimonial;

  // * Render
  return (
    <figure className="max-w-lg opacity-0 animate-fadeIn" key={testimonial.id}>
      {/* Stars */}
      <p className="sr-only">5 out of 5 stars</p>
      <div className="flex gap-x-1 text-green-600 dark:text-green-500">
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
      </div>

      {/* Quote */}
      <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight dark:text-navy-50 text-slate-900 sm:text-2xl sm:leading-9">
        <p>{quote}</p>
      </blockquote>

      {/* Info */}
      {/* <figcaption className="mt-10 flex items-center gap-x-6">
        <Image
          className="h-12 w-12 rounded-full bg-slate-50 dark:bg-navy-800"
          src={image}
          alt={name}
          width={48}
          height={48}
        />
        <div className="text-sm leading-6">
          <div className="font-semibold text-slate-900 dark:text-navy-100">
            {name}
          </div>
          <div className="mt-0.5 text-slate-600 dark:text-navy-200">{role}</div>
        </div>
      </figcaption> */}
    </figure>
  );
}
