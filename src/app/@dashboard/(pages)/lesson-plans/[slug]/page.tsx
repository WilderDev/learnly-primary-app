// * Props
interface IProps {
  params: {
    slug: string;
  };
}

// * Component
export default function LessonPlanPage({ params: { slug } }: IProps) {
  // * Render
  return (
    <div>
      <h1>Lesson Plan Page Dashboard</h1>
    </div>
  );
}
