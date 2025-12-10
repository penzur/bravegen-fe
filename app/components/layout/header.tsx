import { FAIcon } from '../icons/fa'
import { useLocation } from 'react-router'
import {
  faBell,
} from '@fortawesome/free-regular-svg-icons'
import {
  faQuestion,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { getActiveNav } from '~/config/nav'
import AccountMenu from '../account-menu'
import TenantMenu from '../tenant-menu'

export default function Header({
  className,
}: {
  className?: string,
}) {
  const location = useLocation()
  const activeNav = getActiveNav(location.pathname)

  return <header className={`flex justify-between gap-8 bg-white px-8 py-4 border-b-2 border-b-[#EEEEEE] ${className}`}>
    <div className="w-[256px]">
      <TenantMenu />
    </div>

    <div className="flex items-center gap-1 flex-1 font-medium">
      <FAIcon icon={activeNav?.icon!} />
      <h2>{activeNav?.label}</h2>
    </div>

    <div className="flex items-center gap-4 justify-right">
      <button className="p-2 bg-gray-200 rounded-full text-xs relative cursor-pointer hover:bg-gray-300/80">
        <FAIcon icon={faMagnifyingGlass} />
      </button>
      <button className="p-2 bg-gray-200 rounded-full text-sm relative cursor-pointer hover:bg-gray-300/80">
        <FAIcon icon={faBell} />
        <span className="text-xs absolute text-white bg-red-500 rounded-full w-4 h-4 -top-1">3</span>
      </button>
      <button className="p-2 bg-gray-200 rounded-full text-xs relative cursor-pointer hover:bg-gray-300/80">
        <FAIcon icon={faQuestion} />
      </button>
      <AccountMenu />
    </div>
  </header>
}
