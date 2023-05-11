import OnboardingStepHeader from './OnboardingStepHeader';
import Button from '@/lib/components/ui/Button';
import { useState } from 'react';
import { IOnboardingChild } from '@/assets/typescript/onboarding';
import { PlusIcon } from '@heroicons/react/24/solid';
import { MinusCircleIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { toast } from 'sonner';
import AddOrEditChildForm from './AddOrEditChildForm';
import { useOnboarding } from './OnboardingCtx';

// * Component
export default function OnboardingChildren() {
  // * Hooks
  // Next Step
  const { next, children, setChildren, loading } = useOnboarding();

  // * State
  const [childFormOpen, setChildFormOpen] = useState(false);
  const [showMoreChildren, setShowMoreChildren] = useState(false);
  const [editingChild, setEditingChild] = useState<IOnboardingChild | null>(
    null,
  );

  // * Handlers
  // Add Child
  const handleAddChild = ({ name, birthday, avatarUrl }: IOnboardingChild) => {
    if (!name || !birthday) return toast.error('Please fill out all fields.');
    const randomId = Math.random().toString(36).substr(2, 9); // Create Random Id

    // Create new array with new child
    const newChildren = [
      ...children,
      { id: randomId, name, birthday, avatarUrl },
    ];

    setChildren(newChildren); // Set children
    setChildFormOpen(false); // close form
  };

  // Update Child
  const handleUpdateChild = (child: IOnboardingChild) => {
    if (!child.name || !child.birthday)
      return toast.error('Please fill out all fields.');

    // Create new array with new child
    const newChildren = children.map((c) => (c.id === child.id ? child : c)); // Update child

    setEditingChild(null); // Reset editing child
    setChildren(newChildren); // Set children
    setChildFormOpen(false); // close form
  };

  // * Render
  return (
    <>
      {/* Children Header */}
      <OnboardingStepHeader
        title="Add Your Little Ones 🧒👧"
        subTitle={
          children.length < 1
            ? 'This will help us create a personalize education.'
            : ''
        }
        p1={
          children.length < 1
            ? 'We will NEVER share or sell your information.'
            : ''
        }
        p2={
          children.length < 1
            ? 'This is purely to create a better Learnly experience. 🛡️'
            : ''
        }
      />

      {/* Children Section / Form */}
      <section>
        {/* Saved Children */}
        {children.length > 0 && !childFormOpen && (
          <section className="my-6 md:my-8">
            {children
              ?.slice(0, showMoreChildren ? undefined : 5)
              ?.map((child) => (
                <div
                  className="mx-auto mt-4 flex max-w-md items-center justify-between"
                  key={child.name}
                >
                  <div className="flex items-center">
                    {/* Avatar */}
                    <div className="h-10 w-10 flex-shrink-0">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={child.avatarUrl}
                        alt={child.name}
                        width={40}
                        height={40}
                      />
                    </div>
                    {/* Name */}
                    <div className="ml-4 flex flex-col">
                      <div className="text-sm font-medium text-slate-900 dark:text-navy-100">
                        {child.name}
                      </div>
                      {/* Birthday */}
                      <div className="text-sm text-slate-400 dark:text-navy-300">
                        {child.birthday.toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    {/* Edit */}
                    <button
                      className="group flex h-8 w-8 items-center justify-center rounded-full"
                      type="button"
                      onClick={() => {
                        setEditingChild(null);
                        setEditingChild(child);
                        setChildFormOpen(true);
                      }}
                    >
                      <span className="sr-only">Edit Child</span>
                      <PencilSquareIcon className="h-5 w-5 text-blue-300 group-hover:text-blue-500 group-focus:text-blue-500 dark:text-navy-300 dark:group-hover:text-blue-600 dark:group-focus:text-blue-600" />
                    </button>

                    {/* Remove */}
                    <button
                      className="group flex h-8 w-8 items-center justify-center rounded-full"
                      type="button"
                      onClick={() => {
                        const newChildren = children.filter(
                          (c) => c.id !== child.id,
                        );

                        setChildren(newChildren);
                      }}
                    >
                      <span className="sr-only">Remove Child</span>
                      <MinusCircleIcon className="h-5 w-5 text-red-300 group-hover:text-red-500 group-focus:text-red-500 dark:text-navy-300 dark:group-hover:text-red-500 dark:group-focus:text-red-500" />
                    </button>
                  </div>
                </div>
              ))}

            {/* More Children Button */}
            {children.length > 5 && (
              <button
                className="mx-auto mt-4 flex items-center justify-center text-sm text-slate-500 dark:text-navy-200"
                type="button"
                onClick={() => setShowMoreChildren(!showMoreChildren)}
                tabIndex={0}
              >
                {showMoreChildren ? (
                  <span>show less</span>
                ) : (
                  <span>show all</span>
                )}
              </button>
            )}
          </section>
        )}

        {/* Add Child Btn */}
        {!childFormOpen && (
          <div className="mx-auto w-full flex flex-col items-center justify-center group">
            {/* Button */}
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-navy-900 group-hover:bg-slate-200 dark:group-hover:bg-green-800 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              type="button"
              onClick={() => setChildFormOpen(true)}
              tabIndex={0}
            >
              <span className="sr-only">Add Child</span>
              <PlusIcon className="h-6 w-6 text-slate-500 dark:text-navy-200" />
            </button>

            {/* Text */}
            <p className="mt-2 text-sm text-slate-500 dark:text-navy-200">
              Add a child
            </p>
          </div>
        )}

        {/* Child Create/Edit Form */}
        {childFormOpen && (
          <AddOrEditChildForm
            editChild={editingChild}
            addChild={handleAddChild}
            updateChild={handleUpdateChild}
            close={() => setChildFormOpen(false)}
          />
        )}

        {/* Submit to Next Step */}
        {!childFormOpen && (
          <Button
            className="w-full mt-6 md:mt-8"
            type="button"
            disabled={!children || !children.length || loading}
            onClick={() => {
              if (!children || !children.length)
                return toast.error('Please add at least one child.');

              next();
            }}
            loading={loading}
          >
            The whole fam is here <span className="ml-2">❤️</span>
          </Button>
        )}
      </section>
    </>
  );
}
