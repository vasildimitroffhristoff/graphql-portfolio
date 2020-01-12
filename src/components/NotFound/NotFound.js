import React from 'react'
import Lottie from 'react-lottie'

import notFoundAnimationData from '../../assets/not-found.json'
import { Wrapper } from '../../theme'
import { Heading, Page } from './NotFoundStyles'

export default function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFoundAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Page>
      <Wrapper>
        <Heading>404 Page not found</Heading>
        <Lottie options={defaultOptions} height={680} width={680} />
      </Wrapper>
    </Page>
  )
}
