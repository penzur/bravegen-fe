import { FAIcon } from '../icons/fa'
import { useLocation } from 'react-router'
import {
  faBell,
  faCircleDown,
} from '@fortawesome/free-regular-svg-icons'
import {
  faQuestion,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { getActiveNav, type Nav } from '~/config/nav'

export default function Header() {
  const location = useLocation()
  const activeNav = getActiveNav(location.pathname)

  return <header className="flex justify-between gap-8 bg-white px-8 py-4 border-b-2 border-b-[#EEEEEE]">
    <div className="w-[200px]">
      <button
        className="border border-gray-300 border-box cursor-pointer flex text-sm text-[#4A4A4A] justify-between items-center w-full h-full px-3 rounded hover:text-black hover:border-gray-400"
      >
        <span>ABC Group Ltd </span>
        <FAIcon icon={faCircleDown} />
      </button>
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
      <button className="p-2 bg-[#3B82F6] rounded text-sm text-white relative cursor-pointer font-medium hover:bg-[#3B82F6]/80">
        <span>JA</span>
      </button>
    </div>
  </header>
}
