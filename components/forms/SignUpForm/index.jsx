import Link from 'next/link';
import { BsTelephone } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';
import { FiLock, FiMail } from 'react-icons/fi';

import { PATHS } from '@/common/constants';
import FormBtn from '@/components/FormBtn';
import Input from '@/components/Input';
import PasswordScore from '@/components/PasswordScore';

export default function SignUpForm({ register, errors, isSubmitting, submitForm, watchPassword }) {
  return (
    <div className='w-full'>
      <h2 className='text-center text-3xl font-bold'>Sign up</h2>

      <p className='mt-2 text-center'>
        Have you already have an account? &nbsp;
        <Link href={PATHS.logIn} className='cursor-pointer text-link hover:text-linkHover'>
          Log in
        </Link>
      </p>

      <form onSubmit={submitForm}>
        <div className='gap-2 md:flex'>
          <Input
            name='first_name'
            label='First name'
            type='text'
            icon={<CiUser />}
            placeholder='First name'
            register={register}
            error={errors?.first_name?.message}
            disabled={isSubmitting}
          />
          <Input
            name='last_name'
            label='Last name'
            type='text'
            icon={<CiUser />}
            placeholder='Last name'
            register={register}
            error={errors?.last_name?.message}
            disabled={isSubmitting}
          />
        </div>
        <Input
          name='email'
          label='Email address'
          type='text'
          icon={<FiMail />}
          placeholder='example@mail.com'
          register={register}
          error={errors?.email?.message}
          disabled={isSubmitting}
        />
        <Input
          name='phone'
          label='Phone number'
          type='text'
          icon={<BsTelephone />}
          placeholder='+(xxx) xxx-xx-xx'
          register={register}
          error={errors?.phone?.message}
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
        <PasswordScore password={watchPassword} />
        <Input
          name='confirmPassword'
          label='Confirm password'
          type='password'
          icon={<FiLock />}
          placeholder='***********'
          register={register}
          error={errors?.confirmPassword?.message}
          disabled={isSubmitting}
        />

        <div className='relative flex items-center pb-4'>
          <input {...register('accept')} type='checkbox' id='accept' className='mr-2 rounded focus:ring-0' />

          <label htmlFor='accept' className='text-sm text-gray-700 '>
            I accept the&nbsp;
            <button type='button' className='text-link hover:text-linkHover hover:underline'>
              terms
            </button>
            &nbsp;and&nbsp;
            <button type='button' className='text-link hover:text-linkHover hover:underline'>
              privacy policy
            </button>
          </label>
          {errors?.accept && <p className='absolute bottom-0 text-xs text-error'>{errors?.accept?.message}</p>}
        </div>

        <FormBtn title='Sign up' submitting={isSubmitting} />
      </form>
    </div>
  );
}
