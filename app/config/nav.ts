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

export const mainNav = [
  { path: "/", label: 'Insights', icon: faCompass },
  { path: "/collect", label: 'Collect', icon: faFolderOpen },
  { path: "/reviews", label: 'Reviews', icon: faThumbsUp },
  { path: "/carbon", label: 'Carbon', icon: faSnowflake },
  { path: "/reports", label: 'Reports', icon: faFileLines },
  { path: "/utilities", label: 'Utilities', icon: faHandScissors },
  { path: "/actions", label: 'Actions', icon: faClipboard },
]

export const settingsNav = {
  Organisation: [
    { path: '#', label: 'Manage', icon: faClone },
    { path: '#', label: 'Users', icon: faClone },
    { path: '#', label: 'Tags', icon: faClone },
    { path: '/settings/integrations', label: 'Integrations', icon: faClone },
  ],
  Utilities: [
    { path: '#', label: 'Configuration', icon: faSun },
    { path: '#', label: 'Heirarchy', icon: faChartBar },
    { path: '#', label: 'Assets', icon: faBuilding },
  ],
  Carbon: [
    { path: '#', label: 'Configuration', icon: faSun },
    { path: '#', label: 'Heirarchy', icon: faChartBar },
    { path: '#', label: 'Inventory Items', icon: faRectangleList },
    { path: '#', label: 'Emission Factors', icon: faCloud },
    { path: '#', label: 'Snapshots', icon: faCamera, disabled: true },
  ],
  Displays: [
    { path: '#', label: 'Manage', icon: faEye },
  ],
}

export const getActiveNav = (pathname: string): Nav | undefined => {
  const navs = [...mainNav, ...Object.values(settingsNav).flat()]
  return navs.find(item => item.path.includes(pathname))
}
