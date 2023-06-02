'use client';

import Modal from '@/lib/components/popouts/Modal';
import AssignmentCreatorForm from '../../lesson-plans/[id]/(assignments)/AssignmentCreatorForm';

// * Props
interface IProps {
  lessonPlans: any[]; // TSK
}

// * Component
export default function AssignmentCreatorModal({ lessonPlans }: IProps) {
  return (
    <>
      <Modal.Header title="Create an Assignment" />
      <Modal.Body>
        <AssignmentCreatorForm isModal={true} lessonPlans={lessonPlans} />
      </Modal.Body>
    </>
  );
}
