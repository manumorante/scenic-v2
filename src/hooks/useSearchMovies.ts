import { useQuery } from '@tanstack/react-query'
import { useDebounce } from '@/hooks/useDebounce'
import { api } from '@/lib/api'

export function useSearchMovies(query: string = '') {
  const debouncedQuery = useDebounce(query)

  return useQuery({
    queryKey: ['movies', 'search', debouncedQuery],
    queryFn: () => api.searchMovies({ query: debouncedQuery }),
  })
}
