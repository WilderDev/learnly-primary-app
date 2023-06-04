'use client';

import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import SaveCurriculumRoadmapModal from './SaveCurriculumRoadmapModal';
import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';
import { Card, CardContainer } from '@/lib/components/ui/Card';
import { getIndexColors } from '@/lib/theme/enumColors';
import OverlappingImages from '@/lib/components/images/OverlappingImages';
import Avatar from '@/lib/components/images/Avatar';

// * Props
interface IProps {
  roadmaps: ICurriculumListItem[];
}

// * Component
export default function CurriculumRoadmapCards({ roadmaps }: IProps) {
  // * Render
  return (
    <CardContainer>
      {roadmaps.map((r, idx) => (
        <Card decoration={getIndexColors(idx).BG.GRADIENT} key={r.id}>
          <Card.Title className="lg:text-lg">{r.name}</Card.Title>

          {/* Card Categories */}
          <Card.Tags>
            {r.tags?.slice(0, 3).map((t, i) => (
              <Card.Tag
                content={t}
                colors={getIndexColors(idx).BLEND.SUBDUED}
                key={i}
              />
            ))}
          </Card.Tags>

          <Card.Subtitle className="mt-3 mb-auto">
            {r.description}
          </Card.Subtitle>

          {/* Card Footer */}
          <Card.Footer>
            {/* Attending */}
            <OverlappingImages>
              {r.students?.map((s, i) => (
                <Avatar
                  src={s.avatar_url}
                  alt={s.name}
                  url="/account?view=students"
                  key={i}
                />
              ))}
            </OverlappingImages>

            {/* Link */}
            <Card.Action url={r.url!} />
          </Card.Footer>
        </Card>
      ))}
    </CardContainer>
  );
}

// * No Curriculum Roadmap Card
export function NoCurriculumRoadmapCard({
  roadmaps,
}: {
  roadmaps: ICurriculumListItem[];
}) {
  // * State
  const [isAddRoadmapModalOpen, setAddRoadmapModalOpen] = useState(false);

  // * Render
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center">
        <ExclamationCircleIcon className="h-12 w-12 text-slate-500 dark:text-navy-300" />

        <h3 className="mt-4 text-2xl text-center sm:text-left font-bold text-slate-700 dark:text-navy-100">
          You don&apos;t have any curriculums yet
        </h3>

        <p className="mt-2 max-w-md text-center text-slate-500 dark:text-navy-200">
          Curriculums are a collection of subjects, topics, and lessons that you
          can assign to your students. This will help you keep track of their
          learning journey.
        </p>

        {/* Button to open add modal */}
        <button
          type="button"
          className="mb-6 mt-4 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hocus:bg-green-700"
          onClick={() => setAddRoadmapModalOpen(true)}
        >
          Create a Learning Path
        </button>
      </div>

      {/* Add Modal */}
      <SaveCurriculumRoadmapModal
        isOpen={isAddRoadmapModalOpen}
        close={() => setAddRoadmapModalOpen(false)}
        roadmaps={roadmaps}
      />
    </>
  );
}
