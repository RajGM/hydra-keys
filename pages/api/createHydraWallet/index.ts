// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Membership, PrismaClient } from '@prisma/client';
import { MembershipModel } from '@glasseaters/hydra-sdk';

const prisma=new PrismaClient();

export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log("post");
    const body=req.body;
    try{
      console.log(body.a);
    }
    catch{
      return;
    }
    return;
  } else {
    res.status(200).json({found:false});
    return;
  }

}