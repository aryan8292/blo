export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') || '1'

  try {
    const response = await fetch(
      `https://vegaapi.vercel.app/api/posts?page=${page}`
    )

    if (!response.ok) {
      return Response.json(
        { error: 'Failed to fetch movies' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    console.error('API proxy error:', error)
    return Response.json(
      { error: 'Failed to fetch movies' },
      { status: 500 }
    )
  }
}
