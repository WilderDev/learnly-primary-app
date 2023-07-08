'use client';

import Modal from '@/lib/components/popouts/Modal';
import AssignmentCreatorForm from '../../lesson-plans/[id]/(assignments)/AssignmentCreatorForm';
import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import { Dispatch, SetStateAction, useState } from 'react';
import { BookmarkSquareIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import DatePicker from '@/lib/components/form/DatePicker';
import { useUser } from '@/lib/components/providers/UserProvider';
import MultiSelect from '@/lib/components/form/MultiSelect';
import { createSelectOptions } from '@/lib/common/form.helpers';
import { IStudentPromptReq } from '@/assets/typescript/lesson-plan';
import { getAgeFromBirthday } from '@/lib/common/date.helpers';
import TextArea from '@/lib/components/form/TextArea';
import Select from '@/lib/components/form/Select';
import Button from '@/lib/components/ui/Button';

interface IProps {}

export default function ActivitiesCreateModal({}: IProps) {
  const [title, setTitle] = useState('');
  const [activityDueDate, setActivityDueDate] = useState<Date | null>(null);
  const [students, setStudents] = useState<IStudentPromptReq['students']>([]);
  const { students: usersStudents } = useUser();
  const [activity, setActivity] = useState('');
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');

  return (
    <>
      <Modal.Header title="Log an Activity" />
      <Modal.Body>
        <Form>
          <Input
            label="Title"
            type="text"
            value={title}
            setValue={setTitle as Dispatch<SetStateAction<string>>}
            cols={4}
            icon={BookmarkSquareIcon}
          />
          <DatePicker
            value={activityDueDate!}
            className="w-full"
            setValue={setActivityDueDate}
            label={'Select an Activity Date'}
            required={true}
            cols={2}
            options={{
              minDate: 'today',
              defaultHour: new Date().getHours(),
              defaultMinute: 0,
              position: 'below center',
            }}
          />
          <MultiSelect
            label="*Students"
            options={createSelectOptions(
              usersStudents.map((s) => ({
                value: s.id,
                label: `${s.firstName} ${s.lastName}`,
                image: s.avatarUrl,
              })),
            )}
            values={students.map((s) => s.id)}
            setValues={(ids) => {
              const lessonStudents: IStudentPromptReq['students'] =
                usersStudents
                  .filter((s) => ids.includes(s.id))
                  .map((st) => ({
                    name: `${st.firstName} ${st.lastName}`,
                    age: getAgeFromBirthday(st.birthday),
                    ...st,
                  }));

              setStudents(lessonStudents);
            }}
            cols={2}
            icon={UserGroupIcon}
          />
          <Select
            label="Select a Subject"
            options={[]}
            value={subject}
            setValue={setSubject as Dispatch<SetStateAction<string>>}
            cols={2}
            // icon={RocketLaunchIcon}
          />
          <Select
            label="Select a Level"
            options={[]}
            value={level}
            setValue={setLevel as Dispatch<SetStateAction<string>>}
            cols={2}
            // icon={RocketLaunchIcon}
          />
          <TextArea
            value={activity}
            setValue={setActivity as Dispatch<SetStateAction<string>>}
            label={'Activity Description'}
            cols={4}
          />
          <div className="col-span-4">
            {/* Submit */}
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </>
  );
}
