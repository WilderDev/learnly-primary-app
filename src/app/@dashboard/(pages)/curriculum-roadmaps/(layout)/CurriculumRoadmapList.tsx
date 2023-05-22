import { CardContainer } from '@/lib/components/ui/Card';
import CurriculumRoadmapItem from './CurriculumRoadmapItem';
import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';

// * Props
interface IProps {
  data: ICurriculumListItem[];
}

export default function CurriculumRoadmapList({ data }: IProps) {
  // * Render
  return (
    <CardContainer className="xl:grid-cols-2 2xl:grid-cols-3">
      {/* Curriculum Roadmap List */}
      {data?.map((item, idx) => (
        <CurriculumRoadmapItem item={item} idx={idx} key={item.id} />
      ))}
    </CardContainer>
  );
}
