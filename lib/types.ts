import { z } from 'zod';

//lead form schema
export const leadFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, 'First name must be at least 3 characters')
    .max(20, 'First name must be 20 characters max')
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ'-]{1,50}$/, 'Invalid first name format'),
  lastName: z
    .string()
    .trim()
    .min(3, 'Last name must be at least 3 characters')
    .max(20, 'Last name must be 20 characters max')
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ'-]{1,50}$/, 'Invalid last name format'),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .regex(/^\+?[0-9\s\-().]{7,15}$/, 'Invalid phone Number Format'),
});

export type TleadFormSchema = z.infer<typeof leadFormSchema>;

//login schema
export const loginSchema = z.object({
  email: z.string().email('zod email err'),
  password: z.string().min(5, 'Password must be at least 5 characters').max(20),
});

export type TloginSchema = z.infer<typeof loginSchema>;
