// File: prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        username: 'admin',
        firstname: 'Admin',
        surname: 'User',
        email: 'keith@keithjasper.co.uk',
        password: 'securepassword',
        isAdmin: true,
      },
      {
        username: 'keithjasper',
        firstname: 'Keith',
        surname: 'Jasper',
        email: 'keith@keithjasper.co.uk',
        password: 'securepassword',
        isAdmin: true,
      },
    ],
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