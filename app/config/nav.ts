import {
  faEye,
  faSun,
  faClone,
  faCloud,
  faCamera,
  faCompass,
  faThumbsUp,
  faChartBar,
  faBuilding,
  faSnowflake,
  faFileLines,
  faClipboard,
  faFolderOpen,
  faHandScissors,
  faRectangleList,
  type IconDefinition,
} from '@fortawesome/free-regular-svg-icons'

export interface Nav {
  path: string
  label: string
  icon: IconDefinition
  disabled?: boolean
}

export const mainNav: Array<Nav> = [
  { path: "/", label: 'Insights', icon: faCompass },
  { path: "/collect", label: 'Collect', icon: faFolderOpen },
  { path: "/reviews", label: 'Reviews', icon: faThumbsUp },
  { path: "/carbon", label: 'Carbon', icon: faSnowflake },
  { path: "/reports", label: 'Reports', icon: faFileLines },
  { path: "/utilities", label: 'Utilities', icon: faHandScissors },
  { path: "/actions", label: 'Actions', icon: faClipboard },
]

export const settingsNav: Record<string, Array<Nav>> = {
  Organisation: [
    { path: '/manage', label: 'Manage', icon: faClone },
    { path: '/users', label: 'Users', icon: faClone },
    { path: '/tags', label: 'Tags', icon: faClone },
    { path: '/settings/integrations', label: 'Integrations', icon: faClone },
  ],
  Utilities: [
    { path: '/configuration', label: 'Configuration', icon: faSun },
    { path: '/heirarchy', label: 'Heirarchy', icon: faChartBar },
    { path: '/assets', label: 'Assets', icon: faBuilding },
  ],
  Carbon: [
    { path: '/configuration', label: 'Configuration', icon: faSun },
    { path: '/heirarchy', label: 'Heirarchy', icon: faChartBar },
    { path: '/inventory-items', label: 'Inventory Items', icon: faRectangleList },
    { path: '/emission-factors', label: 'Emission Factors', icon: faCloud },
    { path: '/snapshots', label: 'Snapshots', icon: faCamera, disabled: true },
  ],
  Displays: [
    { path: '/manage', label: 'Manage', icon: faEye },
  ],
}

export const getActiveNav = (pathname: string): Nav | undefined => {
  const navs = [...mainNav, ...Object.values(settingsNav).flat()]
  return navs.find(item => item.path.includes(pathname))
}
