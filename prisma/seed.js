const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const user = await prisma.users_test_cesar_meza.upsert({
      where: { name: 'marcos' },
      update: {},
      create: {
        name: 'marcos',
				secondName: 'luis',
				lastName: 'perez',
                marternalName:'hernandez',
                dateOfBirth: new Date(1995, 11, 17),
                email: 'juan78@hotmail.com',
                phoneNumber: '6643496568'
      },
    });

    console.log('Create 1 user');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();