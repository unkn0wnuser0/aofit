import {
  IconClock,
  IconBarbell,
  IconApple,
  IconTarget,
  IconUsers,
  IconChartBar,
  IconDeviceMobile,
} from '@tabler/icons-react'

interface IconProps {
  size?: number
  className?: string
}

const iconMap = {
  clock: IconClock,
  barbell: IconBarbell,
  apple: IconApple,
  target: IconTarget,
  users: IconUsers,
  'chart-bar': IconChartBar,
  'device-mobile': IconDeviceMobile,
}

export type IconName = keyof typeof iconMap

interface TablerIconProps extends IconProps {
  name: IconName
}

export function TablerIcon({
  name,
  size = 24,
  className = '',
}: TablerIconProps) {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap`)
    return null
  }

  return <IconComponent size={size} className={className} />
}

export default TablerIcon
