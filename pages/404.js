import Head from 'next/head';
import Image from 'next/image';

import { Plate, Section } from '@/components/UI';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <Section>
        <Plate>
          <div className='flex flex-col items-center'>
            <Image src='/img/404.png' width={256} height={256} alt='Not found' />
            <h2 className='text-4xl'>Not found</h2>
          </div>
        </Plate>
      </Section>
    </>
  );
}
