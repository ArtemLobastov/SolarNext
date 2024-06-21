'use client';

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
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import { Badge } from '@/components/ui/badge';
const data: Client[] = [
  {
    id: 'PV12345',
    name: 'Abner Grech',
    address: '131 Triq il-Kbira, Qormi, Malta QRM1403',
    amount: 13500,
    status: 'new',
    email: 'abnergrech@gmail.com',
    phone: '21234567',
    registered: '2023-05-15',
  },
  {
    id: 'PV67890',
    name: 'Marija Borg',
    address: '45 Triq San Pawl, Valletta, Malta VLT1234',
    amount: 15000,
    status: 'deposit gained',
    email: 'marija.borg@hotmail.com',
    phone: '77123456',
    registered: '2023-06-22',
  },
  {
    id: 'PV23456',
    name: 'Joseph Camilleri',
    address: '78 Triq ir-Repubblika, Mosta, Malta MST2468',
    amount: 12000,
    status: 'applied for grant',
    email: 'jcamilleri@outlook.com',
    phone: '79876543',
    registered: '2023-07-10',
  },
  {
    id: 'PV78901',
    name: 'Antoinette Zammit',
    address: '22 Triq l-Imhallef, Birkirkara, Malta BKR1357',
    amount: 14500,
    status: 'grant approved',
    email: 'antoinette.z@gmail.com',
    phone: '21987654',
    registered: '2023-08-05',
  },
  {
    id: 'PV34567',
    name: 'Paul Micallef',
    address: '56 Triq il-Wied, Msida, Malta MSD9876',
    amount: 16000,
    status: 'installation booked',
    email: 'paulmicallef@yahoo.com',
    phone: '77654321',
    registered: '2023-09-18',
  },
  {
    id: 'PV89012',
    name: 'Carmen Farrugia',
    address: '89 Triq il-Kbira, Rabat, Malta RBT5432',
    amount: 11000,
    status: 'installation done',
    email: 'cfarrugia@gmail.com',
    phone: '79123987',
    registered: '2023-10-30',
  },
  {
    id: 'PV45678',
    name: 'David Galea',
    address: '33 Triq Santa Marija, Zabbar, Malta ZBR2468',
    amount: 13000,
    status: 'system certified',
    email: 'davidgalea@outlook.com',
    phone: '21456789',
    registered: '2023-11-12',
  },
  {
    id: 'PV90123',
    name: 'Doris Spiteri',
    address: '17 Triq il-Knisja, Sliema, Malta SLM1234',
    amount: 15500,
    status: 'part B applied',
    email: 'doris.spiteri@hotmail.com',
    phone: '77789012',
    registered: '2023-12-25',
  },
  {
    id: 'PV56789',
    name: 'Raymond Vella',
    address: '72 Triq il-Mosta, Naxxar, Malta NXR5678',
    amount: 12500,
    status: 'new',
    email: 'rvella@gmail.com',
    phone: '79345678',
    registered: '2024-01-07',
  },
  {
    id: 'PV01234',
    name: 'Josephine Agius',
    address: '11 Triq San Gorg, Birgu, Malta BRG7890',
    amount: 14000,
    status: 'deposit gained',
    email: 'jagius@yahoo.com',
    phone: '21678901',
    registered: '2024-02-14',
  },
  {
    id: 'PV67891',
    name: 'Mario Azzopardi',
    address: '95 Triq il-Helsien, Hamrun, Malta HMR4321',
    amount: 16500,
    status: 'applied for grant',
    email: 'marioazzo@outlook.com',
    phone: '77234567',
    registered: '2024-03-20',
  },
  {
    id: 'PV23457',
    name: 'Rita Cutajar',
    address: '28 Triq il-Kbira, Zejtun, Malta ZTN6543',
    amount: 11500,
    status: 'grant approved',
    email: 'ritacutajar@gmail.com',
    phone: '79567890',
    registered: '2024-04-01',
  },
  {
    id: 'PV78902',
    name: 'Anton Briffa',
    address: "50 Triq il-Qalb ta' Gesu, Marsaskala, Malta MSK8765",
    amount: 13200,
    status: 'installation booked',
    email: 'antonb@hotmail.com',
    phone: '21890123',
    registered: '2024-05-09',
  },
  {
    id: 'PV34568',
    name: 'Miriam Cassar',
    address: '63 Triq il-Wied, Birkirkara, Malta BKR2345',
    amount: 15200,
    status: 'installation done',
    email: 'miriamcassar@yahoo.com',
    phone: '77901234',
    registered: '2024-06-17',
  },
  {
    id: 'PV89013',
    name: 'George Scicluna',
    address: '39 Triq San Gwann, Zebbug, Malta ZBG1098',
    amount: 12800,
    status: 'system certified',
    email: 'gscicluna@gmail.com',
    phone: '79012345',
    registered: '2024-07-23',
  },
  {
    id: 'PV45679',
    name: 'Victoria Attard',
    address: '84 Triq il-Kbira, Mgarr, Malta MGR7654',
    amount: 14800,
    status: 'part B applied',
    email: 'vattard@outlook.com',
    phone: '21123456',
    registered: '2024-08-30',
  },
  {
    id: 'PV90124',
    name: 'Emmanuel Mifsud',
    address: '26 Triq il-Knisja, Mellieha, Malta MLH3456',
    amount: 16200,
    status: 'new',
    email: 'emmanuelm@hotmail.com',
    phone: '77234567',
    registered: '2024-09-11',
  },
  {
    id: 'PV56790',
    name: 'Pauline Schembri',
    address: '71 Triq il-Qalb Imqaddsa, Senglea, Malta ISL5678',
    amount: 11800,
    status: 'deposit gained',
    email: 'pschembri@yahoo.com',
    phone: '79345678',
    registered: '2024-10-19',
  },
  {
    id: 'PV01235',
    name: 'Alfred Bonnici',
    address: '5 Triq San Duminku, Valletta, Malta VLT9012',
    amount: 13800,
    status: 'applied for grant',
    email: 'alfredb@gmail.com',
    phone: '21456789',
    registered: '2024-11-25',
  },
  {
    id: 'PV67892',
    name: 'Theresa Fenech',
    address: '92 Triq il-Wied, Qormi, Malta QRM7890',
    amount: 15800,
    status: 'grant approved',
    email: 'tfenech@outlook.com',
    phone: '77567890',
    registered: '2024-12-31',
  },
];
export type Client = {
  id: string;
  name: string;
  address: string;
  amount: number;
  status:
    | 'new'
    | 'deposit gained'
    | 'applied for grant'
    | 'grant approved'
    | 'installation booked'
    | 'installation done'
    | 'system certified'
    | 'part B applied';
  email: string;
  phone: string;
  registered: string;
};
export const columns: ColumnDef<Client>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'id',
    header: 'id',
    cell: ({ row }) => <div className="capitalize">{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'address',
    header: 'address',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('address')}</div>
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
    cell: ({ row }) => (
      <Badge variant={'secondary'} className="capitalize">
        {row.getValue('status')}
      </Badge>
    ),
  },

  {
    accessorKey: 'phone',
    header: 'phone',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('phone')}</div>
    ),
  },

  {
    accessorKey: 'registered',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Registered
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('registered')}</div>
    ),
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
              Copy client info
            </DropdownMenuItem>
            <DropdownMenuItem>View client</DropdownMenuItem>
            <DropdownMenuItem>Edit client</DropdownMenuItem>
            <DropdownMenuItem>Delete client</DropdownMenuItem>
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
export function FilterOptionsDropdownMenu({
  filter,
  setFilter,
  onReset,
}: TFilterOptionsDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="capitalize">
          Filter option: {filter}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
          <DropdownMenuRadioItem value="name" onClick={() => onReset()}>
            Name
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="id" onClick={() => onReset()}>
            Id
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="address" onClick={() => onReset()}>
            Address
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default function ClientList() {
  const [filter, setFilter] = React.useState<string>('name');

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
    table.getColumn('id')?.setFilterValue('');
    table.getColumn('name')?.setFilterValue('');
  }
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 py-4">
        <Input
          placeholder="Search clients..."
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
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} client(s) selected.
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
