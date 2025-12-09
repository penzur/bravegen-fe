import Dashboard from '~/components/layout/dashboard'
import type { Route } from './+types/integrations'

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Settings - Integrations' },
    { name: 'description', content: 'Integrations settings page' },
  ];
}

export default function Integrations() {
  return <Dashboard>
    <div className="w-full h-full px-8 py-4">
      <h2 className="text-5xl bold">Integrations</h2>
    </div>
  </Dashboard>
}
