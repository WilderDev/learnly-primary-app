export default function AuthDividerMessage() {
  return (
    <div className="relative mt-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-300 dark:border-navy-400" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-white px-2 text-slate-500 dark:bg-navy-700 dark:text-navy-200">
          Or continue with
        </span>
      </div>
    </div>
  );
}
