'use server';

import { TleadFormSchema, leadFormSchema } from './types';

export default async function getFormDataAction(prevState: any, formData: any) {
  //TODO validate data with zod
  const parsedResult = leadFormSchema.safeParse(formData);
  if (!parsedResult.success) {
    return { message: 'Server error' };
  }
  if (parsedResult.data.firstName.includes('a')) {
    return { message: 'Invalid name' };
  }
  // //TODO: if ok - save data to DB

  return {
    message: 'Server success',
  };
}
