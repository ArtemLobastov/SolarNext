import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  MoreVertical,
  Edit,
  Download,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Separator } from '@/components/ui/separator';

export default function ClientCard() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-2xl">
            Abner Grech
            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <Copy className="h-3 w-3" />
              <span className="sr-only">Copy address</span>
            </Button>
          </CardTitle>
          <CardDescription>PV12345</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <Edit className="h-3.5 w-3.5" />
            <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
              Edit
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" className="h-8 w-8">
                <MoreVertical className="h-3.5 w-3.5" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Delite</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        {/* PERSONAL DATA */}
        <div className="grid gap-1">
          <div className=" text-lg font-semibold">Personal Information</div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1">
              <div className="font-semibold">Name</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <p>Abner Grech</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1">
              <div className="font-semibold">ID</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <p>PV12345</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1">
              <div className="font-semibold">Date registered</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <p>03.05.2024</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1">
              <div className="font-semibold">Email</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <a href="mailto:">abnergrech@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1">
              <div className="font-semibold">Phone</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <a href="tel:">+356 777 67 034</a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1">
              <div className="font-semibold">Address</div>
              <address className="grid gap-0.5 not-italic text-muted-foreground">
                <span>Triq il-Kbira 131</span>
                <span>Qormi, Malta QRM1403</span>
              </address>
            </div>
          </div>
        </div>
        <Separator className="my-4" />

        {/* System info */}
        <div className="grid gap-3">
          <div className=" text-lg font-semibold">System Details</div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1">
              <div>
                <div className="font-semibold">Type</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>New installation</span>
                </div>
              </div>
              <div>
                <div className="font-semibold">Panels</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>10 x Omnis 445w</span>
                </div>
              </div>
              <div>
                <div className="font-semibold">Inverter</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>SolarEdge SE3680H</span>
                </div>
              </div>
              <div>
                <div className="font-semibold">Batteries</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>SolarEdge 10kw Single Phase</span>
                </div>
              </div>
              <div>
                <div className="font-semibold">Backup</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>No</span>
                </div>
              </div>
              <div>
                <div className="font-semibold">Frame elevation</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>No</span>
                </div>
              </div>
              <div>
                <div className="font-semibold">Frame fixing type</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>On balasts (kurduni x24)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Grant Status */}
        <Separator className="my-4" />
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-3">
            <div className="text-lg font-semibold">Grant</div>
            <address className="grid gap-0.5 not-italic text-muted-foreground">
              <span>Status: Approved</span>
              <span>Part B upload</span>
            </address>
          </div>
          <div className="grid auto-rows-max gap-3">
            <div className="font-semibold">Bank Information</div>
            <div className="text-muted-foreground">
              <p>IBAN: </p>
              <p>Account holders name:</p>
            </div>
          </div>
        </div>
        {/* Payments */}
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className=" text-lg font-semibold">Payment Information</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="flex items-center gap-1 text-muted-foreground">
                <CreditCard className="h-4 w-4" />
                Visa
              </dt>
              <dd>**** **** **** 4532</dd>
            </div>
          </dl>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Glimmer Lamps x <span>2</span>
              </span>
              <span>$250.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Aqua Filters x <span>1</span>
              </span>
              <span>$49.00</span>
            </li>
          </ul>
          <Separator className="my-2" />
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>$299.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>$5.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span>$25.00</span>
            </li>
            <li className="flex items-center justify-between font-semibold">
              <span className="text-muted-foreground">Total</span>
              <span>$329.00</span>
            </li>
          </ul>
        </div>
        <Separator className="my-4" />

        {/* installations */}
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-3">
            <div className="text-lg font-semibold">
              Installation Information
            </div>
            <div>
              <div className="font-semibold">Notes</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <span>Cable passed</span>
              </div>
            </div>
            <div>
              <div className="font-semibold">House call</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <span>Done</span>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Download className="h-3.5 w-3.5" />
                  <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                    Download housecall PDF
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        {/* NOTES */}
        <div className="grid gap-3">
          <div className="text-lg font-semibold">Notes</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="flex items-center gap-1 text-muted-foreground">
                <CreditCard className="h-4 w-4" />
                Visa
              </dt>
              <dd>**** **** **** 4532</dd>
            </div>
          </dl>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Updated <time dateTime="2023-11-23">November 23, 2023</time>
        </div>
      </CardFooter>
    </Card>
  );
}
