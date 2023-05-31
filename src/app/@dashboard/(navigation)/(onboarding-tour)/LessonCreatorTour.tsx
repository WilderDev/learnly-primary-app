'use client';

import Modal from '@/lib/components/popouts/Modal';
import { CheckIcon } from '@heroicons/react/24/solid';

// * Data
const steps = [
  {
    id: 1,
    title: 'Fill out the form',
    description: `Start simple for you're first lesson plan. Don't worry
              about understanding all the options. You can always come back and
              edit your lesson plan.`,
  },
  {
    id: 2,
    title: 'Click "Generate" to Create Your First Lesson Plan',
    description: `This will generate your lesson plan and show you the results.
              It's that easy!`,
  },
  {
    id: 3,
    title: 'Save it to your account',
    description: 'So you can view it later, schedule, or even print it.',
  },
];

export default function LessonCreatorTour() {
  // * Render
  return (
    <>
      <Modal.Header
        title="You're going to love this!"
        image="/static/icons/brand/favicon_512x512.png"
      />

      <Modal.Body>
        {/* Directions */}
        <div className="mt-6 flex flex-col justify-center space-y-8">
          {steps.map((step) => (
            <div className="flex w-full items-center" key={step.id}>
              <div className="flex flex-shrink-0">
                <CheckIcon className="h-5 w-5 text-green-500 md:h-7 md:w-7" />
              </div>
              <div className="ml-4">
                <div className="font-medium text-slate-900 dark:text-navy-100 md:text-lg">
                  {step.title}
                </div>
                <div className="text-slate-500 dark:text-navy-200">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal.Body>
    </>
  );
}
