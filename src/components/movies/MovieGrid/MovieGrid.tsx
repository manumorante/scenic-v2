import { MovieCard } from '@/components/movies'
import { cn } from '@/lib/utils'
import type { Movie } from '@/types'

type Props = {
  movies?: Movie[]
  isLoading?: boolean
}

export default function MovieGrid({ movies, isLoading = true }: Props) {
  if (isLoading) return <Skeleton />

  return (
    <div className={cn('grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6', 'gap-3')}>
      {movies?.map((movie) => (
        <MovieCard title={movie.title} key={movie.id} src={movie.poster_path} />
      ))}
    </div>
  )
}

const Skeleton = () => {
  return <div>Loading</div>
}
