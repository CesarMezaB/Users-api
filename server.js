const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//cors
const cors =require("cors");

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/users', async (req, res) => {
    const allUsers =  await prisma.users_test_cesar_meza.findMany({});
    res.json(allUsers);
  });

  app.post('/users', async (req, res) => {
    const user = {
      name: req.body.name,
      secondName: req.body.secondName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      marternalName: req.body.marternalName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber
     };
    const message = 'usuario creado.';
    await prisma.users_test_cesar_meza.create({data: user});
    return res.json({message});
  });

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});