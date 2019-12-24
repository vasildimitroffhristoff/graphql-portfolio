import { useQuery } from '@apollo/react-hooks'
import React from 'react'

import me from '../../assets/me.svg'
import { Wrapper } from '../../theme'
import Loading from '../Loading'
import { AboutHeader, AboutSection } from './AboutStyles'
import { ABOUT } from './graphql'

function HeaderComponent() {
  const { loading, error, data } = useQuery(ABOUT, {
    variables: { id: 'ck4h6pxfvasyx0b66zim26s2i' }
  })
  if (loading || error || !data) return <Loading />

  const { header, description } = data.about
  return (
    <AboutSection>
      <Wrapper>
        <AboutHeader>
          <img className="me" src={me} alt="me" />
          <h2>
            <i className="fas fa-terminal"></i>
            {header}
          </h2>
        </AboutHeader>
        <p>{description}</p>
      </Wrapper>
    </AboutSection>
  )
}

export default HeaderComponent
