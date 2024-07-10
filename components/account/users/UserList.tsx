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
import {
  ArrowUpDown,
  ChevronDown,
  FilePenIcon,
  FilterIcon,
  MoreHorizontal,
  Plus,
  Send,
  TrashIcon,
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
// { clientsListData as data, TClientPersonalInfo } from '@/lib/clientsDB';
import { IUser, users as data } from '@/lib/usersDB';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SaveXmlBtn from '@/components/ui/save-xml-btn';
export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: 'avatarSrc',
    header: '',
    cell: ({ row }) => {
      const userName: string = row.getValue('name');
      const userInitials = userName
        .split(' ')
        .map((word) => word.slice(0, 1))
        .join(' ');
      return (
        <Avatar>
          <AvatarImage src={row.getValue('avatarSrc')} alt="user avatar" />
          <AvatarFallback>{userInitials}</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => (
      <Badge variant={'secondary'} className="capitalize">
        {row.getValue('role')}
      </Badge>
    ),
  },

  {
    accessorKey: 'id',
    header: 'Id',
    cell: ({ row }) => <div className="capitalize">{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => <div className=" text-xs">{row.getValue('email')}</div>,
  },

  {
    accessorKey: 'phone',
    header: 'Phone',
    cell: ({ row }) => <div className="">{row.getValue('phone')}</div>,
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
    cell: ({ table, row }) => (
      <div className="text-xs">{row.getValue('registered')}</div>
    ),
  },
  {
    accessorKey: 'activated',
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
      <div className="capitalize">
        {row.getValue('activated') ? (
          <Badge
            variant="secondary"
            className=" bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800"
          >
            Activated
          </Badge>
        ) : (
          <Badge
            variant="secondary"
            className="bg-red-100 hover:bg-red-200  dark:hover:bg-red-800 dark:bg-red-900"
          >
            Deactivated
          </Badge>
        )}
      </div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

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
            <div className="flex flex-col gap-2">
              <DropdownMenuItem
                className="gap-1"
                onClick={() => console.log(1)}
              >
                <Send className="h-4 w-4" />
                Send Login Info
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-1">
                <FilePenIcon className="h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-1">
                <TrashIcon className="h-4 w-4" /> Delete
              </DropdownMenuItem>
            </div>
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
          Filter option: {filter}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
          <DropdownMenuRadioItem value="name" onClick={() => onReset()}>
            Name
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="email" onClick={() => onReset()}>
            Email
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

//TODO change state to USER
export default function UserList({
  setShowAddUser,
  showAddUser,
}: {
  setShowAddUser: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  showAddUser: boolean;
}) {
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
    table.getColumn('email')?.setFilterValue('');
    table.getColumn('name')?.setFilterValue('');
  }
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 py-4">
        <Input
          placeholder="Search users..."
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
        {!showAddUser && (
          <Button
            variant="outline"
            className="mr-auto"
            // TODO change to user
            onClick={() => {
              setShowAddUser(true);
            }}
          >
            <Plus className=" h-4 w-4 mr-2" /> Add User
          </Button>
        )}
        <SaveXmlBtn table={table} fileName={'user-list'} />
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
                    //setActiveUserId(row.original.id);
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
