import { MovieGrid } from '@/components/movies'
import { ErrorAlert } from '@/components/ui'
import { useTrendingMovies } from '@/hooks/useMovies'

export default function HomePage() {
  const { movies, isLoading, error } = useTrendingMovies()

  if (error) return <ErrorAlert message={error.message} />
  return (
    <div>
      <h1>Trending this week</h1>
      <MovieGrid isLoading={isLoading} movies={movies} />
    </div>
  )
}
