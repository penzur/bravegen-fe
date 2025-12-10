import Dashboard from '~/components/layout/dashboard'
import type { Route } from './+types/integrations'
import SettingsNav from '~/components/settings-nav';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Settings - Integrations' },
    { name: 'description', content: 'Integrations settings page' },
  ];
}

export default function Integrations() {
  return <Dashboard>
    <div className="flex w-full h-full px-8 pt-8 gap-8">
      <SettingsNav className="w-[256px]!" />
      <div className="flex-1">
      </div>
    </div>
  </Dashboard>
}
