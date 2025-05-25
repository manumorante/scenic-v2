import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import type { Movie, MoviesResponse } from '@/types'

export function useTrendingMovies(page = 1) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['trending-movies', page],
    queryFn: () => api.getTrendingMovies({ page }),
    select: (data) => data.results ?? [],
  })

  return {
    movies: data,
    isLoading,
    error,
  }
}

export function useTopRatedMovies(page = 1) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['top-rated-movies', page],
    queryFn: () => api.getTopRatedMovies(),
    select: (data) => data.results ?? [],
  })

  return {
    movies: data,
    isLoading,
    error,
  }
}

export function useSearchMovies(query: string, page = 1) {
  const { data, isFetching, error } = useQuery<MoviesResponse, Error>({
    queryKey: ['search-movies', query, page],
    queryFn: () => api.searchMovies({ query, page }),
    enabled: query.length > 0,
  })

  return {
    movies: data?.results ?? [],
    totalPages: data?.total_pages ?? 0,
    totalResults: data?.total_results ?? 0,
    isLoading: isFetching,
    error: error?.message,
  }
}

export function useMovieDetails(id: number) {
  const { data, isFetching, error } = useQuery<Movie, Error>({
    queryKey: ['movie-details', id],
    queryFn: () => api.getMovieDetails(id),
    enabled: id > 0,
  })

  return {
    movie: data,
    isLoading: isFetching,
    error: error?.message,
  }
}
