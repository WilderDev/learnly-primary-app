'use client';

import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import TextArea from '@/lib/components/form/TextArea';
import Modal from '@/lib/components/popouts/Modal';
import { useUser } from '@/lib/components/providers/UserProvider';
import { useRequest } from '@/lib/hooks/useRequest';
import {
  CalendarIcon,
  CheckIcon,
  IdentificationIcon,
  PencilIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'sonner';
import { addEvent } from './_actions';
import { Database } from '@/assets/typescript/db';
import Button from '@/lib/components/ui/Button';
import DatePicker from '@/lib/components/form/DatePicker';
import Select from '@/lib/components/form/Select';
import Image from 'next/image';
import cn from '@/lib/common/cn';
import { useSchedule } from './ScheduleCtx';

// * Props
interface IProps {
  isOpen: boolean;
  close: () => void;
}

// * Component
export default function AddEventModal({ isOpen, close }: IProps) {
  // * Context / Hooks
  const { students } = useUser();
  const { setDate } = useSchedule();

  // * State
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<Database['public']['Enums']['event']>();
  const [datetime, setDatetime] = useState<Date | null>(null);
  const [lengthInMin, setLengthInMin] = useState(60);
  const [location, setLocation] = useState('');
  const [url, setUrl] = useState('');
  const [attendees, setAttendees] = useState<string[]>([]);

  // * Requests / Mutations
  const { mutate, isLoading } = useRequest(addEvent, {
    onSuccess: (data) => {
      if (data.ok) {
        setDate(new Date());
        toast.success('Event Saved!');
        close();
      } else {
        toast.error(
          'Something went wrong... Please try again or contact support.',
        );
      }
    },
    onError: (error) => toast.error(error),
  });

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
        <Form
          action={() =>
            mutate({
              name,
              description,
              type,
              datetime: datetime?.toISOString()!,
              length_in_min: lengthInMin,
              location,
              url,
              attendees,
            })
          }
        >
          {/* Name */}
          <Input
            value={name}
            setValue={setName}
            label="*Name"
            placeholder="Event Name"
            required={true}
            cols={2}
            icon={IdentificationIcon}
          />

          {/* Type */}
          <Select
            value={type as string}
            setValue={setType as Dispatch<SetStateAction<string>>}
            label="*Type"
            cols={2}
            options={[
              {
                label: 'Lesson',
                value: 'LESSON',
              },
              {
                label: 'Assignment',
                value: 'ASSIGNMENT',
              },
              {
                label: 'Community',
                value: 'COMMUNITY',
              },
              {
                label: 'Other',
                value: 'OTHER',
              },
            ]}
          />

          {/* Description */}
          <TextArea
            value={description}
            setValue={setDescription}
            label="Description"
            placeholder="Event Description"
            cols={4}
            rows={1}
            icon={PencilIcon}
          />

          {/* Date */}
          <DatePicker
            value={datetime!}
            setValue={setDatetime}
            label="*Date"
            required={true}
            cols={2}
            options={{
              enableTime: true,
              dateFormat: 'Y-m-d H:i',
              minDate: 'today',
              defaultDate: new Date(),
              defaultHour: new Date().getHours() + 1,
              defaultMinute: 0,
              position: 'above right',
            }}
          />

          {/* Length in Minutes */}
          <Input
            value={lengthInMin}
            setValue={setLengthInMin}
            label="Length in Minutes"
            placeholder="Length in Minutes"
            type="number"
            min={1}
            max={1200}
            cols={2}
          />

          {/* Location */}
          <Input
            value={location}
            setValue={setLocation}
            label="Location"
            placeholder="Location"
            cols={2}
          />

          {/* URL */}
          <Input
            value={url}
            setValue={setUrl}
            label="URL"
            placeholder="URL"
            cols={2}
          />

          {/* Attendees */}
          <div className="flex flex-col col-span-4">
            <label className="mb-1 block">
              <span className="pl-1 text-slate-600 dark:text-navy-200">
                Attendees
              </span>
            </label>

            {students?.map((student) => (
              <button
                className={cn(
                  'flex items-center justify-between space-x-4 rounded-md px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
                  attendees.includes(student.id)
                    ? 'bg-green-100 ring-2 ring-green-700 dark:bg-navy-900'
                    : 'hover:bg-slate-50 dark:hover:bg-navy-600',
                )}
                type="button"
                onClick={(e) => {
                  if (attendees.includes(student.id)) {
                    setAttendees(attendees.filter((id) => id !== student.id));
                  } else {
                    setAttendees([...attendees, student.id]);
                  }

                  e.currentTarget.blur();
                }}
                key={student.id}
              >
                {/* Image */}
                <Image
                  className="rounded-full"
                  src={student.avatarUrl}
                  alt={student.firstName}
                  width={40}
                  height={40}
                />

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-slate-900 dark:text-navy-50">
                    {student.firstName} {student.lastName}
                  </h4>

                  {/* <p className="text-xs text-slate-500 dark:text-navy-200">
                    Age: {getAgeFromBirthday(student.birthday)}
                  </p> */}
                </div>

                {/* Check or X */}
                {attendees.includes(student.id) ? (
                  <CheckIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <XMarkIcon className="h-5 w-5 text-slate-400" />
                )}
              </button>
            ))}
          </div>

          {/* Submit */}
          <Button
            className="col-span-4"
            type="submit"
            loading={isLoading}
            disabled={isLoading || !datetime || !type}
          >
            Save! <CalendarIcon className="w-5 h-5 ml-2" />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
