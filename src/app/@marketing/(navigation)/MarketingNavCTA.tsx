'use client';

import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
// * Imports
import Modal from '@/lib/components/popouts/Modal';
import Button from '@/lib/components/ui/Button';
import { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/outline';

// * Component
export default function MarketingNavCTA() {
  // * State
  const [isOpen, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  // * Render
  return (
    <>
      {/* Buttons */}
      <div className="flex items-center space-x-6">
        {/* Sign In Button */}
        <Button
          size="sm"
          fill="none"
          effect="scale"
          shadow="none"
          className="text-slate-500 hover:text-slate-600 dark:text-navy-300 dark:hover:text-navy-200"
          onClick={() => setOpen(true)}
        >
          Sign In
        </Button>

        {/* CTA Free Trial */}
        <Button
          size="md"
          fill="gradient"
          effect="scale"
          shadow="md"
          rounded="lg"
          url="/onboarding"
        >
          <span className="mr-2">👉</span> Start My Free Trial
        </Button>
      </div>

      {/* Sign In Modal */}
      <Modal
        size="xs"
        isVisible={isOpen}
        close={() => setOpen(false)}
        rounded="lg"
        shadow="lg"
      >
        <Modal.Header
          title="Sign In"
          image="/static/icons/brand/favicon_512x512.png"
        />

        <Form onSubmit={() => console.log('submitted')}>
          {/* Email */}
          <Input
            cols={3}
            label="Email"
            type="email"
            placeholder="homeschoolmom@gmail.com"
            value={email}
            setValue={setEmail}
            icon={UserIcon}
            initialFocus={true}
            tabIndex={0}
          />
        </Form>

        <Modal.Footer>
          <Button
            size="md"
            fill="gradient"
            shadow="md"
            rounded="lg"
            onClick={() => {
              console.log('submitted');
              setOpen(false);
            }}
            className="w-full"
          >
            Time to Homeschool <span className="ml-2">😊</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
