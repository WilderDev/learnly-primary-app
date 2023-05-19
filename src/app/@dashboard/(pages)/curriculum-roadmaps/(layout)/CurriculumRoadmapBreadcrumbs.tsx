'use client';

import { HomeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// * Component
export default function CurriculumRoadmapBreadcrumbs() {
  // * Router
  const params = useParams(); // Get params from router

  // * Helpers

  // * Render
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol
        role="list"
        className="flex space-x-4 rounded-md bg-white px-6 shadow dark:bg-navy-800"
      >
        <li className="flex">
          <div className="flex items-center">
            <Link
              href="/curriculum-roadmap"
              className="text-slate-400 transition-all duration-200 hocus:scale-105 hocus:text-slate-500 dark:text-navy-200 dark:hocus:text-navy-100"
            >
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>

        {/* Dynamic Breadcrumbs */}
        {/* TSK */}
      </ol>
    </nav>
  );
}
// {generateLevels().map((level) => (
//   <li className="flex" key={level.label}>
// 	<div className="flex items-center">
// 	  {/* Arrow */}
// 	  <svg
// 		className="h-full w-6 flex-shrink-0 text-slate-200 dark:text-navy-500"
// 		viewBox="0 0 24 44"
// 		preserveAspectRatio="none"
// 		fill="currentColor"
// 		aria-hidden="true"
// 	  >
// 		<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
// 	  </svg>

// 	  {/* Text */}
// 	  <Link
// 		href={level.url}
// 		className={cn(
// 		  'ml-4 flex h-full w-full items-center justify-center text-sm font-medium  transition-all duration-200 md:text-base',
// 		  level.isCurrent
// 			? 'text-slate-700 dark:text-navy-200'
// 			: 'text-slate-500 hocus:scale-105 hocus:text-slate-700 dark:text-navy-300 dark:hocus:text-navy-200',
// 		)}
// 		aria-current={level.isCurrent ? 'page' : undefined}
// 	  >
// 		{level.label}
// 	  </Link>
// 	</div>
//   </li>
// ))}
