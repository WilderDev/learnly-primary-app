'use client';

import { Table } from '@/lib/components/ui/Table';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useState, useTransition } from 'react';
import Modal from '@/lib/components/popouts/Modal';
import { useRequest } from '@/lib/hooks/useRequest';
import { changeAssignmentStatus } from '../../lesson-plans/[id]/(assignments)/_actions';
import AssignmentEditModalForm from './AssignmentEditModalForm';
import LoadingDots from '@/lib/components/loading/LoadingDots';
import cn from '@/lib/common/cn';
import capitalize from '@/lib/common/capitalize';
import { useUser } from '@/lib/components/providers/UserProvider';
import React from 'react';
import { getStatusColor } from '@/lib/theme/enumColors';
import {
  IAssignmentWithLessonPlan,
  TAssignmentStatus,
} from '@/assets/typescript/assignment';
import { formatDateString } from '@/lib/common/date.helpers';
import OverlappingImages from '@/lib/components/images/OverlappingImages';
import Avatar from '@/lib/components/images/Avatar';

// * Props
interface IProps {
  assignments: IAssignmentWithLessonPlan[];
}

// * Component
export default function AssignmentsTableBody({ assignments }: IProps) {
  // * Hooks / Context
  const { students: usersStudents } = useUser();

  // * State
  let [isChanging, startTransition] = useTransition();
  const [selectedAssignment, setSelectedAssignment] =
    useState<IAssignmentWithLessonPlan | null>(null);

  // * Requests / Mutations
  const { mutate, isLoading } = useRequest(changeAssignmentStatus);

  // * Render
  return (
    <>
      {/* Table Body */}
      <Table.Body>
        {assignments.map((assignment, i) => (
          <Table.Row
            key={assignment.id}
            className={cn(
              i != assignments.length - 1 &&
                'border-b-slate-200 dark:border-b-navy-500',
            )}
          >
            {/* Student */}
            <Table.Cell className="flex-shrink-0 px-1">
              <OverlappingImages className="items-center justify-center">
                {assignment.lessonPlan.students?.map((s, idx) => (
                  <Avatar
                    src={s.avatarUrl}
                    alt={s.firstName}
                    url="/account?view=students"
                    key={idx}
                  />
                ))}
              </OverlappingImages>
            </Table.Cell>

            {/* Title */}
            <Table.Cell className="font-medium text-sm w-full">
              {assignment.title}
            </Table.Cell>

            {/* Status */}
            <Table.Cell className="font-medium">
              {isLoading ? (
                <LoadingDots />
              ) : (
                <button
                  className="hocus:bg-slate-100/90 dark:hocus:bg-navy-700/90  rounded-full hover:scale-105 px-2 py-1 transition-all duration-150 ease-in-out"
                  onClick={() => {
                    startTransition(() =>
                      mutate({
                        id: assignment.id,
                        status: assignment.status as TAssignmentStatus,
                      }),
                    );
                  }}
                  disabled={isChanging}
                >
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <span
                      className={cn(
                        'h-2 w-2 rounded-full px-1',
                        getStatusColor(assignment.status).bg,
                      )}
                    />
                    <span
                      className={cn(
                        'shrink-0',
                        getStatusColor(assignment.status).text,
                      )}
                    >
                      {capitalize(assignment.status.split('_').join(' '))}
                    </span>
                  </div>
                </button>
              )}
            </Table.Cell>

            {/* Subject */}
            <Table.Cell className="font-medium text-center">
              {assignment.lessonPlan.subject}
            </Table.Cell>

            {/* Assignment Date */}
            <Table.Cell className="font-medium text-center">
              {formatDateString(assignment.assignedOn, {
                month: 'long',
                day: 'numeric',
              })}
            </Table.Cell>

            {/* Due Date */}
            <Table.Cell className="font-medium text-center">
              {formatDateString(assignment.dueOn, {
                month: 'long',
                day: 'numeric',
              })}
            </Table.Cell>

            {/* More */}
            <Table.Cell>
              <button
                className="group ml-1 flex h-8 w-8 items-center justify-center rounded-full transition-colors hocus:bg-slate-200/90 dark:hocus:bg-navy-700/90"
                onClick={() => setSelectedAssignment(assignment)}
              >
                <PencilSquareIcon className="h-5 w-5 text-slate-700/90 transition-colors group-hover:text-slate-600 dark:text-navy-300/90 dark:group-hover:text-navy-200" />
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      {/* Edit Modal */}
      <Modal
        isVisible={!!selectedAssignment}
        close={() => setSelectedAssignment(null)}
        noCloseOnOutsideClick={true}
        closeBtn={true}
      >
        {selectedAssignment && (
          <AssignmentEditModalForm
            assignment={selectedAssignment}
            students={selectedAssignment.lessonPlan.students}
            close={() => setSelectedAssignment(null)}
          />
        )}
      </Modal>
    </>
  );
}
