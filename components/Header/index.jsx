import { useSession } from 'next-auth/react';

import AuthMenu from '@/components//AuthMenu';
import Logo from '@/components//Logo';
import ProfileMenu from '@/components/ProfileMenu';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className='absolute w-full'>
      <div className='container mx-auto'>
        <div className='flex h-20 items-center justify-between'>
          <Logo />
          {session ? <ProfileMenu session={session} /> : <AuthMenu />}
        </div>
      </div>
    </header>
  );
}
