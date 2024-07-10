'use client';
import { Job, jobsDataDummyList as data } from '@/lib/jobsDB';
import { mkConfig, generateCsv, download } from 'export-to-csv';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  Row,
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
  SaveIcon,
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
import { Badge } from '@/components/ui/badge';
import AddJobBtn from './AddJobBtn';
import SaveXmlBtn from '@/components/ui/save-xml-btn';

type JobsListProps = {
  jobs: Job[];
};
export const columns: ColumnDef<Job>[] = [
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
    cell: ({ table, row }) => (
      <div className="capitalize">{row.getValue('date')}</div>
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
    accessorKey: 'clientId',
    header: 'Clients id',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('clientId')}</div>
    ),
  },
  {
    accessorKey: 'clientLocation',
    header: 'Address',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('clientLocation')}</div>
    ),
  },

  {
    accessorKey: 'clientPhone',
    header: 'Phone',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('clientPhone')}</div>
    ),
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => (
      <Badge className="capitalize" variant={'secondary'}>
        {row.getValue('type')}
      </Badge>
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
    cell: ({ table, row }) => (
      <Badge variant={'outline'} className="capitalize">
        {row.getValue('status')}
      </Badge>
    ),
  },

  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('description')}</div>
    ),
  },
  {
    accessorKey: 'assignee',
    header: 'Assignee',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('assignee')}</div>
    ),
  },
  {
    accessorKey: 'remainingBalanceToCollect',
    header: 'Remaining Balance',
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue('remainingBalanceToCollect')
          ? '€ ' + row.getValue('remainingBalanceToCollect')
          : 0}
      </div>
    ),
  },
  {
    accessorKey: 'notes',
    header: 'Notes',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('notes')}</div>
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
              Copy info
            </DropdownMenuItem>
            <DropdownMenuItem>View client</DropdownMenuItem>
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
          {/* TODO date filter option (year,month) */}
          Filter option {filter === 'clientName' && ': Name'}
          {filter === 'assignee' && ': Assignee'}
          {filter === 'clientLocation' && ': Address'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
          <DropdownMenuRadioItem value="clientName" onClick={() => onReset()}>
            Name
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="assignee" onClick={() => onReset()}>
            Assignee
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="clientLocation"
            onClick={() => onReset()}
          >
            Address
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function JobsList({ jobs }: { jobs: Job[] }) {
  const csvConfig = mkConfig({
    fieldSeparator: ',',
    filename: 'schedule',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
  });
  const exportExcel = (rows: Row<any>[]) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

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
  const a = typeof table;
  //TODO filters reset
  function filterChangeResetHandler(): void {
    table.getColumn('clientName')?.setFilterValue('');
    table.getColumn('assignee')?.setFilterValue('');
    table.getColumn('clientLocation')?.setFilterValue('');
  }
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 py-4">
        <Input
          placeholder="Search jobs..."
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
        <AddJobBtn />

        {/* download exel Btn */}
        <SaveXmlBtn table={table} fileName="schedule" />
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
