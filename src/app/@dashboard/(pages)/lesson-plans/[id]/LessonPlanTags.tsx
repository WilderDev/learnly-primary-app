// * Props
interface IProps {
  tags: string[];
}

// * Component
export default function LessonPlanTags({ tags }: IProps) {
  return (
    <div className="mt-2 flex flex-wrap max-w-xl">
      {tags?.map((tag) => (
        <span
          className="mr-2 mt-2 inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-navy-600 dark:text-navy-50"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
