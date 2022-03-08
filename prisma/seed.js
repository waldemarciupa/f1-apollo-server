const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.race.create({
    data: {
      id: 'bahrain-grand-prix-2022',
      season: '2022',
      round: '1',
      name: 'Bahrain Grand Prix',
      url: 'https://en.wikipedia.org/wiki/Bahrain_Grand_Prix',
      circuit: {
        create: {
          id: 'bahrain-international-circuit',
          name: 'Bahrain International Circuit',
          location: 'Sakhir',
          country: 'Bahrain',
          firstGrandPrix: '2004',
          numberOfLaps: '57',
          circuitLength: '5.412',
          raceDistance: '308.238',
          url: 'https://en.wikipedia.org/wiki/Bahrain_International_Circuit',
        },
      },
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
