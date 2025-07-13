import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Movie } from '@/types'

interface MoviesState {
  // Data
  movies: Movie[]

  // UI State
  searchQuery: string
  currentPage: number

  // Actions
  setSearchQuery: (query: string) => void
  setCurrentPage: (page: number) => void
  setMovies: (movies: Movie[]) => void
}

export const useMoviesStore = create<MoviesState>()(
  persist(
    (set) => ({
      // Data
      movies: [],

      // UI State
      searchQuery: '',
      currentPage: 1,

      // Actions
      setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),
      setCurrentPage: (page) => set({ currentPage: page }),
      setMovies: (movies) => set({ movies }),
    }),
    { name: 'movies-storage' },
  ),
)
