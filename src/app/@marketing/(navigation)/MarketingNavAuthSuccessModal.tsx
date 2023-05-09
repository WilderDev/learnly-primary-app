'use client';

import gmail from '@/assets/icons/gmail.png';
import icloud from '@/assets/icons/icloud.png';
import outlook from '@/assets/icons/outlook.png';
import yahoo from '@/assets/icons/yahoo.png';
import Modal from '@/lib/components/popouts/Modal';
import Image from 'next/image';

const emailProviders = [
  {
    name: 'Gmail',
    image: gmail,
    href: 'https://mail.google.com/mail/u/0/#inbox',
  },
  {
    name: 'Yahoo',
    image: yahoo,
    href: 'https://mail.yahoo.com/',
  },
  {
    name: 'Outlook',
    image: outlook,
    href: 'https://outlook.live.com/mail/inbox',
  },
  {
    name: 'iCloud',
    image: icloud,
    href: 'https://www.icloud.com/mail/',
  },
];

// * Props
interface IProps {
  isOpen: boolean;
  close: () => void;
}

// * Component
export default function MarketingNavAuthSuccessModal({
  isOpen,
  close,
}: IProps) {
  return (
    <Modal size="xs" isVisible={isOpen} close={close} rounded="lg" shadow="lg">
      {/* Message */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-center text-lg font-semibold text-green-600 dark:text-green-500 md:text-xl">
          We&apos;ve sent you a sign in link to your email address. 🎉
        </h3>
        <p className="mt-1 text-center text-sm text-slate-800 dark:text-navy-100 md:text-base">
          Please check your inbox and click the link to sign in.
        </p>
      </div>

      {/* Divider */}
      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-300 dark:border-navy-400" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-slate-500 dark:bg-navy-900 dark:text-navy-200">
            Open Your Email
          </span>
        </div>
      </div>

      {/* Email Providers */}
      <div className="mt-6 flex flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center space-x-8">
          {emailProviders.map((p) => (
            <a
              className="transition-transform hocus:scale-125"
              href={p.href}
              key={p.name}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                className="bg-transparent"
                src={p.image}
                alt={p.name}
                width={32}
                height={32}
              />
            </a>
          ))}

          {process.env.NODE_ENV === 'development' && (
            <a
              className="transition-transform hocus:scale-125"
              href="http://localhost:54324/"
            >
              Dev Email Client
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
