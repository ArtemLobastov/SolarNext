'use client';
import { useForm } from 'react-hook-form';
import { TloginSchema, loginSchema } from '@/lib/zod/schemas-types';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import { Loader2 } from 'lucide-react';
import { ActionResult, loginAction } from '@/lib/actions';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [state, action] = useFormState(loginAction, { message: '' });
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const form = useForm<TloginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'test@g.com',
      password: '1234567',
    },
  });
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = async (data: TloginSchema) => {
    setIsPending(true);
    console.log('loggining in');

    try {
      const result: ActionResult = await loginAction(
        state,
        new FormData(formRef.current!)
      );
      if (result.message === 'Success') {
        toast({
          title: 'Success',
          variant: 'success',
          description: 'Redirecting...',
          duration: 2000,
        });
        form.reset();
        router.push('/account/dashboard');
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
        className=" space-y-5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant={'outline'}
          className="w-full"
          disabled={isPending}
        >
          {!isPending ? 'Login' : <Loader2 className=" animate-spin" />}
        </Button>
      </form>
    </Form>
  );
}
