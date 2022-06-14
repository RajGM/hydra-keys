import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import {
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui'
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import { Cluster, clusterApiUrl } from '@solana/web3.js'
import { ReactElement, useMemo } from 'react'
import { useAppSelector } from '../hooks/useAppSelector'
import { selectCluster } from '../redux/features/wallet/walletSlice'
import Navbar from './Navbar'
import SidebarLink from './SidebarLink'

import styles from '../styles/Layout.module.css'

require('@solana/wallet-adapter-react-ui/styles.css')

type LayoutProps = {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  const cluster = useAppSelector(selectCluster)

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({
        network: cluster as WalletAdapterNetwork,
      }),
      new TorusWalletAdapter(),
    ],
    [cluster]
  )

  return (
    <ConnectionProvider endpoint={clusterApiUrl(cluster)}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen">
            <div className="drawer">
              <input
                id="nav-drawer"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <Navbar drawerId="nav-drawer" />
                {children}
                {/* Insert common content (e.g.: footer) here */}
              </div>
              <div className="drawer-side">
                <label htmlFor="nav-drawer" className="drawer-overlay"></label>
                <div className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                  <div className={styles.walletBtnParent}>
                    <WalletMultiButton />
                  </div>
                  <ul>
                    <li>
                      <SidebarLink href="/create" text="Create" />
                      <SidebarLink href="/manage" text="Manage" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default Layout
