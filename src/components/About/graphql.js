import gql from 'graphql-tag'

export const ABOUT = gql`
  query About($id: ID) {
    about(where: { id: $id }) {
      status
      id
      header
      whoAmI
      whatIDo
    }
  }
`
