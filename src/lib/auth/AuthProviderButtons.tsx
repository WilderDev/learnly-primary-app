'use client';

import Image, { StaticImageData } from 'next/image';
import { useSearchParams } from 'next/navigation';
import facebook from '@/assets/icons/companies/facebook.png';
import google from '@/assets/icons/companies/google.png';
import { toast } from 'sonner';
import baseUrl from '../common/baseUrl';
import { useAuth } from '../components/providers/AuthProvider';

type ProviderT = 'google' | 'facebook' | 'apple';

const providers: { name: ProviderT; src: StaticImageData }[] = [
  {
    name: 'google',
    src: google,
  },
  {
    name: 'facebook',
    src: facebook,
  },
];

interface IProps {
  redirectPath?: string;
}

export default function AuthProviderButtons({ redirectPath }: IProps) {
  // * Router & Params
  const searchParams = useSearchParams(); // Search Params
  const redirectTo = searchParams.get('redirect_to') || '/'; // Redirect To path from Params
  const redirectUrl = baseUrl + (redirectPath ?? redirectTo);

  // * Auth
  const { supabase } = useAuth(); // Supabase Auth Client

  const handleAuth = async (provider: ProviderT) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        queryParams: {
          access_type: provider === 'google' ? 'offline' : 'online',
          prompt: provider === 'google' ? 'consent' : 'none',
        },
        redirectTo: redirectUrl,
      },
    });

    if (error) {
      return toast.error('Error signing in with OAuth');
    }

    toast.success('Signing in with ' + provider);
  };

  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      {providers.map((provider) => (
        <div
          key={provider.name}
          className="col-span-1 flex cursor-pointer justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hocus:bg-slate-50 dark:border-navy-400 dark:bg-navy-700 dark:hocus:bg-navy-600"
          onClick={() => handleAuth(provider.name as ProviderT)}
          tabIndex={0}
        >
          <Image
            src={provider.src}
            alt={provider.name}
            width={20}
            height={20}
            priority={true}
          />
        </div>
      ))}
    </div>
  );
}
