/// <reference types="vite/client" />

export type Movie = {
  id: number
  title: string
  rating: string
  released: string
  description: string
  poster_path: string
}

export type MoviesResponse = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
