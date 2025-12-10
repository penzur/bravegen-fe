import { NavLink } from 'react-router'
import type { Nav } from '~/config/nav'
import { FAIcon } from '../icons/fa'

export interface NavSection {
  title?: string
  items: Nav[]
}

export interface SideNavProps {
  config: NavSection[]
  className?: string
}

export interface NavItemProps {
  item: Nav
}

export interface NavSectionProps {
  section: NavSection
}

export function NavItemComponent({ item }: NavItemProps): React.ReactElement {
  const baseClasses = "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium"
  const defaultClasses = "text-gray-700 hover:bg-gray-100"
  const activeClasses = "bg-[#68AB0B]! text-white hover:bg-[#68AB0B] group active"
  const disabledClasses = "text-gray-400 cursor-not-allowed"

  if (item.disabled) {
    return (
      <div className={`${baseClasses} ${disabledClasses}`}>
        <span className="w-5 h-5 flex-shrink-0"><FAIcon icon={item.icon} /></span>
        <span>{item.label}</span>
      </div>
    )
  }

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) => {
        return `${baseClasses} ${defaultClasses}} ${isActive ? activeClasses : ''}`
      }}
    >
      <span
        className="w-5 h-5 flex-shrink-0 text-[#68AB0B] group-[.active]:text-white"
      >
        <FAIcon icon={item.icon} />
      </span>
      <span>{item.label}</span>
    </NavLink>
  )
}

export function NavSectionComponent({ section }: NavSectionProps): React.ReactElement {
  return (
    <div className="mb-6">
      {section.title && (
        <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500 tracking-wider">
          {section.title}
        </h3>
      )}
      <nav className="space-y-1">
        {section.items.map((item, index) => (
          <NavItemComponent key={index} item={item} />
        ))}
      </nav>
    </div>
  )
}

export function SideNav({ config, className = '' }: SideNavProps): React.ReactElement {
  return (
    <aside className={`bg-gray-50 ${className}`}>
      {config.map((section, index) => (
        <NavSectionComponent key={index} section={section} />
      ))}
    </aside>
  )
}
