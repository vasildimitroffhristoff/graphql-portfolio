import gql from 'graphql-tag'

export const POSTS = gql`
  query Posts {
    posts {
      id
      title
      content
    }
  }
`