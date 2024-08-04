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
import { Edit, MoreVertical } from 'lucide-react';
import { ActiveSaleSoldProductsTable } from './ActiveSaleSoldProductsTable';

export default function ActiveSale() {
  return (
    <Card>
      <CardHeader className="bg-muted/50 flex flex-row">
        <div>
          <CardTitle>Active Sale</CardTitle>
          <CardDescription>id 123</CardDescription>
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
        <Card>
          <CardHeader>
            <CardTitle>Sale info</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Name</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  123
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">ID</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  123
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Date registered</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  123
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Email</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <a href="mailto:">123</a>
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Phone</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <a href="tel:">123</a>
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Address</div>
                <address className="grid gap-0.5 not-italic text-muted-foreground">
                  123
                </address>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Products info */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Products sold</CardTitle>
          </CardHeader>
          <CardContent>
            <ActiveSaleSoldProductsTable />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
