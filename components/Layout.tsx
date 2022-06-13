import { ReactElement } from 'react'
import Navbar from './Navbar'
import SidebarLink from './SidebarLink'

type LayoutProps = {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="drawer">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar drawerId="nav-drawer" />
        {children}
        {/* Insert common content (e.g.: footer) here */}
      </div>
      <div className="drawer-side">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <SidebarLink href="/create" text="Create your wallet" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Layout
