import Head from 'next/head';
import { getProviders } from 'next-auth/react';
import { useEffect, useState } from 'react';

import Providers from '@/components/Providers';
import { Divider, Plate, Section } from '@/components/UI';
import LogInContainer from '@/containers/logIn.container';

export default function LoginPage() {
  const [providers, setProviders] = useState([]);

  const providersCb = async () => {
    const providers = await getProviders();
    setProviders(Object.values(providers));
  };

  useEffect(() => {
    providersCb();
  }, []);
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Section>
        <Plate>
          <LogInContainer />
          <Divider />
          <Providers providers={providers} label='Login' />
        </Plate>
      </Section>
    </>
  );
}

// export async function getServerSideProps() {
//   const providers = await getProviders();
//   return {
//     props: {
//       providers: Object.values(providers),
//     },
//   };
// }
