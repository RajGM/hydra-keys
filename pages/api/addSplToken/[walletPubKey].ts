import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    let { walletPubKey, cluster } = req.query

    if (!cluster) cluster = 'devnet'

    walletPubKey = walletPubKey.toString()
    cluster = cluster.toString()

    // check if the wallet exists in db
    const wallet = await prisma.wallet.findUnique({
      where: {
        cluster_pubkey: {
          pubkey: walletPubKey,
          cluster: cluster,
        },
      },
    })

    if (!wallet) return res.status(404).json('This wallet does not exist')

    // check if spl token is already specified
    if (wallet.acceptSPL) res.status(400).json('SPL token already exists')

    // Get the spl token and the transaction
    const { splToken, tx } = req.body
    if (!splToken || !tx) res.status(400).json('Missing parameters')

    // update wallet's spl token
    try {
      const updateWallet = await prisma.wallet.update({
        where: {
          cluster_pubkey: {
            pubkey: walletPubKey,
            cluster: cluster,
          },
        },
        data: {
          acceptSPL: true,
          splToken,
        },
      })
      return res.status(200).json(updateWallet)
    } catch (e: any) {
      return res.status(400).json(e.meta.cause)
    }
  } else {
    return res.status(404).json(`Method ${req.method} not valid`)
  }
}
