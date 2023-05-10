'use client';

import Button from '@/lib/components/ui/Button';

interface IProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: IProps) {
  return (
    <html lang="en">
      <body>
        <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
          {/* Content */}
          <div className="mx-auto max-w-2xl text-center">
            {/* Heading */}
            <h2>
              <span className="mb-2 block text-base font-semibold leading-7 text-green-600">
                {error.name}
              </span>
              <span className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                Woops! Something went wrong!
              </span>
            </h2>

            {/* Message */}
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {error.message}
            </p>

            {/* Reset Button */}
            <div className="mt-8">
              <Button type="button" onClick={reset}>
                Reset
              </Button>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
