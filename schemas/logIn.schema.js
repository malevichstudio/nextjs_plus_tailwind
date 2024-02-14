import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Please enter a valid email adress.'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters.')
    .max(32, 'Password must be less than 32 characters.'),
});

export default schema;
