'use client';
import { Calendar } from '@/components/ui/calendar';
import { Job, jobsDataDummyList as jobs } from '@/lib/jobsDB';

import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';

type JobsCalendarProps = {
  jobs: Job[];
};
export default function JobsCalendar({ jobs }: JobsCalendarProps) {
  const jobsDays = jobs.map((job) => new Date(job.date));

  //TODO styling of booked days
  //TODO jobs list of selected date
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [selectedDates, setSelectedDates] = useState<Date[]>(
    initiallySelectedDates
  );
  function dateClickHandler(dates) {
    // setSelectedDates((prev) => [...prev, dates]);
    //setDate(dates.reverse().at(0));
  }
  return (
    <div className="flex">
      {/* TODO hover card with jobs on calendar */}
      <Calendar
        mode="multiple"
        // selected={selectedDates}
        // onSelect={setSelectedDates}
        className="rounded-md border"
      />
      <div>
        Jobs on {date?.toLocaleDateString()}
        <ul>
          <li>job1</li>
          <li>job2</li>
          <li>job3</li>
        </ul>
      </div>
    </div>
  );
}
