'use server';
import { revalidatePath } from 'next/cache';

import {
  addSaleFormSchema,
  jobRegisterFormSchema,
  leadFormSchema,
  loginSchema,
  userFormSchema,
} from './zod/schemas-types';
import { ProductSold, SaleStatus } from './salesDB';
import prisma from './db';

export interface ActionResult {
  message: string;
}
export async function getFormDataAction(
  prevState: ActionResult,
  data: FormData
): Promise<ActionResult> {
  const formData = Object.fromEntries(data);
  await new Promise((res) => setTimeout(res, 1000));
  //validate data with zod
  const parsedResult = leadFormSchema.safeParse(formData);
  if (!parsedResult.success) {
    return { message: 'Input error' };
  }
  //Special server validation check
  if (parsedResult.data.firstName.includes('a')) {
    return { message: 'Something went wrong. Try again later' };
  }
  // //TODO: if ok - save data to DB

  return {
    message: 'Form successfully sent. We will get in touch with you soon!',
  };
}

export async function loginAction(
  prevState: ActionResult,
  data: FormData
): Promise<ActionResult> {
  const formData = Object.fromEntries(data);
  //validate data with zod
  const parsedResult = loginSchema.safeParse(formData);
  if (!parsedResult.success) {
    return { message: 'Input error' };
  }
  //Special server validation check
  if (parsedResult.data.email.includes('a')) {
    return { message: 'Wrong email' };
  }
  // //TODO: if ok - save data to DB

  return {
    message: 'Success',
  };
}

export async function createUserAction(
  prevState: ActionResult,
  data: {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    role: string;
    activated: boolean;
    registered: Date;
  }
): Promise<ActionResult> {
  //validate data with zod
  const parsedResult = userFormSchema.safeParse(data);
  if (!parsedResult.success) {
    return { message: parsedResult.error.toString() };
  }
  //Special server validation check
  if (parsedResult.data.email.includes('a')) {
    return { message: 'Custom server error' };
  }
  // //TODO: if ok - save data to DB
  //TODO: format data? import { format } from 'date-fns';

  console.log(data);
  //revalidate path
  revalidatePath('/account/dashboard/users');
  return {
    message: 'Success',
  };
}

export async function editUserAction(
  prevState: ActionResult,
  data: {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    role: string;
    activated: boolean;
    registered: Date;
  }
): Promise<ActionResult> {
  //validate data with zod
  const parsedResult = userFormSchema.safeParse(data);
  if (!parsedResult.success) {
    return { message: parsedResult.error.toString() };
  }
  //Special server validation check
  if (parsedResult.data.email.includes('a')) {
    return { message: 'Custom server error' };
  }
  // //TODO: if ok - save user to DB replacing old data

  //TODO: format data? import { format } from 'date-fns';

  console.log(data);
  //revalidate path
  revalidatePath('/account/dashboard/users');
  return {
    message: 'Success',
  };
}

export async function jobRegisterFormAction(
  prevState: ActionResult,
  data: {
    clientName: string;
    clientId: string;
    jobType: string;
    isPanels: boolean;
    isBattery: boolean;
    isBackup: boolean;
    date: Date;
    photos: string;
  }
): Promise<ActionResult> {
  //validate data with zod
  const parsedResult = jobRegisterFormSchema.safeParse(data);
  if (!parsedResult.success) {
    return { message: parsedResult.error.toString() };
  }
  //Special server validation check

  // //TODO: if ok - save data to DB
  //TODO: format data? import { format } from 'date-fns';

  console.log(data);
  //revalidate path
  revalidatePath('/account/dashboard/installations');
  return {
    message: 'Success',
  };
}
// ADD SALE
export async function addSaleAction(
  prevState: ActionResult,
  data: {
    id: string;
    productsSold: ProductSold[];
    clientName: string;
    address: string;
    email: string;
    phone: string;
    status: SaleStatus;
    registered: Date;
    agent: string;
  }
): Promise<ActionResult> {
  // Sleep 1s
  // await new Promise<void>((res) => {
  //   setTimeout(res, 1000);
  // });

  //validate data with zod
  const parsedResult = addSaleFormSchema.safeParse(data);
  if (!parsedResult.success) {
    return { message: parsedResult.error.toString() };
  }
  //Special server validation check
  if (parsedResult.data.email.includes('a')) {
    return { message: 'Custom server error(email has letter A)' };
  }
  // //TODO: if ok - save data to DB
  //TODO: format data? import { format } from 'date-fns';

  console.log(data);
  //revalidate path
  revalidatePath('/account/dashboard/sales');
  return {
    message: 'Success',
  };
}
