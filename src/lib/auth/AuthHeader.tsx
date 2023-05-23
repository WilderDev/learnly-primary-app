'use client';

import Image from 'next/image';

// * Props
interface IProps {
  isSignIn: boolean;
  toggle: () => void;
}

// * Component
export default function AuthHeader({ isSignIn, toggle }: IProps) {
  // * Render
  return (
    <header>
      {/* Logo */}
      <Image
        className="mx-auto h-16 w-16"
        src="/static/icons/brand/favicon_512x512.png"
        alt="Learnly"
        width={512}
        height={512}
        priority={true}
      />

      {/* Title */}
      <h1 className="mt-4 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-navy-50">
        {isSignIn ? 'Sign In to Your Account' : 'Start Your Free Trial'}
      </h1>

      {/* Alternative Action Text */}
      <p className="mt-2 text-center text-sm text-slate-600 dark:text-navy-200">
        Or{' '}
        <button
          className="font-medium text-green-600 hocus:text-green-500 dark:text-green-500 dark:hocus:text-green-400"
          type="button"
          onClick={toggle}
        >
          {isSignIn ? 'start your free trial' : 'sign in to your account'}
        </button>
      </p>
    </header>
  );
}
