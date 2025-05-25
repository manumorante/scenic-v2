import { describe, expect, it, vi } from 'vitest'

vi.mock('@/lib/config', () => ({
  config: {
    apiURL: 'https://api.example.com',
    apiKey: 'test_key',
    lang: 'es-ES',
  },
}))

import { buildApiUrl } from '@/lib/buildApiUrl'

describe('buildApiUrl', () => {
  it('builds the URL with the required parameters', () => {
    const url = buildApiUrl('/movies', { page: 3, query: 'action' })
    expect(url).toBe(
      'https://api.example.com/movies?language=es-ES&api_key=test_key&page=3&query=action',
    )
  })
})
