'use client';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { getFormDataAction, ActionResult } from '@/lib/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { TleadFormSchema, leadFormSchema } from '@/lib/zod/schemas-types';
import { Loader2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from './ui/use-toast';
import { useRef, useState } from 'react';
import { Button } from './ui/button';

export default function LeadForm() {
  const [state, action] = useFormState(getFormDataAction, { message: '' });
  const [isPending, setIsPending] = useState(false);
  const form = useForm<TleadFormSchema>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    },
  });
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = async (data: TleadFormSchema) => {
    setIsPending(true);
    try {
      const result: ActionResult = await getFormDataAction(
        state,
        new FormData(formRef.current!)
      );
      if (
        result.message ===
        'Form successfully sent. We will get in touch with you soon!'
      ) {
        toast({
          title: 'Success',
          variant: 'success',
          description: result.message,
        });
        form.reset();
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.message,
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Submission error',
        description: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsPending(false);
    }
  };
  const onError = (errors: any) => {
    console.log(errors);
    setIsPending(false);
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={action}
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className=" space-y-3"
      >
        <p>{state.message}</p>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Jhon" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="number" placeholder="+35677767034" {...field} />
              </FormControl>
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
                <Input type="email" placeholder="example@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-xs">
          By submitting this form, I agree to the Terms and Privacy Notice.
        </p>
        <Button
          type="submit"
          variant={'outline'}
          className="px-12 py-2 w-1/3"
          disabled={isPending}
        >
          {!isPending ? 'Submit' : <Loader2 className=" animate-spin" />}
        </Button>
      </form>
    </Form>
  );
}
