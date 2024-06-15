import StatsCard from '@/components/account/StatsCard';
import { ModeToggle } from '@/components/ui/darkmode-btn';
import InstallersPieChartVidget from '@/components/ui/installers-pie-chart';
import SalesLineChart from '@/components/ui/sales-line-chart';

export default function DashboardPage() {
  return (
    <div className="h-full bg-primary-foreground p-5 ">
      <div className="flex justify-between items-center ">
        <h1 className="text-5xl font-semibold">Dashboard</h1>
        <ModeToggle />
      </div>
      <div className="grid gap-3 grid-cols-2 pt-3">
        <ul className=" bg-pink-200 grid grid-cols-2 gap-3">
          <li className="">
            <StatsCard variant="sales" />
          </li>
          <li className="">
            <StatsCard variant="clients" />
          </li>
          <li className="">
            <StatsCard variant="installations" />
          </li>
          <li className="">
            <StatsCard variant="revenue" />
          </li>
        </ul>

        <InstallersPieChartVidget />
        <SalesLineChart />
      </div>
    </div>
  );
}
