import Image from 'next/image';

import AppStack from '@/components/AppStack';

export default function Home() {
  return (
    <section className='flex h-full flex-col items-center justify-center gap-y-5 md:gap-y-10 md:pb-10 xl:justify-start xl:pt-20'>
      <Image src='/img/next-auth.webp' width={255} height={284} alt='Logo' />
      <h1 className='text-center text-5xl font-semibold leading-[72px] md:text-6xl md:leading-[80px]'>
        <span className='inline-block rounded-xl border-2 border-solid border-primary bg-white px-4 leading-[72px] md:leading-[80px]'>
          NEXT.js
        </span>{' '}
        AUTH
      </h1>
      <div className='h-px w-full max-w-xl bg-slate-300' />
      <AppStack />
    </section>
  );
}
