'use client';

import Modal from '@/lib/components/popouts/Modal';
import AssignmentCreatorForm from './AssignmentCreatorForm';
import { fetchUserLessonPlans } from './_actions';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function AssignmentCreatorModal() {
  const [userLessonPlans, setUserLessonPlans] = useState([] as any);

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
          userLessonPlans={userLessonPlans}
        />
      </Modal.Body>
    </>
  );
}
