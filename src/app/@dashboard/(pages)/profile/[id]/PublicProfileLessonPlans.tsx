// * Props
interface IProps {
  lessons: {
    id: string;
    title: string;
    imageUrl: string;
    tags: string[];
    lengthInMin: number;
    subject: {
      id: string;
      name: string;
    };
    level: {
      id: string;
      name: string;
    };
    topic: {
      id: string;
      name: string;
    };
    createdAt: string;
  }[];
}

// * Component
export default function PublicProfileLessonPlans({ lessons }: IProps) {
  // * Render
  return (
    <>
      {/*  */}
      <h1></h1>
    </>
  );
}
