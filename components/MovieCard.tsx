'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, X, AlertCircle } from 'lucide-react'
import PlayerModal from './PlayerModal'
import { useToast } from './ToastContext'

interface Movie {
  title: string
  url: string
  image: string
  date: string
}

interface MovieCardProps {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
  const { toast } = useToast()
  const [showPlayer, setShowPlayer] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [streamUrl, setStreamUrl] = useState<string | null>(null)

  const handlePlay = async () => {
    setLoading(true)
    setError(null)
    setShowPlayer(true)
    
    try {
      console.log('[v0] MovieCard - Starting stream fetch for:', movie.url)
      const streamUrl = `/api/stream?url=${encodeURIComponent(movie.url)}`
      console.log('[v0] MovieCard - Fetching from:', streamUrl)
      
      const response = await fetch(streamUrl)
      console.log('[v0] MovieCard - Response status:', response.status)
      
      if (!response.ok) {
        let errorMsg = 'Failed to get stream'
        try {
          const errorData = await response.json()
          errorMsg = errorData.error || errorData.details || errorMsg
        } catch (e) {
          errorMsg = `API Error (${response.status}): ${response.statusText}`
        }
        console.error('[v0] MovieCard - Error response:', errorMsg)
        toast('error', errorMsg)
        throw new Error(errorMsg)
      }
      
      const data = await response.json()
      console.log('[v0] MovieCard - Stream data received:', data)
      setStreamUrl(data.stream_url)
      toast('success', `Now playing: ${movie.title}`)
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to load stream'
      setError(errorMsg)
      console.error('[v0] MovieCard - Error:', errorMsg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="group relative overflow-hidden rounded-lg bg-card hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-[2/3] overflow-hidden bg-muted flex-shrink-0">
          <Image
            src={movie.image}
            alt={movie.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 20vw, (max-width: 1024px) 15vw, 16vw"
            loading="eager"
            priority
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="450"%3E%3Crect fill="%23222" width="300" height="450"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%23666" text-anchor="middle" dominant-baseline="middle"%3EImage not available%3C/text%3E%3C/svg%3E'
            }}
          />
          <button
            onClick={handlePlay}
            disabled={loading}
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="rounded-full bg-primary p-3 hover:bg-primary/90 transition-colors disabled:opacity-50">
              <Play className="h-6 w-6 text-primary-foreground fill-primary-foreground" />
            </div>
          </button>
        </div>

        <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
          <h3 className="font-semibold text-foreground line-clamp-2 mb-2 text-xs sm:text-sm">
            {movie.title}
          </h3>
          <p className="text-xs text-muted-foreground">{movie.date}</p>
        </div>
      </div>

      {showPlayer && (
        <PlayerModal
          movie={movie}
          streamUrl={streamUrl}
          error={error}
          onClose={() => {
            setShowPlayer(false)
            setStreamUrl(null)
            setError(null)
          }}
        />
      )}
    </>
  )
}
