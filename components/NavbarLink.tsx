import Link from "next/link"
import { useRouter } from "next/router"

import styles from '../styles/NavbarLink.module.css'

type NavbarLinkProps = {
  text: string,
  href: string
}

const NavbarLink = ({ text, href }: NavbarLinkProps) => {
  const router = useRouter()
  const activeStyle = router.pathname === href ? styles.halfBorderBottom : ''

  return (
    <Link href={href}>
      <a className={`${activeStyle} border-b-[1px] pb-1 border-transparent text-black dark:text-white`}>{text}</a>
    </Link>
  )
}

export default NavbarLink
