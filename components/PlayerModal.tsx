'use client'

import { X, Loader, AlertTriangle } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

interface PlayerModalProps {
  movie: {
    title: string
    url: string
    image: string
    date: string
  }
  streamUrl: string | null
  error: string | null
  onClose: () => void
}

export default function PlayerModal({
  movie,
  streamUrl,
  error,
  onClose,
}: PlayerModalProps) {
  const [isLoading, setIsLoading] = useState(!streamUrl && !error)
  const [showWarning, setShowWarning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (streamUrl) {
      setIsLoading(false)
      setShowWarning(true)
      const timer = setTimeout(() => {
        setShowWarning(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [streamUrl])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [onClose])

  // Block ad clicks with invisible overlay
  const blockAdClicks = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.closest('.warning-popup')) {
      return
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative w-full h-full bg-black flex flex-col"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/80 hover:bg-black rounded-lg transition-colors"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        <div className="relative flex-1 bg-black" onClick={blockAdClicks}>
          {error ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-center px-4">{error}</p>
            </div>
          ) : null}

          {!error && isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {streamUrl && !error && (
            <>
              <iframe
                ref={iframeRef}
                src={streamUrl}
                title={movie.title}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                allowFullScreen
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                onLoad={() => setIsLoading(false)}
              />

              {/* Warning Popup */}
              {showWarning && (
                <div className="warning-popup absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="bg-red-600 border-2 border-red-400 rounded-lg p-6 sm:p-8 shadow-2xl max-w-sm mx-4 animate-pulse pointer-events-auto">
                    <div className="flex items-start gap-4 mb-4">
                      <AlertTriangle className="h-8 w-8 text-white flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                          Important Warning
                        </h3>
                        <ul className="text-white text-sm sm:text-base space-y-2 list-disc list-inside">
                          <li>Don't click on any ads</li>
                          <li>Wait 10 seconds and click Skip</li>
                          <li>This popup will close automatically</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center text-white/80 text-xs sm:text-sm mt-4">
                      Closing in 3 seconds...
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
