// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Membership, PrismaClient } from '@prisma/client';
import { MembershipModel } from '@glasseaters/hydra-sdk';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  
    try{

      await prisma.membership.deleteMany({});
      await prisma.wallet.deleteMany({});
      res.status(200).json({status:"Database has been cleared"});
    }
    catch{
      console.log("error");
      return;
    }

}