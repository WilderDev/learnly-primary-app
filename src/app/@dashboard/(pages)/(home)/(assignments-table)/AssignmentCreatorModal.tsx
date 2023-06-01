'use client';

import Modal from '@/lib/components/popouts/Modal';
import AssignmentCreatorForm from '../../lesson-plans/[id]/(assignments)/AssignmentCreatorForm';
import { fetchUserLessonPlans } from '../../lesson-plans/[id]/(assignments)/_actions';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function AssignmentCreatorModal() {
  const [userLessonPlans, setUserLessonPlans] = useState([] as any);
  const [assignmentContent, setAssignmentContent] = useState('');

  useEffect(() => {
    fetchUserLessonPlans()
      .then((userLessonPlans) => {
        setUserLessonPlans(userLessonPlans);
      })
      .catch((error) => {
        toast.error('Failed to get your lesson plans!');
      });
  }, []);

  return (
    <>
      <Modal.Header title="Create an Assignment" />
      <Modal.Body>
        <AssignmentCreatorForm
          isModal={true}
          setUserLessonPlans={setUserLessonPlans}
          userLessonPlans={userLessonPlans}
          assignmentContent={assignmentContent}
          setAssignmentContent={setAssignmentContent}
        />
      </Modal.Body>
    </>
  );
}
