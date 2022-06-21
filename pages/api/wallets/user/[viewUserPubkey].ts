// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Membership, PrismaClient,Wallet } from '@prisma/client';
import { MembershipModel } from '@glasseaters/hydra-sdk';

const prisma=new PrismaClient();


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { viewUserPubkey } = req.query;

    const wallets=await prisma.wallet.findMany();
    const membersdb=await prisma.membership.findMany();
    console.log(viewUserPubkey);
    console.log(wallets);

    console.log(await prisma.$queryRaw`SELECT * FROM wallet`);
    const result: []  = await prisma.$queryRaw`SELECT * FROM wallet WHERE pubkey=( SELECT walletPubkey FROM membership WHERE membership.memberPubkey=${viewUserPubkey}) 
    UNION SELECT * FROM wallet WHERE authority=${viewUserPubkey}`;
    //const authorityOf: [] = await prisma.$queryRaw`SELECT * FROM wallet WHERE authority=${viewUserPubkey}`;
    //console.log(await prisma.$queryRaw`SELECT * FROM membership WHERE memberPubkey=${viewUserPubkey}`);
    console.log("result");
    console.log(result);
    if(result.length>0){
        res.status(200).json({found:true, 
            in:result});
            return;
    }
      res.status(200).json({found:false});
  }