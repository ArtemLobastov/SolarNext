'use client';
import { BreadcrumbAccount } from '@/components/account/BreadCrumbs';
import ClientCard from '@/components/account/ClientCard';
import ClientList from '@/components/account/ClientList';

import { ModeToggle } from '@/components/ui/darkmode-btn';
import { useState } from 'react';
import { testClientListData } from '@/lib/clientsDB';
import AddClient from '@/components/account/AddClient';

export default function ClientsPage() {
  const [addingClient, setAddingClient] = useState<boolean>(false);
  const [activeClientId, setActiveClientId] = useState<string>('');
  const [activeClient] = testClientListData.filter(
    (client) => client[0].id === activeClientId
  );

  return (
    <main className="flex flex-col gap-3 pt-3">
      {activeClient && <ClientCard activeClient={activeClient} />}
      {addingClient && <AddClient setAddingClient={setAddingClient} />}
      <ClientList
        addingClient={addingClient}
        setAddingClient={setAddingClient}
        setActiveClientId={setActiveClientId}
      />
    </main>
  );
}
