import { Play } from 'lucide-react'
import Link from 'next/link'
import SearchBox from './SearchBox'

export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="w-full flex items-center justify-between gap-4 px-2 sm:px-4 py-4 sm:py-6">
        <Link href="/" className="flex items-center gap-2 min-w-0 hover:opacity-80 transition-opacity flex-shrink-0">
          <div className="rounded-lg bg-primary p-2 flex-shrink-0">
            <Play className="h-5 sm:h-6 w-5 sm:w-6 text-primary-foreground" fill="currentColor" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground truncate">stream-tum</h1>
        </Link>
        <SearchBox />
      </div>
    </header>
  )
}
