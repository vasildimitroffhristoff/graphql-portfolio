import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import Typist from 'react-typist'

import gitCommits from '../../assets/git-commits.png'
import me from '../../assets/me.svg'
import Resume from '../../assets/vh_cv.pdf'
import { Wrapper } from '../../theme'
import { AboutSection, SocialLinks } from './AboutStyles'
import { ABOUT } from './graphql'

function AboutComponent() {
  const { loading, error, data } = useQuery(ABOUT, {
    variables: { id: 'ck4h6pxfvasyx0b66zim26s2i' }
  })
  if (loading || error || !data) return null

  const { whoAmI } = data.about

  return (
    <div className="page">
      <AboutSection>
        <Wrapper>
          <header>
            <img className="me" src={me} alt="me" />
            <h2>
              <i className="icon fas fa-terminal" />
              <Typist
                cursor={{
                  show: true,
                  blink: true,
                  hideWhenDone: true
                }}
              >
                <Typist.Delay ms={800} />
                <span>who am I</span>
                <Typist.Backspace count={8} delay={400} />
                <span>whoami</span>
              </Typist>
            </h2>
          </header>

          <p
            className="two-cols"
            dangerouslySetInnerHTML={{ __html: whoAmI }}
          />

          <a
            href="https://github.com/vasildimitroffhristoff"
            rel="noopener noreferrer"
            target="__blank"
          >
            <img
              className="git-commits"
              src={gitCommits}
              alt=""
            />
          </a>
          <SocialLinks>
            <h3>Find me on:</h3>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a
                    href="https://github.com/vasildimitroffhristoff"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i className="fab fa-github" />Git
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/vasil-hristoff-07186399/"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i className="fab fa-linkedin" />Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://bitbucket.org/vasillabs"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i className="fab fa-bitbucket" />Bitbucket
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.behance.net/vasilhristoff"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i className="fab fa-behance-square" />Behance
                  </a>
                </li>

                <li>
                  <a
                    href="https://codepen.io/vasilhristov"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i className="fab fa-codepen" />Codepen
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:vasildimitrovhristov@gmail.com"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i className="fas fa-envelope-square" />Email
                  </a>
                </li>
              </ul>
            </div>
          </SocialLinks>
          <a
            className="resume-link"
            href={Resume}
            target="__blank"
          >
            <i className="icon far fa-file-alt" />
            checkout my resume
          </a>
        </Wrapper>
      </AboutSection>
    </div>
  )
}

export default AboutComponent
