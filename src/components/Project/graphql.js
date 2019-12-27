import gql from 'graphql-tag'

export const CURRENT_PROJECT = gql`
  query Project($id: ID) {
    project(where: { id: $id }) {
      id
      projectImg {
        url
      }
      projectName
      techStack
      projectUrl
      introParagraph
      imageGallery {
        url
      }
      description
    }
  }
`
