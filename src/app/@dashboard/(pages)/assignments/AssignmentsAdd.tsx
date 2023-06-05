'use client';

import Modal from '@/lib/components/popouts/Modal';
import { useState } from 'react';
import AssignmentCreatorForm from '../lesson-plans/[id]/(assignments)/AssignmentCreatorForm';
import { Card } from '@/lib/components/ui/Card';
import Button from '@/lib/components/ui/Button';
import { PlusIcon } from '@heroicons/react/24/solid';

export interface LessonPlanWithoutAssignments {
  user_lesson_plan_id: string;
  lesson_plan_name: string;
  lesson_plan_content: string;
  lesson_plan_level_name: string;
}

interface IProps {
  lessonPlansWithoutAssignments: LessonPlanWithoutAssignments[];
}

export default function AssignmentsAdd({
  lessonPlansWithoutAssignments,
}: IProps) {
  // * State
  const [selectedLessonPlan, setSelectedLessonPlan] =
    useState<LessonPlanWithoutAssignments | null>(null);

  return (
    <>
      {lessonPlansWithoutAssignments.length > 0 ? (
        <section className="flex flex-col gap-6">
          {lessonPlansWithoutAssignments.map((lessonPlan, i) => (
            <Card className="w-full flex items-center" key={i}>
              {/* Lesson Plan Name */}
              <Card.Subtitle className="text-center text-md">
                {lessonPlan.lesson_plan_name}
              </Card.Subtitle>

              {/* Opens Creation Modal */}
              <Button
                className="p-3 md:p-3 mt-2 "
                size="sm"
                rounded="full"
                onClick={() => setSelectedLessonPlan(lessonPlan)}
              >
                <PlusIcon className="w-5 h-5" />
              </Button>
            </Card>
          ))}
        </section>
      ) : (
        <p className="col-span-4 font-semibold underline text-center text-slate-600 dark:text-navy-200">
          No Avaliable Lesson Plans
        </p>
      )}

      {/* Assignments Creation Modal */}
      <Modal
        isVisible={!!selectedLessonPlan}
        close={() => setSelectedLessonPlan(null)}
        noCloseOnOutsideClick={true}
        closeBtn={true}
      >
        {selectedLessonPlan && (
          <>
            {/* Lesson Plan Name */}
            <Modal.Header
              className="text-center font-semibold text-base"
              title={selectedLessonPlan.lesson_plan_name + ' Assignment'}
            />

            {/* Creator Form */}
            <Modal.Body>
              <AssignmentCreatorForm
                setSelectedLessonPlan={setSelectedLessonPlan}
                selectedLessonPlan={selectedLessonPlan}
              />
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
}
