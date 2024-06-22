import { Copy, MoreVertical, Edit, Download } from 'lucide-react';

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

import NotesTextArea from './NotesTextArea';
import { TClient } from '@/lib/clientsDB';
import { Separator } from '../ui/separator';
export default function ClientCard({
  activeClient,
}: {
  activeClient: TClient;
}) {
  const allPaymentsAmount = activeClient[3].paid.reduce(
    (sum, payment) => sum + payment.amount,
    0
  );
  const remainingBalance = activeClient[3].balanceTotal - allPaymentsAmount;
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-2xl">
            {activeClient[0].name}
          </CardTitle>
          <CardDescription>{activeClient[0].id}</CardDescription>
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
            <CardTitle>Personal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Name</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  {activeClient[0].name}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">ID</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  {activeClient[0].id}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Date registered</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  {activeClient[0].registered}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Email</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <a href="mailto:">{activeClient[0].email}</a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Phone</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <a href="tel:">{activeClient[0].phone}</a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Address</div>
                <address className="grid gap-0.5 not-italic text-muted-foreground">
                  {activeClient[0].address}
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
                {activeClient[1].systemType}
              </div>
            </div>
            <div>
              <div className="font-semibold">Panels</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                {activeClient[1].panels}
              </div>
            </div>
            <div>
              <div className="font-semibold">Inverter</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                {activeClient[1].inverter}
              </div>
            </div>
            <div>
              <div className="font-semibold">Batteries</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                {activeClient[1].batteries}
              </div>
            </div>
            <div>
              <div className="font-semibold">Backup</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                {activeClient[1].backup ? 'Yes' : 'No'}
              </div>
            </div>
            <div>
              <div className="font-semibold">Frame elevation</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                {activeClient[1].frameElevation ? 'Yes' : 'No'}
              </div>
            </div>
            <div>
              <div className="font-semibold">Frame fixing type</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                {activeClient[1].frameFixingType}
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
                {activeClient[2].houseCallStatus}
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Download className="h-3.5 w-3.5" />
                  <span className=" xl:whitespace-nowrap">Download scan</span>
                </Button>
              </div>
              <div>
                <div className="font-semibold">Delivery status</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  {activeClient[2].deliveryStatus}
                </div>
              </div>
              <div>
                <div className="font-semibold">Delivery date</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  {activeClient[2].deliveryDate}
                </div>
              </div>
              <div>
                <div className="font-semibold">Installation status</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  {activeClient[2].installationStatus}
                </div>
              </div>
              <div>
                <div className="font-semibold">Installation date</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  {activeClient[2].installationDate}
                </div>
              </div>
              <div>
                <div className="font-semibold">Installer</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  {activeClient[2].installer}
                </div>
              </div>
              <div>
                <div className="font-semibold">Certification status</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  {activeClient[2].certificationStatus}
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
                {activeClient[3].agent}
              </div>
            </div>
            <div>
              <div className="font-semibold">Balance</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <ul className="grid gap-3">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Total</span>€{' '}
                    {activeClient[3].balanceTotal}
                  </li>
                  <Separator />
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Paid</span>
                    <div className="">
                      {activeClient[3].paid.map((payment) => {
                        return (
                          <div key={payment.date}>
                            <div className="flex flex-col items-end">
                              € {payment.amount}{' '}
                            </div>
                            <div className="text-xs">
                              {payment.date} by {payment.method}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </li>
                  <Separator />
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Remaining Balance
                    </span>
                    <div className="flex flex-col items-end">
                      € {remainingBalance}
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
                {activeClient[4].grantStatus}
              </div>
            </div>
            <div>
              <div className="font-semibold">Grant deadline</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                {activeClient[4].grantDeadline}
              </div>
            </div>
            <div>
              <div className="font-semibold">Part B uploaded</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                {activeClient[4].isPartBUploaded ? 'Yes' : 'No'}
              </div>
            </div>
            <div>
              <div className="font-semibold">Bank Information</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                <div className="text-muted-foreground">
                  <p>IBAN: {activeClient[4].iban || ''} </p>
                  <p>
                    Account holders name:{' '}
                    {activeClient[4].bankAccountHolder || ''}
                  </p>
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
              <NotesTextArea notes={activeClient[5].notes} />
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
