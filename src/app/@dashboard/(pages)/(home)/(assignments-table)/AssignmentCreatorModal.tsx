'use client';

import Modal from '@/lib/components/popouts/Modal';
import AssignmentCreatorForm from '../../lesson-plans/[id]/(assignments)/AssignmentCreatorForm';

// * Props
interface IProps {
  lessonPlans: {
    user_lesson_plan_id: string;
    lesson_plan_name: string;
    lesson_plan_content: string;
    lesson_plan_level_name: string;
  }[];
}

// * Component
export default function AssignmentCreatorModal({ lessonPlans }: IProps) {
  console.log('lessonPlans:', lessonPlans);
  return (
    <>
      <Modal.Header title="Create an Assignment" />
      <Modal.Body>
        <AssignmentCreatorForm isModal={true} lessonPlans={lessonPlans} />
      </Modal.Body>
    </>
  );
}
