'use client';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Job, jobsDataDummyList as jobs } from '@/lib/jobsDB';

import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DayMouseEventHandler } from 'react-day-picker';

type JobsCalendarProps = {
  jobs: Job[];
};
export default function JobsCalendar({ jobs }: JobsCalendarProps) {
  const jobsDays = jobs.map((job) => new Date(job.date));

  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex gap-3 ">
      {/* TODO hover card with jobs on calendar */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border "
        modifiers={{ booked: jobsDays }}
        modifiersClassNames={{
          booked: 'bg-green-100 dark:text-secondary border border-background',
        }}
      />
      <Card className="grow overflow-auto ">
        <CardHeader>
          <CardTitle className="font-medium text-md">
            Jobs on {date?.toLocaleDateString()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Assignee</TableHead>

                <TableHead>Phone</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.filter(
                (job) =>
                  new Date(job.date).toLocaleDateString() ===
                  date?.toLocaleDateString()
              ).length ? (
                jobs
                  .filter(
                    (job) =>
                      new Date(job.date).toLocaleDateString() ===
                      date?.toLocaleDateString()
                  )
                  .map((job) => (
                    <TableRow key={job.id} className="capitalize text-xs">
                      <TableCell>{job.clientName}</TableCell>
                      <TableCell>{job.type}</TableCell>
                      <TableCell>{job.assignee}</TableCell>
                      <TableCell>{job.clientPhone}</TableCell>
                      <TableCell>{job.clientLocation}</TableCell>
                      <TableCell>{job.description}</TableCell>
                      <TableCell>
                        <Badge variant={'outline'}>{job.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
