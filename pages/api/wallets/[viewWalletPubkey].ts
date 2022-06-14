// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma=new PrismaClient();

type Data = {
  found: boolean,
  pubkey: string,
  authority:string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    console.log(req.query);
    const { viewWalletPubkey } = req.query;
    console.log(viewWalletPubkey);

    const wallets=await prisma.wallet.findMany();
    console.log(wallets);
    //console.log(Object.entries(wallets));
    console.log("hello!");
    for (let index = 0; index < wallets.length; index++) {
        const element = wallets[index];
        console.log(element.pubkey); //I can do this since wallet addresses must be unique and there will be no two wallets with the same address
        if(element.pubkey===viewWalletPubkey){
            res.status(200).json({found:true, pubkey: element.pubkey, authority: element.authority});
            return;
        }
    }
    
    res.status(200).json({found:false, pubkey: '',authority:''});
    
  }