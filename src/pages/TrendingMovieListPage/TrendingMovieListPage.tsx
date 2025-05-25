import { MovieGrid } from '@/components/movies'
import { ErrorAlert } from '@/components/ui'
import { useTrendingMovies } from '@/hooks/useMovies'

export default function TrendingMovieListPage() {
  const { movies, isLoading, error } = useTrendingMovies()

  if (error) return <ErrorAlert message={error.message} />

  return (
    <div>
      <MovieGrid isLoading={isLoading} movies={movies} />
    </div>
  )
}
