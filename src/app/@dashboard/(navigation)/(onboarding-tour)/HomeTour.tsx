'use client';

import Modal from '@/lib/components/popouts/Modal';

export default function HomeTour() {
  // * Render
  return (
    <>
      <Modal.Header title="Welcome to the Dashboard! 🤗" />

      <Modal.Body>
        <p className="text-xl font-medium text-slate-800 dark:text-navy-100">
          We&apos;re so excited to have you here! ❤️
        </p>

        <p className="text-lg text-slate-800 dark:text-navy-100">
          This is where you&apos;ll be able to manage your account, view your
          schedule, and see your upcoming and completed lessons.
        </p>

        <p className="text-slate-700 mt-4 dark:text-navy-200 font-light">
          *After you&apos;ve had a chance to look around, click the big
          &quot;Create New Lesson&quot; button to create your first lesson!
        </p>
      </Modal.Body>
    </>
  );
}
