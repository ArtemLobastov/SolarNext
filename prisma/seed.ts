'use server';
import { Prisma, PrismaClient } from '@prisma/client';
import { string } from 'zod';
export type User = Omit<Prisma.UserCreateInput, 'role'> & {
  roleId: number;
};
type Sale = Omit<Prisma.SaleCreateInput, 'customer' | 'agent'> & {
  customerId: number;
  agentId: number;
};
type Job = Omit<Prisma.JobCreateInput, 'customer'> & { customerId: number };
const prisma = new PrismaClient();
// DUMMY DATA
const toDoDummyData: Prisma.ToDoCreateInput[] = [
  {
    title: 'Cleaning',
    description: 'Do dishes and vacuum',
  },
  {
    title: 'Cooking',
    description: 'Make dinner',
  },
  {
    title: 'To chill',
    description: 'Just relax',
  },
];

const productCategoryDummyData: Prisma.ProductCategoryCreateInput[] = [
  { name: 'Invertors' },
  { name: 'Solar Panels' },
  { name: 'Batteries' },
  { name: 'Backups' },
  { name: 'FrameParts' },
  { name: 'ElectricalParts' },
];

const productStatusDummyData: Prisma.ProductStatusCreateInput[] = [
  { name: 'In stock' },
  { name: 'Low stock' },
  { name: 'Ordered' },
  { name: 'Out of stock' },
];

const userRoleDummyData: Prisma.UserRoleCreateInput[] = [
  {
    name: 'Admin',
  },
  {
    name: 'Manager',
  },
  {
    name: 'Installer',
  },
  {
    name: 'Agent',
  },
];
const userDummyData: User[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (123) 456-7890',
    roleId: 1,
    email: 'john@example.com',
    password: '123',
  },
  {
    firstName: 'Artem',
    lastName: 'Lobastov',
    email: 'artem.lobastov@example.mt',
    password: 'securePass1!',
    phone: '77767543',
    roleId: 1,
    avatarSrc: 'user_avatar.jpg',
  },
  {
    firstName: 'Brooke',
    lastName: 'Borg',
    email: 'brooke.borg@example.mt',
    password: 'securePass1!',
    phone: '21345678',
    roleId: 1,
    activated: true,
    avatarSrc: '',
  },
  {
    firstName: 'Carmen',
    lastName: 'Vella',
    email: 'carmen.vella@example.mt',
    password: 'valettaFan42!',
    phone: '21567890',
    roleId: 2,
    activated: false,
    avatarSrc: '',
  },
  {
    firstName: 'Paul',
    lastName: 'Zammit',
    email: 'paul.zammit@example.mt',
    password: 'gozo1234!',
    phone: '21678901',
    roleId: 3,
    activated: true,
    avatarSrc: '',
  },
  {
    firstName: 'Anna',
    lastName: 'Galea',
    email: 'anna.galea@example.mt',
    password: 'mdina2023!',
    phone: '21789012',
    roleId: 4,
    activated: true,
    avatarSrc: '',
  },
];
const customerDummyData: Prisma.CustomerCreateInput[] = [
  {
    firstName: 'Abner',
    lastName: 'Grech',
    phone: '21234567',
    email: 'abnergrech@gmail.com',
    address: '131 Triq il-Kbira, Qormi, Malta QRM1403',
    notes: 'farmhouse',
  },
  {
    firstName: 'Marija',
    lastName: 'Borg',
    phone: '77123456',
    email: 'marija.borg@hotmail.com',
    address: '45 Triq San Pawl, Valletta, Malta VLT1234',
    notes: 'gatecode: 4507',
  },
  {
    firstName: 'Joseph',
    lastName: 'Camilleri',
    email: 'jcamilleri@outlook.com',
    phone: '79876543',
    address: '78 Triq ir-Repubblika, Mosta, Malta MST2468',
  },
];
const salesDummyData: Sale[] = [
  {
    status: 'new',
    customerId: 1,
    agentId: 1,
    soldProducts: '10 panels, inverter SE 3680H',
    totalPrice: 6250,
  },
  {
    status: 'deposit',
    customerId: 2,
    agentId: 1,
    soldProducts: 'Tesla battery',
    totalPrice: 13250,
    notes: 'deposit 2000euro gained',
  },
  {
    status: 'paid',
    customerId: 3,
    agentId: 1,
    soldProducts: '4 panels, Tesla battery',
    totalPrice: 20150,
    notes: 'bank transaction',
  },
];
const jobsDummyData: Job[] = [
  {
    customerId: 1,
    installerId: 2,
    jobType: 'new installation',
    description: 'Install solar panels on the roof',
    location: '123 Main St, Valletta',
    jobDate: new Date('2024-07-15'),
    assignee: 'John Doe',
    status: 'booked',
    remainingBalance: 9000,
  },
  {
    customerId: 2,
    installerId: 2,
    jobType: 'upgrade',
    description: 'install 4 panels and tesla battery',
    location: '123 Main St, Valletta',
    jobDate: new Date('2024-07-15'),
    assignee: 'John Doe',
    status: 'booked',
    remainingBalance: 1000,
  },
  {
    customerId: 3,
    installerId: 2,
    jobType: 'house call',
    description: 'house call for tesla battery',
    location: '789 Oak St, Valletta',
    jobDate: new Date('2024-07-15'),
    assignee: 'John Doe',
    status: 'pending',
    remainingBalance: 20000,
  },
];
// SEED main logic
async function main() {
  // clear DBs
  await prisma.product.deleteMany({});
  await prisma.productCategory.deleteMany({});
  await prisma.productStatus.deleteMany();
  await prisma.userRole.deleteMany();
  await prisma.user.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.sale.deleteMany();
  await prisma.job.deleteMany();
  await prisma.toDo.deleteMany();
  console.log('****Existing data cleared.****');
  //Creating user roles
  await prisma.userRole.createMany({ data: userRoleDummyData });
  console.log('****User roles created successfully.****');
  await prisma.user.createMany({ data: userDummyData });
  console.log('****Users created successfully.****');

  //TODO: refactor so product section ids are the same each seed
  //TODO refactor product seed without connect to createMany and specificID with custom type
  // Product category creation
  const categories = await Promise.all(
    productCategoryDummyData.map((category) =>
      prisma.productCategory.create({ data: category })
    )
  );
  console.log('****Product categories created successfully.****');

  // Product status creation
  const statuses = await Promise.all(
    productStatusDummyData.map((status) =>
      prisma.productStatus.create({ data: status })
    )
  );
  console.log('****Product statuses created successfully.****');

  // Product creation
  const productDummyData: Prisma.ProductCreateInput[] = [
    {
      name: 'Monocrystalline Panel 330W',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagePath: '/img/panels/test.jpg',
      category: { connect: { id: categories[1].id } }, // Solar Panels
      status: { connect: { id: statuses[0].id } }, // In stock
      price: 199.99,
      quantity: 200,
      notes: 'bifacial',
    },
    {
      name: 'SE 3600H',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagePath: '/img/inverters/test.jpg',
      category: { connect: { id: categories[0].id } }, // Invertors
      status: { connect: { id: statuses[0].id } }, // In stock
      price: 2099.99,
      quantity: 10,
      notes: 'hybrid',
    },
    {
      name: 'Aluminium 2-tier A-frame 3.2m',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagePath: '/img/frame/test.jpg',
      category: { connect: { id: categories[4].id } }, // FrameParts
      status: { connect: { id: statuses[0].id } }, // In stock
      price: 300.99,
      quantity: 25,
    },
  ];

  for (const product of productDummyData) {
    await prisma.product.create({ data: product });
  }
  console.log('****Products created successfully.****');

  //Customers creation
  await prisma.customer.createMany({ data: customerDummyData });
  console.log('****Customers created successfully.****');
  // Sales creation
  await prisma.sale.createMany({ data: salesDummyData });
  console.log('****Sales created successfully.****');
  // Jobs creation
  await prisma.job.createMany({ data: jobsDummyData });
  console.log('****Jobs created successfully.****');
  // Создание To-Do элементов
  await prisma.toDo.createMany({ data: toDoDummyData });
  console.log('****To-Do items created successfully.****');
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
