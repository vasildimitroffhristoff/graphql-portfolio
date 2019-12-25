import { useQuery } from '@apollo/react-hooks'
import React from 'react'

import me from '../../assets/me.svg'
import { Wrapper } from '../../theme'
import Loading from '../Loading'
import { AboutSection } from './AboutStyles'
import { ABOUT } from './graphql'

function HeaderComponent() {
  const { loading, error, data } = useQuery(ABOUT, {
    variables: { id: 'ck4h6pxfvasyx0b66zim26s2i' }
  })
  if (loading || error || !data) return <Loading />

  const { header, personalDesc, professionalDesc } = data.about
  return (
    <div className="page">
      <AboutSection>
        <Wrapper>
          <img className="me" src={me} alt="me" />
          <h2>
            <i className="icon fas fa-terminal"></i>
            {header}
          </h2>
          <p
            className="two-cols"
            dangerouslySetInnerHTML={{ __html: personalDesc }}
          ></p>
          <a className="resume-link" href="">
            <i className="icon far fa-file-alt"></i>
            checkout my resume
          </a>

          <p
            className="two-cols"
            dangerouslySetInnerHTML={{ __html: professionalDesc }}
          ></p>
        </Wrapper>
      </AboutSection>
    </div>
  )
}

export default HeaderComponent
