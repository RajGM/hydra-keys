import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import styles from '../styles/DrawerMenu.module.css'
import SidebarLink from './SidebarLink'

const DrawerMenu = () => {
  const { publicKey } = useWallet()

  return (
    <div className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <div className={styles.walletBtnParent}>
        <WalletMultiButton />
      </div>
      <ul className={publicKey ? '' : 'hidden'}>
        <li>
          <SidebarLink href="/create" text="Create" />
          <SidebarLink href="/manage" text="Manage" />
        </li>
      </ul>
    </div>
  )
}

export default DrawerMenu
