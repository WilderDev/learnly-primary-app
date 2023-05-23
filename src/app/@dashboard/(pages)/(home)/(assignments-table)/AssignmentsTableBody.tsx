'use client';

import { Table } from '@/lib/components/ui/Table';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useState, useTransition } from 'react';
import AssignmentEditModal from './AssignmentEditModalForm';
import Modal from '@/lib/components/popouts/Modal';
import { useRequest } from '@/lib/hooks/useRequest';
import { changeAssignmentStatus } from '../../lesson-plans/[id]/(assignments)/_actions';
import { toast } from 'sonner';
import AssignmentEditModalForm from './AssignmentEditModalForm';
import LoadingDots from '@/lib/components/loading/LoadingDots';
import cn from '@/lib/common/cn';

interface IProps {
  assignments: any[];
}
export default function AssignmentsTableBody({ assignments }: IProps) {
  // State
  const [assignmentsEditModal, setAssignmentsEditModal] = useState(false);

  // Requests / Mutations
  const { mutate, error, isLoading } = useRequest(changeAssignmentStatus);
  let [isChanging, startTransition] = useTransition();

  if (error) {
    toast.error('Failed updating status');
  }

  return (
    <>
      <Table.Body>
        {assignments.map((assignment, i) => (
          <Table.Row
            key={assignment.id}
            className={cn(
              i != assignments.length - 1 &&
                'border-b-slate-200 dark:border-b-navy-500'
            )}
          >
            {/* Student */}
            <Table.Cell className="font-medium flex gap-2">Timmy</Table.Cell>

            {/* Title */}
            <Table.Cell className="font-medium">Title</Table.Cell>

            {/* Status */}
            <Table.Cell className="font-medium">
              {isLoading ? (
                <LoadingDots />
              ) : (
                <button
                  onClick={() => {
                    startTransition(() =>
                      mutate({ id: assignment.id, status: assignment.status })
                    );
                  }}
                  disabled={isChanging}
                >
                  {assignment.status}
                </button>
              )}
            </Table.Cell>

            {/* Subject */}
            <Table.Cell className="font-medium">Science</Table.Cell>

            {/* Assignment Date */}
            <Table.Cell className="font-medium">
              {/* {getDatestringFromTimestamp(assignment.assigned_on!, true, true, true)} */}
              {/* {new Date(assignment.assigned_on).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })} */}
              Date
            </Table.Cell>

            {/* Due Date */}
            <Table.Cell className="font-medium">
              {/* {assignment.due_date.toString()} */}
              {/* {new Date(assignment.due_date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })} */}
              Date
            </Table.Cell>

            {/* More */}
            <Table.Cell>
              <button
                className="group ml-1 flex h-8 w-8 items-center justify-center rounded-full transition-colors hocus:bg-slate-200/90 dark:hocus:bg-navy-700/90"
                onClick={() => {
                  setAssignmentsEditModal(true);
                }}
              >
                <PencilSquareIcon className="h-5 w-5 text-slate-700/90 transition-colors group-hover:text-slate-600 dark:text-navy-300/90 dark:group-hover:text-navy-200" />
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Modal
        isVisible={assignmentsEditModal}
        close={() => setAssignmentsEditModal(false)}
      >
        <AssignmentEditModalForm />
      </Modal>
    </>
  );
}
