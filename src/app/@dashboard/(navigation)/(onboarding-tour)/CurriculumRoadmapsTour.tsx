'use client';

import Modal from '@/lib/components/popouts/Modal';

export default function CurriculumRoadmapsTour() {
  // * Render
  return (
    <>
      <Modal.Header title="Let's Create a Roadmap! 🛣" />

      <Modal.Body>
        <p className="text-slate-800 dark:text-navy-100 text-lg font-medium">
          Curriculum Roadmaps will ensure you have a plan for your children and
          are on a good pace.
        </p>

        <p className="text-lg text-slate-800 dark:text-navy-100">
          This is also a great way to keep track of what you&apos;ve done and
          what you need to do... all without being overly restrictive.
        </p>

        <p className="text-slate-700 mt-4 dark:text-navy-200 font-light">
          *Every roadmap will customize the lessons for the children you select,
          so you can create a few of these if you want, or keep it simple and
          add all of your kids on one roadmap!
        </p>
      </Modal.Body>
    </>
  );
}
