import Head from 'next/head';

import { Plate, Section } from '@/components/UI';
import ResetPasswordContainer from '@/containers/resetPassword.container';

export default function ResetPasswordPage({ token }) {
  return (
    <>
      <Head>
        <title>Reset password</title>
      </Head>
      <Section>
        <Plate>
          <ResetPasswordContainer token={token} />
        </Plate>
      </Section>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { token } = query;
  return {
    props: { token },
  };
}
