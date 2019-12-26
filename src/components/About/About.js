import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import Typist from 'react-typist'

import me from '../../assets/me.svg'
import { Wrapper } from '../../theme'
import { AboutSection, SocialLinks } from './AboutStyles'
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
              <Typist.Delay ms={1000} />
              <i className="icon fas fa-terminal"></i>
              <span>who am I</span>
              <Typist.Backspace count={8} delay={400} />
              <span>whoami</span>
            </Typist>
          </h2>
          <p
            className="two-cols"
            dangerouslySetInnerHTML={{ __html: personalDesc }}
          ></p>

          <h3>What I do:</h3>

          <p
            className="two-cols"
            dangerouslySetInnerHTML={{ __html: professionalDesc }}
          ></p>
          <SocialLinks>
            {/* <h3>Find me on:</h3> */}
            <ul>
              <li>
                <a href="" target="__blank">
                  <i className="fab fa-github"></i>Git
                </a>
              </li>
              <li>
                <a href="" target="__blank">
                  <i className="fab fa-linkedin"></i>Linkedin
                </a>
              </li>
              <li>
                <a href="" target="__blank">
                  <i className="fab fa-behance-square"></i>Behance
                </a>
              </li>
              <li>
                <a href="" target="__blank">
                  <i className="fab fa-bitbucket"></i>Bitbucket
                </a>
              </li>
              <li>
                <a href="" target="__blank">
                  <i className="fab fa-codepen"></i>Codepen
                </a>
              </li>
              <li>
                <a href="" target="__blank">
                  <i className="fas fa-envelope-square"></i>Email
                </a>
              </li>
            </ul>
          </SocialLinks>
          <a className="resume-link" href="">
            <i className="icon far fa-file-alt"></i>
            checkout my resume
          </a>
        </Wrapper>
      </AboutSection>
    </div>
  )
}

export default HeaderComponent
