import type { ReactNode } from "react";
import Sidebar from "./sidebar";

export default function Dashboard({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-column">
      <Sidebar />
      <div className="flex-1 min-h-screen relative border">
        <main className="pt-16 pl-64 border border-red-500">
          {children}
        </main>
      </div>
    </div>
  )
}
