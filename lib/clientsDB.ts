export type TPayment = {
  date: string;
  amount: number;
  method: string;
};
export type TClient = [
  {
    dataCategory: 'personal information';

    id: string;
    name: string;
    address: string;
    email: string;
    phone: string;
    registered: string;
  },
  {
    dataCategory: 'system details';
    systemType: string;
    panels: string;
    inverter: string;
    batteries: string;
    backup: boolean;
    frameElevation: boolean;
    frameFixingType: string;
  },
  {
    dataCategory: 'installation information';

    houseCallStatus: string;
    houseCallScanSrc: string;
    deliveryStatus: string;
    deliveryDate: string;
    installationStatus: string;
    installationDate: string;
    installer: string;
    certificationStatus: string;
  },
  {
    dataCategory: 'payment information';
    agent: string;
    balanceTotal: number;
    paid: TPayment[];
  },
  {
    dataCategory: 'grant';
    grantStatus: string;
    grantDeadline: string;
    isPartBUploaded: boolean;
    iban: string;
    bankAccountHolder: string;
  },
  {
    dataCategory: 'notes';
    notes: string[];
    lastUpdate: string;
  }
];
export type TClientPersonalInfo = {
  dataCategory: 'personal information';
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  registered: string;
};
const fullClientExample: TClient = [
  {
    dataCategory: 'personal information',
    id: 'PV12345',
    name: 'Abner Grech',
    address: '131 Triq il-Kbira, Qormi, Malta QRM1403',
    email: 'abnergrech@gmail.com',
    phone: '21234567',
    registered: '2023-05-15',
  },
  {
    dataCategory: 'system details',
    systemType: 'new installation',
    panels: '10 x omis 445w',
    inverter: 'SolarEdge SE3680H',
    batteries: 'SolarEdge 10kw Single Phase',
    backup: false,
    frameElevation: false,
    frameFixingType: 'On ballasts (kurduni x24)',
  },
  {
    dataCategory: 'installation information',
    houseCallStatus: 'done',
    houseCallScanSrc: 'PV12345housecall.pdf',
    deliveryStatus: 'done',
    deliveryDate: '2024-06-01',
    installationStatus: 'booked',
    installationDate: '2024-06-14',
    installer: 'Artem',
    certificationStatus: 'pending',
  },
  {
    dataCategory: 'payment information',
    agent: 'Adrian',
    balanceTotal: 13050,
    paid: [
      {
        date: '2024-06-01',
        amount: 5000,
        method: 'cash',
      },
    ],
  },
  {
    dataCategory: 'grant',
    grantStatus: 'approved',
    grantDeadline: '2024-07-30',
    isPartBUploaded: true,
    iban: 'MTVALL1230000043123',
    bankAccountHolder: 'Abner Grech',
  },
  {
    dataCategory: 'notes',
    notes: ['Contact person - Patrick. Phone 742692', 'cable passed'],
    lastUpdate: '2024-06-01',
  },
];
export const testClientListData: TClient[] = [
  [
    {
      dataCategory: 'personal information',
      id: 'PV12345',
      name: 'Abner Grech',
      address: '131 Triq il-Kbira, Qormi, Malta QRM1403',
      email: 'abnergrech@gmail.com',
      phone: '21234567',
      registered: '2023-05-15',
    },
    {
      dataCategory: 'system details',
      systemType: 'new installation',
      panels: '10 x omis 445w',
      inverter: 'SolarEdge SE3680H',
      batteries: 'SolarEdge 10kw Single Phase',
      backup: false,
      frameElevation: false,
      frameFixingType: 'On ballasts (kurduni x24)',
    },
    {
      dataCategory: 'installation information',
      houseCallStatus: 'done',
      houseCallScanSrc: 'PV12345housecall.pdf',
      deliveryStatus: 'done',
      deliveryDate: '2024-06-01',
      installationStatus: 'booked',
      installationDate: '2024-06-14',
      installer: 'Artem',
      certificationStatus: 'pending',
    },
    {
      dataCategory: 'payment information',
      agent: 'Adrian',
      balanceTotal: 13050,
      paid: [
        {
          date: '2024-06-01',
          amount: 5000,
          method: 'cash',
        },
        {
          date: '2024-06-10',
          amount: 500,
          method: 'card',
        },
      ],
    },
    {
      dataCategory: 'grant',
      grantStatus: 'approved',
      grantDeadline: '2024-07-30',
      isPartBUploaded: true,
      iban: 'MTVALL1230000043123',
      bankAccountHolder: 'Abner Grech',
    },
    {
      dataCategory: 'notes',
      notes: ['Contact person - Patrick. Phone 742692', 'cable passed'],
      lastUpdate: '2024-06-01',
    },
  ],
  [
    {
      dataCategory: 'personal information',
      id: 'PV67890',
      name: 'Marija Borg',
      address: '45 Triq San Pawl, Valletta, Malta VLT1234',
      email: 'marija.borg@hotmail.com',
      phone: '77123456',
      registered: '2023-06-22',
    },
    {
      dataCategory: 'system details',
      systemType: 'upgrade',
      panels: '8 x LG 450w',
      inverter: 'Fronius Symo 4.5-3-M',
      batteries: 'None',
      backup: true,
      frameElevation: true,
      frameFixingType: 'Screwed to roof',
    },
    {
      dataCategory: 'installation information',
      houseCallStatus: 'done',
      houseCallScanSrc: 'PV67890housecall.pdf',
      deliveryStatus: 'pending',
      deliveryDate: '2024-07-15',
      installationStatus: 'scheduled',
      installationDate: '2024-07-20',
      installer: 'John',
      certificationStatus: 'not started',
    },
    {
      dataCategory: 'payment information',
      agent: 'Mark',
      balanceTotal: 11500,
      paid: [
        {
          date: '2024-06-15',
          amount: 3000,
          method: 'bank transfer',
        },
      ],
    },
    {
      dataCategory: 'grant',
      grantStatus: 'applied',
      grantDeadline: '2024-08-30',
      isPartBUploaded: false,
      iban: 'MTVALL9876543210987',
      bankAccountHolder: 'Marija Borg',
    },
    {
      dataCategory: 'notes',
      notes: ['Prefers morning installations', 'Needs extra cable'],
      lastUpdate: '2024-06-20',
    },
  ],
  [
    {
      dataCategory: 'personal information',
      id: 'PV23456',
      name: 'Joseph Camilleri',
      address: '78 Triq ir-Repubblika, Mosta, Malta MST2468',
      email: 'jcamilleri@outlook.com',
      phone: '79876543',
      registered: '2023-07-10',
    },
    {
      dataCategory: 'system details',
      systemType: 'new installation',
      panels: '12 x Canadian Solar 400w',
      inverter: 'SMA Sunny Boy 5.0',
      batteries: 'Tesla Powerwall',
      backup: true,
      frameElevation: false,
      frameFixingType: 'On tiles',
    },
    {
      dataCategory: 'installation information',
      houseCallStatus: 'scheduled',
      houseCallScanSrc: '',
      deliveryStatus: 'not started',
      deliveryDate: '',
      installationStatus: 'not scheduled',
      installationDate: '',
      installer: '',
      certificationStatus: 'not started',
    },
    {
      dataCategory: 'payment information',
      agent: 'Sarah',
      balanceTotal: 15000,
      paid: [
        {
          date: '2024-07-01',
          amount: 4500,
          method: 'credit card',
        },
      ],
    },
    {
      dataCategory: 'grant',
      grantStatus: 'not applied',
      grantDeadline: '',
      isPartBUploaded: false,
      iban: 'MTVALL5432109876543',
      bankAccountHolder: 'Joseph Camilleri',
    },
    {
      dataCategory: 'notes',
      notes: ['Interested in future expansion'],
      lastUpdate: '2024-07-05',
    },
  ],
  [
    {
      dataCategory: 'personal information',
      id: 'PV34567',
      name: 'Carmen Zammit',
      address: '23 Triq Santa Lucija, Naxxar, Malta NXR1234',
      email: 'carmenz@gmail.com',
      phone: '21987654',
      registered: '2023-08-05',
    },
    {
      dataCategory: 'system details',
      systemType: 'new installation',
      panels: '14 x JinkoSolar 380w',
      inverter: 'Huawei SUN2000-5KTL-L1',
      batteries: 'None',
      backup: false,
      frameElevation: true,
      frameFixingType: 'On concrete roof',
    },
    {
      dataCategory: 'installation information',
      houseCallStatus: 'done',
      houseCallScanSrc: 'PV34567housecall.pdf',
      deliveryStatus: 'done',
      deliveryDate: '2024-08-20',
      installationStatus: 'completed',
      installationDate: '2024-08-25',
      installer: 'Michael',
      certificationStatus: 'completed',
    },
    {
      dataCategory: 'payment information',
      agent: 'Lisa',
      balanceTotal: 16000,
      paid: [
        {
          date: '2024-08-01',
          amount: 8000,
          method: 'bank transfer',
        },
        {
          date: '2024-09-01',
          amount: 8000,
          method: 'bank transfer',
        },
      ],
    },
    {
      dataCategory: 'grant',
      grantStatus: 'approved',
      grantDeadline: '2024-10-31',
      isPartBUploaded: true,
      iban: 'MTVALL6789012345678',
      bankAccountHolder: 'Carmen Zammit',
    },
    {
      dataCategory: 'notes',
      notes: ['Very satisfied customer', 'Recommended to neighbors'],
      lastUpdate: '2024-09-05',
    },
  ],
  [
    {
      dataCategory: 'personal information',
      id: 'PV45678',
      name: 'Paul Mifsud',
      address: '56 Triq il-Kbira, Birkirkara, Malta BKR2345',
      email: 'paulmifsud@yahoo.com',
      phone: '79123456',
      registered: '2023-09-15',
    },
    {
      dataCategory: 'system details',
      systemType: 'upgrade',
      panels: '6 x Trina Solar 410w',
      inverter: 'SolarEdge SE4000H',
      batteries: 'LG Chem RESU10H',
      backup: true,
      frameElevation: false,
      frameFixingType: 'On existing frame',
    },
    {
      dataCategory: 'installation information',
      houseCallStatus: 'done',
      houseCallScanSrc: 'PV45678housecall.pdf',
      deliveryStatus: 'pending',
      deliveryDate: '2024-10-10',
      installationStatus: 'scheduled',
      installationDate: '2024-10-15',
      installer: 'David',
      certificationStatus: 'not started',
    },
    {
      dataCategory: 'payment information',
      agent: 'Robert',
      balanceTotal: 9500,
      paid: [
        {
          date: '2024-09-20',
          amount: 2000,
          method: 'cash',
        },
      ],
    },
    {
      dataCategory: 'grant',
      grantStatus: 'applied',
      grantDeadline: '2024-11-30',
      isPartBUploaded: false,
      iban: 'MTVALL3456789012345',
      bankAccountHolder: 'Paul Mifsud',
    },
    {
      dataCategory: 'notes',
      notes: [
        'Existing system from 2018',
        'Wants to maximize self-consumption',
      ],
      lastUpdate: '2024-09-25',
    },
  ],
  [
    {
      dataCategory: 'personal information',
      id: 'PV56789',
      name: 'Rita Farrugia',
      address: '89 Triq il-Wied, Qormi, Malta QRM3456',
      email: 'ritaf@outlook.com',
      phone: '21345678',
      registered: '2023-10-20',
    },
    {
      dataCategory: 'system details',
      systemType: 'new installation',
      panels: '16 x Longi 435w',
      inverter: 'Fronius Primo 6.0-1',
      batteries: 'BYD Battery-Box Premium HVS 7.7',
      backup: true,
      frameElevation: true,
      frameFixingType: 'On ballasts (kurduni x32)',
    },
    {
      dataCategory: 'installation information',
      houseCallStatus: 'done',
      houseCallScanSrc: 'PV56789housecall.pdf',
      deliveryStatus: 'done',
      deliveryDate: '2024-11-05',
      installationStatus: 'in progress',
      installationDate: '2024-11-10',
      installer: 'Andrew',
      certificationStatus: 'pending',
    },
    {
      dataCategory: 'payment information',
      agent: 'Emma',
      balanceTotal: 18500,
      paid: [
        {
          date: '2024-10-25',
          amount: 5000,
          method: 'bank transfer',
        },
        {
          date: '2024-11-05',
          amount: 5000,
          method: 'credit card',
        },
      ],
    },
    {
      dataCategory: 'grant',
      grantStatus: 'approved',
      grantDeadline: '2024-12-31',
      isPartBUploaded: true,
      iban: 'MTVALL8901234567890',
      bankAccountHolder: 'Rita Farrugia',
    },
    {
      dataCategory: 'notes',
      notes: [
        'Large system for family home',
        'Interested in EV charger in future',
      ],
      lastUpdate: '2024-11-12',
    },
  ],
  [
    {
      dataCategory: 'personal information',
      id: 'PV67890',
      name: 'Anthony Vella',
      address: '12 Triq il-Kbira, Mosta, Malta MST4567',
      email: 'anthonyvella@gmail.com',
      phone: '79876543',
      registered: '2023-11-25',
    },
    {
      dataCategory: 'system details',
      systemType: 'new installation',
      panels: '9 x REC Alpha 375w',
      inverter: 'SMA Sunny Tripower 5.0',
      batteries: 'None',
      backup: false,
      frameElevation: false,
      frameFixingType: 'On tiles',
    },
    {
      dataCategory: 'installation information',
      houseCallStatus: 'scheduled',
      houseCallScanSrc: '',
      deliveryStatus: 'not started',
      deliveryDate: '',
      installationStatus: 'not scheduled',
      installationDate: '',
      installer: '',
      certificationStatus: 'not started',
    },
    {
      dataCategory: 'payment information',
      agent: 'Chris',
      balanceTotal: 11000,
      paid: [
        {
          date: '2024-11-30',
          amount: 2000,
          method: 'cash',
        },
      ],
    },
    {
      dataCategory: 'grant',
      grantStatus: 'not applied',
      grantDeadline: '',
      isPartBUploaded: false,
      iban: 'MTVALL2345678901234',
      bankAccountHolder: 'Anthony Vella',
    },
    {
      dataCategory: 'notes',
      notes: ['New build property', 'Waiting for roof completion'],
      lastUpdate: '2024-12-01',
    },
  ],
  [
    {
      dataCategory: 'personal information',
      id: 'PV78901',
      name: 'Maria Cutajar',
      address: '34 Triq San Gwann, Sliema, Malta SLM5678',
      email: 'mariac@hotmail.com',
      phone: '21567890',
      registered: '2024-01-05',
    },
    {
      dataCategory: 'system details',
      systemType: 'upgrade',
      panels: '7 x Q CELLS 440w',
      inverter: 'Growatt MIN 3000TL-XE',
      batteries: 'Growatt ARK 2.5H-A1',
      backup: true,
      frameElevation: true,
      frameFixingType: 'On concrete roof',
    },
    {
      dataCategory: 'installation information',
      houseCallStatus: 'done',
      houseCallScanSrc: 'PV78901housecall.pdf',
      deliveryStatus: 'pending',
      deliveryDate: '2024-02-10',
      installationStatus: 'scheduled',
      installationDate: '2024-02-15',
      installer: 'Steven',
      certificationStatus: 'not started',
    },
    {
      dataCategory: 'payment information',
      agent: 'Jessica',
      balanceTotal: 10500,
      paid: [
        {
          date: '2024-01-10',
          amount: 3000,
          method: 'bank transfer',
        },
      ],
    },
    {
      dataCategory: 'grant',
      grantStatus: 'applied',
      grantDeadline: '2024-03-31',
      isPartBUploaded: false,
      iban: 'MTVALL7890123456789',
      bankAccountHolder: 'Maria Cutajar',
    },
    {
      dataCategory: 'notes',
      notes: ['Upgrading system from 2016', 'Wants better efficiency'],
      lastUpdate: '2024-01-20',
    },
  ],
  [
    {
      dataCategory: 'personal information',
      id: 'PV89012',
      name: 'John Borg',
      address: '67 Triq il-Kbira, Zabbar, Malta ZBR6789',
      email: 'johnborg@gmail.com',
      phone: '79234567',
      registered: '2024-02-15',
    },
    {
      dataCategory: 'system details',
      systemType: 'new installation',
      panels: '11 x Panasonic 340w',
      inverter: 'SolarEdge SE5000H',
      batteries: 'None',
      backup: false,
      frameElevation: false,
      frameFixingType: 'On ballasts (kurduni x22)',
    },
    {
      dataCategory: 'installation information',
      houseCallStatus: 'done',
      houseCallScanSrc: 'PV89012housecall.pdf',
      deliveryStatus: 'done',
      deliveryDate: '2024-03-20',
      installationStatus: 'completed',
      installationDate: '2024-03-25',
      installer: 'Peter',
      certificationStatus: 'completed',
    },
    {
      dataCategory: 'payment information',
      agent: 'Daniel',
      balanceTotal: 13500,
      paid: [
        {
          date: '2024-02-20',
          amount: 4000,
          method: 'credit card',
        },
        {
          date: '2024-03-25',
          amount: 9500,
          method: 'bank transfer',
        },
      ],
    },
    {
      dataCategory: 'grant',
      grantStatus: 'approved',
      grantDeadline: '2024-05-31',
      isPartBUploaded: true,
      iban: 'MTVALL4567890123456',
      bankAccountHolder: 'John Borg',
    },
    {
      dataCategory: 'notes',
      notes: ['Smooth installation', 'Referred by previous client'],
      lastUpdate: '2024-04-01',
    },
  ],
  [
    {
      dataCategory: 'personal information',
      id: 'PV90123',
      name: 'Anna Galea',
      address: '89 Triq il-Wied, Msida, Malta MSD7890',
      email: 'annag@yahoo.com',
      phone: '21789012',
      registered: '2024-03-10',
    },
    {
      dataCategory: 'system details',
      systemType: 'new installation',
      panels: '13 x JA Solar 400w',
      inverter: 'Fronius Symo 5.0-3-M',
      batteries: 'LG Chem RESU10H Prime',
      backup: true,
      frameElevation: true,
      frameFixingType: 'Screwed to roof',
    },
    {
      dataCategory: 'installation information',
      houseCallStatus: 'done',
      houseCallScanSrc: 'PV90123housecall.pdf',
      deliveryStatus: 'pending',
      deliveryDate: '2024-04-15',
      installationStatus: 'scheduled',
      installationDate: '2024-04-20',
      installer: 'George',
      certificationStatus: 'not started',
    },
    {
      dataCategory: 'payment information',
      agent: 'Sophia',
      balanceTotal: 16500,
      paid: [
        {
          date: '2024-03-15',
          amount: 5000,
          method: 'bank transfer',
        },
      ],
    },
    {
      dataCategory: 'grant',
      grantStatus: 'applied',
      grantDeadline: '2024-06-30',
      isPartBUploaded: false,
      iban: 'MTVALL9012345678901',
      bankAccountHolder: 'Anna Galea',
    },
    {
      dataCategory: 'notes',
      notes: [
        'Interested in smart home integration',
        'Needs electrical upgrade',
      ],
      lastUpdate: '2024-04-05',
    },
  ],
  // Продолжайте добавлять клиентов до 20
];
export const clientsListData: TClientPersonalInfo[] = testClientListData.map(
  (client) => client[0]
);
