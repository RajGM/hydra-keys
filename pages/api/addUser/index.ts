// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

import { clusterApiUrl, Connection } from '@solana/web3.js'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    /* Flow:
     *   - Validate parameters
     *   - Save member into database
     *   - Forward serialized transaction
     *   - If transaction fails, remove member from database
     *   - Otherwise, return saved member data
     */

    const {
      tx, // Serialzied  transaction
      memberPubkey,
      shareCount,
      walletPubKey,
      cluster,
    } = req.body

    let insertedIntoDb = false
    let sentTransaction = false
    try {
      //Body for new user should be as follows:
      //memberPubkey
      //shareCount
      //walletPubkey

      const savedWallet = await prisma.membership.create({
        data: {
          memberPubkey: memberPubkey,
          shareCount: shareCount,
          walletPubkey: walletPubKey,
          cluster: cluster,
        },
      })
      insertedIntoDb = true
      // Forward serialized transaction
      const connection = new Connection(clusterApiUrl(cluster), 'confirmed')
      const signature = await connection.sendEncodedTransaction(tx)
      const result = await connection.confirmTransaction({
        ...(await connection.getLatestBlockhash()),
        signature,
      })

      // Transaction failed?
      if (result.value.err) {
        throw {
          response: {
            msg: `Transaction failed: ${result.value.err.toString()}`,
          },
        }
      }

      sentTransaction = true
      res.status(200).json({ data: savedWallet })
    } catch (error: any) {
      if (insertedIntoDb && !sentTransaction) {
        await prisma.membership.delete({
          where: {
            cluster_walletPubkey_memberPubkey: {
              memberPubkey: memberPubkey,
              walletPubkey: walletPubKey,
              cluster: cluster,
            },
          },
        })
      }
    }
  } else {
    res.status(405).json({ msg: 'Only POST requests are allowed' })
  }
}
