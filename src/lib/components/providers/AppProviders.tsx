import { PropsWithChildren } from 'react';
import { UserProvider } from './UserProvider';
import { InterceptionModalProvider } from '@/app/@modal/InterceptionModalCtx';

export default function AppProviders({ children }: PropsWithChildren) {
  // * Render
  return (
    <InterceptionModalProvider>
      <UserProvider>{children}</UserProvider>
    </InterceptionModalProvider>
  );
}
