'use client';

import { INotification } from '@/assets/typescript/notification';
import { TNotificationType } from '@/assets/typescript/notification';
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
import { useState, useTransition } from 'react';
import cn from '@/lib/common/cn';
import { useRequest } from '@/lib/hooks/useRequest';
import { markAsRead } from './_actions';
import { getNotificationColor } from '@/lib/theme/enumColors';
import { getDatestringFromTimestamp } from '@/lib/common/date.helpers';

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
  // * Data
  const {
    id,
    title,
    body,
    type,
    status,
    from,
    read_at,
    sent_at,
    action_text,
    action_url,
  } = notification;
  const Icon = notificationIcons[type];

  // * State
  const [isModalOpen, setModalOpen] = useState(false);

  // * Requests / Mutations
  const { mutate } = useRequest(markAsRead);
  let [isPending, startTransition] = useTransition();

  // * Render
  return (
    <>
      {/* Menu Notification Item */}
      <button
        className={cn(
          'relative block w-full p-4 text-sm z-20',
          read_at
            ? 'bg-slate-200 text-slate-600 dark:bg-navy-700/90 dark:text-navy-400'
            : 'bg-white text-slate-700 hocus:bg-slate-100 dark:bg-navy-400 dark:text-navy-100 dark:hocus:bg-navy-300/90',
        )}
        type="button"
        onClick={() => {
          setModalOpen(true);
          startTransition(() => mutate({ notification_id: id }));
        }}
        disabled={isPending}
      >
        <div className="flex space-x-3">
          {/* Icon */}
          <div className="flex-shrink-0">
            <Icon
              className={cn('w-5 h-5', getNotificationColor(type).TEXT.DEFAULT)}
            />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1 text-left">
            {/* Title */}
            <p
              className={cn(
                'text-sm font-medium text-slate-900 dark:text-navy-100',
                read_at && 'font-normal text-slate-600 dark:text-navy-200',
              )}
            >
              {notification.title}
            </p>

            {/* Message (truncated) */}
            <p
              className={cn(
                'truncate text-sm text-slate-500 dark:text-navy-100/90',
                read_at && 'font-normal text-slate-400 dark:text-navy-300',
              )}
            >
              {body}{' '}
            </p>

            {action_url && (
              <a
                href={action_url}
                className="text-green-600 block dark:text-green-500 hocus:underline transition-all duration-200 ease-in-out"
              >
                {action_text}
              </a>
            )}
          </div>
        </div>
      </button>

      {/* Modal Notification Item */}
      <Modal
        isVisible={isModalOpen}
        close={() => setModalOpen(false)}
        closeBtn={true}
      >
        <Modal.Header title={title} />

        <Modal.Body>
          <div className="flex flex-col space-y-4">
            {/* Message */}
            <p className="text-slate-600 dark:text-navy-200">{body}</p>

            {action_url && (
              <a
                href={action_url}
                className="text-green-600 font-semibold text-lg block dark:text-green-500 hocus:underline transition-all duration-200 ease-in-out"
              >
                {action_text}
              </a>
            )}

            {/* Divider */}
            <div className="border-b border-slate-200 dark:border-navy-700/90" />

            {/* From */}
            <p className="text-slate-500 dark:text-navy-200">
              From:{' '}
              <span className="text-slate-600 dark:text-navy-100/90">
                {from?.name}
              </span>
            </p>

            {/* Sent At */}
            <p className="text-slate-500 dark:text-navy-200">
              Sent At:{' '}
              <span className="text-slate-600 dark:text-navy-100/90">
                {getDatestringFromTimestamp(sent_at!, true, true, true)}
              </span>
            </p>

            {/* Status */}
            <p className="text-slate-500 dark:text-navy-200">
              Status:{' '}
              <span className="text-slate-600 dark:text-navy-100/90">
                {status}
              </span>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
