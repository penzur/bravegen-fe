import type { ReactNode } from 'react'
import Sidebar from './sidebar'
import Header from './header'

export default function Dashboard({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-column bg-[#F7F7F7] text-[#383838]">
      <Sidebar />
      <div className="flex flex-1 flex-col min-h-screen relative">
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}
