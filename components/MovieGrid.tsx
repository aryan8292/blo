'use client'

import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'

interface Movie {
  title: string
  url: string
  image: string
  date: string
}

interface MovieGridProps {
  movies: Movie[]
}

export default function MovieGrid({ movies }: MovieGridProps) {
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const saved = localStorage.getItem('colsPerRow')
    if (saved) {
      setColumns(parseInt(saved))
    }
  }, [])

  const gridColsClass = {
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
  }

  return (
    <div className={`grid gap-4 ${gridColsClass[columns as keyof typeof gridColsClass] || 'grid-cols-3'}`}>
      {movies.map((movie) => (
        <MovieCard key={movie.url} movie={movie} />
      ))}
    </div>
  )
}
