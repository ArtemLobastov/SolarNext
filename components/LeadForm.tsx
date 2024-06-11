'use client';
import { useFormState } from 'react-dom';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import getFormDataAction, { ActionResult } from '@/lib/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { TleadFormSchema, leadFormSchema } from '@/lib/types';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from './ui/use-toast';

export default function LeadForm() {
  const [state, action] = useFormState(getFormDataAction, { message: '' });
  const form = useForm<TleadFormSchema>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  });

  const onSubmit = async (data: TleadFormSchema) => {
    try {
      // если валидация успешна, отправляем данные на сервер с помощью action
      const result: any = await action(data);

      // Проверка на наличие поля message в результате
      if (
        result &&
        result.message ===
          'Form succesfelly sent. We will get in touch with you soon!'
      ) {
        toast({
          title: 'You successfully submitted the following values:',
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(data, null, 2)}
              </code>
            </pre>
          ),
        });
        form.reset();
      } else {
        toast({
          title: 'Submission error',
          description: result.message,
        });
      }
    } catch (error) {
      toast({
        title: 'Submission error',
        description: 'An unexpected error occurred. Please try again later.',
      });
    }
  };

  const onError = (errors: any) => console.log(errors);

  return (
    <>
      {/* <form
        action={action}
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="flex flex-col justify-start items-start gap-y-3 py-3 bg-slate-200 mx-40 px-9"
      >
        {state?.message && state?.message?.length > 0 && (
          <p
            className={
              state.message ===
              'Form succesfelly sent. We will get in touch with you soon!'
                ? 'text-green-600'
                : 'text-red-500'
            }
          >
            {state.message}
          </p>
        )}
        <input
          type="text"
          placeholder="First Name"
          {...form.register('firstName')}
          className="w-full px-4 py-2 rounded"
        />
        {form.formState.errors.firstName && (
          <label className="text-red-500">
            {form.formState.errors.firstName.message}
          </label>
        )}
        <input
          type="text"
          placeholder="Last Name"
          {...form.register('lastName')}
          className="w-full px-4 py-2 rounded"
        />
        {form.formState.errors.lastName && (
          <label className="text-red-500">
            {form.formState.errors.lastName.message}
          </label>
        )}
        <input
          type="phone"
          placeholder="Phone Number"
          {...form.register('phoneNumber')}
          className="w-full px-4 py-2 rounded"
        />
        {form.formState.errors.phoneNumber && (
          <label className="text-red-500">
            {form.formState.errors.phoneNumber.message}
          </label>
        )}
        <input
          type="email"
          placeholder="Email"
          {...form.register('email')}
          className="w-full px-4 py-2 rounded"
        />
        {form.formState.errors.email && (
          <label className="text-red-500">
            {form.formState.errors.email.message}
          </label>
        )}
        <p>We will contact you about next steps and pricing</p>
        <Button
          type="submit"
          variant={'outline'}
          className="w-full py-2"
          disabled={form.formState.isSubmitting}
        >
          Send nudes
        </Button>
      </form> */}
      {/* new form */}

      <Form {...form}>
        <form
          action={action}
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          {state?.message && state?.message?.length > 0 && (
            <p
              className={
                state.message ===
                'Form succesfelly sent. We will get in touch with you soon!'
                  ? 'text-green-600'
                  : 'text-red-500'
              }
            >
              {state.message}
            </p>
          )}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="Jhon" {...field} />
                </FormControl>
                <FormDescription>Type your name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormDescription>Type your last name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="+35677767034" {...field} />
                </FormControl>
                <FormDescription>Your phone number</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@mail.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your email address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant={'outline'}
            className="px-10 py-2"
            disabled={form.formState.isSubmitting}
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
