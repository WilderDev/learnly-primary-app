'use client';

import { formatExactDateString } from '@/lib/common/date.helpers';
import { useUser } from '@/lib/components/providers/UserProvider';
import {
  BookOpenIcon,
  PencilSquareIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useAccount } from './AccountCtx';
import LoadingShapes from '@/lib/components/loading/LoadingShapes';

// * Component
export default function AccountStudentsList() {
  // * Hooks / Context
  const { students } = useUser();
  const { setStudentEditId, setStudentDetailsId, setAddStudentModalOpen } =
    useAccount();

  // * Render
  return students ? (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
    >
      {students?.map((student) => (
        <li
          className="col-span-1 flex flex-col divide-y divide-slate-200 rounded-lg bg-white dark:divide-navy-500 dark:bg-navy-800 text-center shadow"
          key={student.id}
        >
          <div className="flex flex-1 flex-col p-8">
            <Image
              className="mx-auto h-24 w-24 flex-shrink-0 object-cover"
              src={student.avatarUrl}
              alt={student.firstName}
              width={96}
              height={96}
              priority={true}
            />
            <h3 className="mt-6 text-sm sm:text-lg font-medium text-slate-900 dark:text-navy-50">
              {student.firstName} {student.lastName}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Birthday</dt>
              <dd className="text-sm text-slate-500 dark:text-navy-200">
                {formatExactDateString(student.birthday, {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </dd>
            </dl>
          </div>

          <div>
            <div className="-mt-px flex divide-x divide-slate-200 dark:divide-navy-500">
              <div className="flex w-0 flex-1">
                <button
                  className="relative hocus:bg-slate-50 dark:hocus:bg-navy-900 transition-colors -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-slate-900 dark:text-navy-50"
                  type="button"
                  onClick={() => setStudentEditId(student.id)}
                >
                  <PencilSquareIcon
                    className="h-5 w-5 text-slate-400"
                    aria-hidden="true"
                  />
                  Edit
                </button>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <button
                  className="relative hocus:bg-slate-50 dark:hocus:bg-navy-900 transition-colors inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-slate-900 dark:text-navy-50"
                  type="button"
                  onClick={() => setStudentDetailsId(student.id)}
                >
                  <BookOpenIcon
                    className="h-5 w-5 text-slate-400"
                    aria-hidden="true"
                  />
                  Details
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}

      {/* Add Child */}
      <li className="col-span-1 rounded-lg bg-white dark:divide-navy-500 dark:bg-navy-800 shadow">
        <button
          className="group flex flex-col items-center justify-center p-8 w-full h-full roundd-lg border-2 border-dashed border-slate-200 dark:border-navy-500 hover:border-slate-300 dark:hover:border-navy-400 transition-colors duration-300"
          type="button"
          onClick={() => setAddStudentModalOpen(true)}
        >
          <PlusCircleIcon className="mx-auto h-16 w-16 flex-shrink-0 object-cover text-slate-300 dark:text-navy-900 group-hover:text-green-500 dark:group-hover:text-green-700 transition-colors duration-300" />
          <h3 className="mt-6 text-sm sm:text-lg font-medium text-slate-500 dark:text-navy-300 group-hover:text-slate-700 dark:group-hover:text-navy-200 transition-colors duration-300">
            Add Student
          </h3>
        </button>
      </li>
    </ul>
  ) : (
    <LoadingShapes />
  );
}
