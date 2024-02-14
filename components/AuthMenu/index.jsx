import Link from 'next/link';
import { useRouter } from 'next/router';

import { PATHS } from '@/common/constants';

export default function AuthMenu() {
  const router = useRouter();

  return (
    <div className='flex items-center gap-x-4'>
      {router.asPath !== PATHS.logIn && (
        <Link className='leading-9 hover:text-primary' href={PATHS.logIn}>
          LogIn
        </Link>
      )}
      {router.asPath !== PATHS.signUp && (
        <Link className='rounded-md bg-primary px-4 leading-9 text-slate-50 hover:bg-primaryHover' href={PATHS.signUp}>
          SignUp
        </Link>
      )}
    </div>
  );
}
