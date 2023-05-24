'use client';

import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';
import Modal from '@/lib/components/popouts/Modal';
import SaveCurriculumRoadmapModalContent from './SaveCurriculumRoadmapModalContent';

// * Props
interface IProps {
  isOpen: boolean;
  close: () => void;
  roadmaps: ICurriculumListItem[];
}

// * Modal
export default function SaveCurriculumRoadmapModal({
  isOpen,
  close,
  roadmaps,
}: IProps) {
  // * Render
  return (
    <Modal
      isVisible={isOpen}
      close={close}
      closeBtn={true}
      noCloseOnOutsideClick={true}
      size="xl"
    >
      <SaveCurriculumRoadmapModalContent roadmaps={roadmaps} close={close} />
    </Modal>
  );
}
