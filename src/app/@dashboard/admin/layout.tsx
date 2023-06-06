import { PropsWithChildren } from 'react';
import DashContainer from '../(layout)/DashContainer';

// * Layout
export default function AdminLayout({ children }: PropsWithChildren) {
  // * Render
  return <DashContainer>{children}</DashContainer>;
}

export const metadata = {
  title: 'Learnly Admin Dashboard',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};
