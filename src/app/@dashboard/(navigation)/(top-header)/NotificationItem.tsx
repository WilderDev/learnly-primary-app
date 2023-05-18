'use client';

import { INotification } from '@/assets/typescript/notification';
import { TNotificationType } from '../../../../assets/typescript/notification';
import {
  BellAlertIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  ChatBubbleBottomCenterIcon,
  CheckCircleIcon,
  CreditCardIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  MegaphoneIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { TIcon } from '@/assets/typescript/ui';
import Modal from '@/lib/components/popouts/Modal';
import { useState } from 'react';
import Button from '@/lib/components/ui/Button';
import cn from '@/lib/common/cn';

// * Props
interface IProps {
  notification: INotification;
}

// * Data
const notificationIcons: {
  [key in TNotificationType]: TIcon;
} = {
  ACCOUNT: UserIcon,
  BILLING: CreditCardIcon,
  CHAT: ChatBubbleBottomCenterIcon,
  COMMUNITY: MegaphoneIcon,
  LESSON: BookOpenIcon,
  EVENT: CalendarDaysIcon,
  INFO: InformationCircleIcon,
  SUCCESS: CheckCircleIcon,
  WARNING: ExclamationTriangleIcon,
  ERROR: ExclamationCircleIcon,
  OTHER: BellAlertIcon,
};

// * Component
export default function NotificationItem({ notification }: IProps) {
  // * State
  const [isModalOpen, setModalOpen] = useState(false);

  // * Render
  return (
    <>
      {/* Menu Notification Item */}
      <button
        className={cn(
          'relative block w-full p-4 text-sm z-20',
          // TSK
        )}
        type="button"
        onClick={() => setModalOpen(true)}
      >
        {notification.title}
        TSK
      </button>

      {/* Modal Notification Item */}
      <Modal
        isVisible={isModalOpen}
        close={() => setModalOpen(false)}
        closeBtn={true}
      >
        <Modal.Header title={notification.title} />

        <Modal.Body>TSK</Modal.Body>
      </Modal>
    </>
  );
}
