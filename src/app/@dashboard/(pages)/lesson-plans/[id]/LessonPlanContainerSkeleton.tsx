export default function LessonPlanContainerSkeleton() {
  return (
    <>
      {/* Info */}
      <div className="mb-6 flex flex-col">
        {/* Top */}
        <div className="flex items-center justify-between">
          {/* Creator */}
          <div className="flex items-center space-x-2">
            {/* Avatar */}
            <div className="h-10 w-10 rounded-full bg-slate-200 animate-pulse"></div>

            {/* Name */}
            <div className="h-4 w-20 bg-slate-200 animate-pulse"></div>

            {/* Role */}
            <div className="h-4 w-10 bg-slate-200 animate-pulse"></div>

            {/* Date */}
            <div className="h-4 w-10 bg-slate-200 animate-pulse"></div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            {/* Save Button */}
            <button
              className="group flex h-12 flex-col items-center"
              type="button"
            >
              <div className="h-6 w-6 bg-slate-200 animate-pulse"></div>
            </button>

            {/* Print Button */}
            <button
              className="group flex h-12 flex-col items-center"
              type="button"
            >
              <div className="h-6 w-6 bg-slate-200 animate-pulse"></div>
            </button>

            {/* Share Button */}
            <button
              className="group flex h-12 flex-col items-center"
              type="button"
            >
              <div className="h-6 w-6 bg-slate-200 animate-pulse"></div>
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center space-x-2 mt-2">
          <div className="h-4 w-10 bg-slate-200 animate-pulse"></div>
          <div className="h-4 w-10 bg-slate-200 animate-pulse"></div>
          <div className="h-4 w-10 bg-slate-200 animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="h-96 w-full bg-slate-200 animate-pulse"></div>

      {/* BrandMarks */}
      {/* <LessonPlanTrademarks /> */}
    </>
  );
}
