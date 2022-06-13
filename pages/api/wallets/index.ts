import { Fanout, FanoutClient } from '@glasseaters/hydra-sdk'
import { PrismaClient } from '@prisma/client'
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js'
import type { NextApiRequest, NextApiResponse } from 'next'
import Helpers from '../../../utils/helpers'

type Data = {
  msg: string
  data?: any
}

const FANOUT_SPACE = 300
const prisma = new PrismaClient()

const addWalletHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const getFieldsResult = Helpers.getFields([
    { name: 'cluster' },
    { name: 'wallet', processor: (pk: any) => new PublicKey(pk) },
    { name: 'authority', processor: (pk: any) => new PublicKey(pk) }
  ], req.body)

  if (getFieldsResult.error) {
    return res.status(400).json({ msg: getFieldsResult.error })
  }

  const { cluster, wallet, authority } = getFieldsResult.values

  if (cluster !== 'mainnet' && cluster !== 'devnet') {
    return res.status(400).json({
      msg: '`cluster` should be `mainnet` or `devnet`'
    })
  }

  const connection = new Connection(clusterApiUrl(cluster))
  const walletAccount = await connection.getAccountInfo(wallet)

  if (walletAccount === null) {
    return res.status(400).json({ msg: 'Invalid wallet public key' })
  }

  if (walletAccount.owner.toBase58() !== FanoutClient.ID.toBase58() ||
      walletAccount.data.length !== FANOUT_SPACE) {
    return res.status(400).json({ msg: 'Not a wallet account' })
  }

  let fanout: Fanout

  try {
    [fanout] = Fanout.deserialize(walletAccount.data)
  } catch (error) {
    return res.status(500).json({
      msg: 'Wallet account deserialization failed'
    })
  }

  if (fanout.authority.toBase58() !== authority.toBase58()) {
    return res.status(400).json({ msg: 'Invalid wallet authority' })
  }

  await prisma.wallet.create({
    data: {
      pubkey: wallet.toBuffer(),
      authority: authority.toBuffer()
    }
  })

  return res.status(200).json({ msg: 'Successfully added wallet' })
}


const getWalletsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const getFieldsResult = Helpers.getFields([
    {
      name: 'authority',
      optional: true,
      processor: (pk: any) => new PublicKey(pk)
    },
    {
      name: 'member',
      optional: true,
      processor: (pk: any) => new PublicKey(pk)
    }
  ], req.query)

  if (getFieldsResult.error) {
    return res.status(400).json({ msg: getFieldsResult.error })
  }

  const { authority, member } = getFieldsResult.values
  const conditions = []

  if (authority) {
    conditions.push({
      authority: {
        equals: authority.toBuffer()
      }
    })
  }

  if (member) {
    conditions.push({
      memberships: {
        some: {
          memberPubkey: {
            equals: member.toBuffer()
          }
        }
      }
    })
  }

  return res.status(200).json({
    msg: 'Wallets retrieved successfully',
    data: (await prisma.wallet.findMany({
      where: {
        AND: conditions
      }
    })).map(({ pubkey, authority }) => ({
      wallet: new PublicKey(pubkey).toBase58(),
      authority: new PublicKey(authority).toBase58()
    }))
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return addWalletHandler(req, res)
    case 'GET':
      return getWalletsHandler(req, res)
   default:
      return res.status(405).json({ msg: 'Method not allowed' })
  }
}
