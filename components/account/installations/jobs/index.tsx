import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AddJobBtn from './AddJobBtn';
import JobsCalendar from './JobsCalendar';
import JobsList from './JobsList';
import { jobsDataDummyList } from '@/lib/jobsDB';
export default function Jobs() {
  return (
    <Card className="grid dark:bg-primary-foreground">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className=" font-medium">Jobs</CardTitle>
      </CardHeader>
      <CardContent className="overflow-auto grow">
        <JobsCalendar jobs={jobsDataDummyList} />
        <JobsList jobs={jobsDataDummyList} />
      </CardContent>
    </Card>
  );
}
