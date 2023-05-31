'use client';

import cn from '@/lib/common/cn';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Why is personalized education important in homeschooling?',
    answer:
      'Personalized education allows homeschoolers to learn at their own pace, focusing on their strengths and interests while also addressing their challenges. This approach can motivate learners and help them reach their full potential by adapting the curriculum to their individual needs.',
  },
  {
    question: 'What flexibility does homeschooling offer?',
    answer:
      'Homeschooling provides flexibility in various ways. It allows families to set their own schedule, choose the curriculum and learning style that best suits their child, and even adapt the learning environment. It also enables learners to progress at their own pace.',
  },
  {
    question: 'How can I ensure my child is getting a balanced education?',
    answer:
      'Balance in education can be achieved by incorporating a mix of academic, physical, and social activities in the homeschool schedule. This includes a wide range of subjects, extracurricular activities, and opportunities for social interaction.',
  },
  {
    question: 'What resources are available for homeschooling parents?',
    answer:
      'There are many resources available for homeschooling parents including online platforms, textbooks, libraries, local homeschooling groups, and educational websites. Many of these resources provide curriculum guides, lesson plans, and teaching strategies.',
  },
  {
    question: "Can homeschooling cater to my child's special needs?",
    answer:
      "Yes, homeschooling can be an excellent option for children with special needs. It allows for a highly customizable learning environment that can be adapted to meet a child's specific needs. However, parents may also need to seek out additional resources and support.",
  },
  {
    question:
      "How can I incorporate socialization into my child's homeschooling routine?",
    answer:
      "Socialization can be integrated into homeschooling through extracurricular activities, homeschooling co-ops, sports teams, volunteering opportunities, and even virtual meetups with other homeschoolers. It's also possible to schedule playdates or outings with other children.",
  },
  {
    question: 'How does homeschooling prepare children for the future?',
    answer:
      'Homeschooling can help children develop critical thinking skills, self-discipline, and a love for learning that can benefit them in the future. It can also provide them with a flexible learning environment that encourages creativity and innovation.',
  },
  {
    question:
      'Can homeschoolers participate in extracurricular activities and sports?',
    answer:
      'Yes, homeschoolers can certainly participate in extracurricular activities and sports. Many communities have sports teams, clubs, or groups specifically designed for homeschoolers. Additionally, some public schools allow homeschoolers to participate in their extracurricular activities.',
  },
  {
    question: 'What are the legal requirements for homeschooling?',
    answer:
      "Legal requirements for homeschooling vary by location. Generally, parents may need to submit a notice of intent to homeschool, maintain records of instruction and progress, and meet certain educational qualifications. It's best to consult local regulations.",
  },
  {
    question: 'What support is available for parents new to homeschooling?',
    answer:
      'There are numerous supports available for new homeschooling parents. These include local homeschooling groups, online communities, homeschooling conventions, and educational consultants. These resources can provide advice, share experiences, and offer encouragement.',
  },
];

// * Component
export default function HelpCenterFAQ() {
  // * Render
  return (
    <dl className="space-y-6 divide-y divide-slate-900/10">
      {faqs.map((faq, idx) => (
        <Disclosure
          className={cn(idx > 0 && 'pt-6')}
          as="div"
          key={faq.question}
        >
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-slate-900">
                  <span className="text-base font-semibold leading-7">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
}
