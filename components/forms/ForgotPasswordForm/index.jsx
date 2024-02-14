import Link from 'next/link';
import { FiMail } from 'react-icons/fi';

import { PATHS } from '@/common/constants';
import FormBtn from '@/components/FormBtn';
import Input from '@/components/Input';

export default function ForgotPasswordForm({ register, errors, isSubmitting, submitForm }) {
  return (
    <div className='w-full'>
      <h2 className='text-center text-3xl font-bold'>Forgot password</h2>

      <p className='mt-2 text-center'>
        Log in instead &nbsp;
        <Link href={PATHS.logIn} className='cursor-pointer text-link hover:text-linkHover'>
          Log in
        </Link>
      </p>

      <form onSubmit={submitForm}>
        <Input
          name='email'
          label='Email address'
          type='text'
          icon={<FiMail />}
          placeholder='example@emaple.com'
          register={register}
          error={errors?.email?.message}
          disabled={isSubmitting}
        />
        <FormBtn title='Send email' submitting={isSubmitting} />
      </form>
    </div>
  );
}
