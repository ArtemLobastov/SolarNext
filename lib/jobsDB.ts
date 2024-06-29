export type JobStatus = 'pending' | 'booked' | 'done';
export type JobType =
  | 'new installation'
  | 'upgrade'
  | 'house call'
  | 'delivery'
  | 'service call'
  | 'certification';

export interface Job {
  id: number;
  type: JobType;
  description: string;
  status: JobStatus;
  date: string;
  assignee: string;
  clientId: string;
  clientName: string;
  clientLocation: string;
  clientPhone: string;
  remainingBalanceToCollect: number | null;
  notes?: string;
}

export const jobsDataDummyList: Job[] = [
  {
    id: 1,
    type: 'new installation',
    description: 'Install solar panels on the roof',
    status: 'pending',
    date: '2024-07-01',
    assignee: 'John Doe',
    clientId: 'C001',
    clientName: 'Mario Borg',
    clientLocation: '123 Main St, Valletta',
    clientPhone: '+356 2123 4567',
    remainingBalanceToCollect: 1500,
    notes: 'Client prefers morning installation',
  },
  {
    id: 2,
    type: 'upgrade',
    description: 'Upgrade existing solar panel system',
    status: 'booked',
    date: '2024-07-02',
    assignee: 'Jane Roe',
    clientId: 'C002',
    clientName: 'Josephine Vella',
    clientLocation: '456 Elm St, Valletta',
    clientPhone: '+356 2123 7890',
    remainingBalanceToCollect: 750,
  },
  {
    id: 3,
    type: 'house call',
    description: 'Inspect solar panel system',
    status: 'done',
    date: '2024-06-29',
    assignee: 'Mark Brown',
    clientId: 'C003',
    clientName: 'Luca Galea',
    clientLocation: '789 Oak St, Valletta',
    clientPhone: '+356 2134 5678',
    remainingBalanceToCollect: null,
    notes: 'System running smoothly',
  },
  {
    id: 4,
    type: 'delivery',
    description: 'Deliver solar panel parts',
    status: 'booked',
    date: '2024-07-03',
    assignee: 'Lucy White',
    clientId: 'C004',
    clientName: 'Sophia Camilleri',
    clientLocation: '101 Pine St, Valletta',
    clientPhone: '+356 2145 6789',
    remainingBalanceToCollect: 200,
  },
  {
    id: 5,
    type: 'service call',
    description: 'Repair broken solar panel',
    status: 'pending',
    date: '2024-07-04',
    assignee: 'Alice Green',
    clientId: 'C005',
    clientName: 'Gabriel Farrugia',
    clientLocation: '102 Cedar St, Valletta',
    clientPhone: '+356 2156 7890',
    remainingBalanceToCollect: 500,
    notes: 'Panel damaged during storm',
  },
  {
    id: 6,
    type: 'certification',
    description: 'Certify new solar installation',
    status: 'done',
    date: '2024-06-28',
    assignee: 'Tom Black',
    clientId: 'C006',
    clientName: 'Emma Azzopardi',
    clientLocation: '103 Maple St, Valletta',
    clientPhone: '+356 2167 8901',
    remainingBalanceToCollect: null,
    notes: 'Certification completed successfully',
  },
  {
    id: 7,
    type: 'new installation',
    description: 'Install solar panels in the backyard',
    status: 'booked',
    date: '2024-07-05',
    assignee: 'Eva Brown',
    clientId: 'C007',
    clientName: 'Liam Attard',
    clientLocation: '104 Birch St, Valletta',
    clientPhone: '+356 2178 9012',
    remainingBalanceToCollect: 1200,
  },
  {
    id: 8,
    type: 'upgrade',
    description: 'Upgrade to higher capacity solar panels',
    status: 'pending',
    date: '2024-07-06',
    assignee: 'Nathan Blue',
    clientId: 'C008',
    clientName: 'Sophia Grima',
    clientLocation: '105 Willow St, Valletta',
    clientPhone: '+356 2189 0123',
    remainingBalanceToCollect: 900,
    notes: 'Upgrade requested due to increased power needs',
  },
  {
    id: 9,
    type: 'house call',
    description: 'Routine maintenance check',
    status: 'booked',
    date: '2024-07-07',
    assignee: 'Olivia Green',
    clientId: 'C009',
    clientName: 'Matthew Scicluna',
    clientLocation: '106 Spruce St, Valletta',
    clientPhone: '+356 2190 1234',
    remainingBalanceToCollect: null,
    notes: 'Annual maintenance',
  },
  {
    id: 10,
    type: 'delivery',
    description: 'Deliver new solar batteries',
    status: 'pending',
    date: '2024-07-08',
    assignee: 'Liam Red',
    clientId: 'C010',
    clientName: 'Emma Zammit',
    clientLocation: '107 Fir St, Valletta',
    clientPhone: '+356 2201 2345',
    remainingBalanceToCollect: 300,
  },
];
