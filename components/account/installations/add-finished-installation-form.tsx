'use client';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import { CalendarIcon, Loader2 } from 'lucide-react';
import {
  ActionResult,
  createUserAction,
  jobRegisterFormAction,
} from '@/lib/actions';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  TJobRegisterFormSchema,
  jobRegisterFormSchema,
} from '@/lib/zod/schemas-types';
import {
  Form,
  FormControl,
  FormDescription,
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export default function AddFinishedInstallationForm({
  setShowFinishedJobForm,
}: {
  setShowFinishedJobForm: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
}) {
  const [state, action] = useFormState<any, any>(jobRegisterFormAction, {
    message: '',
  });
  const [jobType, setJobType] = useState<
    'installation' | 'service' | 'houseCall' | 'delivery'
  >('installation');
  const [isPending, setIsPending] = useState(false);
  const form = useForm<TJobRegisterFormSchema>({
    mode: 'onBlur',
    resolver: zodResolver(jobRegisterFormSchema),
    defaultValues: {
      clientName: '',
      clientId: '',
      jobType: 'installation',
      isPanels: true,
      isBattery: true,
      isBackup: true,
      date: new Date(),
      photos: '/photo.jpg',
    },
  });
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit: SubmitHandler<TJobRegisterFormSchema> = async (data) => {
    setIsPending(true);
    try {
      const result: ActionResult = await jobRegisterFormAction(state, data);
      if (result.message === 'Success') {
        toast({
          title: 'Success',
          variant: 'success',
          description: 'Form sent',
          duration: 3000,
        });
        form.reset();
        setShowFinishedJobForm(false);
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
        {/* NAME */}
        <FormField
          control={form.control}
          name="clientName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Client Name</FormLabel>
              <FormControl>
                <Input placeholder="Ivan Zammit" type="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* ID */}
        <FormField
          control={form.control}
          name="clientId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Client Id</FormLabel>
              <FormControl>
                <Input placeholder="PV12345" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Date */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Job Type */}
        <FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Type</FormLabel>
              <Select
                onValueChange={() => {
                  field.onChange;
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a job type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="service">Service</SelectItem>
                  <SelectItem value="installation">Installation</SelectItem>
                  <SelectItem value="houseCall">House Call</SelectItem>
                  <SelectItem value="delivery">Delivery</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Panels toggle */}
        <FormField
          control={form.control}
          name="isPanels"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Panels</FormLabel>
              <FormControl>
                <div className=" flex flex-col gap-5">
                  <div className="flex items-center space-x-2 ">
                    <Label>No</Label>

                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label>Yes</Label>
                  </div>
                  <Label>Panels barcodes photos</Label>
                  <Input
                    id="panelsBarcodesPicture"
                    type="file"
                    multiple
                    maxLength={50}
                  />
                  <Label>Installed Panels photo</Label>
                  <Input id="panelsLayoutPicture" type="file" />
                  <Label>Frame photo</Label>
                  <Input id="framePhoto" type="file" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        {/* Batteries toggle */}
        <FormField
          control={form.control}
          name="isBattery"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Battery</FormLabel>
              <FormControl>
                <>
                  <div className="flex items-center space-x-2">
                    <Label>No</Label>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label>Yes</Label>
                  </div>
                  <Label>Installed Battery photo</Label>
                  <Input id="batteryPhoto" type="file" />
                  <Label>Battery barcode photo</Label>
                  <Input id="batteryBarcodePhoto" type="file" />
                </>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />

        {/* Backup toggle */}
        <FormField
          control={form.control}
          name="isBackup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Backup</FormLabel>
              <FormControl>
                <>
                  <div className="flex items-center space-x-2">
                    <Label>No</Label>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label>Yes</Label>
                  </div>
                  <Label>Installed backup photo</Label>
                  <Input id="backupPhoto" type="file" />
                  <Label>Backup barcode photo</Label>
                  <Input id="batteryBarcodePhoto" type="file" />
                </>
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
          {!isPending ? 'Register Job' : <Loader2 className=" animate-spin" />}
        </Button>
        <Button
          type="button"
          variant={'outline'}
          className="w-full"
          disabled={isPending}
          onClick={() => {
            setShowFinishedJobForm(false);
          }}
        >
          {!isPending ? 'Cancel' : <Loader2 className=" animate-spin" />}
        </Button>
      </form>
    </Form>
  );
}
