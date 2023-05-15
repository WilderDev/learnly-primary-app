import { PropsWithChildren } from 'react';
import { UserProvider } from './UserProvider';
import { LessonCreatorProvider } from '@/app/@dashboard/(pages)/lesson-creator/LessonCreatorCtx';

export default function AppProviders({ children }: PropsWithChildren) {
  // * Render
  return (
    <UserProvider>
      <LessonCreatorProvider>{children}</LessonCreatorProvider>
    </UserProvider>
  );
}
