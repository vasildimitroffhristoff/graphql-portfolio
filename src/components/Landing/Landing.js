import React from 'react'
import BlockRevealAnimation from 'react-block-reveal-animation'
import { ReactComponent as ReactIcon } from '../../assets/react.svg'
import Lottie from 'react-lottie'
import animationData from '../../assets/geek-spirit.json'
import { LandingWrapper, Text } from './LandingStyles'

function LandingComponent() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="page">
      <LandingWrapper>
        <Text>
          <BlockRevealAnimation color="var(--blue)">
            <h2>Hi. I'm Vasil</h2>
          </BlockRevealAnimation>
          <div className="sub-titles landing-subtitle">
            <h4>
              Front-end developer with over 4 years of
              experience in web development. Specializing in
              <b> JavaScript</b> and <b>React</b>.
            </h4>

            <div className="animation">
              <div className="react-icon">
                <ReactIcon />
              </div>

              <Lottie
                options={defaultOptions}
                height={130}
                width={200}
                style={{ marginTop: '5rem' }}
              />
            </div>
          </div>
        </Text>
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,106.7C672,107,768,149,864,165.3C960,181,1056,171,1152,186.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </LandingWrapper>
    </div>
  )
}

export default LandingComponent
