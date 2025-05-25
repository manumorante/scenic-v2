import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetcher } from '@/lib/fetcher'

const mockData = { id: 1, name: 'Test Show' }

describe('fetcher', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should fetch data and return JSON', async () => {
    // Mock global fetch
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    })

    const data = await fetcher('/shows/1')
    expect(global.fetch).toHaveBeenCalledWith('https://api.tvmaze.com/shows/1')
    expect(data).toEqual(mockData)
  })

  it('should throw error if response is not ok', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({}),
    })

    await expect(fetcher('/shows/404')).rejects.toThrowError(
      'fetcher() - Failed to fetch /shows/404',
    )
  })
})
