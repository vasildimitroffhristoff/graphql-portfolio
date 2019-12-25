import React from 'react'

import { LandingWrapper, Text } from './LandingStyles'

function LandingComponent() {
  return (
    <div className="page">
      <LandingWrapper>
        <Text className="profile">
          <h2>Vasil Hristov</h2>
          <div className="sub-titles">
            <h3>Front-end dev.</h3>
            <h4>[ React, TypeScript, GraphQL ]</h4>
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
          ></path>
        </svg>
      </LandingWrapper>
    </div>
  )
}

export default LandingComponent
