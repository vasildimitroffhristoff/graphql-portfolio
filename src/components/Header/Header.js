import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper } from '../../theme'
import Logo from '../Logo'
import { HeaderContent, StyledHeader } from './HeaderStyles'

export default function Header() {
  return (
    <StyledHeader>
      <Wrapper>
        <HeaderContent>
          <Logo />
          <nav>
            <Link exact to="/about">
              about
            </Link>
            <Link exact to="/projects">
              projects
            </Link>
            <a
              href="https://github.com/vasildimitroffhristoff?tab=repositories"
              target="__blank"
              className="git-link"
            >
              <i className="icon-git fab fa-github-square"></i>
            </a>
          </nav>
        </HeaderContent>
      </Wrapper>
    </StyledHeader>
  )
}
