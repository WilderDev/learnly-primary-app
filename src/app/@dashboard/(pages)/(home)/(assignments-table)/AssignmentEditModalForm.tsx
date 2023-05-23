import { formatDateString } from '@/lib/common/date.helpers';
import Form from '@/lib/components/form/Form';
import Tag from '@/lib/components/ui/Tag';
import { PaperClipIcon } from '@heroicons/react/24/outline';
import { getStatusColor } from '../../lesson-plans/[id]/(assignments)/helpers';

interface IProps {
  assignment: any;
}
export default function AssignmentEditModalForm({ assignment }: IProps) {
  return (
    <section className="relative">
      {/* Header */}
      <div className="px-4 py-5 sm:px-6">
        {/* Title */}
        <h3 className="text-base font-semibold leading-6 text-slate-900 sm:text-lg">
          {assignment.title}
        </h3>

        {/* Description */}
        <p className="mt-1 max-w-2xl text-sm text-slate-500">
          View, edit, or delete this assignment.
        </p>
      </div>

      {/* Body */}
      <div className="border-t border-slate-200 px-4 py-5 sm:px-6">
        {/* Content */}
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          {/* Student (Name & Avatar) */}
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-slate-500">Assigned To</dt>
            <dd className="mt-1 flex items-center">
              {/* Avatar */}
              {/* <Image
            className="mr-2 h-8 w-8 rounded-full ring ring-slate-100"
            src={student.avatar}
            alt={student.name}
            width={32}
            height={32}
          />{' '} */}
              {/* Student */}
              <span className="text-slate-900">{assignment.student.name}</span>
            </dd>
          </div>

          {/* Status */}
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-slate-500">Status</dt>
            <dd className="mt-2 text-sm text-slate-900">
              <Tag
                className="bg-gradient-to-tr"
                colors={getStatusColor(assignment.status).gradient}
              >
                {assignment.status.split('_').join(' ')}
              </Tag>
            </dd>
          </div>

          {/* Assignment Date */}
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-slate-500">Assigned on</dt>
            <dd className="mt-1 text-sm text-slate-900">
              {/* {formatDateString(assignment.assignment_date)} */}
              DATE
            </dd>
          </div>

          {/* Due Date */}
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-slate-500">Due on</dt>
            <dd className="mt-1 text-sm text-slate-900">
              {/* {formatDateString(assignment.due_date)} */}
              DATE
            </dd>
          </div>

          {/* Assignment Description */}
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-slate-500">Description</dt>
            <dd className="mt-1 text-sm text-slate-900">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis eius veritatis harum, repudiandae error, eligendi
              saepe doloribus debitis non earum dolorem similique! Quod
              voluptates necessitatibus, nesciunt harum ex nobis distinctio,
              fugiat, natus iure enim debitis error quas corporis magnam
              doloribus? Veritatis autem.
            </dd>
          </div>

          {/* Subject */}
          <div className="absolute right-0 top-0">
            <dt className="sr-only">Subject</dt>
            <dd className="mt-1 text-sm text-slate-900">
              {/* <Tag
            className="bg-gradient-to-bl"
            colors={getSubjectColor(subject).gradient}
          >
            {subject}
          </Tag> */}
              Subject
            </dd>
          </div>

          {/* Resources */}
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-slate-500">Resources</dt>
            <dd className="mt-1 text-sm text-slate-900">
              {/* Resource List */}
              <ul
                role="list"
                className="divide-y divide-slate-200 rounded-md border border-slate-200"
              >
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-slate-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                      {assignment.title.toLowerCase().split(' ').join('_')}
                      _instructions.pdf
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button className="font-medium text-slate-600 hover:text-navy-500">
                      Download
                    </button>
                  </div>
                </li>

                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-slate-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                      {assignment.title.toLowerCase().split(' ').join('_')}
                      _worksheets.pdf
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button className="font-medium text-slate-600 hover:text-navy-500">
                      Download
                    </button>
                  </div>
                </li>
              </ul>
            </dd>
          </div>

          {/* Actions */}

          {/* <div className="flex items-center justify-between gap-x-6 sm:col-span-2"> */}
          {/* Edit Button */}
          {/* <Button text="Edit" /> */}

          {/* Delete Button */}
          {/* <Button className="bg-red-700 dark:bg-red-700" text="Delete" /> */}
          {/* </div> */}
        </dl>
      </div>
    </section>
  );
}
