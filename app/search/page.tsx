'use client'

import { Suspense } from 'react'
import { Loader } from 'lucide-react'
import Header from '@/components/Header'
import SearchResults from '@/components/SearchResults'

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Suspense fallback={
        <main className="w-full px-2 sm:px-4 py-6 sm:py-8">
          <div className="flex items-center justify-center py-12">
            <Loader className="h-8 w-8 animate-spin text-primary" />
          </div>
        </main>
      }>
        <SearchResults />
      </Suspense>
    </div>
  )
}
