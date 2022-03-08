const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.race.create({
    data: {
      id: 'australian-grand-prix-2022',
      season: '2022',
      round: '3',
      name: 'Australian Grand Prix',
      location: 'Melbourne',
      country: 'Australia',
      url: 'https://www.formula1.com/en/racing/2022/Australia.html',
      sessions: {
        create: {
          fp1: '2022-04-08T03:00:00Z',
          fp2: '2022-04-08T06:00:00Z',
          fp3: '2022-04-09T03:00:00Z',
          qualifying: '2022-04-09T06:00:00Z',
          gp: '2022-04-10T05:00:00Z',
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
