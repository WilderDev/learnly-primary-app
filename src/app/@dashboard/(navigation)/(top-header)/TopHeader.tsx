import Container from '@/lib/components/layout/Container';
import TopHeaderItems from './TopHeaderItems';

export default function TopHeader() {
  return (
    <nav
      className="fixed right-0 top-0 z-20 hidden h-16 border-b bg-white dark:border-navy-700 dark:bg-navy-800 sm:flex sm:w-[calc(100%-80px)]"
      aria-label="Top Header"
    >
      {/* Header Items */}
      <Container className="mx-0 flex w-full max-w-none items-center justify-between">
        {/* Search Input */}
        {/* <MainHeaderSearch /> */}
        {/* TSK */}

        {/* Header Items */}
        <TopHeaderItems />
      </Container>
    </nav>
  );
}
