import React from 'react'
import { NavLink } from 'react-router-dom'

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
            <NavLink
              activeClassName="selected"
              exact
              to="/about"
            >
              about
            </NavLink>
            <NavLink
              activeClassName="selected"
              exact
              to="/projects"
            >
              work
            </NavLink>
            <a
              href="https://github.com/vasildimitroffhristoff?tab=repositories"
              target="__blank"
              className="git-link"
            >
              <i className="icon-git fab fa-github" />
            </a>
          </nav>
        </HeaderContent>
      </Wrapper>
    </StyledHeader>
  )
}
