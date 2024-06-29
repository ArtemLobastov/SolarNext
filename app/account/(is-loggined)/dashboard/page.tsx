import { BreadcrumbAccount } from '@/components/account/BreadCrumbs';
import { DataTableStock } from '@/components/account/DataTableStock';
import RecentPayments from '@/components/account/RecentPayments';
import RevenueCard from '@/components/account/RevenueCard';
import SalesCard from '@/components/account/SalesCard';
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
      {/* TODO darkmode vidgets styling */}
      <InstallersPieChartVidget />
      <DataTableStock />
      <FunnelCard />

      <SalesLineChart />
    </main>
  );
}
