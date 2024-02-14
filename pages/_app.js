import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';

import Layout from '@/components/Layout';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Next Auth App</title>
      </Head>
      <SessionProvider session={session}>
        <ToastContainer
          position='top-left'
          autoClose={5000}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
