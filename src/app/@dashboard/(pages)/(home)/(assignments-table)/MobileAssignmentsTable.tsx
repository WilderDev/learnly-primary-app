'use client';

import { IAssignmentWithLessonPlan } from '@/assets/typescript/assignment';
import cn from '@/lib/common/cn';
import Modal from '@/lib/components/popouts/Modal';
import { Card } from '@/lib/components/ui/Card';
import { getStatusColor } from '@/lib/theme/enumColors';
import AssignmentEditModalForm from './AssignmentEditModalForm';
import { useState } from 'react';
import Avatar from '@/lib/components/images/Avatar';
import OverlappingImages from '@/lib/components/images/OverlappingImages';
import { formatDateString } from '@/lib/common/date.helpers';

interface IProps {
  assignments: IAssignmentWithLessonPlan[];
}
export default function MobileAssignmentsTable({ assignments }: IProps) {
  // * State
  const [selectedAssignment, setSelectedAssignment] =
    useState<IAssignmentWithLessonPlan | null>(null);

  return (
    <>
      <section className="2xl:hidden flex flex-col gap-2">
        {assignments.map((assignment) => (
          <div className=" flex flex-col" key={assignment.id}>
            <Card
              className="cursor-pointer flex-row items-center md:gap-4 gap-2"
              onClick={() => setSelectedAssignment(assignment)}
            >
              {/* Assignment Status */}
              <span
                className={cn(
                  'h-4 w-4 rounded-full px-1 hidden sm:block',
                  getStatusColor(assignment.status).bg
                )}
              />
              <div className="flex items-center md:gap-4 gap-2">
                {/* Avatars */}
                <OverlappingImages className="items-center justify-center ">
                  {assignment.lessonPlan.students?.map((s, idx) => (
                    <Avatar
                      src={s.avatarUrl}
                      alt={s.firstName}
                      url="/account?view=students"
                      key={idx}
                    />
                  ))}
                </OverlappingImages>
                <div>
                  {/* Title */}
                  <h3 className="line-clamp-1 text-slate-700 dark:text-navy-100">
                    {assignment.title}
                  </h3>

                  {/* Assignment Due Date */}
                  {assignment.dueOn && (
                    <p className="text-xs mt-0.5 text-slate-500 dark:text-navy-300">
                      {formatDateString(assignment.dueOn, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </section>
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
