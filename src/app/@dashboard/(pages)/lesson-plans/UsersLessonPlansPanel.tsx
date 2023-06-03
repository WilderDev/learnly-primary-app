'use client';

import { ILessonPlanWithDetails } from '@/assets/typescript/lesson-plan';
import { formatDateString } from '@/lib/common/date.helpers';
import Avatar from '@/lib/components/images/Avatar';
import OverlappingImages from '@/lib/components/images/OverlappingImages';
import ClientWrapper from '@/lib/components/layout/ClientWrapper';
import { Card, CardContainer } from '@/lib/components/ui/Card';
import { getIndexColors, getSubjectColor } from '@/lib/theme/enumColors';
import Link from 'next/link';

// * Props
interface IProps {
  lessons: ILessonPlanWithDetails[];
}

// * Component
export default function UsersLessonPlansPanel({ lessons }: IProps) {
  // * Render
  return lessons.length > 0 ? (
    <CardContainer>
      {/* Lessons */}
      {lessons.map((lesson, idx) => (
        <Card
          className="hocus:cursor-pointer"
          decoration={getSubjectColor(lesson.subject_name).BG.GRADIENT}
          url={`/lesson-plans/${lesson.id}`}
          key={lesson.id}
        >
          {/* Title */}
          <Card.Title className="text-lg font-medium text-slate-700 dark:text-navy-100">
            {lesson.title}
          </Card.Title>

          {/* Subtitle */}
          <Card.Subtitle className="mt-1">
            {lesson.subject_name} | {lesson.level_name} | {lesson.topic_name}
          </Card.Subtitle>

          {/* Card Categories */}
          <Card.Tags className="mb-auto">
            {lesson.tags?.slice(0, 3).map((t, i) => (
              <Card.Tag
                content={t}
                colors={getIndexColors(idx).BLEND.SUBDUED}
                key={i}
              />
            ))}
          </Card.Tags>

          {/* Card Footer */}
          <ClientWrapper>
            <Card.Footer>
              {/* Attending */}
              <OverlappingImages>
                {lesson.students_with_details?.map((s, i) => (
                  <Avatar
                    src={s.avatar_url || ''}
                    alt={s.first_name || 'Student'}
                    key={i}
                  />
                ))}
              </OverlappingImages>

              {/* Completion Date */}
              <span className="text-sm text-slate-600 dark:text-navy-200">
                {formatDateString(lesson.completion_date!, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }) ?? 'Not Completed Yet'}
              </span>
            </Card.Footer>
          </ClientWrapper>
        </Card>
      ))}
    </CardContainer>
  ) : (
    <p className="text-center font-medium text-slate-700 dark:text-navy-100">
      You don&apos;t have any lesson plans yet. Create one{' '}
      <Link
        href="/lesson-creator"
        className="text-sky-600 dark:text-sky-400 hover:underline"
      >
        here
      </Link>
      .
    </p>
  );
}
