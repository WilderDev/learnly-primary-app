'use client';

import Modal from '@/lib/components/popouts/Modal';
import { useAccount } from './AccountCtx';

// * Component
export default function AccountStudentsDetailsModal() {
  // * Hooks / Context
  const { studentDetailsId, setStudentDetailsId } = useAccount();

  // * Render
  return (
    <Modal
      isVisible={!!studentDetailsId}
      close={() => setStudentDetailsId(null)}
      noCloseOnOutsideClick={true}
      closeBtn={true}
    >
      <Modal.Header title="Details Student" />
    </Modal>
  );
}
