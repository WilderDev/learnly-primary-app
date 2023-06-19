'use client';

import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import Modal from '@/lib/components/popouts/Modal';
import Button from '@/lib/components/ui/Button';
import { Dispatch, SetStateAction, useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Select from '@/lib/components/form/Select';
import { createSelectOptions } from '@/lib/common/form.helpers';
import TextArea from '@/lib/components/form/TextArea';
import { ComputerDesktopIcon, FaceSmileIcon } from '@heroicons/react/24/solid';
import { useRequest } from '@/lib/hooks/useRequest';
import { revalidatePath } from 'next/cache';
import { toast } from 'sonner';
import { createSupportTicket } from './_actions';

export type TBrowser = 'Chrome' | 'Firefox' | 'Safari' | 'Edge' | 'Other';
export type TEmotionalState =
  | 'Excited'
  | 'Confused'
  | 'Worried'
  | 'Upset'
  | 'Panicked'
  | 'Angry';

// * Data
// Browsers
export const browserOptions: TBrowser[] = [
  'Chrome',
  'Firefox',
  'Safari',
  'Edge',
  'Other',
];

// Emotional States
export const emotionalStateOptions: TEmotionalState[] = [
  'Excited',
  'Confused',
  'Worried',
  'Upset',
  'Panicked',
  'Angry',
];

// * Component
export default function HelpCenterSupportTicket() {
  // * State
  const [isOpen, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [browser, setBrowser] = useState<TBrowser | null>(null);
  const [problem, setProblem] = useState('');
  const [emotionalState, setEmotionalState] = useState<TEmotionalState | null>(
    null,
  );

  // * Mutations / Queries
  const { mutate: createTicketMutation, isLoading } = useRequest(
    createSupportTicket,
    {
      onSuccess: (data) => {
        if (data.ok) {
          toast.success(
            'Support ticket created successfully! We will get back to you as soon as possible.',
          );
          setOpen(false);
          revalidatePath('/help-center');
        }
      },
    },
  );

  // * Render
  return (
    <>
      {/* Open Modal Button */}
      <Button onClick={() => setOpen(true)}>Create Support Ticket</Button>

      {/* Modal */}
      <Modal
        className="overflow-y-visible"
        isVisible={isOpen}
        close={() => setOpen(false)}
        size="sm"
      >
        <Modal.Header title="Create Support Ticket" />

        <Modal.Body>
          <p className="mb-4">
            Please fill out the form below to create a support ticket. We will
            get back to you as soon as possible.
          </p>

          <Form
            action={() =>
              createTicketMutation({
                email,
                browser: browser!,
                problem,
                emotionalState: emotionalState!,
              })
            }
          >
            {/* Email */}
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email address"
              value={email}
              setValue={setEmail}
              cols={4}
              required={true}
              icon={EnvelopeIcon}
            />

            {/* Browser */}
            <Select
              label="Browser"
              value={browser}
              setValue={setBrowser as Dispatch<SetStateAction<string>>}
              options={createSelectOptions(browserOptions)}
              cols={4}
              icon={ComputerDesktopIcon}
            />

            {/* Problem */}
            <TextArea
              label="What Problem Are You Having?"
              placeholder="Describe the problem you are having"
              value={problem}
              setValue={setProblem}
              cols={4}
              required={true}
            />

            {/* Emotional State */}
            <Select
              label="How Are You Feeling?"
              value={emotionalState}
              setValue={setEmotionalState as Dispatch<SetStateAction<string>>}
              options={createSelectOptions(emotionalStateOptions)}
              cols={4}
              icon={FaceSmileIcon}
            />

            {/* Submit */}
            <Button
              className="col-span-4"
              type="submit"
              loading={isLoading}
              disabled={
                isLoading || !email || !browser || !problem || !emotionalState
              }
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

// Create a user support button/form that asks for their
// email address, browser, problem, and emotional state (excited, confused, worried, upset, panicked, angry)
