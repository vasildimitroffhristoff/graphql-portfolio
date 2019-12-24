import React from 'react'
import Lottie from 'react-lottie'

import animationData from '../../assets/loading-1.json'
import { LoadingWrapper } from './LoadingStyles'

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  
  return (
    <LoadingWrapper>
      <Lottie options={defaultOptions} height={200} width={200} />
    </LoadingWrapper>
  )
}
