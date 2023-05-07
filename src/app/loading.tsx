import LoadingShapes from '@/lib/components/loading/LoadingShapes';

export default function RootLoading() {
  return (
    <div className="absolute h-screen w-screen bg-white dark:bg-navy-900 z-50">
      <LoadingShapes />
    </div>
  );
}
