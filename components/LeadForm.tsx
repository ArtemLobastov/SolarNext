'use client';
import { useFormState } from 'react-dom';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import getFormDataAction from '@/lib/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { TleadFormSchema, leadFormSchema } from '@/lib/types';

export default function LeadForm() {
  const [state, action] = useFormState(getFormDataAction, { message: '' });
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<TleadFormSchema>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: { firstName: '', password: '', confirmPassword: '' },
  });

  const onSubmit = async (data: TleadFormSchema) => {
    //if validation ok - pass formData to server with action
    console.log(await action(data));
    //TODO check validation from server

    // reset();
  };

  const onError = (errors: any) => console.log(errors);

  return (
    <form
      action={action}
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col justify-start items-start gap-y-3 py-3 bg-slate-200 mx-40 px-9"
    >
      {state?.message && state?.message?.length > 0 && (
        <p
          className={
            state.message === 'Server success'
              ? 'text-green-600'
              : 'text-red-500'
          }
        >
          {state.message}
        </p>
      )}
      <input
        type="text"
        placeholder="Name"
        {...register('firstName')}
        className="w-full px-4 py-2 rounded"
      />
      {errors.firstName && (
        <label className="text-red-500">{errors.firstName.message}</label>
      )}

      <input
        type="password"
        placeholder="Password"
        {...register('password')}
        className="w-full px-4 py-2 rounded"
      />
      {errors.password && (
        <label className="text-red-500">{errors.password.message}</label>
      )}
      <input
        type="password"
        placeholder="Confirm password"
        {...register('confirmPassword')}
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
