import Link from 'next/link';

import { PATHS } from '@/common/constants';
import LogoIcon from '@/public/img/Logo.svg';

export default function Logo() {
  return (
    <Link className='flex items-center' href={PATHS.home}>
      <LogoIcon className='rotate-25 h-12 w-12 rotate-12 fill-primary pr-2' />
      <p className='font-bold uppercase'>Auth</p>
    </Link>
  );
}
