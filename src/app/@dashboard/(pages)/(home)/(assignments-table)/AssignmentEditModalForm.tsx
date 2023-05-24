import { formatDateString } from '@/lib/common/date.helpers';
import Form from '@/lib/components/form/Form';
import Tag from '@/lib/components/ui/Tag';
import { PaperClipIcon } from '@heroicons/react/24/outline';
import {
  getStatusColor,
  getStudentCreds,
} from '../../lesson-plans/[id]/(assignments)/helpers';
import {
  changeAssignmentStatus,
  deleteAssignment,
  editAssignment,
} from '../../lesson-plans/[id]/(assignments)/_actions';
import { useRequest } from '@/lib/hooks/useRequest';
import { Dispatch, SetStateAction, useState, useTransition } from 'react';
import Input from '@/lib/components/form/Input';
import DatePicker from '@/lib/components/form/DatePicker';
import Button from '@/lib/components/ui/Button';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'sonner';
import { useUser } from '@/lib/components/providers/UserProvider';
import React from 'react';
import Image from 'next/image';
import { UserStudent } from '@/assets/typescript/user';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from '@/lib/components/print/PDFFile';

interface IProps {
  assignment: any;
  setAssignmentsEditModal: Dispatch<SetStateAction<boolean>>;
  usersStudents: UserStudent[];
}
export default function AssignmentEditModalForm({
  assignment,
  setAssignmentsEditModal,
  usersStudents,
}: IProps) {
  const [title, setTitle] = useState(assignment.title);
  const [assignedOn, setAssignedOn] = useState(assignment.assigned_on);
  const [dueDate, setDueDate] = useState(assignment.due_date);

  const [isExpanded, setIsExpanded] = useState(false);

  const showLessContent = assignment.content.slice(
    0,
    assignment.content.length * 0.1
  );

  const { mutate, error, isLoading } = useRequest(changeAssignmentStatus);
  let [isChanging, startTransition] = useTransition();

  const handleSubmit = async () => {
    const { ok } = await editAssignment({
      id: assignment.id,
      title,
      dueDate: new Date(dueDate),
      assignedOn: new Date(assignedOn),
    });

    if (ok) {
      toast.success('Assignment Edit Complete!');
      setAssignmentsEditModal(false);
    } else {
      toast.error('Error Updating Assignment');
    }
  };

  const handleDelete = async () => {
    const { ok } = await deleteAssignment({
      id: assignment.id,
    });

    if (ok) {
      toast.success('Assignment Deleted!');
      setAssignmentsEditModal(false);
    } else {
      toast.error('Failed to Delete Assignment');
    }
  };

  return (
    <section className="relative">
      {/* Header */}
      <div className="px-4 py-5 sm:px-6">
        {/* Title */}
        <h3 className="text-base font-semibold leading-6 text-slate-900 sm:text-lg">
          <Input value={title} setValue={setTitle} label={'Assignment Title'} />
        </h3>

        {/* Description */}
        <p className="mt-1 max-w-2xl text-sm text-slate-500">
          View, edit, or delete this assignment.
        </p>
      </div>

      {/* Body */}
      <div className="border-t border-slate-200 px-4 py-5 sm:px-6">
        {/* Content */}
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          {/* Student (Name & Avatar) */}
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-slate-500">Assigned To</dt>
            <dd className="mt-1 flex items-center">
              {/* Avatar */}
              {getStudentCreds(
                assignment.user_lesson_plan.students,
                usersStudents
              ).map((student, index) => (
                <React.Fragment key={index}>
                  <Image
                    className="mr-2 h-8 w-8 rounded-full"
                    src={student.avatarUrl}
                    alt="Student"
                    width={32}
                    height={32}
                  />
                  <span className="text-sm mr-2">
                    {student.firstName} {student.lastName}
                  </span>
                </React.Fragment>
              ))}
            </dd>
          </div>

          {/* Status */}
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-slate-500">Status</dt>
            <dd className="mt-2 text-sm text-slate-900">
              <Tag
                className="bg-gradient-to-tr hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer"
                colors={getStatusColor(assignment.status).gradient}
              >
                <button
                  onClick={() => {
                    startTransition(() =>
                      mutate({ id: assignment.id, status: assignment.status })
                    );
                  }}
                  disabled={isChanging}
                >
                  {assignment.status.split('_').join(' ')}
                </button>
              </Tag>
            </dd>
          </div>

          {/* Assignment Date */}
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-slate-500">Assigned on</dt>
            <dd className="mt-1 text-sm text-slate-900">
              <DatePicker
                setValue={setAssignedOn}
                value={assignedOn}
                label={''}
                options={{
                  position: 'above center',
                }}
              />
            </dd>
          </div>

          {/* Due Date */}
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-slate-500">Due on</dt>
            <dd className="mt-1 text-sm text-slate-900">
              <DatePicker
                setValue={setDueDate}
                value={dueDate}
                label={''}
                options={{
                  position: 'above center',
                }}
              />
            </dd>
          </div>

          {/* Assignment Description */}
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-slate-500">Assignment</dt>
            <dd className="mt-1 text-sm text-slate-900 px-4 py-1 ">
              {isExpanded ? (
                <motion.div
                  key="fullContent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <LessonPlanMarkdown content={assignment.content} />
                </motion.div>
              ) : (
                <motion.div
                  key="showLessContent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <LessonPlanMarkdown content={showLessContent} />
                </motion.div>
              )}

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hocus:bg-slate-100/90 dark:hocus:bg-navy-700/90  rounded-full hover:scale-105 px-2 py-1 transition-all duration-150 ease-in-out w-full"
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            </dd>
          </div>

          {/* Resources */}
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-slate-500">Resources</dt>
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
                    <span className="ml-2 w-0 flex-1 truncate">
                      {assignment.title.toLowerCase().split(' ').join('_')}
                      _worksheet.pdf
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {/* <button className="font-medium text-slate-600 hover:text-navy-500">
                      Download
                    </button> */}
                    <PDFDownloadLink
                      document={<PDFFile content={assignment.content} />}
                      fileName="FORM"
                    >
                      {({ loading }) => (loading ? 'Loading... ' : 'Download')}
                    </PDFDownloadLink>
                  </div>
                </li>
              </ul>
            </dd>
          </div>

          <div className="flex items-center justify-between gap-6 sm:col-span-2 flex-col sm:flex-row">
            <Button
              onClick={handleDelete}
              className="w-full bg-red-700 dark:bg-red-700 hocus:bg-red-800 dark:hocus:bg-red-800"
            >
              Delete
            </Button>
            <Button onClick={handleSubmit} className="w-full">
              Save
            </Button>
          </div>
        </dl>
      </div>
    </section>
  );
}