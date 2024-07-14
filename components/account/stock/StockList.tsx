import { productsDataDummyList } from '@/lib/stockDB';
import Image from 'next/image';
import { MoreHorizontal } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
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
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function StockList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock list</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>id</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Name</TableHead>

              <TableHead className="min-w-[130px]">Status</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Updated</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productsDataDummyList.slice(0, 10).map((item) => (
              <TableRow key={item.id}>
                <TableCell className="hidden sm:table-cell">
                  {/* TODO if no product img render category img */}
                  <Image
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={
                      (item.category === 'backups' && '/images/backup-1.png') ||
                      (item.category === 'inverters' &&
                        '/images/SolarEdge-SE3680H-1.jpg') ||
                      (item.category === 'batteries' &&
                        '/images/batterie-1.jpg') ||
                      (item.category === 'panels' &&
                        '/images/solar-panels.jpg') ||
                      (item.category === 'frame' && '/images/frame-1.jpg') ||
                      (item.category === 'electrical' &&
                        '/images/electrical.webp') ||
                      '/images/SolarEdge-SE3680H-1.jpg'
                    }
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell className="font-medium capitalize">
                  {item.category}
                </TableCell>
                <TableCell className="font-medium capitalize">
                  {item.name}
                </TableCell>
                <TableCell>
                  {item.status === 'out' && (
                    <Badge
                      variant="outline"
                      className="capitilize bg-red-200 text-black"
                    >
                      Out of stock
                    </Badge>
                  )}
                  {item.status === 'low' && (
                    <Badge
                      variant="outline"
                      className="  capitilize bg-yellow-200 text-black"
                    >
                      Low stock
                    </Badge>
                  )}
                  {item.status === 'in stock' && (
                    <Badge
                      variant="outline"
                      className="capitilize bg-green-200 text-black"
                    >
                      In stock
                    </Badge>
                  )}
                  {item.status === 'ordered' && (
                    <Badge variant="outline" className="capitilize">
                      Ordered
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="font-medium">{item.amount}</TableCell>

                <TableCell className="hidden md:table-cell">
                  ${item.price}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  2023-07-12
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Order</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </Card>
  );
}
