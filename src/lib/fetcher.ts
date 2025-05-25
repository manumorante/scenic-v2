const delay = () => new Promise((resolve) => setTimeout(resolve, 500))

export async function fetcher<T>(endpoint: string): Promise<T> {
  // Extra delay to make loading/cache more noticeable
  await delay()

  const response = await fetch(endpoint)
  if (!response.ok) throw new Error('fetcher() - Failed to fetch ' + endpoint)
  return response.json() as Promise<T>
}
