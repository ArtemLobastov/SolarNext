import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Loader2, Save } from 'lucide-react';

import { MdCancel } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import { SubmitHandler, useForm } from 'react-hook-form';
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
import { useEffect, useRef, useState } from 'react';
import SoldProducts from './SoldProducts';
import { ActionResult, addSaleAction } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { addSaleFormSchema, TAddSaleFormSchema } from '@/lib/zod/schemas-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/components/ui/use-toast';

type AddSaleProps = {
  setAddingSale: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};
export default function AddSale({ setAddingSale }: AddSaleProps) {
  const [productList, setProductList] = useState<any>([]);
  const [state, action] = useFormState<any, any>(addSaleAction, {
    message: '',
  });
  const [isPending, setIsPending] = useState(false);
  const form = useForm<TAddSaleFormSchema>({
    //mode: 'onBlur',
    resolver: zodResolver(addSaleFormSchema),
    defaultValues: {
      id: `PV${Math.floor(10000 + Math.random() * 90000)}`,
      productsSold: [],
      clientName: '',
      address: '',
      email: '',
      phone: '',
      status: '',
      registered: new Date(),
      agent: '',
    },
  });
  //Effect to update the array of sold products
  useEffect(() => {
    form.setValue('productsSold', productList);
  }, [productList, form]);

  const formRef = useRef<HTMLFormElement>(null);
  //Submit handler with client and server mixed
  const onSubmit: SubmitHandler<TAddSaleFormSchema> = async (data) => {
    setIsPending(true);
    try {
      const result: ActionResult = await addSaleAction(state, data);
      if (result.message === 'Success') {
        toast({
          title: 'Success',
          variant: 'success',
          description: 'Sale added',
          duration: 3000,
        });
        form.reset();
        setAddingSale(false);
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
        <Card>
          <CardHeader className="bg-muted/50 flex flex-row">
            <div>
              <CardTitle>New Sale</CardTitle>
              <CardDescription>add sale details</CardDescription>
            </div>

            <div className="ml-auto flex items-center gap-1">
              <Button
                type="submit"
                size="sm"
                variant="outline"
                className="h-8 gap-1"
                disabled={isPending}
              >
                <Save className="h-3.5 w-3.5" />
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  {!isPending ? 'Save' : <Loader2 className=" animate-spin" />}
                </span>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-8 gap-1"
                disabled={isPending}
                onClick={() => setAddingSale(false)}
              >
                <MdCancel className="h-3.5 w-3.5" />
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  Cancel
                </span>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="text-sm p-3 grid grid-cols-3 gap-3  ">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>Sale info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid  gap-4">
                  <div className="grid gap-1">
                    {/* ID */}
                    <FormField
                      control={form.control}
                      name="id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Id</FormLabel>
                          <FormControl>
                            <Input type="text" disabled {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid  gap-4">
                  <div className="grid gap-1">
                    {/* CLIENT NAME */}
                    <FormField
                      control={form.control}
                      name="clientName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Client Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ivan Zammit"
                              type="name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="grid  gap-4">
                  <div className="grid gap-1">
                    {/* Status */}
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a sale status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="deposit">Deposit</SelectItem>
                              <SelectItem value="paid">Paid</SelectItem>
                              <SelectItem value="installer">
                                Cancelled
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid  gap-4">
                  <div className="grid gap-1">
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
                  </div>
                </div>
                <div className="grid  gap-4">
                  <div className="grid gap-1">
                    {/* EMAIL */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Clients Email</FormLabel>
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
                  </div>
                </div>
                <div className="grid  gap-4">
                  <div className="grid gap-1">
                    {/* PHONE */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Clients Phone </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="777 67 034"
                              type="phone"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid  gap-4">
                  <div className="grid gap-1">
                    {/* ADDRESS */}
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="198 Mdina road, Qormi"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid  gap-4">
                  <div className="grid gap-1">
                    {/* Agent */}
                    <FormField
                      control={form.control}
                      name="agent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Agent</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select agent" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="christabel">
                                Christabel
                              </SelectItem>
                              <SelectItem value="brendan">Brendan</SelectItem>
                              <SelectItem value="adrian">Adrian</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Products info */}
            <Card className="col-span-2 bg-muted/50">
              <CardHeader>
                <CardTitle>Products sold</CardTitle>
              </CardHeader>
              <CardContent>
                <SoldProducts
                  productList={productList}
                  setProductList={setProductList}
                />
                {/* List of products sold */}
                <FormField
                  control={form.control}
                  name="productsSold"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          name="productsSold"
                          type="hidden"
                          value={productList}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
