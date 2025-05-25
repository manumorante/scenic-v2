import { api } from '@/lib/api'
import { fetcher } from '@/lib/fetcher'
import { describe, expect, it, vi } from 'vitest'

vi.mock('../fetcher')

describe('api', () => {
  it('should fetch trending movies', async () => {
    const mockMovies = [{ id: 1, title: 'Test Movie' }]
    vi.mocked(fetcher).mockResolvedValue(mockMovies)

    const result = await api.getTrendingMovies({ page: 1 })

    expect(fetcher).toHaveBeenCalledWith(expect.stringContaining('/trending/movie/week'))
    expect(result).toEqual(mockMovies)
  })
})
