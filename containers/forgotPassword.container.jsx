import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { postForgotPassword } from '@/axios-api';
import { PATHS } from '@/common/constants';
import ForgotPasswordForm from '@/components/forms/ForgotPasswordForm';
import { FORGOT_PASSWORD_SCHEMA } from '@/schemas';

export default function ForgotPasswordContainer() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(FORGOT_PASSWORD_SCHEMA),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values, e) => {
    e.preventDefault();
    const { email } = values;
    try {
      const data = await postForgotPassword({ email });
      toast.success(data.message);
      router.push(PATHS.home);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <ForgotPasswordForm
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      submitForm={handleSubmit(onSubmit)}
    />
  );
}
