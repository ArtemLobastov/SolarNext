import { z } from 'zod';
export const leadFormSchema = z
  .object({
    firstName: z
      .string()
      .min(3, 'name should be at lest 3 car')
      .max(20, 'name can be 20 caracters max'),
    password: z.string().min(5, 'password should be min 5 symbols').max(20),
    confirmPassword: z
      .string()
      .min(5, 'password should be min 5 symbols')
      .max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type TleadFormSchema = z.infer<typeof leadFormSchema>;
//pattern: {
// value: /^[a-zA-Z\s]+$/,
// message: 'Only letters allowed',
