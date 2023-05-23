import { PropsWithChildren } from 'react';
import CurriculumRoadmapBreadcrumbs from './CurriculumRoadmapBreadcrumbs';
import DashMainCol from '@/app/@dashboard/(layout)/DashMainCol';

// * Wrapper
export default function CurriculumRoadmapSection({
  children,
}: PropsWithChildren) {
  // * Render
  return (
    <DashMainCol className="col-span-12 xl:col-span-12 2xl:col-span-12 p-4 sm:p-5 rounded-lg bg-white dark:bg-navy-800 shadow-md lg:mr-12 2xl:mr-0">
      <CurriculumRoadmapBreadcrumbs />

      {children}
    </DashMainCol>
  );
}
