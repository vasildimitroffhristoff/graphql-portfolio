import React from 'react'

import { GlobalStyles } from '../theme'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <section>
      <GlobalStyles />
      <Header />
      {children}
    </section>
  )
}
