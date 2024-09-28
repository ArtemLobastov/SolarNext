'use server';
//import { useEffect, useState } from 'react';

import CreateUser from '@/components/account/users/CreateUser';
import UserList from '@/components/account/users/UserList';
import EditUser from '@/components/account/users/EditUser';
import prisma from '@/lib/db';

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    include: {
      role: true,
    },
  });
  const mappedUsers = users.map((user) => {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,

      password: user.password, // TODO: mask password in UI
      email: user.email,
      activated: user.activated,
      createdAt: user.createdAt.toLocaleDateString(),
      role: user.role.name,
    };
  });
  // const [showAddUser, setShowAddUser] = useState(false);
  // const [showEditUser, setShowEditUser] = useState(true);
  // const [activeUserId, setActiveUserId] = useState(1);

  return (
    <>
      <UserList data={mappedUsers} />
      {/* {showAddUser && <CreateUser setShowAddUser={setShowAddUser} />}
      {showEditUser && (
        <EditUser userId={activeUserId} setShowEditUser={setShowEditUser} />
      )} */}
    </>
  );
}
