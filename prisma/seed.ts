import { Prisma, PrismaClient } from '@prisma/client';
const toDoDummyData: Prisma.ToDoCreateInput[] = [
  {
    title: 'Cleaning',
    description: 'Do dishes and vacuum',
  },
  {
    title: 'Coocking',
    description: 'Make dinner',
  },
  {
    title: 'To chill',
    description: 'Just relax',
  },
];
const prisma = new PrismaClient();
async function main() {
  await prisma.toDo.createMany({ data: toDoDummyData });
  console.log('To-Do items created successfully.');
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
