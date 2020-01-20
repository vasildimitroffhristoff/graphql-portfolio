import React, { useEffect, useState } from 'react'

function ProgressiveImage({ image, preview }) {
  let loadingImage
  const [currentImage, setCurrentImage] = useState(preview)
  const [loading, setLoading] = useState(true)

  const fetchImage = src => {
    const image = new Image()
    image.onload = () => {
      const { src } = loadingImage
      setCurrentImage(src)
      setLoading(false)
    }

    image.src = src
    loadingImage = image
  }

  useEffect(() => {
    fetchImage(image)
  }, [])

  useEffect(() => {
    return () => {
      if (loadingImage) {
        loadingImage.onload = null
      }
    }
  }, [loadingImage])

  useEffect(() => {
    if (image) {
      setCurrentImage(preview)
      setLoading(true)
      fetchImage(image)
    }
  }, [image])

  const style = loading => {
    return {
      transition: '0.2s filter linear',
      filter: `${loading ? 'blur(35px)' : ''}`
    }
  }

  return <img style={style(loading)} src={currentImage} alt="image" />
}

export default ProgressiveImage
