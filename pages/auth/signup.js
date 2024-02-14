import Head from 'next/head';
import { getProviders } from 'next-auth/react';
import { useEffect, useState } from 'react';

import Providers from '@/components/Providers';
import { Divider, Plate, Section } from '@/components/UI';
import SignUpContainer from '@/containers/signUp.container';

export default function SignupPage() {
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
        <title>Sign up</title>
      </Head>
      <Section>
        <Plate>
          <SignUpContainer />
          <Divider />
          <Providers providers={providers} label='Signup' />
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
