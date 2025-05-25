import { MovieGrid } from '@/components/movies'
import { ErrorAlert } from '@/components/ui'
import { useTopRatedMovies } from '@/hooks/useMovies'

export default function TopRatedMoviesPage() {
  const { movies, isLoading, error } = useTopRatedMovies()

  if (error) return <ErrorAlert message={error.message} />

  return (
    <div>
      <MovieGrid isLoading={isLoading} movies={movies} />
    </div>
  )
}
