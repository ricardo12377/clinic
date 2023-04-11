import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const doctors = await prisma.doctor.findMany();
      res.json(doctors);
    } catch (err) {
      res.status(500);
    }
  }

  if (req.method === 'POST') {
    const { name, email } = req.body;
    const doctor = await prisma.doctor.create({
      data: {
        name,
        email
      }
    });
    res.json(doctor);
  }

  if (req.method === 'PUT') {
    const { id, name, email, isActive } = req.body;
    const doctor = await prisma.doctor.update({
      where: {
        id
      },
      data: {
        name,
        email,
        isActive
      }
    });
    res.json(doctor);
  }

  if (req.method === 'DELETE') {
    const { id } = req.body;
    const doctor = await prisma.doctor.delete({
      where: {
        id
      }
    });
    res.json(doctor);
  }
}
