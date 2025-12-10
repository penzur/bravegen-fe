export function Table({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
      <div className='overflow-x-auto'>
        <table className='w-full'>
          {children}
        </table>
      </div>
    </div>
  )
}

export function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <thead className='bg-gray-50 border-b border-gray-200'>
      {children}
    </thead>
  )
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return (
    <tbody className='bg-white divide-y divide-gray-200'>
      {children}
    </tbody>
  )
}

export function TableRow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <tr className={`hover:bg-gray-50 transition-colors ${className}`}>
      {children}
    </tr>
  )
}

export function TableHead({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}>
      {children}
    </th>
  )
}

export function TableCell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <td className={`px-6 py-2 whitespace-nowrap text-sm ${className}`}>
      {children}
    </td>
  )
}
