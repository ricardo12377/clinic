import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    if (req.body) {
      try {
        const doctors = await prisma.consult.findMany({
          where: {
            doctorId: req.body.data.doctorId
          }
        });
        res.json(doctors);
      } catch (err) {
        res.status(500);
      }
    } else {
      try {
        const doctors = await prisma.consult.findMany();
        res.json(doctors);
      } catch (err) {
        res.status(500);
      }
    }
  }
}
