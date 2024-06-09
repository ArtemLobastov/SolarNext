'use client';
import { Button } from './ui/button';
import {
  useForm,
  SubmitHandler,
  useFormState,
  FieldValues,
} from 'react-hook-form';
import getFormDataAction from '@/lib/actions';
interface IFormData {
  firstName: string;
  password: string;
  confirmPassword: string;
}

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<IFormData>();

  const onSubmit = async (data: FieldValues) => {
    //TODO validate with zod

    //if validation ok - pass formData to server with action
    console.log('submittimg data from client');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    getFormDataAction(data);
    //TODO check validation from server
    reset();
  };

  const onError = (errors: any) => console.log(errors);

  return (
    <form
      action={getFormDataAction}
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col justify-start items-start gap-y-3 py-3 bg-slate-200 mx-40 px-9"
    >
      <input
        type="text"
        placeholder="Name"
        {...register('firstName', {
          required: 'this field is required',
          pattern: {
            value: /^[a-zA-Z\s]+$/,
            message: 'Only letters allowed',
          },
        })}
        className="w-full px-4 py-2 rounded"
      />
      {errors.firstName && (
        <label className="text-red-500">{errors.firstName.message}</label>
      )}

      <input
        type="password"
        placeholder="Password"
        {...register('password', {
          required: 'this field is required',
          minLength: { value: 5, message: 'min 5 symbols' },
        })}
        className="w-full px-4 py-2 rounded"
      />
      {errors.password && (
        <label className="text-red-500">{errors.password.message}</label>
      )}
      <input
        type="password"
        placeholder="Confirm password"
        {...register('confirmPassword', {
          required: 'this field is required',
          minLength: { value: 5, message: 'min 5 symbols' },
          validate: (value) => value === getValues('password') || 'Must match',
        })}
        className="w-full px-4 py-2 rounded"
      />
      {errors.confirmPassword && (
        <label className="text-red-500">{errors.confirmPassword.message}</label>
      )}

      <Button
        type="submit"
        variant={'outline'}
        className="w-full py-2"
        disabled={isSubmitting}
      >
        Send nudes
      </Button>
    </form>
  );
}
