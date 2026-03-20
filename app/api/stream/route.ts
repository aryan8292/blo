export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const url = searchParams.get('url')

    console.log('[v0] Stream API - Received URL:', url)

    if (!url) {
      return Response.json(
        { error: 'URL is required', details: 'Please provide a valid post URL' },
        { status: 400 }
      )
    }

    console.log('[v0] Stream API - Calling VegaAPI with GET request...')
    const apiUrl = `https://vegaapi.vercel.app/api/stream?url=${encodeURIComponent(url)}`
    console.log('[v0] Stream API - Full URL:', apiUrl)

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    console.log('[v0] Stream API - Response status:', response.status)
    console.log('[v0] Stream API - Response headers:', Object.fromEntries(response.headers))

    if (!response.ok) {
      const errorText = await response.text()
      console.error('[v0] Stream API - Error response:', errorText)
      return Response.json(
        { 
          error: `API Error (${response.status})`,
          details: errorText || response.statusText,
          status: response.status
        },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('[v0] Stream API - Success, received data:', data)
    
    // Verify response has stream_url
    if (!data.stream_url) {
      console.error('[v0] Stream API - No stream_url in response:', data)
      return Response.json(
        { 
          error: 'Invalid response format',
          details: 'API response missing stream_url field',
          receivedData: data
        },
        { status: 500 }
      )
    }
    
    return Response.json(data)
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error)
    console.error('[v0] Stream API proxy error:', errorMsg)
    return Response.json(
      { 
        error: 'Failed to fetch stream',
        details: errorMsg
      },
      { status: 500 }
    )
  }
}
