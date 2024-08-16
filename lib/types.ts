import { z } from 'zod';
import { ProductSold } from './salesDB';
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

export type TPaymentMethod = 'cash' | 'cheque' | 'transfer' | 'barter';

//create user form schema
export const userFormSchema = z
  .object({
    name: z
      .string({
        required_error: 'Required',
      })
      .min(3, 'Must be at least 3 characters'),
    id: z.string(),
    registered: z.date(),
    role: z
      .string({
        required_error: 'Required',
      })
      .min(3, 'Required'),
    activated: z.boolean(),
    email: z.string().email(),
    phone: z
      .string()
      .regex(/^\+?[0-9\s\-().]{7,15}$/, 'Invalid phone Number Format'),
    password: z
      .string()
      .min(5, 'Must be at least 5 characters')
      .max(20, 'Must be 20 characters max'),
    confirmPassword: z
      .string()
      .min(5, 'Must be at least 5 characters')
      .max(20, 'Must be 20 characters max'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
export type TUserFormSchema = z.infer<typeof userFormSchema>;

//register job form schema
export const jobRegisterFormSchema = z.object({
  clientName: z.string({
    required_error: 'Required',
  }),
  clientId: z.string(),
  date: z.date({
    required_error: 'Required',
  }),
  jobType: z.string({
    required_error: 'Required',
  }),
  isPanels: z.boolean(),
  isBattery: z.boolean(),
  isBackup: z.boolean(),

  photos: z.string({
    required_error: 'Required',
  }),

  // .refine((data) => data.password === data.confirmPassword, {
  //   message: "Passwords don't match",
  //   path: ['confirmPassword'],
});
export type TJobRegisterFormSchema = z.infer<typeof jobRegisterFormSchema>;

//Add sale form schema
export const addSaleFormSchema = z.object({
  clientName: z
    .string({
      required_error: 'Required',
    })
    .min(3, 'Must be at least 3 characters'),
  id: z.string(),
  address: z.string(),
  registered: z.date(),
  status: z.string(),

  email: z.string().email(),
  phone: z
    .string()
    .regex(/^\+?[0-9\s\-().]{7,15}$/, 'Invalid phone Number Format'),
  productsSold: z
    .object({
      productName: z.string(),
      quantity: z.number(),
      price: z.number(),
    })
    .array(),
  agent: z.string(),
});
export type TAddSaleFormSchema = z.infer<typeof addSaleFormSchema>;
