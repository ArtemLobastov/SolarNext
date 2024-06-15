import StatsCard from '@/components/account/StatsCard';
import InstallersPieChartVidget from '@/components/ui/installers-pie-chart';

export default function DashboardPage() {
  return (
    <div className="h-screen bg-primary-foreground p-5">
      <h1 className="text-4xl">Dashboard</h1>

      <ul className=" bg-pink-200 flex flex-row items-center justify-between gap-3">
        <li className="basis-1/4">
          <StatsCard variant="sales" />
        </li>
        <li className="basis-1/4">
          <StatsCard variant="clients" />
        </li>
        <li className="basis-1/4">
          <StatsCard variant="installations" />
        </li>
        <li className="basis-1/4">
          <StatsCard variant="revenue" />
        </li>
      </ul>

      <InstallersPieChartVidget />
    </div>
  );
}
