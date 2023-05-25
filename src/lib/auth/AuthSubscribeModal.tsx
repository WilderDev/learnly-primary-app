'use client';

import { useEffect, useState } from 'react';
import Modal from '../components/popouts/Modal';
import Button from '../components/ui/Button';
import { formatDateString } from '../common/date.helpers';

// * Props
interface IProps {
  initialOpen: boolean;
  endDate: string;
  billingUrl: string;
}

// * Component
export default function AuthSubscribeModal({
  initialOpen,
  endDate,
  billingUrl,
}: IProps) {
  // * State
  const [isOpen, setIsOpen] = useState(initialOpen);

  // * Effects
  // Only show once an hour
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000 * 60 * 60);

    return () => clearTimeout(timer);
  }, []);

  // * Render
  return (
    <Modal isVisible={isOpen} close={() => setIsOpen(false)}>
      <Modal.Header title="Your trial is ending soon" />
      <Modal.Body>
        <p>
          Your trial will end on{' '}
          <span className="font-bold">
            {formatDateString(endDate, {
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <br />
          <span className="text-sm text-gray-500">
            You can upgrade to a paid plan at any time.
          </span>
        </p>

        <Button url={billingUrl}>Subscribe Now</Button>
      </Modal.Body>
    </Modal>
  );
}
