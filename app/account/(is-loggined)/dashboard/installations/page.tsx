import FinishedInstallationAddBtn from '@/components/installations/FinishedInstallationAddBtn';
import InstallationsKpiCard from '@/components/installations/InstallationsKpiCard';
import Installers from '@/components/installations/installers';
import Jobs from '@/components/installations/jobs/index';
import WarrantyCases from '@/components/installations/warranty';
import { Button } from '@/components/ui/button';

export default function InstallationsPage() {
  return (
    <div className="flex flex-col gap-3">
      <InstallationsKpiCard />
      <Jobs />
      <FinishedInstallationAddBtn />
      <Installers />
      <WarrantyCases />
    </div>
  );
}
