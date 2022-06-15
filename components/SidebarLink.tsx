import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { toggleSidebar } from '../redux/features/sidebar/sidebarSlice'

type SidebarLinkProps = {
  text: string
  href: string
}

const SidebarLink = ({ text, href }: SidebarLinkProps) => {
  const router = useRouter()
  const activeStyle =
    router.pathname === href ? 'bg-primary text-primary-content' : ''
  const dispatch = useAppDispatch()

  return (
    <Link href={href}>
      <a
        className={`${activeStyle} text-black dark:text-white`}
        onClick={() => dispatch(toggleSidebar())}
      >
        {text}
      </a>
    </Link>
  )
}

export default SidebarLink
