import { type IntegrationCard } from "~/stubs/integrations"
export function IntegrationCard({ name, icon, description, iconBg = 'bg-blue-500' }: IntegrationCard) {
  return (
    <div className='bg-[#EFEFEF] rounded-lg border border-gray-200 p-6 hover:shadow-sm transition-shadow'>
      <div className='flex items-center gap-3 mb-3'>
        <div className={`w-10 h-10 ${iconBg} rounded flex items-center justify-center flex-shrink-0`}>
          <img src={icon} />
        </div>
        <h3 className='text-base font-medium text-gray-900'>{name}</h3>
      </div>
      <p className='text-sm text-gray-600 mb-4 leading-relaxed'>{description}</p>
      <button className='cursor-pointer px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors'>
        Add Connection
      </button>
    </div>
  )
}
