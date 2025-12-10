export function Badge({ children, variant = 'default' }: { children: React.ReactNode; variant?: string }) {
  const variants: Record<string, string> = {
    default: 'bg-gray-100 text-gray-700 border border-gray-300',
    carbon: 'bg-orange-100 text-orange-700 border border-orange-300',
    utility: 'bg-green-100 text-green-700 border border-green-300',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
