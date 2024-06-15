import { z } from 'zod';

//lead form schema
export const leadFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be 20 characters max')
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ'-]{1,50}$/, 'Invalid format'),
  lastName: z
    .string()
    .trim()
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be 20 characters max')
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ'-]{1,50}$/, 'Invalid format'),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .regex(/^\+?[0-9\s\-().]{7,15}$/, 'Invalid phone Number Format'),
});

export type TleadFormSchema = z.infer<typeof leadFormSchema>;

//login schema
export const loginSchema = z.object({
  email: z.string().email('Email format error'),
  password: z
    .string()
    .min(5, 'Must be at least 5 characters')
    .max(20, 'Must be 20 characters max'),
});

export type TloginSchema = z.infer<typeof loginSchema>;
