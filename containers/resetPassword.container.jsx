import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { postResetPassword } from '@/axios-api';
import { PATHS } from '@/common/constants';
import ResetPasswordForm from '@/components/forms/ResetPasswordForm';
import { RESET_PASSWORD_SCHEMA } from '@/schemas';

export default function ResetPasswordContainer({ token }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(RESET_PASSWORD_SCHEMA),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const watchPassword = watch('password');

  const onSubmit = async (values, e) => {
    e.preventDefault();
    try {
      const data = await postResetPassword({ password: values.password, token });
      reset();
      toast.success(data.message);
      router.push(PATHS.logIn);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <ResetPasswordForm
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      submitForm={handleSubmit(onSubmit)}
      watchPassword={watchPassword}
    />
  );
}
