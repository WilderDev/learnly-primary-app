import { PropsWithChildren } from 'react';
import { UserProvider } from './UserProvider';
import { InterceptionModalProvider } from '@/app/@modal/InterceptionModalCtx';
import { LessonCreatorProvider } from '@/app/@dashboard/(pages)/lesson-creator/LessonCreatorCtx';

export default function AppProviders({ children }: PropsWithChildren) {
  // * Render
  return (
    <InterceptionModalProvider>
      <UserProvider>
        <LessonCreatorProvider>{children}</LessonCreatorProvider>
      </UserProvider>
    </InterceptionModalProvider>
  );
}
