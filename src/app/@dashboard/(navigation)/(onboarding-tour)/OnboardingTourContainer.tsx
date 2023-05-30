'use client';

import Modal from '@/lib/components/popouts/Modal';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import HomeTour from './HomeTour';
import LessonCreatorTour from './LessonCreatorTour';
import CurriculumRoadmapsTour from './CurriculumRoadmapsTour';

// * Data
const ONBOARDING_PATHS = ['/', '/lesson-creator', '/curriculum-roadmaps'];

// * Component
export default function OnboardingTourContainer() {
  // * Hooks / Context
  const pathname = usePathname();

  // * State
  const [isOnboarding, setIsOnboarding] = useState(false);

  // * Effects
  // Check if user is onboarding for this page
  useEffect(() => {
    let hasMatch = false; // See if the current path matches any of the onboarding paths

    // Check if there is onboarding for this page
    ONBOARDING_PATHS.forEach((path) => {
      path === pathname && (hasMatch = true); // If there is a match, set the state to true
    });

    // Conditional for if there is a match or not
    if (hasMatch) {
      // If there is a match, see if we have already shown the onboarding for this page
      const hasSeenOnboarding = localStorage.getItem('L_OB ' + pathname);

      // If we have not shown the onboarding for this page, set the state to true
      if (!hasSeenOnboarding) {
        setIsOnboarding(true);
        localStorage.setItem('L_OB ' + pathname, 'true');
      } else {
        setIsOnboarding(false);
      }
    } else {
      setIsOnboarding(false); // If there is no match, set the state to false
    }
  }, [pathname]);

  // * Render
  return isOnboarding ? (
    <Modal
      isVisible={isOnboarding}
      close={() => setIsOnboarding(false)}
      closeBtn={true}
      size="sm"
    >
      {pathname === '/' && <HomeTour />}
      {pathname === '/lesson-creator' && <LessonCreatorTour />}
      {pathname === '/curriculum-roadmaps' && <CurriculumRoadmapsTour />}
    </Modal>
  ) : null;
}
