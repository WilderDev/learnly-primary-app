import Container from '@/lib/components/layout/Container';
import LandingSectionHeader from './LandingSectionHeader';

const faqs = [
  [
    {
      question: 'What subjects are covered by your learning platform?',
      answer:
        'Our learning platform offers a wide range of subjects including Math, Science, English, Social Studies, Creative Arts, Mindfulness, Entrepreneurship, Physical Education, and more. We give you the power to create a curriculum and lesson plans for any subject imaginable. Really.',
    },
    {
      question: 'Is your learning platform suitable for all grade levels?',
      answer:
        'We provide a plethora of lessons and tools for all grade levels, but we focus primarily on Pre-K through 5th grade. We also offer a variety of tools and resources to help you create a curriculum and lesson plans for any grade level.',
    },
    {
      question: 'What kind of technology is needed to access your platform?',
      answer:
        'All you need is a device with an internet connection such as a laptop, desktop computer, tablet, or smartphone. You can access our platform from anywhere, at any time.',
    },
    {
      question:
        'How do I ensure that my child is getting a quality education through homeschooling?',
      answer:
        'Learnly is carefully designed to align with national and state standards to ensure that your child is receiving a quality education. We also provide personalized support and guidance to help you and your child get the most out of our platform.',
    },
  ],
  [
    {
      question: 'Is this self-paced or do we need to follow a set schedule?',
      answer:
        'Everything we do is created to make it easy for you to be flexible and make homeschooling effortless through lifes ups and downs... which means that everything can be completed at your speed. However, we do provide suggested timelines and scheduling tools to help you and your children stay on track and complete the courses in a reasonable amount of time.',
    },
    {
      question:
        'Is this platform suitable for all types of learners and homeschool philosophies?',
      answer:
        'Yes, our platform is designed to cater to all types of learners, teaching styles, homeschool philosophies, and beyond. We offer a variety of tools and resources that cater to different learning styles and abilities so there is one less thing you need to worry about :)',
    },
    {
      question: 'How will I know if this platform will work for my child?',
      answer:
        'It is clear that every child is unique, which is why we offer a free trial period to allow you to test the platform and see if it works for your child. We also have a team of experts who can guide you and provide personalized support to ensure that your child is getting the most out of our platform.',
    },
  ],
  [
    {
      question:
        'What if I need to take a break from homeschooling or switch to a traditional school?',
      answer:
        "We understand that life can be unpredictable, which is why we offer a flexible platform that allows you to take breaks and resume homeschooling whenever you need to. If you decide to switch to a traditional school, our platform can still be a valuable resource to supplement your child's education. And you can cancel at any time, no questions asked.",
    },
    {
      question: 'What kind of support do you offer for parents?',
      answer:
        'As homeschool parents ourselves, we know that homeschooling can be challenging, which is why we offer support for parents as well. We have a team of experts and multiple places throughout the app to answer any questions and provide guidance on how to effectively homeschool your child.',
    },
    {
      question:
        'Will my child miss out on socialization opportunities if they are homeschooled?',
      answer:
        'Homeschooling does not mean that your child will miss out on socialization opportunities. Our platform offers online communities and forums where students can connect with other homeschoolers and participate in group discussions and activities.',
    },
  ],
];

export default function LandingFAQ() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-slate-200 py-20 dark:border-navy-700 sm:py-32"
    >
      {/* Header */}
      <LandingSectionHeader
        title="I'm Sure You Have Questions"
        subtitle="We are here to help"
        description="If you have anything else you want to ask, reach out to us."
      />

      {/* Container */}
      <Container className="max-w-7xl">
        {/* List of FAQs */}
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-slate-900 dark:text-navy-50">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700 dark:text-navy-200">
                      {faq.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
