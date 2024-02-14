import Link from 'next/link';
import { signOut } from 'next-auth/react';

import { PATHS } from '@/common/constants';

export default function ProfileMenu({ session }) {
  const signOutHandler = () => {
    signOut({ callbackUrl: PATHS.home });
  };

  return (
    <div className='flex items-center gap-4'>
      <Link href={PATHS.profile} className='group flex items-center justify-center gap-2 font-semibold'>
        {session.user.name}
      </Link>

      <button
        className='rounded-md bg-primary px-4 leading-9 text-slate-50 hover:bg-primaryHover'
        onClick={signOutHandler}
      >
        Log out
      </button>
    </div>
  );
}
