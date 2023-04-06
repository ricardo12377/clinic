import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    if (req.query) {
      try {
        const doctors = await prisma.consult.findMany({
          where: {
            doctorId: req.query
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
