export type TRole = 'admin' | 'manager' | 'agent' | 'installer';

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: TRole;
  activated: boolean;
  registered: string;
  avatarSrc?: string;
}

export const users: IUser[] = [
  {
    id: 1,
    name: 'Brooke Borg',
    email: 'brooke.borg@example.mt',
    password: 'securePass1!',
    phone: '21345678',
    role: 'admin',
    activated: true,
    registered: '2023-01-15',
    avatarSrc: '',
  },
  {
    id: 2,
    name: 'Joseph Camilleri',
    email: 'joseph.camilleri@example.mt',
    password: 'maltaCross123!',
    phone: '23456789',
    role: 'manager',
    activated: true,
    registered: '2023-02-20',
    avatarSrc: '',
  },
  {
    id: 3,
    name: 'Carmen Vella',
    email: 'carmen.vella@example.mt',
    password: 'valettaFan42!',
    phone: '21567890',
    role: 'agent',
    activated: false,
    registered: '2023-03-10',
    avatarSrc: '',
  },
  {
    id: 4,
    name: 'Paul Zammit',
    email: 'paul.zammit@example.mt',
    password: 'gozo1234!',
    phone: '21678901',
    role: 'installer',
    activated: true,
    registered: '2023-04-05',
    avatarSrc: '',
  },
  {
    id: 5,
    name: 'Anna Galea',
    email: 'anna.galea@example.mt',
    password: 'mdina2023!',
    phone: '21789012',
    role: 'admin',
    activated: true,
    registered: '2023-05-12',
    avatarSrc: '',
  },
  {
    id: 6,
    name: 'David Scicluna',
    email: 'david.scicluna@example.mt',
    password: 'comino1996!',
    phone: '21890123',
    role: 'manager',
    activated: false,
    registered: '2023-06-18',
    avatarSrc: '',
  },
  {
    id: 7,
    name: 'Rita Farrugia',
    email: 'rita.farrugia@example.mt',
    password: 'marsaxlokk11!',
    phone: '21901234',
    role: 'agent',
    activated: true,
    registered: '2023-07-22',
    avatarSrc: '',
  },
  {
    id: 8,
    name: 'Mark Micallef',
    email: 'mark.micallef@example.mt',
    password: 'blueLagoon!',
    phone: '21012345',
    role: 'installer',
    activated: true,
    registered: '2023-08-30',
    avatarSrc: '',
  },
  {
    id: 9,
    name: 'Antoinette Grech',
    email: 'antoinette.grech@example.mt',
    password: 'malteseCross!',
    phone: '21123456',
    role: 'agent',
    activated: false,
    registered: '2023-09-14',
    avatarSrc: '',
  },
  {
    id: 10,
    name: 'John Cassar',
    email: 'john.cassar@example.mt',
    password: 'sliema2023!',
    phone: '21234567',
    role: 'manager',
    activated: true,
    registered: '2023-10-25',
    avatarSrc: '',
  },
];
