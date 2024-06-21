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
import NotesTextArea from './NotesTextArea';

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
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="text-sm p-3 grid grid-cols-3 gap-3  ">
        {/* PERSONAL DATA */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
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
                  <span>131 Triq il-Kbira Qormi, Malta QRM1403</span>
                </address>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* System info */}
        <Card>
          <CardHeader>
            <CardTitle>System Details</CardTitle>
          </CardHeader>
          <CardContent>
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
                <span>On ballasts (kurduni x24)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* installations */}
        <Card>
          <CardHeader>
            <CardTitle>Installation Information</CardTitle>
          </CardHeader>
          <CardContent>
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
              <div>
                <div className="font-semibold">Delivery status</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>Done</span>
                </div>
              </div>
              <div>
                <div className="font-semibold">Delivery date</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>01.06.2024</span>
                </div>
              </div>
              <div>
                <div className="font-semibold">Installation status</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>Scheduled</span>
                </div>
              </div>
              <div>
                <div className="font-semibold">Installation date</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>14.06.2024</span>
                </div>
              </div>
              <div>
                <div className="font-semibold">Installer</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>Artem</span>
                </div>
              </div>
              <div>
                <div className="font-semibold">Certification status</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>pending</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payments */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="font-semibold">Agent</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <span>Adrian</span>
              </div>
            </div>
            <div>
              <div className="font-semibold">Balance</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <ul className="grid gap-3">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Total</span>
                    <span>€13050.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Paid</span>
                    <span>€5000.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Remaining Balance
                    </span>
                    <span>€8050.00</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grant Status */}
        <Card>
          <CardHeader>
            <CardTitle>Grant Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="font-semibold">Status</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <span>Approved</span>
              </div>
            </div>
            <div>
              <div className="font-semibold">Grant deadline</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <span>30.07.2024</span>
              </div>
            </div>
            <div>
              <div className="font-semibold">Part B upload</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <span>Yes</span>
              </div>
            </div>
            <div>
              <div className="font-semibold">Bank Information</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <div className="text-muted-foreground">
                  <p>IBAN: </p>
                  <p>Account holders name:</p>
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
              <div className="text-lg font-semibold">Notes</div>
              <NotesTextArea />
            </div>
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Updated <time dateTime="2023-11-23">June 23, 2024</time>
        </div>
      </CardFooter>
    </Card>
  );
}
