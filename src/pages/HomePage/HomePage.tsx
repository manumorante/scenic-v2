import { MovieGrid } from '@/components/movies'
import { ErrorAlert } from '@/components/ui'
import { useSearchMovies } from '@/hooks/useMovies'
import { useMoviesStore } from '@/stores/moviesStore'

export default function HomePage() {
  const searchQuery = useMoviesStore((state) => state.searchQuery)
  const { movies, isLoading, error } = useSearchMovies(searchQuery)

  if (error) return <ErrorAlert message={error} />

  return (
    <div>
      <MovieGrid isLoading={isLoading} movies={movies} />
    </div>
  )
}
