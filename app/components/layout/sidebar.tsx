import { NavLink } from 'react-router'
import { FAIcon } from '../icons/fa'
import {
  faSun,
  faCompass,
  faThumbsUp,
  faSnowflake,
  faFileLines,
  faClipboard,
  faFolderOpen,
  faHandScissors,
} from '@fortawesome/free-regular-svg-icons'
import { mainNav } from '~/config/nav'

export default function Sidebar() {
  return <aside className="bg-[#1B212B] text-[#E7E8E9] w-14 h-screen flex flex-col justify-between items-center gap-4">
    <NavLink to="/" className="logo w-full min-h-12 flex items-center justify-center mt-2">
      <img src="/images/logo.png" className="h-10" />
    </NavLink>

    <nav className="flex-1 flex flex-col justify-center items-center w-full gap-4">
      {
        mainNav.map(n => <NavLink
          to={n.path}
          className={({ isActive }) => (
            `${isActive ? 'text-[#598651] ' : ''}flex flex-col hover:text-[#598651] items-center justify-center mb-2`
          )}>
          <FAIcon icon={n.icon} className="h-5! w-5!" />
          <span className="text-[10px]">{n.label}</span>
        </NavLink>)
      }
    </nav>

    <NavLink
      to="/settings/integrations"
      className={({ isActive }) => (
        `${isActive ? 'text-[#598651] ' : ''}flex flex-col hover:text-[#598651] items-center justify-center mb-2`
      )}>
      <FAIcon icon={faSun} className="h-5! w-5!" />
      <span className="text-[10px]">Settings</span>
    </NavLink>
  </aside>
}
