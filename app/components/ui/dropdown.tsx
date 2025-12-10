import React, { useRef, useEffect, type ReactNode } from 'react'
import { FAIcon } from '../icons/fa'
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons'

export interface DropdownProps {
  children: ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}

export interface DropdownTriggerProps {
  children: ReactNode
  onClick: () => void
}

export interface DropdownContentProps {
  children: ReactNode
  open: boolean
  align?: 'left' | 'right' | 'center'
  className?: string
}

export interface DropdownItemProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export interface DropdownSectionProps {
  children: ReactNode
  className?: string
}

export interface DropdownSearchProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  className?: string
}

export interface DropdownListItemProps {
  icon?: ReactNode
  iconBg?: string
  children: ReactNode
  onClick?: () => void
  className?: string
}

export const Dropdown: React.FC<DropdownProps> = ({ children, open, onOpenChange }) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onOpenChange(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, onOpenChange])

  return (
    <div ref={dropdownRef} className="relative">
      {children}
    </div>
  )
}

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="w-full">
      {children}
    </div>
  )
}

export const DropdownContent: React.FC<DropdownContentProps> = ({ children, open, align = 'right', className = '' }) => {
  if (!open) return null

  const alignmentClasses: Record<string, string> = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2'
  }

  return (
    <div
      className={`absolute ${alignmentClasses[align]} mt-2 w-96 bg-white rounded-sm shadow-lg border border-gray-200 z-50 overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}

export const DropdownSection: React.FC<DropdownSectionProps> = ({ children, className = '' }) => {
  return (
    <div className={`border-b border-gray-200 last:border-b-0 ${className}`}>
      {children}
    </div>
  )
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 border-b border-gray-200 transition-colors text-base ${className}`}
    >
      {children}
    </button>
  )
}

export const DropdownSearch: React.FC<DropdownSearchProps> = ({ placeholder = 'Type to filter...', value, onChange, className = '' }) => {
  return (
    <div className={`relative p-4 ${className} bg-gray-200/50`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 pr-10 bg-white border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
      />
      <FAIcon icon={faSearch} className="absolute right-7 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>
  )
}

export const DropdownListItem: React.FC<DropdownListItemProps> = ({ icon, iconBg = 'bg-blue-500', children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer w-full px-4 py-2 flex items-center gap-3 text-left hover:bg-gray-50 transition-colors ${className}`}
    >
      {icon && (
        <div className={`w-8 h-8 ${iconBg} rounded-sm text-white font-bold flex items-center justify-center text-sm flex-shrink-0`}>
          {icon}
        </div>
      )}
      <span className="text-gray-900 text-sm font-medium truncate">{children}</span>
    </button>
  )
}
