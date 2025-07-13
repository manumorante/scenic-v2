import { MovieCard } from '@/components/movies'
import { cn } from '@/lib/utils'
import type { Movie } from '@/types'

type Props = {
  movies?: Movie[]
  isLoading?: boolean
}

const gridCn = cn('grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6', 'gap-3')

export default function MovieGrid({ movies, isLoading = true }: Props) {
  if (isLoading) return <Skeleton />

  return (
    <div className={gridCn}>
      {movies?.map((movie) => (
        <MovieCard title={movie.title} key={movie.id} src={movie.poster_path} />
      ))}
    </div>
  )
}

const Skeleton = () => {
  return (
    <div className={gridCn}>
      {Array.from({ length: 20 }).map((_, index) => (
        // eslint-disable-next-line react-x/no-array-index-key
        <MovieCard title="Loading" key={`skeleton-${index}`} />
      ))}
    </div>
  )
}
