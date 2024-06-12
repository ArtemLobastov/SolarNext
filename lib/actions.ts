'use server';

import { leadFormSchema, TleadFormSchema } from './types';

export interface ActionResult {
  message: string;
}
export default async function getFormDataAction(
  prevState: ActionResult,
  data: FormData
): Promise<ActionResult> {
  const formData = Object.fromEntries(data);
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
    message: 'Form succesfelly sent. We will get in touch with you soon!',
  };
}
