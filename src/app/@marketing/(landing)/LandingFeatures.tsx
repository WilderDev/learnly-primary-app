import Image from 'next/image';

import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline';
import learnlyLessonCreator from '@/assets/screenshots/learnly-lesson-creator.png';
import learnlyChat from '@/assets/screenshots/learnly-chat.png';
import learnlyCurriculum from '@/assets/screenshots/learnly-curriculum.png';
import learnlySchedule from '@/assets/screenshots/learnly-schedule.png';
import learnlyLessonModal from '@/assets/screenshots/learnly-lesson-modal.png';
import Link from 'next/link';

// * Component
export default function LandingFeatures() {
  // * Render
  return (
    <div className="relative overflow-hidden bg-white dark:bg-navy-900 pb-32 pt-16">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 dark:bg-green-500">
                  <InboxIcon
                    className="h-8 w-8 text-white dark:text-navy-50"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-navy-50">
                  Create Personalized Lesson Plans in 30 Seconds
                </h2>
                <p className="mt-4 text-lg text-slate-500 dark:text-navy-200">
                  No longer will you stay up late at night after an exhausting
                  day of teaching, trying to figure out what to teach tomorrow.
                  With Learnly, you can create a personalized lesson plan in 30
                  seconds. Just select the topics you want to teach, and Learnly
                  will automatically generate a lesson plan for you.
                </p>
                <div className="mt-6">
                  <Link
                    className="inline-flex items-center space-x-2 transition-all duration-300 hocus:shadow-md rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white dark:text-navy-50 shadow-sm ring-1 ring-green-600 hover:bg-green-700 hover:ring-green-700"
                    href="/onboarding"
                  >
                    Get started for free →
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-slate-200 dark:border-navy-600 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-slate-500 dark:text-navy-100">
                    &ldquo;The lesson created literally saves me 10 hours every
                    week. I can&apos;t believe this exists!!&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-6 w-6 rounded-full"
                        src="/static/icons/avatars/bear.png"
                        alt=""
                        width={512}
                        height={512}
                      />
                    </div>
                    <div className="text-base font-medium text-slate-700 dark:text-navy-200">
                      Marie M. - Learnly Enthusiast
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black dark:ring-navy-50 ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={learnlyLessonCreator}
                alt="Learnly Lesson Creator"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 lg:mt-32">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 dark:bg-green-500">
                  <SparklesIcon
                    className="h-8 w-8 text-white dark:text-navy-50"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-navy-50">
                  Engaging & Science-Backed Curriculums
                </h2>
                <p className="mt-4 text-lg text-slate-500 dark:text-navy-100">
                  Choose from a variety of curriculums that are designed to be
                  engaging and effective. Learnly curriculums are designed by
                  experts and backed by science. You can also create your own
                  curriculum and share it with the community.
                </p>
                <div className="mt-6">
                  <Link
                    className="inline-flex rounded-lg transition-all duration-300 hocus:shadow-md bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white dark:text-navy-50 shadow-sm ring-1 ring-green-600 dark:ring-green-500 hocus:bg-green-700 dark:hocus:bg-gren-600 hocus:ring-green-700 dark:hocus:ring-green-600"
                    href="/onboarding"
                  >
                    I&apos;m ready to try it out! 🚀
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black dark:ring-navy-50 ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={learnlyCurriculum}
                alt="Learnly Curriculum roadmap"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
