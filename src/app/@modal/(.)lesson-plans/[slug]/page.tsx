'use client';

import Modal from '@/lib/components/popouts/Modal';

export default function LessonPlanPageModal() {
  return (
    <Modal
      isVisible={false}
      close={() => console.log('close')}
      portalName="interception-portal"
    >
      <h1>Lesson Plan Page Modal</h1>
    </Modal>
  );
}
