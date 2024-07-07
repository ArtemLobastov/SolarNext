import { MoreVertical, Edit, Download } from 'lucide-react';

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

import { TClient } from '@/lib/clientsDB';

//TODO active installer info
export default function ClientCard({}: // activeClient,
{
  // activeClient: TClient;
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-2xl">
            Artem
          </CardTitle>
          <CardDescription>id:1</CardDescription>
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
      <CardContent className="text-sm p-3 grid grid-cols-2 gap-3  ">
        {/* PERSONAL DATA */}
        <Card>
          <CardHeader>
            <CardTitle>Personal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Name</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  Artem
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Email</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <a href="mailto:">example@lorem.com</a>
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Phone</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  <a href="tel:">667788</a>
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">ID</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  1
                </div>
              </div>
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-1">
                <div className="font-semibold">Date registered</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  01.01.2023
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* installations  */}
        <Card>
          <CardHeader>
            <CardTitle>Installation stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="font-semibold">Installations done in June</div>
              <div className="grid gap-0.5 not-italic text-muted-foreground">
                30
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Download className="h-3.5 w-3.5" />
                  <span className=" xl:whitespace-nowrap">Download exel</span>
                </Button>
              </div>
              <div>
                <div className="font-semibold">
                  Certified installations in June
                </div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  25 of 30
                </div>
              </div>
              <div>
                <div className="font-semibold">Installations done in May</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  140
                </div>
              </div>
              <div>
                <div className="font-semibold">Installations done in 2024</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  130
                </div>
              </div>
              <div>
                <div className="font-semibold">Client Satisfaction Rating</div>
                <div className="grid gap-0.5 not-italic text-muted-foreground">
                  4.5
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
