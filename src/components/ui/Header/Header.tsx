import { Link } from 'react-router'
import { Logo, Navigation, Search } from '@/components/ui'
import { cn } from '@/lib/utils'
import { useSearchMovies } from '@/hooks/useSearchMovies'
import { useMoviesStore } from '@/stores/moviesStore'

export default function Header() {
  const searchQuery = useMoviesStore((state) => state.searchQuery)
  const setSearchQuery = useMoviesStore((state) => state.setSearchQuery)
  const { isLoading } = useSearchMovies(searchQuery)

  return (
    <div className={cn('Header', 'sticky top-0', 'w-full min-h-16 flex items-center')}>
      <div className="main-container flex gap-5 items-center">
        <Link to="/">
          <Logo />
        </Link>

        <div className="flex gap-5 items-center">
          <Navigation />
          <Search query={searchQuery} onChange={setSearchQuery} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}
