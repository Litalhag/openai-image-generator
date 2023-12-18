import { useState } from 'react'
import Image from '../components/Image'
import Showcase from '../components/Showcase'
import generateImageRequest from '../api/api'
import '../css/spinner.css'

export const Main = () => {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleGenerateImage = async (prompt, size) => {
    try {
      setErrorMessage('')
      setImageUrl('')
      setIsLoading(true)
      // Delay simulation for tests without spending tokens:
      // await new Promise((resolve) => setTimeout(resolve, 2000))
      // const imageUrl = '../assets/image.svg'
      const imageUrl = await generateImageRequest(prompt, size)
      setImageUrl(imageUrl)
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main>
      <Showcase onGenerateImage={handleGenerateImage} />
      <div className={loading ? 'spinner show' : 'spinner'}></div>{' '}
      <Image imageUrl={imageUrl} errorMessage={errorMessage} />
    </main>
  )
}
