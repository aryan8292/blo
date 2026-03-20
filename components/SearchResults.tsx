'use client'

import { useState, useEffect } from 'react'
import { Loader, ArrowLeft } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import MovieGrid from '@/components/MovieGrid'

interface Movie {
  title: string
  url: string
  image: string
  date: string
}

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  
  const [movies, setMovies] = useState<Movie[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [totalPages, setTotalPages] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  useEffect(() => {
    if (query) {
      fetchSearchResults(1)
    }
  }, [query])

  useEffect(() => {
    if (query && page > 1) {
      fetchSearchResults(page)
    }
  }, [page])

  const fetchSearchResults = async (pageNum: number) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(query)}&page=${pageNum}`
      )
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to search')
      }
      const data = await response.json()
      setMovies(data.posts || [])
      setTotalResults(data.total || 0)
      setTotalPages(Math.ceil((data.total || 0) / 25))
      setPage(pageNum)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search movies. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="w-full px-2 sm:px-4 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Back to Home</span>
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Search Results
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          {query ? `Results for "${query}"` : 'Enter a search query'}
          {totalResults > 0 && ` (${totalResults} results found)`}
        </p>
      </div>

      {error && (
        <div className="mb-8 rounded-lg bg-destructive/20 p-4 text-destructive text-sm">
          {error}
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      {!loading && movies.length > 0 && (
        <>
          <MovieGrid movies={movies} />
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="w-full sm:w-auto rounded-lg bg-primary px-6 py-2 text-primary-foreground disabled:opacity-50 hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              Previous
            </button>
            <span className="text-foreground text-sm sm:text-base">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page >= totalPages}
              className="w-full sm:w-auto rounded-lg bg-primary px-6 py-2 text-primary-foreground disabled:opacity-50 hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              Next
            </button>
          </div>
        </>
      )}

      {!loading && movies.length === 0 && !error && query && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No movies found matching "{query}"</p>
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      )}

      {!query && !loading && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Use the search box to find your favorite movies and series</p>
        </div>
      )}
    </main>
  )
}
