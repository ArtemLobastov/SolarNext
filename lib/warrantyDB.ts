export type CaseStatus = 'opened' | 'approved' | 'rejected' | 'done';
export type CaseType = 'inverter' | 'battery' | 'panel' | 'frame' | 'wiring';

export type Case = {
  id: number;
  type: CaseType;
  description: string;
  status: CaseStatus;
  registered: string;
  assignee: string;
  clientId: string;
  clientName: string;
  clientLocation: string;
  clientPhone: string;
  notes?: string;
};

export const caseDataDummyList: Case[] = [
  {
    id: 1,
    type: 'inverter',
    description: 'Inverter not converting DC to AC properly',
    status: 'opened',
    registered: '2024-07-01',
    assignee: 'John Borg',
    clientId: 'MT001',
    clientName: 'Maria Camilleri',
    clientLocation: 'Valletta',
    clientPhone: '+356 2122 1234',
    notes: 'Client reported frequent power outages',
  },
  {
    id: 2,
    type: 'battery',
    description: 'Battery not holding charge',
    status: 'approved',
    registered: '2024-06-28',
    assignee: 'Sarah Vella',
    clientId: 'MT002',
    clientName: 'Joseph Azzopardi',
    clientLocation: 'Sliema',
    clientPhone: '+356 2133 5678',
  },
  {
    id: 3,
    type: 'panel',
    description: 'Cracked solar panel',
    status: 'rejected',
    registered: '2024-06-25',
    assignee: 'Mark Zammit',
    clientId: 'MT003',
    clientName: 'Anna Briffa',
    clientLocation: 'Mosta',
    clientPhone: '+356 2141 9012',
    notes: 'Damage caused by client negligence',
  },
  {
    id: 4,
    type: 'frame',
    description: 'Loose mounting frame',
    status: 'done',
    registered: '2024-06-20',
    assignee: 'Luca Farrugia',
    clientId: 'MT004',
    clientName: 'Paul Micallef',
    clientLocation: 'Rabat',
    clientPhone: '+356 2156 3456',
  },
  {
    id: 5,
    type: 'wiring',
    description: 'Faulty wiring causing system shutdown',
    status: 'opened',
    registered: '2024-07-05',
    assignee: 'Emma Galea',
    clientId: 'MT005',
    clientName: 'Carmel Borg',
    clientLocation: 'Marsaxlokk',
    clientPhone: '+356 2163 7890',
  },
  {
    id: 6,
    type: 'inverter',
    description: 'Inverter overheating',
    status: 'approved',
    registered: '2024-07-02',
    assignee: 'David Cassar',
    clientId: 'MT006',
    clientName: 'Rita Spiteri',
    clientLocation: 'Birgu',
    clientPhone: '+356 2182 1234',
    notes: 'Replacement inverter ordered',
  },
  {
    id: 7,
    type: 'battery',
    description: 'Battery management system failure',
    status: 'opened',
    registered: '2024-07-07',
    assignee: 'Nina Attard',
    clientId: 'MT007',
    clientName: 'George Mifsud',
    clientLocation: 'Mdina',
    clientPhone: '+356 2145 5678',
  },
  {
    id: 8,
    type: 'panel',
    description: 'Severe reduction in panel efficiency',
    status: 'approved',
    registered: '2024-06-30',
    assignee: 'Alex Bonnici',
    clientId: 'MT008',
    clientName: 'Doris Grech',
    clientLocation: 'Qormi',
    clientPhone: '+356 2167 9012',
  },
  {
    id: 9,
    type: 'frame',
    description: 'Corrosion on mounting frame',
    status: 'rejected',
    registered: '2024-06-22',
    assignee: 'Tessa Sammut',
    clientId: 'MT009',
    clientName: 'Robert Cutajar',
    clientLocation: 'Mellieħa',
    clientPhone: '+356 2152 3456',
    notes: 'Normal wear and tear, not covered by warranty',
  },
  {
    id: 10,
    type: 'wiring',
    description: 'Rodent damage to wiring',
    status: 'done',
    registered: '2024-06-18',
    assignee: 'Karl Schembri',
    clientId: 'MT010',
    clientName: 'Victoria Fenech',
    clientLocation: 'Żejtun',
    clientPhone: '+356 2192 7890',
    notes: 'Wiring replaced and protective measures installed',
  },
];
