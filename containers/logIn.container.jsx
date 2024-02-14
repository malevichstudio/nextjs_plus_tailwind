import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { PATHS } from '@/common/constants';
import LogInForm from '@/components/forms/LoginForm';
import { LOG_IN_SCHEMA } from '@/schemas';

export default function LogInContainer() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(LOG_IN_SCHEMA),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values, e) => {
    e.preventDefault();
    const { email, password } = values;

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res.error) {
      return toast.error(res.error);
    } else {
      return router.push(PATHS.profile);
    }
  };

  return (
    <LogInForm register={register} errors={errors} isSubmitting={isSubmitting} submitForm={handleSubmit(onSubmit)} />
  );
}
