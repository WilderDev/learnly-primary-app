import { useState } from 'react';
import Image from 'next/image';
import {
  BookmarkSquareIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import Modal from '@/lib/components/popouts/Modal';
import { IStudentPromptReq } from '@/assets/typescript/lesson-plan';

interface IProps {
  defaultChildren: IStudentPromptReq['children'];
  isVisible: boolean;
  close: () => void;
}

export default function LessonPlanSaveDetailsModalForm({
  defaultChildren,
  isVisible,
  close,
}: IProps) {
  // * Contexts
  //   const { children } = useUser();

  // * State

  // * Render
  return (
    <Modal isVisible={isVisible} close={close} portalName="alt-portal">
      <Modal.Header title="Save Lesson Plan" />

      <Modal.Body>TSK</Modal.Body>
    </Modal>
  );
}
