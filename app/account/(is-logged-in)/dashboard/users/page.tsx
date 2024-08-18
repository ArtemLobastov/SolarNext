'use client';

import { useState } from 'react';

import CreateUser from '@/components/account/users/CreateUser';
import UserList from '@/components/account/users/UserList';
import EditUser from '@/components/account/users/EditUser';

export default function UsersPage() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Manager',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Installer',
    },
    {
      id: 4,
      name: 'Dakota Jonson',
      email: 'dakota@example.com',
      role: 'Agent',
    },
  ]);

  const [showAddUser, setShowAddUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState(true);
  const [activeUserId, setActiveUserId] = useState(1);
  // const handleAddUser = () => {
  //   setShowAddUser(true);
  // };
  // const handleCloseModal = () => {
  //   setShowAddUser(false);
  //   setNewUser({
  //     name: '',
  //     email: '',
  //     role: '',
  //   });
  // };
  // const handleSaveUser = () => {
  //   setUsers([...users, { id: users.length + 1, ...newUser }]);
  //   handleCloseModal();
  // };
  // const handleEditUser = (user) => {
  //   setNewUser(user);
  //   setShowAddUser(true);
  // };
  const handleDeleteUser = (userId: number | undefined) => {
    setUsers(users.filter((user) => user.id !== userId));
  };
  return (
    <>
      {showAddUser && <CreateUser setShowAddUser={setShowAddUser} />}
      {showEditUser && (
        <EditUser userId={activeUserId} setShowEditUser={setShowEditUser} />
      )}
      <UserList setShowAddUser={setShowAddUser} showAddUser={showAddUser} />
    </>
  );
}
