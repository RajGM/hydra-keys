import {
  Fanout,
  FanoutClient,
  FanoutMembershipVoucher,
} from '@glasseaters/hydra-sdk'
import {
  useAnchorWallet,
  useConnection,
} from '@solana/wallet-adapter-react'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import WalletsList, { WalletInfo } from '../components/WalletsList'

const Manage: NextPage = () => {
  const [hydraWallets, setHydraWallets] = useState([] as WalletInfo[])

  const { connection } = useConnection()
  const wallet = useAnchorWallet()

  const getOwnWallets = async (): Promise<WalletInfo[]> => {
    if (!wallet) {
      return []
    }

    return (
      await connection.getProgramAccounts(FanoutClient.ID, {
        filters: [
          {
            dataSize: 300,
          },
          {
            memcmp: {
              offset: 8,
              bytes: wallet.publicKey.toBase58(),
            },
          },
        ],
      })
    ).map(({ account, pubkey }) => {
      const fanout = Fanout.deserialize(account.data)[0]
      return {
        name: fanout.name,
        pubkey: pubkey.toBase58(),
        authority: fanout.authority.toBase58(),
      }
    })
  }

  const getMembershipWallets = async (): Promise<WalletInfo[]> => {
    if (!wallet) {
      return []
    }

    const fanoutKeys = (
      await connection.getProgramAccounts(FanoutClient.ID, {
        filters: [
          {
            dataSize: 153,
          },
          {
            memcmp: {
              offset: 8 + 32 + 8 + 8 + 1,
              bytes: wallet.publicKey.toBase58(),
            },
          },
        ],
      })
    ).map(
      ({ account }) =>
        FanoutMembershipVoucher.deserialize(account.data)[0].fanout
    )

    return (await connection.getMultipleAccountsInfo(fanoutKeys))
      .map((account, index) => ({ account, pubkey: fanoutKeys[index] }))
      .filter(({ account }) => account)
      .map(({ account, pubkey }) => {
        const fanout = Fanout.deserialize(account!.data)[0]
        return {
          name: fanout.name,
          pubkey: pubkey.toBase58(),
          authority: fanout.authority.toBase58(),
        }
      })
  }

  useEffect(() => {
    if (wallet) {
      (async () => {
        const ownWallets = await getOwnWallets()
        const membershipWallets = await getMembershipWallets()
        setHydraWallets(ownWallets.concat(membershipWallets))
      })()
    } else {
      setHydraWallets([])
    }
  }, [wallet])

  return (
    <div className="container mx-auto pt-8 px-6 flex flex-col justify-start items-start">
      <h1 className="text-2xl font-extrabold font-['Nunito',sans-serif]">
        Your Hydra Wallets
      </h1>
      <WalletsList className="mt-12 w-full" wallets={hydraWallets} />
    </div>
  )
}

export default Manage
