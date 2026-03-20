'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import { useToast } from '@/components/ToastContext'

export default function StatsPage() {
  const { toast } = useToast()
  const [colsPerRow, setColsPerRow] = useState(5)
  const [stats, setStats] = useState({
    totalViews: 1250,
    moviesWatched: 42,
    timeSpent: '125 hours',
    favoriteGenre: 'Action',
  })

  useEffect(() => {
    const saved = localStorage.getItem('colsPerRow')
    if (saved) {
      setColsPerRow(parseInt(saved))
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem('colsPerRow', colsPerRow.toString())
    toast('success', `Grid updated to ${colsPerRow} columns per row`)
  }

  const presets = [3, 4, 5, 6, 7, 8]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full px-2 sm:px-4 py-6 sm:py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 w-fit"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm sm:text-base">Back to Home</span>
        </Link>

        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Settings & Stats</h1>

          {/* Stats Section */}
          <section className="mb-8 p-4 sm:p-6 bg-card rounded-lg border border-border">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Your Stats</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Total Views</p>
                <p className="text-2xl sm:text-3xl font-bold text-primary">{stats.totalViews}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Movies Watched</p>
                <p className="text-2xl sm:text-3xl font-bold text-primary">{stats.moviesWatched}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Time Spent</p>
                <p className="text-2xl sm:text-3xl font-bold text-primary">{stats.timeSpent}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Favorite Genre</p>
                <p className="text-2xl sm:text-3xl font-bold text-primary">{stats.favoriteGenre}</p>
              </div>
            </div>
          </section>

          {/* Grid Layout Settings */}
          <section className="p-4 sm:p-6 bg-card rounded-lg border border-border">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Grid Layout</h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-4">
                Movies Per Row: <span className="text-primary font-bold">{colsPerRow}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {presets.map((cols) => (
                  <button
                    key={cols}
                    onClick={() => setColsPerRow(cols)}
                    className={`px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                      colsPerRow === cols
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    {cols}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <input
                type="range"
                min="3"
                max="10"
                value={colsPerRow}
                onChange={(e) => setColsPerRow(parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>3 columns</span>
                <span>10 columns</span>
              </div>
            </div>

            <button
              onClick={handleSave}
              className="flex items-center gap-2 w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <Save className="h-5 w-5" />
              <span>Save Settings</span>
            </button>
          </section>

          {/* Info Section */}
          <section className="mt-8 p-4 sm:p-6 bg-card rounded-lg border border-border">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">About</h2>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">stream-tum</span> is your ultimate movie streaming platform. Enjoy unlimited access to thousands of movies and TV series.
              </p>
              <p>
                Version 1.0.0
              </p>
              <p>
                All your settings are saved locally in your browser.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
