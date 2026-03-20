'use client'

import { Search, X } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      setQuery('')
      setIsOpen(false)
    }
  }

  return (
    <div className="relative flex-1 max-w-md">
      <form onSubmit={handleSearch} className="relative">
        <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
          <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 hover:bg-muted-foreground/20 rounded transition-colors"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
