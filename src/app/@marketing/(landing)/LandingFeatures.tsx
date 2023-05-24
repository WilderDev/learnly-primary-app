import Image from 'next/image';

import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline';
import dashboardImage from '@/assets/images/brand/dashboard.png';

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
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className="mt-4 text-lg text-slate-500 dark:text-navy-200">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white dark:text-navy-50 shadow-sm ring-1 ring-green-600 hover:bg-green-700 hover:ring-green-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-slate-200 dark:border-navy-600 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-slate-500 dark:text-navy-100">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                    diam. Sit orci risus aenean curabitur donec aliquet. Mi
                    venenatis in euismod ut.&rdquo;
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
                      TSK TSK, homeschooling
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
                src={dashboardImage}
                alt=""
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
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className="mt-4 text-lg text-slate-500 dark:text-navy-100">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white dark:text-navy-50 shadow-sm ring-1 ring-green-600 dark:ring-green-500 hocus:bg-green-700 dark:hocus:bg-gren-600 hocus:ring-green-700 dark:hocus:ring-green-600"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black dark:ring-navy-50 ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={dashboardImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
