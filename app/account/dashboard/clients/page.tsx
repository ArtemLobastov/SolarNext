import { BreadcrumbAccount } from '@/components/account/BreadCrumbs';
import ClientList from '@/components/account/ClientList';
import { ModeToggle } from '@/components/ui/darkmode-btn';

export default function ClientsPage() {
  return (
    <>
      <div className="flex justify-between items-center ">
        <h1 className="text-5xl font-semibold">Clients</h1>
        <BreadcrumbAccount way={['Dashboard', 'Clients']} />
        <ModeToggle />
      </div>

      <main className=" pt-3">
        <ClientList />
      </main>
    </>
  );
}
