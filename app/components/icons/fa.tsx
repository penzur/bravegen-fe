import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core'

type FAIconProps = {
  icon: IconDefinition
  className?: string
}

export function FAIcon({ icon, className }: FAIconProps) {
  return <FontAwesomeIcon icon={icon} className={className} />
}

