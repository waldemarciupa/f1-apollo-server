const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.race.create({
    data: {
      id: 'bahrain-grand-prix',
      season: '2022',
      round: '1',
      name: 'Bahrain Grand Prix',
      location: 'Sakhir',
      country: 'Bahrain',
      url: 'https://www.formula1.com/en/racing/2022/Bahrain.html',
      sessions: {
        create: {
          fp1: '2022-03-18T12:00:00Z',
          fp2: '2022-03-18T15:00:00Z',
          fp3: '2022-03-19T12:00:00Z',
          qualifying: '2022-03-19T15:00:00Z',
          gp: '2022-03-20T15:00:00Z',
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
