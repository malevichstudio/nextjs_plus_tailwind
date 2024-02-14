import Head from 'next/head';

import { Plate, Section } from '@/components/UI';
import ForgotPasswordContainer from '@/containers/forgotPassword.container';

export default function ForgotPasswordPage() {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <Section>
        <Plate>
          <ForgotPasswordContainer />
        </Plate>
      </Section>
    </>
  );
}
