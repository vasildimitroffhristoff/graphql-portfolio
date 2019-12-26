import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import Typist from 'react-typist'

import me from '../../assets/me.svg'
import { Wrapper } from '../../theme'
import Loading from '../Loading'
import { AboutSection } from './AboutStyles'
import { ABOUT } from './graphql'

function HeaderComponent() {
  const { loading, error, data } = useQuery(ABOUT, {
    variables: { id: 'ck4h6pxfvasyx0b66zim26s2i' }
  })
  if (loading || error || !data) return <div>...</div>

  const { header, personalDesc, professionalDesc } = data.about
  return (
    <div className="page">
      <AboutSection>
        <Wrapper>
          <img className="me" src={me} alt="me" />
          <h2>
            <Typist
              cursor={{
                show: true,
                blink: true,
                hideWhenDone: true
              }}
            >
              <Typist.Delay ms={600} />
              <i className="icon fas fa-terminal"></i>
              {header}
            </Typist>
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

          <div>
            <h3>Find me on</h3>
            <ul>
              <li>
                <a href="">Git</a>
              </li>
              <li>
                <a href="">Behance</a>
              </li>
              <li>
                <a href="">Bitbucket</a>
              </li>
              <li>
                <a href="">Email</a>
              </li>
            </ul>
          </div>
        </Wrapper>
      </AboutSection>
    </div>
  )
}

export default HeaderComponent
