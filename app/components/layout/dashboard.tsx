import type { ReactNode } from 'react'
import Sidebar from './sidebar'
import Header from './header'

export default function Dashboard({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-column bg-[#F7F7F7] text-[#383838]">
      <Sidebar className="fixed z-12" />
      <div className="flex flex-1 flex-col min-h-screen relative">
        <Header className="fixed w-full z-10 pl-22" />
        <main className="flex-1 mt-16">
          {children}
        </main>
      </div>
    </div>
  )
}
