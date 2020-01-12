import { useQuery } from '@apollo/react-hooks'
import React, { useState } from 'react'
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
  if (loading || error || !data) return <div>...</div>

  const { whoAmI, whatIDo } = data.about

  return (
    <div className="page">
      <AboutSection>
        <Wrapper>
          <header>
            <img className="me" src={me} alt="me" />
            <h2>
              <i className="icon fas fa-terminal"></i>
              <Typist
                cursor={{
                  show: true,
                  blink: true,
                  hideWhenDone: true
                }}
              >
                <Typist.Delay ms={1000} />
                <span>who am I</span>
                <Typist.Backspace count={8} delay={400} />
                <span>whoami</span>
              </Typist>
            </h2>
          </header>

          <p
            className="two-cols"
            dangerouslySetInnerHTML={{ __html: whoAmI }}
          ></p>

          <h3>What do I do?</h3>
          <a href="https://github.com/vasildimitroffhristoff" target="__blank">
            <img className="git-commits" src={gitCommits} alt="" />
          </a>

          <p
            className="two-cols"
            dangerouslySetInnerHTML={{ __html: whatIDo }}
          ></p>
          <SocialLinks>
            <h3>Find me on:</h3>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a
                    href="https://github.com/vasildimitroffhristoff"
                    target="__blank"
                  >
                    <i className="fab fa-github"></i>Git
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vasil-hristoff-07186399/"
                    target="__blank"
                  >
                    <i className="fab fa-linkedin"></i>Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.behance.net/vasilhristoff"
                    target="__blank"
                  >
                    <i className="fab fa-behance-square"></i>Behance
                  </a>
                </li>
                <li>
                  <a href="https://bitbucket.org/vasillabs" target="__blank">
                    <i className="fab fa-bitbucket"></i>Bitbucket
                  </a>
                </li>
                <li>
                  <a href="https://codepen.io/vasilhristov" target="__blank">
                    <i className="fab fa-codepen"></i>Codepen
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:vasildimitrovhristov@gmail.com"
                    target="__blank"
                  >
                    <i className="fas fa-envelope-square"></i>Email
                  </a>
                </li>
              </ul>
            </div>
          </SocialLinks>
          <a className="resume-link" href={Resume} target="_blank">
            <i className="icon far fa-file-alt"></i>
            checkout my resume
          </a>
        </Wrapper>
      </AboutSection>
    </div>
  )
}

export default AboutComponent
