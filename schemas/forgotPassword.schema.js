import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Please enter a valid email adress.'),
});

export default schema;
