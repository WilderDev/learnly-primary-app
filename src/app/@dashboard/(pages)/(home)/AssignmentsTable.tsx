'use client';

import { IAssignment } from '@/assets/typescript/assignment';
import capitalize from '@/lib/common/capitalize';
import cn from '@/lib/common/cn';
import {
  formatDateString,
  getDatestringFromTimestamp,
} from '@/lib/common/date.helpers';
import DatePicker from '@/lib/components/form/DatePicker';
import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import Select from '@/lib/components/form/Select';
import TextArea from '@/lib/components/form/TextArea';
import Modal from '@/lib/components/popouts/Modal';
import { useUser } from '@/lib/components/providers/UserProvider';
import Button from '@/lib/components/ui/Button';
import { Table } from '@/lib/components/ui/Table';
import { useAssignmentsStore } from '@/lib/store/assignmentStore';
import {
  BookmarkSquareIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { toast } from 'sonner';

export default function AssignmentsTable() {
  const { user } = useUser();

  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState(Date || null);

  const [selectedAssignment, setSelectedAssignment] = useState(
    {} as IAssignment
  );

  const [moreModalOpen, setMoreModalOpen] = useState(false);

  const assignments = useAssignmentsStore((state) => state.assignments);
  const fetchAssignments = useAssignmentsStore(
    (state) => state.fetchAssignments
  );
  const delteAssignment = useAssignmentsStore(
    (state) => state.deleteAssignment
  );
  const isLoading = useAssignmentsStore((state) => state.isLoading);

  useEffect(() => {
    fetchAssignments();
  }, [fetchAssignments]);

  const headers: string[] = [
    'Student',
    'Title',
    'Status',
    'Subject',
    'Assignment Date',
    'Due Date',
  ];

  const testLoading = () => {
    useAssignmentsStore.setState({ isLoading: true });
    setTimeout(() => {
      useAssignmentsStore.setState({ isLoading: false });
    }, 2000);
  };

  const handleDelete = () => {
    if (!selectedAssignment) return;
    try {
      delteAssignment(selectedAssignment.id);
      setMoreModalOpen(false);
      setSelectedAssignment({} as IAssignment);
      toast.success('Assignment Deleted!');
    } catch (err: any) {
      setSelectedAssignment({} as IAssignment);
      toast.error(err.message);
    }
  };

  return (
    <>
      <button className="text-dark" onClick={testLoading}>
        Fake Load
      </button>
      {assignments.length > 0 || isLoading ? (
        <Table>
          <Table.Head>
            <Table.Row>
              {/* Primary Column Titles */}
              {headers.map((item, i) => (
                <Table.Header isFirst={i === 0} isLast={false} key={i}>
                  {item.split('_').join(' ')}
                </Table.Header>
              ))}

              {/* More */}
              <Table.Header isFirst={false} isLast={true}>
                More
              </Table.Header>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            {!isLoading
              ? assignments.map((assignment, i) => (
                  <Table.Row
                    className={cn(
                      assignments.length > 1 &&
                        'border-b-slate-200 dark:border-b-navy-500'
                    )}
                    key={i}
                  >
                    {/* Student */}
                    <Table.Cell className="font-medium flex gap-2">
                      Timmy
                    </Table.Cell>

                    {/* Title */}
                    <Table.Cell className="font-medium">
                      {assignment.title}
                    </Table.Cell>

                    {/* Status */}
                    <Table.Cell className="font-medium">
                      {assignment.status}
                    </Table.Cell>

                    {/* Subject */}
                    <Table.Cell className="font-medium">Science</Table.Cell>

                    {/* Assignment Date */}
                    <Table.Cell className="font-medium">
                      {/* {getDatestringFromTimestamp(assignment.assigned_on!, true, true, true)} */}

                      {new Date(assignment.assigned_on).toLocaleDateString(
                        'en-US',
                        {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}
                    </Table.Cell>

                    {/* Due Date */}
                    <Table.Cell className="font-medium">
                      {/* {assignment.due_date.toString()} */}

                      {new Date(assignment.due_date).toLocaleDateString(
                        'en-US',
                        {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}
                    </Table.Cell>

                    {/* More */}
                    <Table.Cell>
                      <button
                        className="group ml-1 flex h-8 w-8 items-center justify-center rounded-full transition-colors hocus:bg-slate-200/90 dark:hocus:bg-navy-700/90"
                        onClick={() => {
                          setMoreModalOpen(true);
                          setSelectedAssignment(assignment);
                        }}
                      >
                        <PencilSquareIcon className="h-5 w-5 text-slate-700/90 transition-colors group-hover:text-slate-600 dark:text-navy-300/90 dark:group-hover:text-navy-200" />
                      </button>
                    </Table.Cell>
                  </Table.Row>
                ))
              : new Array(3).fill('').map((_, i) => (
                  <Table.Row
                    className="border-b-slate-200 dark:border-b-navy-500 animate-pulse"
                    key={i}
                  >
                    {new Array(6).fill('').map((_, i) => (
                      <Table.Cell className="font-medium" key={i}>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                      </Table.Cell>
                    ))}

                    {/* More */}
                    <Table.Cell>
                      <button
                        disabled
                        className="group ml-1 flex h-8 w-8 items-center justify-center rounded-full transition-colors hocus:bg-slate-200/90 dark:hocus:bg-navy-700/90"
                        // onClick={() => setMoreModalOpen(true)}
                      >
                        <PencilSquareIcon className="h-5 w-5 text-slate-700/90 transition-colors group-hover:text-slate-600 dark:text-navy-300/90 dark:group-hover:text-navy-200" />
                      </button>
                    </Table.Cell>
                  </Table.Row>
                ))}
          </Table.Body>

          <Modal
            close={() => {
              setMoreModalOpen(false);
              setSelectedAssignment({} as IAssignment);
            }}
            isVisible={moreModalOpen}
          >
            {/* <Button onClick={handleDelete}>Delete</Button> */}
            {/* Header */}
            <div className="px-4 py-5 sm:px-6">
              {/* Title */}

              <label
                htmlFor="title"
                className="block text-sm font-medium text-slate-700 dark:text-navy-200"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full mt-1 border border-slate-300 dark:border-slate-500 focus:border-slate-500 dark:focus:border-slate-700 focus:ring-slate-500 dark:focus:ring-slate-700 focus:ring-opacity-50 dark:focus:ring-opacity-50 rounded-md shadow-sm text-slate-900 dark:text-slate-900 sm:text-sm"
              />

              {/* Description */}
              <p className="mt-1 max-w-2xl text-sm text-slate-500 dark:text-navy-100">
                View, edit, or delete this assignment.
              </p>
            </div>
            {/* Body */}
            <div className="border-t border-slate-200 px-4 py-5 sm:px-6">
              {/* Content */}
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                {/* Student (Name & Avatar) */}
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-slate-500 dark:text-navy-200">
                    Assigned To
                  </dt>
                  <dd className="mt-1 flex flex-col items-start">
                    {/* Avatar */}
                    Timmy
                  </dd>
                </div>

                {/* Status */}
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-slate-500 dark:text-navy-200">
                    Status
                  </dt>
                  <dd className="mt-2 text-sm text-slate-900">
                    {/* <Tag
                  className="bg-gradient-to-tr"
                  colors={getStatusColor(status).gradient}
                >
                  {status}
                </Tag> */}
                    Tag
                    {/* <AssignmentsStatus
                  status={status}
                  isMutating={isMutating}
                  handleChangeStatus={handleChangeStatus}
                  isModal={true}
                /> */}
                  </dd>
                </div>

                {/* Assignment Date */}
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-slate-500 dark:text-navy-200">
                    Assigned on
                  </dt>
                  <dd className="mt-4 text-sm text-slate-900 dark:text-navy-100">
                    {new Date(
                      selectedAssignment.assigned_on
                    ).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </dd>
                </div>

                {/* Due Date */}
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-slate-500 dark:text-navy-200">
                    Due on
                  </dt>
                  {/* <dd className="mt-1 text-sm text-slate-900 dark:text-navy-100">
                {formatDateString(due_date)}
              </dd> */}
                  {/* <DatePicker
                    value={selectedAssignment.due_date}
                    setValue={(date) => setDueDate(date!)}
                    label={''}
                  /> */}
                  Date
                </div>

                {/* Subject */}
                <div className="absolute right-0 top-0">
                  <dt className="sr-only">Subject</dt>
                  <dd className="mt-1 text-sm text-slate-900">
                    {/* <Tag
                  className="bg-gradient-to-bl"
                  colors={getSubjectColor(subject).gradient}
                >
                  {subject}
                </Tag> */}
                    Subject
                  </dd>
                </div>

                {/* Resources */}
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-slate-500 dark:text-navy-200">
                    Resources
                  </dt>
                  <dd className="mt-1 text-sm text-slate-900">
                    {/* Resource List */}
                    <ul
                      role="list"
                      className="divide-y divide-slate-200 rounded-md border border-slate-200"
                    >
                      <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-slate-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 w-0 flex-1 truncate dark:text-navy-100">
                            {title.toLowerCase().split(' ').join('_')}.pdf
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                            type="button"
                            className="font-medium text-slate-600 hover:text-navy-500 dark:text-navy-300"
                            // onClick={() => downloadPDF('assignment', title)}
                          >
                            Download
                          </button>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>

                {/* Actions */}
                {/* TSK */}
                <div className="flex items-center justify-between gap-x-6 sm:col-span-2">
                  {/* Save Button */}
                  <Button
                    // disabled={updateMutation}
                    className="w-full text-base"
                    // icon={<PencilIcon className="h-5 w-5" />}
                    type="submit"
                  >
                    Save
                  </Button>

                  {/* Delete Button */}
                  <Button
                    className="w-full text-base bg-red-700 dark:bg-red-700 hover:bg-red-800"
                    // icon={<TrashIcon className="h-5 w-5" />}
                    type="button"
                    // disabled={deleteMutation}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </div>
              </dl>
            </div>
          </Modal>
        </Table>
      ) : (
        <h1>Congrats!</h1>
      )}
    </>
  );
}
