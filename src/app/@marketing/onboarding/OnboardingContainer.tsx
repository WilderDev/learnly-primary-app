'use client';

import OnboardingProgressBar from './OnboardingProgressBar';
import { useState } from 'react';
import OnboardingProfileForm from './OnboardingProfileForm';
import OnboardingPreferencesForm from './OnboardingPreferencesForm';
import OnboardingChildrenForm from './OnboardingChildrenForm';
import Box from '@/lib/components/containers/Box';
import Container from '@/lib/components/layout/Container';
import VerticleScrollingGrid from '@/lib/components/containers/verticleScrollingGrid';
import OnboardingTestimonialBox from './OnboardingTestimonialBox';

// * Data
const testimonials = [
  {
    name: 'Judith Black',
    role: 'Montessori Homeschool Mom',
    quote:
      'I’ve tried several homeschool platforms, and Learnly is by far the best. The lessons are engaging, the platform is easy to use, and the support team is responsive and helpful.',
    image: 'http://source.unsplash.com/200x200/?profile,happy,female',
  },
  {
    name: 'Jenny Smith',
    role: 'Homeschool Mom',
    quote: 'What an amazing platform! It’s so easy to use!',
    image: 'http://source.unsplash.com/200x200/?profile,happy,female,family',
  },
  {
    name: "Wendy O'Neil",
    role: 'Homeschool Mom',
    quote:
      'Learnly has been a lifesaver for our family. I love that I can set up my kids’ lessons for the week and then let them work independently. It’s so easy to use!',
    image: 'http://source.unsplash.com/200x200/?profile,happy,female,outdoors',
  },
  {
    name: 'John Smith',
    role: 'Proud Homeschool Dad',
    quote:
      'I’ve tried several homeschool platforms, and Learnly is by far the best. The lessons are engaging, the platform is easy to use, and the support team is responsive and helpful.',
    image: 'http://source.unsplash.com/200x200/?profile,happy,male,outdoors',
  },
  {
    name: 'Mackenzie Joplin',
    role: 'Unschooling Parent',
    quote:
      "I CAN'T BELIEVE I'VE FOUND THIS! I've been looking for something like this for years. I'm so excited to see where we go!",
    image: 'http://source.unsplash.com/200x200/?profile,happy,female,smile',
  },
  {
    name: 'Bobby Augustina',
    role: 'Charlotte Mason Mom',
    quote:
      'I love that I can set up my kids’ lessons for the week and then let them work independently. It’s so easy to use! 🙏',
    image: 'http://source.unsplash.com/200x200/?profile,female,teacher',
  },
  {
    name: 'Suzanne Werkheiser',
    role: 'Homeschool Mom',
    quote: 'Total game changer! I want to tell everyone I know about this 🤗!!',
    image: 'http://source.unsplash.com/200x200/?profile,female,smile',
  },
  {
    name: 'Gwendolyn Mackenthun',
    role: 'Homeschool Mom of 5, Blogger, and Homeschool Coach',
    quote:
      'Wow! Where was this for my oldest? I love how easy it is to use and how it keeps track of everything for me. I can’t wait to use this with my younger kids!',
    image:
      'http://source.unsplash.com/200x200/?profile,happy,female,teacher,family,smart',
  },
];

export default function OnboardingContainer() {
  // * State
  const [currStep, setCurrStep] = useState(1);

  // * Render
  return (
    <>
      {/* Testimonials Left */}
      <VerticleScrollingGrid
        className="h-full max-h-screen w-full left-0 xl:w-4/12 2xl:w-3/12 absolute 2xl:relative opacity-20"
        colsAndColItems={[{ list: testimonials, msPerPixel: 15 }]}
        component={OnboardingTestimonialBox}
      />

      {/* Content */}
      <Container className="space-y-6 z-30 flex w-full h-full max-w-3xl items-center flex-col justify-center">
        {/* Progress */}
        <OnboardingProgressBar currStep={currStep} setStep={setCurrStep} />

        {/* Content */}
        <Box size="lg" shadow="xl" rounded="xl">
          {/* Step 1 - Profile */}
          {currStep === 1 && (
            <OnboardingProfileForm
              next={() => setCurrStep((prev) => prev + 1)}
            />
          )}

          {/* Step 2 - Preferences */}
          {currStep === 2 && (
            <OnboardingPreferencesForm
              next={() => setCurrStep((prev) => prev + 1)}
            />
          )}

          {/* Step 3 - Children */}
          {currStep === 3 && (
            <OnboardingChildrenForm
              next={() => setCurrStep((prev) => prev + 1)}
            />
          )}
        </Box>
      </Container>

      {/* Testimonials Right */}
      <VerticleScrollingGrid
        className="h-full max-h-screen absolute right-0 hidden xl:block xl:w-4/12 2xl:w-3/12 2xl:relative opacity-20"
        colsAndColItems={[{ list: testimonials.reverse(), msPerPixel: 15 }]}
        component={OnboardingTestimonialBox}
      />
    </>
  );
}
