const generateImageRequest = async (prompt, size) => {
  const backendUrl = import.meta.env.VITE_BASE_URL

  try {
    const response = await fetch(`${backendUrl}/openai/generateimage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        size,
      }),
    })

    if (!response.ok) {
      throw new Error('That image could not be generated')
    }

    const data = await response.json()
    return data.data
  } catch (error) {
    throw error
  }
}

export default generateImageRequest
