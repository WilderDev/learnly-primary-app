import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  isSignIn?: boolean;
}

export default function AuthHeader({ isSignIn = true }: IProps) {
  return (
    <header>
      {/* Logo */}
      <Image
        className="mx-auto h-12 w-12"
        src="/favicon/logo-res.png"
        alt="Learnly"
        width={180}
        height={180}
        priority={true}
      />

      {/* Title */}
      <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-navy-50">
        {isSignIn ? 'Sign In to Your Account' : 'Start Your Free Trial'}
      </h1>

      {/* Alternative Action Text */}
      <p className="mt-2 text-center text-sm text-slate-600 dark:text-navy-200">
        Or{' '}
        <Link
          href={isSignIn ? '/subscription' : '/sign-in'}
          className="font-medium text-green-600 hocus:text-green-500 dark:text-green-500 dark:hocus:text-green-400"
        >
          {isSignIn ? 'start your free trial' : 'sign in to your account'}
        </Link>
      </p>
    </header>
  );
}
