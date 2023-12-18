const { OpenAI } = require('openai')

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const generateImage = async (req, res) => {
  const { prompt, size } = req.body

  const imageSize =
    size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024'

  try {
    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: imageSize,
    })

    console.log(JSON.stringify(response, null, 2))

    if (
      response.data &&
      Array.isArray(response.data) &&
      response.data.length > 0
    ) {
      const imageUrl = response.data[0].url
      res.status(200).json({
        success: true,
        data: imageUrl,
      })
    } else {
      throw new Error('No image data found in the response')
    }
  } catch (error) {
    console.error(error)
    res.status(400).json({
      success: false,
      error: 'The image could not be generated',
    })
  }
}

module.exports = { generateImage }
