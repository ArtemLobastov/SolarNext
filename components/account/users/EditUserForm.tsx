import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import { Loader2 } from 'lucide-react';
import {
  ActionResult,
  createUserAction,
  editUserAction,
  loginAction,
} from '@/lib/actions';
import { useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { format } from 'date-fns';
import { TUserFormSchema, userFormSchema } from '@/lib/zod/schemas-types';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { IUser } from '@/lib/usersDB';
import { PasswordInput } from '@/components/ui/password-input';

export default function EditUserForm({
  setShowEditUser,
  userData,
}: {
  userData: IUser;
  setShowEditUser: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}) {
  const [state, action] = useFormState<any, any>(createUserAction, {
    message: '',
  });
  const [isPending, setIsPending] = useState(false);
  const form = useForm<TUserFormSchema>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.password,
      phone: userData.phone,
      role: userData.role,
      activated: userData.activated,
    },
  });
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = async (data: TUserFormSchema) => {
    setIsPending(true);
    try {
      const result: ActionResult = await editUserAction(state, data);
      if (result.message === 'Success') {
        toast({
          title: 'Success',
          variant: 'success',
          description: 'Changes saved',
          duration: 3000,
        });
        form.reset();
        setShowEditUser(false);
        //TODO close the form
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
        className="space-y-5 "
      >
        {/* ID */}
        <FormField
          control={form.control}
          name="id"
          defaultValue={Date.now().toString()}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" disabled {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        {/* REGISTERED DATE */}
        <FormField
          control={form.control}
          defaultValue={new Date()}
          name="registered"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <input type="hidden" />
            </FormItem>
          )}
        />
        {/* NAME */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Ivan Zammit" type="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* EMAIL */}
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
        {/* PHONE */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="777 67 034" type="phone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* PASSWORD */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* isActivated */}
        <FormField
          control={form.control}
          name="activated"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <Label>Activate user</Label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* ROLE */}
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a user role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="agent">Agent</SelectItem>
                  <SelectItem value="installer">Installer</SelectItem>
                </SelectContent>
              </Select>
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
          {!isPending ? 'Save changes' : <Loader2 className=" animate-spin" />}
        </Button>
        <Button
          type="button"
          variant={'outline'}
          className="w-full"
          disabled={isPending}
          onClick={() => {
            setShowEditUser(false);
          }}
        >
          {!isPending ? 'Close' : <Loader2 className=" animate-spin" />}
        </Button>
      </form>
    </Form>
  );
}
