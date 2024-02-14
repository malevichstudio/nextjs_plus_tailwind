import Link from 'next/link';
import { FiLock, FiMail } from 'react-icons/fi';

import { PATHS } from '@/common/constants';
import FormBtn from '@/components/FormBtn';
import Input from '@/components/Input';

export default function LogInForm({ register, errors, isSubmitting, submitForm }) {
  return (
    <div className='w-full'>
      <h2 className='text-center text-3xl font-bold'>Log in</h2>

      <p className='mt-2 text-center'>
        Do not have an account? &nbsp;
        <Link className='cursor-pointer text-link hover:text-linkHover' href={PATHS.signUp}>
          Sign up
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

        <Input
          name='password'
          label='Password'
          type='password'
          icon={<FiLock />}
          placeholder='***********'
          register={register}
          error={errors?.password?.message}
          disabled={isSubmitting}
        />

        <Link href={PATHS.forgotPassword} className='cursor-pointer text-link hover:text-linkHover'>
          Forgot password?
        </Link>

        <FormBtn title='Log in' submitting={isSubmitting} />
      </form>
    </div>
  );
}
