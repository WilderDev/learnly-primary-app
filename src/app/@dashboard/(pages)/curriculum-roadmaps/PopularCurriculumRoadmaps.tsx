'use client';

import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';
import { Card } from '@/lib/components/ui/Card';
import Image from 'next/image';
import SaveCurriculumRoadmapModalContent from './(layout)/SaveCurriculumRoadmapModalContent';
import { useState } from 'react';
import Modal from '@/lib/components/popouts/Modal';

// * Props
interface IProps {
  roadmaps: ICurriculumListItem[];
}

export default function PopularCurriculumRoadmaps({ roadmaps }: IProps) {
  // * State
  const [selectedOption, setSelectedOption] = useState('');

  // * Render
  return (
    <>
      <section className="flex xl:flex-col space-y-6 flex-wrap gap-6 xl:gap-x-0">
        {roadmaps?.map((roadmap) => (
          <Card
            className="w-full md:w-1/2 lg:w-1/3 xl:w-full flex flex-col justify-center space-y-4 hocus:cursor-pointer"
            onClick={() => setSelectedOption(roadmap.name)}
            key={roadmap.id}
          >
            <div className="flex items-center space-x-4 w-10/12">
              {/* Image */}
              <Image
                className="rounded-full w-12 h-12"
                src={roadmap.image}
                alt={roadmap.name}
                width={1600}
                height={900}
              />

              {/* Title */}
              <Card.Title className="text-lg font-semibold">
                {roadmap.name}
              </Card.Title>
            </div>

            <Card.Footer>
              <Card.Subtitle>{roadmap.description}</Card.Subtitle>
            </Card.Footer>
          </Card>
        ))}
      </section>

      <Modal
        isVisible={!!selectedOption}
        close={() => setSelectedOption('')}
        size="xl"
        closeBtn={true}
      >
        {!!selectedOption && (
          <SaveCurriculumRoadmapModalContent
            roadmaps={roadmaps}
            defaultSelected={selectedOption}
            close={() => setSelectedOption('')}
          />
        )}
      </Modal>
    </>
  );
}
