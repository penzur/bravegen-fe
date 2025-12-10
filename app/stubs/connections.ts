export interface ConnectionRow {
  id: number
  integration: string
  icon: string
  name: string
  source: 'Carbon' | 'Utility'
  entityGroup: string
  interval: string
  connectorUrl: string
}

export const generateConnectionData = (): ConnectionRow[] => {
  const integrations = [
    { name: 'Amazon Quicksight', icon: '/images/quicksight.png' },
    { name: 'Kafka', icon: '/images/kafka.png' },
    { name: 'Zapier', icon: '/images/zapier.png' },
    { name: 'Tableau', icon: '/images/tableu.png' },
    { name: 'Power BI', icon: '/images/powerbi.png' },
    { name: 'Measurabl', icon: '/images/measurabl.png' }
  ]

  const sources: ('Carbon' | 'Utility')[] = ['Carbon', 'Utility']
  const intervals = ['-', 'Monthly', 'Yearly', 'ToU', 'Daily', 'Weekly']
  const names = ['Energy', 'Logistics', 'Operations', 'Water', 'Gas', 'Electricity ToU', 'Solar']
  const entities = [
    'ABC Group LTD - Energy',
    'ABC Group LTD - Logistics',
    '135 Albert St - Water',
    '135 Albert St - Gas',
    'XYZ Corp - Operations',
    'Demo Building - Electricity'
  ]

  const data: ConnectionRow[] = []

  for (let i = 1; i <= 50; i++) {
    const integration = integrations[Math.floor(Math.random() * integrations.length)]
    data.push({
      id: i,
      integration: integration.name,
      icon: integration.icon,
      name: names[Math.floor(Math.random() * names.length)],
      source: sources[Math.floor(Math.random() * sources.length)],
      entityGroup: entities[Math.floor(Math.random() * entities.length)],
      interval: intervals[Math.floor(Math.random() * intervals.length)],
      connectorUrl: `https://localhost/connector${i}`
    })
  }

  return data
}
