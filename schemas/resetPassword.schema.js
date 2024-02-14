import { z } from 'zod';

const schema = z
  .object({
    password: z
      .string()
      .min(6, 'Password must be atleast 6 characters.')
      .max(52, 'Password must be less than 52 characters.'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ['confirmPassword'],
  });

export default schema;
