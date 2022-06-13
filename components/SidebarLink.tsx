import Link from "next/link"
import { useRouter } from "next/router"

type SidebarLinkProps = {
  text: string,
  href: string
}

const SidebarLink = ({ text, href }: SidebarLinkProps) => {
  const router = useRouter()
  const activeStyle = router.pathname === href ? 'bg-primary text-primary-content' : ''

  return (
    <Link href={href}>
      <a className={`${activeStyle} text-black dark:text-white`}>{text}</a>
    </Link>
  )
}

export default SidebarLink
