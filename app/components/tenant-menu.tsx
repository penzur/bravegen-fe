import { useState } from 'react'
import { FAIcon } from './icons/fa';
import {
  faCircleDown,
  faCircleUp,
} from '@fortawesome/free-regular-svg-icons'
import {
  Dropdown,
  DropdownItem,
  DropdownSearch,
  DropdownTrigger,
  DropdownContent,
  DropdownSection,
  DropdownListItem,
} from './ui/dropdown'

export default function TenantMenu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const organizations = [
    { id: 1, name: 'Adhesif Labels Ltd', abbreviation: 'AL' },
    { id: 2, name: 'AIA Services New Zealand Limited', abbreviation: 'AS' },
    { id: 3, name: 'Air New Zealand Ltd', abbreviation: 'AN' },
    { id: 4, name: 'All Blacks Organization', abbreviation: 'AB' },
    { id: 5, name: 'All Hands Demo Limited', abbreviation: 'AH' },
    { id: 6, name: 'Acme Test', abbreviation: 'AT' },
  ];

  return <Dropdown open={isOpen} onOpenChange={setOpen}>
    <DropdownTrigger onClick={() => setOpen(!isOpen)}>
      <button
        className={`${isOpen ? 'bg-[#65AD5A]! text-white! border-[#65AD5A]!' : ''} border py-2 w-full border-gray-300 border-box cursor-pointer flex text-sm text-[#4A4A4A] justify-between items-center px-3 rounded hover:text-black hover:border-gray-400 font-medium`}
      >
        <span>ABC Group Ltd</span>
        <FAIcon icon={isOpen ? faCircleUp : faCircleDown} />
      </button>
    </DropdownTrigger>
    <DropdownContent open={isOpen} align="left" className="border border-gray-500/40 w-[256px] text-sm">
      <DropdownSection>
        <DropdownItem onClick={() => console.log('Help & Guides')} className="border-b-0 text-sm py-4 font-medium">
          Help & Guides
        </DropdownItem>
        <DropdownItem onClick={() => console.log('Terms of Use')} className="border-b-0 text-sm py-4 font-medium">
          Terms of Use
        </DropdownItem>
        <DropdownItem onClick={() => console.log('Privacy Policy')} className="border-b-0 text-sm py-4 font-medium">
          Privacy Policy
        </DropdownItem>
      </DropdownSection>

      <DropdownSection>
        <DropdownSearch
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Type to filter..."
        />
      </DropdownSection>

      <DropdownSection className="max-h-64 overflow-y-auto">
        {organizations.map((org) => (
          <DropdownListItem
            key={org.id}
            icon={org.abbreviation}
            iconBg="bg-blue-500"
            onClick={() => { }}
          >
            {org.name}
          </DropdownListItem>
        ))}
      </DropdownSection>
    </DropdownContent>
  </Dropdown>
}

