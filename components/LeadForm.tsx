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
import { useEffect, useRef } from 'react';

export default function LeadForm() {
  const [state, action] = useFormState(getFormDataAction, { message: '' });
  const form = useForm<TleadFormSchema>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    },
  });
  useEffect(() => {
    if (state.message.length > 0) {
      if (
        state.message ===
        'Form succesfelly sent. We will get in touch with you soon!'
      ) {
        toast({
          title: 'Success',
          variant: 'success',
          description: <p className="">{state.message}</p>,
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: <p className="">{state.message}</p>,
        });
      }
    }

    return () => {};
  }, [state, form]);

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="bg-black px-5 py-5 flex items-center justify-center">
      <Form {...form}>
        <form
          ref={formRef}
          action={action}
          onSubmit={(evt) => {
            evt.preventDefault();
            form.handleSubmit(() => {
              action(new FormData(formRef.current!));
            })(evt);
          }}
          className="w-2/3 space-y-3 px-10 py-10 bg-white rounded-md"
        >
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
    </div>
  );
}
