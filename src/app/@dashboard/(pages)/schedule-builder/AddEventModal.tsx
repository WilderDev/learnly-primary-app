'use client';

import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import TextArea from '@/lib/components/form/TextArea';
import Modal from '@/lib/components/popouts/Modal';
import { useUser } from '@/lib/components/providers/UserProvider';
import { IdentificationIcon, PencilIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

// * Props
interface IProps {
  isOpen: boolean;
  close: () => void;
}

// * Component
export default function AddEventModal({ isOpen, close }: IProps) {
  // * Context / Hooks
  const { students } = useUser();

  // * State
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // * TSK

  // * Handlers

  // * Render
  return (
    <Modal
      isVisible={isOpen}
      close={close}
      closeBtn={true}
      noCloseOnOutsideClick={true}
    >
      <Modal.Header title="Add Event" />

      <Modal.Body>
        <Form>
          {/* Name */}
          <Input
            value={name}
            setValue={setName}
            label="Name"
            placeholder="Event Name"
            required={true}
            cols={2}
            icon={IdentificationIcon}
          />

          {/* Description */}
          <TextArea
            value={description}
            setValue={setDescription}
            label="Description"
            placeholder="Event Description"
            cols={2}
            icon={PencilIcon}
          />

          {/* TSK . . . */}
        </Form>
      </Modal.Body>
    </Modal>
  );
}
