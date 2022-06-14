import Image from 'next/image'
import Link from 'next/link'
import NavbarLink from './NavbarLink'
import ThemeToggle from './ThemeToggle'

type NavbarProps = {
  drawerId: string
}

const Navbar = ({ drawerId }: NavbarProps) => {
  return (
    <div className="container mx-auto flex flex-row justify-between items-center py-6">
      <div className="flex flex-row justify-start items-center gap-10">
        <Link href="/">
          <a className="leading-[0] relative w-[60px] h-[60px] sm:w-[90px] sm:h-[90px]">
            <Image
              src="/logo.png"
              alt="Hydra Wallet logo"
              layout="fill"
              className="grayscale dark:brightness-0 dark:invert"
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <h1 className="hidden md:block text-lg font-bold dark:text-[#F9F8F8]">Hydra Wallet</h1>
          </a>
        </Link>
      </div>
      <div className="flex flex-row justify-end items-center gap-4 sm:gap-8">
        <div className="hidden sm:block">
          <NavbarLink href="/create" text="Create your wallet" />
        </div>
        <ThemeToggle />
        <button className="btn btn-primary hidden sm:block">Connect</button>
        <label
          htmlFor={drawerId}
          className="btn btn-square btn-ghost drawer-button sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="dark:text-white inline-block w-7 h-7 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  )
}

export default Navbar
