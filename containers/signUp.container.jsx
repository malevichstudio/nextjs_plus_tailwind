import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { postRegister } from '@/axios-api';
import { PATHS } from '@/common/constants';
import SignUpForm from '@/components/forms/SignUpForm';
import { SIGN_UP_SCHEMA } from '@/schemas';

const DEFAULT_VALUES = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  accept: false,
};

export default function SignUpContainer() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(SIGN_UP_SCHEMA),
    defaultValues: DEFAULT_VALUES,
  });

  const watchPassword = watch('password');

  const onSubmit = async (values, e) => {
    e.preventDefault();
    try {
      const data = await postRegister(values);
      reset();
      toast.success(data.message);
      router.push(PATHS.home);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <SignUpForm
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      submitForm={handleSubmit(onSubmit)}
      watchPassword={watchPassword}
    />
  );
}
