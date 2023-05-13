'use client';

import Modal from '@/lib/components/popouts/Modal';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useInterceptionModal } from '../../InterceptionModalCtx';

// * Props
interface IProps {
  params: {
    slug: string;
  };
}

// * Component
export default function LessonPlanPageModal({ params: { slug } }: IProps) {
  // * Hooks
  const router = useRouter();

  // * Context
  const { isOpen, close } = useInterceptionModal();

  console.log('slug:', slug);
  console.log('isOpen:', isOpen);

  return (
    <Modal isVisible={isOpen} close={close} portalName="interception-portal">
      <h1>Lesson Plan Page Modal</h1>

      <button onClick={() => router.refresh()}>Maximize</button>
    </Modal>
  );
}
