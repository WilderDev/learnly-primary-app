'use client';

import Modal from '@/lib/components/popouts/Modal';
import { useAccount } from './AccountCtx';
import Image from 'next/image';
import { formatExactDateString } from '@/lib/common/date.helpers';
import capitalize from '@/lib/common/capitalize';

// * Component
export default function AccountStudentsDetailsModal() {
  // * Hooks / Context
  const {
    studentDetailsId,
    setStudentDetailsId,
    setStudentEditId,
    getStudentFromId,
  } = useAccount();

  // * Render
  const student = getStudentFromId(studentDetailsId!);
  return (
    <Modal
      isVisible={!!studentDetailsId}
      close={() => setStudentDetailsId(null)}
    >
      {/* Header - Name + Age + Avatar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            className="w-12 h-12 rounded-full"
            src={student?.avatarUrl || ''}
            alt={student?.firstName || ''}
            width={48}
            height={48}
          />

          <div className="ml-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-navy-50">
              {student?.firstName} {student?.lastName}
            </h2>

            <p className="text-sm text-slate-600 dark:text-navy-300">
              {formatExactDateString(student?.birthday!, {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* Details Button */}
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          onClick={() => {
            setStudentDetailsId(null);
            setStudentEditId(student?.id!);
          }}
        >
          Edit
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        {/* Learning Styles */}
        <DetailsItem
          name="Favorite Learning Styles"
          list={student?.learningStyles || []}
        />

        {/* Subjects */}
        {/* TSK */}

        {/* Interests */}
        {/* TSK */}

        {/* Goals */}
        <DetailsItem name="Goals" list={student?.goals || []} />

        {/* Learning Environments */}
        <DetailsItem
          name="Learning Environments"
          list={student?.learningEnvironments || []}
        />

        {/* Learning Resources */}
        <DetailsItem
          name="Learning Resources"
          list={student?.learningResources || []}
        />

        {/* Special Needs */}
        <DetailsItem name="Special Needs" list={student?.specialNeeds || []} />
      </div>
    </Modal>
  );
}

interface IDetailsItem {
  name: string;
  list: string[];
}

function DetailsItem({ name, list }: IDetailsItem) {
  // * Render
  return (
    <div>
      {/* Title */}
      <h4 className="text-sm font-medium text-slate-900 dark:text-navy-50">
        {name}
      </h4>

      {/* List */}
      <div className="mt-2">
        {list?.length > 0 ? (
          <ul className="border border-slate-200 dark:border-navy-500 rounded-md divide-y divide-slate-200 dark:divide-navy-500">
            {list.map((item) => (
              <li
                key={item}
                className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
              >
                <div className="w-0 flex-1 flex items-center">
                  <span className="ml-2 flex-1 w-0 truncate text-slate-600 dark:text-navy-200">
                    {capitalize(item.split('_').join(' '))}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-slate-500 dark:text-navy-300">
            No {name} set
          </p>
        )}
      </div>
    </div>
  );
}
