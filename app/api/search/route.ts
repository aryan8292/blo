export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  const page = searchParams.get('page') || '1'

  if (!query) {
    return Response.json(
      { error: 'Missing search query' },
      { status: 400 }
    )
  }

  try {
    console.log('[v0] Search API - Query:', query, 'Page:', page)
    const response = await fetch(
      `https://vegaapi.vercel.app/api/search?q=${encodeURIComponent(query)}&page=${page}`
    )

    console.log('[v0] Search API - Response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('[v0] Search API - Error response:', errorText)
      return Response.json(
        { error: 'Failed to fetch search results' },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('[v0] Search API - Results found:', data.posts?.length)
    return Response.json(data)
  } catch (error) {
    console.error('[v0] Search API proxy error:', error)
    return Response.json(
      { error: 'Failed to search movies' },
      { status: 500 }
    )
  }
}
