import Dashboard from '~/components/layout/dashboard'
import type { Route } from './+types/integrations'
import SettingsNav from '~/components/settings-nav';
import { integrationCards } from '~/stubs/integrations';
import { IntegrationCard } from '~/components/integration-card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { Badge } from '~/components/ui/badge';
import { FAIcon } from '~/components/icons/fa';

import {
  faLink,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import {
  faEdit,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons'
import { Pagination } from '~/components/ui/pagination';
import { generateConnectionData, type ConnectionRow } from '~/stubs/connections';
import { useState } from 'react';
import { DeleteModal, EditModal } from '~/components/ui/modal';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Settings - Integrations' },
    { name: 'description', content: 'Integrations settings page' },
  ];
}

export default function Integrations() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchValue, setSearchValue] = useState('')
  const itemsPerPage = 8
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; row: ConnectionRow | null }>({
    isOpen: false,
    row: null
  })
  const [editModal, setEditModal] = useState<{ isOpen: boolean; row: ConnectionRow | null }>({
    isOpen: false,
    row: null
  })

  const filteredData = generateConnectionData().filter(row =>
    row.integration.toLowerCase().includes(searchValue.toLowerCase()) ||
    row.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  function copyToClipboard(url: string) {
    navigator.clipboard.writeText(url)
  }

  function handleEdit(row: ConnectionRow) {
    setEditModal({ isOpen: true, row })
  }

  function handleDelete(row: ConnectionRow) {
    setDeleteModal({ isOpen: true, row })
  }

  return <Dashboard>
    <div className="flex w-full h-full px-8 pt-8 gap-8 pl-22">
      <SettingsNav className="w-[256px]! fixed" />
      <div className="flex-1 relative ml-[256px] pl-8">
        <h2 className="text-xl font-medium">Choose a Service to Connect</h2>
        <p className="text-sm text-gray-500 mb-8">Connect BraveGen to other tools you use.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {integrationCards.map(card => (
            <IntegrationCard key={card.id} {...card} />
          ))}
        </div>

        <div className="mb-6 w-full">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Existing Connections</h2>

          <div className="relative mb-6">
            <input
              type='text'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Integration or Name'
              className="w-full max-w-sm px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
            />
            <FAIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Integration ↓</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Entity/Group</TableHead>
                <TableHead>Interval</TableHead>
                <TableHead>Connector URL</TableHead>
                <TableHead>Instructions</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="pl-4! pr-0! mx-0">
                    <img src={row.icon} className="w-6 h-6" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="text-gray-900">{row.integration}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-blue-600 font-medium">{row.name}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={row.source.toLowerCase()}>
                      {row.source}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-900">
                    {row.entityGroup}
                  </TableCell>
                  <TableCell className="text-gray-900">
                    {row.interval}
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => copyToClipboard(row.connectorUrl)}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Copy to Clipboard
                    </button>
                  </TableCell>
                  <TableCell>
                    <a
                      href='#'
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {`View`} <FAIcon icon={faLink} className="w-3 h-3" />
                    </a>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(row)}
                        className="cursor-pointer p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
                      >
                        <FAIcon icon={faEdit} className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(row)}
                        className="cursor-pointer p-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                      >
                        <FAIcon icon={faTrashCan} className="w-4 h-4" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, row: null })}
        connectionName={deleteModal.row?.name || ''}
        integrationName={deleteModal.row?.integration || ''}
        onConfirm={() => { }}
      />

      <EditModal
        isOpen={editModal.isOpen}
        onClose={() => setEditModal({ isOpen: false, row: null })}
        connectionName={editModal.row?.name || ''}
        integrationName={editModal.row?.integration || ''}
        onConfirm={() => { }}
      />
    </div>
  </Dashboard >
}
