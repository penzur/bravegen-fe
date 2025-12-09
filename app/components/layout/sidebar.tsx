import { Link } from "react-router"
import { FAIcon } from "../icons/fa"
import {
  faSun,
  faCompass,
  faThumbsUp,
  faSnowflake,
  faFileLines,
  faClipboard,
  faFolderOpen,
  faHandScissors,
} from "@fortawesome/free-regular-svg-icons"

const navItems = [
  { to: '/insights', icon: faCompass, label: 'Insights' },
  { to: '/collect', icon: faFolderOpen, label: 'Collect' },
  { to: '/reviews', icon: faThumbsUp, label: 'Reviews' },
  { to: '/carbon', icon: faSnowflake, label: 'Carbon' },
  { to: '/reports', icon: faFileLines, label: 'Reports' },
  { to: '/utilities', icon: faHandScissors, label: 'Utilities' },
  { to: '/actions', icon: faClipboard, label: 'Actions' },
]

export default function Sidebar() {
  return <aside className="bg-[#1B212B] text-[#E7E8E9] w-12 h-screen flex flex-col justify-between items-center gap-4">
    <Link to="/" className="logo w-full min-h-12 flex items-center justify-center mt-2">
      <img src="/images/logo.png" className="h-9" />
    </Link>

    <nav className="flex-1 flex flex-col justify-center items-center w-full gap-4">
      {
        navItems.map(n => <Link to={n.to} className="flex flex-col hover:text-[#598651] items-center justify-center gap-1">
          <FAIcon icon={n.icon} className="h-5! w-5!" />
          <span className="text-[10px]">{n.label}</span>
        </Link>)
      }
    </nav>

    <Link to="/settings/integrations" className="flex flex-col hover:text-[#598651] items-center justify-center gap-1 mb-2">
      <FAIcon icon={faSun} className="h-5! w-5!" />
      <span className="text-[10px]">Settings</span>
    </Link>
  </aside>
}
