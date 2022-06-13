import Image from 'next/image'
import Link from 'next/link'
import NavbarLink from './NavbarLink'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center py-4">
      <div className="flex flex-row justify-start items-center gap-6">
        <Image
          src="/logo.png"
          width="90px"
          height="90px"
          className="grayscale dark:grayscale-0 dark:brightness-0 dark:invert"
        />
        <h1 className="text-xl font-bold text-[rgba(0,0,0,0.82)] dark:text-[#F9F8F8]">
          <Link href="/">
            Hydra Wallet
          </Link>
        </h1>
      </div>
      <div className="flex flex-row justify-end items-center gap-10">
        <NavbarLink href="/create" text="Create your wallet" />
        <ThemeToggle />
        <button className="btn btn-primary px-6 text-lg font-normal">
          Connect
        </button>
      </div>
    </div>
  )
}

export default Navbar
