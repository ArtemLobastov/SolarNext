'use client';
import { BreadcrumbAccount } from '@/components/account/BreadCrumbs';
import ClientCard from '@/components/account/ClientCard';
import ClientList from '@/components/account/ClientList';
import { ModeToggle } from '@/components/ui/darkmode-btn';
import { useState } from 'react';
import { data } from '@/lib/clientsDB';

export default function ClientsPage() {
  const [activeClientId, setActiveClientId] = useState<string>('');
  const [activeClient] = data.filter((client) => client?.id === activeClientId);

  return (
    <>
      <div className="flex justify-between items-center ">
        <h1 className="text-5xl font-semibold">Clients</h1>
        <BreadcrumbAccount way={['Dashboard', 'Clients']} />
        <ModeToggle />
      </div>

      <main className=" pt-3">
        {activeClient && <ClientCard activeClient={activeClient} />}
        <ClientList setActiveClientId={setActiveClientId} />
      </main>
    </>
  );
}
