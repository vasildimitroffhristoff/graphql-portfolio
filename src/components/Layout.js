import React from 'react'
import styled from 'styled-components'

import { GlobalStyles } from '../theme'
import Header from './Header'
import { withRouter } from 'react-router-dom'

function Layout({ children, location }) {
  const currentPage = location.pathname
  return (
    <React.Fragment>
      <section>
        <GlobalStyles />
        <Header />
        {children}
        {currentPage === '/about' && (
          <Footer>
            Interactive icon thanks to:{' '}
            <a
              href="https://lottiefiles.com/eugene"
              target="__blank"
            >
              @eugene / LottieFiles
            </a>
          </Footer>
        )}
      </section>
    </React.Fragment>
  )
}

const Footer = styled.footer`
  text-align: center;
  padding: 0 0 2rem 0;
  font-size: 1rem;

  a:hover {
    text-decoration: underline;
  }
`

export default withRouter(Layout)
