import { useState } from 'react'
import { Dropdown, DropdownTrigger, DropdownItem, DropdownContent } from './ui/dropdown'

export default function AccountMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return <Dropdown open={isOpen} onOpenChange={setIsOpen}>
    <DropdownTrigger onClick={() => setIsOpen(!isOpen)}>
      <button className="p-2 bg-[#3B82F6] rounded text-sm text-white relative cursor-pointer font-medium hover:bg-[#3B82F6]/80">
        <span>JA</span>
      </button>
    </DropdownTrigger>
    <DropdownContent open={isOpen} align="right" className="w-[200px]">
      <DropdownItem onClick={() => { }}>
        <span className="text-sm font-medium">Account Settings</span>
      </DropdownItem>
      <DropdownItem onClick={() => { }}>
        <span className="text-sm font-medium">Sign Out</span>
      </DropdownItem>
    </DropdownContent>
  </Dropdown>
}
