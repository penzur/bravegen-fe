export function Pagination({
  currentPage,
  totalPages,
  onPageChange
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  function renderPageNumbers() {
    const pages = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1, 2, 3, 4, 5)
      if (totalPages > maxVisible) {
        pages.push(totalPages)
      }
    }

    return pages.map((page) => {
      return (
        <button
          key={page}
          onClick={() => onPageChange(page as number)}
          className={`px-3 py-1 text-sm rounded ${currentPage === page
            ? 'bg-gray-200 text-black'
            : 'text-gray-600 hover:bg-gray-100 cursor-pointer'
            }`}
        >
          {page}
        </button>
      )
    })
  }

  return (
    <div className='flex items-center justify-center gap-2 px-6 py-4 border-t border-gray-200 font-medium'>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className='cursor-pointer px-3 py-1 text-sm text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed'
      >
        ← Previous
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className='cursor-pointer px-3 py-1 text-sm text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed'
      >
        Next →
      </button>
    </div>
  )
}

