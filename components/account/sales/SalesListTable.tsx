'use client';
//TODO dates range filter
//TODO active sale state

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  ArrowUpDown,
  ChevronDown,
  FilterIcon,
  MoreHorizontal,
  Plus,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { salesDummyData as data, Sale } from '@/lib/salesDB';
import SaveXmlBtn from '@/components/ui/save-xml-btn';
import { Badge } from '@/components/ui/badge';
import clsx from 'clsx';

export const columns: ColumnDef<Sale>[] = [
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (row: any) => (
      <div className="capitalize">
        {row.getValue('date').toLocaleDateString()}
      </div>
    ),
  },
  {
    accessorKey: 'saleId',
    header: 'Sale id',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('saleId')}</div>
    ),
  },
  {
    accessorKey: 'sellerName',
    header: 'Saller',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('sellerName')}</div>
    ),
  },
  {
    accessorKey: 'clientName',
    header: 'Client',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('clientName')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (row: any) => {
      const status = row.getValue('status');
      const badgeColors: { [key: string]: string } = {
        new: 'yellow',
        deposit: 'blue',
        paid: 'green',
      };
      const activeStatusColor = badgeColors[status];
      // bg-yellow-200 hover:bg-yellow-300
      // bg-blue-200 hover:bg-blue-300
      // bg-green-200 hover:bg-green-300

      return (
        <Badge
          className={clsx(
            'capitalize text-black',
            activeStatusColor && `bg-${activeStatusColor}-200`,
            activeStatusColor && `hover:bg-${activeStatusColor}-300`
          )}
        >
          {row.getValue('status')}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'priceTotal',
    header: () => <div className="text-right font-medium">Total</div>,
    cell: ({ row }) => {
      const amount: number = parseFloat(row.getValue('priceTotal'));
      // Format the amount as a euro amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const client = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                console.log(client);
                navigator.clipboard.writeText(
                  Object.entries(client)
                    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
                    .join('\n')
                );
              }}
            >
              Copy info
            </DropdownMenuItem>
            <DropdownMenuItem>View sale</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
export type TFilterOptionsDropdownMenuProps = {
  filter: string;
  setFilter: (filter: string) => void;
  onReset: () => void;
};

//FIXME filter option displaying
export function FilterOptionsDropdownMenu({
  filter,
  setFilter,
  onReset,
}: TFilterOptionsDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="capitalize">
          <FilterIcon className=" h-4 w-4 mr-2" />
          Filter option: {filter}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
          <DropdownMenuRadioItem value="clientName" onClick={() => onReset()}>
            Client
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="saleId" onClick={() => onReset()}>
            Id
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="sellerName" onClick={() => onReset()}>
            Seller
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default function SalesListTable({
  setActiveClientId,
  setAddingClient,
  addingClient,
}: {
  setActiveClientId: (prev: string) => void;
  setAddingClient: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  addingClient: boolean;
}) {
  const [filter, setFilter] = React.useState<string>('clientName');

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    enableGlobalFilter: true,
    enableMultiRowSelection: false,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  function filterChangeResetHandler(): void {
    table.getColumn('saleId')?.setFilterValue('');
    table.getColumn('sellerName')?.setFilterValue('');
    table.getColumn('clientName')?.setFilterValue('');
  }
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 py-4">
        <Input
          placeholder="Search sales..."
          value={(table.getColumn(filter)?.getFilterValue() as string) ?? ''}
          onChange={(event) => {
            table.getColumn(filter)?.setFilterValue(event.target.value);
          }}
          className="max-w-sm"
        />

        <FilterOptionsDropdownMenu
          filter={filter}
          setFilter={setFilter}
          onReset={filterChangeResetHandler}
        />
        {!addingClient && (
          <Button
            variant="outline"
            className="mr-auto"
            onClick={() => setAddingClient((state) => !state)}
          >
            <Plus className=" h-4 w-4 mr-2" /> Add Sale
          </Button>
        )}
        <SaveXmlBtn table={table} fileName="sales" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  onClick={() => {
                    // setActiveClientId(row.original.id);
                    row.toggleSelected();
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          10 of 10 sale(s) showing.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
