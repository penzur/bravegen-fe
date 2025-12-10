export interface IntegrationCard {
  id: string
  name: string
  icon: string
  description: string
  iconBg?: string
}

export const integrationCards: IntegrationCard[] = [
  {
    id: '1',
    name: 'Amazon QuickSight',
    icon: '/images/quicksight.png',
    description: 'Amazon BI service to create dashboards and interactive visualisations.',
    iconBg: 'bg-cyan-500'
  },
  {
    id: '2',
    name: 'Kafka',
    icon: '/images/kafka.png',
    description: 'Real-time data streaming, event-driven architectures and messaging systems.',
    iconBg: 'bg-gray-900'
  },
  {
    id: '3',
    name: 'Power BI',
    icon: '/images/powerbi.png',
    description: 'Microsoft BI service to create dashboards and data visualisations.',
    iconBg: 'bg-yellow-500'
  },
  {
    id: '4',
    name: 'Zapier',
    icon: '/images/zapier.png',
    description: 'Automation tool that connects various apps and services to automate workflows.',
    iconBg: 'bg-orange-500'
  },
  {
    id: '5',
    name: 'Tableau',
    icon: '/images/tableu.png',
    description: 'BI service that helps seeing and transforming data into actionable insights.',
    iconBg: 'bg-blue-600'
  },
  {
    id: '6',
    name: 'Measurabl',
    icon: '/images/measurabl.png',
    description: 'Enable the push and pull of data to and from Measurabl via an API.',
    iconBg: 'bg-teal-500'
  }
]
