import { config } from '@/lib/config'

/**
 * Builds a complete API URL with required and custom query parameters.
 * @param path - The API endpoint path (e.g., '/movie/popular')
 * @param params - Additional query parameters
 * @returns Complete URL string
 */
export const buildApiUrl = (
  path: string,
  params: Record<string, string | number | undefined> = {},
) => {
  const searchParams = new URLSearchParams({
    language: config.lang,
    api_key: config.apiKey,
  })

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.set(key, String(value))
    }
  })

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${config.apiURL}${normalizedPath}?${searchParams}`
}
