'use client';

import Box from '@/lib/components/containers/Box';
import { useOnboarding } from './OnboardingCtx';

// * Component
export default function OnboardingProgressBar() {
  // * Context
  const { steps, step, setStep } = useOnboarding();

  // * Render
  return (
    <Box
      className="hidden sm:block"
      size="lg"
      shadow="xl"
      rounded="xl"
      aria-label="Progress"
      as="nav"
      aria-labelledby="progress"
    >
      <ol role="list" className="space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
        {steps.map((item) => (
          <li key={item.name} className="sm:flex-1">
            {item.step < step ? (
              <button
                className="group w-full flex flex-col border-l-4 border-green-600 dark:border-green-500 py-2 pl-4 dark:hover:border-green-700 hover:border-green-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                onClick={() => setStep(item.step)}
              >
                <span className="text-sm font-medium dark:text-green-500 dark:group-hover:text-green-600 text-green-600 group-hover:text-green-800">
                  {item.step}
                </span>
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            ) : item.step === step ? (
              <button
                className="flex w-full flex-col border-l-4 border-green-600 dark:border-green-500 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                aria-current="step"
              >
                <span className="text-sm font-medium text-green-600">
                  {item.step}
                </span>
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            ) : (
              <button className="group w-full flex flex-col border-l-4 border-slate-200 dark:border-navy-600 dark:hover:border-navy-700 py-2 pl-4 hover:border-slate-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium dark:text-navy-100 dark:group-hover:text-navy-200 text-slate-500 group-hover:text-slate-700">
                  {item.step}
                </span>
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            )}
          </li>
        ))}
      </ol>
    </Box>
  );
}
