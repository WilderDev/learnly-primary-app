import { ITestimonial } from '@/assets/typescript/misc';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface IProps {
  testimonials: ITestimonial[];
}

export default function MarqueeTestimonials({ testimonials }: IProps) {
  return (
    <div className="relative flex overflow-hidden select-none bg-white py-12 md:py-16 space-x-16 sm:space-x-16 md:space-x-16">
      <MarqueeTestimonialItems testimonials={testimonials} />
      <MarqueeTestimonialItems testimonials={testimonials} />
    </div>
  );
}

function MarqueeTestimonialItems({ testimonials }: IProps) {
  return (
    <ul className="flex-shrink-0 flex space-around min-w-full gap-4 motion-safe:animate-scroll space-x-16 sm:space-x-16 md:space-x-16">
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
      <div className="flex gap-x-1 text-green-600">
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
      </div>

      {/* Quote */}
      <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-slate-900 sm:text-2xl sm:leading-9">
        <p>{quote}</p>
      </blockquote>

      {/* Info */}
      <figcaption className="mt-10 flex items-center gap-x-6">
        <Image
          className="h-12 w-12 rounded-full bg-slate-50"
          src={image}
          alt={name}
          width={48}
          height={48}
        />
        <div className="text-sm leading-6">
          <div className="font-semibold text-slate-900">{name}</div>
          <div className="mt-0.5 text-slate-600">{role}</div>
        </div>
      </figcaption>
    </figure>
  );
}
