import validator from 'validator';
import { z } from 'zod';

const schema = z
  .object({
    first_name: z
      .string()
      .min(2, 'First name must be atleast 2 characters')
      .max(32, 'First name must be less than 32 characters')
      .regex(new RegExp('^[a-zA-z]+$'), 'No special characters allowed.'),
    last_name: z
      .string()
      .min(2, 'Last name must be atleast 2 characters')
      .max(32, 'Last name must be less than 32 characters')
      .regex(new RegExp('^[a-zA-z]+$'), 'No special characters allowed.'),
    email: z.string().email('Please enter a valid email adress.'),
    phone: z.string().refine(validator.isMobilePhone, {
      message: 'Please enter a valid phone number',
    }),
    password: z
      .string()
      .min(6, 'Password must be atleast 6 characters.')
      .max(52, 'Password must be less than 52 characters.'),
    confirmPassword: z.string(),
    accept: z.literal(true, {
      errorMap: () => ({
        message: 'Please agree to all the terms and conditions',
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ['confirmPassword'],
  });

export default schema;
