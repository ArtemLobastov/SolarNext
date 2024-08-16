import * as React from 'react';
import { Save, Upload } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import NotesTextArea from '../NotesTextArea';
import { TClient } from '@/lib/clientsDB';
import { Separator } from '../../ui/separator';
import { MdCancel } from 'react-icons/md';
import { Input } from '../../ui/input';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { TPaymentMethod } from '@/lib/types';
import { IoClose } from 'react-icons/io5';

export type TDatePickerProps = {
  type: 'registered' | 'delivery' | 'installation' | 'grant' | 'payment';
};
export function DatePicker({ type }: TDatePickerProps) {
  const [date, setDate] = React.useState<Date>();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[full] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
export function PaymentTypeDropdownMenuRadioGroup() {
  const [method, setMethod] = React.useState<TPaymentMethod>('cheque');
  const handleValueChange = (value: string) => {
    if (
      value === 'cash' ||
      value === 'cheque' ||
      value === 'transfer' ||
      value === 'barter'
    ) {
      setMethod(value);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="capitalize">
          {method}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuLabel>Payment method</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={method}
          onValueChange={handleValueChange}
        >
          <DropdownMenuRadioItem value="cash">Cash</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="cheque">Cheque</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="transfer">
            Transfer
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="barter">Barter</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default function AddClient({
  setAddingClient,
}: {
  setAddingClient: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-2xl">
            New Client
          </CardTitle>
          <CardDescription>Fill the information</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-5">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <Save className="h-3.5 w-3.5" />
            <span className=" xl:whitespace-nowrap">Save</span>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-8 gap-1"
            onClick={() => setAddingClient(false)}
          >
            <IoClose className="h-3.5 w-3.5" />
            <span className=" xl:whitespace-nowrap">Close</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="text-sm p-3 grid grid-cols-3 gap-3  ">
        {/* PERSONAL DATA */}
        <Card>
          <CardHeader>
            <CardTitle>Personal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Name</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <Input type="text" />
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">ID</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <Input type="text" />
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Date registered</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <DatePicker type="registered" />
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Email</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <Input type="email" />
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Phone</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <Input type="tel" />
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Address</div>
                <address className="grid gap-0.5 not-italic text-muted-foreground">
                  <Input type="text" />
                </address>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* System info */}
        <Card>
          <CardHeader>
            <CardTitle>System</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="font-semibold">Type</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <Input type="text" />
              </div>
            </div>
            <div>
              <div className="font-semibold">Panels</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <Input type="text" />
              </div>
            </div>
            <div>
              <div className="font-semibold">Inverter</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <Input type="text" />
              </div>
            </div>
            <div>
              <div className="font-semibold">Batteries</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <Input type="text" />
              </div>
            </div>
            <div>
              <div className="font-semibold">Backup</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <RadioGroup defaultValue="false" className="flex flex-col">
                  <div className="flex items-center  space-x-2">
                    <RadioGroupItem value="true" id="r1" />
                    <Label htmlFor="r1">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="r2" />
                    <Label htmlFor="r2">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div>
              <div className="font-semibold">Frame elevation</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <RadioGroup defaultValue="yes" className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="r1" />
                    <Label htmlFor="r1">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="r2" />
                    <Label htmlFor="r2">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div>
              <div className="font-semibold">Frame fixing type</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <Input type="text" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* installations */}
        <Card>
          <CardHeader>
            <CardTitle>Installation</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="font-semibold">House call</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <RadioGroup defaultValue="pending">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pending" id="r1" />
                    <Label htmlFor="r1">Pending</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="done" id="r2" />
                    <Label htmlFor="r2">Done</Label>
                  </div>
                </RadioGroup>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Upload className="h-3.5 w-3.5" />
                  <span className=" xl:whitespace-nowrap">Upload scan</span>
                </Button>
              </div>
              <div>
                <div className="font-semibold">Delivery status</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <RadioGroup defaultValue="pending">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pending" id="r1" />
                      <Label htmlFor="r1">Pending</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="booked" id="r2" />
                      <Label htmlFor="r2">Booked</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="done" id="r3" />
                      <Label htmlFor="r3">Done</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div>
                <div className="font-semibold">Delivery date</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <DatePicker type="delivery" />
                </div>
              </div>
              <div>
                <div className="font-semibold">Installation status</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <RadioGroup defaultValue="pending">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pending" id="r1" />
                      <Label htmlFor="r1">Pending</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="booked" id="r2" />
                      <Label htmlFor="r2">Booked</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="done" id="r3" />
                      <Label htmlFor="r3">Done</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div>
                <div className="font-semibold">Installation date</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <DatePicker type="installation" />
                </div>
              </div>
              <div>
                <div className="font-semibold">Installer</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <Input type="text" />
                </div>
              </div>
              <div>
                <div className="font-semibold">Certification status</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <RadioGroup defaultValue="pending">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pending" id="r1" />
                      <Label htmlFor="r1">Pending</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="done" id="r2" />
                      <Label htmlFor="r2">Done</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payments */}
        <Card>
          <CardHeader>
            <CardTitle>Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="font-semibold">Agent</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <Input type="text" placeholder="name" />
              </div>
            </div>
            <div>
              <div className="font-semibold">Balance</div>
              <div className="grid  gap-0.5 not-italic text-muted-foreground">
                <ul className="grid  gap-3">
                  <li className="">
                    <span className="text-muted-foreground">Total</span>
                    <Input type="number" placeholder="amount €" />
                  </li>
                  <Separator />
                  <li className="">
                    <span className="text-muted-foreground">Paid</span>

                    <div className="grid grid-col-2 w-full items-center  justify-center gap-3">
                      <Input
                        type="number"
                        placeholder="amount €"
                        className="col-span-2"
                      />
                      <DatePicker type="payment" />
                      <PaymentTypeDropdownMenuRadioGroup />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grant Status */}
        <Card>
          <CardHeader>
            <CardTitle>Grant</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="font-semibold">Status</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <RadioGroup defaultValue="pending">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pending" id="r1" />
                    <Label htmlFor="r1">Pending</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="applied" id="r2" />
                    <Label htmlFor="r2">Applied</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="approved" id="r2" />
                    <Label htmlFor="r2">Approved</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div>
              <div className="font-semibold">Grant deadline</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <DatePicker type="grant" />
              </div>
            </div>
            <div>
              <div className="font-semibold">Part B uploaded</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="r1" />
                    <Label htmlFor="r1">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="r2" />
                    <Label htmlFor="r2">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div>
              <div className="font-semibold">Bank Information</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <div className="text-muted-foreground">
                  <div>
                    IBAN: <Input type="text" />{' '}
                  </div>
                  <div>
                    Account holders name:
                    <Input type="text" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* NOTES */}
        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <NotesTextArea notes={null} />
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
