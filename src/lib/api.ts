import { buildApiUrl } from '@/lib/buildApiUrl'
import { fetcher } from '@/lib/fetcher'
import type { Movie, MoviesResponse } from '@/types'

export const api = {
  getTrendingMovies: ({ page = 1 }: { page?: number } = {}): Promise<MoviesResponse> => {
    const endpoint = buildApiUrl('/trending/movie/week', { page })
    return fetcher<MoviesResponse>(endpoint)
  },

  searchMovies: ({
    query,
    page = 1,
  }: {
    query: string
    page?: number
  }): Promise<MoviesResponse> => {
    const endpoint = buildApiUrl('/search/movie', { query, page })
    return fetcher<MoviesResponse>(endpoint)
  },

  getMovieDetails: (id: number): Promise<Movie> => {
    const endpoint = buildApiUrl(`/movie/${id}`)
    return fetcher<Movie>(endpoint)
  },
}
