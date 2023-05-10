import Container from '@/lib/components/layout/Container';
import { PropsWithChildren } from 'react';

// * Component
export default function DashboardContainer({ children }: PropsWithChildren) {
  // * Render
  return (
    <main className="mb-8 mt-16 w-full sm:ml-20 sm:mt-24">
      <Container className="grid max-w-none grid-cols-12 gap-4 gap-y-12 sm:gap-6 sm:gap-y-10 md:gap-8 md:gap-y-6 lg:gap-10 xl:gap-12">
        {children}
      </Container>
    </main>
  );
}
