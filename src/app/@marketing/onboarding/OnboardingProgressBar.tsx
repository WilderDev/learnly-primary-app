'use client';

// * Interfaces
interface IProps {
  currStep: number;
  setStep: (step: number) => void;
}

// * Data
const steps = [
  { id: 1, step: 'Step 1', name: 'Profile' },
  { id: 2, step: 'Step 2', name: 'Preferences' },
  { id: 3, step: 'Step 3', name: 'Children' },
];

// * Component
export default function OnboardingProgressBar({ currStep, setStep }: IProps) {
  // * Render
  return (
    <nav
      className="bg-white py-3 px-6 my-6 rounded-2xl w-full shadow-xl"
      aria-label="Progress"
    >
      <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            {step.id < currStep ? (
              <button
                className="group w-full flex flex-col border-l-4 border-green-600 py-2 pl-4 hover:border-green-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                onClick={() => setStep(step.id)}
              >
                <span className="text-sm font-medium text-green-600 group-hover:text-green-800">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </button>
            ) : step.id === currStep ? (
              <button
                className="flex w-full flex-col border-l-4 border-green-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                aria-current="step"
              >
                <span className="text-sm font-medium text-green-600">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </button>
            ) : (
              <button className="group w-full flex flex-col border-l-4 border-slate-200 py-2 pl-4 hover:border-slate-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// TSK: Dark Mode
