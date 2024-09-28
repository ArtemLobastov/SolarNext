import { AgentsPerfomanceLineChart } from '@/components/account/AgentsPerfomanceLineChart';
import { BreadcrumbAccount } from '@/components/account/BreadCrumbs';
import { DataTableStock } from '@/components/account/DataTableStock';
import { InstallationsDonePieChart } from '@/components/account/InstallationsDonePieChart';
import RecentPayments from '@/components/account/RecentPayments';
import RevenueCard from '@/components/account/RevenueCard';
import SalesCard from '@/components/account/SalesCard';
import { SalesDonePieChart } from '@/components/account/SalesDonePieChart';
import FunnelCard from '@/components/ui/funnel';
import InstallersPieChartVidget from '@/components/ui/installers-pie-chart';
import SalesLineChart from '@/components/ui/sales-line-chart';

export default function DashboardPage() {
  return (
    <main className=" grid grid-cols-2 gap-3 pt-3 ">
      <div className=" flex flex-col gap-3">
        <div className=" flex flex-row gap-3">
          <div className="flex-1">
            <RevenueCard />
          </div>
          <div className="flex-1">
            <SalesCard />
          </div>
        </div>
        <div className="flex-1">
          <RecentPayments />
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <InstallationsDonePieChart />
        <SalesDonePieChart />
      </div>
      <DataTableStock />
      <FunnelCard />
      <div className="col-span-2">
        <AgentsPerfomanceLineChart />
      </div>
    </main>
  );
}
