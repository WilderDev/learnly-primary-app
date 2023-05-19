import { PropsWithChildren } from 'react';
import CurriculumRoadmapBreadcrumbs from './CurriculumRoadmapBreadcrumbs';

// * Wrapper
export default function CurriculumRoadmapSection({
  children,
}: PropsWithChildren) {
  // * Render
  return (
    <section className="col-span-12 p-4 bg-white rounded-lg shadow-md">
      <CurriculumRoadmapBreadcrumbs />

      {children}
    </section>
  );
}
