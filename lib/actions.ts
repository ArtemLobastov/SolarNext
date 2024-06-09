'use server';
export default async function getFormDataAction(formData: any) {
  console.log('getting data on a server');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(formData);
  
  //TODO validate data with zod

  //TODO: save data to DB
}
