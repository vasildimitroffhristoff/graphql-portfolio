import React from 'react'

import { GlobalStyles } from '../theme'
import Header from './Header'
import { withRouter } from 'react-router-dom'

function Layout({ children }) {
  return (
    <React.Fragment>
      <section>
        <GlobalStyles />
        <Header />
        {children}
      </section>
    </React.Fragment>
  )
}

export default withRouter(Layout)
