// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Membership, PrismaClient } from '@prisma/client';
import { MembershipModel } from '@glasseaters/hydra-sdk';

const prisma=new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log("post");
    const body=req.body;
    try{
      //Body for new wallet should be as follows:
      //wallet pubkey
      //authority
      //acceptSPL
      //totalShares (can later update this to be automatic though)
      const initMembers: Membership[] = [];
      const savedWallet = await prisma.wallet.create({
        data:{
          pubkey:body.pubkey,
          authority:body.authority,
          acceptSPL:body.acceptSPL,
          memberShipType:body.memberShipType,
          totalShares:body.totalShares

        }
      });
      console.log(savedWallet);
      console.log(body);
    }
    catch{
      console.log("error");
      return;
    }
    return;
  } else {
    res.status(200).json({found:false});
    return;
  }

}