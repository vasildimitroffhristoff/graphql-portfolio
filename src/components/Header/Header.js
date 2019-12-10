import { useQuery } from '@apollo/react-hooks'
import React from 'react'

import Loading from '../Loading'
import { POSTS } from './graphql'
import { Header } from './HeaderStyles'

function HeaderComponent() {
  const { loading, error, data } = useQuery(POSTS)

  if (loading || error || !data) return <Loading />

  return <Header>Vaskata</Header>
}

export default HeaderComponent
