import Image from 'next/image';

import JWTIcon from '@/public/img/jwt.svg';
import MongoIcon from '@/public/img/mongo.svg';
import NextjsIcon from '@/public/img/next.svg';
import TailwindIcon from '@/public/img/tailwind.svg';

export default function AppStack() {
  return (
    <div className='flex gap-4 md:gap-6'>
      <NextjsIcon className='h-12 w-12 fill-slate-500' />
      <MongoIcon className='h-12 w-12' />
      <JWTIcon className='h-12 w-12' />
      <TailwindIcon className='h-12 w-12' />
      <Image src='/img/rhf.png' width={48} height={48} alt='rhf' />
    </div>
  );
}
