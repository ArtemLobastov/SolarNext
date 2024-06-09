'use server';
export default async function getFormDataAction(state: any, formData: any) {
  //TODO validate data with zod

  //TODO if not good return error message
  if (formData.firstName.length === 3)
    return {
      message: 'Server error (Invalid input)',
    };
  //TODO: save data to DB

  return {
    message: 'Server success',
  };
}
