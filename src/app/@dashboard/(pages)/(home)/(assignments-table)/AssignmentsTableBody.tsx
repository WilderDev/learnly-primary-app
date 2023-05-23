'use client';

import { Table } from '@/lib/components/ui/Table';
import {
  CalculatorIcon,
  CalendarDaysIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';
import { useState, useTransition } from 'react';
import AssignmentEditModal from './AssignmentEditModalForm';
import Modal from '@/lib/components/popouts/Modal';
import { useRequest } from '@/lib/hooks/useRequest';
import { changeAssignmentStatus } from '../../lesson-plans/[id]/(assignments)/_actions';
import { toast } from 'sonner';
import AssignmentEditModalForm from './AssignmentEditModalForm';
import LoadingDots from '@/lib/components/loading/LoadingDots';
import cn from '@/lib/common/cn';
import Tag from '@/lib/components/ui/Tag';
import { getStatusColor } from '../../lesson-plans/[id]/(assignments)/helpers';
import capitalize from '@/lib/common/capitalize';

interface IProps {
  assignments: any[];
}
export default function AssignmentsTableBody({ assignments }: IProps) {
  // State
  const [assignmentsEditModal, setAssignmentsEditModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

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
                  className="hocus:bg-slate-100/90 dark:hocus:bg-navy-700/90  rounded-full hover:scale-105 px-2 py-1 transition-all duration-150 ease-in-out"
                  onClick={() => {
                    startTransition(() =>
                      mutate({ id: assignment.id, status: assignment.status })
                    );
                  }}
                  disabled={isChanging}
                >
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <span
                      className={cn(
                        'h-2 w-2 rounded-full',
                        getStatusColor(assignment.status).bg
                      )}
                    />
                    <span
                      className={cn(
                        'shrink-0',
                        getStatusColor(assignment.status).text
                      )}
                    >
                      {capitalize(assignment.status.split('_').join(' '))}
                    </span>
                  </div>
                </button>
              )}
            </Table.Cell>

            {/* Subject */}
            <Table.Cell className="font-medium">Science</Table.Cell>

            {/* Assignment Date */}
            <Table.Cell className="font-medium">Date</Table.Cell>

            {/* Due Date */}
            <Table.Cell className="font-medium">Date</Table.Cell>

            {/* More */}
            <Table.Cell>
              <button
                className="group ml-1 flex h-8 w-8 items-center justify-center rounded-full transition-colors hocus:bg-slate-200/90 dark:hocus:bg-navy-700/90"
                onClick={() => {
                  setAssignmentsEditModal(true);
                  setSelectedAssignment(assignment);
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
        close={() => {
          setAssignmentsEditModal(false);
          setSelectedAssignment(null);
        }}
      >
        {selectedAssignment && (
          <AssignmentEditModalForm assignment={selectedAssignment} />
        )}
      </Modal>
    </>
  );
}
