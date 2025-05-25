import { buildApiUrl } from '@/lib/buildApiUrl'
import { fetcher } from '@/lib/fetcher'
import type { Movie } from '@/types'

export const api = {
  getTrendingMovies: ({ page = 1 }: { page?: number }): Promise<Movie[]> => {
    const endpoint = buildApiUrl('/trending/movie/week', { page })
    return fetcher<Movie[]>(endpoint)
  },
}
