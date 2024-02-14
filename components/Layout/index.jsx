import React from 'react';

import Header from '@/components/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='flex flex-1 bg-zinc-100 pt-20'>
        <div className='container mx-auto'>{children}</div>
      </main>
    </>
  );
}
