import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const statusItem = [
  {
    name: 'todo',
  },
  {
    name: 'pending',
  },
  {
    name: 'done',
  },
  {
    name: 'doing',
  },
];

const transfer = async () => {
  const statusArr = [];
  statusItem.map((item) => {
    const status = prisma.status.create({
      data: item,
    });
    statusArr.push(status);
  });

  return await prisma.$transaction(statusArr);
};

const main = async () => {
  console.log('Start seeding ・・・');

  await transfer();

  console.log('Seeding finished ・・・');
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
