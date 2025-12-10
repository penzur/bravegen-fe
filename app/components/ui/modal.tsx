import { FAIcon } from "../icons/fa"
import {
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

export function Modal({
  isOpen,
  onClose,
  children
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        {children}
      </div>
    </div>
  )
}

export function DeleteModal({
  isOpen,
  onClose,
  connectionName,
  integrationName,
  onConfirm
}: {
  isOpen: boolean
  onClose: () => void
  connectionName: string
  integrationName: string
  onConfirm: () => void
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
        </button>

        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-white">
          <FAIcon icon={faXmark} className="bg-red-500 rounded-full p-2" />
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Remove "{connectionName}" Connection?
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to remove {integrationName} "{connectionName}" connection?
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="cursor-pointer flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Undo
          </button>
          <button
            onClick={() => {
              onConfirm()
              onClose()
            }}
            className="flex-1 px-4 py-2.5 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
    </Modal>
  )
}

export function EditModal({
  isOpen,
  onClose,
  connectionName,
  integrationName,
  onConfirm
}: {
  isOpen: boolean
  onClose: () => void
  connectionName: string
  integrationName: string
  onConfirm: () => void
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
        </button>

        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-white">
          <span className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center">!</span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Change to Existing Connection
        </h2>
        <p className="text-sm text-gray-600 mb-1">
          Changes may disrupt functionality and impact data flow.
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to make changes to {integrationName} "{connectionName}" connection?
        </p>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="cursor-pointer flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Undo
          </button>
          <button
            onClick={() => {
              onConfirm()
              onClose()
            }}
            className="cursor-pointer flex-1 px-4 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  )
}
