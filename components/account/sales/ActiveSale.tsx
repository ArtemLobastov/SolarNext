'use client';
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Edit, MoreVertical, Save } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Close } from '@radix-ui/react-toast';
import { MdCancel } from 'react-icons/md';
import { salesDummyData } from '@/lib/salesDB';
import { SoldProductsTable } from './SoldProductsTable';

export default function ActiveSale() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <Card>
      <CardHeader className="bg-muted/50 flex flex-row">
        <div>
          <CardTitle>Active Sale</CardTitle>
          <CardDescription>id PV1234</CardDescription>
        </div>

        <div className="ml-auto flex items-center gap-1">
          {isEdit && (
            <>
              <Button
                size="sm"
                variant="outline"
                className="h-8 gap-1"
                onClick={() => setIsEdit(false)}
              >
                <Save className="h-3.5 w-3.5" />
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  Save
                </span>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-8 gap-1"
                onClick={() => setIsEdit(false)}
              >
                <MdCancel className="h-3.5 w-3.5" />
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  Cancel
                </span>
              </Button>
            </>
          )}
          {!isEdit && (
            <>
              <Button
                size="sm"
                variant="outline"
                className="h-8 gap-1"
                onClick={() => setIsEdit(true)}
              >
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
            </>
          )}
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
                <div className="font-semibold">ID</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  PV1234
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Client Name</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  Chris Borg
                </div>
              </div>
            </div>

            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Status</div>
                <Badge className=" w-min">Deposit</Badge>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Date registered</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  01.06.2024
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Email</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <a href="mailto:">borg@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Phone</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <a href="tel:">79787611</a>
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Client Address</div>
                <address className="grid gap-0.5 not-italic text-muted-foreground">
                  198 Mdina Road, Qormi
                </address>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Agent</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  Christabel
                </div>
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
            <SoldProductsTable productList={salesDummyData[0].productsSold} />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
