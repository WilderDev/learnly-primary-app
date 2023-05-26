'use client';

import Modal from '@/lib/components/popouts/Modal';
import { useAccount } from './AccountCtx';

// * Component
export default function AccountStudentsEditModal() {
  // * Hooks / Context
  const { studentEditId, setStudentEditId } = useAccount();

  // * Render
  return (
    <Modal
      isVisible={!!studentEditId}
      close={() => setStudentEditId(null)}
      noCloseOnOutsideClick={true}
      closeBtn={true}
    >
      <Modal.Header title="Edit Student" />
    </Modal>
  );
}

// TSK: Remove child
// TSK: Change Child Name / Birthday
// TSK: Change Child Avatar
