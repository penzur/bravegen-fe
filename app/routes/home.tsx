import Dashboard from '~/components/layout/dashboard'
import type { Route } from './+types/home'

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Home Page' },
    { name: 'description', content: 'This is home page' },
  ];
}

export default function Home() {
  return <Dashboard>
    <div className="w-full h-full px-8 py-4">
    </div>
  </Dashboard>
}
