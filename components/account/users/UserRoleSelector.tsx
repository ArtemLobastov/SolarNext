import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function UserRoleSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>User Roles</SelectLabel>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="agent">Agent</SelectItem>
          <SelectItem value="manager">Manager</SelectItem>
          <SelectItem value="installer">Installer</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
